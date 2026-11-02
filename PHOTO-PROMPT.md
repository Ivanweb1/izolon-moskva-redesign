# Фото для слайдера первого экрана

## Куда класть

Папка: `C:\Users\panki\Desktop\izolon-moskva-redesign\assets\`

| Файл | Что на кадре |
|---|---|
| `hero-1.jpg` | Главный: серый рулон ППЭ на полу склада |
| `hero-2.jpg` | Фольгированный пенополиэтилен (фольгоизолон) |
| `hero-3.jpg` | Маты-листы ИЗОЛОН разной толщины |
| `hero-4.jpg` | Листовой ЭВА: белый, чёрный, бежевый |

Положил файл — слайд появился сам. Нет файла — слайд пропускается. Пока нет `hero-1.jpg`, первым идёт текущий `hero.jpg`.

## Формат — одинаковый для всех четырёх

- **Горизонталь 3:2, 2400×1600**, JPG, 300–500 КБ.
- Как кадр режется в вёрстке:
  - десктоп — блок ~1240×640, т.е. **срезаются ~13% сверху и снизу**, ширина целиком;
  - телефон — 4:3, **срезаются ~6% слева и справа**.
- **Безопасная зона:** главный объект в центральной области (по ширине 15–85%, по высоте 18–82%).
- **Нижняя полоса (нижние 15% кадра) — спокойная**: пол или фон без деталей. Слева там лежит плашка с логотипами ISOFOM/ISOLON, справа — точки и стрелки слайдера.
- Все четыре кадра — **одна съёмка**: один склад, один свет, одна точка камеры, чтобы при смене слайдов не «прыгала» картинка.

## Референсы

- Фактура и цвет материала: `assets/src/slider1_2-min.jpg` (серый рулон с текущего сайта).
- Свет и склад: `assets/src/hero-original-4x5.jpg` (уже сгенерированный кадр — **прикладывать ко всем четырём**, чтобы серия была единой).

## Общий блок (вставлять в конец каждого промпта)

```
Shot in the same warehouse and lighting as the reference image: clean modern warehouse, polished light-grey concrete floor, dark-blue steel pallet racks with yellow beams far in the background, soft daylight from high windows plus cool overhead light, cool neutral colour grade with a slight blue-violet tint in the shadows.
Horizontal 3:2 frame, camera at waist height, 50mm lens, shallow depth of field, background softly out of focus.
Main subject in the centre of the frame, fully inside the central 70% of width and the middle 64% of height. The bottom 15% of the frame is calm, empty, softly lit concrete floor with no objects. Nothing important near the edges.
Photorealistic commercial product photography, high detail, no people, no hands, no text, no letters, no logos, no labels, no stickers, no watermark.
```

**Негатив (если генератор принимает):** people, hands, text, letters, logos, labels, stickers, watermark, cartoon, 3d render, glossy plastic, bubble wrap, mineral wool, yellow foam, pink foam, cluttered floor, distorted roll, oval core, tilted horizon.

## Промпты

**hero-1.jpg — главный рулон**
```
A large roll of light-grey cross-linked polyethylene foam insulation (closed-cell PE foam, matte, fine-pored surface) lying on its side on the floor, turned at a 3/4 angle so the spiral end with tightly wound layers and a cardboard core faces the camera on the left, the long body of the roll goes to the right. Behind it, out of focus, rows of the same rolls in white, light grey and silver foil-faced variants on pallet racks.
[общий блок]
```

**hero-2.jpg — фольгированный ППЭ**
```
Three rolls of foil-faced polyethylene foam insulation standing upright on a wooden pallet, slightly different heights, silver aluminium foil surface with soft reflections, one roll partly unrolled toward the camera showing the grey foam underside and the foil top layer. Foam thickness visible on the edge of the unrolled sheet.
[общий блок]
```

**hero-3.jpg — маты-листы**
```
A neat stack of rectangular light-grey cross-linked polyethylene foam sheets of different thickness (from 15 to 50 mm) lying flat on a wooden pallet, edges perfectly cut, the front edge of the stack faces the camera at a 3/4 angle showing the fine closed-cell structure and the layered thickness. One thick sheet leans against the stack.
[общий блок]
```

**hero-4.jpg — листовой ЭВА**
```
Stacks of EVA foam sheets lying flat on a low table: white, black and beige stacks side by side, smooth surface on top, one beige sheet with a fine embossed texture, sheet edges cut cleanly showing dense uniform foam, sheets about 5–10 mm thick. Calm matte surfaces, soft shadows between the stacks.
[общий блок]
```

`[общий блок]` — заменить текстом из раздела выше.
