---
name: Anaxa AI
description: A credentialed AI practice on warm paper — grotesk headings, serif prose, one committed pine.
colors:
  paper: "#fbfaf8"
  paper-sunk: "#f3f1ec"
  ink: "#14140f"
  ink-2: "#55554c"
  ink-3: "#6b6b61"
  pine: "#0f4d3f"
  pine-deep: "#0a382d"
  pine-wash: "#eef3f0"
  danger: "#8c2f1d"
  line: "rgba(20,20,15,0.13)"
  line-soft: "rgba(20,20,15,0.07)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(42px, 5.9vw, 66px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(27px, 3.1vw, 36px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.64
  credential:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.62
  body-tight:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  hairline: "2px"
  control: "3px"
  panel: "5px"
  pill: "50%"
spacing:
  xs: "4px"
  sm: "9px"
  md: "18px"
  gutter: "32px"
  lg: "52px"
  band: "76px"
  hero: "92px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.pine-deep}"
    textColor: "#ffffff"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "0"
    padding: "0"
  button-quiet-hover:
    textColor: "{colors.pine}"
  button-header:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "6px 0"
  button-header-hover:
    textColor: "{colors.pine}"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "{typography.body-tight}"
    rounded: "{rounded.control}"
    padding: "11px 13px"
  input-field-invalid:
    textColor: "{colors.danger}"
  modal-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
    width: "540px"
  contact-band:
    backgroundColor: "{colors.pine-wash}"
    textColor: "{colors.ink}"
    padding: "76px 0"
---

# Design System: Anaxa AI

## Overview

**Creative North Star: "The Credentialed Letterhead"**

This is the category standard for a serious practice site, executed at full fidelity rather than decorated. Warm paper carries near-black ink; a single deep pine does every job colour is allowed to do. Nothing is arranged to look clever. The page reads like a well-set letter from a firm that does not need to shout: full-width paper, a left-aligned headline on a tight measure, a serif paragraph beneath it, and the credential stated as a sentence under a pine rule rather than packaged as a badge.

Density is deliberately low and the rhythm is vertical. There is no grid of tiles, no container to put things in, no numbered agenda. Hairline rules and large vertical gaps do all the dividing, so the only things competing for attention are words. The register split is the mechanism: Archivo for anything structural or interactive, Source Serif 4 for anything meant to be *read*. A reader who skims sees grotesk; a reader who settles in sees serif. Register changes carry hierarchy so size doesn't have to.

Confirmed rejections, honoured by the build: no eyebrow or kicker labels above headings, no numbered sections, no card containers for content, no monospace anywhere, no gradients, no glass, no hero image, no stats, nothing centred, no heavy display weights (600 is the ceiling). The craft bar named for this project — Anthropic, OpenAI, Scale — is a bar for *finish*: generous whitespace, editorial tone, research-adjacent calm. It is not permission to borrow any of their palettes, typefaces or marks, and this system borrows none.

**Key Characteristics:**
- Warm paper ground under near-black ink, never pure white or pure black
- One committed colour (pine) doing structural work, not scattered as accent
- Grotesk for structure, serif for reading — register carries hierarchy
- Hairline rules and space instead of cards, boxes or dividers with weight
- Flat at rest; the only elevated surface in the system is the modal
- One authored motion moment, nothing on scroll
- Every text/background pair clears WCAG AA with margin

## Colors

A warm paper-and-ink neutral field with exactly one chromatic voice, a deep forest pine that is structural rather than decorative.

### Primary
- **Deep Pine** (`{colors.pine}`): The only real colour in the system, and it is load-bearing in six places: the 2px rule above the credential sentence, the primary button fill, every link, the focus ring, the caret in form fields, and the selection highlight. It is never used to brighten, tint or decorate.
- **Pine Deep** (`{colors.pine-deep}`): The hover and active state for anything pine. It exists only as the pressed/engaged register of the same colour.
- **Pine Wash** (`{colors.pine-wash}`): A barely-tinted paper used for exactly one full-bleed band, the contact section. It signals "this is the part where you act" by changing the ground, not by adding a box.

### Tertiary
- **Clay Red** (`{colors.danger}`): Error voice only — field-level validation messages, invalid field borders, and the server-error notice. Never used for emphasis, never paired with pine.

### Neutral
- **Warm Paper** (`{colors.paper}`): The page ground and the modal ground. Warm enough to read as paper rather than as an unstyled default.
- **Sunk Paper** (`{colors.paper-sunk}`): Recessed chrome only — the scrollbar track. No content sits on it.
- **Ink** (`{colors.ink}`): All headings, the wordmark, the credential sentence, the lead paragraph of body prose, form labels and typed input. Near-black with a warm cast; true black is not in the system.
- **Ink 2** (`{colors.ink-2}`): Supporting prose — the hero lede, body paragraphs after the first, service-area descriptions, the quiet button. The reading grey.
- **Ink 3** (`{colors.ink-3}`): The quietest legible tier: footer text, placeholders, the Esc affordance, "(optional)". Measured at 5.16:1 on paper, which is the floor of the whole system.
- **Line / Line Soft** (`{colors.line}` / `{colors.line-soft}`): Warm ink at 13% and 7%. The heavier one opens and closes a list; the softer one separates items inside it. Both are translucent so they sit *in* the paper rather than on it.

### Named Rules
**The One Pine Rule.** Pine is a single committed colour doing real jobs — primary action, credential rule, links, focus ring, caret, selection. If a new element wants pine for emphasis rather than for one of those jobs, it does not get pine.

**The Warm Neutrals Rule.** Nothing in the system is `#000` or `#fff` except the knocked-out text on pine fills and the input field ground. Every other neutral carries the warm cast.

**The Measured Contrast Rule.** Every text/background pair in the build clears WCAG AA; the lowest measured is 5.16:1 (Ink 3 on paper). Accessibility here is a recorded constraint, not an aspiration: any palette change must be re-measured against every pair it touches before it ships.

## Typography

**Display Font:** Archivo (with `system-ui`, `sans-serif`)
**Body Font:** Source Serif 4 (with Georgia, serif)
**Label Font:** Archivo — same family as display, differentiated by size and weight

**Character:** A tight, slightly condensed grotesk against an optical-size serif built for text. Archivo is structural and unsentimental; Source Serif 4 is warm and unhurried at reading size. The pairing is the system's signature, and it is recognisable with all content removed.

### Hierarchy
- **Display** (600, `clamp(42px, 5.9vw, 66px)`, 1.04): The one page headline. Capped at a 13ch measure with balanced wrapping so it breaks to two short lines rather than running wide. No label above it.
- **Headline** (600, `clamp(27px, 3.1vw, 36px)`, 1.15): Section headings, capped at 32ch and balanced. Also the modal title, at a fixed 24px.
- **Title** (500, 19px, 1.3): Service-area names. Deliberately one weight lighter than headings — they are index entries, not sections.
- **Lede** (serif, 20px, 1.6): The single paragraph under the headline, at a 54ch measure.
- **Body** (serif, 20px, 1.64, 66ch): Running prose. Both paragraphs sit at this size in reading grey.
- **Credential** (serif, 18px, 1.62, 62ch): The credential sentence only — the one full-ink paragraph, two steps below the reading size.
- **Body Tight** (serif, 17.5px, ~1.6): Service-area descriptions only. Reading voice at a shorter measure.

**One reading size, one exception.** The lede and both prose paragraphs are 20px (18px on mobile) in Ink 2. The credential is the single exception at 18px (16.5px mobile) in full Ink. An earlier build stepped the four at 22 / 21 / 19 / 17.5 and read as an arbitrary ladder; the rule now is one reading size, with prominence carried by ink and position rather than scale. The credential is deliberately *smaller* than the paragraphs it outranks — it is the only black text in the stretch and sits directly under the pine rule, which is where its weight comes from.

**The Ink Rule.** In the opening stretch, exactly one paragraph is full Ink: the credential. Everything else is Ink 2. Do not darken a second paragraph for emphasis — it reads as alternation, not hierarchy.

**The Accent Word.** A single word in the headline (`custom`) is set in Source Serif 4 italic 600 at 1.03em with tracking relaxed to -0.012em, against the Archivo around it. It uses the italic axis the page already loads for prose. One word, in the headline only; this is not a licence for italic emphasis elsewhere.
- **Label** (500, 14.5px): Form labels, in grotesk, so the field chrome never competes with the serif the user is typing into.

### Named Rules
**The Register Rule.** Grotesk for structure and interaction — headings, wordmark, buttons, labels, chrome. Serif for every passage meant to be read — lede, prose, credential, service descriptions, confirmations, error messages. Register changes with purpose, which is why size does not have to carry hierarchy alone.

**The No Mono Rule.** There is no monospace anywhere in the system, deliberately. Code voice would make a consultancy read as a tooling vendor.

**The Bare Heading Rule.** Headings stand alone. No kicker, no eyebrow, no all-caps label, no `01`–`06` section number above or beside them. Weight ceiling is 600; heavier display weights were rejected.

**The Measure Rule.** Every text block is capped in `ch`, not in pixels: 13ch display, 32ch headings, 54ch lede, 62–68ch prose. Line length is a typographic decision, not a side effect of the container.

## Layout

A single centred measure, not a grid. The container is capped at 1080px with a 32px gutter (22px below 760px); there are no columns, no sidebars and no nested containers. Everything is left-aligned; nothing in the system is centred.

Vertical rhythm is the primary spatial tool and it is large: 92px above the hero content, 112px between the hero and the first section, 104px between subsequent sections, 76px of internal padding in the contact band. On mobile all three of those collapse to 72px and the contact band to 56px. Small-scale rhythm is tighter and irregular by intent — 18px between form fields, 22px of credential padding, 26px of service-row padding, 30–34px above action rows.

The one internal split is the service list: a two-column grid at `0.85fr / 1.15fr` with a 32px gap, so the name sits narrower than its description. Below 760px it becomes a single column with a 9px gap, turning each row into a stacked term-and-definition pair rather than a shrunken table.

The sole breakpoint is 760px. There is no tablet tier; the design is one layout that relaxes.

### Named Rules
**The One Measure Rule.** 1080px, one column, left-aligned. New sections get vertical space and a hairline, not a new container width or a nested grid.

**The Full-Bleed Band Rule.** When a section needs to feel different, it changes the ground colour edge-to-edge and keeps the same inner measure. It does not become a box inset from the page.

## Elevation & Depth

The system is flat. Content surfaces carry no shadow at all — depth on the page is conveyed by the warm paper ground, one tinted full-bleed band, and translucent hairline rules. There are no gradients and no glass; the only blur in the build is a 3px backdrop blur on the modal scrim, feature-queried so it degrades to plain translucency.

The modal is the single exception and the only elevated object in the system.

### Shadow Vocabulary
- **Modal lift** (`box-shadow: 0 18px 48px -12px rgba(20,20,15,0.28), 0 2px 8px rgba(20,20,15,0.08)`): A two-part soft shadow — a wide diffuse cast plus a tight contact shadow — in warm ink, never neutral grey. Reserved for the contact dialog.
- **Focus ring on fields** (`box-shadow: 0 0 0 3px rgba(15,77,63,0.12)`): Not depth; a pine halo that pairs with the border shift on focus. The danger variant is the same ring in clay (`rgba(140,47,29,0.12)`).
- **Global focus ring** (`outline: 2px solid var(--pine)` at `3px` offset, `2px` radius): Applies to every `:focus-visible` element in the system. It is pine, not the browser default.

### Named Rules
**The Flat Page Rule.** Nothing on the page is lifted. Shadow is reserved for the one surface that genuinely floats above the document, the modal. A content block that wants a shadow wants a hairline instead.

## Shapes

Radii are small and functional: 3px on controls (buttons, inputs, the Esc affordance), 5px on the modal panel, 2px on the error notice and the focus ring, and a full circle only on the 26px confirmation check mark. Nothing is pill-shaped and nothing is sharply square.

Division is done with 1px translucent rules and one 2px pine rule. The pine rule above the credential is the heaviest line in the system and it appears once. The service list is bracketed by the stronger hairline top and bottom with the softer hairline between rows — a ledger, not a table and not a stack of cards.

Icons are inline SVG with 1.5–1.8px round-capped strokes: a single right arrow (15×12) on every action button and a check (13×10) in the confirmation. The logo mark is two stacked rounded tiles (13px radius at a 64-unit scale) with a two-storey lowercase `a` knocked out in paper.

### Named Rules
**The No Container Rule.** Content is not boxed. There are no cards, panels, tiles or wells for content anywhere in the system; the modal is a dialog, not a card, and the contact band is a ground change, not a container.

**The Single Heavy Line Rule.** Exactly one rule in the system has weight and colour: the 2px pine line above the credential. Everything else divides at 1px in translucent ink.

## Components

### Buttons
- **Shape:** Barely-softened rectangles (3px radius). No pills, no squares.
- **Primary:** Pine fill, white label, Archivo 500 at 16px, 14px/24px padding, with a right arrow set 10px after the label. Used for the one action on the page: opening or sending the contact form.
- **Hover / Focus:** Fill deepens to Pine Deep and the arrow slides 3px right (`transform .25s`); active presses down 1px. Focus uses the global pine ring.
- **Quiet (secondary):** No fill, no radius. Ink 2 text over a 1px hairline underline; on hover both text and underline go pine. Used for the alternative path beside every primary — "See what we work on", "or email hello@anaxa.ai".
- **Header link:** A button styled as navigation — Ink text at 15.5px over a 1.5px pine underline, hover to pine. It reads as a link and behaves as a dialog trigger.

### Inputs / Fields
- **Style:** White ground inside a 1px hairline at 3px radius, 11px/13px padding. The typed value is set in **serif at 17px** while its label is grotesk at 14.5px — the user's own words get the reading face. Textareas start at 112px and do not resize.
- **Focus:** Border goes pine, plus a 3px pine halo at 12% opacity. The caret is pine.
- **Error:** Border and message go clay red; the message is serif at 15.5px and sits directly beneath its own field, not collected at the top. `aria-invalid` drives the styling, and it clears on first keystroke. A separate server-error notice sits beneath the submit button on a pale clay ground at 2px radius.
- **Disabled (submit):** 60% opacity with a `progress` cursor while the request is in flight; the label changes to "Sending".

### Navigation
A single header row at the page measure, 26px of vertical padding, wordmark left and one contact trigger right. No menu, no nav list, no mobile drawer — the layout is identical at every width. The wordmark is the 22px mark plus the lockup text in Archivo 600 at 17px, tightened to -0.01em.

### Dialog
- **Scrim:** Warm ink at 42% with an optional 3px backdrop blur.
- **Panel:** Paper ground, 540px max, 5px radius, 32px padding (24px on mobile), capped at `100vh - 48px` with internal scroll. It rises 14px with a fade over 340ms on open.
- **Behaviour:** Focus moves to the email field on open and returns to the trigger on close; Tab is trapped inside the panel; Escape and scrim clicks close it; body scroll locks. The close affordance is a small bordered "Esc" button at top-right rather than an ✕ glyph.

### The Resolving Form (signature component)
The one authored moment in the system. On a successful send, the form does not swap to a success screen and the dialog does not change size abruptly. The shell measures its own height, cross-fades the form out and the confirmation in over 260ms, and animates its height to the confirmation's height over 440ms on the house ease (`cubic-bezier(.22,.85,.3,1)`), then releases the inline height so the panel is fluid again. The old form is made `inert` and focus lands on the confirmation. The confirmation is a 26px pine circle with a white check, then "Message sent." in serif at 18px with the recipient address echoed back in Ink 2.

### Named Rules
**The One Moment Rule.** This system animates one thing on purpose: the form resolving in place. Everything else moves only as a direct response to input — colour shifts at 180–200ms, the arrow nudge at 250ms, the dialog rise at 340ms. Nothing animates on scroll, nothing animates on load, nothing reveals itself as the reader arrives. All of it runs on the single house ease, and all of it is cut to ~0ms under `prefers-reduced-motion`.

**The Themed Chrome Rule.** The browser's own surfaces belong to the palette: selection is pine on white, the scrollbar is a warm thumb in a sunk-paper track (webkit and Firefox both), focus rings are pine, the caret is pine, link underlines are offset 3px at 1px thickness, and `scrollbar-gutter: stable` keeps the measure from shifting when the dialog locks scroll.

## Do's and Don'ts

### Do:
- **Do** give pine one of its six jobs — primary action, credential rule, link, focus ring, caret, selection — or don't use it.
- **Do** set every readable passage in Source Serif 4 and everything structural in Archivo. The register split is the identity.
- **Do** cap text blocks in `ch` (13 / 32 / 54 / 62 / 68) rather than letting the container decide line length.
- **Do** divide with 1px translucent hairlines and large vertical space (72–112px between sections).
- **Do** change the ground colour full-bleed when a section needs to feel different, and keep the inner measure.
- **Do** re-measure every text/background pair against WCAG AA before changing any palette value; the current floor is 5.16:1.
- **Do** run every transition on `cubic-bezier(.22,.85,.3,1)` and keep durations between 180ms and 440ms.
- **Do** keep warm neutrals; reach for Ink/Paper, not black and white.
- **Do** inline icons as SVG with 1.5px round-capped strokes.

### Don't:
- **Don't** put a kicker, eyebrow, all-caps label or section number (`01`–`06`) above a heading. Headings stand alone.
- **Don't** box content. No cards, tiles, panels or wells — the modal is a dialog, not a precedent.
- **Don't** introduce monospace. There is none in the system by decision.
- **Don't** use gradients or glass. The one blur in the build is the modal scrim.
- **Don't** add shadow to anything on the page; shadow belongs to the modal alone.
- **Don't** animate on scroll, on load, or as a reveal. One authored moment, and it is the form resolving.
- **Don't** go heavier than 600 on display type, and don't centre body or heading text.
- **Don't** scatter pine as a tint, highlight or decorative accent, and don't pair it with the clay red.
- **Don't** borrow Anthropic's (or OpenAI's or Scale's) palette, typefaces or logo treatment. They set the finish bar only; Anaxa is a Claude Partner Network member and the resemblance would be both a guidelines problem and a loss of identity.
- **Don't** add a second accent colour. If something needs distinguishing, use register, measure or space.
