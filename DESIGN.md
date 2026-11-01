---
name: JBC
description: A one-piece colourway showroom for JBC menswear; the room takes the colour of the garment you pick.
colors:
  room: "#824e59"
  room-ink: "#f6f5f1"
  room-ink-2: "#eae4e2"
  room-wall: "#cfbcbd"
  room-floor: "#6d424b"
  room-line: "#a7838a"
  paper: "#f4f4f2"
  paper-ink: "#141517"
  paper-ink-2: "#55575c"
  paper-line: "#d6d6d3"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(64px, 17.5vw, 300px)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 125"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(40px, 7vw, 96px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 125"
  price:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 800
    letterSpacing: "-0.02em"
    fontFeature: "\"tnum\" 1"
    fontVariation: "\"wdth\" 115"
  wordmark:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 125"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 108"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  focus: "4px"
  cell: "8px"
  trim: "10px"
  tile: "14px"
  pill: "999px"
  disc: "50%"
spacing:
  page: "clamp(16px, 3.2vw, 48px)"
  hair: "6px"
  chip-gap: "12px"
  stack: "22px"
  gutter: "24px"
  block: "40px"
  section: "clamp(64px, 9vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.room-ink}"
    textColor: "{colors.room}"
    rounded: "{rounded.pill}"
    height: "56px"
    typography: "{typography.title}"
  button-primary-paper:
    backgroundColor: "{colors.paper-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 24px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-ink}"
    textColor: "{colors.paper}"
  trim-selector:
    textColor: "{colors.room-ink}"
    rounded: "{rounded.trim}"
    padding: "10px 14px"
  colour-chip:
    rounded: "{rounded.disc}"
    size: "36px"
  size-cell:
    textColor: "{colors.room-ink}"
    rounded: "{rounded.cell}"
    height: "44px"
  size-cell-selected:
    backgroundColor: "{colors.room-ink}"
    textColor: "{colors.room}"
    rounded: "{rounded.cell}"
    height: "44px"
  cart-button:
    textColor: "{colors.room-ink}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 8px 0 14px"
  cart-count:
    backgroundColor: "{colors.room-ink}"
    textColor: "{colors.room}"
    rounded: "{rounded.pill}"
    height: "24px"
  nav-model-current:
    textColor: "{colors.room-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  toast:
    backgroundColor: "{colors.room-ink}"
    textColor: "{colors.room}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  cart-drawer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    width: "min(440px, 100%)"
---

# Design System: JBC

## Overview

**Creative North Star: "The Colourway Showroom"**

JBC is presented the way a car is launched: one piece at a time, standing on a lit turntable in a room painted the colour of the garment. The configurator is the page. Picking a colour does not swap a thumbnail; it repaints the room. Background, ink, the giant model name on the back wall, the floor disc and every hairline are computed live from the garment's sampled hex, so the whole first viewport always belongs to exactly one colourway. Below the showroom the world steps out into pale studio-grey paper for the spec sheet, the collection row, the Trendyol bridge and the footer.

The system is dense where buying happens (a 320–380px configurator column of trims, chips, sizes, price and one pill button) and monumental where identity happens (an expanded, 900-weight model name up to 300px behind the figure). Type is one family, Archivo variable, used across its width axis: wide and heavy for names, near-normal for reading, tabular numerals everywhere. Ornament is limited to things a showroom actually has: the lit elliptical disc, the photo's drop shadow, hairline spec rules, round paint-chip swatches.

The fashion default of a full-bleed campaign slider over a grid of equal product cards is the rejected reference; one configured piece leads, the catalogue follows as a spec table.

**Key Characteristics:**
- One garment, one room: the page colour is derived from the selected colourway, never chosen independently.
- Two materials only: the tinted showroom above, neutral paper below.
- One typeface (Archivo variable, wght 100–900, wdth 62–125%), with width as the main hierarchy lever.
- Real cut-out product photos on a lit disc; no stock imagery, no illustration.
- Pills for actions, rounded rectangles for selectors, circles for colour, hairlines for structure.

## Colors

A derived, single-hue palette: the showroom is a tint or shade of the garment, set against a fixed neutral paper.

### Primary
- **Colourway Room** (`room`; the frontmatter value is the boot state, Bordo sweatshirt): the page background of the bar, showroom and scrollbar track, and the text colour of every ink-filled control (primary button, selected size, cart count, toast, selection highlight). Rewritten at runtime by `roomFor(hex)` in `app.js` from the garment hex in `products.js`; also written to `<meta name="theme-color">`.
- **Room Ink** (`room-ink`): text and icons on the room, focus rings, selected-trim border, selected-chip ring, and the fill of the primary button. At runtime it is exactly one of two constants: dark ink (the `paper-ink` value) or light ink (the boot value shown).
- **Room Secondary Ink** (`room-ink-2`): secondary text on the room (prices under trim names, colour name in the legend, ratings, notes, spec labels, unselected nav links).
- **Back-wall Lettering** (`room-wall`): the giant model name behind the figure. Display-only.
- **Turntable Floor** (`room-floor`): the base fill of the elliptical plinth, under a white radial highlight.
- **Room Hairline** (`room-line`): borders of trims, sizes and the cart button; the spec-strip top rule; the bar's bottom border (at 50% via `color-mix`); scrollbar thumb.

### Neutral
- **Studio Paper** (`paper`): background of the spec sheet, collection row, Trendyol bridge, footer and cart drawer. Also the fill of the secondary button on hover inversion.
- **Paper Ink** (`paper-ink`): text on paper (16.6:1), the 2px heavy rules under table heads and the collection row, the secondary button outline, the cart's checkout button fill. Also the dark-ink constant of the room formula.
- **Paper Secondary Ink** (`paper-ink-2`): descriptions, table row headers, meta lines, footer text (6.57:1 on paper).
- **Paper Hairline** (`paper-line`): 1px row rules in tables and cart lines, section top borders, quantity stepper outline. Decorative (1.32:1), never the only cue.

### The room formula (`roomFor(hex)` in `app.js`)

Inputs are the garment's sampled sRGB hex and two ink constants: dark `#141517`, light `#f6f5f1`. `L` is WCAG relative luminance; `mix(a, b, t)` is linear sRGB-channel interpolation from `a` toward `b` by `t`, rounded.

1. **Room**, by garment luminance band:
   - `L > 0.55` (white, pale): `room = mix(garment, black, 0.16)`, a deeper room so a white tee still reads.
   - `0.25 < L ≤ 0.55` (mid-light): `room = mix(garment, white, 0.28)`, lifted.
   - `0.06 < L ≤ 0.25` (mid): `room = mix(garment, white, 0.12)`, barely lifted.
   - `L ≤ 0.06` (near-black): `room = mix(garment, white, 0.20)`, a charcoal room.
2. **Ink**: whichever constant has the higher contrast against the room. `data-room="dark"|"light"` and `color-scheme` follow it.
3. **Secondary ink**: `mix(ink, room, 0.10)`; **if that falls below 4.5:1 against the room, it falls back to full ink.** Small secondary text never drops below AA.
4. **Wall**: `mix(room, ink, 0.66)`. **Floor**: `mix(room, black, 0.16)`. **Line**: `mix(room, ink, 0.32)`.
5. Values are applied as `rgb()` custom properties on `:root`; background and text transition over 700ms on the showroom ease.

Measured over all 21 catalogue colourways: ink 5.01–11.83:1 (lowest: Kahve sweatshirt); secondary ink 4.67–9.59:1, with the Kahve room the one case that triggers the fallback; wall lettering 3.07–4.88:1; hairline 1.68–2.31:1 (rules only); control outline (`--ctl`, ink 70% over room, on model trims, size buttons and the cart button) 3.27–7.4:1, meeting WCAG 1.4.11; garment against its own room 1.20–1.92:1 (the figure is separated by its drop shadow and the lit disc, not by contrast).

Swatch dots: a colour chip whose variant has a logo or detail (`nakışlı`, `biyeli`, `baskılı`) carries an 8px centre dot, dark `#141517` when the chip's luminance is above 0.4, light `#f6f5f1` otherwise.

### Named Rules
**The One Room Rule.** The showroom has no colour of its own. Every room token is derived from the selected garment hex by `roomFor()`; never hand-pick a showroom background, accent or border.

**The AA Floor Rule.** Room ink always clears 4.5:1 because it is picked from two extremes; secondary room ink is allowed to soften only while it stays at or above 4.5:1, otherwise it becomes full ink.

**The Display-Only Wall Rule.** `room-wall` (3.07–4.88:1) is reserved for the back-wall model name, set at display size (64px floor on desktop). It never carries body text, labels or controls.

**The Hairline-Is-Not-A-Cue Rule.** `room-line` and `paper-line` sit under 3:1 by design. Selected and focused states always switch to full ink (border, inset ring, fill or outline), never to a stronger hairline.

## Typography

**Display Font:** Archivo variable (self-hosted WOFF2, latin + latin-ext subsets, `font-display: swap`), with `system-ui, sans-serif`
**Body Font:** Archivo variable, same file
**Label/Mono Font:** none; labels are Archivo at small sizes

**Character:** A single grotesk stretched to its widest and heaviest for names, the way a car badge is set, then relaxed back to normal width for reading. Tabular numerals are on page-wide (`font-variant-numeric: tabular-nums` on body), so prices and ratings align like a spec sheet.

### Hierarchy
- **Display** (900, wdth 125%, `clamp(64px, 17.5vw, 300px)`, 0.8): the back-wall model name in Turkish uppercase (`toLocaleUpperCase("tr-TR")`, so `SWEATSHİRT`). 5–6 letter names use `clamp(64px, 14.5vw, 250px)`. `fitWall()` scales it down to the stage width when it would overflow. It is the page's `h1`.
- **Headline** (900, wdth 125%, `clamp(40px, 7vw, 96px)`, 0.9, -0.035em): paper-section headings ("Teknik föy", "Koleksiyon"). The bridge heading uses `clamp(32px, 4.6vw, 64px)`.
- **Price** (800, wdth 115%, 34px, -0.02em): the configured price. Smaller numeric emphasis steps: 24px/850/112% (cart total), 22px/800/112% (spec-table price row).
- **Title** (750, wdth 108%, 22px, 1.2, -0.01em, `text-wrap: balance`): the product's full name heading the configurator. Related: table heads 20px/800/115%; size-table title and cart heading 22px/800–850/112–115%; collection names 18px/800/112%; trim names 15px/700/112%.
- **Body** (400, 16px, 1.5): running text; paper descriptions held to 46ch.
- **Label** (700, 13px, +0.02em): fieldset legends ("Model", "Renk", "Beden"). Buttons sit at 600–750, 14–16px; the primary button is 750/16px/wdth 112%/+0.01em.
- **Caption** (400–500, 12–13px): spec-strip terms, size note, chips key, rating, cart notes, prototype banner.

Wordmark: "JBC" typeset at 900, wdth 125%, 26px (20px in the footer), -0.02em, until the real logo file arrives.

### Named Rules
**The Width-Is-Rank Rule.** Hierarchy is carried by the width axis as much as by size: 125% for identity (wall, section heads, wordmark), 108–115% for product names and prices, 100% for reading text. Never set body copy expanded.

**The Spec-Sheet Numerals Rule.** Numbers are tabular everywhere; prices are formatted `tr-TR` with " TL" and "’den" for from-prices.

## Layout

The showroom is a two-column grid under a sticky bar: a flexible stage column and a `minmax(320px, 380px)` configurator column, separated by a `clamp(24px, 4vw, 64px)` gap, at `min-height: calc(100svh - 98px)` and capped at 1100px. The stage column has two rows: the figure on its disc, then a four-column spec strip along the bottom edge under a hairline. The configurator spans both rows and centres vertically, stacking its steps 22px apart. The model name sits absolutely behind the stage at `z-index: -1`, top-left at the page inset.

Page inset is a single fluid value, `clamp(16px, 3.2vw, 48px)`, used by bar, showroom, paper sections and footer. Paper sections breathe at `clamp(64px, 9vw, 128px)` vertical padding; headings sit 40px above their content. Control grids are tight: 6px between trims and sizes, 12px between colour chips.

Figure sizing depends on the photo's crop: full-body shots stand on the disc at `clamp(380px, calc(100svh - 360px), 760px)`; half-body shots (`crop: "bottom"`) are shorter and fade out over their last 16% into the disc's back edge; shorts (`crop: "top"`) start lower, below the lettering, and fade in from the top.

**Breakpoints:**
- **≤980px**: one column. Bar nav hides (model choice moves to the trims). Order: stage, configurator, spec strip (2 columns). Trims go 3-up; collection row goes 3-up with a rule under each item; bridge stacks.
- **≤520px**: trims and collection go 2-up.

The collection row is a 6-column grid of 3:4 tiles on desktop, closed by a 2px paper-ink rule. Tables scroll horizontally inside their wrapper (min-width 720px for specs, 520px for sizes).

## Elevation & Depth

Depth exists only inside the showroom and only to make the photograph stand on something. Everything structural is flat: paper sections, tables and the bar use hairlines and tonal change, not shadow. The bar is a translucent room (88% via `color-mix`) with `backdrop-filter: saturate(1.2) blur(10px)`.

### Shadow Vocabulary
- **Figure** (`filter: drop-shadow(0 24px 30px rgb(0 0 0 / .22)) drop-shadow(0 3px 5px rgb(0 0 0 / .14))`): the cut-out on the disc. Half-body shots drop it (they fade into the disc); shorts use `drop-shadow(0 6px 6px rgb(0 0 0 / .16))`.
- **Turntable** (`box-shadow: 0 1px 0 rgb(255 255 255 / .28) inset, 0 -3px 0 rgb(0 0 0 / .12) inset, 0 22px 44px rgb(0 0 0 / .22)`, over a white radial highlight on `room-floor`): the lit disc.
- **Primary action** (`0 10px 24px rgb(0 0 0 / .18)`, hover `0 14px 30px rgb(0 0 0 / .24)` with a 1px lift).
- **Paint chip** (`0 0 0 1px rgb(0 0 0 / .18) inset, 0 2px 6px rgb(0 0 0 / .16)`).
- **Drawer** (`-20px 0 60px rgb(0 0 0 / .22)`) and **toast** (`0 10px 30px rgb(0 0 0 / .25)`): the only overlays, over a `rgb(10 10 12 / .45)` scrim for the drawer.

### Named Rules
**The Lit-Object Rule.** Shadows belong to objects that physically sit in the showroom (figure, disc, paint chips, the one primary button) and to overlays. Paper content is flat.

## Shapes

Four shapes, each tied to a role. Pills (999px) for actions and counters: primary button, secondary button, cart button, cart count, current nav model, toast, quantity stepper. Rounded rectangles for selectors: trims at 10px, size cells at 8px, cart thumbnails at 8px. Circles for colour: 36px paint chips with an 8px detail dot, 16px mini chips in the spec table. One ellipse: the 6:1 turntable disc, `min(600px, 96%)` wide. Collection tiles have 14px top corners and a square bottom that sits on the row's 2px rule, so the six garments read as standing on one shelf.

Structure is drawn with lines, never boxes: 1px hairlines for rows and section edges, 2px ink rules under table heads and the collection row. Focus rings are 2px ink with 3px offset and a 4px radius; colour chips use a ring 5px outside the chip (solid when selected, dashed when focused).

## Components

### Buttons
Heavy, rounded, and ink-on-room: the primary action is a slab of the room's own ink.
- **Shape:** full pill (999px).
- **Primary ("Sepete ekle"):** room-ink fill, room-coloured text, 56px tall, full column width, 750/16px/wdth 112%. Colours transition with the room (700ms).
- **Hover / Active / Disabled:** lifts 1px and deepens its shadow on hover, returns on press; disabled at 45% opacity, no shadow, `not-allowed`.
- **Primary on paper:** inside the cart drawer it inverts to paper-ink fill with paper text (the disabled "Ödemeye geç").
- **Secondary ("Trendyol mağazasına git"):** paper fill, 1.5px paper-ink outline, 52px tall, 0 24px padding, 700 weight; hover inverts to paper-ink fill, paper text.
- **Text link ("Bu ürünü Trendyol’da incele"):** centred, 600/14px, secondary ink, underlined (1px, 0.22em offset), ink on hover.

### Model Trims
Rectangular trim-selector cards, the configurator's model picker (2-up desktop, 3-up tablet, 2-up phone).
- **Style:** 1px room-line border, 10px radius, 10px 14px padding; name at 700/15px/wdth 112%, from-price below in secondary ink 13px.
- **State:** hover tints with 5% ink; selected switches border to ink plus a 1px inset ink ring; keyboard focus is a 2px ink outline at 2px offset. The native radio is transparent over the whole card.

### Colour Chips
Round paint chips, one per colourway, filled with the garment hex.
- **Style:** 36px circle, inset 1px dark edge, soft 2px shadow, 12px gap; a centred 8px dot marks logo/detail variants (key line "Noktalı renkler: logolu / detaylı model" shown only when a model mixes marked and unmarked chips).
- **State:** hover scales to 1.06; selected shows a 2px ink ring 5px outside the chip; focus shows the same ring dashed. The selected name and variant appear right-aligned in the legend.

### Size Grid
- **Style:** 5-column grid, 44px cells, 8px radius, 1px room-line border, 650/14px.
- **State:** hover darkens the border to ink; selected fills with ink and room-coloured text. Submitting without a size shows a 600/13px error line ("Sepete eklemek için bir beden seçin.") with `role="alert"` and moves focus to the first size.

### Navigation
- **Bar:** sticky, translucent room, 1px half-strength hairline beneath; wordmark left, model links centred, cart button right.
- **Model links:** 550/14px pills (8px 12px), secondary ink at rest, ink on hover; the current model gets ink text on a 9% ink tint. Hidden at ≤980px.
- **Cart button:** 40px pill, 1px room-line outline, bag icon (inline SVG, 1.6 stroke), "Sepet", and an ink-filled count pill; bumps to 1.12 scale for 420ms when an item is added.

### Cards / Containers
- **Collection tile:** a full-width button; 3:4 photo window with 14px top corners and a background of 38% garment hex mixed into paper; name 800/18px/wdth 112%, meta line 14px secondary paper ink ("7 renk · 699,90 TL’den"). Hover raises the photo 6px and scales it 1.02 over 600ms. Clicking selects the model and scrolls to the showroom.
- **Spec table:** a comparison sheet of all six models; column heads 800/20px/wdth 115% over a 2px ink rule, row heads 600/13px in secondary ink at 14% width, 1px paper-line row rules, mini colour chips in the colour row, prices in the 22px row.

### Cart Drawer
A paper panel sliding from the right (`min(440px, 100%)`, 320ms on the showroom ease) over a dark scrim; `role="dialog"`, focus-trapped, Escape closes, focus returns to the trigger. Lines are a 64×80px tinted thumbnail, name and variant, a pill quantity stepper (32px round buttons, 1–10), price, and an underlined "Kaldır". Footer shows the subtotal (850/24px) and the disabled checkout with its note.

### Spec Strip (signature)
A `dl` of up to four specs (Kumaş, Kalıp, Yaka, Detay) along the stage's bottom edge, under a 1px room-line rule: 12px secondary-ink terms over 650/14px values. Empty specs ("—") are dropped rather than shown.

### Showroom Motion (signature)
Changing colour repaints the room immediately (700ms `cubic-bezier(.16, 1, .3, 1)` on background, text and rules) while the figure swaps: out in 170ms (`cubic-bezier(.5, 0, .75, 0)`, fade, 5% slide, 6px blur), waits for the new image to decode, then in over 560ms from a 7% offset in the direction of travel. Changing model runs the same swap and re-renders the configurator. `prefers-reduced-motion` reduces all transitions to near zero and skips the swap and cart bump.

## Do's and Don'ts

### Do:
- **Do** derive every showroom colour from the garment hex through `roomFor()`; add a colourway by adding its sampled `hex` to `products.js`, nothing else.
- **Do** keep secondary room text at or above 4.5:1; when the 10% softening fails, use full room ink (the existing fallback).
- **Do** reserve `room-wall` for the display-size back-wall name (64px floor on desktop, 900 weight, wdth 125%).
- **Do** switch to full ink (border, inset ring, fill or 2px outline) for every selected and focused state; hairlines alone never signal state.
- **Do** set identity type at Archivo 900, wdth 125%, tight negative tracking (-0.02 to -0.035em), and reading type at normal width with tabular numerals.
- **Do** present products as the real cut-out WebP photos, standing on the lit disc, using the `crop` flag to fade half-body and shorts shots.
- **Do** use pills for actions, rounded rectangles for selectors, circles for colour, hairlines for structure.
- **Do** keep paper sections flat: `paper`, `paper-ink`, `paper-ink-2`, `paper-line`, and 2px ink rules for emphasis.

### Don't:
- **Don't** introduce a fixed brand accent or a showroom colour that is not derived from the selected garment.
- **Don't** set body text, labels or controls in `room-wall`, `room-line` or `paper-line`.
- **Don't** replace the single configured piece with a full-bleed campaign slider over a grid of equal product cards.
- **Don't** put shadows on paper content, tables or the bar; depth is for the figure, disc, chips, primary button and overlays.
- **Don't** add a second typeface or set long text expanded.
- **Don't** show testimonials, badges or claims the catalogue data does not hold; ratings appear only as Trendyol ratings with their review count.
