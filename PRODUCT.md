# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Dueño de IMPRESA** (taller de estampados, bordados e impresiones en Nicaragua). Revisa el dinero, el valor del negocio y cierra el mes.
- **Empleados.** Registran ventas, abonos y gastos durante el día.
- Se usa sobre todo en computadora; el celular es secundario.

## Product Purpose

Llevar en un solo lugar el dinero real del negocio: ventas y cobros, gastos, inventario, cuentas de banco y efectivo, deudas, cotizaciones y cierre mensual. Éxito = al abrir la app el dueño sabe cuánto dinero hay, cuánto le deben, cuánto gastó y cuánto vale el negocio, sin sumar nada a mano.

## Positioning

Está hecha a la medida de un solo negocio: doble moneda C$ / US$ con tipo de cambio propio, y una regla financiera fija (valor del negocio = inventario + bancos + efectivo, comparado contra un capital inicial histórico).

## Operating Context

- Cada venta o gasto mueve una cuenta real (BAC córdobas, BAC dólares, efectivo); las transferencias internas no cambian el total.
- El mes es la unidad de trabajo: se elige un mes, se registra, se cuenta inventario y al final se hace el cierre definitivo, que pasa a ser la apertura del mes siguiente.
- El inventario se carga a mano o desde Excel.

## Capabilities and Constraints

- Módulos: Dashboard, Ventas (y cobros por cuenta), Gastos, Inventario (y detalle por mes), Banco y Efectivo, Control de dinero, Contabilidad, Deudas, Cierre de mes, Cotizaciones, Usuarios, Reportes, Configuración.
- Next.js 15 + React 19, todo en cliente; datos en Supabase con la llave pública. Publicada en Cloudflare; cada push a `main` despliega.
- La base de datos local y la publicada son la misma: no hay entorno de pruebas.
- Ventas y gastos son registros informativos para el valor del negocio; el valor sale de inventario + cuentas.
- Toda la interfaz está en español.

## Brand Commitments

- Nombre: IMPRESA. Lema usado en la factura: "Estampados · Bordados · Impresiones".
- No hay logo ni manual de marca entregados.

## Evidence on Hand

- Datos reales del negocio en Supabase. No hay fotos, logo ni material de marca en el repositorio.

## Product Principles

1. El dinero siempre se muestra en C$ y US$.
2. Un número en pantalla debe poder explicarse: de qué cuentas o movimientos sale.
3. Registrar una venta o un gasto debe tomar segundos.
4. Un mes cerrado no se toca.
5. Ninguna función existente se pierde al rediseñar.
