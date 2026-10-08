# Anaxa brand assets

The mark is two stacked rounded tiles with a lowercase `a` knocked out of the
front one. The `a` is the real **Inter Tight 600** glyph converted to outlines,
so it matches the wordmark next to it and does not depend on the font loading.

## Files

| File | Use |
|---|---|
| `logo-mark.svg` | The mark, drawn in `currentColor`. Inherits the surrounding text colour — use this one inside HTML. |
| `logo-mark-ink.svg` | The mark in ink `#1a1a19`, for light backgrounds. |
| `logo-mark-white.svg` | The mark in white, for dark backgrounds. |
| `favicon.svg` | Browser tab icon. Ink tiles, white `a`. |
| `favicon-data-uri.txt` | The favicon pre-encoded as a `<link rel="icon">` tag, ready to paste. |
| `wordmark.svg` | The words `anaxa.ai` as outlines, Inter Tight 600. |
| `preview.html` | Open in a browser to see everything at display, header and favicon sizes. |

In `logo-mark*.svg` the `a` is **punched through** — the letter is transparent,
so whatever is behind it shows through. `favicon.svg` fills the letter with
solid white instead, because browser tab backgrounds vary.

## Colours

| Token | Hex | Use |
|---|---|---|
| Ink | `#1a1a19` | The mark, headings, buttons |
| Paper | `#f7f7f5` | Page background |
| Panel | `#efefec` | Hover states, subtle fills |
| Ink mid | `#5e5e5a` | Body copy |
| Ink dim | `#96968f` | Labels, footer |

## Using it in a page

Inline, inheriting the text colour — this is what `index.html` does:

```html
<div class="logo">
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="11" y="2" width="51" height="51" rx="13" fill="currentColor" opacity=".26"/>
    <rect x="2" y="11" width="51" height="51" rx="13" fill="currentColor"/>
    <path d="…" fill="var(--paper)"/>
  </svg>
  anaxa.ai
</div>
```

Note the inline version fills the `a` with `var(--paper)` rather than punching a
hole, so the letter follows the page background if you change it later.

As a file:

```html
<img src="brand/logo-mark-ink.svg" alt="Anaxa" width="24" height="24">
```

## Sizing

Minimum 16px. The mark was chosen because it survives at favicon size — the
front tile carries the whole silhouette, so the faint back tile dropping out
when small does not break it. Below 16px the counter inside the `a` fills in.

## Not included

- **PNG / `.ico` versions.** Modern browsers take the SVG favicon. If you need
  `apple-touch-icon.png` (180×180) or a legacy `.ico`, export them from
  `favicon.svg` — any vector editor or an online converter will do it.
- **Claude Partner Network badge.** That is Anthropic's asset with its own usage
  rules, not part of this set. Request it through your partner contact. It
  belongs in the footer or credentials strip, never as the logo.
