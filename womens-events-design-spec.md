# Women's Events Section — GHL Build Spec

Reference card for rebuilding the "Women's Events" section in GHL drag-and-drop so it matches the original code layout. Drop this section **between** `womens-top.ghl.html` and `womens-bottom.ghl.html`.

Section ID (so the "See Events" button in the hero jumps here): **`thcf-events`**

---

## 1. Section Wrapper

| Setting | Value |
|---|---|
| Background | Vertical gradient — top `#FFFFFF` → bottom `#F4E4E7` (rose-soft) |
| Padding — top | `80px` desktop · `56px` mobile |
| Padding — bottom | `80px` desktop · `56px` mobile |
| Padding — left/right | `24px` |
| Max content width | `1140px` (centered) |
| Section ID / anchor | `thcf-events` |

If GHL doesn't offer a gradient, use a solid rose-soft background `#F4E4E7` — it still reads correctly.

---

## 2. Section Header (centered intro block)

Three stacked elements, center-aligned, max-width `760px`.

### 2a. Eyebrow — "Women's Events"

| Setting | Value |
|---|---|
| Text | `Women's Events` |
| Font size | `13px` |
| Font weight | `700` (Bold) |
| Letter spacing | `0.18em` (or ~2.5px) |
| Text transform | UPPERCASE |
| Color | `#C97B87` (rose) |
| Margin bottom | `12px` |
| Decorative rule | 48px × 3px horizontal bar in `#C97B87`, centered directly **above** the text (opacity ~55%) |

### 2b. Headline — "Save the date."

| Setting | Value |
|---|---|
| Text | `Save the date.` |
| Font size | `46px` desktop · `28px` mobile |
| Font weight | `700` |
| Line height | `1.15` |
| Color | `#1F2937` (gray-800) |
| Margin bottom | `18px` |

### 2c. Lead paragraph

| Setting | Value |
|---|---|
| Text | `A featured upcoming gathering — and there's more on the horizon.` |
| Font size | `19px` desktop · `16px` mobile |
| Font weight | `400` |
| Line height | `1.65` |
| Color | `#4B5563` (gray-600) |
| Margin bottom | `44px` (space before the card) |

---

## 3. Featured Event Card

A 2-column card. Left column = image/graphic. Right column = event copy.

### Card container

| Setting | Value |
|---|---|
| Background | `#FFFFFF` |
| Border radius | `24px` |
| Box shadow (see §5b) | X `0` · Y `20` · Blur `20` · Spread `0` · Color `#A85E6C40` (25% alpha) |
| Border | `1px solid #F3F4F6` (this replaces the second CSS shadow layer) |
| Overflow | Hidden (so the image corners round with the card) |
| Column split | Left 6 / Right 5 (roughly 55% / 45%) |
| Stack on mobile | Yes, at ~900px breakpoint — image on top, text below |

### 3a. Left column — Image

| Setting | Value |
|---|---|
| Min height | `340px` |
| Fallback background (if no image yet) | Diagonal gradient `135deg` — `#D8A4AD` → `#A85E6C` |
| Image fit | Cover, center |
| Border radius | Inherits from card (no separate radius needed) |

Placeholder text overlay for the fallback (drop as centered text on top of the gradient):

- Top eyebrow: `SAVE THE DATE` — 10px, weight 700, letter spacing `0.32em`, white 85% opacity
- Big serif italic: `Women's Retreat` — Georgia italic, 52px desktop / 34px mobile, white
- Meta line: `JUNE 13 · TEMECULA` — 11px, weight 700, letter spacing `0.22em`, white 85% opacity

### 3b. Right column — Body (padding `44px` desktop, `28px` mobile)

Vertically centered. Stack the following:

**Badge pill** — "Upcoming"

| Setting | Value |
|---|---|
| Background | `#F4E4E7` (rose-soft) |
| Text color | `#C97B87` (rose) |
| Padding | `5px 12px` |
| Border radius | `999px` (fully rounded) |
| Font size | `11px` |
| Font weight | `800` |
| Letter spacing | `0.18em` UPPERCASE |
| Margin bottom | `14px` |

**Title** — "2026 Women's Retreat"

| Setting | Value |
|---|---|
| Font size | `32px` desktop · `24px` mobile |
| Font weight | `800` |
| Line height | `1.2` |
| Color | `#1F2937` |
| Margin bottom | `10px` |

**When line** — "📅  June 13 · Temecula"

| Setting | Value |
|---|---|
| Font size | `14px` |
| Font weight | `700` |
| Color | `#C97B87` (rose) |
| Margin bottom | `14px` |
| Optional calendar icon at left, 16×16, same rose color |

**Description paragraph**

| Setting | Value |
|---|---|
| Font size | `15.5px` |
| Line height | `1.7` |
| Color | `#4B5563` (gray-600) |
| Margin bottom | `18px` |

Suggested copy — *Save the date for our Women's Day Retreat 2026! Join us on June 13th for a refreshing and encouraging day together in Temecula. More details are coming soon — stay tuned for other special events too.*

**Actions row** — two buttons, `10px` gap, wrap on mobile

Primary button — "I'm Interested"
- Background `#C97B87` · Text `#FFFFFF`
- Padding `14px 26px` · Border radius `10px`
- Font size `15px` · Weight `700`
- Shadow — X `0` · Y `8` · Blur `20` · Spread `0` · Color `#C97B8738` (22% alpha)
- Link to `#thcf-contact-form` (or the retreat sign-up URL when you have it)

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
| Rose (primary) | `#C97B87` | Eyebrow, "When" line, primary button, badge text |
| Rose deep | `#A85E6C` | Bottom of image gradient, hero accents |
| Rose light | `#D8A4AD` | Top of image gradient |
| Rose soft | `#F4E4E7` | Section gradient bottom, badge bg |
| Gold accent | `#F39615` | Small square accent on program images (10–12px offset, 60×60px, `14px` radius) |
| Text dark | `#1F2937` | Headings |
| Text body | `#4B5563` | Paragraphs |
| Text muted | `#6B7280` | Meta lines |
| Border | `#E5E7EB` | Input & card outlines |
| Border light | `#F3F4F6` | Card ring / hairline |

---

## 5b. GHL Box-Shadow panel — exact fields

GHL's shadow control has five fields: **X · Y · Blur · Spread · Color**, each capped at **20px max**. Set **Outer Shadow** (not inner). The original CSS used softer 30–60px blurs; capped values below use higher alpha to compensate so the shadow still reads as "elevated" instead of a thin hard drop.

| Element | X | Y | Blur | Spread | Color (with alpha) | Color (fallback if picker won't accept alpha) |
|---|---|---|---|---|---|---|
| Featured event card | `0` | `20` | `20` | `0` | `#A85E6C40` (25%) | `#DBB5BC` |
| Secondary event card | `0` | `12` | `20` | `0` | `#A85E6C29` (16%) | `#E8D5D9` |
| Primary rose button (I'm Interested / Sign Up) | `0` | `8` | `20` | `0` | `#C97B8738` (22%) | `#EACFD5` |
| Orange button (Plan Your Visit) | `0` | `8` | `20` | `0` | `#E2572E40` (25%) | `#F5C9BB` |
| Teal button (if used) | `0` | `8` | `20` | `0` | `#0B6B6B38` (22%) | `#B7D4D4` |
| Form card (contact form) | `0` | `20` | `20` | `0` | `#A85E6C40` (25%) | `#DBB5BC` |
| Small pill / badge | none | | | | | |

Buttons already fit within the 20/20 cap (they were designed as Y=8, Blur=20). The two big cards were re-tuned from Y=30, Blur=60 down to the max 20/20 with the alpha nudged up ~9 points so the shadow still reads.

**Two ways to get the color:**

1. **If GHL's color field accepts 8-character hex** (some pickers do — try pasting `#A85E6C29` and see if the last two chars stick): use the *first* Color column. The last two chars are alpha in hex — `29` = 16%, `1A` = 10%, `38` = 22%, `40` = 25%.
2. **If GHL strips the alpha** (many pickers only take 6-char hex like the `#707070` in your screenshot): use the *fallback* column. Those are the visual color you'd get if the semi-transparent shadow were painted on a white background — a soft tinted grey that reads close enough to the real thing.

Alpha → hex cheat sheet if you want to build others: 10% = `1A`, 15% = `26`, 16% = `29`, 20% = `33`, 22% = `38`, 25% = `40`, 30% = `4D`, 40% = `66`, 50% = `80`.

**Note on the second shadow layer.** In CSS the card had `0 30px 60px …` *and* `0 0 0 1px #F3F4F6` — that second one is a hairline ring around the card. GHL can't stack two shadows in one control, so replicate it with **Border: `1px solid #F3F4F6`** on the card instead. Same visual result.

**Inner Shadow** — leave off. None of the elements in this design use inner shadows.

---

## 5. Corner-radius vocabulary

Use these consistently so the section feels like the top + bottom code blocks:

| Element | Radius |
|---|---|
| Big cards (featured event, form card) | `24px` |
| Program image blocks (Bible studies) | `20px` |
| Buttons | `10px` |
| Input fields | `10px` |
| Pill / badge | `999px` (fully rounded) |
| Verse callout | `18px` |

---

## 6. Adding more events

For each additional event, duplicate the card container above. If you want a lighter treatment for secondary events:

- Drop the shadow to `0 12px 30px rgba(168, 94, 108, 0.10)`
- Reduce card padding to `28px`
- Keep the same badge / title / when / actions rhythm

---

## 7. Bible Studies section (right after Events)

Use the same header pattern (§2) with:
- Eyebrow: `Bible Studies & Programs`
- Headline: `Where we gather, study, and grow.`
- Lead: `Four ongoing rhythms — pick the one that fits your week.`

Then four alternating rows. Each row is a 2-column layout (~5fr / 7fr), image left + text right on the odd rows, reversed on the even rows. Section backgrounds alternate white → gray-50 (`#F9FAFB`) → white → gray-50.

Per-row settings (image side):

| Setting | Value |
|---|---|
| Aspect ratio | 1 : 1 (square) |
| Border radius | `20px` |
| Background gradient (fallback) | `135deg` `#D8A4AD` → `#A85E6C` |
| Max width | `420px` |
| Small square accent | 60×60px, `14px` radius, gold `#F39615`, positioned bottom-left, offset -12px / -12px |

Per-row settings (text side): same eyebrow / title / when / body / buttons pattern as the featured card, minus the badge pill.

Program accents (per study) — change the eyebrow color and "when" color to match:

| Study | Accent color |
|---|---|
| Tuesday Night Bible Study | `#C97B87` (rose) |
| Mom's Garden | `#F39615` (gold) |
| Friday Morning Bible Study | `#0B6B6B` (teal-dark) |
| Moms in Prayer | `#C97B87` (rose) |

---

## 8. Anchor IDs the top + bottom blocks link to

Set these on your GHL sections so the buttons in the header/hero jump correctly:

| Anchor | Section |
|---|---|
| `thcf-events` | Whole Events section (the "See Events" hero button jumps here) |
| `thcf-contact-form` | Contact form (in the bottom block — already set) |

---

## Quick copy-paste content

**Event card fields (2026 Retreat):**
- Badge: `UPCOMING`
- Title: `2026 Women's Retreat`
- When: `June 13 · Temecula`
- Description: `Save the date for our Women's Day Retreat 2026! Join us on June 13th for a refreshing and encouraging day together in Temecula. More details are coming soon — stay tuned for other special events too.`
- Button 1: `I'm Interested`
- Button 2: `Ask a Question`
