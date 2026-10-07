'use client';
import {createContext,useContext,useEffect,useRef,useState} from 'react';
import type {ReactNode} from 'react';

export type Cur='C$'|'US$';
const fmt=(n:number)=>new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(n)||0);

// Moneda que va al frente en los billetes de totales. Los dos valores se
// muestran siempre; esto solo decide cuál se lee primero.
const LEAD_KEY='impresa_moneda_principal';
const LeadCtx=createContext<{lead:Cur;setLead:(c:Cur)=>void}>({lead:'C$',setLead:()=>{}});
export function LeadCurrencyProvider({children}:{children:ReactNode}){
 const [lead,setLeadState]=useState<Cur>('C$');
 useEffect(()=>{try{const v=localStorage.getItem(LEAD_KEY);if(v==='US$'||v==='C$')setLeadState(v)}catch{}},[]);
 const setLead=(c:Cur)=>{setLeadState(c);try{localStorage.setItem(LEAD_KEY,c)}catch{}};
 return <LeadCtx.Provider value={{lead,setLead}}>{children}</LeadCtx.Provider>;
}
export const useLeadCurrency=()=>useContext(LeadCtx);
// Texto de un monto con la moneda elegida al frente y la otra como apoyo.
export function useDual(rate:number){
 const {lead}=useLeadCurrency();const usd=(n:number)=>rate>0?n/rate:0;
 return {lead:(n:number)=>lead==='C$'?`C$${fmt(n)}`:`US$${fmt(usd(n))}`,other:(n:number)=>lead==='C$'?`US$${fmt(usd(n))}`:`C$${fmt(n)}`};
}

// Número que cuenta hasta su nuevo valor cuando cambia (mes, moneda o datos).
export function CountUp({value,prefix=''}:{value:number;prefix?:string}){
 const [shown,setShown]=useState(value);
 const from=useRef(value);
 useEffect(()=>{
  const start=from.current,end=value;
  if(start===end)return;
  const reduce=typeof window!=='undefined'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){from.current=end;setShown(end);return}
  let raf=0;const t0=performance.now(),dur=520;
  const tick=(t:number)=>{const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4);const v=start+(end-start)*e;from.current=v;setShown(v);if(p<1)raf=requestAnimationFrame(tick);else{from.current=end;setShown(end)}};
  raf=requestAnimationFrame(tick);
  // Si el navegador no dibuja (pestaña en segundo plano), el número final se pone de todos modos.
  const safety=setTimeout(()=>{cancelAnimationFrame(raf);from.current=end;setShown(end)},dur+250);
  return ()=>{cancelAnimationFrame(raf);clearTimeout(safety)};
 },[value]);
 return <span className="countUp">{prefix}{fmt(shown)}</span>;
}

// Banda de líneas finas de seguridad, como la de un billete. Se dibuja con
// senos desfasados; no lleva datos, solo va detrás de los totales.
export function Guilloche({lines=14,className=''}:{lines?:number;className?:string}){
 const W=600,H=120,steps=120,paths:string[]=[];
 for(let k=0;k<lines;k++){
  const phase=(k/lines)*Math.PI*2;let d='';
  for(let i=0;i<=steps;i++){
   const x=(i/steps)*W,t=(i/steps)*Math.PI*2;
   const env=0.55+0.45*Math.sin(t*1.5+phase*0.5);
   const y=H/2+Math.sin(t*4+phase)*(H*0.36)*env+Math.sin(t*9-phase)*4;
   d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);
  }
  paths.push(d);
 }
 return <svg className={'guilloche '+className} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">{paths.map((d,i)=><path key={i} d={d} fill="none" stroke="currentColor" strokeWidth=".6" vectorEffect="non-scaling-stroke"/>)}</svg>;
}
export function Rosette({petals=12,rings=9,className=''}:{petals?:number;rings?:number;className?:string}){
 const paths:string[]=[];
 for(let k=0;k<rings;k++){
  const phase=(k/rings)*Math.PI*2/petals*3,R=30+k*1.6,a=9+k*0.9;let d='';
  for(let i=0;i<=240;i++){const th=(i/240)*Math.PI*2,r=R+a*Math.sin(petals*th+phase)+3*Math.sin((petals/2)*th-phase);d+=(i?'L':'M')+(60+r*Math.cos(th)).toFixed(2)+' '+(60+r*Math.sin(th)).toFixed(2)}
  paths.push(d+'Z');
 }
 return <svg className={'rosette '+className} viewBox="0 0 120 120" aria-hidden="true">{paths.map((d,i)=><path key={i} d={d} fill="none" stroke="currentColor" strokeWidth=".5"/>)}</svg>;
}
export function BrandSeal({size=40}:{size?:number}){
 return <span className="brandSeal" style={{width:size,height:size}}><Rosette petals={10} rings={6}/><b>I</b></span>;
}

export function CurrencyFlip(){
 const {lead,setLead}=useLeadCurrency();
 return <div className="curFlip" role="group" aria-label="Moneda al frente">{(['C$','US$'] as Cur[]).map(c=><button key={c} type="button" aria-pressed={lead===c} className={lead===c?'on':''} onClick={()=>setLead(c)}>{c}</button>)}</div>;
}

// Total en forma de billete: una moneda al frente, la otra debajo.
export function Note({label,nio,rate,caption,tone='cordoba',drenched=false,children,flip=true,serial}:{label:string;nio:number;rate:number;caption?:ReactNode;tone?:'cordoba'|'ink'|'gasto';drenched?:boolean;children?:ReactNode;flip?:boolean;serial?:string}){
 const {lead}=useLeadCurrency();
 const usd=rate>0?nio/rate:0;
 const front=lead==='C$'?{c:'C$',v:nio}:{c:'US$',v:usd},back=lead==='C$'?{c:'US$',v:usd}:{c:'C$',v:nio};
 return <section className={`note tone-${tone} ${drenched?'drenched':''} lead-${lead==='C$'?'c':'u'}`}>
  <Guilloche className="noteBand"/>
  <div className="noteFace">
   <div className="noteTop"><Rosette className="noteSeal"/><h2>{label}</h2>{serial&&<span className="noteSerial">{serial}</span>}{flip&&<CurrencyFlip/>}</div>
   <p className="noteValue"><CountUp key={front.c} value={front.v} prefix={front.c}/></p>
   <p className="noteBack"><CountUp key={back.c} value={back.v} prefix={back.c}/><span>al cambio de C${rate.toFixed(2)}</span></p>
   {caption&&<p className="noteCaption">{caption}</p>}
  </div>
  {children&&<div className="noteSide">{children}</div>}
 </section>;
}

// Barra de composición: cada tramo es una parte real del total.
export function Composition({parts,rate}:{parts:{label:string;value:number;tone:string}[];rate:number}){
 const total=parts.reduce((n,p)=>n+Math.max(0,p.value),0);
 const d=useDual(rate),shown=parts.filter(p=>p.value>0),zeros=parts.length-shown.length;
 if(total<=0)return <p className="compEmpty">Todavía no hay inventario ni saldos registrados.</p>;
 return <div className="comp">
  <div className="compBar" role="img" aria-label={parts.map(p=>`${p.label} ${(Math.max(0,p.value)/total*100).toFixed(0)}%`).join(', ')}>{shown.map(p=><i key={p.label} className={'seg '+p.tone} style={{width:`${p.value/total*100}%`}}/>)}</div>
  <ul className="compLegend">{shown.map(p=><li key={p.label}><i className={'dot '+p.tone}/><span>{p.label}</span><b>{d.lead(p.value)}</b><small>{d.other(p.value)} · {(p.value/total*100).toFixed(0)}%</small></li>)}</ul>
  {zeros>0&&<p className="compZero">{zeros} {zeros===1?'parte en cero':'partes en cero'}: {parts.filter(p=>!(p.value>0)).map(p=>p.label).join(', ')}</p>}
 </div>;
}

export function Bars({data,rate,tone='gasto'}:{data:{label:string;value:number}[];rate:number;tone?:string}){
 const d=useDual(rate);
 if(!data.length)return null;
 const sorted=[...data].sort((a,b)=>b.value-a.value),max=Math.max(...sorted.map(x=>x.value),1),total=sorted.reduce((n,x)=>n+x.value,0)||1;
 return <ul className="bars">{sorted.slice(0,7).map(x=><li key={x.label}><span>{x.label}</span><div><i className={tone} style={{width:`${Math.max(2,x.value/max*100)}%`}}/></div><b>{d.lead(x.value)}</b><small>{d.other(x.value)} · {(x.value/total*100).toFixed(0)}%</small></li>)}</ul>;
}

export function TrendLine({data,rate}:{data:{label:string;value:number}[];rate:number}){
 const [hover,setHover]=useState<number|null>(null);
 const d=useDual(rate);
 if(!data.length)return null;
 const W=640,H=200,padX=18,padT=18,padB=30;
 const max=Math.max(...data.map(d=>d.value),1),min=Math.min(...data.map(d=>d.value),0),range=Math.max(max-min,1);
 const x=(i:number)=>data.length===1?W/2:padX+(i/(data.length-1))*(W-padX*2);
 const y=(v:number)=>padT+(1-(v-min)/range)*(H-padT-padB);
 const line=data.map((d,i)=>`${i?'L':'M'}${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`).join(' ');
 const area=`${line} L${x(data.length-1).toFixed(1)} ${H-padB} L${x(0).toFixed(1)} ${H-padB} Z`;
 const h=hover??data.length-1;
 return <figure className="trend">
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Valor del negocio en los últimos ${data.length} cierres`} onMouseLeave={()=>setHover(null)}>
   {[0,.5,1].map(t=><line key={t} className="trendGrid" x1={padX} x2={W-padX} y1={padT+t*(H-padT-padB)} y2={padT+t*(H-padT-padB)}/>)}
   <path className="trendArea" d={area}/><path className="trendPath" d={line} pathLength={1}/>
   {data.map((d,i)=><g key={d.label}><circle className={'trendDot'+(i===h?' on':'')} cx={x(i)} cy={y(d.value)} r={i===h?5:3}/><rect className="trendHit" x={x(i)-(W/data.length)/2} y={0} width={W/data.length} height={H} onMouseEnter={()=>setHover(i)}/><text className="trendLabel" x={x(i)} y={H-8} textAnchor="middle">{d.label}</text></g>)}
  </svg>
  <figcaption><span>Cierre {data[h].label}</span><b>{d.lead(data[h].value)}</b><small>{d.other(data[h].value)}</small></figcaption>
 </figure>;
}

const ICONS:Record<string,string>={
 trash:'M4 7h16 M9 7V4h6v3 M6 7l1 13h10l1-13 M10 11v6 M14 11v6',
 save:'M5 3h11l3 3v15H5z M8 3v6h7V3 M8 21v-7h8v7',
 check:'M4 12.5l5 5L20 6.5',
 alert:'M12 4l9 16H3z M12 10v5 M12 18h.01',
 info:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M12 11v6 M12 7.5h.01',
 plus:'M12 5v14 M5 12h14',
 arrowRight:'M5 12h14 M13 6l6 6-6 6',
 up:'M6 15l6-6 6 6',
 down:'M6 9l6 6 6-6',
 swap:'M4 8h14l-3-3 M20 16H6l3 3',
 star:'M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.9 6.6 19.8l1.1-6.1L3.2 9.4l6.1-.8z',
 menu:'M4 7h16 M4 12h16 M4 17h16',
 close:'M6 6l12 12 M18 6L6 18',
 lock:'M6 11h12v9H6z M8.5 11V8a3.5 3.5 0 0 1 7 0v3',
 left:'M15 6l-6 6 6 6',
 right:'M9 6l6 6-6 6',
};
export function Icon({name,size=16}:{name:string;size?:number}){
 return <svg className="icon" aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={ICONS[name]||ICONS.info}/></svg>;
}

const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
// Selector de mes en español (el control nativo del navegador sale en el idioma del equipo).
export function MonthPicker({value,onChange}:{value:string;onChange:(m:string)=>void}){
 const y=+value.slice(0,4),m=+value.slice(5,7);
 const set=(yy:number,mm:number)=>{const d=new Date(yy,mm-1,1);onChange(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`)};
 const now=new Date().getFullYear(),years=Array.from(new Set([y,...Array.from({length:7},(_,i)=>now-5+i)])).sort();
 return <div className="monthPick" role="group" aria-label="Mes de trabajo"><button type="button" aria-label="Mes anterior" onClick={()=>set(y,m-1)}><Icon name="left"/></button><select aria-label="Mes" value={m} onChange={e=>set(y,+e.target.value)}>{MESES.map((n,i)=><option key={n} value={i+1}>{n}</option>)}</select><select aria-label="Año" value={y} onChange={e=>set(+e.target.value,m)}>{years.map(v=><option key={v} value={v}>{v}</option>)}</select><button type="button" aria-label="Mes siguiente" onClick={()=>set(y,m+1)}><Icon name="right"/></button></div>;
}
