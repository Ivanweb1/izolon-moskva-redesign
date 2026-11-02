# Фото для слайдера первого экрана — серия 2 (общие планы)

Серия 1 (крупные планы) сохранена в `assets/src/set1/`. Слайдер растянут на всю ширину экрана, и крупный предмет на 1920 px выглядит огромным. Поэтому серия 2 — **общий план**: камера дальше, предмет занимает треть кадра, вокруг виден склад.

## Куда класть

`C:\Users\panki\Desktop\izolon-moskva-redesign\assets\` — те же имена, поверх старых:

| Файл | Что на кадре |
|---|---|
| `hero-1.jpg` | Серый рулон ППЭ на полу склада |
| `hero-2.jpg` | Фольгированный ППЭ на паллете |
| `hero-3.jpg` | Маты-листы ИЗОЛОН на паллете |
| `hero-4.jpg` | Листовой ЭВА на столе |

## Формат

- **Широкий 2:1, 3200×1600** (если генератор не умеет 2:1 — 16:9, 2880×1620). JPG, 400–600 КБ.
- Как кадр режется:
  - десктоп — 2:1 целиком (на низких экранах срезается до ~10% сверху);
  - планшет — 3:2, срезаются края по ~12%;
  - телефон — 4:3, **остаётся центральные 67% ширины**.
- **Предмет по ширине — 30–40% кадра, строго по центру** (в зоне 30–70% ширины). Тогда на десктопе он не «давит», а на телефоне занимает половину экрана.
- **По высоте** предмет в зоне 30–85%. Верхняя треть — склад и стеллажи, не обрезанные.
- **Нижние 15% — пустой пол** (там плашка с логотипами слева и точки слайдера справа).
- Боковые трети кадра — спокойный склад в расфокусе, без ярких пятен и предметов на переднем плане.
- Ко всем четырём прикладывать референс света и склада: `assets/src/set1/hero-1.jpg` (серия должна остаться та же — склад, свет, цвет).
- Референс по материалу для каждого кадра — соответствующий файл из `assets/src/set1/` (hero-2 → `set1/hero-2.jpg` и т.д.).

## Общий блок (подставить вместо [общий блок])

```
Wide establishing shot, same warehouse, lighting and colour grade as the reference images: clean modern warehouse, polished light-grey concrete floor, dark-blue steel pallet racks with yellow beams along both sides and in the background, soft daylight from high windows plus cool overhead light, cool neutral grade with a slight blue-violet tint in the shadows.
Ultra-wide 2:1 frame, camera at waist height, 35mm lens, camera placed 5–6 metres from the subject, gentle depth of field (subject sharp, racks slightly soft).
Composition: the subject is small in the frame — it occupies only 30–40% of the frame width, exactly centred horizontally, standing between 30% and 85% of the frame height. Lots of calm space around it. The bottom 15% of the frame is empty, softly lit concrete floor. The left and right thirds show only blurred racks and floor, no objects in the foreground.
Photorealistic commercial photography, high detail, no people, no hands, no text, no letters, no logos, no labels, no stickers, no watermark.
```

**Негатив:** close-up, macro, subject filling the frame, cropped subject, objects in foreground, people, hands, text, letters, logos, labels, stickers, watermark, cartoon, 3d render, glossy plastic, bubble wrap, mineral wool, yellow foam, cluttered floor, distorted roll, oval core, tilted horizon, fisheye.

## Промпты

**hero-1.jpg — рулон**
```
One large roll of light-grey cross-linked polyethylene foam insulation (matte closed-cell foam, fine-pored surface) lying on its side in the middle of the warehouse aisle, turned at a 3/4 angle so the spiral end with tightly wound layers and a cardboard core is visible. Same material as the reference.
[общий блок]
```

**hero-2.jpg — фольгированный ППЭ**
```
Three rolls of foil-faced polyethylene foam insulation standing upright on one wooden pallet in the middle of the warehouse aisle, silver aluminium foil with soft reflections, one roll partly unrolled toward the camera on the pallet showing the grey foam underside. Same material as the reference.
[общий блок]
```

**hero-3.jpg — маты-листы**
```
A neat stack of rectangular light-grey cross-linked polyethylene foam sheets of different thickness on one wooden pallet in the middle of the warehouse aisle, cleanly cut edges facing the camera at a 3/4 angle, one thick sheet leaning against the stack. Same material as the reference.
[общий блок]
```

**hero-4.jpg — листовой ЭВА**
```
Three stacks of EVA foam sheets — white, black and beige — side by side on one low steel table in the middle of the warehouse aisle, smooth matte surfaces, clean cut edges showing dense uniform foam. Same material as the reference.
[общий блок]
```
