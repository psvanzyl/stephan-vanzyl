# stephan-vanzyl

Persoonlijke profielsite van **Stephan van Zyl — transportconsultant**.
Live: https://i.wegowow.duckdns.org

## Stack

Gekozen op basis van een reverse-engineering van transportbeat.nl (zie `docs/stack-analyse.md`),
waarnaar de opbouw en het gedrag van deze site zijn gemodelleerd:

- **Next.js 16** (App Router, React 19) — het origineel levert assets onder `/_next/static/`
- **Tailwind CSS v4** — het origineel gebruikt `--tw-*` custom properties, `@layer` en `@theme`
- **framer-motion** — scroll-reveals
- **lucide-react** — iconen
- **IBM Plex Sans / Mono** via `next/font`
- Deployment: **Coolify** (Dockerfile-build, standalone output, poort 3000)

## Opbouw

Eén pagina met ankersecties:

| sectie | id | bestand |
|---|---|---|
| Hero met achtergrondcarrousel | — | `src/components/Hero.tsx` |
| Diensten (overlapt de hero) | `#diensten` | `src/components/Services.tsx` |
| Over (carrousel: Over mij / Expertise / Visie) | `#over` | `src/components/About.tsx` |
| Focusgebieden | `#focusgebieden` | `src/components/Focus.tsx` |
| Aanpak | `#aanpak` | `src/components/Approach.tsx` |
| Projecten | `#projecten` | `src/components/Projects.tsx` |
| Opdrachtgevers | — | `src/components/Clients.tsx` |
| Software & prototypes (met filters) | `#software` | `src/components/Software.tsx` |
| Referenties | `#referenties` | `src/components/Testimonials.tsx` |
| Contact | `#contact` | `src/components/Contact.tsx` |

## Nog aan te vullen

Alle ontbrekende gegevens staan in **`src/content/site.ts`** en zijn daar gemarkeerd met
`null` + een `// TODO`-comment. De UI toont op die plekken een rustige "Nog aan te vullen"-
markering in plaats van een lege regel. Zoek in de repo op `TODO` voor de volledige lijst:
e-mailadres, telefoon, LinkedIn, KvK/BTW, opleidingen, eerdere rollen, visietekst,
opdrachtgevers, referenties, projectperiodes en -omvang.

Kleuren en typografie pas je aan in één blok bovenin `src/app/globals.css` (`@theme`).

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productiebuild
```

## Deployen

Coolify-app `stephan-vanzyl` (project *Stephan van Zyl*, server `localhost`), build pack
**Dockerfile**, poort **3000**, domein `https://i.wegowow.duckdns.org`. Een push naar `main`
kan via de Coolify-UI of API opnieuw gedeployed worden.
