# Stack-analyse transportbeat.nl

Reverse-engineering met **REA 6.4.0** (`rea analyze-web-bundle` tegen een eigen headless
Chromium met CDP) op dev (CT141). Ruwe evidence staat naast dit bestand in
`rea-web-bundle.json`, `rea-targets.json` en `rea-screenshot.json`.

## Wat REA observeerde

| | |
|---|---|
| Endpoint | `https://transportbeat.nl/` |
| Scripts gezien / geanalyseerd | 22 / 22 |
| Parse-fouten | 0 |
| AST-nodes doorlopen | 255.184 |
| Completeness | `complete` |

Inferences (`vendor_fingerprint`):

| waarde | confidence | detector |
|---|---|---|
| **Next.js** | high | `next-runtime` |
| **React** | medium | `react-runtime` |

Scriptpaden: `/_next/static/chunks/turbopack-1878df9bd6173537.js` en verdere
`/_next/static/chunks/*.js` — de `turbopack-` chunknaam wijst op een **Next.js-build met
Turbopack**. (REA voert JavaScript niet uit; bovenstaande zijn observaties en bounded
inferences.)

## Wat de CSS leerde

Twee stylesheets: `8e4bf649b4ce4810.css` (9 kB) en `d1ee8d2c1ce8d95c.css` (68 kB).

- **Tailwind CSS v4**: `--tw-*` custom properties, `@layer`-regels en een `@theme`-blok.
  Er is geen `tailwind.config.js`-output met klassieke `content`-globs → v4 config-in-CSS.
- Eigen design-tokens met prefix **`--tb-*`** in `:root`, plus een `.dark`-variant.
- shadcn/ui-achtige tokens (`--background`, `--foreground`, `--primary`, `--ring`,
  `--radius`) — dezelfde naamgeving is in deze repo overgenomen in `globals.css`, zodat
  extra shadcn-componenten zonder aanpassing passen.
- Eigen webfonts.

## Conclusie en keuzes voor deze repo

transportbeat.nl = **Next.js (App Router) + React + Tailwind CSS v4 + Turbopack**, met
eigen `--tb-*` design-tokens, een donker/licht-thema en animatielaag.

Deze profielsite volgt diezelfde stack:

| origineel | hier |
|---|---|
| Next.js App Router | Next.js 16 App Router, `output: "standalone"` |
| Turbopack-build | Turbopack (standaard in Next 16) |
| Tailwind v4, config in CSS | Tailwind v4, `@theme` in `src/app/globals.css` |
| eigen `--tb-*` tokens | idem (`--tb-accent`, `--tb-heading-*`), plus eigen `--color-*` |
| shadcn-tokennamen | overgenomen (`--background`, `--primary`, `--ring`, …) |
| eigen webfonts | IBM Plex Sans + IBM Plex Mono via `next/font` |

Bewust **niet** overgenomen: de inhoud, teksten, beeldmateriaal en huisstijlkleuren van
TransportBeat (dat is andermans merk). Structuur, sectieopbouw en gedrag (sticky header,
hero-carrousel, overlappende kaarten, carrousel met donker portretpaneel, filterbare
software-grid) zijn wel gemodelleerd op het voorbeeld.

## Kleur

De site gebruikt het familiepalet (wegowow / wegoze): ink `#17393f`, sea `#0f5c63`,
shallow `#4ecdc4`, coral `#bc4626`, sun `#f2c14e`, sand `#fbf7f1`. Alles staat in het
`@theme`-blok bovenaan `src/app/globals.css` — één plek om te herkleuren.
