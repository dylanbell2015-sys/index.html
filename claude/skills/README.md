# web design VOG

Design system rules for all UI work on this project. Follow these exactly — do not invent values outside these scales.

---

## Typography Scale

Use a **Major Third (1.250)** modular scale anchored at 16px.

| Token        | Size   | Usage                        |
|--------------|--------|------------------------------|
| `text-xs`    | 10px   | Labels, eyebrows, captions   |
| `text-sm`    | 12px   | Meta, tags, fine print       |
| `text-base`  | 16px   | Body copy                    |
| `text-md`    | 20px   | Lead paragraphs, sub-copy    |
| `text-lg`    | 25px   | Section intros               |
| `text-xl`    | 31px   | Card titles, sub-headings    |
| `text-2xl`   | 39px   | Section headings             |
| `text-3xl`   | 49px   | Page-level headings          |
| `text-4xl`   | 61px   | Hero display                 |
| `text-5xl`   | 76px+  | Oversized display / Bebas    |

**Rules:**
- Body: DM Sans 300/400/500
- Serif / editorial: Cormorant Garamond 300, italic for accent lines
- Display: Bebas Neue for oversized headlines only
- Line-height: 1.2 for display, 1.5 for body, 1.7 for long-form
- Letter-spacing: 0.04em on display, 0.2em on all-caps labels
- Never set arbitrary font sizes. Pick from the scale above.

---

## Spacing System

**Base unit: 8px.** All spacing is a multiple of 8.

| Token   | Value  | Usage                              |
|---------|--------|------------------------------------|
| `sp-1`  | 8px    | Tight gaps — icon + label          |
| `sp-2`  | 16px   | Inline padding, small gaps         |
| `sp-3`  | 24px   | Component internal padding         |
| `sp-4`  | 32px   | Card padding, section sub-gaps     |
| `sp-5`  | 40px   | Between related components         |
| `sp-6`  | 48px   | Section sub-divisions              |
| `sp-8`  | 64px   | Between distinct blocks            |
| `sp-10` | 80px   | Section padding (mobile)           |
| `sp-15` | 120px  | Section padding (desktop)          |
| `sp-20` | 160px  | Hero / CTA breathing room          |

**Rules:**
- Never use odd values (15px, 22px, 37px). Round to nearest 8.
- Horizontal page margin: 60px desktop, 24px mobile.
- Grid gap: 24px (tight) or 40–80px (loose editorial).
- 4px is acceptable only for micro-adjustments (icon offsets, border radius).

---

## Color Tokens

All colors must reference these tokens. No raw hex codes in new code.

### Brand — Gold
```
--gold-dark:    #9a7a00   /* Muted, used for de-emphasized text */
--gold-mid:     #e0b840   /* Primary brand gold, icons, borders  */
--gold-light:   #ffd84a   /* Highlights, hover states            */
--gold-pale:    #ffe5a8   /* Subtle tints, glows                 */
```

### Neutral — Dark
```
--black:        #080808   /* Page background                     */
--black2:       #0f0f0f   /* Alternate section background        */
--surface-1:    rgba(201,160,48,0.02)   /* Card fill              */
--surface-2:    rgba(201,160,48,0.05)   /* Hover card fill        */
--border:       rgba(201,160,48,0.10)   /* Default border         */
--border-hover: rgba(201,160,48,0.25)   /* Hover border           */
```

### Text
```
--text:         #f0ead8   /* Primary text                        */
--text-dim:     #9a8a6a   /* Secondary / muted text              */
```

### Gradients
```
--gradient:       linear-gradient(135deg, #9a7a00 0%, #e0b840 45%, #ffd84a 70%, #e0b840 100%)
--gradient-text:  linear-gradient(160deg, #aa8a00 0%, #e0b840 30%, #ffd84a 55%, #ffe5a8 70%, #e0b840 90%)
```

**Rules:**
- Use `--gradient-text` with `-webkit-background-clip: text` for display headings only.
- Use `--gradient` for filled CTAs, progress bars, and accent lines.
- Opacity overlays must use the rgba border/surface tokens — not opaque hex.
- Never introduce a new color. Extend the scale here first.

---

## Component Patterns

### Buttons

**Primary**
```css
padding: 16px 44px;
background: var(--gradient);
color: #080808;
font-weight: 600;
font-size: 10px; /* text-xs */
letter-spacing: 0.2em;
text-transform: uppercase;
border: none;
box-shadow: 0 0 30px rgba(201,160,48,0.2), 0 0 60px rgba(201,160,48,0.08);
/* Hover: y -3px, scale 1.02 via Framer Motion */
```

**Secondary / Ghost**
```css
padding: 16px 44px;
background: transparent;
border: 1px solid rgba(201,160,48,0.3);
color: var(--gold-light);
font-size: 10px;
letter-spacing: 0.2em;
text-transform: uppercase;
/* Hover: border-color --gold-mid, bg --surface-2 */
```

**Rules:**
- Always uppercase + wide letter-spacing for buttons.
- No rounded corners — square edges are brand.
- Hover motion via Framer Motion `animate()`, not CSS `:hover` transform.
- Disabled state: opacity 0.4, cursor not-allowed.

---

### Cards

**Structure**
```
[optional accent line — 2px left border, gradient]
[label / number — text-xs, --gold-dark, letter-spacing 0.3em]
[title — Bebas Neue or DM Sans 500]
[body — text-sm/text-base, --text-dim, line-height 1.7]
[action — text-xs uppercase, --gold-mid, arrow →]
```

**CSS baseline**
```css
padding: 44px 40px;           /* sp-5 sp-5 */
background: var(--surface-1);
border: 1px solid var(--border);
position: relative;
overflow: hidden;
/* Hover: border → --border-hover, bg → --surface-2 */
/* Hover motion: y -6px via Framer Motion */
```

**Rules:**
- Cards never have drop shadows by default — use border + surface color.
- Radial gradient overlay on hover is acceptable (opacity 0 → 0.06).
- Always include a clear visual hierarchy: label → title → body → action.
- No card should have more than 4 distinct text elements.

---

### Form Layouts

**Input**
```css
padding: 14px 20px;           /* sp-2 */
background: var(--surface-1);
border: 1px solid var(--border);
color: var(--text);
font-family: 'DM Sans', sans-serif;
font-size: 14px;              /* text-sm */
/* Focus: border → --gold-mid, outline: none */
```

**Label**
```css
font-size: 10px;              /* text-xs */
letter-spacing: 0.2em;
text-transform: uppercase;
color: var(--text-dim);
margin-bottom: 8px;           /* sp-1 */
```

**Field group spacing:** 24px between fields (`sp-3`).
**Submit button:** always full-width on mobile, primary style.
**Error state:** border `rgba(220,50,50,0.6)`, message in `text-xs` below field.

---

## Avoid Generic AI Aesthetic

These patterns make a site look like it was generated by a model with no design direction. Avoid all of them.

**Layout**
- No hero with a centered headline, sub-headline, and two generic CTA buttons sitting in a white void.
- No three-column "icon + title + paragraph" feature grids unless there is a strong visual reason.
- No full-width image with a dark overlay and centered text.
- No "marquee of logos" section used as a trust signal without actual client context.

**Typography**
- No gradient text on every headline. Reserve it for one or two key moments.
- No mixing more than two typeface families in a single section.
- No giant emoji or decorative punctuation used as design elements.

**Color & Decoration**
- No purple-to-blue gradients, "glassmorphism" frosted panels, or neon glow on dark backgrounds unless it serves a specific brand reason.
- No randomly placed geometric shapes (circles, blobs) as background decoration.
- No stock-illustration-style SVG characters.

**Motion**
- No element on the page should animate without a reason tied to user interaction or content reveal.
- No infinite bouncing arrows, spinning logos, or looping text tickers unless they carry real information.
- All animation via Framer Motion (`animate`, `inView`, `stagger`) — no ad-hoc CSS keyframes for content elements.

**Copy presentation**
- No bullet lists inside hero sections.
- No section titled "Why Choose Us" or "Our Process" without a stronger editorial framing.
- Avoid centering body-length paragraphs — center only short display lines.
