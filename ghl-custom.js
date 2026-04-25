<!-- =====================================================================
     GoHighLevel — Custom JS Starter
     ---------------------------------------------------------------------
     How to install:
       1. Log in to your GHL Agency account.
       2. Settings  →  Company  →  "Custom JS / Tracking Code"  (agency-
          wide), or Sub-Account → Settings → "Custom JS" for one client.
       3. Paste the ENTIRE contents of this file (including the
          <script> tags below) into the Custom JS field.
       4. Save and hard-refresh (Ctrl/Cmd + Shift + R).

     IMPORTANT: GHL's Custom JS field is actually a tracking-code field,
     so it expects an HTML snippet. JavaScript MUST be wrapped in
     <script>...</script> tags or the browser will render it as plain
     text at the bottom of the page.

     What this file does:
       - Waits for GHL's React UI to mount before touching the DOM.
       - Uses a MutationObserver so customizations re-apply when GHL
         re-renders pages (single-page-app navigation).
       - Provides labelled blocks for the most common tweaks. Comment a
         block out (or delete it) to disable that tweak.

     Safety:
       - Wrapped in an IIFE so we don't pollute window globals.
       - Every selector lookup is null-checked to avoid breaking the UI
         if GHL renames a class in a future release.
     ===================================================================== -->

<script>
(function () {
  'use strict';

  /* -----------------------------------------------------------------
     Config — edit these and the rules below pick them up
     ----------------------------------------------------------------- */
  const CONFIG = {
    // Sidebar items to hide entirely. Match against the link text
    // (case-insensitive). Example: ['Reputation', 'Affiliate Manager']
    hideSidebarItems: [],

    // Sidebar items to rename. Key = original text, value = new text.
    renameSidebarItems: {
      // 'Conversations': 'Inbox',
      // 'Opportunities': 'Pipeline',
    },

    // Optional banner shown across the top of the dashboard.
    banner: {
      enabled: false,
      text: 'Welcome back! Book your monthly strategy call here.',
      href: 'https://example.com/book',
      bg: '#0b1a2e',
      color: '#e6f1ff',
    },

    // Login page customizations (logo + lightning effect).
    login: {
      logo: {
        enabled: true,
        url: 'https://assets.cdn.filesafe.space/aDyCJfFox0W1sWUghjwp/media/69ece954b0e5e2bb7fae724a.png',
        alt: 'Breakthrough AI',
        maxWidth: '340px',
      },
      lightning: {
        enabled: true,
        bolts: 4,         // number of decorative bolts scattered on the page
        flashOverlay: true, // briefly brightens the whole screen ("distant lightning")
      },
    },
  };


  /* -----------------------------------------------------------------
     Utility — run a function once the DOM is ready, then re-run it
     whenever GHL swaps the page (it's a SPA).
     ----------------------------------------------------------------- */
  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function onUiChange(fn) {
    let scheduled = false;
    const run = () => {
      scheduled = false;
      try { fn(); } catch (err) { console.warn('[ghl-custom]', err); }
    };
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(run);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    run();
  }


  /* -----------------------------------------------------------------
     1. Hide sidebar items by label
     ----------------------------------------------------------------- */
  function applyHideSidebar() {
    if (!CONFIG.hideSidebarItems.length) return;
    const labels = CONFIG.hideSidebarItems.map(s => s.trim().toLowerCase());
    document.querySelectorAll('#sidebar-v2 a, aside[class*="sidebar"] a').forEach(a => {
      const text = (a.textContent || '').trim().toLowerCase();
      if (text && labels.includes(text)) a.style.display = 'none';
    });
  }


  /* -----------------------------------------------------------------
     2. Rename sidebar items
     ----------------------------------------------------------------- */
  function applyRenameSidebar() {
    const map = CONFIG.renameSidebarItems;
    if (!map || !Object.keys(map).length) return;
    document.querySelectorAll('#sidebar-v2 a, aside[class*="sidebar"] a').forEach(a => {
      // GHL nests the label in a span; fall back to the link itself.
      const labelEl = a.querySelector('span') || a;
      const original = (labelEl.textContent || '').trim();
      if (map[original]) labelEl.textContent = map[original];
    });
  }


  /* -----------------------------------------------------------------
     3. Optional dashboard banner
     ----------------------------------------------------------------- */
  function applyBanner() {
    if (!CONFIG.banner.enabled) return;
    if (document.getElementById('ghl-custom-banner')) return; // already added

    const bar = document.createElement('a');
    bar.id = 'ghl-custom-banner';
    bar.href = CONFIG.banner.href;
    bar.target = '_blank';
    bar.rel = 'noopener';
    bar.textContent = CONFIG.banner.text;
    Object.assign(bar.style, {
      display: 'block',
      padding: '10px 24px',
      background: CONFIG.banner.bg,
      color: CONFIG.banner.color,
      fontWeight: '600',
      fontSize: '14px',
      textAlign: 'center',
      textDecoration: 'none',
      position: 'sticky',
      top: '0',
      zIndex: '999',
    });
    document.body.prepend(bar);
  }


  /* -----------------------------------------------------------------
     4. Login page: logo + lightning effect
     ----------------------------------------------------------------- */
  const LIGHTNING_SVG =
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M13 2 L4 14 h6 l-2 8 L20 10 h-7 l1-8z"/></svg>';

  function isLoginPage() {
    return /\/(login|auth|sign[-_]?in)/i.test(location.pathname) ||
           !!document.querySelector('.login-container, .auth-page, form[class*="login"]');
  }

  function applyLogin() {
    const onLogin = isLoginPage();
    document.body.classList.toggle('bt-on-login', onLogin);

    // Clean up if we navigated away from the login page.
    if (!onLogin) {
      document.querySelectorAll('#bt-login-logo, .bt-lightning, #bt-login-flash')
        .forEach(el => el.remove());
      return;
    }

    const host = document.querySelector('.login-container, .auth-page, .hl_login') || document.body;

    // Logo
    if (CONFIG.login.logo.enabled && !document.getElementById('bt-login-logo')) {
      const img = document.createElement('img');
      img.id = 'bt-login-logo';
      img.src = CONFIG.login.logo.url;
      img.alt = CONFIG.login.logo.alt;
      img.style.maxWidth = CONFIG.login.logo.maxWidth;
      const form = host.querySelector('form');
      if (form && form.parentNode) form.parentNode.insertBefore(img, form);
      else host.prepend(img);
    }

    // Lightning bolts — scattered, each on its own random cycle
    if (CONFIG.login.lightning.enabled &&
        !document.querySelector('.bt-lightning')) {
      const safeZones = [
        { top: '12%', left: '6%'  }, { top: '20%', right: '10%' },
        { top: '60%', left: '8%'  }, { top: '72%', right: '14%' },
        { top: '40%', left: '18%' }, { top: '85%', left: '45%'  },
      ];
      const count = Math.min(CONFIG.login.lightning.bolts, safeZones.length);
      for (let i = 0; i < count; i++) {
        const bolt = document.createElement('div');
        bolt.className = 'bt-lightning';
        Object.assign(bolt.style, safeZones[i]);
        bolt.style.animationDelay = `${(Math.random() * 8).toFixed(2)}s`;
        bolt.style.animationDuration = `${(6 + Math.random() * 4).toFixed(2)}s`;
        bolt.innerHTML = LIGHTNING_SVG;
        document.body.appendChild(bolt);
      }
    }

    // Distant-flash overlay
    if (CONFIG.login.lightning.flashOverlay &&
        !document.getElementById('bt-login-flash')) {
      const flash = document.createElement('div');
      flash.id = 'bt-login-flash';
      document.body.appendChild(flash);
    }
  }


  /* -----------------------------------------------------------------
     Boot
     ----------------------------------------------------------------- */
  onReady(() => {
    onUiChange(() => {
      applyHideSidebar();
      applyRenameSidebar();
      applyBanner();
      applyLogin();
    });
  });
})();
</script>
