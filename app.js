(() => {
  const COUNT = 9;
  const LANG_KEY = "photoResize.lang";
  const THEME_KEY = "photoResize.theme";
  const STYLE_KEY = "photoResize.style";

  const THEMES = [
    {
      id: "meowme",
      nameKey: "themeMeowme",
      background: "background/background.png",
      overlay: "overlay/overlay.png",
    },
    {
      id: "halloween",
      nameKey: "themeHalloween",
      background: "background/halloween.png",
      overlay: "overlay/halloween.png",
      frameCount: 4,
      photoShape: "oval",
      frames: [
        { x: 11.75, y: 22.5556, w: 36.25, h: 17.9444 },
        { x: 51.1667, y: 22.5556, w: 36.25, h: 17.9444 },
        { x: 11.75, y: 61.9444, w: 36.25, h: 17.9444 },
        { x: 51.1667, y: 61.9444, w: 36.25, h: 17.9444 },
      ],
    },
    {
      id: "lucky-cat",
      nameKey: "themeLuckyCat",
      background: "background/lucky-cat.png",
      overlay: "overlay/lucky-cat.png",
    },
  ];

  const STRINGS = {
    en: {
      title: "FAT Factory MeowMe Photo Resizer",
      description:
        () => `Lay out ${activeFrameCount()} photos on a portrait 4×6 inch print. Upload, move, and resize each image, then download a 300 DPI file ready for the lab.`,
      brandTitle: "FAT Factory MeowMe Photo Resizer",
      brandTagline: () => `${frameCountLabel()} photos on a 4×6 portrait`,
      print: "Print",
      download: "Download PNG",
      changeStyle: "Change style",
      chooseKicker: "Print style",
      chooseTitle: "Choose a style",
      chooseLead: "Pick a print style first. The background and oval frame change together.",
      themeMeowme: "MeowMe",
      themeHalloween: "Halloween",
      themeLuckyCat: "Lucky cat",
      langToZh: "Switch to Traditional Chinese",
      langToEn: "Switch to English",
      langTitleZh: "繁體中文",
      langTitleEn: "English",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      themeTitleLight: "Light theme",
      themeTitleDark: "Dark theme",
      guideKicker: "User guide",
      guideTitle: () => `Make a 4×6 ${frameUpLabel()} print`,
      guideLead:
        () => `This page lays out ${activeFrameCount()} photos on one portrait 4×6 inch sheet. Choose a print style first, then the photo areas stay locked to the selected design. You only move and resize the picture inside each frame.`,
      guideStyleTitle: "1. Choose a style",
      guideStyle1: "Pick a print style. The background and oval frame change together.",
      guideStyle2: "Use Change style in the top bar to pick a different one.",
      guideAddTitle: "2. Add photos",
      guideAdd1: "Click an empty slot to choose one image.",
      guideAdd2: () => `Drop up to ${activeFrameCount()} files onto the print at once.`,
      guideMoveTitle: "3. Move a photo",
      guideMove1: "Click the photo you want to edit.",
      guideMove2: "Drag in any direction — left, right, up, or down.",
      guideMove3: "The frame stays put; only the image inside it moves.",
      guideResizeTitle: "4. Resize a photo",
      guideResize1: "Click a photo so crop brackets appear on its corners.",
      guideResize2: "Pull a corner to zoom that patch in or out.",
      guideResize3: "Scroll the mouse wheel over the photo to resize it.",
      guideResize4: "Use <strong>−</strong> / <strong>+</strong> when a photo is selected.",
      guideReplaceTitle: "5. Replace or remove",
      guideReplace1: "<strong>Replace</strong> swaps the selected photo.",
      guideClone1: "<strong>Clone</strong> duplicates it into the next empty frame.",
      guideReplace2: "<strong>Clear</strong> or <kbd>Delete</kbd> empties that slot.",
      guideReplace3: "Double-click a photo to reset its crop.",
      guideSaveTitle: "6. Save the print",
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
      clone: "Clone",
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
        `Added ${activeFrameCount()} photos. ${n} extra file${n > 1 ? "s" : ""} skipped.`,
      cloned: (n) => `Cloned into frame ${n}`,
      cloneFull: "No empty frame to clone into.",
      exportFail: "Could not export the print.",
      exportNoFrame: "Saved photos only — the background and overlay could not be included.",
      savedPng: (w, h) => `Saved ${w} × ${h} px PNG`,
      printMeta: (w, h, dpi) => `${w} × ${h} in  ·  ${dpi} DPI  ·  ${w * dpi} × ${h * dpi} px`,
    },
    zh: {
      title: "FAT Factory MeowMe Photo Resizer",
      description:
        () => `在直式 4×6 吋相紙上排版${frameCountLabelZh()}張照片。上傳、移動並調整每張圖片大小，再下載 300 DPI 檔案，可直接送沖印。`,
      brandTitle: "FAT Factory MeowMe Photo Resizer",
      brandTagline: () => `直式 4×6 4R${frameCountLabelZh()}張照片`,
      print: "列印",
      download: "下載 PNG",
      changeStyle: "更換款式",
      chooseKicker: "相片款式",
      chooseTitle: "選擇款式",
      chooseLead: "請先選擇相片款式。背景與橢圓外框會一起更換。",
      themeMeowme: "MeowMe",
      themeHalloween: "萬聖節",
      themeLuckyCat: "招財貓",
      langToZh: "切換為繁體中文",
      langToEn: "切換為英文",
      langTitleZh: "繁體中文",
      langTitleEn: "English",
      themeToLight: "切換為淺色主題",
      themeToDark: "切換為深色主題",
      themeTitleLight: "淺色主題",
      themeTitleDark: "深色主題",
      guideKicker: "使用說明",
      guideTitle: () => `製作 4x6 4R${frameLayoutLabelZh()}相片`,
      guideLead:
        () => `本頁會把${frameCountLabelZh()}張照片排在一張直式 4×6 吋 4R相紙上。請先選擇款式，照片區域會依照所選設計固定位置，你只需移動並縮放每格裡的圖片。`,
      guideStyleTitle: "1. 選擇款式",
      guideStyle1: "選擇相片款式。背景與橢圓外框會一起更換。",
      guideStyle2: "之後可用頂端的「更換款式」改選其他款。",
      guideAddTitle: "2. 加入照片",
      guideAdd1: "點選空格來選擇一張圖片。",
      guideAdd2: () => `一次可將最多${frameCountLabelZh()}個檔案拖放到相紙上。`,
      guideMoveTitle: "3. 移動照片",
      guideMove1: "點選要編輯的照片。",
      guideMove2: "可向左、右、上、下任意拖移。",
      guideMove3: "外框不會動，只有格內圖片會移動。",
      guideResizeTitle: "4. 調整照片大小",
      guideResize1: "點選照片，角落會出現裁切框。",
      guideResize2: "拉動角落可放大或縮小該區塊。",
      guideResize3: "在照片上滾動滑鼠滾輪來縮放。",
      guideResize4: "選取照片後，可用<strong>−</strong> / <strong>+</strong>調整。",
      guideReplaceTitle: "5. 更換或移除",
      guideReplace1: "<strong>更換</strong>可替換目前選取的照片。",
      guideClone1: "<strong>複製</strong>會把目前照片複製到下一個空格。",
      guideReplace2: "<strong>清除</strong>或按 <kbd>Delete</kbd> 可清空該格。",
      guideReplace3: "雙擊照片可重設裁切。",
      guideSaveTitle: "6. 儲存相片",
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
      clone: "複製",
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
      cloned: (n) => `已複製到第 ${n} 格`,
      cloneFull: "沒有空格可複製。",
      exportFail: "無法匯出相紙。",
      exportNoFrame: "已儲存照片，但無法加入背景與外框。",
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
    renderChooser();
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
    app: document.getElementById("app"),
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
    styleGrid: document.getElementById("style-grid"),
    sheetBackground: document.querySelector(".sheet-background"),
    sheetOverlay: document.querySelector(".sheet-overlay"),
    sheetControls: document.getElementById("sheet-controls"),
  };

  const state = {
    gap: 0,
    margin: 0,
    bg: "#fffcf7",
    selectedId: null,
    styleId: null,
    dpi: 300,
    photos: Array.from({ length: COUNT }, (_, i) => emptyPhoto(i)),
  };

  const images = new Map();
  let themeBitmaps = { id: null, bg: null, overlay: null };
  let themeObjectUrls = [];
  let themeDataPromise = null;
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

  function findTheme(id) {
    return THEMES.find((theme) => theme.id === id) ?? null;
  }

  function activeTheme() {
    return findTheme(state.styleId);
  }

  function activeFrameCount() {
    return activeTheme()?.frameCount ?? COUNT;
  }

  function activePhotos() {
    return state.photos.slice(0, activeFrameCount());
  }

  function activePhotoShape() {
    return activeTheme()?.photoShape ?? "rect";
  }

  function frameCountLabel() {
    return activeFrameCount() === 4 ? "Four" : "Nine";
  }

  function frameUpLabel() {
    return activeFrameCount() === 4 ? "four-photo" : "nine-up";
  }

  function frameCountLabelZh() {
    return activeFrameCount() === 4 ? "四" : "九";
  }

  function frameLayoutLabelZh() {
    return activeFrameCount() === 4 ? "四格" : "九格";
  }

  function lastStyleId() {
    try {
      const saved = localStorage.getItem(STYLE_KEY);
      if (findTheme(saved)) return saved;
    } catch {
      /* ignore */
    }
    return null;
  }

  function isChoosing() {
    return el.app.classList.contains("is-choosing");
  }

  function forgetThemeBitmaps() {
    themeBitmaps.bg?.close?.();
    themeBitmaps.overlay?.close?.();
    themeBitmaps = { id: null, bg: null, overlay: null };
    for (const url of themeObjectUrls) URL.revokeObjectURL(url);
    themeObjectUrls = [];
  }

  function ensureThemeData() {
    if (window.PHOTO_RESIZE_THEME_DATA) return Promise.resolve();
    if (themeDataPromise) return themeDataPromise;
    themeDataPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "theme-data.js";
      script.onload = resolve;
      script.onerror = () => {
        themeDataPromise = null;
        reject(new Error("theme-data"));
      };
      document.head.appendChild(script);
    });
    return themeDataPromise;
  }

  async function bitmapFromBlob(blob) {
    if (typeof createImageBitmap === "function") {
      try {
        return await createImageBitmap(blob);
      } catch {
        /* fall through */
      }
    }
    const objectUrl = URL.createObjectURL(blob);
    themeObjectUrls.push(objectUrl);
    const img = new Image();
    img.src = objectUrl;
    if (img.decode) await img.decode();
    else {
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
    }
    return img;
  }

  async function cleanAssetBlob(path) {
    try {
      const res = await fetch(path, { cache: "force-cache" });
      if (res.ok) return res.blob();
    } catch {
      /* file:// and some previews block fetch */
    }
    await ensureThemeData();
    const dataUrl = window.PHOTO_RESIZE_THEME_DATA?.[path];
    if (!dataUrl) throw new Error("asset");
    const res = await fetch(dataUrl);
    return res.blob();
  }

  async function loadThemeBitmaps(theme) {
    if (!theme) return themeBitmaps;
    if (themeBitmaps.id === theme.id && themeBitmaps.bg && themeBitmaps.overlay) {
      return themeBitmaps;
    }
    forgetThemeBitmaps();
    const [bgBlob, overlayBlob] = await Promise.all([
      cleanAssetBlob(theme.background),
      cleanAssetBlob(theme.overlay),
    ]);
    const bgUrl = URL.createObjectURL(bgBlob);
    const overlayUrl = URL.createObjectURL(overlayBlob);
    themeObjectUrls.push(bgUrl, overlayUrl);
    if (el.sheetBackground) el.sheetBackground.src = bgUrl;
    if (el.sheetOverlay) el.sheetOverlay.src = overlayUrl;
    const [bg, overlay] = await Promise.all([
      bitmapFromBlob(bgBlob),
      bitmapFromBlob(overlayBlob),
    ]);
    themeBitmaps = { id: theme.id, bg, overlay };
    return themeBitmaps;
  }

  async function applyStyle(id) {
    const theme = findTheme(id);
    if (!theme) return false;
    state.styleId = theme.id;
    el.app.dataset.style = theme.id;
    if (state.selectedId != null && state.selectedId >= activeFrameCount()) {
      state.selectedId = null;
    }
    try {
      localStorage.setItem(STYLE_KEY, theme.id);
    } catch {
      /* ignore */
    }
    await loadThemeBitmaps(theme);
    applyGrid();
    applyLang();
    render();
    return true;
  }

  function renderChooser() {
    if (!el.styleGrid) return;
    el.styleGrid.innerHTML = THEMES.map((theme) => {
      const selected = theme.id === state.styleId;
      return `<button type="button" class="style-card${selected ? " is-on" : ""}" data-id="${escapeAttr(theme.id)}" aria-pressed="${selected ? "true" : "false"}">
        <span class="style-card-preview">
          <img class="style-card-bg" src="${escapeAttr(theme.background)}" alt="" draggable="false" />
          <img class="style-card-ov" src="${escapeAttr(theme.overlay)}" alt="" draggable="false" />
        </span>
        <span class="style-card-name">${escapeAttr(t(theme.nameKey))}</span>
      </button>`;
    }).join("");
  }

  function showChooser() {
    el.app.classList.add("is-choosing");
    renderChooser();
    const card =
      el.styleGrid.querySelector(".style-card.is-on") || el.styleGrid.querySelector(".style-card");
    card?.focus();
  }

  async function enterEditor(id) {
    if (!(await applyStyle(id))) return;
    el.app.classList.remove("is-choosing");
    requestAnimationFrame(() => {
      fitSheet();
      el.sheet.focus();
    });
  }

  function canvasInches() {
    return { w: 4, h: 6 };
  }

  function selected() {
    return state.photos[state.selectedId] ?? null;
  }

  function applyGrid() {
    const frames = activeTheme()?.frames;
    if (frames?.length) {
      frames.forEach((frame, i) => {
        Object.assign(state.photos[i], frame);
      });
      return;
    }
    const cols = 3;
    const rows = 3;
    const margin = state.margin;
    const gap = state.gap;
    const innerW = 100 - margin * 2;
    const innerH = 100 - margin * 2;
    const cellW = (innerW - gap * (cols - 1)) / cols;
    const cellH = (innerH - gap * (rows - 1)) / rows;
    activePhotos().forEach((photo, i) => {
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
    if (id == null || id < 0 || id >= activeFrameCount()) return;
    state.selectedId = id;
    el.sheet.querySelectorAll(".photo").forEach((node) => {
      node.classList.toggle("is-on", Number(node.dataset.id) === id);
    });
    renderSheetControls();
    renderInspector();
    renderMeta();
  }

  function firstEmpty(from = 0) {
    const count = activeFrameCount();
    for (let i = 0; i < count; i += 1) {
      const id = (from + i) % count;
      if (!state.photos[id].src) return id;
    }
    return from % count;
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
    const count = activeFrameCount();
    for (const file of list.slice(0, count)) {
      const target = state.photos[slot].src ? firstEmpty(slot) : slot;
      await loadFileInto(target, file);
      slot = (target + 1) % count;
    }
    render();
    selectPhoto(startId);
    const extra = list.length - count;
    if (extra > 0) toast(t("extraSkipped", extra));
  }

  function clearPhoto(id) {
    const photo = state.photos[id];
    if (photo.src && photo.src.startsWith("blob:")) URL.revokeObjectURL(photo.src);
    images.delete(id);
    const { x, y, w, h } = photo;
    Object.assign(photo, emptyPhoto(id), { x, y, w, h });
  }

  async function clonePhotoInto(fromId, toId) {
    const from = state.photos[fromId];
    if (!from?.src || fromId === toId) return false;
    let url = from.src;
    if (from.src.startsWith("blob:")) {
      try {
        const blob = await fetch(from.src).then((res) => res.blob());
        url = URL.createObjectURL(blob);
      } catch {
        toast(t("readFail"));
        return false;
      }
    }
    const img = new Image();
    const loaded = await new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
    if (!loaded) {
      if (url.startsWith("blob:") && url !== from.src) URL.revokeObjectURL(url);
      toast(t("readFail"));
      return false;
    }
    const dest = state.photos[toId];
    dest.src = url;
    dest.name = from.name;
    dest.nw = from.nw;
    dest.nh = from.nh;
    dest.zoom = from.zoom;
    dest.panX = from.panX;
    dest.panY = from.panY;
    images.set(toId, img);
    return true;
  }

  async function cloneSelectedPhoto() {
    const photo = selected();
    if (!photo?.src) return;
    const target = firstEmpty(photo.id + 1);
    if (state.photos[target].src) {
      toast(t("cloneFull"));
      return;
    }
    const ok = await clonePhotoInto(photo.id, target);
    if (!ok) return;
    render();
    selectPhoto(target);
    toast(t("cloned", target + 1));
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
    const html = activePhotos()
      .map((photo) => {
        const on = photo.id === state.selectedId ? " is-on" : "";
        const empty = photo.src ? "" : " is-empty";
        const shape = activePhotoShape() === "oval" ? " is-oval" : "";
        const media = photo.src
          ? `<div class="photo-media"><img alt="" draggable="false" /></div>
          ${activePhotoShape() === "oval" ? "" : `
          <div class="handles">
            <i class="handle nw" data-dir="nw"></i>
            <i class="handle ne" data-dir="ne"></i>
            <i class="handle sw" data-dir="sw"></i>
            <i class="handle se" data-dir="se"></i>
          </div>`}`
          : `<div class="photo-empty"><div><strong>+</strong><span>${t("addPhoto")}</span></div></div>`;
        return `<div class="photo${on}${empty}${shape}" data-id="${photo.id}" style="left:${photo.x}%;top:${photo.y}%;width:${photo.w}%;height:${photo.h}%;">
          ${media}
        </div>`;
      })
      .join("");
    el.sheet.innerHTML = html;
    renderSheetControls();
    layoutImages();
  }

  function renderSheetControls() {
    if (!el.sheetControls) return;
    if (activePhotoShape() !== "oval") {
      el.sheetControls.innerHTML = "";
      return;
    }
    const photo = selected();
    if (!photo?.src) {
      el.sheetControls.innerHTML = "";
      return;
    }
    el.sheetControls.innerHTML = `<div class="photo-controls is-oval" data-id="${photo.id}" style="left:${photo.x}%;top:${photo.y}%;width:${photo.w}%;height:${photo.h}%;">
      <div class="handles">
        <i class="handle nw" data-dir="nw"></i>
        <i class="handle ne" data-dir="ne"></i>
        <i class="handle sw" data-dir="sw"></i>
        <i class="handle se" data-dir="se"></i>
      </div>
    </div>`;
  }

  function layoutImages() {
    const rect = sheetRect();
    if (!rect.width) return;
    activePhotos().forEach((photo) => {
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
    const photos = activePhotos();
    for (let i = photos.length - 1; i >= 0; i -= 1) {
      const photo = photos[i];
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
    el.sheetControls?.querySelector(".photo-controls")?.classList.add("is-resizing");
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
    el.sheetControls?.querySelector(".photo-controls")?.classList.remove("is-resizing");
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
    if (activePhotoShape() === "oval") {
      ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    } else {
      ctx.rect(x, y, w, h);
    }
    ctx.clip();
    ctx.drawImage(img, x + layout.left, y + layout.top, layout.width, layout.height);
    ctx.restore();
  }

  function fileStamp() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;
  }

  function canvasPngBlob(canvas) {
    const dataUrl = canvas.toDataURL("image/png");
    const comma = dataUrl.indexOf(",");
    const binary = atob(dataUrl.slice(comma + 1));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], { type: "image/png" });
  }

  function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      a.remove();
      URL.revokeObjectURL(url);
    }, 2000);
  }

  function renderPrintCanvas(withChrome) {
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

    if (withChrome && themeBitmaps.bg) {
      ctx.drawImage(themeBitmaps.bg, 0, 0, width, height);
    }

    for (const photo of activePhotos()) {
      const img = images.get(photo.id);
      if (!photo.src || !img?.complete) continue;
      const x = (photo.x / 100) * width;
      const y = (photo.y / 100) * height;
      const w = (photo.w / 100) * width;
      const h = (photo.h / 100) * height;
      drawCover(ctx, photo, img, x, y, w, h);
    }

    if (withChrome && themeBitmaps.overlay) {
      ctx.drawImage(themeBitmaps.overlay, 0, 0, width, height);
    }

    return canvas;
  }

  async function downloadPNG() {
    const theme = findTheme(state.styleId);
    if (theme) {
      try {
        await loadThemeBitmaps(theme);
      } catch {
        /* keep any assets we already have */
      }
    }
    const filename = `meowMe-${fileStamp()}.png`;
    const trySave = (canvas) => {
      const blob = canvasPngBlob(canvas);
      triggerDownload(blob, filename);
      return canvas;
    };
    try {
      const canvas = trySave(renderPrintCanvas(true));
      toast(t("savedPng", canvas.width, canvas.height));
      return;
    } catch {
      /* canvas tainted or encode failed — reload frame as blobs and retry */
    }
    if (theme) {
      forgetThemeBitmaps();
      try {
        await loadThemeBitmaps(theme);
        const canvas = trySave(renderPrintCanvas(true));
        toast(t("savedPng", canvas.width, canvas.height));
        return;
      } catch {
        /* still blocked */
      }
    }
    if (!activePhotos().some((photo) => photo.src)) {
      toast(t("exportFail"));
      return;
    }
    try {
      const canvas = trySave(renderPrintCanvas(false));
      toast(t("exportNoFrame"));
    } catch {
      toast(t("exportFail"));
    }
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
  document.getElementById("btn-download").addEventListener("click", (event) => {
    event.preventDefault();
    if (isChoosing()) return;
    downloadPNG().catch(() => toast(t("exportFail")));
  });

  document.getElementById("btn-print").addEventListener("click", () => {
    if (isChoosing()) return;
    window.print();
  });

  document.getElementById("btn-change-style").addEventListener("click", () => {
    showChooser();
  });

  el.styleGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".style-card");
    if (!card) return;
    enterEditor(card.dataset.id);
  });

  document.getElementById("btn-lang").addEventListener("click", () => {
    setLang(lang === "zh" ? "en" : "zh");
  });

  document.getElementById("btn-theme").addEventListener("click", () => {
    setTheme(theme === "light" ? "dark" : "light");
  });

  document.getElementById("btn-clone").addEventListener("click", () => {
    cloneSelectedPhoto();
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
    const node = event.target.closest(".photo");
    if (!node) {
      event.preventDefault();
      state.selectedId = null;
      renderInspector();
      renderMeta();
      renderSheetControls();
      el.sheet.querySelectorAll(".photo").forEach((photoNode) => photoNode.classList.remove("is-on"));
      return;
    }
    const id = Number(node.dataset.id);
    const photo = state.photos[id];
    selectPhoto(id);
    if (!photo.src) {
      uploadTarget = id;
      return;
    }
    event.preventDefault();
    if (event.target.closest(".handle")) {
      startResize(id, event);
    } else {
      startPan(id, event);
    }
    el.sheet.setPointerCapture(event.pointerId);
  });

  el.sheet.addEventListener("click", (event) => {
    const node = event.target.closest(".photo");
    if (!node) return;
    const id = Number(node.dataset.id);
    const photo = state.photos[id];
    if (photo?.src) return;
    openFilePicker(id);
  });

  el.sheet.addEventListener("pointermove", onPointerMove);
  el.sheet.addEventListener("pointerup", endDrag);
  el.sheet.addEventListener("pointercancel", endDrag);

  el.sheetControls?.addEventListener("pointerdown", (event) => {
    const handle = event.target.closest(".handle");
    const node = event.target.closest(".photo-controls");
    if (!handle || !node) return;
    event.preventDefault();
    const id = Number(node.dataset.id);
    selectPhoto(id);
    startResize(id, event);
    el.sheetControls.setPointerCapture(event.pointerId);
  });
  el.sheetControls?.addEventListener("pointermove", onPointerMove);
  el.sheetControls?.addEventListener("pointerup", endDrag);
  el.sheetControls?.addEventListener("pointercancel", endDrag);

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
      if (isChoosing()) return;
      downloadPNG().catch(() => toast(t("exportFail")));
      return;
    }
    if (typing || isChoosing()) return;
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
      const id = Number(event.key) - 1;
      if (id < activeFrameCount()) selectPhoto(id);
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
      if (isChoosing()) return;
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
    if (isChoosing()) return;
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

  state.styleId = lastStyleId();
  if (state.styleId) el.app.dataset.style = state.styleId;
  applyTheme();
  applyLang();
  applyGrid();
  render();
  document.body.dataset.ready = "1";
})();
