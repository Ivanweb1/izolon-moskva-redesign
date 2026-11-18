# Визуализации для первого экрана внутренних страниц

Справа на первом экране страниц «Сферы применения» и «Изолон для строительства» стоит визуализация. Левый край кадра плавно уходит в тёмно-синий фон (#141A3D), поверх него слева лежит текст.

## Куда класть

`C:\Users\panki\Desktop\izolon-moskva-redesign\assets\photos\` — с этими именами, код править не нужно:

| Файл | Страница | Что на кадре |
|---|---|---|
| `page-spheres.jpg` | Сферы применения | Рулон ППЭ и изделия из него для разных отраслей |
| `page-stroitelstvo.jpg` | Изолон для строительства | Разрез конструкции дома с изоляционным слоем ППЭ |

Пока файла нет, показывается временное фото: `assets/hero-1.jpg` и `assets/photos/usage-house.jpg`.

## Формат

- **16:9, 2400×1350**, JPG 300–500 КБ.
- Как кадр режется:
  - десктоп — кадр занимает правые ~58% экрана по высоте первого экрана (≈520–600 px), срезается сверху и снизу до ~2:1; левая треть уходит под градиент в тёмно-синий;
  - телефон — 16:9 целиком под текстом, верх и низ мягко уходят в тёмно-синий.
- **Главный объект — в правой половине кадра** (55–85% ширины), по высоте в зоне 20–80%.
- **Левая треть — почти пустой тёмно-синий фон**, без предметов.
- **Фон — глубокий тёмно-синий (#141A3D)** с мягким светом, чтобы кадр без шва слился с первым экраном.
- Свет: мягкий рисующий свет сверху слева и холодный контровой свет справа, акценты фирменного синего (#4557A4) и немного жёлтого (#FFCC1F).
- Материал как у рефа: `assets/catalog/01-izolon-ppe.jpg` (серый мелкопористый ППЭ).

## Общий блок (подставить вместо [общий блок])

```
Premium 3D product visualization on a deep dark-navy background (#141A3D) with a soft gradient glow, studio lighting: soft key light from the upper left, cool rim light from the right, subtle royal-blue (#4557A4) accent reflections and a few small warm-yellow (#FFCC1F) highlights.
16:9 frame. The main subject sits in the right half of the frame (between 55% and 85% of the width), vertically between 20% and 80% of the height. The left third of the frame is empty dark-navy background with no objects.
Material: light-grey cross-linked polyethylene foam (matte, fine closed-cell structure), same as the reference image; cut edges show the fine foam structure.
Photorealistic render, high detail, clean and calm composition, no people, no hands, no text, no letters, no logos, no labels, no watermark.
```

**Негатив:** text, letters, logos, labels, watermark, people, hands, white background, light background, cluttered composition, objects on the left side, cartoon, low-poly, plastic glossy look, bubble wrap, mineral wool, styrofoam beads, yellow foam, distorted roll, oval core.

## Промпты

**page-spheres.jpg — сферы применения**
```
A roll of light-grey polyethylene foam stands at the right of the frame, its spiral end facing the camera. Around it, floating in a gentle arc, are neat pieces cut from the same foam that show where it is used: a car door insulation panel, a shoe insole, a short pipe wrapped in a foam insulation tube, a folded sports mat, a protective packaging corner, and a foam case insert with cut-out pockets. All objects are the same grey foam, evenly spaced, slightly overlapping in depth.
[общий блок]
```

**page-stroitelstvo.jpg — строительство**
```
An architectural 3D cutaway of a corner of a modern house shown in the right half of the frame: a section through the floor, an exterior wall and a pitched roof, each built up in visible layers. In every layer the thin light-grey polyethylene foam insulation sheet is clearly shown and slightly glowing in royal blue at its cut edge: under the floor screed and laminate, inside the wall between masonry and plasterboard, under the roof covering; a pipe running along the floor is wrapped in a foam insulation tube. Clean exploded-layer look, precise geometry.
[общий блок]
```
