# Men's Events + Programs — GHL Build Spec

Reference card for rebuilding the "Next Men's Breakfast" featured event and the three Programs (Men's Breakfast · Tuesday Bible Study · Men's Ministry Group) in GHL drag-and-drop, so it matches the original code layout. Drop these sections **between** `mens-top.ghl.html` and `mens-bottom.ghl.html`.

Section IDs to set so the top-block's menu/hero anchors still work:
- **`thcf-events`** on the Featured Breakfast section wrapper

---

## 1. Featured Breakfast — Section Wrapper

| Setting | Value |
|---|---|
| Background | Vertical gradient — top `#FFFFFF` → bottom `#E3EBF3` (steel-soft) |
| Padding — top | `80px` desktop · `56px` mobile |
| Padding — bottom | `80px` desktop · `56px` mobile |
| Padding — left/right | `24px` |
| Max content width | `1140px` (centered) |
| Section ID / anchor | `thcf-events` |

If GHL doesn't offer a gradient, fall back to a solid `#E3EBF3` — reads correctly against the steel-blue hero above and the plain white Programs section below.

---

## 2. Section Header (centered intro block)

Three stacked elements, center-aligned, max-width `760px`.

### 2a. Eyebrow — "Next Up"

| Setting | Value |
|---|---|
| Text | `Next Up` |
| Font size | `13px` |
| Font weight | `700` (Bold) |
| Letter spacing | `0.18em` (or ~2.5px) |
| Text transform | UPPERCASE |
| Color | `#2C4A6E` (steel) |
| Margin bottom | `12px` |
| Decorative rule | 48px × 3px horizontal bar in `#2C4A6E`, centered directly **above** the text (opacity ~55%) |

### 2b. Headline — "Save a seat at the table."

| Setting | Value |
|---|---|
| Text | `Save a seat at the table.` |
| Font size | `46px` desktop · `28px` mobile |
| Font weight | `700` |
| Line height | `1.15` |
| Color | `#1F2937` (gray-800) |
| Margin bottom | `18px` |

### 2c. Lead paragraph

| Setting | Value |
|---|---|
| Text | `Once a month, men gather over breakfast for food, teaching, and time together. Here's the next one.` |
| Font size | `19px` desktop · `16px` mobile |
| Font weight | `400` |
| Line height | `1.65` |
| Color | `#4B5563` (gray-600) |
| Margin bottom | `44px` (space before the card) |

---

## 3. Featured Breakfast Card

A 2-column card. Left column = image/graphic. Right column = event copy.

### Card container

| Setting | Value |
|---|---|
| Background | `#FFFFFF` |
| Border radius | `24px` |
| Box shadow | see §5b (steel-shadow variant) |
| Border | `1px solid #F3F4F6` (replaces the second CSS shadow layer) |
| Overflow | Hidden (so the image corners round with the card) |
| Column split | Left 6 / Right 5 (roughly 55% / 45%) |
| Stack on mobile | Yes, at ~900px breakpoint — image on top, text below |

### 3a. Left column — Image

| Setting | Value |
|---|---|
| Min height | `340px` |
| Fallback background (if no image yet) | Diagonal gradient `135deg` — `#2C4A6E` → `#1F3550` |
| Image fit | Cover, center |
| Border radius | Inherits from card (no separate radius needed) |

Placeholder text overlay for the fallback (drop as centered text on top of the gradient):

- Top eyebrow: `YOU'RE INVITED` — 10px, weight 700, letter spacing `0.32em`, white 85% opacity
- Big serif italic: `Men's Breakfast` — Georgia italic, 52px desktop / 34px mobile, white
- Meta line: `APRIL 18 · 8:00 AM` — 11px, weight 700, letter spacing `0.22em`, white 85% opacity

### 3b. Right column — Body (padding `44px` desktop, `28px` mobile)

Vertically centered. Stack the following:

**Badge pill** — "Upcoming"

| Setting | Value |
|---|---|
| Background | `#E3EBF3` (steel-soft) |
| Text color | `#2C4A6E` (steel) |
| Padding | `5px 12px` |
| Border radius | `999px` (fully rounded) |
| Font size | `11px` |
| Font weight | `800` |
| Letter spacing | `0.18em` UPPERCASE |
| Margin bottom | `14px` |

**Title** — "Next Men's Breakfast"

| Setting | Value |
|---|---|
| Font size | `32px` desktop · `24px` mobile |
| Font weight | `800` |
| Line height | `1.2` |
| Color | `#1F2937` |
| Margin bottom | `10px` |

**When line** — "📅  Saturday, April 18 · 8:00 AM"

| Setting | Value |
|---|---|
| Font size | `14px` |
| Font weight | `700` |
| Color | `#2C4A6E` (steel) |
| Margin bottom | `14px` |
| Optional calendar icon at left, 16×16, same steel color |

**Description paragraph**

| Setting | Value |
|---|---|
| Font size | `15.5px` |
| Line height | `1.7` |
| Color | `#4B5563` (gray-600) |
| Margin bottom | `18px` |

Suggested copy — *Hot food, strong coffee, a short message from a brother, and time to actually talk to the guys around you. Bring a friend — first-timers always welcome. Register so we can plan for you.*

**Actions row** — two buttons, `10px` gap, wrap on mobile

Primary button — "Register for Breakfast"
- Background `#2C4A6E` · Text `#FFFFFF`
- Padding `14px 26px` · Border radius `10px`
- Font size `15px` · Weight `700`
- Shadow — see §5b
- Link to `#thcf-contact-form` (or the actual registration URL when you have it)

Secondary button — "Ask a Question"
- Background `transparent` · Text `#1F2937`
- Border `2px solid #D1D5DB` (gray-300)
- Same padding / radius / font as primary
- Hover: border darkens to `#1F2937`, bg `#F9FAFB`
- Link to `#thcf-contact-form`

---

## 4. Palette — one place to copy from

| Name | Hex | Where it's used |
|---|---|---|
| Steel (primary) | `#2C4A6E` | Eyebrow, "When" line, primary button, badge text |
| Steel dark | `#1F3550` | Bottom of image gradient, primary button hover |
| Steel soft | `#E3EBF3` | Section gradient bottom, badge bg, footer/verse bg |
| Orange accent | `#E2572E` | Small square accent on program images (10–12px offset, 60×60px, `14px` radius) |
| Gold accent | `#F39615` | Alternate program accent |
| Teal accent | `#0B6B6B` | Alternate program accent |
| Text dark | `#1F2937` | Headings |
| Text body | `#4B5563` | Paragraphs |
| Text muted | `#6B7280` | Meta lines |
| Border | `#E5E7EB` | Input & card outlines |
| Border light | `#F3F4F6` | Card ring / hairline |

---

## 5. Corner-radius vocabulary

Use these consistently so the section feels like the top + bottom code blocks:

| Element | Radius |
|---|---|
| Big cards (featured event, form card) | `24px` |
| Program image blocks (Bible study, ministry group) | `20px` |
| Buttons | `10px` |
| Input fields | `10px` |
| Pill / badge | `999px` (fully rounded) |
| Verse callout | `18px` |
| Small accent square | `14px` |

---

## 5b. GHL Box-Shadow panel — exact fields

GHL's shadow control has five fields: **X · Y · Blur · Spread · Color**, each capped at **20px max**. Set **Outer Shadow** (not inner). The original CSS used softer 30–60px blurs; capped values below use higher alpha to compensate so the shadow still reads as "elevated" instead of a thin hard drop.

| Element | X | Y | Blur | Spread | Color (with alpha) | Color (fallback if picker won't accept alpha) |
|---|---|---|---|---|---|---|
| Featured event card | `0` | `20` | `20` | `0` | `#1F355040` (25%) | `#B7C3D3` |
| Secondary event card | `0` | `12` | `20` | `0` | `#1F355029` (16%) | `#CBD3DE` |
| Primary steel button (Register / Sign Up) | `0` | `8` | `20` | `0` | `#2C4A6E48` (28%) | `#B7C3D3` |
| Orange button (Plan Your Visit) | `0` | `8` | `20` | `0` | `#E2572E40` (25%) | `#F5C9BB` |
| Teal button (if used) | `0` | `8` | `20` | `0` | `#0B6B6B38` (22%) | `#B7D4D4` |
| Form card (contact form) | `0` | `20` | `20` | `0` | `#1F355040` (25%) | `#B7C3D3` |
| Small pill / badge | none | | | | | |

**Two ways to get the color:**

1. **If GHL's color field accepts 8-character hex** (some pickers do — try pasting `#1F355040` and see if the last two chars stick): use the *first* Color column. The last two chars are alpha in hex — `40` = 25%, `29` = 16%, `48` = 28%, `38` = 22%.
2. **If GHL strips the alpha** (many pickers only take 6-char hex): use the *fallback* column. Those are the visual color you'd get if the semi-transparent shadow were painted on a white background — a soft tinted grey that reads close enough to the real thing.

Alpha → hex cheat sheet if you want to build others: 10% = `1A`, 15% = `26`, 16% = `29`, 20% = `33`, 22% = `38`, 25% = `40`, 28% = `48`, 30% = `4D`, 40% = `66`, 50% = `80`.

**Note on the second shadow layer.** In CSS the card had `0 30px 60px …` *and* `0 0 0 1px #F3F4F6` — that second one is a hairline ring around the card. GHL can't stack two shadows in one control, so replicate it with **Border: `1px solid #F3F4F6`** on the card instead. Same visual result.

**Inner Shadow** — leave off. None of the elements in this design use inner shadows.

---

## 6. Adding more events

For each additional event, duplicate the card container above. If you want a lighter treatment for secondary events:

- Drop the shadow to `0 12px 20px` with 16% alpha (see §5b secondary row)
- Reduce card padding to `28px`
- Keep the same badge / title / when / actions rhythm

---

## 7. Programs section (right after the Featured Breakfast)

Use the same header pattern (§2) with:
- Eyebrow: `Rhythms For Men`
- Headline: `Three places to plug in.`
- Lead: `Show up to one. You'll meet someone. The rest takes care of itself.`

Then three alternating rows. Each row is a 2-column layout (~5fr / 7fr), image left + text right on the odd rows, reversed on the even rows. Section backgrounds alternate white → gray-50 (`#F9FAFB`) → white.

Per-row settings (image side):

| Setting | Value |
|---|---|
| Aspect ratio | 1 : 1 (square) |
| Border radius | `20px` |
| Background gradient (fallback) | `135deg` `#2C4A6E` → `#1F3550` |
| Max width | `420px` |
| Small square accent | 60×60px, `14px` radius, orange/gold/teal (see below), positioned bottom-left, offset -12px / -12px |

Per-row settings (text side): same eyebrow / title / when / body / buttons pattern as the featured card, minus the badge pill.

Program accents (per program) — change the eyebrow color and "when" color to match:

| Program | Accent color |
|---|---|
| Men's Breakfast (again, but as a program tile) | `#E2572E` (orange) |
| Tuesday Morning Bible Study | `#F39615` (gold) |
| Men's Ministry Group | `#0B6B6B` (teal-dark) |

---

## 8. Anchor IDs the top + bottom blocks link to

Set these on your GHL sections so the buttons in the top block's menu/hero jump correctly:

| Anchor | Section |
|---|---|
| `thcf-events` | Whole Breakfast section (nothing in the top block links to this yet, but keep it consistent for future hero buttons) |
| `thcf-contact-form` | Contact form (in the bottom block — already set) |

---

## Quick copy-paste content

**Featured card fields (Next Breakfast):**
- Badge: `UPCOMING`
- Title: `Next Men's Breakfast`
- When: `Saturday, April 18 · 8:00 AM`
- Description: `Hot food, strong coffee, a short message from a brother, and time to actually talk to the guys around you. Bring a friend — first-timers always welcome. Register so we can plan for you.`
- Button 1: `Register for Breakfast`
- Button 2: `Ask a Question`

**Program 1 (Men's Breakfast tile):**
- Eyebrow: `Monthly Rhythm`
- Title: `Men's Breakfast`
- When: `One Saturday a month · 8:00 AM`
- Description: *Food, teaching, and a room full of guys who show up.*
- Accent: orange (`#E2572E`)

**Program 2 (Tuesday Morning Bible Study):**
- Eyebrow: `Weekly Rhythm`
- Title: `Tuesday Morning Bible Study`
- When: `Tuesdays · 6:00 AM`
- Description: *Coffee, Scripture, and honest conversation before the workday starts.*
- Accent: gold (`#F39615`)

**Program 3 (Men's Ministry Group):**
- Eyebrow: `Ongoing`
- Title: `Men's Ministry Group`
- When: `Rolling meetings — jump in anytime`
- Description: *A brotherhood of men praying, planning, and looking out for one another.*
- Accent: teal-dark (`#0B6B6B`)
