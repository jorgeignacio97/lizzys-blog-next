# Lizzy's

Sitio web para **Lizzy's**, taller artesanal de bordado, pintura textil y rediseño ubicado en Lautaro, Región de la Araucanía, Chile.

Incluye página principal con presentación de servicios y portafolio de arte (`/swanson`) con obras en acrílico, grafito, lápiz de color y óleo.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · CSS Modules
- **Phosphor Icons** · **Embla Carousel**
- **pnpm**

## Estructura

```
src/
  app/
    (main)/       # Layout con Header + Footer (sitio principal)
    swanson/      # Portafolio de arte (layout independiente)
  features/       # Hero, Layout, Products, WhyUs, WeTalk, Swanson
  shared/         # Componentes e íconos reutilizables
```

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción
pnpm lint       # ESLint
pnpm tsc --noEmit  # typecheck
```
