(() => {
  const COUNT = 9;
  const LANG_KEY = "photoResize.lang";
  const THEME_KEY = "photoResize.theme";

  const STRINGS = {
    en: {
      title: "FAT Factory MeowMe Photo Resizer",
      description:
        "Lay out nine photos on a portrait 4×6 inch print. Upload, move, and resize each image, then download a 300 DPI file ready for the lab.",
      brandTitle: "FAT Factory MeowMe Photo Resizer",
      brandTagline: "Nine photos on a 4×6 portrait",
      print: "Print",
      download: "Download PNG",
      langToZh: "Switch to Traditional Chinese",
      langToEn: "Switch to English",
      langTitleZh: "繁體中文",
      langTitleEn: "English",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      themeTitleLight: "Light theme",
      themeTitleDark: "Dark theme",
      guideKicker: "User guide",
      guideTitle: "Make a 4×6 nine-up print",
      guideLead:
        "This page lays out nine photos on one portrait 4×6 inch sheet. The frames stay locked in a 3×3 grid with no gaps. You only move and resize the picture inside each frame.",
      guideAddTitle: "1. Add photos",
      guideAdd1: "Click an empty slot to choose one image.",
      guideAdd2: "Drop up to nine files onto the print at once.",
      guideMoveTitle: "2. Move a photo",
      guideMove1: "Click the photo you want to edit.",
      guideMove2: "Drag in any direction — left, right, up, or down.",
      guideMove3: "The frame stays put; only the image inside it moves.",
      guideResizeTitle: "3. Resize a photo",
      guideResize1: "Click a photo so crop brackets appear on its corners.",
      guideResize2: "Pull a corner to zoom that patch in or out.",
      guideResize3: "Scroll the mouse wheel over the photo to resize it.",
      guideResize4: "Use <strong>−</strong> / <strong>+</strong> when a photo is selected.",
      guideReplaceTitle: "4. Replace or remove",
      guideReplace1: "<strong>Replace</strong> swaps the selected photo.",
      guideReplace2: "<strong>Clear</strong> or <kbd>Delete</kbd> empties that slot.",
      guideReplace3: "Double-click a photo to reset its crop.",
      guideSaveTitle: "5. Save the print",
      guideSave1: "<strong>Download PNG</strong> saves a 4×6 file at 300 DPI (1200 × 1800 px) for a photo lab.",
      guideSave2: "<strong>Print</strong> sends the sheet to your printer at 4×6 inches.",
      guideKeysTitle: "Shortcuts",
      keysSelect: "Select a slot",
      keysArrows: "Arrow keys",
      keysNudge: "Nudge the photo",
      keysClear: "Clear the selected slot",
      keysDeselect: "Deselect",
      smaller: "Smaller",
      larger: "Larger",
      reset: "Reset",
      replace: "Replace",
      clear: "Clear",
      statusIdle: "Click a photo to add or edit it · Drag to move · Pull a corner to resize",
      statusEdit: "Click a photo to edit it · Drag to move · Pull a corner to resize",
      statusSelected: "Drag to move · Pull a corner to resize this patch",
      dropVeil: "Drop images onto the print",
      addPhoto: "Add photo",
      sheetAria: "4 by 6 inch portrait print canvas",
      notImage: "That file is not an image.",
      readFail: "Could not read that image.",
      dropImages: "Drop image files to add them.",
      extraSkipped: (n) =>
        `Added 9 photos. ${n} extra file${n > 1 ? "s" : ""} skipped.`,
      exportFail: "Could not export the print.",
      savedPng: (w, h) => `Saved ${w} × ${h} px PNG`,
      printMeta: (w, h, dpi) => `${w} × ${h} in  ·  ${dpi} DPI  ·  ${w * dpi} × ${h * dpi} px`,
    },
    zh: {
      title: "FAT Factory MeowMe Photo Resizer",
      description:
        "在直式 4×6 吋相紙上排版九張照片。上傳、移動並調整每張圖片大小，再下載 300 DPI 檔案，可直接送沖印。",
      brandTitle: "FAT Factory MeowMe Photo Resizer",
      brandTagline: "直式 4×6 4R照片",
      print: "列印",
      download: "下載 PNG",
      langToZh: "切換為繁體中文",
      langToEn: "切換為英文",
      langTitleZh: "繁體中文",
      langTitleEn: "English",
      themeToLight: "切換為淺色主題",
      themeToDark: "切換為深色主題",
      themeTitleLight: "淺色主題",
      themeTitleDark: "深色主題",
      guideKicker: "使用說明",
      guideTitle: "製作 4x6 4R相片",
      guideLead:
        "本頁會把九張照片排在一張直式 4×6 吋 4R相紙上。外框固定為無縫 3×3 格，你只需移動並縮放每格裡的圖片。",
      guideAddTitle: "1. 加入照片",
      guideAdd1: "點選空格來選擇一張圖片。",
      guideAdd2: "一次可將最多九個檔案拖放到相紙上。",
      guideMoveTitle: "2. 移動照片",
      guideMove1: "點選要編輯的照片。",
      guideMove2: "可向左、右、上、下任意拖移。",
      guideMove3: "外框不會動，只有格內圖片會移動。",
      guideResizeTitle: "3. 調整照片大小",
      guideResize1: "點選照片，角落會出現裁切框。",
      guideResize2: "拉動角落可放大或縮小該區塊。",
      guideResize3: "在照片上滾動滑鼠滾輪來縮放。",
      guideResize4: "選取照片後，可用<strong>−</strong> / <strong>+</strong>調整。",
      guideReplaceTitle: "4. 更換或移除",
      guideReplace1: "<strong>更換</strong>可替換目前選取的照片。",
      guideReplace2: "<strong>清除</strong>或按 <kbd>Delete</kbd> 可清空該格。",
      guideReplace3: "雙擊照片可重設裁切。",
      guideSaveTitle: "5. 儲存相片",
      guideSave1: "<strong>下載 PNG</strong> 會存成 300 DPI（1200 × 1800 px）的 4×6 檔案，可送沖印店。",
      guideSave2: "<strong>列印</strong>會以 4×6 吋尺寸送到印表機。",
      guideKeysTitle: "快捷鍵",
      keysSelect: "選取格子",
      keysArrows: "方向鍵",
      keysNudge: "微移照片",
      keysClear: "清除選取的格子",
      keysDeselect: "取消選取",
      smaller: "縮小",
      larger: "放大",
      reset: "重設",
      replace: "更換",
      clear: "清除",
      statusIdle: "點選照片以加入或編輯 · 拖移移動 · 拉角落縮放",
      statusEdit: "點選照片以編輯 · 拖移移動 · 拉角落縮放",
      statusSelected: "拖移可移動 · 拉角落可縮放此區塊",
      dropVeil: "將圖片拖放到相紙上",
      addPhoto: "加入照片",
      sheetAria: "直式 4×6 吋相紙畫布",
      notImage: "這個檔案不是圖片。",
      readFail: "無法讀取該圖片。",
      dropImages: "請拖放圖片檔來加入。",
      extraSkipped: (n) => `已加入 9 張照片。另有 ${n} 個檔案已略過。`,
      exportFail: "無法匯出相紙。",
      savedPng: (w, h) => `已儲存 ${w} × ${h} px PNG`,
      printMeta: (w, h, dpi) => `${w} × ${h} 吋  ·  ${dpi} DPI  ·  ${w * dpi} × ${h * dpi} px`,
    },
  };

  let lang = detectLang();

  function detectLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch {
      /* ignore */
    }
    const nav = (navigator.language || "").toLowerCase();
    if (
      nav.startsWith("zh") &&
      (nav.includes("hant") || nav.includes("tw") || nav.includes("hk") || nav.includes("mo"))
    ) {
      return "zh";
    }
    return "en";
  }

  function t(key, ...args) {
    const table = STRINGS[lang] || STRINGS.en;
    const value = table[key] ?? STRINGS.en[key] ?? key;
    return typeof value === "function" ? value(...args) : value;
  }

  function applyLang() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title = t("title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("description"));

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = t(node.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });

    const btnLang = document.getElementById("btn-lang");
    if (btnLang) {
      btnLang.textContent = lang === "zh" ? "EN" : "繁";
      btnLang.setAttribute("aria-label", lang === "zh" ? t("langToEn") : t("langToZh"));
      btnLang.setAttribute("title", lang === "zh" ? t("langTitleEn") : t("langTitleZh"));
    }
    syncThemeButton();
  }

  function setLang(next) {
    lang = next === "zh" ? "zh" : "en";
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
    applyLang();
    render();
  }

  function detectTheme() {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") return current;
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* ignore */
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  let theme = detectTheme();

  function syncThemeButton() {
    const btnTheme = document.getElementById("btn-theme");
    if (!btnTheme) return;
    const toLight = theme !== "light";
    btnTheme.setAttribute("aria-label", t(toLight ? "themeToLight" : "themeToDark"));
    btnTheme.setAttribute("title", t(toLight ? "themeTitleLight" : "themeTitleDark"));
  }

  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    syncThemeButton();
  }

  function setTheme(next) {
    theme = next === "light" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
    applyTheme();
  }

  const el = {
    sheet: document.getElementById("sheet"),
    stage: document.getElementById("stage"),
    stageFrame: document.getElementById("stage-frame"),
    inspectorBody: document.getElementById("inspector-body"),
    printMeta: document.getElementById("print-meta"),
    status: document.getElementById("status"),
    toast: document.getElementById("toast"),
    dropVeil: document.getElementById("drop-veil"),
    inputSingle: document.getElementById("input-single"),
    rulerH: document.getElementById("ruler-h"),
    rulerV: document.getElementById("ruler-v"),
  };

  const state = {
    gap: 0,
    margin: 0,
    bg: "#fffcf7",
    selectedId: null,
    dpi: 300,
    photos: Array.from({ length: COUNT }, (_, i) => emptyPhoto(i)),
  };

  const images = new Map();
  const overlayImage = new Image();
  const overlayReady = new Promise((resolve) => {
    overlayImage.onload = () => resolve(true);
    overlayImage.onerror = () => resolve(false);
  });
  overlayImage.src = "overlay/overlay.png";
  const backgroundImage = new Image();
  const backgroundReady = new Promise((resolve) => {
    backgroundImage.onload = () => resolve(true);
    backgroundImage.onerror = () => resolve(false);
  });
  backgroundImage.src = "background/background.png";
  let uploadTarget = 0;
  let drag = null;
  let toastTimer = 0;
  let fitRaf = 0;

  function emptyPhoto(id) {
    return {
      id,
      src: null,
      name: "",
      x: 0,
      y: 0,
      w: 30,
      h: 30,
      zoom: 1,
      panX: 0.5,
      panY: 0.5,
      nw: 0,
      nh: 0,
    };
  }

  function canvasInches() {
    return { w: 4, h: 6 };
  }

  function selected() {
    return state.photos[state.selectedId] ?? null;
  }

  function applyGrid() {
    const cols = 3;
    const rows = 3;
    const margin = state.margin;
    const gap = state.gap;
    const innerW = 100 - margin * 2;
    const innerH = 100 - margin * 2;
    const cellW = (innerW - gap * (cols - 1)) / cols;
    const cellH = (innerH - gap * (rows - 1)) / rows;
    state.photos.forEach((photo, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      photo.x = margin + col * (cellW + gap);
      photo.y = margin + row * (cellH + gap);
      photo.w = cellW + (gap === 0 && col < cols - 1 ? 0.08 : 0);
      photo.h = cellH + (gap === 0 && row < rows - 1 ? 0.08 : 0);
    });
  }

  function isDarkPaper(hex) {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 < 80;
  }

  function sheetRect() {
    return el.sheet.getBoundingClientRect();
  }

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function frameSize(photo) {
    const rect = sheetRect();
    return {
      w: (photo.w / 100) * rect.width,
      h: (photo.h / 100) * rect.height,
    };
  }

  function imageLayout(photo, frameW, frameH) {
    if (!photo.src || !photo.nw || !photo.nh) return null;
    const scale = Math.max(frameW / photo.nw, frameH / photo.nh) * photo.zoom;
    const dw = photo.nw * scale;
    const dh = photo.nh * scale;
    const maxPanX = Math.max(0, dw - frameW);
    const maxPanY = Math.max(0, dh - frameH);
    const left = maxPanX ? -clamp(photo.panX, 0, 1) * maxPanX : (frameW - dw) / 2;
    const top = maxPanY ? -clamp(photo.panY, 0, 1) * maxPanY : (frameH - dh) / 2;
    return {
      width: dw,
      height: dh,
      left,
      top,
      maxPanX,
      maxPanY,
    };
  }

  function setPanFromOffset(photo, layout, left, top) {
    photo.panX = layout.maxPanX > 0.5 ? clamp(-left / layout.maxPanX, 0, 1) : 0.5;
    photo.panY = layout.maxPanY > 0.5 ? clamp(-top / layout.maxPanY, 0, 1) : 0.5;
  }

  function ensureTwoAxisPan(photo) {
    const { w, h } = frameSize(photo);
    if (!w || !h) return;
    const cover = Math.max(w / photo.nw, h / photo.nh);
    const room = 40;
    const need = Math.max((w + room) / (photo.nw * cover), (h + room) / (photo.nh * cover), 1);
    if (photo.zoom < need) photo.zoom = need;
  }

  function setZoom(photo, nextZoom, focus) {
    const { w: frameW, h: frameH } = frameSize(photo);
    const prev = imageLayout(photo, frameW, frameH);
    nextZoom = clamp(nextZoom, 1, 4);
    if (!prev) {
      photo.zoom = nextZoom;
      return;
    }
    const fx = focus ? (focus.x - prev.left) / prev.width : 0.5;
    const fy = focus ? (focus.y - prev.top) / prev.height : 0.5;
    photo.zoom = nextZoom;
    const next = imageLayout(photo, frameW, frameH);
    if (!next) return;
    const left = (focus ? focus.x : frameW / 2) - fx * next.width;
    const top = (focus ? focus.y : frameH / 2) - fy * next.height;
    setPanFromOffset(photo, next, left, top);
  }

  function selectPhoto(id) {
    state.selectedId = id;
    el.sheet.querySelectorAll(".photo").forEach((node) => {
      node.classList.toggle("is-on", Number(node.dataset.id) === id);
    });
    renderInspector();
    renderMeta();
  }

  function firstEmpty(from = 0) {
    for (let i = 0; i < COUNT; i += 1) {
      const id = (from + i) % COUNT;
      if (!state.photos[id].src) return id;
    }
    return from % COUNT;
  }

  function loadFileInto(id, file) {
    if (!file || !file.type.startsWith("image/")) {
      toast(t("notImage"));
      return Promise.resolve(false);
    }
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const photo = state.photos[id];
        if (photo.src && photo.src.startsWith("blob:")) {
          URL.revokeObjectURL(photo.src);
        }
        photo.src = url;
        photo.name = file.name;
        photo.nw = img.naturalWidth;
        photo.nh = img.naturalHeight;
        photo.zoom = 1;
        photo.panX = 0.5;
        photo.panY = 0.5;
        images.set(id, img);
        resolve(true);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        toast(t("readFail"));
        resolve(false);
      };
      img.src = url;
    });
  }

  async function loadFiles(files, startId = 0) {
    const list = [...files].filter((f) => f.type.startsWith("image/"));
    if (!list.length) {
      toast(t("dropImages"));
      return;
    }
    let slot = startId;
    for (const file of list.slice(0, COUNT)) {
      const target = state.photos[slot].src ? firstEmpty(slot) : slot;
      await loadFileInto(target, file);
      slot = (target + 1) % COUNT;
    }
    render();
    selectPhoto(startId);
    const extra = list.length - COUNT;
    if (extra > 0) toast(t("extraSkipped", extra));
  }

  function clearPhoto(id) {
    const photo = state.photos[id];
    if (photo.src && photo.src.startsWith("blob:")) URL.revokeObjectURL(photo.src);
    images.delete(id);
    const { x, y, w, h } = photo;
    Object.assign(photo, emptyPhoto(id), { x, y, w, h });
  }

  function toast(message) {
    el.toast.textContent = message;
    el.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.toast.hidden = true;
    }, 2400);
  }

  function fitSheet() {
    const host = el.stage.getBoundingClientRect();
    const style = getComputedStyle(el.stage);
    const padX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const padY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const rulerX = 28;
    const rulerY = 22;
    const availW = Math.max(80, host.width - padX - rulerX);
    const availH = Math.max(80, host.height - padY - rulerY);
    const aspect = canvasInches().w / canvasInches().h;
    let w = availW;
    let h = w / aspect;
    if (h > availH) {
      h = availH;
      w = h * aspect;
    }
    el.sheet.style.width = `${Math.floor(w)}px`;
    el.sheet.style.height = `${Math.floor(h)}px`;
    layoutImages();
  }

  function renderRulers() {
    const { w, h } = canvasInches();
    el.rulerH.innerHTML = ticks(w);
    el.rulerV.innerHTML = ticks(h);
  }

  function ticks(inches) {
    const parts = [];
    const steps = inches * 2;
    for (let i = 0; i < steps; i += 1) {
      const label = i % 2 === 0 ? `<span>${i / 2}</span>` : "";
      parts.push(`<div class="tick">${label}</div>`);
    }
    return parts.join("");
  }

  function renderPhotos() {
    const html = state.photos
      .map((photo) => {
        const on = photo.id === state.selectedId ? " is-on" : "";
        const empty = photo.src ? "" : " is-empty";
        const media = photo.src
          ? `<div class="photo-media"><img alt="" draggable="false" /></div>
          <div class="handles">
            <i class="handle nw" data-dir="nw"></i>
            <i class="handle ne" data-dir="ne"></i>
            <i class="handle sw" data-dir="sw"></i>
            <i class="handle se" data-dir="se"></i>
          </div>`
          : `<div class="photo-empty"><div><strong>+</strong><span>${t("addPhoto")}</span></div></div>`;
        return `<div class="photo${on}${empty}" data-id="${photo.id}" style="left:${photo.x}%;top:${photo.y}%;width:${photo.w}%;height:${photo.h}%;">
          ${media}
        </div>`;
      })
      .join("");
    el.sheet.innerHTML = html;
    layoutImages();
  }

  function layoutImages() {
    const rect = sheetRect();
    if (!rect.width) return;
    state.photos.forEach((photo) => {
      if (!photo.src) return;
      const node = el.sheet.querySelector(`.photo[data-id="${photo.id}"] img`);
      if (!node) return;
      if (node.getAttribute("src") !== photo.src) node.src = photo.src;
      const frameW = (photo.w / 100) * rect.width;
      const frameH = (photo.h / 100) * rect.height;
      const layout = imageLayout(photo, frameW, frameH);
      if (!layout) return;
      node.style.width = `${layout.width}px`;
      node.style.height = `${layout.height}px`;
      node.style.left = `${layout.left}px`;
      node.style.top = `${layout.top}px`;
    });
  }

  function renderInspector() {
    const photo = selected();
    const has = Boolean(photo?.src);
    el.inspectorBody.hidden = !has;
  }

  function renderMeta() {
    const { w, h } = canvasInches();
    const dpi = state.dpi;
    el.printMeta.textContent = t("printMeta", w, h, dpi);
    el.sheet.style.background = "transparent";
    el.sheet.classList.add("portrait");
    el.sheet.classList.toggle("is-dark", isDarkPaper(state.bg));
    document.body.classList.add("is-portrait");
    const photo = selected();
    if (photo?.src) {
      el.status.textContent = t("statusSelected");
    } else if (state.selectedId != null) {
      el.status.textContent = t("statusEdit");
    } else {
      el.status.textContent = t("statusIdle");
    }
  }

  function render() {
    renderRulers();
    renderPhotos();
    renderInspector();
    renderMeta();
    fitSheet();
  }

  function hitPhoto(clientX, clientY) {
    const rect = sheetRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    for (let i = state.photos.length - 1; i >= 0; i -= 1) {
      const photo = state.photos[i];
      if (
        x >= photo.x &&
        x <= photo.x + photo.w &&
        y >= photo.y &&
        y <= photo.y + photo.h
      ) {
        return photo.id;
      }
    }
    return null;
  }

  function startPan(id, event) {
    const photo = state.photos[id];
    const { w, h } = frameSize(photo);
    const layout = imageLayout(photo, w, h);
    drag = {
      type: "pan",
      id,
      startX: event.clientX,
      startY: event.clientY,
      origLeft: layout ? layout.left : 0,
      origTop: layout ? layout.top : 0,
      unlocked: false,
    };
    el.sheet.querySelector(`.photo[data-id="${id}"]`)?.classList.add("is-dragging");
  }

  function startResize(id, event) {
    const photo = state.photos[id];
    const node = el.sheet.querySelector(`.photo[data-id="${id}"]`);
    const box = node.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    drag = {
      type: "resize",
      id,
      cx,
      cy,
      startDist: Math.max(8, Math.hypot(event.clientX - cx, event.clientY - cy)),
      origZoom: photo.zoom,
    };
    node.classList.add("is-resizing");
  }

  function onPointerMove(event) {
    if (!drag) return;
    const photo = state.photos[drag.id];
    const { w: frameW, h: frameH } = frameSize(photo);

    if (drag.type === "resize") {
      const dist = Math.hypot(event.clientX - drag.cx, event.clientY - drag.cy);
      setZoom(photo, drag.origZoom * (dist / drag.startDist));
      layoutImages();
      renderInspector();
      return;
    }

    if (!drag.unlocked) {
      const dist = Math.abs(event.clientX - drag.startX) + Math.abs(event.clientY - drag.startY);
      if (dist < 4) return;
      ensureTwoAxisPan(photo);
      const primed = imageLayout(photo, frameW, frameH);
      if (primed) {
        drag.origLeft = primed.left - (event.clientX - drag.startX);
        drag.origTop = primed.top - (event.clientY - drag.startY);
      }
      drag.unlocked = true;
      renderInspector();
    }

    const layout = imageLayout(photo, frameW, frameH);
    if (!layout) return;
    const left = drag.origLeft + (event.clientX - drag.startX);
    const top = drag.origTop + (event.clientY - drag.startY);
    setPanFromOffset(photo, layout, left, top);
    layoutImages();
  }

  function endDrag() {
    if (!drag) return;
    const node = el.sheet.querySelector(`.photo[data-id="${drag.id}"]`);
    node?.classList.remove("is-dragging", "is-resizing");
    drag = null;
    renderInspector();
    renderMeta();
  }

  function openFilePicker(id) {
    uploadTarget = id;
    el.inputSingle.value = "";
    el.inputSingle.click();
  }

  function drawCover(ctx, photo, img, x, y, w, h) {
    const layout = imageLayout(photo, w, h);
    if (!layout) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    ctx.drawImage(img, x + layout.left, y + layout.top, layout.width, layout.height);
    ctx.restore();
  }

  async function downloadPNG() {
    const { w: wIn, h: hIn } = canvasInches();
    const dpi = state.dpi;
    const width = Math.round(wIn * dpi);
    const height = Math.round(hIn * dpi);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = state.bg;
    ctx.fillRect(0, 0, width, height);

    const backgroundOk =
      (backgroundImage.complete && backgroundImage.naturalWidth > 0) || (await backgroundReady);
    if (backgroundOk && backgroundImage.naturalWidth) {
      ctx.drawImage(backgroundImage, 0, 0, width, height);
    }

    for (const photo of state.photos) {
      const id = photo.id;
      const img = images.get(id);
      if (!photo.src || !img) continue;
      if (!img.complete) {
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        }).catch(() => {});
      }
      const x = (photo.x / 100) * width;
      const y = (photo.y / 100) * height;
      const w = (photo.w / 100) * width;
      const h = (photo.h / 100) * height;
      drawCover(ctx, photo, img, x, y, w, h);
    }

    const overlayOk =
      (overlayImage.complete && overlayImage.naturalWidth > 0) || (await overlayReady);
    if (overlayOk && overlayImage.naturalWidth) {
      ctx.drawImage(overlayImage, 0, 0, width, height);
    }

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) {
      toast(t("exportFail"));
      return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `4x6-sheet-portrait-${dpi}dpi.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    toast(t("savedPng", width, height));
  }

  function escapeAttr(value) {
    return String(value).replace(/[&<>"']/g, (ch) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
    ));
  }

  function resetCrop(photo) {
    photo.zoom = 1;
    photo.panX = 0.5;
    photo.panY = 0.5;
    layoutImages();
    renderInspector();
  }

  function nudgePan(dx, dy, fine) {
    const photo = selected();
    if (!photo?.src) return;
    ensureTwoAxisPan(photo);
    const { w: frameW, h: frameH } = frameSize(photo);
    const layout = imageLayout(photo, frameW, frameH);
    if (!layout) return;
    const step = fine ? 8 : 24;
    setPanFromOffset(photo, layout, layout.left - dx * step, layout.top - dy * step);
    layoutImages();
    renderInspector();
  }

  // Events
  document.getElementById("btn-download").addEventListener("click", () => {
    downloadPNG();
  });

  document.getElementById("btn-print").addEventListener("click", () => {
    window.print();
  });

  document.getElementById("btn-lang").addEventListener("click", () => {
    setLang(lang === "zh" ? "en" : "zh");
  });

  document.getElementById("btn-theme").addEventListener("click", () => {
    setTheme(theme === "light" ? "dark" : "light");
  });

  document.getElementById("btn-replace").addEventListener("click", () => {
    if (state.selectedId == null) return;
    openFilePicker(state.selectedId);
  });

  document.getElementById("btn-clear").addEventListener("click", () => {
    if (state.selectedId == null) return;
    clearPhoto(state.selectedId);
    render();
  });

  document.getElementById("btn-reset-crop").addEventListener("click", () => {
    const photo = selected();
    if (!photo) return;
    resetCrop(photo);
  });

  window.addEventListener("beforeprint", () => {
    let tag = document.getElementById("print-page-size");
    if (!tag) {
      tag = document.createElement("style");
      tag.id = "print-page-size";
      document.head.appendChild(tag);
    }
    tag.textContent = "@page { size: 4in 6in; margin: 0; }";
  });

  el.sheet.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    const node = event.target.closest(".photo");
    if (!node) {
      state.selectedId = null;
      renderInspector();
      renderMeta();
      el.sheet.querySelectorAll(".photo").forEach((photoNode) => photoNode.classList.remove("is-on"));
      return;
    }
    const id = Number(node.dataset.id);
    const photo = state.photos[id];
    selectPhoto(id);
    if (!photo.src) {
      openFilePicker(id);
      return;
    }
    if (event.target.closest(".handle")) {
      startResize(id, event);
    } else {
      startPan(id, event);
    }
    el.sheet.setPointerCapture(event.pointerId);
  });

  el.sheet.addEventListener("pointermove", onPointerMove);
  el.sheet.addEventListener("pointerup", endDrag);
  el.sheet.addEventListener("pointercancel", endDrag);

  el.sheet.addEventListener(
    "wheel",
    (event) => {
      const id = state.selectedId ?? hitPhoto(event.clientX, event.clientY);
      if (id == null) return;
      const photo = state.photos[id];
      if (!photo.src) return;
      event.preventDefault();
      const box = el.sheet.querySelector(`.photo[data-id="${id}"]`)?.getBoundingClientRect();
      const focus = box
        ? { x: event.clientX - box.left, y: event.clientY - box.top }
        : null;
      setZoom(photo, photo.zoom * Math.exp(-event.deltaY * 0.0015), focus);
      if (state.selectedId !== id) selectPhoto(id);
      else {
        layoutImages();
        renderInspector();
      }
    },
    { passive: false }
  );

  el.sheet.addEventListener("dblclick", (event) => {
    const node = event.target.closest(".photo");
    if (!node) return;
    const photo = state.photos[Number(node.dataset.id)];
    if (!photo?.src) return;
    resetCrop(photo);
  });

  el.inputSingle.addEventListener("change", async () => {
    const file = el.inputSingle.files?.[0];
    if (!file) return;
    await loadFileInto(uploadTarget, file);
    render();
    selectPhoto(uploadTarget);
  });

  document.getElementById("btn-zoom-in").addEventListener("click", () => {
    const photo = selected();
    if (!photo?.src) return;
    setZoom(photo, photo.zoom * 1.2);
    layoutImages();
    renderInspector();
  });

  document.getElementById("btn-zoom-out").addEventListener("click", () => {
    const photo = selected();
    if (!photo?.src) return;
    setZoom(photo, photo.zoom / 1.2);
    layoutImages();
    renderInspector();
  });

  window.addEventListener("keydown", (event) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName);
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      downloadPNG();
      return;
    }
    if (typing) return;
    if (event.key === "Escape") {
      state.selectedId = null;
      render();
      return;
    }
    if (event.key === "Delete" || event.key === "Backspace") {
      if (state.selectedId != null) {
        event.preventDefault();
        clearPhoto(state.selectedId);
        render();
      }
      return;
    }
    if (event.key >= "1" && event.key <= "9") {
      selectPhoto(Number(event.key) - 1);
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      nudgePan(-1, 0, event.shiftKey);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nudgePan(1, 0, event.shiftKey);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      nudgePan(0, -1, event.shiftKey);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      nudgePan(0, 1, event.shiftKey);
    }
  });

  ["dragenter", "dragover"].forEach((type) => {
    window.addEventListener(type, (event) => {
      event.preventDefault();
      if ([...event.dataTransfer.types].includes("Files")) {
        document.body.classList.add("is-dropping");
        el.dropVeil.hidden = false;
      }
    });
  });

  window.addEventListener("dragleave", (event) => {
    if (event.relatedTarget) return;
    document.body.classList.remove("is-dropping");
    el.dropVeil.hidden = true;
  });

  window.addEventListener("drop", async (event) => {
    event.preventDefault();
    document.body.classList.remove("is-dropping");
    el.dropVeil.hidden = true;
    const files = event.dataTransfer?.files;
    if (!files?.length) return;
    const over = hitPhoto(event.clientX, event.clientY);
    await loadFiles(files, over ?? firstEmpty(0));
  });

  window.addEventListener("resize", () => {
    cancelAnimationFrame(fitRaf);
    fitRaf = requestAnimationFrame(() => {
      fitSheet();
    });
  });

  new ResizeObserver(() => fitSheet()).observe(el.stage);

  applyTheme();
  applyLang();
  applyGrid();
  render();
  document.body.dataset.ready = "1";
})();
