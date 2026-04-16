# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## What this project is

**Misi Anda** is a static HTML/CSS/JS portfolio prototype for Indosat retailers. There is no build step, no package manager, and no local dependency installation.

Open files directly in a browser:

```sh
open index.html
open showcase/index.html
open flows/01/index.html
open flows/04/index.html
```

## Repo shape

| Path | Role |
|------|------|
| `index.html` | Portfolio landing page linking to prototype flows |
| `showcase/index.html` | Case-study style presentation page |
| `flows/01/index.html` | Home flow, currently the most complete screen |
| `flows/02/` | Reserved for transaction history / insights, currently empty |
| `flows/03/` | Reserved for mission & programme, currently empty |
| `flows/04/index.html` | Upsell flow, already built |
| `design-system/` | Shared presentation frame, shared JS helpers, shared tokens |
| `src/BUILD_PLAN.md` | Product/build plan |
| `src/Indosat_Retailer_App_Redesign_Case_Study.md` | Narrative / case-study writing |

## Current architecture

The live prototype is a hybrid:

1. **Shared shell**
   - `design-system/phone-frame.css`
   - `design-system/components.js`
2. **Per-screen UI**
   - Flow 01 and Flow 04 are mostly hand-authored HTML with Tailwind CDN utility classes.
   - Lucide icons are loaded from CDN inside those screens.
3. **Shared token file**
   - `design-system/tokens.css` is the source-of-truth palette and primitive layer.
   - It now reflects the visual language already present in Flow 01 and Flow 04.
   - Existing screens are not fully migrated to consume it yet.

Do not assume the design system is fully wired through every flow. Today it is the shared reference layer, not yet the only rendering path.

## Shared design system

### `design-system/tokens.css`

This file should track the live prototype, not an aspirational future system.

Current token direction:

- App background: slate `#f1f5f9`
- Primary text: `#1e293b`
- Muted text: `#94a3b8`
- Brand / CTA: indigo `#4f46e5`
- Accent purple: `#7c3aed`
- Success: emerald `#059669`
- Warning / reward: amber family
- Dark hero/header: slate-900 style surface
- Card radius: 20px
- Bottom sheets and toast remain inside `.screen`

The file also exposes shared primitives for:

- `.screen`
- `.screen-scroll`
- `.status-bar`
- `.top-bar`
- `.card`
- `.progress-track` / `.progress-fill`
- `.bottom-nav` / `.bn-item`
- `.sheet-overlay` / `.sheet-panel`
- `.toast`

### `design-system/phone-frame.css`

Responsible only for presentation mode:

- dark outer canvas
- iPhone-like shell
- 390x844 screen inside a 418x872 frame
- responsive scaling on desktop
- full-screen fallback on small screens

### `design-system/components.js`

Exports `window.MA` with the shared runtime helpers:

- `MA.routes` -> central flow route map
- `MA.statusBar(time, dark)` -> status bar HTML
- `MA.bottomNav(activeId)` -> shared bottom nav HTML
- `MA.mountBottomNav(root, activeId)` -> mount nav into a root element
- `MA.toast(toastId, messageId)` -> shared toast markup
- `MA.showToast(message, opts)` -> shared toast behavior
- `MA.initNav()` -> wires `[data-nav]` and `[data-link]`
- `MA.initPresentationMode()` -> scales the frame to fit the viewport
- `MA.icons.*` -> shared SVG icons

## Flow conventions

Each flow remains a standalone HTML document. Use this shell:

```html
<link rel="stylesheet" href="../../design-system/phone-frame.css">

<body class="presentation-mode">
  <div class="phone-frame">
    <div class="phone-camera"></div>
    <div class="screen">
      <!-- flow content -->
      <!-- overlays must stay inside .screen -->
    </div>
  </div>

  <script src="../../design-system/components.js"></script>
</body>
```

If you add overlays like sheets or toast, keep them **inside `.screen`**. `phone-frame.css` relies on the transformed `.screen` to contain fixed-position children correctly.

## Visual conventions from the live prototype

- Brand CTAs are indigo, not orange.
- Headers use a dark slate block with light text.
- Main cards are white with subtle gray borders.
- Tab navigation uses underline treatment, not pill tabs.
- Promotional cards can use gradients, but the core shell stays flat.
- Touch targets should stay at or above 44x44px.
- Labels and captions should stay at or above 12px.
- Use `overscroll-behavior: contain` on scrollable regions.
- Respect `prefers-reduced-motion`.
- Do not introduce emoji as product icons in the shared system.

## Spacing standards (Tailwind)

These are the agreed tight-spacing conventions. Apply consistently across all flows.

| Element | Class |
|---------|-------|
| Card internal padding | `p-4` |
| Card stack gap | `space-y-3` |
| Card sub-section divider padding | `pt-3 gap-3` |
| Dark hero top / bottom | `pt-8 pb-24` |
| Content overlap into hero | `-mt-20` |
| Section header text | `text-base font-semibold` |
| Section header bottom margin | `mb-3` |
| Product icon tile | `w-12 h-12 rounded-xl` |
| Promo/recommendation card inner | `p-3` |
| Promo/recommendation card gap | `mb-3` |
| Bottom scroll padding | `pb-24` |

## Flow inventory

| Flow | Screen | Status |
|------|--------|--------|
| 01 | Beranda — home, AI-ranked contacts, streak banner, promo sender | Built |
| 02 | Laporan — transaction history, pelanggan belum balik, re-engage sheet | Built |
| 03 | Misi — daily/weekly missions, tier card, leaderboard teaser | Built |
| 04 | Upsell Moment — post-transaction AI upsell | Built |

## Working guidance

- Follow the code that exists, especially Flow 01 and Flow 04.
- Update `design-system/` when repeated patterns become clear.
- Avoid large refactors unless they reduce duplication already present in multiple flows.
- If you add a new flow, update `MA.routes` in `design-system/components.js`.
- If you build Flow 02 or Flow 03, prefer extracting shared pieces instead of copying more one-off inline markup.
