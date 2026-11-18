// Общий скрипт всех страниц: меню, модальные окна, лайтбокс, галереи каталога, появления, слайдер
const b=document.querySelector('.burger'),h=document.querySelector('.header');
b.addEventListener('click',()=>{const o=h.classList.toggle('is-open');b.setAttribute('aria-expanded',o)});
h.querySelectorAll('.drawer a').forEach(a=>a.addEventListener('click',()=>{h.classList.remove('is-open');b.setAttribute('aria-expanded',false)}));

// Модальные окна: [data-order] — «Узнать цены» с выбранным товаром, [data-modal] — по имени
const open = id => { const d = document.getElementById('modal-' + id) || document.getElementById(id); if (!d) return; document.querySelectorAll('dialog[open]').forEach(x => x !== d && id !== 'consent' && x.close()); d.showModal(); };
document.addEventListener('click', e => {
  const o = e.target.closest('[data-order]');
  if (o) { e.preventDefault(); const sel = document.querySelector('#modal-order select'); sel.value = o.dataset.order || ''; if (sel.selectedIndex < 0) sel.value = ''; open('order'); return; }
  const m = e.target.closest('[data-modal]');
  if (m) { e.preventDefault(); open(m.dataset.modal); return; }
  if (e.target.closest('[data-close]') || e.target.tagName === 'DIALOG') { e.target.closest('dialog').close(); return; }
  const l = e.target.closest('[data-lightbox]');
  if (l) { e.preventDefault(); showLightbox([{ src: l.href, alt: l.querySelector('img').alt, old: false }], 0); }
});

// Применение: точки на доме ↔ пункты списка. Сами перебираются, пока пользователь не наведёт
(() => {
  const box = document.querySelector('.usage__grid'); if (!box) return;
  const items = [...box.querySelectorAll('[data-u]')];
  let cur = 0, timer, user = false;
  const set = n => { cur = +n; items.forEach(el => el.classList.toggle('is-on', +el.dataset.u === cur)); box.classList.toggle('has-on', cur > 0); };
  items.forEach(el => {
    el.addEventListener('mouseenter', () => { user = true; clearInterval(timer); set(el.dataset.u); });
    el.addEventListener('focus', () => { user = true; clearInterval(timer); set(el.dataset.u); });
    el.addEventListener('click', () => { user = true; clearInterval(timer); set(el.dataset.u); });
  });
  box.addEventListener('mouseleave', () => set(0));
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  new IntersectionObserver(([e]) => {
    clearInterval(timer);
    if (e.isIntersecting && !user) { set(cur % 8 + 1); timer = setInterval(() => set(cur % 8 + 1), 2200); }
  }, { threshold: .45 }).observe(box);
})();

// ── Лайтбокс с листанием (сертификаты — одно фото, каталог — галерея товара) ──
const lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img'), lbCount = lb.querySelector('.lightbox__count');
let lbList = [], lbCur = 0;
const lbShow = i => {
  lbCur = (i + lbList.length) % lbList.length; const it = lbList[lbCur];
  lbImg.src = it.src; lbImg.alt = it.alt || ''; lb.classList.toggle('is-old', !!it.old);
  lbCount.textContent = (lbCur + 1) + ' / ' + lbList.length;
};
function showLightbox(list, i) {
  lbList = list; const many = list.length > 1;
  lb.querySelectorAll('.lightbox__arrow').forEach(a => a.hidden = !many); lbCount.hidden = !many;
  lbShow(i); if (!lb.open) lb.showModal();
}
lb.querySelectorAll('.lightbox__arrow').forEach(a => a.addEventListener('click', () => lbShow(lbCur + +a.dataset.dir)));
lb.addEventListener('keydown', e => { if (lbList.length > 1 && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) lbShow(lbCur + (e.key === 'ArrowLeft' ? -1 : 1)); });
let lbX = null;
lb.addEventListener('touchstart', e => { lbX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => { if (lbX === null || lbList.length < 2) return; const dx = e.changedTouches[0].clientX - lbX; lbX = null; if (Math.abs(dx) > 40) lbShow(lbCur + (dx < 0 ? 1 : -1)); });

// ── Каталог: несколько фото на товар. Первое — новое фото, дальше assets/catalog/<товар>-2…5.jpg, пока их нет — фото со старого сайта ──
document.querySelectorAll('[data-gallery]').forEach(fig => {
  const main = fig.querySelector('img'), key = fig.dataset.gallery;
  const title = fig.closest('.card').querySelector('.card__title').firstChild.textContent.trim();
  const list = [{ src: main.getAttribute('src'), old: false }];
  for (let n = 1; n <= 4; n++) list.push({ src: `assets/catalog/${key}-${n + 1}.jpg`, fallback: `assets/src/old-site/catalog/${key}/${n}.jpg`, old: false });
  list.forEach((it, i) => it.alt = `${title} — фото ${i + 1}`);
  let cur = 0;
  const thumbs = document.createElement('div'); thumbs.className = 'card__thumbs';
  const set = i => {
    cur = i; const it = list[i];
    main.src = it.src; fig.classList.toggle('is-old', it.old);
    btns.forEach((b, k) => b.classList.toggle('is-on', k === i));
  };
  const btns = list.map((it, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'card__thumb' + (i ? '' : ' is-on');
    b.setAttribute('aria-label', 'Фото ' + (i + 1));
    b.innerHTML = `<img src="${it.src}" alt="">`;
    const ti = b.querySelector('img');
    ti.onerror = () => {
      if (it.fallback && !it.old) { it.src = it.fallback; it.old = true; ti.src = it.src; if (cur === i) set(i); }
      else { b.remove(); it.dead = true; }
    };
    b.addEventListener('click', e => { e.stopPropagation(); set(i); });
    thumbs.append(b); return b;
  });
  const zoom = document.createElement('span'); zoom.className = 'card__zoom'; zoom.setAttribute('aria-hidden', 'true');
  zoom.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4M11 8v6M8 11h6"/></svg>';
  fig.append(thumbs, zoom);
  fig.addEventListener('click', () => { const live = list.filter(x => !x.dead); showLightbox(live, Math.max(0, live.indexOf(list[cur]))); });
});

// ── Кнопка «наверх» + шапка: после первого экрана кнопка «Заказать расчёт» становится жёлтой ──
(() => {
  const hero = document.querySelector('.hero, .page-hero'), up = document.querySelector('.to-top'), hdr = document.querySelector('.header');
  new IntersectionObserver(([e]) => {
    const past = !e.isIntersecting && e.boundingClientRect.top < 0;
    up.classList.toggle('is-on', past); hdr.classList.toggle('is-past', past);
  }, { rootMargin: '-120px 0px 0px 0px' }).observe(hero);
  up.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
})();

// ── SEO-текст: свернуть/развернуть ──
(() => {
  const btn = document.querySelector('.seo__more'), box = document.getElementById('seo-text'); if (!btn) return;
  btn.addEventListener('click', () => {
    const o = box.classList.toggle('is-open'); btn.setAttribute('aria-expanded', o);
    btn.querySelector('span').textContent = o ? 'Свернуть' : 'Читать полностью';
  });
})();

// ── Простые появления при прокрутке: заголовки, карточки, пункты, полосы «среза» ──
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const groups = ['.sec__title', '.usage__list li', '.usage__media', '.fields__icons li', '.fields__list li', '.catalog__grid .card', '.lead__body', '.lead__visual',
    '.certs__row a', '.benefits__band', '.benefit', '.steps__media', '.steps__list li', '.steps__cta', '.discount__box', '.contacts__info', '.contacts__map', '.seo__grid',
    '.spheres__grid', '.build-intro__text', '.build-gallery__item', '.use-row', '.quality__box'];
  const els = [];
  groups.forEach(sel => document.querySelectorAll(sel).forEach(el => {
    const sib = [...el.parentNode.children].filter(x => x.matches(sel));
    el.style.setProperty('--d', Math.min(sib.indexOf(el), 7) * 70 + 'ms');
    el.classList.add('rv'); els.push(el);
  }));
  document.querySelectorAll('.sec--ink > .cut__layers').forEach(el => { el.classList.add('rv-cut'); els.push(el); });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
})();
// Прототип: формы никуда не отправляются, показываем «спасибо»
document.querySelectorAll('[data-form]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); f.reset(); open('success'); }));

// Слайдер первого экрана
(async () => {
  if (!document.querySelector('.slider')) return;
  const slides = [
    { src: 'assets/hero-1.jpg', fallback: 'assets/hero.jpg', alt: 'Рулон сшитого пенополиэтилена на складе' },
    { src: 'assets/hero-2.jpg', alt: 'Фольгированный пенополиэтилен в рулонах' },
    { src: 'assets/hero-3.jpg', alt: 'Маты-листы ИЗОЛОН разной толщины' },
    { src: 'assets/hero-4.jpg', alt: 'Листовой ЭВА в базовых цветах' },
  ];
  const ok = src => new Promise(r => { const i = new Image(); i.onload = () => r(src); i.onerror = () => r(null); i.src = src; });
  const found = await Promise.all(slides.map(async s => {
    const src = await ok(s.src) || (s.fallback && await ok(s.fallback));
    return src ? { ...s, src } : null;
  }));
  const list = found.filter(Boolean);
  const slider = document.querySelector('.slider');
  const track = slider.querySelector('.slider__track');
  const nav = document.querySelector('.slider__nav');
  const dotsBox = nav.querySelector('.slider__dots');

  const imgs = list.map((s, i) => {
    const img = document.createElement('img');
    img.className = 'slider__slide' + (i === 0 ? ' is-active' : '');
    img.src = s.src; img.alt = s.alt;
    track.append(img);
    return img;
  });
  if (imgs.length < 2) return;

  let cur = 0, timer;
  const dots = imgs.map((_, i) => {
    const d = document.createElement('button');
    d.type = 'button'; d.className = 'slider__dot' + (i === 0 ? ' is-active' : '');
    d.setAttribute('aria-label', 'Фото ' + (i + 1));
    d.addEventListener('click', () => { go(i); restart(); });
    dotsBox.append(d);
    return d;
  });
  const go = i => {
    cur = (i + imgs.length) % imgs.length;
    imgs.forEach((im, k) => im.classList.toggle('is-active', k === cur));
    dots.forEach((d, k) => d.classList.toggle('is-active', k === cur));
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(cur + 1), 5000); };
  nav.hidden = false;
  nav.querySelectorAll('.slider__arrow').forEach(a => a.addEventListener('click', () => { go(cur + +a.dataset.dir); restart(); }));
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', restart);
  let x0 = null;
  slider.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); restart(); }
  });
  restart();
})();
