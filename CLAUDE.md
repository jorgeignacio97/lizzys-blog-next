# CLAUDE.md

## Stack (versiones fijas)
- React 19.2 · Vite · TypeScript (strict)
- React Compiler ACTIVADO (memoización automática; ver sección React Compiler)
- Estado servidor: TanStack Query · Estado cliente: Zustand
- Routing: TanStack Router (type-safe) · HTTP: Axios
- Forms: React Hook Form + Zod · Validación: Zod (fuente única de tipos)
- UI: Tailwind CSS v4 · Iconos: lucide-react · Toasts: sonner
- Mapas: react-map-gl + maplibre-gl
- Test: Vitest + Testing Library + MSW
- Backend/infra: Supabase · Deploy: Vercel

## Comandos
- install: pnpm install
- dev: pnpm dev
- build: pnpm build
- lint: pnpm lint
- typecheck: pnpm tsc --noEmit
- test: pnpm test

## Definition of done (el agente lo corre antes de terminar)
- pnpm lint && pnpm tsc --noEmit && pnpm test deben pasar.
- Arreglar las violaciones, no silenciarlas (no // eslint-disable salvo justificación en comentario).

## Arquitectura (Screaming / feature-based)
- Carpetas raíz: config/, features/, shared/
- features/<nombre>/ contiene: components, hooks, services, state, types, utils
- Cada feature expone su API pública SOLO vía index.ts. Imports externos
  apuntan al index; el interior se importa por ruta directa, nunca por barrel.
- config/ = constantes, env, theme, setup de libs (queryClient, router,
  instancia de axios, cliente de supabase). SIN lógica de negocio.
- shared/ = misma estructura que una feature, para lo reutilizable entre features.
- Regla dura: si algo tiene lógica de negocio, no va en config/.

## Reglas de estado (dueño único — no duplicar)
- Datos de servidor: SOLO TanStack Query. Prohibido copiarlos a Zustand o a useState.
- UI/cliente: Zustand, con selectores (nunca consumir el store entero).
- Navegación/filtros: search params del router, no Zustand.
- Formularios: React Hook Form.

## React Compiler (activado en build)
- NO escribir useMemo/useCallback/React.memo manual; la memoización la hace el
  compiler. Es aditivo: código nuevo va sin memo, no borrar los existentes en bloque.
- Excepción (mantener memo manual): valores que cruzan a librerías de terceros NO
  compiladas, o estabilidad referencial que necesita un dep de useEffect a través de
  un límite que el compiler no ve. Medir con el Profiler antes de añadirla.
- Respetar Rules of React: no mutar props/estado, no hooks condicionales, no leer
  refs en render, no setState dentro de efectos. Si se violan, el compiler omite ese
  componente EN SILENCIO y se pierde la optimización sin aviso.
- eslint-plugin-react-hooks (con diagnósticos del compiler) en CI, corrido ANTES de
  confiar en el compiler.
- Vitest no aplica la transform: fixtures que mutan a propósito llevan "use no memo".
- Setup según versión de Vite (no pegar tutoriales viejos):
    - Vite 8 + @vitejs/plugin-react v6: reactCompilerPreset() vía @rolldown/plugin-babel.
    - Vite <=7: react({ babel: { plugins: ['babel-plugin-react-compiler'] } }).
    - React 19 no necesita runtime extra.

## Idioms por librería
- React 19: NO usar forwardRef (ref es prop normal). Usar Actions / useActionState
  para mutaciones de formulario cuando aplique. NO React.FC.
- Zustand: stores en features/<nombre>/state, divididos en slices. Exponer hooks
  selectores (useUser = () => useStore(s => s.user)), no el store crudo. Selector que
  devuelve un objeto -> useShallow; para un solo valor, selector atómico directo.
- TanStack Query:
    - Firma de objeto v5 en useQuery/useMutation (no firma posicional v4).
    - Sin onSuccess/onError en useQuery (removidos en v5); side-effects en mutaciones.
    - Query keys como arrays tipados y centralizados por feature (userKeys.detail(id)).
    - queryOptions() para configs tipadas reutilizables junto a los key factories.
    - Funciones de fetch en features/<nombre>/services. No useEffect+fetch manual.
    - Pasar el signal del AbortController al fetcher.
    - Tras mutación: invalidar las queries afectadas; en optimistic updates usar onSettled.
    - staleTime explícito por query (no dejar el 0 por defecto en todo).
- TanStack Router: rutas type-safe, validar search params con Zod, cargar
  datos con loaders cuando convenga.
- Zod + RHF: definir el schema Zod primero; derivar el tipo con z.infer.
  Una sola fuente de verdad. Conectar con zodResolver.
- Axios: una instancia única en config/api con interceptors (auth, errores).
  No instanciar axios suelto en componentes.
- Supabase: cliente único en config/. Acceso siempre vía services, nunca
  llamadas directas desde componentes.
- sonner: feedback de mutaciones con toast.promise. No tragarse errores en silencio.
- Mapas: react-map-gl declarativo. Instancia vía ref, no estado, para evitar
  re-renders. Tipos de maplibre-gl, no @types/leaflet.

## Manejo de errores
- Errores de servidor: throwOnError en queries críticas + Error Boundary por ruta o
  sección (react-error-boundary + QueryErrorResetBoundary para reintentar).
- Validar respuestas en el borde con Zod; nunca confiar en el contrato del backend.

## Tailwind v4
- Config en CSS con @theme (NO tailwind.config.js). Entrada: @import "tailwindcss".
- Usar el plugin de Vite (@tailwindcss/vite), no PostCSS.
- Solo tokens definidos en @theme. Sin valores arbitrarios [..] salvo
  justificación en comentario.
- Clases condicionales con clsx/cva, nunca concatenación de strings.
- Patrones repetidos -> componente (Button, Card), no @apply.
- En archivos CSS-module/scoped, añadir @reference a la entrada Tailwind.

## Testing
- Vitest + Testing Library. Mockear la red con MSW; no mockear fetch/axios a mano.
- Probar comportamiento visible, no detalles internos. Tests co-locados con el archivo
  o en __tests__ dentro de la feature.

## Estilo de código
- Clean code, legibilidad primero. No abstraer hasta el tercer uso (regla de 3).
- Sin sobreingeniería: no patrones ni capas que el tamaño actual no justifique.
- Nombres explícitos. Funciones cortas, una responsabilidad.
- Orden interno de un componente: hooks -> valores derivados -> efectos -> handlers
  -> guard clauses -> JSX.
- Estado derivado: calcular en render, no con useEffect. Un efecto por responsabilidad.

## Restricciones duras
- Nunca commitear credenciales ni keys de Supabase.
- No añadir dependencias sin justificación.
- Respetar las versiones fijas de arriba.