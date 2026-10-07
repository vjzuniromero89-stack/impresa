---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/SalesWorkspace.tsx","app/globals.css"]
---

# IMPRESA app shell and modules

Scope: the whole authenticated app (`app/page.tsx`, `components/*`, `app/globals.css`). Mode: Operate.

Audience and job: the owner and employees of a Nicaraguan print and embroidery shop, at a desktop PC in daylight. Employees register sales, payments and expenses; the owner reads money, receivables, expenses and business value, then closes the month.

Constraints: every existing function and calculation stays. Spanish only. Money always in C$ and US$. Local and production share one database.

Unresolved: no logo or brand manual supplied; native alert/confirm/prompt dialogs remain.

## Direction contract

THESIS: Money is drawn the way the shop holds it: as banknotes. Each currency has its own ink and totals are notes, not KPI cards. Refuses the blue SaaS dashboard of four equal metric tiles the app had.

OWN-WORLD: Pale banknote paper ground (#eef1ec), sheet panels with hairline borders, córdoba ink deep blue (#0f3d5c), dollar ink green (#1d6b4f), foil gold (#b0700f) reserved for the active month, the current module, and what still needs attention (receivables, open period, warnings). Guilloché line bands and a rosette seal appear only on total notes and on the brand mark (rail and login). Archivo for text with wide numerals on totals; Red Hat Mono for codes and dates. Delete actions are outlined and set apart.

STORY: Opening the app, the owner sees what the business is worth, where the money sits, who owes, and what was spent, then acts with one click.

FIRST VIEWPORT: Grouped left rail (Resumen, Día a día, Dinero, Inventario, Mes, Ajustes). Header with module name, month picker in foil, exchange rate, + Gasto, + Venta. Below, a full-width drenched blue note with the business value in C$ and US$, a composition bar by account and inventory, and gain or loss against opening. Under it, Dinero disponible beside Ventas y por cobrar.

SIGNATURE INTERACTION: Flipping a note between C$ and US$ swaps the leading currency everywhere, the numerals swapping in place and the note changing ink; numerals count only when a value in the same currency changes. Rows just saved stay lit until seen.

FORM: Córdoba banknote, candidate 7 of 7 on the ordered list. Seed key 0a0e949e.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
