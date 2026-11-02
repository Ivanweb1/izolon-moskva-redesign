# Фото первого экрана

**Куда положить:** `assets/hero.jpg` (ровно с этим именем; страница подхватит его сама, пока файла нет — стоит рулон с текущего сайта).

**Формат:** вертикаль 4:5, минимум 1600×2000, JPG ~300–400 КБ.

**Обрезка в вёрстке:** на десктопе показывается целиком (4:5), на планшете режется до 16:11, на телефоне до 4:3 по центру.
Значит главный рулон должен стоять в **центральной полосе кадра** (средние ~45% по высоте), ничего важного у верхнего и нижнего края.

**Референс для генерации:** `assets/src/slider1_2-min.jpg` — фото рулона с текущего сайта, по нему держать фактуру и цвет материала (серый/белёсый вспененный ППЭ, мелкопористый, матовый, торец рулона виден слоями).
Второй референс по свету, если нужен: `assets/src/slider1_1-min.jpg` (тёмный рулон, мягкий студийный свет).

## Промпт

```
Vertical 4:5 photo, commercial product photography in a clean modern warehouse.
In the center of the frame: a large roll of light grey cross-linked polyethylene foam insulation (closed-cell PE foam, matte, fine-pored surface), standing on its side so the spiral end with visible layers faces the camera at a 3/4 angle. Behind it, slightly out of focus, neat rows of the same rolls in white, light grey and silver foil-faced variants stacked on metal pallet racks.
Material looks exactly like the reference image: soft matte foam texture, tightly wound layers, cardboard core.
Lighting: soft daylight from high side windows plus cool industrial overhead light, gentle shadows, slight deep navy-blue tint in the shadows of the background (#141B34), one warm yellow accent in the background — a yellow pallet-rack beam or a yellow forklift partly visible, out of focus.
Composition: main roll occupies the middle 45% of the frame height, clean empty floor at the bottom, racks fading into darkness at the top. Camera at chest height, 50mm lens, shallow depth of field.
Realistic, high detail, no people, no text, no logos, no labels, no packaging prints, no watermark.
```

**Негатив (если генератор принимает):** people, hands, text, letters, logos, labels, watermark, cartoon, 3d render, plastic glossy look, bubble wrap, mineral wool, yellow foam, cluttered floor, distorted roll, oval core.
