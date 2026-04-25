/* =====================================================================
   GoHighLevel — Custom JS Starter
   ---------------------------------------------------------------------
   How to install:
     1. Log in to your GHL Agency account.
     2. Settings  →  Company  →  "Custom JS / Tracking Code"  (agency-
        wide), or Sub-Account → Settings → "Custom JS" for one client.
     3. Paste the contents of this file into the Custom JS field.
     4. Save and hard-refresh (Ctrl/Cmd + Shift + R).

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
   ===================================================================== */

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
     Boot
     ----------------------------------------------------------------- */
  onReady(() => {
    onUiChange(() => {
      applyHideSidebar();
      applyRenameSidebar();
      applyBanner();
    });
  });
})();
