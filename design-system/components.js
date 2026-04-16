/* ============================================================
   MISI ANDA — Shared SVG Icons + Components
   Import as <script src="../../design-system/components.js">
   ============================================================ */

// ─── Status Bar HTML ───────────────────────────────────────
window.MA = window.MA || {};

MA.transitionDuration = 190;

MA.statusBar = (time = '9:41', dark = false) => `
<div class="status-bar" style="color:${dark ? '#fff' : '#1c1c1e'}">
  <span>${time}</span>
  <div class="status-icons">
    ${MA.icons.signal(dark)}
    ${MA.icons.wifi(dark)}
    ${MA.icons.battery(dark)}
  </div>
</div>`;

// ─── Flow routes ────────────────────────────────────────────
MA.routes = {
  home: '../../flows/01/index.html',
  history: '../../flows/02/index.html',
  misi: '../../flows/03/index.html',
  upsell: '../../flows/04/index.html',
  profile: '#',
};

// ─── Bottom Nav HTML ────────────────────────────────────────
MA.bottomNav = (active = 'home') => `
<nav class="bottom-nav">
  ${[
    { id: 'home',    label: 'Beranda', icon: MA.icons.home    },
    { id: 'history', label: 'Laporan', icon: MA.icons.clock   },
    { id: 'misi',    label: 'Misi',    icon: MA.icons.target  },
    { id: 'profile', label: 'Profil',  icon: MA.icons.profile },
  ].map(({ id, label, icon }) => `
    <div class="bn-item ${active === id ? 'active' : ''}" data-nav="${id}">
      ${icon(active === id)}
      <span>${label}</span>
      ${active === id ? '<div class="bn-dot"></div>' : ''}
    </div>`).join('')}
</nav>`;

MA.mountBottomNav = (root, active = 'home') => {
  const el = typeof root === 'string' ? document.getElementById(root) : root;
  if (!el) return;
  el.innerHTML = MA.bottomNav(active);
};

// ─── Toast helper ───────────────────────────────────────────
MA.toast = (toastId = 'toast', messageId = 'toastMsg') => `
<div id="${toastId}" class="toast">
  <span aria-hidden="true" style="color:#4ade80;font-size:15px;line-height:1">&#10003;</span>
  <span id="${messageId}"></span>
</div>`;

MA.showToast = (message, opts = {}) => {
  const {
    toastId = 'toast',
    messageId = 'toastMsg',
    duration = 3000,
  } = opts;

  const toast = document.getElementById(toastId);
  const text = document.getElementById(messageId);
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toast._hideTimer);
  toast._hideTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, duration);
};

// ─── Icons ─────────────────────────────────────────────────
MA.icons = {
  signal: (dark) => `
    <svg width="14" height="11" viewBox="0 0 16 12" fill="${dark ? '#fff' : '#1c1c1e'}">
      <rect x="0"    y="8"   width="3"   height="4"  rx="0.6"/>
      <rect x="4.5"  y="5"   width="3"   height="7"  rx="0.6"/>
      <rect x="9"    y="2"   width="3"   height="10" rx="0.6"/>
      <rect x="13.5" y="0"   width="2.5" height="12" rx="0.6" opacity="0.22"/>
    </svg>`,

  wifi: (dark) => `
    <svg width="14" height="11" viewBox="0 0 24 18" fill="none" stroke="${dark ? '#fff' : '#1c1c1e'}" stroke-width="2.5" stroke-linecap="round">
      <path d="M1.5 6C6 1.8 18 1.8 22.5 6"/>
      <path d="M4.5 10C7.5 7.3 16.5 7.3 19.5 10"/>
      <path d="M8 14C9.8 12.3 14.2 12.3 16 14"/>
      <circle cx="12" cy="17" r="1.5" fill="${dark ? '#fff' : '#1c1c1e'}" stroke="none"/>
    </svg>`,

  battery: (dark) => `
    <svg width="22" height="11" viewBox="0 0 26 12" fill="none">
      <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="${dark ? '#fff' : '#1c1c1e'}" stroke-opacity="0.3"/>
      <rect x="23" y="3.5" width="2.5" height="5" rx="1" fill="${dark ? '#fff' : '#1c1c1e'}" fill-opacity="0.35"/>
      <rect x="2" y="2" width="17" height="8" rx="1.5" fill="${dark ? '#fff' : '#1c1c1e'}"/>
    </svg>`,

  home: (active) => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="${active ? 'var(--brand-600)' : 'var(--t-muted)'}"
      stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>`,

  clock: (active) => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="${active ? 'var(--brand-600)' : 'var(--t-muted)'}"
      stroke-width="2.2" stroke-linecap="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>`,

  wallet: (active) => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="${active ? 'var(--brand-600)' : 'var(--t-muted)'}"
      stroke-width="2.2" stroke-linecap="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
      <circle cx="17" cy="15" r="1.5" fill="${active ? 'var(--brand-600)' : 'var(--t-muted)'}" stroke="none"/>
    </svg>`,

  profile: (active) => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="${active ? 'var(--brand-600)' : 'var(--t-muted)'}"
      stroke-width="2.2" stroke-linecap="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,

  back: () => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="var(--t-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>`,

  bell: () => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="var(--t-primary)" stroke-width="2.2" stroke-linecap="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 01-3.46 0"/>
    </svg>`,

  filter: () => `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="var(--t-primary)" stroke-width="2.2" stroke-linecap="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>`,

  chevronRight: () => `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="var(--t-muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>`,

  coin: () => `
    <svg width="10" height="10" viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="5" fill="var(--amber-500)"/>
      <path d="M5 2.5v5M3.5 3.8h2.3a1.2 1.2 0 010 2.4H3.5"
        stroke="white" stroke-width="1" stroke-linecap="round" fill="none"/>
    </svg>`,

  target: () => `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="var(--brand-600)" stroke-width="2.5" stroke-linecap="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2" fill="var(--brand-600)" stroke="none"/>
    </svg>`,

  wifi_signal: () => `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--brand-600)" stroke-width="2" stroke-linecap="round">
      <path d="M5 12.55a11 11 0 0114.08 0"/>
      <path d="M1.42 9a16 16 0 0121.16 0"/>
      <path d="M8.53 16.11a6 6 0 016.95 0"/>
      <circle cx="12" cy="20" r="1.5" fill="var(--brand-600)" stroke="none"/>
    </svg>`,

  topup: () => `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--orange-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"/>
      <path d="M9 9h6M9 13h4"/>
    </svg>`,

  refresh: () => `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--emerald-600)" stroke-width="2" stroke-linecap="round">
      <path d="M23 4v6h-6M1 20v-6h6"/>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
    </svg>`,

  users: () => `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--amber-600)" stroke-width="2" stroke-linecap="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>`,

  zap: (color = 'var(--brand-600)') => `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="${color}" stroke="none">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/>
    </svg>`,

  trophy: () => `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--amber-500)" stroke-width="2" stroke-linecap="round">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M18 2H6v7a6 6 0 0012 0V2z"/>
      <path d="M8 21h8M12 15v6M9 21h6"/>
    </svg>`,
};

// ─── Nav routing (links screens together) ──────────────────
MA.navigate = (href) => {
  if (!href || href === '#' || href === window.location.href) return;

  const body = document.body;
  const go = () => { window.location.href = href; };
  if (!body || !body.classList.contains('presentation-mode')) {
    go();
    return;
  }

  if (body.dataset.isNavigating === 'true') return;
  body.dataset.isNavigating = 'true';
  body.classList.add('is-transitioning', 'is-leaving');
  window.setTimeout(go, MA.transitionDuration);
};

MA.initNav = () => {
  document.querySelectorAll('[data-nav]').forEach(el => {
    if (el.dataset.maNavBound === 'true') return;
    el.dataset.maNavBound = 'true';
    el.addEventListener('click', () => {
      const target = el.dataset.nav;
      const href = MA.routes[target];
      if (href && href !== '#') {
        MA.navigate(href);
      }
    });
  });

  document.querySelectorAll('[data-link]').forEach(el => {
    if (el.dataset.maLinkBound === 'true') return;
    el.dataset.maLinkBound = 'true';
    el.addEventListener('click', () => {
      const href = el.dataset.link;
      if (href) MA.navigate(href);
    });
  });
};

MA.initScreenTransition = () => {
  const body = document.body;
  if (!body || !body.classList.contains('presentation-mode')) return;

  body.classList.add('is-entering');
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      body.classList.add('is-ready');
      body.classList.remove('is-entering', 'is-leaving', 'is-transitioning');
      delete body.dataset.isNavigating;
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  MA.initNav();
  MA.initScreenTransition();
});

// ─── Presentation mode: scale phone frame to fit viewport ──
MA.initPresentationMode = () => {
  const frame = document.querySelector('.phone-frame');
  if (!frame || window.innerWidth <= 480) return;

  // These match the fixed dimensions in phone-frame.css
  const FRAME_W = 418; // 390px screen + 14px padding × 2
  const FRAME_H = 872; // 844px screen + 14px padding × 2

  function fit() {
    if (window.innerWidth <= 480) {
      frame.style.transform = '';
      return;
    }
    const availW = window.innerWidth  - 32;
    const availH = window.innerHeight - 32;
    const s = Math.min(1, availW / FRAME_W, availH / FRAME_H);
    frame.style.transformOrigin = 'center center';
    frame.style.transform = `scale(${s.toFixed(4)})`;
  }

  fit();
  window.addEventListener('resize', fit);
};
