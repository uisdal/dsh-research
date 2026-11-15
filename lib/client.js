/* dsh-research client —— 右侧资料网控件（原生 DOM，非 ESM） */
;(function () {
  if (typeof window === "undefined" || !window.__ModuleLoader__ || typeof window.__ModuleLoader__.load !== "function") {
    try { console.warn("[dsh-research] 缺少 __ModuleLoader__，跳过界面") } catch (e) {}
    return;
  }

  window.__ModuleLoader__.load({
    id: "dsh-research",
    factory: function () {
      var module = { exports: {} };
      var exports = module.exports;
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

      var CSS = "\n:root {\n  --c-bg:#F7F9FC; --c-card:#FFFFFF;\n  --c-stroke:rgba(148,163,184,.35); --c-stroke-strong:rgba(148,163,184,.6);\n  --c-text:#0F172A; --c-text2:#475569; --c-text3:#94A3B8;\n  --c-primary:#2563EB; --c-primary-soft:rgba(37,99,235,.25);\n  --c-success:#10B981; --c-danger:#EF4444;\n  --c-globe-line:#C9D4E3; --c-globe-equator:#B9C7DA;\n  --c-anchor:#64748B; --c-arc:#9FB3CC;\n  --c-glow:rgba(255,255,255,.55);\n  --c-shadow-a:0 6px 20px rgba(15,23,42,.08);\n  --c-shadow-b:0 1px 2px rgba(15,23,42,.06);\n  --c-mask:rgba(255,255,255,.88);\n  --c-hover:#F1F5F9; --c-row-hover:#FAFBFD; --c-row-drag:#F8FAFC;\n  --c-switch-off:#E2E8F0; --c-handle:#CBD5E1; --c-danger-soft:#FEF2F2;\n  --c-primary-hover:#1D4ED8; --c-on-primary:#FFFFFF;\n  --c-primary-ring:rgba(37,99,235,.12); --c-primary-border:rgba(37,99,235,.55);\n  --c-divider:rgba(148,163,184,.22); --c-demo-on:#EFF6FF;\n  --c-knob:#FFFFFF; --c-stroke-dashed:rgba(148,163,184,.5);\n  --ease: cubic-bezier(.2,.8,.2,1);\n  --font: \"Microsoft YaHei\",\"PingFang SC\",system-ui,-apple-system,sans-serif;\n  --mono: ui-monospace,Consolas,monospace;\n}\n[data-theme=\"dark\"] {\n  --c-bg:#0B1220; --c-card:#111A2B;\n  --c-stroke:rgba(148,163,184,.18); --c-stroke-strong:rgba(148,163,184,.34);\n  --c-text:#E5EAF3; --c-text2:#94A3B8; --c-text3:#64748B;\n  --c-primary:#60A5FA; --c-primary-soft:rgba(96,165,250,.28);\n  --c-success:#34D399; --c-danger:#F87171;\n  --c-globe-line:#2E3B52; --c-globe-equator:#3B4C68;\n  --c-anchor:#94A3B8; --c-arc:#3F5169;\n  --c-glow:rgba(96,165,250,.14);\n  --c-shadow-a:0 6px 20px rgba(0,0,0,.45);\n  --c-shadow-b:0 1px 2px rgba(0,0,0,.35);\n  --c-mask:rgba(11,18,32,.88);\n  --c-hover:#1A2438; --c-row-hover:#182235; --c-row-drag:#1A2438;\n  --c-switch-off:#243044; --c-handle:#475569; --c-danger-soft:rgba(248,113,113,.14);\n  --c-primary-hover:#3B82F6; --c-on-primary:#FFFFFF;\n  --c-primary-ring:rgba(96,165,250,.18); --c-primary-border:rgba(96,165,250,.55);\n  --c-divider:rgba(148,163,184,.16); --c-demo-on:rgba(96,165,250,.12);\n  --c-knob:#FFFFFF; --c-stroke-dashed:rgba(148,163,184,.34);\n}\n* { box-sizing: border-box; margin: 0; padding: 0; }\nhtml, body {\n  height: 100%;\n  background: var(--c-bg);\n  color: var(--c-text);\n  font-family: var(--font);\n  -webkit-font-smoothing: antialiased;\n}\nbutton { font-family: inherit; cursor: pointer; background: none; border: none; color: inherit; }\ninput { font-family: inherit; }\n.stage {\n  min-height: 100%;\n  padding: 28px 32px;\n}\n.stage h1 {\n  font-size: 20px;\n  font-weight: 650;\n  letter-spacing: .01em;\n}\n.stage .lead {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--c-text2);\n  line-height: 1.6;\n}\n\n/* demo bar — will be removed in production */\n.demo-bar {\n  position: fixed;\n  left: 24px;\n  bottom: 24px;\n  z-index: 40;\n  background: var(--c-card);\n  border: 1px solid var(--c-stroke);\n  border-radius: 14px;\n  box-shadow: var(--c-shadow-b);\n  padding: 12px 14px;\n  width: 280px;\n}\n.demo-bar .kicker {\n  font-size: 11px;\n  color: var(--c-text3);\n  margin-bottom: 8px;\n}\n.demo-bar .row { display: flex; gap: 8px; }\n.demo-btn {\n  flex: 1;\n  height: 32px;\n  border-radius: 10px;\n  border: 1px solid var(--c-stroke);\n  background: var(--c-card);\n  font-size: 12px;\n  color: var(--c-text2);\n  transition: background 160ms var(--ease), border-color 160ms var(--ease), transform 160ms var(--ease), color 160ms var(--ease);\n}\n.demo-btn:hover { background: var(--c-hover); transform: translateY(-1px); }\n.demo-btn.is-on {\n  background: var(--c-demo-on);\n  border-color: var(--c-primary-soft);\n  color: var(--c-primary);\n}\n\n\n.dock-tools {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.theme-toggle {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: var(--c-card);\n  border: 1px solid var(--c-stroke);\n  box-shadow: var(--c-shadow-b);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--c-text);\n  cursor: pointer;\n  flex: 0 0 34px;\n  transition: background 180ms var(--ease), border-color 180ms var(--ease), transform 180ms var(--ease);\n}\n.theme-toggle:hover {\n  background: var(--c-hover);\n  border-color: var(--c-stroke-strong);\n  transform: translateY(-1px);\n}\n.theme-toggle:focus { outline: none; }\n.theme-toggle:focus-visible {\n  box-shadow: var(--c-shadow-b), 0 0 0 3px var(--c-primary-soft);\n}\n.theme-toggle svg { width: 16px; height: 16px; display: block; }\n.theme-toggle .icon-sun { display: none; }\n.theme-toggle .icon-moon { display: block; }\n[data-theme=\"dark\"] .theme-toggle .icon-sun { display: block; }\n[data-theme=\"dark\"] .theme-toggle .icon-moon { display: none; }\n\n.dock {\n  position: relative;\n  width: 34px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.orb {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: var(--c-card);\n  border: 1px solid var(--c-stroke);\n  box-shadow: var(--c-shadow-b);\n  position: relative;\n  overflow: visible;\n  cursor: pointer;\n  transition:\n    width 260ms var(--ease),\n    height 260ms var(--ease),\n    border-radius 260ms var(--ease),\n    background 180ms var(--ease),\n    border-color 180ms var(--ease),\n    transform 180ms var(--ease),\n    box-shadow 220ms var(--ease);\n}\n.orb-inner {\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  overflow: hidden;\n  position: relative;\n}\n.orb:hover:not(.is-open) {\n  background: var(--c-hover);\n  border-color: var(--c-stroke-strong);\n  transform: translateY(-1px);\n}\n.orb.is-open {\n  width: 208px;\n  height: 208px;\n  border-radius: 22px;\n  box-shadow: var(--c-shadow-a), var(--c-shadow-b);\n  cursor: default;\n}\n.orb.is-closing {\n  transition-duration: 220ms;\n}\n.orb:focus { outline: none; }\n.orb:focus-visible {\n  box-shadow: var(--c-shadow-b), 0 0 0 3px var(--c-primary-soft);\n}\n\n.fab-icon, .globe-svg, .done-overlay {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.fab-icon {\n  width: 16px;\n  height: 16px;\n  left: 50%;\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  margin: -8px 0 0 -8px;\n  color: var(--c-text);\n  opacity: 1;\n  transition: opacity 200ms var(--ease);\n}\n.orb.is-open .fab-icon { opacity: 0; }\n\n.globe-svg {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 240ms var(--ease);\n}\n.orb.is-open .globe-svg { opacity: 1; pointer-events: auto; }\n\n.done-overlay {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--c-mask);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 220ms var(--ease);\n}\n.done-overlay.is-on { opacity: 1; }\n.done-check {\n  width: 28px;\n  height: 28px;\n  color: var(--c-success);\n  margin-bottom: 6px;\n}\n.done-text {\n  font-size: 12px;\n  color: var(--c-text2);\n}\n\n.badge {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  min-width: 15px;\n  height: 15px;\n  padding: 0 4px;\n  border-radius: 8px;\n  background: var(--c-primary);\n  color: var(--c-on-primary);\n  font-size: 9px;\n  line-height: 15px;\n  text-align: center;\n  font-family: var(--mono);\n  font-weight: 600;\n  pointer-events: none;\n  z-index: 2;\n}\n.badge.is-hidden { display: none; }\n\n.tip {\n  position: absolute;\n  transform: translate(-50%, calc(-100% - 8px));\n  background: var(--c-card);\n  color: var(--c-text);\n  border: 1px solid var(--c-stroke);\n  border-radius: 8px;\n  box-shadow: var(--c-shadow-b);\n  font-family: var(--mono);\n  font-size: 10px;\n  line-height: 1;\n  padding: 5px 7px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 140ms var(--ease);\n  z-index: 3;\n}\n.tip.is-on { opacity: 1; }\n\n.panel {\n  width: 396px;\n  position: absolute;\n  top: 42px;\n  right: 0;\n  margin-top: 0;\n  background: var(--c-card);\n  border: 1px solid var(--c-stroke);\n  border-radius: 14px;\n  box-shadow: var(--c-shadow-a), var(--c-shadow-b);\n  padding: 16px 16px 12px;\n  opacity: 0;\n  transform: translateY(4px);\n  pointer-events: none;\n  visibility: hidden;\n  transition: opacity 140ms var(--ease), transform 140ms var(--ease), visibility 140ms;\n}\n.panel.is-open {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  visibility: visible;\n  transition-duration: 180ms;\n}\n.panel-head { margin-bottom: 10px; }\n.panel-title {\n  font-size: 15px;\n  font-weight: 650;\n}\n.panel-sub {\n  margin-top: 3px;\n  font-size: 12px;\n  color: var(--c-text2);\n}\n\n.list {\n  border: 1px solid var(--c-stroke);\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--c-card);\n}\n.row-item {\n  display: flex;\n  align-items: center;\n  height: 44px;\n  padding: 0 10px 0 8px;\n  gap: 8px;\n  position: relative;\n  background: var(--c-card);\n  transition: background 160ms var(--ease);\n}\n.row-item + .row-item { border-top: 1px solid var(--c-divider); }\n.row-item:hover { background: var(--c-row-hover); }\n.row-item.is-dragging {\n  background: var(--c-row-drag);\n  box-shadow: var(--c-shadow-b);\n  z-index: 2;\n}\n.row-item.is-off .meta-name { color: var(--c-text3); }\n.handle {\n  width: 16px;\n  height: 44px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  gap: 2px 3px;\n  cursor: grab;\n  flex: 0 0 16px;\n  padding: 14px 0;\n}\n.handle:active { cursor: grabbing; }\n.handle i {\n  width: 2px;\n  height: 2px;\n  border-radius: 50%;\n  background: var(--c-handle);\n  display: block;\n}\n.meta { flex: 1; min-width: 0; }\n.meta-name {\n  font-size: 13px;\n  color: var(--c-text);\n  line-height: 1.2;\n}\n.meta-domain {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--c-text3);\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.del {\n  width: 24px;\n  height: 24px;\n  border-radius: 8px;\n  color: var(--c-text3);\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 160ms var(--ease), background 160ms var(--ease), color 160ms var(--ease), transform 160ms var(--ease);\n  flex: 0 0 24px;\n}\n.row-item:hover .del, .del:focus-visible { opacity: 1; }\n.del:hover { background: var(--c-danger-soft); color: var(--c-danger); transform: translateY(-1px); }\n\n.switch {\n  width: 36px;\n  height: 20px;\n  border-radius: 999px;\n  background: var(--c-switch-off);\n  position: relative;\n  flex: 0 0 36px;\n  transition: background 180ms var(--ease);\n}\n.switch[aria-checked=\"true\"] { background: var(--c-primary); }\n.switch .knob {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--c-knob);\n  box-shadow: var(--c-shadow-b);\n  transition: transform 200ms var(--ease);\n}\n.switch[aria-checked=\"true\"] .knob { transform: translateX(16px); }\n\n.actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n}\n.btn {\n  height: 36px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font-size: 13px;\n  border: 1px solid var(--c-stroke);\n  background: var(--c-card);\n  color: var(--c-text2);\n  transition: background 160ms var(--ease), border-color 160ms var(--ease), transform 160ms var(--ease), color 160ms var(--ease);\n}\n.btn:hover { background: var(--c-hover); transform: translateY(-1px); }\n.btn-primary {\n  background: var(--c-primary);\n  border-color: var(--c-primary);\n  color: var(--c-on-primary);\n  flex: 1;\n}\n.btn-primary:hover { background: var(--c-primary-hover); border-color: var(--c-primary-hover); color: var(--c-on-primary); }\n.btn-ghost { flex: 0 0 auto; }\n\n.add-form {\n  margin-top: 12px;\n  padding: 12px;\n  border: 1px dashed var(--c-stroke-dashed);\n  border-radius: 12px;\n  display: none;\n}\n.add-form.is-on { display: block; }\n.add-form .fields { display: flex; gap: 8px; }\n.add-form input {\n  flex: 1;\n  height: 34px;\n  border-radius: 9px;\n  border: 1px solid var(--c-stroke);\n  padding: 0 10px;\n  font-size: 13px;\n  color: var(--c-text);\n  background: var(--c-card);\n  outline: none;\n  transition: border-color 160ms var(--ease), box-shadow 160ms var(--ease);\n}\n.add-form input:focus {\n  border-color: var(--c-primary-border);\n  box-shadow: 0 0 0 3px var(--c-primary-ring);\n}\n.add-form input.mono { font-family: var(--mono); font-size: 12px; }\n.add-form .form-actions { display: flex; gap: 8px; margin-top: 8px; justify-content: flex-end; }\n.add-error {\n  margin-top: 6px;\n  font-size: 12px;\n  color: var(--c-danger);\n  min-height: 0;\n}\n\n.status {\n  margin-top: 10px;\n  font-size: 12px;\n  color: var(--c-text3);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .orb, .panel, .btn, .switch, .switch .knob, .del, .demo-btn, .fab-icon, .globe-svg, .done-overlay, .tip, .row-item {\n    transition: none !important;\n  }\n}\n\n\n#statusText.is-blocked{color:var(--c-danger)}\n";
      var HTML = "<div class=\"dock\" id=\"dock\">\n    <div class=\"dock-tools\">\n      \n      <div class=\"orb\" id=\"orb\" role=\"button\" tabindex=\"0\" aria-label=\"资料网\" aria-expanded=\"false\" aria-haspopup=\"dialog\" aria-controls=\"panel\">\n      <div class=\"orb-inner\">\n        <svg class=\"fab-icon\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\">\n          <circle cx=\"7\" cy=\"7\" r=\"5\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n          <ellipse cx=\"7\" cy=\"7\" rx=\"2.1\" ry=\"5\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n          <path d=\"M2 7h10\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n          <path d=\"M10.8 10.8L14.2 14.2\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>\n        </svg>\n        <svg class=\"globe-svg\" id=\"globe\" viewBox=\"0 0 208 208\" width=\"208\" height=\"208\" aria-hidden=\"true\"></svg>\n        <div class=\"done-overlay\" id=\"doneOverlay\">\n          <svg class=\"done-check\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\">\n            <circle cx=\"14\" cy=\"14\" r=\"12\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n            <path d=\"M8.5 14.2l3.6 3.6 7.4-7.6\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n          <div class=\"done-text\" id=\"doneText\">已查阅 3 次</div>\n        </div>\n        <div class=\"tip\" id=\"domainTip\" role=\"tooltip\"></div>\n      </div>\n      <span class=\"badge is-hidden\" id=\"badge\" aria-hidden=\"true\">0</span>\n    </div>\n    </div>\n\n    <div class=\"panel\" id=\"panel\" role=\"dialog\" aria-labelledby=\"panelTitle\" aria-hidden=\"true\">\n      <div class=\"panel-head\">\n        <div class=\"panel-title\" id=\"panelTitle\">资料网</div>\n        <div class=\"panel-sub\">工作时会先从这些站找答案</div>\n      </div>\n      <div class=\"list\" id=\"siteList\"></div>\n      <div class=\"actions\">\n        <button type=\"button\" class=\"btn btn-primary\" id=\"btnAdd\">＋ 添加站点</button>\n        <button type=\"button\" class=\"btn btn-ghost\" id=\"btnRestore\">恢复默认</button>\n      </div>\n      <div class=\"add-form\" id=\"addForm\">\n        <div class=\"fields\">\n          <input id=\"addName\" type=\"text\" maxlength=\"32\" placeholder=\"名称\" aria-label=\"站点名称\">\n          <input id=\"addDomain\" class=\"mono\" type=\"text\" maxlength=\"64\" placeholder=\"域名，如 example.com\" aria-label=\"站点域名\">\n        </div>\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn btn-ghost\" id=\"btnAddCancel\">取消</button>\n          <button type=\"button\" class=\"btn btn-primary\" id=\"btnAddConfirm\">添加</button>\n        </div>\n        <div class=\"add-error\" id=\"addError\"></div>\n      </div>\n      <div class=\"status\" id=\"statusText\">已启用 6 / 6 · 上次保存 2 分钟前</div>\n    </div>\n  </div>";
      var STYLE_ID = "dshresearch-style";
      var HOLDER_ID = "dshresearch-holder";

      function warn(msg) { try { console.warn("[dsh-research] " + msg) } catch (e) {} }

      /* ===== 原界面逻辑（改造：接宿主接口 + 跟随主题） ===== */

  "use strict";

  var CONFIG = {
    colors: {
      bg: "var(--c-bg)",
      card: "var(--c-card)",
      stroke: "var(--c-stroke)",
      primary: "var(--c-primary)",
      accent: "var(--c-primary)",
      success: "var(--c-success)",
      block: "var(--c-danger)",
      text: "var(--c-text)",
      text2: "var(--c-text2)",
      text3: "var(--c-text3)",
      meridian: "var(--c-globe-line)",
      equator: "var(--c-globe-equator)",
      anchor: "var(--c-anchor)",
      arc: "var(--c-arc)",
      glow: "var(--c-glow)",
      primarySoft: "var(--c-primary-soft)"
    },
    size: {
      btn: 34,
      orb: 208,
      radius: 82,
      meridians: 8,
      parallels: 5,
      anchorR: 2.5,
      headR: 3,
      glowR: 6,
      pulseR: 18,
      trail: 8,
      panelWidth: 396,
      panelGap: 8
    },
    time: {
      spin: 60000,
      open: 260,
      close: 220,
      panelIn: 180,
      panelOut: 140,
      flight: 1200,
      pulse: 400,
      nextGap: 200,
      breath: 2400,
      doneHold: 1200,
      hover: 160
    },
    arcLift: 0.28,
    tilt: 0.32,
    easeUi: "cubic-bezier(.2,.8,.2,1)",
    easeFlight: [0.4, 0, 0.2, 1]
  };

  var DEFAULT_SITES = [
    { id: "github", name: "GitHub", domain: "github.com", lat: 28, lon: 18, on: true },
    { id: "bilibili", name: "哔哩哔哩", domain: "bilibili.com", lat: 12, lon: 78, on: true },
    { id: "tieba", name: "百度贴吧", domain: "tieba.baidu.com", lat: -16, lon: 132, on: true },
    { id: "zhihu", name: "知乎", domain: "zhihu.com", lat: 36, lon: 188, on: true },
    { id: "csdn", name: "CSDN", domain: "csdn.net", lat: -22, lon: 246, on: true },
    { id: "stackoverflow", name: "Stack Overflow", domain: "stackoverflow.com", lat: 16, lon: 308, on: true }
  ];

  var NS = "http://www.w3.org/2000/svg";
  var CX = 104;
  var CY = 104;

  var state = {
    sites: [],
    count: 0,
    orbOpen: false,
    panelOpen: false,
    rot: 0.4,
    lastTs: 0,
    raf: 0,
    reduced: false,
    queue: [],
    flight: null,
    trail: [],
    pulse: null,
    lastSave: Date.now() - 2 * 60 * 1000,
    dragId: null,
    doneTimer: 0,
    demoMode: "idle"
  };

  var els = {};
  var svgEls = {};
  var easeFlight = makeBezier(CONFIG.easeFlight[0], CONFIG.easeFlight[1], CONFIG.easeFlight[2], CONFIG.easeFlight[3]);

  function copySites(list) {
    var out = [];
    var i, s;
    for (i = 0; i < list.length; i++) {
      s = list[i];
      out.push({ id: s.id, name: s.name, domain: s.domain, lat: s.lat, lon: s.lon, on: s.on !== false });
    }
    return out;
  }

  function $(id) { return document.getElementById(id); }

  function makeBezier(x1, y1, x2, y2) {
    function A(a1, a2) { return 1 - 3 * a2 + 3 * a1; }
    function B(a1, a2) { return 3 * a2 - 6 * a1; }
    function C(a1) { return 3 * a1; }
    function calc(t, a1, a2) {
      return ((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t;
    }
    function slope(t, a1, a2) {
      return 3 * A(a1, a2) * t * t + 2 * B(a1, a2) * t + C(a1);
    }
    function solve(x) {
      var t = x, i, s, d;
      for (i = 0; i < 10; i++) {
        s = slope(t, x1, x2);
        if (Math.abs(s) < 1e-6) break;
        d = calc(t, x1, x2) - x;
        t -= d / s;
        if (t < 0) t = 0;
        if (t > 1) t = 1;
      }
      return t;
    }
    return function (x) {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      return calc(solve(x), y1, y2);
    };
  }

  function clamp(n, a, b) {
    return n < a ? a : n > b ? b : n;
  }

  function deg(d) { return d * Math.PI / 180; }

  function project(latDeg, lonDeg, rot) {
    var lat = deg(latDeg);
    var lon = deg(lonDeg) + rot;
    var R = CONFIG.size.radius;
    var x = R * Math.cos(lat) * Math.sin(lon);
    var y = R * Math.sin(lat);
    var z = R * Math.cos(lat) * Math.cos(lon);
    var ct = Math.cos(CONFIG.tilt);
    var st = Math.sin(CONFIG.tilt);
    var y2 = y * ct - z * st;
    var z2 = y * st + z * ct;
    return { x: CX + x, y: CY - y2, z: z2 };
  }

  function svg(name, attrs) {
    var el = document.createElementNS(NS, name);
    var k;
    if (attrs) {
      for (k in attrs) {
        if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
      }
    }
    return el;
  }

  function buildGlobe() {
    var root = $("globe");
    var i, g, p, front, back, a, R, defs, glow, clip, mer, par;

    while (root.firstChild) root.removeChild(root.firstChild);

    defs = svg("defs");
    glow = svg("radialGradient", { id: "globeGlow", cx: "32%", cy: "30%", r: "55%" });
    glow.appendChild(svg("stop", { offset: "0%", "stop-color": "var(--c-glow)" }));
    glow.appendChild(svg("stop", { offset: "100%", "stop-color": "var(--c-glow)", "stop-opacity": "0" }));
    defs.appendChild(glow);

    clip = svg("clipPath", { id: "globeClip" });
    clip.appendChild(svg("circle", { cx: CX, cy: CY, r: CONFIG.size.radius }));
    defs.appendChild(clip);
    root.appendChild(defs);

    root.appendChild(svg("circle", {
      cx: CX, cy: CY, r: CONFIG.size.radius,
      fill: "url(#globeGlow)",
      stroke: "none"
    }));

    g = svg("g", { "clip-path": "url(#globeClip)", "fill": "none" });
    mer = [];
    for (i = 0; i < CONFIG.size.meridians; i++) {
      back = svg("path", { class: "meridian back", stroke: CONFIG.colors.meridian, "stroke-width": "0.8", fill: "none", opacity: "0.35" });
      front = svg("path", { class: "meridian front", stroke: CONFIG.colors.meridian, "stroke-width": "0.8", fill: "none", opacity: "1" });
      g.appendChild(back);
      g.appendChild(front);
      mer.push({ back: back, front: front, lon: i * (180 / CONFIG.size.meridians) });
    }
    par = [];
    for (i = 0; i < CONFIG.size.parallels; i++) {
      p = svg("path", {
        class: i === Math.floor(CONFIG.size.parallels / 2) ? "equator" : "parallel",
        stroke: i === Math.floor(CONFIG.size.parallels / 2) ? CONFIG.colors.equator : CONFIG.colors.meridian,
        "stroke-width": i === Math.floor(CONFIG.size.parallels / 2) ? "0.95" : "0.8",
        fill: "none"
      });
      g.appendChild(p);
      par.push({ el: p, lat: -60 + i * (120 / (CONFIG.size.parallels - 1)) });
    }
    root.appendChild(g);

    root.appendChild(svg("circle", {
      cx: CX, cy: CY, r: CONFIG.size.radius,
      fill: "none",
      stroke: CONFIG.colors.meridian,
      "stroke-width": "1.2"
    }));

    svgEls.arc = svg("path", {
      fill: "none",
      stroke: CONFIG.colors.arc,
      "stroke-width": "1",
      "stroke-dasharray": "3 3",
      opacity: "0"
    });
    root.appendChild(svgEls.arc);

    svgEls.trail = [];
    for (i = 0; i < CONFIG.size.trail; i++) {
      a = svg("circle", { r: "1.6", fill: CONFIG.colors.primary, opacity: "0" });
      root.appendChild(a);
      svgEls.trail.push(a);
    }

    svgEls.pulse = svg("circle", {
      r: "0",
      fill: "none",
      stroke: CONFIG.colors.primary,
      "stroke-width": "1.2",
      opacity: "0"
    });
    root.appendChild(svgEls.pulse);

    svgEls.headGlow = svg("circle", {
      r: String(CONFIG.size.glowR),
      fill: CONFIG.colors.primarySoft,
      opacity: "0"
    });
    svgEls.head = svg("circle", {
      r: String(CONFIG.size.headR),
      fill: CONFIG.colors.primary,
      opacity: "0"
    });
    root.appendChild(svgEls.headGlow);
    root.appendChild(svgEls.head);

    svgEls.anchors = [];
    svgEls.meridians = mer;
    svgEls.parallels = par;

    updateGlobe(state.rot, true);
    renderAnchors();
  }

  function pathFromPoints(points, frontWanted) {
    var d = "";
    var i, p, on, last = false;
    for (i = 0; i < points.length; i++) {
      p = points[i];
      on = frontWanted ? p.z >= 0 : p.z < 0;
      if (on) {
        d += (last ? "L" : "M") + p.x.toFixed(2) + "," + p.y.toFixed(2);
        last = true;
      } else {
        last = false;
      }
    }
    return d;
  }

  function sampleMeridian(lon, rot, steps) {
    var pts = [], i, lat;
    for (i = 0; i <= steps; i++) {
      lat = -90 + 180 * (i / steps);
      pts.push(project(lat, lon, rot));
    }
    return pts;
  }

  function sampleParallel(lat, rot, steps) {
    var pts = [], i, lon;
    for (i = 0; i <= steps; i++) {
      lon = 360 * (i / steps);
      pts.push(project(lat, lon, rot));
    }
    return pts;
  }

  function updateGlobe(rot, force) {
    var i, pts, mer;
    for (i = 0; i < svgEls.meridians.length; i++) {
      mer = svgEls.meridians[i];
      pts = sampleMeridian(mer.lon, rot, 36);
      mer.front.setAttribute("d", pathFromPoints(pts, true));
      mer.back.setAttribute("d", pathFromPoints(pts, false));
    }
    updateBackParallels(rot);
    updateAnchors();
  }

  function updateBackParallels(rot) {
    var i, pts, par, dFront, dBack;
    if (!svgEls.parBack) {
      svgEls.parBack = [];
      for (i = 0; i < svgEls.parallels.length; i++) {
        par = svg("path", {
          stroke: svgEls.parallels[i].el.getAttribute("stroke"),
          "stroke-width": svgEls.parallels[i].el.getAttribute("stroke-width"),
          fill: "none",
          opacity: "0.35"
        });
        svgEls.parallels[i].el.parentNode.insertBefore(par, svgEls.parallels[i].el);
        svgEls.parBack.push(par);
      }
    }
    for (i = 0; i < svgEls.parallels.length; i++) {
      pts = sampleParallel(svgEls.parallels[i].lat, rot, 48);
      svgEls.parBack[i].setAttribute("d", pathFromPoints(pts, false));
      svgEls.parallels[i].el.setAttribute("d", pathFromPoints(pts, true));
    }
  }

  function siteById(id) {
    var i;
    for (i = 0; i < state.sites.length; i++) {
      if (state.sites[i].id === id) return state.sites[i];
    }
    return null;
  }

  function renderAnchors() {
    var g = $("globe");
    var i, s, c;
    for (i = 0; i < svgEls.anchors.length; i++) {
      if (svgEls.anchors[i].parentNode) svgEls.anchors[i].parentNode.removeChild(svgEls.anchors[i]);
    }
    svgEls.anchors = [];
    for (i = 0; i < state.sites.length; i++) {
      s = state.sites[i];
      c = svg("circle", {
        r: String(CONFIG.size.anchorR),
        fill: CONFIG.colors.anchor,
        "data-id": s.id,
        "data-domain": s.domain
      });
      c.style.cursor = "pointer";
      c.setAttribute("pointer-events", "auto");
      bindAnchorHover(c, s);
      g.insertBefore(c, svgEls.arc);
      svgEls.anchors.push(c);
    }
    updateAnchors();
  }

  function bindAnchorHover(el, site) {
    el.addEventListener("mouseenter", function () {
      if (el.getAttribute("data-back") === "1") return;
      showTip(el, site.domain);
    });
    el.addEventListener("mouseleave", hideTip);
  }

  function showTip(anchor, text) {
    var tip = $("domainTip");
    var x = parseFloat(anchor.getAttribute("cx")) || CX;
    var y = parseFloat(anchor.getAttribute("cy")) || CY;
    tip.textContent = text;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
    tip.className = "tip is-on";
  }

  function hideTip() {
    $("domainTip").className = "tip";
  }

  function updateAnchors() {
    var i, s, p, el, visible, breath, t, op;
    t = performance.now();
    breath = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin((t / CONFIG.time.breath) * Math.PI * 2));
    for (i = 0; i < state.sites.length; i++) {
      s = state.sites[i];
      el = svgEls.anchors[i];
      if (!el) continue;
      p = project(s.lat, s.lon, state.rot);
      visible = p.z >= -6;
      el.setAttribute("cx", p.x.toFixed(2));
      el.setAttribute("cy", p.y.toFixed(2));
      el.setAttribute("data-back", p.z < 0 ? "1" : "0");
      op = visible ? (state.orbOpen && !state.reduced && hasDataBreath() ? breath : 1) : 0;
      if (!s.on) op *= 0.45;
      if (p.z < 0 && visible) op *= 0.35;
      el.setAttribute("opacity", op.toFixed(3));
      el.setAttribute("pointer-events", p.z >= 0 ? "auto" : "none");
    }
  }

  function hasDataBreath() {
    return state.flight || state.queue.length > 0 || state.count > 0 || state.demoMode === "scanning";
  }

  function quadAt(ax, ay, cx, cy, bx, by, t) {
    var mt = 1 - t;
    return {
      x: mt * mt * ax + 2 * mt * t * cx + t * t * bx,
      y: mt * mt * ay + 2 * mt * t * cy + t * t * by
    };
  }

  function makeArc(from, to) {
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var lift = len * CONFIG.arcLift;
    var c = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 - lift };
    var d = "M" + from.x.toFixed(2) + "," + from.y.toFixed(2) +
      " Q" + c.x.toFixed(2) + "," + c.y.toFixed(2) + " " + to.x.toFixed(2) + "," + to.y.toFixed(2);
    return { d: d, c: c, a: from, b: to };
  }

  function startNextFlight() {
    var item, a, b, pa, pb, arc;
    if (state.flight || !state.queue.length) return;
    if (state.reduced) {
      state.queue = [];
      return;
    }
    closePanel();
    if (!state.orbOpen) openOrb(false);
    item = state.queue.shift();
    a = siteById(item.from);
    b = siteById(item.to);
    if (!a || !b) {
      startNextFlight();
      return;
    }
    pa = project(a.lat, a.lon, state.rot);
    pb = project(b.lat, b.lon, state.rot);
    arc = makeArc(pa, pb);
    svgEls.arc.setAttribute("d", arc.d);
    svgEls.arc.setAttribute("opacity", "0.45");
    svgEls.arc.setAttribute("stroke-dashoffset", "0");
    state.flight = {
      from: a,
      to: b,
      label: item.label || a.name,
      arc: arc,
      start: performance.now(),
      arrived: false
    };
    state.count += 1;
    updateBadge();
  }

  function resetFlightVisuals() {
    var i;
    if (svgEls.arc) svgEls.arc.setAttribute("opacity", "0");
    if (svgEls.head) svgEls.head.setAttribute("opacity", "0");
    if (svgEls.headGlow) svgEls.headGlow.setAttribute("opacity", "0");
    if (svgEls.trail) {
      for (i = 0; i < svgEls.trail.length; i++) svgEls.trail[i].setAttribute("opacity", "0");
    }
    if (svgEls.pulse) svgEls.pulse.setAttribute("opacity", "0");
    state.pulse = null;
    state.trail = [];
  }

  function finishFlight() {
    var target = state.flight ? state.flight.to : null;
    state.flight = null;
    resetFlightVisuals();
    if (state.queue.length) {
      setTimeout(function () {
        startNextFlight();
      }, CONFIG.time.nextGap);
    } else {
      svgEls.arc.setAttribute("opacity", "0");
      state.trail = [];
      if (state.demoMode === "scanning") {
        playDone();
      }
    }
  }

  function pulseAt(p) {
    state.pulse = { x: p.x, y: p.y, start: performance.now() };
    svgEls.pulse.setAttribute("cx", p.x.toFixed(2));
    svgEls.pulse.setAttribute("cy", p.y.toFixed(2));
  }

  function updateFlight(now) {
    var f = state.flight, t, e, pt, i, fade, dash, p, pa, pb, arc;
    if (state.pulse) {
      t = (now - state.pulse.start) / CONFIG.time.pulse;
      if (t >= 1) {
        svgEls.pulse.setAttribute("opacity", "0");
        state.pulse = null;
      } else {
        svgEls.pulse.setAttribute("r", (CONFIG.size.pulseR * t).toFixed(2));
        svgEls.pulse.setAttribute("opacity", (0.5 * (1 - t)).toFixed(3));
      }
    }
    if (!f) return;
    t = (now - f.start) / CONFIG.time.flight;
    if (t >= 1) {
      if (!f.arrived) {
        f.arrived = true;
        pb = project(f.to.lat, f.to.lon, state.rot);
        pulseAt(pb);
        pt = pb;
        svgEls.head.setAttribute("cx", pt.x.toFixed(2));
        svgEls.head.setAttribute("cy", pt.y.toFixed(2));
        finishFlight();
      }
      return;
    }
    e = easeFlight(t);
    pa = project(f.from.lat, f.from.lon, state.rot);
    pb = project(f.to.lat, f.to.lon, state.rot);
    arc = makeArc(pa, pb);
    svgEls.arc.setAttribute("d", arc.d);
    pt = quadAt(pa.x, pa.y, arc.c.x, arc.c.y, pb.x, pb.y, e);
    svgEls.head.setAttribute("cx", pt.x.toFixed(2));
    svgEls.head.setAttribute("cy", pt.y.toFixed(2));
    svgEls.head.setAttribute("opacity", "1");
    svgEls.headGlow.setAttribute("cx", pt.x.toFixed(2));
    svgEls.headGlow.setAttribute("cy", pt.y.toFixed(2));
    svgEls.headGlow.setAttribute("opacity", "1");
    state.trail.unshift({ x: pt.x, y: pt.y });
    if (state.trail.length > CONFIG.size.trail) state.trail.length = CONFIG.size.trail;
    for (i = 0; i < svgEls.trail.length; i++) {
      p = state.trail[i];
      fade = p ? 0.5 * (1 - i / (CONFIG.size.trail - 1)) : 0;
      if (p) {
        svgEls.trail[i].setAttribute("cx", p.x.toFixed(2));
        svgEls.trail[i].setAttribute("cy", p.y.toFixed(2));
        svgEls.trail[i].setAttribute("opacity", fade.toFixed(3));
      } else {
        svgEls.trail[i].setAttribute("opacity", "0");
      }
    }
    dash = -((now / 80) % 24);
    svgEls.arc.setAttribute("stroke-dashoffset", dash.toFixed(2));
  }

  function tick(now) {
    var dt;
    state.raf = requestAnimationFrame(tick);
    if (!state.lastTs) state.lastTs = now;
    dt = now - state.lastTs;
    if (dt > 48) dt = 48;
    state.lastTs = now;
    if (state.orbOpen && !state.reduced) {
      state.rot += (dt / CONFIG.time.spin) * Math.PI * 2;
      updateGlobe(state.rot, false);
    } else if (state.orbOpen) {
      updateAnchors();
    }
    if (!state.reduced) updateFlight(now);
  }

  function ensureLoop() {
    if (!state.raf) {
      state.lastTs = 0;
      state.raf = requestAnimationFrame(tick);
    }
  }

  function openOrb(openPanelAfter) {
    var orb = $("orb");
    orb.classList.remove("is-closing");
    orb.classList.add("is-open");
    orb.setAttribute("aria-expanded", "true");
    state.orbOpen = true;
    if (state.reduced) drawStaticArc();
    ensureLoop();
    if (openPanelAfter) openPanel();
  }

  function closeOrb() {
    var orb = $("orb");
    closePanel();
    hideDone();
    orb.classList.add("is-closing");
    orb.classList.remove("is-open");
    orb.setAttribute("aria-expanded", "false");
    state.orbOpen = false;
    state.flight = null;
    state.queue = [];
    resetFlightVisuals();
    if (state.raf) {
      cancelAnimationFrame(state.raf);
      state.raf = 0;
      state.lastTs = 0;
    }
    setTimeout(function () { orb.classList.remove("is-closing"); }, CONFIG.time.close);
  }

  function drawStaticArc() {
    var a = state.sites[0], b = state.sites[1], pa, pb, arc;
    if (!a || !b) return;
    pa = project(a.lat, a.lon, state.rot);
    pb = project(b.lat, b.lon, state.rot);
    arc = makeArc(pa, pb);
    svgEls.arc.setAttribute("d", arc.d);
    svgEls.arc.setAttribute("opacity", "0.45");
    svgEls.arc.setAttribute("stroke-dashoffset", "0");
  }

  function openPanel() {
    var panel = $("panel");
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    state.panelOpen = true;
    refreshStatus();
  }

  function closePanel() {
    var panel = $("panel");
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    state.panelOpen = false;
    hideAddForm();
  }

  function toggleFromOrb(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (state.panelOpen) closePanel();
    else openPanel();
  }

  function updateBadge() {
    var b = $("badge");
    if (state.count > 0) {
      b.textContent = String(state.count);
      b.className = "badge";
    } else {
      b.className = "badge is-hidden";
    }
  }

  function formatAgo() {
    var mins = Math.max(0, Math.round((Date.now() - state.lastSave) / 60000));
    if (mins <= 0) return "刚刚";
    return mins + " 分钟前";
  }

  function refreshStatus() {
    var on = 0, i, el = $("statusText");
    for (i = 0; i < state.sites.length; i++) if (state.sites[i].on) on += 1;
    el.textContent = "已启用 " + on + " / " + state.sites.length + " · 上次保存 " + formatAgo();
  }

  function markSaved() {
    state.lastSave = Date.now();
    refreshStatus();
  }

  function handleDots() {
    var html = "", i;
    for (i = 0; i < 6; i++) html += "<i></i>";
    return html;
  }

  function renderList() {
    var list = $("siteList");
    var i, s, row, html;
    list.innerHTML = "";
    for (i = 0; i < state.sites.length; i++) {
      s = state.sites[i];
      row = document.createElement("div");
      row.className = "row-item" + (s.on ? "" : " is-off");
      row.setAttribute("data-id", s.id);
      row.innerHTML =
        '<button type="button" class="handle" aria-label="拖动排序 ' + escapeHtml(s.name) + '">' + handleDots() + "</button>" +
        '<button type="button" class="switch" role="switch" aria-checked="' + (s.on ? "true" : "false") + '" aria-label="' + (s.on ? "停用 " : "启用 ") + escapeHtml(s.name) + '"><span class="knob"></span></button>' +
        '<div class="meta"><div class="meta-name">' + escapeHtml(s.name) + '</div><div class="meta-domain">' + escapeHtml(s.domain) + "</div></div>" +
        '<button type="button" class="del" aria-label="删除 ' + escapeHtml(s.name) + '">' +
        '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M3 3l6 6M9 3L3 9"/></svg></button>';
      bindRow(row, s);
      list.appendChild(row);
    }
    refreshStatus();
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }

  function bindRow(row, site) {
    var sw = row.querySelector(".switch");
    var del = row.querySelector(".del");
    var handle = row.querySelector(".handle");
    sw.addEventListener("click", function (e) {
      e.stopPropagation();
      site.on = !site.on;
      sw.setAttribute("aria-checked", site.on ? "true" : "false");
      sw.setAttribute("aria-label", (site.on ? "停用 " : "启用 ") + site.name);
      row.className = "row-item" + (site.on ? "" : " is-off");
      markSaved(); scheduleSave();
      updateAnchors();
    });
    del.addEventListener("click", function (e) {
      e.stopPropagation();
      removeSite(site.id);
    });
    handle.addEventListener("mousedown", function (e) { beginDrag(e, row, site.id); });
    handle.addEventListener("touchstart", function (e) { beginDrag(e, row, site.id); }, { passive: false });
  }

  function removeSite(id) {
    var i, next = [];
    for (i = 0; i < state.sites.length; i++) {
      if (state.sites[i].id !== id) next.push(state.sites[i]);
    }
    state.sites = next;
    renderList();
    renderAnchors();
    markSaved(); scheduleSave();
  }

  function beginDrag(ev, row, id) {
    ev.preventDefault();
    state.dragId = id;
    row.classList.add("is-dragging");
    function move(e) {
      var y = e.touches ? e.touches[0].clientY : e.clientY;
      reorderByY(row, y);
    }
    function up() {
      row.classList.remove("is-dragging");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
      state.dragId = null;
      commitOrder();
    }
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("touchend", up);
  }

  function reorderByY(row, y) {
    var list = $("siteList");
    var items = list.querySelectorAll(".row-item");
    var i, r, mid, before = null;
    for (i = 0; i < items.length; i++) {
      r = items[i].getBoundingClientRect();
      mid = r.top + r.height / 2;
      if (items[i] !== row && y < mid) { before = items[i]; break; }
    }
    if (before) list.insertBefore(row, before);
    else list.appendChild(row);
  }

  function commitOrder() {
    var items = $("siteList").querySelectorAll(".row-item");
    var i, id, s, next = [];
    for (i = 0; i < items.length; i++) {
      id = items[i].getAttribute("data-id");
      s = siteById(id);
      if (s) next.push(s);
    }
    state.sites = next;
    renderAnchors();
    markSaved(); scheduleSave();
  }

  function slugId(domain) {
    return domain.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() + "-" + Date.now();
  }

  function parseDomain(raw) {
    var s = String(raw || "").trim().toLowerCase();
    s = s.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(s)) return null;
    return s;
  }

  function randomSpot() {
    return { lat: Math.round((Math.random() * 80) - 40), lon: Math.round(Math.random() * 360) };
  }

  function showAddForm() {
    $("addForm").classList.add("is-on");
    $("addError").textContent = "";
    $("addName").value = "";
    $("addDomain").value = "";
    $("addName").focus();
  }

  function hideAddForm() {
    $("addForm").classList.remove("is-on");
    $("addError").textContent = "";
  }

  function submitAdd() {
    var name = $("addName").value.replace(/^\s+|\s+$/g, "");
    var domain = parseDomain($("addDomain").value);
    var spot;
    if (!name) { $("addError").textContent = "请填写站点名称"; return; }
    if (!domain) { $("addError").textContent = "请输入有效域名，例如 example.com"; return; }
    spot = randomSpot();
    state.sites.push({ id: slugId(domain), name: name, domain: domain, lat: spot.lat, lon: spot.lon, on: true });
    hideAddForm();
    renderList();
    renderAnchors();
    markSaved(); scheduleSave();
  }

  function restoreDefaults() {
    state.sites = copySites(DEFAULT_SITES);
    hideAddForm();
    renderList();
    renderAnchors();
    markSaved(); scheduleSave();
  }

  function hideDone() {
    $("doneOverlay").classList.remove("is-on");
    if (state.doneTimer) {
      clearTimeout(state.doneTimer);
      state.doneTimer = 0;
    }
  }

  function playDone() {
    var n = state.count || 3;
    $("doneText").textContent = "已查阅 " + n + " 次";
    $("doneOverlay").classList.add("is-on");
    state.demoMode = "done";
    setDemoOn("done");
    if (state.doneTimer) clearTimeout(state.doneTimer);
    state.doneTimer = setTimeout(function () {
      hideDone();
      closeOrb();
      state.demoMode = "idle";
      setDemoOn("idle");
    }, CONFIG.time.doneHold);
  }

  function setDemoOn(name) {
    var btns = document.querySelectorAll(".demo-btn");
    var i;
    for (i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute("data-state") === name) btns[i].classList.add("is-on");
      else btns[i].classList.remove("is-on");
    }
  }

  function setDemoState(name) {
    state.demoMode = name;
    setDemoOn(name);
    hideDone();
    state.queue = [];
    state.flight = null;
    if (name === "idle") {
      closePanel();
      closeOrb();
      return;
    }
    if (name === "scanning") {
      state.count = 0;
      updateBadge();
      closePanel();
      openOrb(false);
      window.demo.startFlight({ from: "github", to: "bilibili", label: "GitHub" });
      window.demo.startFlight({ from: "bilibili", to: "zhihu", label: "哔哩哔哩" });
      window.demo.startFlight({ from: "zhihu", to: "stackoverflow", label: "知乎" });
      return;
    }
    if (name === "done") {
      state.count = 3;
      updateBadge();
      openOrb(false);
      playDone();
    }
  }


  var THEME_KEY = "research-theme";

  function systemTheme() {
    return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }

  function readStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function writeStoredTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function updateThemeToggle(theme) {
    var btn = $("themeToggle");
    if (!btn) return;
    btn.setAttribute("aria-label", theme === "dark" ? "切换为浅色" : "切换为深色");
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    updateThemeToggle(theme === "dark" ? "dark" : "light");
  }

  function hostTheme() {
    try {
      if (document.body && document.body.hasAttribute("data-ds-dark-theme")) return "dark";
    } catch (e) {}
    return "light";
  }

  function initTheme() {
    applyTheme(hostTheme());
    if (typeof MutationObserver !== "function") return;
    try {
      themeObserver = new MutationObserver(function () { applyTheme(hostTheme()); });
      themeObserver.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
    } catch (e) {}
  }

  function toggleTheme(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = cur === "dark" ? "light" : "dark";
    writeStoredTheme(next);
    applyTheme(next);
  }

  window.demo = {
    startFlight: function (opts) {
      if (!opts || !opts.from || !opts.to) return;
      if (state.reduced) return;
      if (!state.orbOpen) openOrb(false);
      state.queue.push({ from: opts.from, to: opts.to, label: opts.label });
      if (!state.flight) startNextFlight();
    },
    setState: setDemoState
  };

  function onDocDown(e) {
    var dock = $("dock");
    var demo = $("demoBar");
    if (demo && demo.contains(e.target)) return;
    if (!dock.contains(e.target)) {
      if (state.panelOpen) closePanel();
      else if (state.orbOpen && state.demoMode !== "scanning") closeOrb();
    }
  }

  function onKey(e) {
    if (e.key === "Escape" || e.key === "Esc") {
      if ($("addForm").classList.contains("is-on")) { hideAddForm(); return; }
      if (state.panelOpen) { closePanel(); $("orb").focus(); return; }
      if (state.orbOpen) closeOrb();
    }
  }


  /* ---------------- 宿主接口 ---------------- */
  var API_BASE = null;
  var saveTimer = 0;
  var statusTimer = 0;
  var pingTimer = 0;
  var themeObserver = null;
  var lastCheck = 0;
  var lastBlocked = 0;

  function fetchJson(url, options) {
    return fetch(url, options).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    });
  }

  function findByDomain(domain) {
    var i;
    for (i = 0; i < state.sites.length; i++) {
      if (state.sites[i].domain === domain) return state.sites[i];
    }
    return null;
  }

  function mergeSites(list) {
    var out = [], i, s, old, spot;
    for (i = 0; i < list.length; i++) {
      s = list[i];
      old = siteById(s.id) || findByDomain(s.domain);
      spot = old || randomSpot();
      out.push({
        id: s.id || slugId(s.domain),
        name: s.name,
        domain: s.domain,
        on: s.on !== false,
        lat: spot.lat,
        lon: spot.lon
      });
    }
    return out;
  }

  function loadConfig() {
    var bases = ["/api/research/", "/research/"], i = 0;
    function tryNext() {
      if (i >= bases.length) return;
      var base = bases[i++];
      fetchJson(base + "config.json").then(function (data) {
        if (!data || data.ok === false || !Array.isArray(data.sites) || !data.sites.length) {
          throw new Error("配置为空");
        }
        API_BASE = base;
        state.sites = mergeSites(data.sites);
        renderList();
        renderAnchors();
      }).catch(tryNext);
    }
    tryNext();
  }

  function scheduleSave() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { saveTimer = 0; saveConfig(); }, 260);
  }

  function saveConfig() {
    if (!API_BASE) return;
    var payload = { sites: [] }, i, s;
    for (i = 0; i < state.sites.length; i++) {
      s = state.sites[i];
      payload.sites.push({ id: s.id, name: s.name, domain: s.domain, on: s.on !== false });
    }
    fetch(API_BASE + "config.json", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    }).then(function (data) {
      if (data && data.ok === false) throw new Error(data.reason || "保存失败");
      if (data && Array.isArray(data.sites)) {
        state.sites = mergeSites(data.sites);
        renderList();
        renderAnchors();
      }
      state.lastSave = Date.now();
      refreshStatus();
    }).catch(function () {});
  }

  function pulseFlight() {
    if (state.reduced) return;
    var on = [], i;
    for (i = 0; i < state.sites.length; i++) if (state.sites[i].on) on.push(state.sites[i]);
    if (on.length < 2) return;
    var a = on[Math.floor(Math.random() * on.length)];
    var b = on[Math.floor(Math.random() * on.length)];
    if (a.id === b.id) b = on[(on.indexOf(a) + 1) % on.length];
    if (window.demo && window.demo.startFlight) {
      window.demo.startFlight({ from: a.id, to: b.id, label: a.name });
    }
  }

  function flashBlocked() {
    var el = $("statusText");
    if (!el) return;
    el.textContent = "刚才拦下了一次未查阅的动手操作";
    el.classList.add("is-blocked");
    setTimeout(function () {
      if (el) el.classList.remove("is-blocked");
      refreshStatus();
    }, 2600);
  }

  function pingOnce() {
    if (!API_BASE) return;
    fetchJson(API_BASE + "ping.json").then(function (d) {
      if (!d || d.ok === false) return;
      if (d.lastCheck && d.lastCheck !== lastCheck) {
        lastCheck = d.lastCheck;
        pulseFlight();
      }
      if (typeof d.blocked === "number" && d.blocked > lastBlocked) {
        lastBlocked = d.blocked;
        flashBlocked();
      }
    }).catch(function () {});
  }

  function init() {
    var mq;
    initTheme();
    state.sites = copySites(DEFAULT_SITES);
    els.orb = $("orb");
    state.reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (window.matchMedia) {
      mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.addEventListener) mq.addEventListener("change", function (ev) { state.reduced = ev.matches; });
      else if (mq.addListener) mq.addListener(function (ev) { state.reduced = ev.matches; });
    }
    buildGlobe();
    renderList();
    updateBadge();
    refreshStatus();
    statusTimer = setInterval(refreshStatus, 30000);
    pingTimer = setInterval(pingOnce, 1400);

    $("orb").addEventListener("click", toggleFromOrb);
    $("orb").addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFromOrb(e); }
    });
    $("btnAdd").addEventListener("click", showAddForm);
    $("btnRestore").addEventListener("click", restoreDefaults);
    $("btnAddConfirm").addEventListener("click", submitAdd);
    $("btnAddCancel").addEventListener("click", hideAddForm);
    $("addDomain").addEventListener("keydown", function (e) {
      if (e.key === "Enter") submitAdd();
    });
    $("addName").addEventListener("keydown", function (e) {
      if (e.key === "Enter") $("addDomain").focus();
    });
    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("keydown", onKey);


    ensureLoop();
    loadConfig();
    pingOnce();
  }




      /* ===== 挂载 / 卸载 ===== */
      var mountedDock = null;

      /* ---------- 右上角共享按钮槽：谁先到谁创建，后面的自动往下排 ---------- */
      var RIGHT_DOCK_ID = "dsh-right-dock";
      function ensureRightDock() {
        var d = document.getElementById(RIGHT_DOCK_ID);
        if (d) return d;
        d = document.createElement("div");
        d.id = RIGHT_DOCK_ID;
        d.setAttribute("data-dsh-dock", "1");
        d.style.cssText = "position:fixed;top:104px;right:14px;z-index:2147483000;" +
          "display:flex;flex-direction:column;align-items:flex-end;gap:10px;";
        document.body.appendChild(d);
        return d;
      }

      function unmount() {
        try { if (statusTimer) clearInterval(statusTimer); statusTimer = 0 } catch (e) {}
        try { if (pingTimer) clearInterval(pingTimer); pingTimer = 0 } catch (e) {}
        try { if (saveTimer) clearTimeout(saveTimer); saveTimer = 0 } catch (e) {}
        try { if (themeObserver) themeObserver.disconnect(); themeObserver = null } catch (e) {}
        try { if (state.raf) cancelAnimationFrame(state.raf); state.raf = 0 } catch (e) {}
        try { if (mountedDock && mountedDock.parentNode) mountedDock.parentNode.removeChild(mountedDock) } catch (e) {}
        mountedDock = null;
        var holder = document.getElementById(HOLDER_ID);
        if (holder && holder.parentNode) holder.parentNode.removeChild(holder);
        var style = document.getElementById(STYLE_ID);
        if (style && style.parentNode) style.parentNode.removeChild(style);
      }

      function mount() {
        if (document.getElementById(HOLDER_ID)) return;
        var style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = CSS;
        document.head.appendChild(style);
        var holder = document.createElement("div");
        holder.id = HOLDER_ID;
        holder.innerHTML = HTML;
        var dock = ensureRightDock();
        var inner = holder.querySelector(".dock");
        if (inner) { mountedDock = inner; dock.appendChild(inner); }
        document.body.appendChild(holder);
        init();
      }

      exports.inject = ["slots"];
      exports.name = "dsh-research";
      exports.apply = function (ctx) {
        try {
          if (!document.body) { setTimeout(mount, 400); return; }
          mount();
          if (ctx && typeof ctx.effect === "function") {
            ctx.effect(function () { return function () { unmount(); }; }, "research.client");
          }
        } catch (e) {
          warn("挂载失败：" + (e && e.message ? e.message : e));
        }
      };
      return module.exports;
    },
  });
})();