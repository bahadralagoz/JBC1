(() => {
  "use strict";

  const PRODUCTS = window.JBC_PRODUCTS;
  const TY = window.JBC_TRENDYOL;
  const SIZES = window.JBC_SIZES;
  const $ = (s, r = document) => r.querySelector(s);
  const fmt = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 });
  const fmtMoney = (n) => new Intl.NumberFormat("tr-TR", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(n);
  const money = (n) => `${fmtMoney(n)} TL`;
  const img = (c) => `assets/products/${c.id}.webp`;
  const fromPrice = (p) => Math.min(...p.colors.map((c) => c.price));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const upper = (s) => s.toLocaleUpperCase("tr-TR");

  /* ---------- Colour → room ---------- */
  const hexToRgb = (h) => {
    const n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const lum = (rgb) => {
    const [r, g, b] = rgb.map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const rgbStr = (c) => `rgb(${c.join(" ")})`;
  const contrast = (a, b) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const INK_DARK = [20, 21, 23];
  const INK_LIGHT = [246, 245, 241];

  // The room takes the garment's colour; the garment must still stand out of it.
  function roomFor(hex) {
    const c = hexToRgb(hex);
    const L = lum(c);
    let room;
    if (L > 0.55) room = mix(c, [0, 0, 0], 0.16); // white / pale: a deeper room
    else if (L > 0.25) room = mix(c, [255, 255, 255], 0.28); // mid-light: lifted
    else if (L > 0.06) room = mix(c, [255, 255, 255], 0.12); // mid: barely lifted
    else room = mix(c, [255, 255, 255], 0.2); // near-black: charcoal room
    const ink = contrast(room, INK_DARK) >= contrast(room, INK_LIGHT) ? INK_DARK : INK_LIGHT;
    let ink2 = mix(ink, room, 0.1);
    if (contrast(ink2, room) < 4.5) ink2 = ink; // small secondary text never drops below AA
    return {
      room,
      ink,
      ink2,
      wall: mix(room, ink, 0.66),
      floor: mix(room, [0, 0, 0], 0.16),
      line: mix(room, ink, 0.32),
      dark: ink === INK_LIGHT
    };
  }

  function applyRoom(hex) {
    const r = roomFor(hex);
    const s = document.documentElement.style;
    for (const [k, v] of Object.entries({ room: r.room, ink: r.ink, "ink-2": r.ink2, wall: r.wall, floor: r.floor, line: r.line })) {
      s.setProperty(`--${k}`, rgbStr(v));
    }
    document.documentElement.dataset.room = r.dark ? "dark" : "light";
    $('meta[name="theme-color"]').content = rgbStr(r.room);
  }

  /* ---------- State ---------- */
  const state = { p: 0, c: 0, size: null };
  const product = () => PRODUCTS[state.p];
  const color = () => product().colors[state.c];

  /* ---------- Hero render ---------- */
  const figure = $("#figure");

  function renderFigure() {
    const p = product();
    const c = color();
    figure.src = img(c);
    figure.alt = `${p.full}, ${c.name}${c.note ? `, ${c.note.toLocaleLowerCase("tr-TR")}` : ""}`;
    figure.dataset.crop = c.crop || "";
    $(".stage").dataset.crop = c.crop || "";
  }

  function renderTrims() {
    $("#trims").innerHTML = PRODUCTS.map(
      (p, i) => `<label class="trim">
        <input type="radio" name="model" value="${i}" ${i === state.p ? "checked" : ""}>
        <span class="trim-name">${p.name}</span>
        <span class="trim-price">${p.colors.length > 1 ? `${money(fromPrice(p))}’den` : money(fromPrice(p))}</span>
      </label>`
    ).join("");
    $("#bar-models").innerHTML = PRODUCTS.map(
      (p, i) => `<li><a href="#konfigurator" data-model="${i}" ${i === state.p ? 'aria-current="true"' : ""}>${p.name}</a></li>`
    ).join("");
  }

  function renderChips() {
    const p = product();
    $("#chips").innerHTML = p.colors
      .map(
        (c, i) => `<label class="chip" style="--chip:${c.hex}" title="${c.name} · ${c.note}">
          <input type="radio" name="color" value="${i}" ${i === state.c ? "checked" : ""}>
          <span class="sr-only">${c.name}, ${c.note}</span>
        </label>`
      )
      .join("");
    renderColorInfo();
  }

  function renderColorInfo() {
    const c = color();
    $("#color-name").textContent = `${c.name} · ${c.note}`;
    $("#price").textContent = money(c.price);
    $("#ty-link").href = TY[c.id];
    const r = $("#rating");
    if (c.rating) {
      r.hidden = false;
      r.innerHTML = `<strong>${fmt.format(c.rating[0])}</strong><span aria-hidden="true"> / 5</span><span class="sr-only"> üzerinden 5,</span> · Trendyol’da ${c.rating[1]} değerlendirme`;
    } else {
      r.hidden = true;
    }
  }

  function renderSizes() {
    $("#sizes").innerHTML = SIZES.map(
      (s) => `<label class="size">
          <input type="radio" name="size" value="${s}" ${s === state.size ? "checked" : ""}>
          <span>${s}</span>
        </label>`
    ).join("");
  }

  function renderSpecs() {
    const p = product();
    $("#spec-strip").innerHTML = Object.entries(p.specs)
      .filter(([, v]) => v !== "—")
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
      .join("");
  }

  function renderName() {
    const h = $("#model-name");
    h.textContent = upper(product().name);
    $("#model-full").textContent = product().full;
    fitWall();
  }

  // Keep the back-wall name inside the stage column.
  function fitWall() {
    const h = $("#model-name");
    const stage = $(".stage");
    h.style.fontSize = "";
    const avail = stage.getBoundingClientRect().width;
    const w = h.scrollWidth;
    if (w > avail) {
      const fs = parseFloat(getComputedStyle(h).fontSize);
      h.style.fontSize = `${Math.floor(fs * (avail / w))}px`;
    }
  }
  addEventListener("resize", fitWall);
  if (document.fonts) document.fonts.ready.then(fitWall);

  function renderAll() {
    renderTrims();
    renderName();
    renderChips();
    renderSizes();
    renderSpecs();
    renderFigure();
    applyRoom(color().hex);
  }

  /* ---------- Spec sheet + lineup ---------- */
  function renderSheet() {
    const keys = ["Kumaş", "Kalıp", "Yaka", "Detay"];
    const head = `<thead><tr><th scope="col"><span class="sr-only">Özellik</span></th>${PRODUCTS.map((p) => `<th scope="col">${p.name}</th>`).join("")}</tr></thead>`;
    const rows = keys.map((k) => `<tr><th scope="row">${k}</th>${PRODUCTS.map((p) => `<td>${p.specs[k] || "—"}</td>`).join("")}</tr>`).join("");
    const colors = `<tr><th scope="row">Renk</th>${PRODUCTS.map(
      (p) =>
        `<td><span class="mini-chips">${p.colors.map((c) => `<i style="--chip:${c.hex}" title="${c.name} · ${c.note}"></i>`).join("")}</span><span class="sr-only">${p.colors.map((c) => `${c.name} ${c.note}`).join(", ")}</span></td>`
    ).join("")}</tr>`;
    const price = `<tr class="row-price"><th scope="row">Fiyat</th>${PRODUCTS.map((p) => {
      const lo = fromPrice(p);
      const hi = Math.max(...p.colors.map((c) => c.price));
      return `<td>${lo === hi ? money(lo) : `${money(lo)} – ${money(hi)}`}</td>`;
    }).join("")}</tr>`;
    $("#spec-table").innerHTML = head + `<tbody>${rows}${colors}${price}</tbody>`;
  }

  function renderLineup() {
    $("#lineup").innerHTML = PRODUCTS.map((p, i) => {
      const c = p.colors[0];
      return `<li>
        <button type="button" class="lineup-item" data-model="${i}" style="--chip:${c.hex}">
          <span class="lineup-fig" data-crop="${c.crop || ""}"><img src="${img(c)}" alt="" decoding="async"></span>
          <span class="lineup-name">${p.name}</span>
          <span class="lineup-meta">${p.colors.length} renk · ${money(fromPrice(p))}${p.colors.length > 1 ? "’den" : ""}</span>
        </button>
      </li>`;
    }).join("");
  }

  /* ---------- Changes, with the showroom's one motion ---------- */
  function swapFigure(update, dir = 1) {
    if (reduceMotion) return update();
    const out = figure.animate(
      [
        { opacity: 1, transform: "translateX(0)", filter: "blur(0)" },
        { opacity: 0, transform: `translateX(${-5 * dir}%)`, filter: "blur(6px)" }
      ],
      { duration: 170, easing: "cubic-bezier(.5,0,.75,0)" }
    );
    out.onfinish = async () => {
      update();
      try {
        await figure.decode();
      } catch {}
      figure.animate(
        [
          { opacity: 0, transform: `translateX(${7 * dir}%)`, filter: "blur(6px)" },
          { opacity: 1, transform: "translateX(0)", filter: "blur(0)" }
        ],
        { duration: 560, easing: "cubic-bezier(.16,1,.3,1)" }
      );
    };
  }

  function selectModel(i) {
    if (i === state.p) return;
    const dir = i > state.p ? 1 : -1;
    state.p = i;
    state.c = 0;
    state.size = null;
    $("#size-error").hidden = true;
    swapFigure(renderAll, dir);
  }

  function selectColor(i) {
    if (i === state.c) return;
    const dir = i > state.c ? 1 : -1;
    state.c = i;
    renderColorInfo();
    applyRoom(color().hex); // the room changes at once; the figure follows
    swapFigure(renderFigure, dir);
  }

  // Preload the current model's colourways so swaps are instant.
  function preload() {
    PRODUCTS.forEach((p) => p.colors.forEach((c) => (new Image().src = img(c))));
  }

  const form = $("#config");
  form.addEventListener("change", (e) => {
    const t = e.target;
    if (t.name === "model") selectModel(+t.value);
    if (t.name === "color") selectColor(+t.value);
    if (t.name === "size") {
      state.size = t.value;
      $("#size-error").hidden = true;
    }
  });

  document.addEventListener("click", (e) => {
    const m = e.target.closest("[data-model]");
    if (!m) return;
    if (m.tagName === "A") e.preventDefault();
    selectModel(+m.dataset.model);
    $("#konfigurator").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- Cart ---------- */
  const KEY = "jbc-cart-v2";
  let cart = [];
  try {
    cart = (JSON.parse(localStorage.getItem(KEY)) || []).filter((l) => findColor(l.cid));
  } catch {
    cart = [];
  }
  function findColor(cid) {
    for (const p of PRODUCTS) {
      const c = p.colors.find((x) => x.id === cid);
      if (c) return { p, c };
    }
    return null;
  }
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(cart));
    } catch {}
  };

  function renderCart() {
    const count = cart.reduce((n, l) => n + l.qty, 0);
    $("#cart-count").textContent = count;
    $("#cart-open").setAttribute("aria-label", `Sepet, ${count} ürün`);
    $("#cart-empty").hidden = cart.length > 0;
    $("#cart-foot").hidden = cart.length === 0;
    $("#cart-items").innerHTML = cart
      .map((l, i) => {
        const { p, c } = findColor(l.cid);
        return `<li class="line" style="--chip:${c.hex}">
          <span class="line-fig"><img src="${img(c)}" alt=""></span>
          <span class="line-info"><strong>${p.full}</strong><span>${c.name} · ${c.note} · ${l.size}</span></span>
          <span class="qty" role="group" aria-label="${p.name} adedi">
            <button type="button" data-qty="-1" data-line="${i}" aria-label="Bir azalt" ${l.qty <= 1 ? "disabled" : ""}>−</button>
            <output aria-live="polite">${l.qty}</output>
            <button type="button" data-qty="1" data-line="${i}" aria-label="Bir artır" ${l.qty >= 10 ? "disabled" : ""}>+</button>
          </span>
          <span class="line-price">${money(c.price * l.qty)}</span>
          <button type="button" class="line-remove" data-remove="${i}">Kaldır<span class="sr-only"> ${p.name} ${c.name} ${l.size}</span></button>
        </li>`;
      })
      .join("");
    const total = cart.reduce((n, l) => n + findColor(l.cid).c.price * l.qty, 0);
    $("#cart-total").textContent = money(total);
  }

  $("#cart-items").addEventListener("click", (e) => {
    const q = e.target.closest("[data-qty]");
    const r = e.target.closest("[data-remove]");
    if (q) {
      const l = cart[+q.dataset.line];
      l.qty = Math.max(1, Math.min(10, l.qty + +q.dataset.qty));
    }
    if (r) cart.splice(+r.dataset.remove, 1);
    if (q || r) {
      save();
      renderCart();
      if (r) (cart.length ? $("#cart-items .line-remove") : $("#cart-close")).focus();
    }
  });

  const toast = $("#toast");
  let toastT;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add("on");
    clearTimeout(toastT);
    toastT = setTimeout(() => toast.classList.remove("on"), 2800);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!state.size) {
      $("#size-error").hidden = false;
      $("#sizes input").focus();
      return;
    }
    const c = color();
    const line = cart.find((l) => l.cid === c.id && l.size === state.size);
    if (line) line.qty = Math.min(10, line.qty + 1);
    else cart.push({ cid: c.id, size: state.size, qty: 1 });
    save();
    renderCart();
    say(`${product().name}, ${c.name}, ${state.size} sepete eklendi.`);
    if (!reduceMotion) $("#cart-open").animate([{ transform: "scale(1)" }, { transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 420, easing: "cubic-bezier(.16,1,.3,1)" });
  });

  const drawer = $("#cart");
  const scrim = $("#scrim");
  let lastFocus = null;
  function openCart() {
    lastFocus = document.activeElement;
    drawer.hidden = false;
    scrim.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      drawer.classList.add("open");
      scrim.classList.add("open");
    }));
    document.body.style.overflow = "hidden";
    $("#cart-close").focus();
  }
  function closeCart() {
    drawer.classList.remove("open");
    scrim.classList.remove("open");
    document.body.style.overflow = "";
    const done = () => {
      drawer.hidden = true;
      scrim.hidden = true;
    };
    reduceMotion ? done() : setTimeout(done, 320);
    if (lastFocus) lastFocus.focus();
  }
  $("#cart-open").addEventListener("click", openCart);
  $("#cart-close").addEventListener("click", closeCart);
  scrim.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (drawer.hidden) return;
    if (e.key === "Escape") closeCart();
    if (e.key === "Tab") {
      const f = [...drawer.querySelectorAll("button:not([disabled]), a[href]")];
      if (!f.length) return;
      const [first, last] = [f[0], f[f.length - 1]];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ---------- Boot ---------- */
  $("#year").textContent = new Date().getFullYear();
  renderSheet();
  renderLineup();
  renderAll();
  renderCart();
  addEventListener("load", preload);
})();
