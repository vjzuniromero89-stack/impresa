import './globals.css';
import type {Metadata} from 'next';
import {Archivo,Red_Hat_Mono} from 'next/font/google';

const archivo=Archivo({subsets:['latin'],axes:['wdth'],variable:'--font-archivo',display:'swap'});
const mono=Red_Hat_Mono({subsets:['latin'],variable:'--font-mono',display:'swap'});

export const metadata:Metadata={title:'IMPRESA',description:'Control administrativo simple para impresión y bordado'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es" className={`${archivo.variable} ${mono.variable}`}><body>{children}</body></html>}
