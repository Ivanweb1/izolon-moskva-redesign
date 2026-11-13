# Фото галереи карточек каталога — 44 кадра

В карточке товара 5 фото: первое — новое студийное (`assets/catalog/<товар>.jpg`), фото 2–5 пока берутся со старого сайта и вписываются в превью целиком. Клиент просит, чтобы все фото заполняли превью, как первое. Значит, фото 2–5 надо переснять в той же студийной серии.

## Куда класть

`C:\Users\panki\Desktop\izolon-moskva-redesign\assets\catalog\`, имя — **`<товар>-<номер фото>.jpg`**, номер от 2 до 5:

```
07-mats-sheets.jpg     ← фото 1, уже есть
07-mats-sheets-2.jpg   ← по старому 1.jpg
07-mats-sheets-3.jpg   ← по старому 2.jpg
07-mats-sheets-4.jpg   ← по старому 3.jpg
07-mats-sheets-5.jpg   ← по старому 4.jpg
```

Сайт подхватит файл сам. Пока нового файла нет, на его месте остаётся старое фото, поэтому класть можно по одному.

## Формат

- **4:3, 1600×1200**, JPG 250–400 КБ.
- Фон, свет и цвет — как у первого фото товара: бесшовный светло-серый #EDEFF4, мягкий бокс слева сверху.
- **Рефы к каждой генерации:** (1) первое фото этого товара `assets/catalog/<товар>.jpg` — по материалу, цвету и свету, чтобы 5 фото были одной серией; (2) старое фото `assets/src/old-site/catalog/<товар>/<n>.jpg` — только по ракурсу и сюжету. Надписи, этикетки, людей и фон со старого фото не берём.
- Кадры с пометкой **[общий]** — товар целиком, к промпту добавляется блок `[каталог]` из `PHOTO-PROMPTS-BLOCKS.md`, раздел 1. Кадры с пометкой **[деталь]** — крупный план, к промпту добавляется блок `[деталь]` ниже.

### Блок [деталь]

```
Close-up product detail photo, 4:3 frame, the material fills most of the frame, the seamless light cool-grey studio background (#EDEFF4) is visible in at least one corner.
Soft large softbox light from the upper left, soft natural shadow to the lower right, cool neutral colour grade, the same light and colour as the reference product photo.
Shallow but readable depth of field, 100mm macro lens, the fine closed-cell foam structure is sharp.
Photorealistic commercial catalogue photo, no people, no hands, no text, no letters, no logos, no labels, no stickers, no packaging film, no watermark.
```

**Негатив** для обоих блоков — тот же, что в `PHOTO-PROMPTS-BLOCKS.md`, плюс: fingers, worker, construction site, poster, printed band, paper label, coloured backdrop.

---

## 01 — ИЗОЛОН ППЭ (тёмно-серый)

**01-izolon-ppe-2.jpg** — по `1.jpg` [деталь]
```
Close-up of the spiral end of a dark-grey cross-linked polyethylene foam roll lying on its side, tightly wound layers and the cardboard core, the unrolled sheet running diagonally to the lower right corner.
[деталь]
```

**01-izolon-ppe-3.jpg** — по `2.jpg` [общий]
```
One roll of dark-grey cross-linked polyethylene foam lying on its side, the sheet unrolled flat toward the camera across the floor of the frame, spiral end with core visible on the left.
[каталог]
```

**01-izolon-ppe-4.jpg** — по `3.jpg` [деталь]
```
A flat piece of thick dark-grey cross-linked polyethylene foam lying at a 3/4 angle, its clean straight cut edge in the foreground showing the fine closed-cell structure through the whole thickness.
[деталь]
```

**01-izolon-ppe-5.jpg** — по `4.jpg` [деталь]
```
Top-down close-up of the surface of a wide dark-grey cross-linked polyethylene foam roll with a fine embossed diamond texture, the curved edge of the roll on one side.
[деталь]
```

## 02 — Изолонтейп ППЭ (самоклеящийся)

**02-izolontape-2.jpg** — по `1.jpg` [общий]
```
One roll of grey self-adhesive cross-linked polyethylene foam standing upright, the outer layer peeled back, the clear release film lifted from the adhesive layer. No printed tape, no branding.
[каталог]
```

**02-izolontape-3.jpg** — по `2.jpg` [общий]
```
Two rolls of self-adhesive polyethylene foam standing upright side by side, one dark-grey and one white, plain surfaces without any print or tape.
[каталог]
```

**02-izolontape-4.jpg** — по `3.jpg` [деталь]
```
Close-up of the corner of a light-grey self-adhesive polyethylene foam sheet, the glossy white release liner peeled back in a soft curve to show the adhesive side.
[деталь]
```

**02-izolontape-5.jpg** — по `4.jpg` [общий]
```
One compact roll of dark-grey self-adhesive polyethylene foam standing upright, the white release liner visible on the outer layer as a clean white band, no print.
[каталог]
```

## 03 — ИЗОФОМ

Старые 1, 2 и 4 — это этикетка, плакат и рулон в плёнке: сюжет с них не берём, только материал.

**03-isofom-2.jpg** — по `1.jpg` [деталь]
```
Close-up of the spiral end of a dark-grey cross-linked polyethylene foam roll standing upright, seen from above at 3/4, even tight layers and the core.
[деталь]
```

**03-isofom-3.jpg** — вместо плаката `2.jpg` [деталь]
```
Two foam sheets lying overlapped at a 3/4 angle, one dark-grey and one off-white, their cut edges facing the camera showing medium-sized closed cells.
[деталь]
```

**03-isofom-4.jpg** — по `3.jpg` [общий]
```
Two tall rolls of cross-linked polyethylene foam standing upright side by side, one dark-grey and one off-white, viewed straight from the front at a low angle, without plastic wrap or labels.
[каталог]
```

**03-isofom-5.jpg** — по `4.jpg` [общий]
```
One large dark-grey cross-linked polyethylene foam roll lying on its side, the outer sheet slightly unrolled toward the camera, spiral end with core visible, without plastic wrap or labels.
[каталог]
```

## 04 — ИЗОФОМ ППЭ Премиум (кремово-жёлтый)

**04-isofom-premium-2.jpg** — по `1.jpg` [общий]
```
One roll of pale cream-yellow cross-linked polyethylene foam lying on its side, viewed from the other side than the reference product photo, the sheet unrolled flat toward the camera.
[каталог]
```

**04-isofom-premium-3.jpg** — по `2.jpg` [деталь]
```
Extreme close-up of the cut edge of a thick pale cream-yellow polyethylene foam sheet at a 3/4 angle, the microcellular closed-cell structure crisp and clearly visible.
[деталь]
```

**04-isofom-premium-4.jpg** — по `3.jpg` [общий]
```
One wide roll of pale cream-yellow cross-linked polyethylene foam lying on its side, a long sheet unrolled flat across the frame, the spiral end and core on the right.
[каталог]
```

**04-isofom-premium-5.jpg** — по `4.jpg` [общий]
```
One short roll of pale cream-yellow cross-linked polyethylene foam standing upright on its end, the outer layer slightly unwound, top spiral visible from above.
[каталог]
```

## 05 — Стыковая и трубная изоляция

**05-tube-insulation-2.jpg** — по `1.jpg` [общий]
```
Two long white solid round polyethylene foam cords lying side by side, bent in a smooth curve, their round cut ends facing the camera.
[каталог]
```

**05-tube-insulation-3.jpg** — по `2.jpg` [общий]
```
A neat pyramid stack of grey polyethylene foam pipe insulation tubes of one diameter, round open ends facing the camera at a 3/4 angle.
[каталог]
```

**05-tube-insulation-4.jpg** — по `3.jpg` [деталь]
```
Close-up of three grey polyethylene foam pipe insulation tubes lying diagonally, open ends toward the camera, even wall thickness and fine foam structure visible.
[деталь]
```

**05-tube-insulation-5.jpg** — по `4.jpg` [общий]
```
Five grey polyethylene foam pipe insulation tubes of different diameters, from thin to thick, lying in a staggered row, open ends toward the camera.
[каталог]
```

## 06 — Фольгоизолон ППЭ

**06-folgoizolon-2.jpg** — по `1.jpg` [деталь]
```
Close-up of the corner of a thick foil-faced polyethylene foam sheet: silver aluminium foil with a fine reinforcing grid on top, off-white foam below, clean cut edge toward the camera.
[деталь]
```

**06-folgoizolon-3.jpg** — по `2.jpg` [деталь]
```
Two foil-faced polyethylene foam sheets lying stacked at a 3/4 angle, silver grid-textured foil on top, the layered cut edge showing foil and grey foam.
[деталь]
```

**06-folgoizolon-4.jpg** — по `3.jpg` [общий]
```
One roll of foil-faced polyethylene foam standing upright, viewed from the side opposite to the reference product photo, the outer layer unrolled to show the dark-grey foam underside.
[каталог]
```

**06-folgoizolon-5.jpg** — по `4.jpg` [деталь]
```
Top-down close-up of the silver aluminium foil surface with a fine reinforcing grid, slightly crinkled with soft reflections, the curved edge of the roll on one side.
[деталь]
```

## 07 — Изолон ППЭ маты-листы

**07-mats-sheets-2.jpg** — по `1.jpg` [деталь]
```
Close-up of the corner of a stack of thick off-white polyethylene foam sheets, clean straight cut edges at a 3/4 angle, layers clearly separated.
[деталь]
```

**07-mats-sheets-3.jpg** — по `2.jpg` [общий]
```
A neat stack of thick rectangular polyethylene foam sheets alternating off-white and dark-grey, slightly fanned so each layer is visible, viewed from the side opposite to the reference product photo.
[каталог]
```

**07-mats-sheets-4.jpg** — по `3.jpg` [общий]
```
A tall neat stack of thick rectangular dark-grey cross-linked polyethylene foam sheets, straight cut edges, viewed at a 3/4 angle from slightly lower.
[каталог]
```

**07-mats-sheets-5.jpg** — по `4.jpg` [деталь]
```
Close-up of the cut edges of stacked sheets: dark-grey foam sheets at the bottom, off-white foam sheets on top, layered side facing the camera.
[деталь]
```

## 08 — Лента демпферная

Старые 2 и 3 — монтаж с рабочим и лента в стяжке: людей и стройку не берём.

**08-damper-tape-2.jpg** — по `1.jpg` [общий]
```
Two white rolls of narrow polyethylene foam damper tape lying flat, the end of one roll unwound in a long loose strip toward the camera.
[каталог]
```

**08-damper-tape-3.jpg** — вместо `2.jpg` [общий]
```
One white roll of polyethylene foam damper tape standing upright on its edge, a strip unwound and lying flat in an L-shape like along a wall corner.
[каталог]
```

**08-damper-tape-4.jpg** — вместо `3.jpg` [деталь]
```
Close-up of a light-blue roll of polyethylene foam damper tape with a narrow self-adhesive strip along one edge, a short strip unwound toward the camera.
[деталь]
```

**08-damper-tape-5.jpg** — по `4.jpg` [общий]
```
One wide dark-grey roll of polyethylene foam damper tape lying flat, top view at a 3/4 angle, the outer end slightly unwound.
[каталог]
```

## 09 — Подложка под обои ЭкоХит

На всех старых фото рулоны в бумажной этикетке: этикетку не рисуем.

**09-ecoheat-2.jpg** — по `1.jpg` [общий]
```
One tall white roll of polyethylene foam wallpaper underlay standing upright, a long sheet unrolled behind it in a soft vertical curve, plain surface without any paper band or label.
[каталог]
```

**09-ecoheat-3.jpg** — по `2.jpg` [общий]
```
One tall white roll of polyethylene foam wallpaper underlay standing upright, viewed straight from the front at a low angle, plain without any label.
[каталог]
```

**09-ecoheat-4.jpg** — по `3.jpg` [деталь]
```
Close-up of the edge of white polyethylene foam wallpaper underlay unrolled in a soft curve, showing the thin sheet thickness and the soft matte fine-pored surface.
[деталь]
```

**09-ecoheat-5.jpg** — по `4.jpg` [общий]
```
Two tall white rolls of polyethylene foam wallpaper underlay standing upright, one in front of the other, the outer layer of the front roll slightly unrolled, no labels.
[каталог]
```

## 10 — Вомлекс НПЭ (белый, волнистый)

**10-vomlex-npe-2.jpg** — по `1.jpg` [общий]

Первая версия вышла с ошибкой: торец был нарисован ребристым кругом, а внешний слой — отдельной лентой. Перегенерировать с промптом ниже.
```
One roll of white non-cross-linked expanded polyethylene foam lying on its side, seen at a 3/4 angle from the end. The flat end face of the roll shows a smooth tight spiral of many thin sheet layers (each layer 2–3 mm) around a round hollow core — the end face is flat and evenly layered, with no ribs, waves or grooves on it. The fine wavy ribbed texture is only on the outer cylindrical surface of the roll, ribs running around the roll. The outer sheet continues from the roll as one piece and lies flat toward the camera; it is the same sheet, not a separate band. The roll occupies 60% of the frame width.
[каталог]
```
**Негатив добавить:** ribbed end face, wavy end face, grooves on the end face, concentric ridges, separate band, second roll, flat disc, ribbon around the roll, melted texture.

**10-vomlex-npe-3.jpg** — по `2.jpg` [общий]
```
One roll of white expanded polyethylene foam lying on its side, the sheet unrolled flat toward the camera, fine wavy ribs running across the sheet, viewed from the side opposite to the reference product photo.
[каталог]
```

**10-vomlex-npe-4.jpg** — по `3.jpg` [общий]
```
One roll of white expanded polyethylene foam lying on its side, viewed from slightly above, the outer layer lifted and curled to show the wavy ribbed surface.
[каталог]
```

**10-vomlex-npe-5.jpg** — по `4.jpg` [общий]
```
One tall roll of white expanded polyethylene foam standing upright, the outer sheet unrolled to the side in a soft vertical curve, wavy ribs visible.
[каталог]
```

## 11 — ЭВА листовой

На старых фото ЭВА в разных цветах: синий, оранжевый, жёлтый, зелёный и др. Цвета берём с рефа этого кадра.

**11-eva-2.jpg** — по `1.jpg` [общий]
```
A fan of rectangular EVA foam sheets with a diamond-shaped honeycomb embossed texture in bright colours — orange, red, blue, purple, green, black — sheets offset like an open fan.
[каталог]
```

**11-eva-3.jpg** — по `2.jpg` [общий]
```
A neat grid of small square EVA foam samples with a diamond embossed texture lying flat, two columns, in grey, black, brown, beige, green, orange, red and blue. Top-down 3/4 view.
[каталог]
```

**11-eva-4.jpg** — по `3.jpg` [общий]
```
A fan of large rectangular EVA foam sheets with a fine pebble texture in light blue, yellow, black, brown and white, offset like an open fan, cut edges visible.
[каталог]
```

**11-eva-5.jpg** — по `4.jpg` [деталь]
```
Close-up of three stacked EVA foam sheets in beige, taupe and dark grey with a fine leather-like texture, slightly offset so each cut edge is visible.
[деталь]
```
