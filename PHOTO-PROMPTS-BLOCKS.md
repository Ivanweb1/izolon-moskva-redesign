# Фото для блоков после первого экрана

Промпты для первого экрана лежат в `PHOTO-PROMPT.md`. Здесь — 15 кадров: 11 для карточек каталога, 1 для карточки «Если вы не знаете…» и 3 для блоков «Применение», «Преимущества» и «Этапы».

## Куда класть

Готовые файлы класть **с этими именами** — сайт подхватит их сам, код править не нужно:

| Папка | Что там |
|---|---|
| `C:\Users\panki\Desktop\izolon-moskva-redesign\assets\catalog\` | 11 фото товаров, `01-…` … `11-…` |
| `C:\Users\panki\Desktop\izolon-moskva-redesign\assets\photos\` | 4 фото блоков |

Пока файла нет, карточка каталога показывает фото со старого сайта, а блок — серую заглушку с именем нужного файла.

## Референсы со старого сайта

`assets/src/old-site/catalog/<товар>/1.jpg … 4.jpg` — все 4 фото каждого товара со старого сайта, в той же нумерации, что и на сайте. **Главный реф** указан в таблице. Его прикладывать к генерации по материалу: цвет, фактура, форма. Надписи, этикетки и фон с рефа не берём.

`assets/src/old-site/backgrounds/` — стоковые фоны старого сайта: девушка с планшетом, мужчина в офисе, стройка, дом-иллюстрация. Их заменяем новыми кадрами, приведены для понимания, **как рефы не прикладывать**.

Для свет/цвет-референса ко всем кадрам «на складе» прикладывать `assets/hero.jpg` — серия должна совпасть с первым экраном.

---

## 1. Каталог — 11 кадров

### Формат

- **4:3, 1600×1200**, JPG 250–400 КБ.
- Предметная съёмка на **бесшовном светло-сером фоне** (#EDEFF4, такой же цвет у подложки карточки — фото сольётся с ней).
- Предмет по центру, занимает **55–70% ширины**, вокруг воздух минимум 12% с каждой стороны. Ничего не обрезано.
- Камера 3/4 сверху (~25°), один и тот же свет во всех 11 кадрах: мягкий бокс слева сверху, мягкая тень справа внизу.
- В каждом кадре виден **срез/торец** материала — это сквозной мотив сайта.

### Общий блок (подставить вместо [каталог])

```
Product photography on a seamless light cool-grey studio background (#EDEFF4), the background fills the whole frame with no visible horizon line.
4:3 frame, camera at a 25-degree angle from above, 3/4 view, 85mm lens, everything in focus.
The product is exactly centred and occupies 55–70% of the frame width, with at least 12% empty background on every side; nothing is cropped.
Soft large softbox light from the upper left, soft natural shadow falling to the lower right, cool neutral colour grade matching a dark-blue and white brand.
The cut edge of the material is clearly visible, showing its fine closed-cell foam structure.
Photorealistic commercial catalogue photo, high detail, no people, no hands, no text, no letters, no logos, no labels, no stickers, no packaging film, no watermark.
```

**Негатив:** text, letters, logos, labels, stickers, barcodes, plastic wrap, packaging film, people, hands, coloured background, green background, blue background, white seamless with harsh shadow, cropped product, product touching frame edge, bubble wrap, mineral wool, styrofoam beads, cartoon, 3d render look, distorted roll, oval core.

### Промпты

| Файл | Главный реф | Товар |
|---|---|---|
| `01-izolon-ppe.jpg` | `old-site/catalog/01-izolon-ppe/1.jpg` | ИЗОЛОН ППЭ |
| `02-izolontape.jpg` | `old-site/catalog/02-izolontape/3.jpg` | Изолонтейп ППЭ |
| `03-isofom.jpg` | `old-site/catalog/03-isofom/3.jpg` | ИЗОФОМ |
| `04-isofom-premium.jpg` | `old-site/catalog/04-isofom-premium/1.jpg` | ИЗОФОМ ППЭ Премиум |
| `05-tube-insulation.jpg` | `old-site/catalog/05-tube-insulation/2.jpg` | Стыковая и трубная изоляция |
| `06-folgoizolon.jpg` | `old-site/catalog/06-folgoizolon/3.jpg` | Фольгоизолон ППЭ |
| `07-mats-sheets.jpg` | `old-site/catalog/07-mats-sheets/2.jpg` | Изолон ППЭ маты-листы |
| `08-damper-tape.jpg` | `old-site/catalog/08-damper-tape/1.jpg` | Лента демпферная |
| `09-ecoheat.jpg` | `old-site/catalog/09-ecoheat/1.jpg` | Подложка под обои ЭкоХит |
| `10-vomlex-npe.jpg` | `old-site/catalog/10-vomlex-npe/2.jpg` | Вомлекс НПЭ |
| `11-eva.jpg` | `old-site/catalog/11-eva/3.jpg` | ЭВА листовой |

**01-izolon-ppe.jpg — ИЗОЛОН ППЭ**
```
One roll of dark-grey cross-linked polyethylene foam (matte, fine-pored closed-cell surface, 10 mm thick sheet) lying on its side, the spiral end with tightly wound layers and a cardboard core turned toward the camera, the outer sheet partly unrolled flat toward the viewer. Same material and colour as the reference.
[каталог]
```

**02-izolontape.jpg — Изолонтейп ППЭ**
```
One roll of light-grey self-adhesive cross-linked polyethylene foam standing upright, the outer layer peeled back to show the adhesive side with a glossy white release liner partly peeled off the foam. Same material as the reference, without any printed tape or branding.
[каталог]
```

**03-isofom.jpg — ИЗОФОМ**
```
Two rolls of cross-linked polyethylene foam standing upright side by side — one dark-grey, one off-white — matte surfaces with medium-sized pores, clean spiral ends visible from above. Same material as the reference, without any plastic wrap or labels.
[каталог]
```

**04-isofom-premium.jpg — ИЗОФОМ ППЭ Премиум**
```
One roll of pale cream-yellow cross-linked polyethylene foam lying on its side, smooth fine-pored microcellular surface, the outer sheet unrolled flat toward the camera, the spiral end with a round core clearly visible. Same material and colour as the reference.
[каталог]
```

**05-tube-insulation.jpg — Стыковая и трубная изоляция**
```
A neat pyramid stack of grey polyethylene foam pipe insulation tubes of several diameters, round open ends facing the camera at a 3/4 angle showing even wall thickness, plus two white solid foam round cords lying in a gentle curve in front of the stack. Same material as the reference.
[каталог]
```

**06-folgoizolon.jpg — Фольгоизолон ППЭ**
```
One roll of foil-faced polyethylene foam standing upright, silver aluminium foil with a fine reinforcing grid texture and soft reflections, the outer layer partly unrolled showing the grey foam underside and the layered cut edge. Same material as the reference.
[каталог]
```

**07-mats-sheets.jpg — Изолон ППЭ маты-листы**
```
A neat stack of thick rectangular cross-linked polyethylene foam sheets, alternating dark-grey and off-white, 15 to 50 mm thick, cleanly cut straight edges facing the camera at a 3/4 angle, the layered side of the stack clearly visible. Same material as the reference.
[каталог]
```

**08-damper-tape.jpg — Лента демпферная**
```
Three rolls of narrow polyethylene foam damper tape of different widths lying flat in a loose group — two white, one dark-grey — the end of one roll unwound in a short loose strip toward the camera. Same material as the reference.
[каталог]
```

**09-ecoheat.jpg — Подложка под обои ЭкоХит**
```
One narrow tall roll of white polyethylene foam wallpaper underlay standing upright, with a second identical roll lying beside it, the outer layer of the standing roll slightly unrolled in a smooth curve, soft matte white surface with fine pores. Plain rolls with no printed paper band, no label.
[каталог]
```

**10-vomlex-npe.jpg — Вомлекс НПЭ**
```
One roll of white non-cross-linked expanded polyethylene foam lying on its side, the characteristic fine wavy ribbed surface clearly visible, the outer sheet unrolled flat toward the camera, spiral end with a core visible. Same material as the reference.
[каталог]
```

**11-eva.jpg — ЭВА листовой**
```
A fanned stack of rectangular EVA foam sheets in white, black and beige, two sheets with a fine diamond embossed texture and one smooth, cut edges showing dense uniform foam, sheets slightly offset like an open fan. Same material as the reference, only these three colours.
[каталог]
```

---

## 2. Карточка «Если вы не знаете…» — 1 кадр

Кадр заменяет девушку с планшетом со старого сайта (стоковых людей убираем). Карточка тёмно-синяя, поэтому фон кадра тоже тёмный.

- `assets/photos/help-samples.jpg` — **4:3, 1600×1200**.
- Реф по материалам: 2–3 фото из `old-site/catalog/` (например, `01/1`, `06/3`, `11/3`).

```
A neat fan of small rectangular material samples laid on a dark navy-blue matte surface (#1D2554): grey cross-linked polyethylene foam of several thicknesses, silver foil-faced foam, off-white foam, white wavy expanded polyethylene, black and beige EVA with diamond embossing — each sample showing its cut edge. Top-down 3/4 view, 4:3 frame, the fan occupies 60% of the frame width, centred, dark navy background around it.
Soft directional light from the upper left, subtle shadows, cool neutral grade.
Photorealistic commercial photo, high detail, no people, no hands, no text, no letters, no logos, no labels, no watermark.
```
**Негатив:** people, hands, text, logos, labels, colourful background, wood table, cluttered, cartoon.

---

## 3. Кадры блоков — 3 штуки (та же серия, что первый экран)

Ко всем трём прикладывать `assets/hero.jpg` как реф по свету, складу и цвету.

### `assets/photos/usage-house.jpg` — блок «Применение»

Заменяет иллюстрацию дома в жёлтом круге. Справа от фото идёт список из 8 пунктов: кровля, перекрытия, полы, стяжка, фундамент, тёплый пол, вентиляция, стены.

- **1:1, 2000×2000** (на телефоне режется до 4:3 по центру — главное держать в центральных 75% высоты).

```
Architectural cutaway visualisation of a modern two-storey house cut in half like a section model, showing where grey polyethylene foam insulation is installed: under the roof, between floors, under laminate flooring and screed, around the foundation, inside the walls and wrapped around ventilation ducts. The grey foam layers are clearly visible in every cut section.
Clean light-grey and white architectural model look with dark-blue accents, set on a plain light cool-grey background, soft studio light, slight 3/4 view from the front, 1:1 frame, the house occupies 70% of the frame and sits in the central 75% of the height.
Photorealistic architectural visualisation, high detail, no people, no text, no labels, no arrows, no callouts, no logos, no watermark.
```
**Негатив:** text, labels, arrows, callouts, infographic, cartoon, people, furniture clutter, yellow insulation, mineral wool, pink insulation, glowing circle.

### `assets/photos/benefits-stock.jpg` — блок «Преимущества»

Плитка 2×2 рядом с карточками «товар всегда в наличии», «отгрузка в течение часа» и т. д.

- **1:1, 2000×2000**; на планшете и телефоне режется до 4:3 — главное в центральных 75% высоты.

```
Same warehouse, lighting and colour grade as the reference image. A long aisle between tall dark-blue steel pallet racks with yellow beams, every shelf fully stocked with neat rolls of grey, white and silver foil-faced polyethylene foam insulation and stacks of foam sheets on pallets, perspective vanishing toward the centre of the frame.
Square 1:1 frame, camera at chest height in the middle of the aisle, 28mm lens, deep focus, polished light-grey concrete floor, soft daylight from high windows plus cool overhead light.
Photorealistic commercial photography, high detail, no people, no forklift, no text, no letters, no logos, no labels, no signs, no watermark.
```
**Негатив:** people, workers, forklift, text, signs, labels, logos, cardboard boxes, empty shelves, cluttered floor, fisheye, tilted horizon.

### `assets/photos/steps-shipping.jpg` — блок «Этапы взаимодействия»

Заменяет стоковое фото мужчины в офисе. Иллюстрирует шаг 4 «Получаете товар (доставка или самовывоз)». Блок тёмно-синий.

- **3:2, 2400×1600**.

```
Same warehouse, lighting and colour grade as the reference image. An open loading dock gate of the warehouse at dusk, a white light-commercial van with its rear doors open is backed up to the dock, a few rolls of grey and silver foil-faced polyethylene foam insulation already loaded inside, and a wooden pallet with more rolls standing on the dock next to the van.
3:2 frame, camera at waist height inside the warehouse looking out through the gate, 35mm lens, the van and pallet occupy the central 50% of the frame, cool blue evening light outside, warm-neutral light inside, calm dark-blue tones overall.
Photorealistic commercial photography, high detail, no people, no text, no letters, no logos, no number plates, no brand names on the van, no watermark.
```
**Негатив:** people, drivers, text, logos, brand names, number plates, truck branding, cardboard boxes, rain, cartoon, fisheye.
