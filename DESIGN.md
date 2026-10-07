---
name: IMPRESA
description: Shop money drawn as banknotes, with one ink per currency.
colors:
  paper: "#eef1ec"
  rail: "#e3e8e0"
  sheet: "#fbfcf9"
  sheet-2: "#f3f6f0"
  white: "#ffffff"
  line: "#cfd6cc"
  line-soft: "#e0e6dd"
  ink: "#16202a"
  ink-2: "#44525e"
  ink-3: "#5b6873"
  cordoba: "#0f3d5c"
  cordoba-2: "#14507a"
  cordoba-soft: "#dfeaf1"
  dolar: "#1d6b4f"
  dolar-soft: "#deeee6"
  dolar-deep: "#124a35"
  foil: "#b0700f"
  foil-text: "#7c4e06"
  foil-soft: "#f6e9cf"
  foil-line: "#dcc089"
  in: "#16733f"
  out: "#a8352b"
  danger-line: "#e2bfba"
  danger-soft: "#f7e6e3"
  danger-deep: "#7f251d"
  note-mist: "#d5e6ef"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "44px"
    fontWeight: 640
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
    fontFeature: "'tnum'"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "26px"
    fontWeight: 720
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 680
    lineHeight: 1.3
  figure:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "22px"
    fontWeight: 680
    lineHeight: 1.25
    fontVariation: "'wdth' 106"
    fontFeature: "'tnum'"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "12.5px"
    fontWeight: 620
    lineHeight: 1.45
  rail-label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "11px"
    fontWeight: 650
    letterSpacing: "0.06em"
  wordmark:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 800
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 120"
  mono:
    fontFamily: "'Red Hat Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  focus: "4px"
  note: "6px"
  small: "7px"
  control: "8px"
  box: "10px"
  panel: "12px"
  modal: "14px"
  pill: "99px"
spacing:
  control-gap: "8px"
  field-gap: "12px"
  panel-gap: "16px"
  panel-pad: "22px"
  note-pad: "30px"
  page-gutter: "36px"
components:
  button-primary:
    backgroundColor: "{colors.cordoba}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "9px 14px"
  button-primary-hover:
    backgroundColor: "{colors.cordoba-2}"
    textColor: "{colors.white}"
  button-default:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "9px 14px"
  button-default-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  button-small:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.small}"
    padding: "6px 10px"
  button-danger:
    backgroundColor: "transparent"
    textColor: "{colors.out}"
    rounded: "{rounded.small}"
    padding: "6px 10px"
  button-danger-hover:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.out}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 11px"
    height: "40px"
  month-picker:
    backgroundColor: "{colors.foil-soft}"
    textColor: "{colors.foil-text}"
    rounded: "{rounded.control}"
    height: "40px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "8px 10px"
  nav-item-active:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 10px"
  pill:
    backgroundColor: "{colors.sheet-2}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "2px 9px"
  pill-open:
    backgroundColor: "{colors.foil-soft}"
    textColor: "{colors.foil-text}"
    rounded: "{rounded.pill}"
  pill-closed:
    backgroundColor: "{colors.cordoba-soft}"
    textColor: "{colors.cordoba}"
    rounded: "{rounded.pill}"
  panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "20px 22px"
  note:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.cordoba}"
    typography: "{typography.display}"
    rounded: "{rounded.note}"
    padding: "24px 30px 78px"
  note-drenched:
    backgroundColor: "{colors.cordoba}"
    textColor: "{colors.white}"
    typography: "{typography.display}"
    rounded: "{rounded.note}"
    padding: "22px 30px 76px"
  note-drenched-dollar:
    backgroundColor: "{colors.dolar}"
    textColor: "{colors.white}"
---

# Design System: IMPRESA

## Overview

**Creative North Star: "The Córdoba Banknote"**

IMPRESA keeps the money of a Nicaraguan print and embroidery shop, and it draws that money the way the shop holds it: as banknotes. A total is a note with an engraved frame, a rosette seal, a serial and a guilloché band along its foot, printed in the ink of its currency. Córdobas are deep blue, dollars are green, and both values are always on the note; the reader only chooses which one is read first.

Everything around the notes is quiet stationery. A pale green-grey paper ground, a slightly darker rail, off-white sheets with hairline borders, and white fields to write in. The interface is dense and calm because it is used all day at a desktop to register sales and expenses in seconds; ornament is spent only on totals and on the brand seal. Gold foil is the one warm colour, and it means "live or still open": the working month, the current module, an open period, money still owed.

The system refuses the row of four equal metric tiles it replaced. A number that matters is a note with its breakdown beside it, so the figure can be explained from the accounts and movements it comes from.

**Key Characteristics:**
- Totals are banknotes: framed, sealed, serialled, with a guilloché band, in the ink of the leading currency.
- Two inks: córdoba blue and dollar green. Every amount shows both currencies, one in front and one in support.
- Foil gold is reserved for what is active or pending.
- Archivo on its width axis: the more a number matters, the wider it is set. Red Hat Mono for codes, dates and rates.
- Tonal paper layering with hairlines; shadows only for things that float.
- All imagery is line work drawn in code (SVG, `currentColor`); there are no raster assets.

## Colors

A cool, slightly green paper family carrying two currency inks, one foil accent and a plain in/out pair.

### Primary
- **Córdoba Ink** (`cordoba`): the C$ ink. Note values and frames when córdobas lead, córdoba balances, the drenched business-value note, and also the interface's own action colour: primary buttons, links, the active module icon, the trend line, closed-period state.
- **Córdoba Ink Lifted** (`cordoba-2`): hover of the primary button and the 2px focus outline.
- **Córdoba Wash** (`cordoba-soft`): focus halo on fields, closed-period and transfer pills, the C$ prefix cell on price fields, the resting colour of a just-saved row, text selection.

### Secondary
- **Dollar Ink** (`dolar`): the US$ ink. Note values and frames when dollars lead, dollar balances and account bars, the drenched note when dollars lead, progress fills on the value gauge and debt bars.
- **Dollar Wash** (`dolar-soft`) with **Dollar Deep** (`dolar-deep`) text: success messages, the cash method badge, a positive result block.

### Tertiary
- **Foil Gold** (`foil`): solid, only as the 7px dot beside the current module.
- **Foil Text** (`foil-text`) on **Foil Wash** (`foil-soft`), bordered by **Foil Line** (`foil-line`): the month picker, the open-period pill, warnings, pending amounts and receivables, the count on the active sales tab.

### Neutral
- **Banknote Paper** (`paper`): the page ground and the sticky header.
- **Rail Paper** (`rail`): the left rail and the trough of segmented tabs.
- **Sheet** (`sheet`): panels, notes, default buttons, the active rail item.
- **Sheet Shade** (`sheet-2`): table heads, row hover, read-only fields, bar tracks, inset notices.
- **White** (`white`): fields, table bodies, dropdown lists; the place where one writes.
- **Hairline** (`line`) and **Soft Hairline** (`line-soft`): control and rail borders; panel borders and row rules.
- **Ink** (`ink`), **Ink Secondary** (`ink-2`), **Ink Tertiary** (`ink-3`): text, supporting text and labels, and small meta (serials, timestamps, placeholders). Ink Tertiary holds 4.6:1 on the rail and 5.5:1 on a sheet; it is the lightest text colour in the system.
- **In** (`in`) and **Out** (`out`): money in, gains and matched totals; money out, losses, shortfalls and every delete action. Out has a soft family (`danger-soft`, `danger-line`, `danger-deep`) for error messages and delete hovers.
- **Note Mist** (`note-mist`): secondary text on a drenched note (8.9:1 on córdoba, 5.0:1 on dollar).

Four of these (`dolar-deep`, `foil-line`, `danger-deep`, `note-mist`) are written as literal values in the stylesheet rather than as custom properties; the values are normative, the missing variables are not.

### Named Rules
**The Two Inks Rule.** An amount in córdobas is blue and an amount in dollars is green. A cash-total note takes the ink of whichever currency leads. Blue also carries the interface's actions; green never does.
**The Foil Rule.** Gold marks what is live or still owed attention: the working month, the current module, an open period, a pending or receivable amount, a warning. A settled figure is never gold. Solid foil is a dot, not a text colour; gold text is always Foil Text on Foil Wash.
**The In And Out Rule.** Green In and red Out are reserved for the direction of money and for delete. They are never used to decorate a neutral figure.

## Typography

**Display Font:** Archivo variable with its width axis (with ui-sans-serif, system-ui, Segoe UI)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Red Hat Mono (with ui-monospace, Cascadia Mono, Consolas)

**Character:** One grotesque doing every job, widened as a figure gains importance so totals read like the engraved numerals of a note. A monospace sits beside it for the machine-like facts: serials, dates, the exchange rate.

### Hierarchy
- **Display** (640, 44px, 1.05, width 112%, -0.02em): the value on a note. 48px on the drenched note; 32px below 560px.
- **Headline** (720, 26px, 1.15, width 108%, -0.015em): the module name in the page header. 22px below 560px.
- **Figure** (680, 17 to 24px, 1.25, width 106 to 108%): secondary totals inside panels, statement balances, the sale total (30px, 660, width 112%).
- **Title** (680, 16px, 1.3): panel headings. 14px for headings inside a panel or note; 20px (700) for statement heads.
- **Body** (400, 14px, 1.45): everything else; tables at 13.5px. Explanatory paragraphs cap at 62 to 78ch.
- **Label** (620, 12.5px, sentence case): field labels, card and KPI labels, pills (12px).
- **Rail label** (650, 11px, 0.06em, uppercase): group headings in the left rail only.
- **Mono** (400, 11 to 13px): note serials (0.06em), dates, the rate chip, the supporting currency and percentage under a figure, chart tick labels.
- **Wordmark** (800, 18px, width 120%, 0.04em): the name IMPRESA beside the seal.

### Named Rules
**The Wide Numeral Rule.** Width follows importance: 100% for body, 106 to 108% for figures and the page heading, 112% for a note value, 120% for the wordmark. Nothing is widened for emphasis alone.
**The Tabular Rule.** Every number is set with tabular numerals, in tables, notes, fields and bold figures alike, so columns and counting numerals do not shift.
**The Mono Is For Codes Rule.** Red Hat Mono carries serials, dates, rates and the supporting-currency line. It is never used for labels, headings or prose.

## Layout

A fixed left rail (248px) and one scrolling column. The rail holds the brand seal, six module groups (Resumen, Día a día, Dinero, Inventario, Mes, Ajustes) and the session footer. The main column has a 36px gutter and its header and body are capped at 1320px. The header is sticky on the paper ground with a hairline under it: module name with the period pill and rate chip beneath, then the month picker and the two quick actions on the right.

A module opens with its total note at full width, then panels. The dashboard uses a 12-column grid with a 16px gap and spans of 3, 4, 5, 7 and 8; other modules use a 1.3 to 1 two-column split or auto-fit card rows (minimum 200 to 210px). Rhythm is tight: 8px between controls, 12px between fields and cards, 16px between panels, 20 by 22px inside a panel, 24 by 30px inside a note with 78px kept clear at its foot for the guilloché band.

Responsive behaviour: below 1180px notes stack their breakdown under the face and every dashboard span becomes full width. Below 900px the rail slides off-canvas behind a menu button and a scrim, the header stops being sticky and the gutter drops to 16px. Below 560px forms become one column, header actions go full width, the note serial is hidden and segmented tabs scroll sideways.

## Elevation & Depth

Depth is mostly tonal: paper, then rail, then sheet, then the white of a field. Sheets carry a hairline border and a barely visible contact shadow. A real shadow is kept for things that leave the page.

### Shadow Vocabulary
- **Contact** (`box-shadow: 0 1px 2px rgba(22,32,42,.05)`): panels, cards, notes, the active rail item and active tab.
- **Float** (`box-shadow: 0 8px 24px -8px rgba(22,32,42,.18), 0 2px 6px rgba(22,32,42,.06)`): dropdown lists, the drenched note, an account card on hover (with a 2px lift), the login card, the rail when open on a narrow screen.
- **Modal** (`box-shadow: 0 24px 60px -12px rgba(22,32,42,.4)`): the dialog sheet over a 42% ink scrim.
- **Focus halo** (`box-shadow: 0 0 0 3px` Córdoba Wash, with a Córdoba Ink border): fields and compound fields on focus. Everything else focuses with a 2px Córdoba Ink Lifted outline at 2px offset.

### Named Rules
**The Paper Stack Rule.** Separate surfaces by tone and hairline first. The Float shadow is for an element that sits above the page or is the single drenched note; it is never the resting state of an ordinary panel.

## Shapes

Two corner families. Stationery is soft: 8px on controls, 7px on small buttons and tab segments, 10px on tables and inset boxes, 12px on panels, 14px on the modal and login card, full pills for status. Notes are crisp: 6px outside with a 1px frame inset 6px in the note's ink at 28% opacity (3px corners), so a note reads as printed and cut, not as a card.

Borders are single 1px hairlines; dashed hairlines mean "empty" or "computed, not entered" (empty states, the conversion preview). Bars are 6 to 14px tall with 3 to 6px ends. Icons are drawn on a 24px grid with a 1.7px round stroke in `currentColor`, shown at 16px inline and 20px in the rail.

The engraved line work has two forms, both generated from sine curves: the guilloché band (14 phase-shifted lines, 0.6px non-scaling stroke) and the rosette (concentric 12-petal rings, 0.5px stroke). Both take the ink of their container.

### Named Rules
**The Engraving Rule.** Guilloché bands and rosettes belong to total notes and to the brand mark (rail, login card, sale sheet header). They sit behind or beside content at 22 to 34% opacity and never carry data. They are not a background for ordinary panels, tables or empty states.

## Components

### Note (signature)
The total of a module. A sheet with the inset frame, a 44px rosette seal, the label in the note's ink (14px, 680), an optional mono serial such as `IMP 2026-10`, and the currency flip at the right. Below: the leading value in Display, the other currency at 18px (620) with the rate in mono, then a one-line caption. A second column holds the breakdown as label and value rows on soft hairlines. The guilloché band runs along the foot at 30% opacity.
- **Inks:** córdoba by default, switching to dollar when US$ leads; `ink` for a value that is not cash (inventory); `out` red for what is owed (debts). The ink and red notes keep their colour when the currency is flipped.
- **Drenched:** one per screen at most, used for the business value on the dashboard. The whole note is filled with the leading ink, text is white with Note Mist for support, it takes the Float shadow, and its side column holds the composition bar: a 14px segmented bar with a two-column legend giving each part in both currencies and its share.
- **Motion:** flipping swaps the two numerals in place (0.32s rise) and the note changes ink over 0.5s; a value that changes within the same currency counts to its new figure in 520ms. Both are skipped under reduced motion.

### Currency flip
A two-segment toggle (C$ / US$) in a tinted trough; the pressed segment is filled with the note's ink and white text. It sets the leading currency for the whole app and is remembered.

### Buttons
- **Shape:** gently rounded (8px), 9 by 14px, 14px text at 620. Small variant 6 by 10px, 12.5px, 7px corners.
- **Primary:** Córdoba Ink fill, white text; hover lifts to Córdoba Ink Lifted. One or two per view (register, save, + Venta).
- **Default:** sheet fill with a hairline; hover turns white with a darker border. Pressing moves any button down 1px.
- **Delete:** outlined in Danger Line with Out text and no fill, 14px apart from its neighbours; hover fills with Danger Soft. The full reset sits in its own bordered panel at the foot of settings, with a button that fills solid red only on hover.
- **Link button:** Córdoba Ink text with a small arrow that slides 3px on hover; used in panel heads to open the related module.
- **Disabled:** 50% opacity, not-allowed cursor.

### Pills
Full-round, 12px at 620, 2 by 9px. Neutral on Sheet Shade with a soft hairline; gold for open or pending; Córdoba Wash for closed, paid-by-transfer and "yes"; Dollar Wash for cash.

### Segmented tabs
Sub-views inside a module sit in a Rail Paper trough (9px corners, 3px padding); the active segment is a sheet with the Contact shadow. A count rides in a mono chip that turns gold on the active segment.

### Cards / Containers
- **Panel:** sheet, soft hairline, 12px corners, Contact shadow, 20 by 22px padding, 16px apart. A panel head pairs the title with a link button.
- **Figure strip:** a single bordered sheet divided by soft hairlines into cells (label, figure, small note), not separate tiles.
- **Account card:** a card whose balance is printed in its currency's ink; lifts on hover.
- **Inset notices:** Sheet Shade box for neutral notes, Foil Wash for warnings, Dollar Wash for success, Danger Soft for errors, Córdoba Wash for a closed period; all 8px corners at 13 to 13.5px. Empty states are a centred sentence in a dashed box that says what to do next.

### Inputs / Fields
- **Style:** white, 1px hairline, 8px corners, 40px tall, 14px text; label above at 12.5px (620) in Ink Secondary.
- **Hover / Focus:** border darkens on hover; focus sets a Córdoba Ink border and the 3px Córdoba Wash halo.
- **Compound fields:** amount plus currency select, or a C$ prefix cell on Córdoba Wash, share one border and one halo.
- **Read-only / computed:** Sheet Shade fill; a computed conversion shows in a dashed box.
- **Managed select:** a button styled as a field opening a white list with the Float shadow; each option can carry a small red remove control.

### Month picker
The working month, in gold: Foil Wash with a Foil Line border, 40px tall, previous and next chevrons around a month and a year select, month names in Spanish.

### Navigation
The rail lists modules under uppercase group labels. Items are 14px at 550 in Ink Secondary with a 20px line icon; hover tints the row. The current module becomes a sheet with a hairline ring, heavier text (680), a Córdoba Ink icon and a 7px foil dot at the right edge.

### Tables
White body in a soft-hairline frame with 10px corners; sticky Sheet Shade head at 12px (650); rows ruled by soft hairlines and tinted on hover; numeric columns right-aligned and tabular. Money in and out is coloured by direction. A row that was just saved flashes and then rests on Córdoba Wash until the pointer passes over it.

### Data marks
Bars are thin rounded tracks on Sheet Shade that grow from the left over 0.8s, coloured by meaning (currency ink, In, Out). The trend chart is a 2.2px Córdoba Ink line that draws itself over 1s above a 7% area, with three grid hairlines, mono tick labels and a caption giving the hovered closing in both currencies.

## Do's and Don'ts

### Do:
- **Do** present a module's main total as a Note with its breakdown beside it, and keep the drenched note to a single one per screen.
- **Do** show every amount in both currencies: the leading one large in its ink, the other below it smaller or in mono.
- **Do** print córdoba amounts in Córdoba Ink and dollar amounts in Dollar Ink wherever a balance is tied to one currency.
- **Do** keep gold for the working month, the current module, open periods, pending amounts and warnings, as Foil Text on Foil Wash.
- **Do** set figures wider as they matter more (106 to 112%) and always with tabular numerals.
- **Do** outline delete actions in red with no fill and set them 14px apart from the safe actions beside them.
- **Do** draw new icons and ornament as SVG strokes in `currentColor` (24px grid, 1.7px round stroke for icons).
- **Do** honour reduced motion: count-ups, bar growth, the line draw and the note flip all collapse to an instant change.

### Don't:
- **Don't** lay out totals as a row of equal metric tiles; that is the dashboard this system replaced.
- **Don't** use guilloché bands or rosettes on ordinary panels, tables or empty states; they belong to notes and the brand mark.
- **Don't** use gold on a settled figure, or solid Foil Gold as a text colour (it is 3.9:1 on a sheet).
- **Don't** use Dollar Ink for buttons, links or focus; actions are Córdoba Ink.
- **Don't** give a resting panel the Float shadow, or round a note past 6px so that it reads as a card.
- **Don't** set labels, headings or prose in Red Hat Mono.
- **Don't** use text lighter than Ink Tertiary on any paper tone.
