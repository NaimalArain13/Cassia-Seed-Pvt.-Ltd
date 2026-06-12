---
title: Pakistan Vegetable Seed Sowing Calendar
purpose: Agent knowledge base for (1) season-based seed category marquee and (2) user-facing sowing calendar
source_url: https://www.agribusiness.com.pk/vegetables-growing-calendar-in-pakistan/
source_name: Agribusiness Pakistan
source_author: Safdar Abbas
source_published: 2017-10-31
source_modified: 2021-11-09
region: Pakistan
language: en + ur (bilingual crop names)
units:
  spacing: inches
  yield: per plant
  harvest_time: days after sowing
schema_version: 1.0
---

# Pakistan Vegetable Seed Sowing Calendar

Structured knowledge base derived from the Agribusiness Pakistan growing calendar. Intended for agent consumption: driving a **current-season seed category marquee** today, and serving a **user-facing sowing calendar** for the knowledge base. Crop → product/seed mapping is out of scope for now and added later.

---

## 1. Seasons

There are two primary growing seasons. A crop may belong to one or both, depending on whether its sowing window falls in a summer or winter slot.

| season_id | name | sowing_window | harvest_window | summary |
|---|---|---|---|---|
| `summer` | Summer Vegetables | Spring (Feb – March), with a second slot for some crops in June – July | Produce until Sep – Oct | Warm-season crops sown in spring; many gourds and fruiting vegetables. |
| `winter` | Winter Vegetables | Sep – Oct | Produce until Feb – March | Cool-season crops; brassicas, roots, and leafy greens. |

### Summer crop list (as named in source)
Tomato, Hot pepper, Sweet pepper, Brinjal, Cucumber, Okra, Bottle Gourd, Sponge Gourd, Bitter Gourd, Tinda Gourd, Pumpkin, Arum, Potato, Mint, Turmeric, Ginger, Musk Melon, Water Melon, Sweet Potato, Groundnut.

### Winter crop list (as named in source)
Cabbage, Cauliflower, Broccoli, Carrot, Potato, Onion, Lettuce leaf, Radish, Turnip, Peas, Spinach, Fenugreek, Beets, Mustard, Coriander, Mint, Garlic.

> Note: The summary lists above mention a few crops (Pumpkin, Musk Melon, Water Melon, Groundnut, Beets) that do not appear as rows in the detailed crop table below. They are retained here for completeness but have no agronomic row data in the source.

---

## 2. Caveats & sowing notes (from source)

These are general rules; the agent should surface them as guidance, not hard constraints.

- The seasons above suit most areas, but **exceptions vary crop to crop**. For example, tomato can be grown year-round in Karachi or similar mild-climate areas, but cannot be grown where frost is certain.
- **Different varieties exist for different seasons** of the same crop — e.g. the summer radish variety differs from the winter radish variety.
- **Early and late sowing** can be beneficial: prepare spring-planting seedlings in winter under plastic sheets, and fall-planting seedlings in summer under shades. These yield off-season vegetables that are otherwise costly in the market.

---

## 3. Crop reference table

Full agronomic detail per crop. Blank cells mean the value was not provided in the source. Spacing is in inches; yield is per plant; first-harvest is days after sowing.

| crop_id | english_name | urdu_name | sowing_time | row_spacing_in | plant_spacing_in | yield_per_plant | first_harvest |
|---|---|---|---|---|---|---|---|
| `arum` | Arum | اروی | Feb – March | 24 | 18 | — | 180 – 200 days |
| `bitter_gourd` | Bitter Gourd | کریلہ | Feb – March, June – July | 36 | 12 | 3 kg | — |
| `bottle_gourd` | Bottle Gourd | کدو | Feb – March, June – July, October | 36 | 18 | 4 kg | — |
| `brinjal` | Brinjal | بینگن | Feb – March, June, Nov | 30 | 18 | 2 kg | 60 – 70 days |
| `broccoli` | Broccoli | — | Aug – Nov | 24 | 12 | 0.75 kg | 60 – 80 days |
| `cabbage` | Cabbage | بند گوبھی | Aug – Nov | 24 | 12 | 0.75 kg | 60 – 100 days |
| `carrot` | Carrot | گاجر | Sep – Oct | 18 | 2 | 130 gm | 60 – 80 days |
| `cauliflower` | Cauliflower | پھول گوبھی | June – Oct | 24 | 12 | 850 gm | 60 – 80 days |
| `celery` | Celery | — | Sep – Oct | 12 | 4 | 100 gm | 100 – 120 days |
| `coriander` | Coriander | دھنیا | July – Nov, Feb – April | — | — | — | 45 – 50 days |
| `cucumber` | Cucumber | کھیرا | Feb – July | 36 | 18 | 2.5 kg | 50 – 70 days |
| `fenugreek` | Fenugreek | میتھی | Sep – Oct | — | — | — | — |
| `garlic` | Garlic | لہسن | Sep – Oct | 8 | 4 | 50 gm | — |
| `ginger` | Ginger | ادرک | Feb – March | 12 | 8 | — | — |
| `hot_peppers` | Hot Peppers | مرچ | Sep – Oct, Feb | 30 | 18 | 1.5 kg | 50 – 60 days |
| `lettuce` | Lettuce | سلاد پتہ | Sep – Oct | 12 | 6 | — | — |
| `mint` | Mint | پودینہ | July – Nov, Feb – April | — | — | — | 45 – 50 days |
| `mustard` | Mustard | سرسوں | Sep – Oct | — | — | — | — |
| `okra` | Okra | بھنڈی | Feb – March, June – July | 24 | 18 | 1 kg | 70 – 90 days |
| `onion` | Onion | پیاز | Feb – March, Sep – Oct | 12 | 4 | 100 gm | 150 – 180 days |
| `peas` | Peas | مٹر | mid Sep – mid Nov | 24 | 2 | 600 gm | 50 – 75 days |
| `potato` | Potato | آلو | Feb – March, Sep – Oct | 24 | 8 | 1 kg | 110 – 150 days |
| `radish` | Radish | مولی | July – Nov, Feb – March | 18 | 2 | 120 gm | 30 – 60 days |
| `spinach` | Spinach | پالک | June – Nov | — | — | — | 50 – 80 days |
| `sponge_gourd` | Sponge Gourd | توری | Feb – April, June – July | 36 | 18 | 2.5 kg | 60 – 70 days |
| `sweet_peppers` | Sweet Peppers | شملہ مرچ | Oct – Nov, February | 30 | 18 | 1 kg | 50 – 60 days |
| `sweet_potato` | Sweet Potato | شکر قندی | Feb – March | 36 | 18 | 700 gm | 140 – 150 days |
| `tinda_gourd` | Tinda Gourd | ٹینڈا | March – April, June – July | 36 | 18 | 1 kg | 50 – 60 days |
| `tomato` | Tomato | ٹماٹر | Feb – March, Sep – Nov | 30 | 18 | 2.5 kg | 60 – 70 days |
| `turmeric` | Turmeric | ہلدی | March – April, June – July | 36 | — | 1 kg | — |
| `turnip` | Turnip | شلجم | Aug – Nov | 24 | 3 | 150 gm | 60 – 90 days |

---

## 4. Season → crop grouping

Derived from each crop's sowing window. A crop appears under **both** seasons when it has both a spring/summer slot and an autumn/winter slot.

### `summer` (spring/summer sowing)
arum, bitter_gourd, bottle_gourd, brinjal, coriander, cucumber, ginger, hot_peppers, mint, okra, onion, potato, radish, sponge_gourd, sweet_peppers, sweet_potato, tinda_gourd, tomato, turmeric

### `winter` (autumn/winter sowing)
bottle_gourd, brinjal, broccoli, cabbage, carrot, cauliflower, celery, coriander, fenugreek, garlic, hot_peppers, lettuce, mint, mustard, onion, peas, potato, radish, spinach, sweet_peppers, tomato, turnip

---

## 5. Month → sowable crops index

Primary driver for the **current-season marquee**. For a given month, these crops are within their sowing window. Use this to decide which seed categories to surface today.

| month | sowable crops |
|---|---|
| **January** | — (no crop's window includes January) |
| **February** | arum, bitter_gourd, bottle_gourd, brinjal, coriander, cucumber, ginger, hot_peppers, mint, okra, onion, potato, radish, sponge_gourd, sweet_peppers, sweet_potato, tomato |
| **March** | arum, bitter_gourd, bottle_gourd, brinjal, coriander, cucumber, ginger, mint, okra, onion, potato, radish, sponge_gourd, sweet_potato, tinda_gourd, tomato, turmeric |
| **April** | coriander, cucumber, mint, sponge_gourd, tinda_gourd, turmeric |
| **May** | cucumber |
| **June** | bitter_gourd, bottle_gourd, brinjal, cauliflower, cucumber, okra, sponge_gourd, spinach, tinda_gourd, turmeric |
| **July** | bitter_gourd, bottle_gourd, cauliflower, coriander, cucumber, mint, okra, radish, sponge_gourd, spinach, tinda_gourd, turmeric |
| **August** | broccoli, cabbage, cauliflower, coriander, mint, radish, spinach, turnip |
| **September** | broccoli, cabbage, carrot, cauliflower, celery, coriander, fenugreek, garlic, hot_peppers, lettuce, mint, mustard, onion, peas, potato, radish, spinach, tomato, turnip |
| **October** | bottle_gourd, broccoli, cabbage, carrot, cauliflower, celery, coriander, fenugreek, garlic, hot_peppers, lettuce, mint, mustard, onion, peas, potato, radish, spinach, sweet_peppers, tomato, turnip |
| **November** | brinjal, broccoli, cabbage, coriander, mint, peas, radish, spinach, sweet_peppers, tomato, turnip |
| **December** | — (no crop's window includes December) |

> Marquee logic hint: map the current month to its row above, then resolve each `crop_id` against the crop reference table (and later, against the real product catalogue). The dominant season for a month can be inferred from §4 — Feb–Mar lean summer, Sep–Oct lean winter, and overlap months (e.g. June, Nov) carry both.

---

## 6. Machine-readable block (optional for agent)

Normalized JSON mirror of the data above, for direct programmatic use. `sowing_months` uses numeric months (1–12) parsed from the source sowing windows.

```json
{
  "seasons": {
    "summer": { "name": "Summer Vegetables", "sowing_window": "Feb–March (+ June–July for some)", "harvest_window": "until Sep–Oct" },
    "winter": { "name": "Winter Vegetables", "sowing_window": "Sep–Oct", "harvest_window": "until Feb–March" }
  },
  "crops": [
    { "id": "arum", "en": "Arum", "ur": "اروی", "sowing_time": "Feb – March", "sowing_months": [2,3], "seasons": ["summer"], "row_spacing_in": 24, "plant_spacing_in": 18, "yield_per_plant": null, "first_harvest": "180–200 days" },
    { "id": "bitter_gourd", "en": "Bitter Gourd", "ur": "کریلہ", "sowing_time": "Feb – March, June – July", "sowing_months": [2,3,6,7], "seasons": ["summer"], "row_spacing_in": 36, "plant_spacing_in": 12, "yield_per_plant": "3 kg", "first_harvest": null },
    { "id": "bottle_gourd", "en": "Bottle Gourd", "ur": "کدو", "sowing_time": "Feb – March, June – July, October", "sowing_months": [2,3,6,7,10], "seasons": ["summer","winter"], "row_spacing_in": 36, "plant_spacing_in": 18, "yield_per_plant": "4 kg", "first_harvest": null },
    { "id": "brinjal", "en": "Brinjal", "ur": "بینگن", "sowing_time": "Feb – March, June, Nov", "sowing_months": [2,3,6,11], "seasons": ["summer","winter"], "row_spacing_in": 30, "plant_spacing_in": 18, "yield_per_plant": "2 kg", "first_harvest": "60–70 days" },
    { "id": "broccoli", "en": "Broccoli", "ur": null, "sowing_time": "Aug – Nov", "sowing_months": [8,9,10,11], "seasons": ["winter"], "row_spacing_in": 24, "plant_spacing_in": 12, "yield_per_plant": "0.75 kg", "first_harvest": "60–80 days" },
    { "id": "cabbage", "en": "Cabbage", "ur": "بند گوبھی", "sowing_time": "Aug – Nov", "sowing_months": [8,9,10,11], "seasons": ["winter"], "row_spacing_in": 24, "plant_spacing_in": 12, "yield_per_plant": "0.75 kg", "first_harvest": "60–100 days" },
    { "id": "carrot", "en": "Carrot", "ur": "گاجر", "sowing_time": "Sep – Oct", "sowing_months": [9,10], "seasons": ["winter"], "row_spacing_in": 18, "plant_spacing_in": 2, "yield_per_plant": "130 gm", "first_harvest": "60–80 days" },
    { "id": "cauliflower", "en": "Cauliflower", "ur": "پھول گوبھی", "sowing_time": "June – Oct", "sowing_months": [6,7,8,9,10], "seasons": ["summer","winter"], "row_spacing_in": 24, "plant_spacing_in": 12, "yield_per_plant": "850 gm", "first_harvest": "60–80 days" },
    { "id": "celery", "en": "Celery", "ur": null, "sowing_time": "Sep – Oct", "sowing_months": [9,10], "seasons": ["winter"], "row_spacing_in": 12, "plant_spacing_in": 4, "yield_per_plant": "100 gm", "first_harvest": "100–120 days" },
    { "id": "coriander", "en": "Coriander", "ur": "دھنیا", "sowing_time": "July – Nov, Feb – April", "sowing_months": [7,8,9,10,11,2,3,4], "seasons": ["summer","winter"], "row_spacing_in": null, "plant_spacing_in": null, "yield_per_plant": null, "first_harvest": "45–50 days" },
    { "id": "cucumber", "en": "Cucumber", "ur": "کھیرا", "sowing_time": "Feb – July", "sowing_months": [2,3,4,5,6,7], "seasons": ["summer"], "row_spacing_in": 36, "plant_spacing_in": 18, "yield_per_plant": "2.5 kg", "first_harvest": "50–70 days" },
    { "id": "fenugreek", "en": "Fenugreek", "ur": "میتھی", "sowing_time": "Sep – Oct", "sowing_months": [9,10], "seasons": ["winter"], "row_spacing_in": null, "plant_spacing_in": null, "yield_per_plant": null, "first_harvest": null },
    { "id": "garlic", "en": "Garlic", "ur": "لہسن", "sowing_time": "Sep – Oct", "sowing_months": [9,10], "seasons": ["winter"], "row_spacing_in": 8, "plant_spacing_in": 4, "yield_per_plant": "50 gm", "first_harvest": null },
    { "id": "ginger", "en": "Ginger", "ur": "ادرک", "sowing_time": "Feb – March", "sowing_months": [2,3], "seasons": ["summer"], "row_spacing_in": 12, "plant_spacing_in": 8, "yield_per_plant": null, "first_harvest": null },
    { "id": "hot_peppers", "en": "Hot Peppers", "ur": "مرچ", "sowing_time": "Sep – Oct, Feb", "sowing_months": [9,10,2], "seasons": ["summer","winter"], "row_spacing_in": 30, "plant_spacing_in": 18, "yield_per_plant": "1.5 kg", "first_harvest": "50–60 days" },
    { "id": "lettuce", "en": "Lettuce", "ur": "سلاد پتہ", "sowing_time": "Sep – Oct", "sowing_months": [9,10], "seasons": ["winter"], "row_spacing_in": 12, "plant_spacing_in": 6, "yield_per_plant": null, "first_harvest": null },
    { "id": "mint", "en": "Mint", "ur": "پودینہ", "sowing_time": "July – Nov, Feb – April", "sowing_months": [7,8,9,10,11,2,3,4], "seasons": ["summer","winter"], "row_spacing_in": null, "plant_spacing_in": null, "yield_per_plant": null, "first_harvest": "45–50 days" },
    { "id": "mustard", "en": "Mustard", "ur": "سرسوں", "sowing_time": "Sep – Oct", "sowing_months": [9,10], "seasons": ["winter"], "row_spacing_in": null, "plant_spacing_in": null, "yield_per_plant": null, "first_harvest": null },
    { "id": "okra", "en": "Okra", "ur": "بھنڈی", "sowing_time": "Feb – March, June – July", "sowing_months": [2,3,6,7], "seasons": ["summer"], "row_spacing_in": 24, "plant_spacing_in": 18, "yield_per_plant": "1 kg", "first_harvest": "70–90 days" },
    { "id": "onion", "en": "Onion", "ur": "پیاز", "sowing_time": "Feb – March, Sep – Oct", "sowing_months": [2,3,9,10], "seasons": ["summer","winter"], "row_spacing_in": 12, "plant_spacing_in": 4, "yield_per_plant": "100 gm", "first_harvest": "150–180 days" },
    { "id": "peas", "en": "Peas", "ur": "مٹر", "sowing_time": "mid Sep – mid Nov", "sowing_months": [9,10,11], "seasons": ["winter"], "row_spacing_in": 24, "plant_spacing_in": 2, "yield_per_plant": "600 gm", "first_harvest": "50–75 days" },
    { "id": "potato", "en": "Potato", "ur": "آلو", "sowing_time": "Feb – March, Sep – Oct", "sowing_months": [2,3,9,10], "seasons": ["summer","winter"], "row_spacing_in": 24, "plant_spacing_in": 8, "yield_per_plant": "1 kg", "first_harvest": "110–150 days" },
    { "id": "radish", "en": "Radish", "ur": "مولی", "sowing_time": "July – Nov, Feb – March", "sowing_months": [7,8,9,10,11,2,3], "seasons": ["summer","winter"], "row_spacing_in": 18, "plant_spacing_in": 2, "yield_per_plant": "120 gm", "first_harvest": "30–60 days" },
    { "id": "spinach", "en": "Spinach", "ur": "پالک", "sowing_time": "June – Nov", "sowing_months": [6,7,8,9,10,11], "seasons": ["winter"], "row_spacing_in": null, "plant_spacing_in": null, "yield_per_plant": null, "first_harvest": "50–80 days" },
    { "id": "sponge_gourd", "en": "Sponge Gourd", "ur": "توری", "sowing_time": "Feb – April, June – July", "sowing_months": [2,3,4,6,7], "seasons": ["summer"], "row_spacing_in": 36, "plant_spacing_in": 18, "yield_per_plant": "2.5 kg", "first_harvest": "60–70 days" },
    { "id": "sweet_peppers", "en": "Sweet Peppers", "ur": "شملہ مرچ", "sowing_time": "Oct – Nov, February", "sowing_months": [10,11,2], "seasons": ["summer","winter"], "row_spacing_in": 30, "plant_spacing_in": 18, "yield_per_plant": "1 kg", "first_harvest": "50–60 days" },
    { "id": "sweet_potato", "en": "Sweet Potato", "ur": "شکر قندی", "sowing_time": "Feb – March", "sowing_months": [2,3], "seasons": ["summer"], "row_spacing_in": 36, "plant_spacing_in": 18, "yield_per_plant": "700 gm", "first_harvest": "140–150 days" },
    { "id": "tinda_gourd", "en": "Tinda Gourd", "ur": "ٹینڈا", "sowing_time": "March – April, June – July", "sowing_months": [3,4,6,7], "seasons": ["summer"], "row_spacing_in": 36, "plant_spacing_in": 18, "yield_per_plant": "1 kg", "first_harvest": "50–60 days" },
    { "id": "tomato", "en": "Tomato", "ur": "ٹماٹر", "sowing_time": "Feb – March, Sep – Nov", "sowing_months": [2,3,9,10,11], "seasons": ["summer","winter"], "row_spacing_in": 30, "plant_spacing_in": 18, "yield_per_plant": "2.5 kg", "first_harvest": "60–70 days", "notes": "Can be grown year-round in mild-climate areas like Karachi." },
    { "id": "turmeric", "en": "Turmeric", "ur": "ہلدی", "sowing_time": "March – April, June – July", "sowing_months": [3,4,6,7], "seasons": ["summer"], "row_spacing_in": 36, "plant_spacing_in": null, "yield_per_plant": "1 kg", "first_harvest": null },
    { "id": "turnip", "en": "Turnip", "ur": "شلجم", "sowing_time": "Aug – Nov", "sowing_months": [8,9,10,11], "seasons": ["winter"], "row_spacing_in": 24, "plant_spacing_in": 3, "yield_per_plant": "150 gm", "first_harvest": "60–90 days" }
  ]
}
```

---

## 7. Field dictionary

| field | meaning |
|---|---|
| `crop_id` / `id` | Stable slug key for joining to a product/seed catalogue later. |
| `english_name` / `en` | Crop name in English. |
| `urdu_name` / `ur` | Crop name in Urdu (`null`/`—` where the source omitted it). |
| `sowing_time` | Verbatim sowing window text from the source. |
| `sowing_months` | Numeric months (1–12) parsed from `sowing_time`, for filtering. |
| `seasons` | Derived season membership: `summer`, `winter`, or both. |
| `row_spacing_in` | Distance between rows, inches. |
| `plant_spacing_in` | Distance between plants within a row, inches. |
| `yield_per_plant` | Expected yield per plant. |
| `first_harvest` | Days from sowing to first harvest. |
