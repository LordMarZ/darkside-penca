# Darkside Bros — Penca Mundial 2026 · v2

App de pronósticos para el Mundial USA·MX·CA 2026.  
Integrada al **Darkside Universe** (login compartido con la Cuponera).

## Stack
- **Next.js 14** (App Router, JS sin TypeScript)
- **Supabase** (Auth con Google + PostgreSQL) — el mismo proyecto que la Cuponera
- **Vercel** (deploy)

## Configuración inicial

### 1. Instalar
```bash
npm install
```

### 2. Supabase
> ⚠️ Usar el **MISMO proyecto Supabase** que la Cuponera para login compartido.

1. En el SQL Editor de Supabase, ejecutar `supabase/schema.sql`
2. En **Authentication > Providers** habilitar **Google**
3. En **Authentication > URL Configuration** agregar:
   - Site URL: `http://localhost:3000`
   - Redirect URLs: `http://localhost:3000/dashboard` y tu dominio de Vercel

### 3. Variables de entorno
Copiar `.env.local.example` a `.env.local` y completar:
```
NEXT_PUBLIC_SUPABASE_URL=https://TU_PROYECTO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
ADMIN_KEY=clave_secreta
NEXT_PUBLIC_CUPONERA_URL=https://tu-cuponera.vercel.app
NEXT_PUBLIC_DUOMITY_URL=https://tu-duomity.vercel.app
```

### 4. Dev
```bash
npm run dev
# http://localhost:3000
```

## Sistema de puntos

| Resultado | Puntos |
|-----------|--------|
| Marcador exacto | 5 pts |
| Diferencia exacta | 3 pts |
| Solo el ganador | 1 pt |
| Pronóstico +24hs antes (si acertás) | +2 pts |
| Racha de 3+ exactos consecutivos | +3, +6, +9... |
| Campeón del torneo (pre-torneo) | +10 pts |
| Goleador del torneo (pre-torneo) | +5 pts |
| Quiz diario: 10/9 correctas | +3 pts |
| Quiz diario: 8 correctas | +2 pts |
| Quiz diario: 7 correctas | +1 pt |
| Login diario consecutivo | +1 pt/día |

## Cargar resultados (admin)
```bash
curl -X POST https://TU_DOMINIO.vercel.app/api/results \
  -H "Content-Type: application/json" \
  -d '{"match_id": 1, "score_home": 2, "score_away": 1, "admin_key": "TU_CLAVE"}'
```

## Multiverse Darkside
La penca comparte el auth de Supabase con el resto de las apps.
Los usuarios se loguean una sola vez con Google y pueden navegar entre:
- ☕ **Cuponera** — sellos y beneficios del café
- ⚽ **Penca Mundial** — pronósticos del Mundial 2026
- 🎮 **DuoMity Geek** — quiz geek por universos

El switcher de apps aparece en la barra superior de cada app.
