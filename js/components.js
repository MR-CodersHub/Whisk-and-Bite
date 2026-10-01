/* ============================================================
   WHISK & BITE — Shared Components (Navbar + Footer)
   ============================================================ */

/* Which document are we rendering into? index.html sits at the site root,
   everything else lives in /pages/. Shared links must resolve from both. */
const IN_PAGES = /(?:^|\/)pages\/[^/]*$/.test(window.location.pathname);

/* Prefix for links into /pages/ — bare filename from a sibling page,
   "pages/" from the root document. */
const PAGE = IN_PAGES ? '' : 'pages/';

/* Prefix for links back to the root document. */
const PAGE_ROOT = IN_PAGES ? '../' : '';

/* ============================================================
   SITE — single source of truth for contact + social details.

   Every social icon and contact detail on every page is generated
   from this object, so a value only ever has to change in one place
   and no page can drift out of sync with another.

   NOTE: the phone number is in the 555-01xx range (reserved for
   fiction) and the social handles follow the brand name. Replace
   both with the real accounts before going live.
   ============================================================ */
const SITE = {
  email: 'hello@whiskandbite.com',
  rushEmail: 'rush@whiskandbite.com',
  phone: '+1 (555) 123-4567',
  phoneHref: 'tel:+15551234567',
  address: '14 Confection Lane, Pastry District',
  hours: 'Mon–Fri 9am–6pm · Sat 10am–4pm · Sun closed',
  social: [
    { icon: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/whiskandbite' },
    { icon: 'facebook',  label: 'Facebook',  url: 'https://www.facebook.com/whiskandbite' },
    { icon: 'x',        label: 'X',         url: 'https://x.com/whiskandbite' },
    { icon: 'pushpin',   label: 'Pinterest', url: 'https://www.pinterest.com/whiskandbite' }
  ]
};

/* External links open in a new tab without handing the opener over. */
const EXT = 'target="_blank" rel="noopener noreferrer"';

/* ─── Social + contact markup, generated from SITE ────────────
   Used by the footer, the mobile drawer and the standalone pages so
   no surface can end up with a dead href="#" or a stale detail.

   These are plain functions, not Components methods: the templates
   below interpolate them, and `this` inside an object-literal
   template literal is the enclosing scope (window), not the object. */
function socialHTML({ cls = 'social-btn', style = '', withNames = false } = {}) {
  const st = style ? ` style="${style}"` : '';
  return SITE.social.map((s) =>
    `<a href="${s.url}" class="${cls}" aria-label="${s.label}" title="${s.label}"${st} ${EXT}>` +
    `<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-${s.icon}"></use></svg>` +
    (withNames ? `<span>${s.label}</span>` : '') +
    `</a>`
  ).join('\n            ');
}

function contactHTML({ cls = 'footer-link', listCls = 'footer-links', style = '' } = {}) {
  const cur = style ? `${style};cursor:default;` : 'cursor:default;';
  const icon = (i) => `<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-${i}"></use></svg>`;
  const rows = [
    `<li><a href="mailto:${SITE.email}" class="${cls}">${icon('mail')} ${SITE.email}</a></li>`,
    `<li><a href="${SITE.phoneHref}" class="${cls}">${icon('phone')} ${SITE.phone}</a></li>`,
    `<li class="${cls}" style="${cur}">${icon('map-pin')} ${SITE.address}</li>`,
    `<li class="${cls}" style="${cur}">${icon('clock')} ${SITE.hours}</li>`
  ];
  return `<ul class="${listCls}">\n              ${rows.join('\n              ')}\n            </ul>`;
}

/* ─── Brand logo, identical everywhere ────────────────────
   Navbar, mobile drawer, footer and brand bar all render this one
   block, so the logo can never drift between pages or surfaces. */
function logoHTML(homeHref) {
  return `<a href="${homeHref}" class="logo" aria-label="Whisk &amp; Bite home. Tiny Treats, Big Moments">` +
    `<div class="logo-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-lollipop"></use></svg></div>` +
    `<span class="logo-text">` +
    `<span class="logo-wordmark">Whisk <em style="font-style:italic;color:var(--champagne);">&</em> Bite</span>` +
    `<span class="logo-tagline">Tiny Treats, Big Moments</span>` +
    `</span></a>`;
}

const Components = {
  /* ─── Navbar HTML ───────────────────────────────────────── */
  navbarHTML: `
  <nav class="navbar" id="navbar" aria-label="Main Navigation">
    <div class="nav-inner">
      <!-- Logo -->
      ${logoHTML(`${PAGE_ROOT}index.html`)}

      <!-- Desktop Nav -->
      <ul class="nav-links" role="list">
        <li class="nav-item">
          <a href="${PAGE_ROOT}index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="${PAGE}home2.html" class="nav-link">Home 2</a>
        </li>
        <li class="nav-item">
          <a href="${PAGE}about.html" class="nav-link">About</a>
        </li>
        <li class="nav-item" style="position:relative;">
          <a href="${PAGE}services.html" class="nav-link">Services ▾</a>
          <div class="dropdown-menu">
            <a href="${PAGE}services.html" class="dropdown-link">All Services</a>
            <a href="${PAGE}service-details.html" class="dropdown-link">Cake Pops Studio</a>
            <a href="${PAGE}services.html#custom-details" class="dropdown-link">Custom Orders</a>
            <a href="${PAGE}services.html#bulk-details" class="dropdown-link">Bulk & Party</a>

          </div>
        </li>
        <li class="nav-item">
          <a href="${PAGE}pricing.html" class="nav-link">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="${PAGE}blog.html" class="nav-link">Blog</a>
        </li>
        <li class="nav-item">
          <a href="${PAGE}contact.html" class="nav-link">Contact</a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="nav-actions">
        <div class="ctrl-bar">
          <button class="ctrl-btn" data-action="toggle-theme" data-theme-icon aria-label="Toggle dark mode"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-moon"></use></svg></button>
          <button class="ctrl-btn ctrl-btn-text" data-action="toggle-rtl" data-rtl-label aria-label="Switch to right-to-left" title="Switch to right-to-left">RTL</button>
        </div>
        <a href="${PAGE}login.html" class="btn btn-sm btn-secondary" id="nav-login-btn">Login</a>
        <a href="${PAGE}contact.html" class="btn btn-sm btn-primary">Order Now</a>
      </div>

      <!-- Hamburger -->
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-overlay" id="mobile-overlay" aria-hidden="true"></div>
  <div class="mobile-menu" id="mobile-menu" aria-label="Mobile Navigation">
    <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close menu">✕</button>
<div style="margin-bottom:2rem;">
      ${logoHTML(`${PAGE_ROOT}index.html`)}
    </div>
    <a href="${PAGE_ROOT}index.html" class="mobile-nav-link">Home</a>
    <a href="${PAGE}home2.html" class="mobile-nav-link">Home 2</a>
    <a href="${PAGE}about.html" class="mobile-nav-link">About Us</a>
    <a href="${PAGE}services.html" class="mobile-nav-link">Services</a>
    <a href="${PAGE}services.html#custom-details" class="mobile-nav-link" style="padding-left:1.25rem;font-size:1rem;font-weight:500;">↳ Custom Orders</a>
    <a href="${PAGE}services.html#bulk-details" class="mobile-nav-link" style="padding-left:1.25rem;font-size:1rem;font-weight:500;">↳ Bulk & Party</a>
    <a href="${PAGE}service-details.html" class="mobile-nav-link">Service Details</a>
    <a href="${PAGE}pricing.html" class="mobile-nav-link">Pricing</a>
    <a href="${PAGE}blog.html" class="mobile-nav-link">Blog</a>
    <a href="${PAGE}blog-details.html" class="mobile-nav-link">Blog Details</a>
    <a href="${PAGE}contact.html" class="mobile-nav-link">Contact Us</a>
    <a href="${PAGE}login.html" class="mobile-nav-link">Login / Register</a>
    <div style="margin-top:2rem;display:flex;gap:1rem;">
      <a href="${PAGE}contact.html" class="btn btn-primary w-full" style="justify-content:center;">Order Now <svg class="icon" aria-hidden="true" focusable="false"><use href="#i-cake-slice"></use></svg></a>
    </div>
    <!-- Appearance toggles for mobile (navbar controls hide on small screens) -->
    <div style="margin-top:1.25rem;display:flex;align-items:center;gap:0.75rem;">
      <span style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);">Display</span>
      <button class="ctrl-btn" data-action="toggle-theme" data-theme-icon aria-label="Toggle dark mode"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-moon"></use></svg></button>
      <button class="ctrl-btn ctrl-btn-text" data-action="toggle-rtl" data-rtl-label aria-label="Switch to right-to-left" title="Switch to right-to-left">RTL</button>
    </div>
    <!-- Contact details live here too, so every page exposes them on mobile. -->
    <div class="mobile-contact">
      <p class="mobile-contact-heading">Get in Touch</p>
      ${contactHTML({ cls: 'mobile-contact-link', listCls: 'mobile-contact-list' })}
      <div class="footer-socials" aria-label="Social media links" style="margin-top:1.25rem;">
        ${socialHTML()}
      </div>
    </div>
  </div>`,

  /* ─── Footer HTML ───────────────────────────────────────── */
  footerHTML: `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="grid-4" style="gap:3rem;align-items:start;">
        <!-- Brand -->
        <div style="grid-column:span 1;">
          <div style="margin-bottom:1rem;">${logoHTML(`${PAGE_ROOT}index.html`)}</div>
          <p class="footer-tagline"><em class="footer-tagline-brand">Tiny Treats, Big Moments</em> — handcrafted dessert bites made with love, premium ingredients &amp; a sprinkle of artisan magic.</p>
          <div class="footer-socials" aria-label="Social media links">
            ${socialHTML()}
          </div>
        </div>

        <!-- Pages -->
        <div>
          <p class="footer-heading">Explore</p>
          <ul class="footer-links">
            <li><a href="${PAGE_ROOT}index.html" class="footer-link">Home</a></li>
            <li><a href="${PAGE}about.html" class="footer-link">About Us</a></li>
            <li><a href="${PAGE}services.html" class="footer-link">Services</a></li>
            <li><a href="${PAGE}pricing.html" class="footer-link">Pricing</a></li>
            <li><a href="${PAGE}blog.html" class="footer-link">Blog & Recipes</a></li>
            <li><a href="${PAGE}contact.html" class="footer-link">Contact Us</a></li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <p class="footer-heading">Our Bites</p>
          <ul class="footer-links">
            <li><a href="${PAGE}services.html" class="footer-link">Cake Pops</a></li>
            <li><a href="${PAGE}services.html" class="footer-link">Brownie Bites</a></li>
            <li><a href="${PAGE}services.html" class="footer-link">Mini Cheesecakes</a></li>
            <li><a href="${PAGE}services.html" class="footer-link">Chocolate Truffles</a></li>
            <li><a href="${PAGE}services.html#custom-details" class="footer-link">Custom Orders</a></li>
            <li><a href="${PAGE}services.html#bulk-details" class="footer-link">Party Boxes</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="footer-heading">Get in Touch</p>
          ${contactHTML()}
          <form style="margin-top:1.5rem;" id="newsletter-form" novalidate>
            <label for="newsletter-email" style="display:block;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--champagne);margin-bottom:0.5rem;">Newsletter</label>
            <div style="display:flex;gap:0.5rem;">
              <input type="email" id="newsletter-email" name="email" placeholder="Your email" style="flex:1;padding:0.75rem 1rem;border-radius:9999px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:white;font-family:var(--font-body);font-size:0.875rem;outline:none;" required />
              <button type="submit" class="btn btn-champagne btn-sm" style="white-space:nowrap;" aria-label="Subscribe">✓</button>
            </div>
          </form>
        </div>
      </div>

      <hr class="footer-divider" />

      <div class="footer-bottom">
        <p>© 2026 Whisk & Bite. All rights reserved. Crafted with <svg class="icon" aria-hidden="true" focusable="false"><use href="#i-strawberry"></use></svg> & passion.</p>
        <div style="display:flex;gap:1.5rem;">
          <a href="${PAGE}privacy.html" class="footer-link">Privacy Policy</a>
          <a href="${PAGE}terms.html" class="footer-link">Terms of Service</a>
          <a href="${PAGE}cookies.html" class="footer-link">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>`,

  /* ─── Minimal brand bar ──────────────────────────────────── */
  /* For standalone pages (404, coming soon) that deliberately have no navbar
     and no footer — brand lockup plus theme/RTL toggles only. */
  brandbarHTML: `
  <header class="brandbar" aria-label="Whisk &amp; Bite">
    ${logoHTML(`${PAGE_ROOT}index.html`)}
    <div class="brandbar-actions">
      <button class="ctrl-btn" data-action="toggle-theme" data-theme-icon aria-label="Toggle dark mode"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-moon"></use></svg></button>
      <button class="ctrl-btn ctrl-btn-text" data-action="toggle-rtl" data-rtl-label aria-label="Switch to right-to-left" title="Switch to right-to-left">RTL</button>
    </div>
  </header>`,

  /* ─── Lightbox HTML ─────────────────────────────────────── */
  lightboxHTML: `
  <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
    <img src="" alt="Gallery image" />
    <button class="lightbox-close" aria-label="Close lightbox">✕</button>
  </div>`,

  /* ─── Back to Top ───────────────────────────────────────── */
  backToTopHTML: `<button id="back-to-top" aria-label="Back to top">↑</button>`,

  /* ─── Inject all shared components ──────────────────────── */
  inject() {
    // Navbar
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = this.navbarHTML;

    // Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = this.footerHTML;

    // Minimal brand bar (pages with no navbar/footer)
    const brandbarPlaceholder = document.getElementById('brandbar-placeholder');
    if (brandbarPlaceholder) {
      const onDark = brandbarPlaceholder.dataset.onDark === 'true';
      brandbarPlaceholder.outerHTML = onDark
        ? this.brandbarHTML.replace('class="brandbar"', 'class="brandbar on-dark"')
        : this.brandbarHTML;
    }

    // Lightbox
    document.body.insertAdjacentHTML('beforeend', this.lightboxHTML);

    // Social / contact slots for pages with no footer (404, coming soon).
    // The classes come from data attributes so each page keeps its own look.
    const socialsSlot = document.querySelectorAll('#socials-placeholder, [data-social-placeholder]');
    socialsSlot.forEach((socialsSlot) => {
      const cls = socialsSlot.dataset.socialClass || 'social-btn';
      // keep any inline spacing the placeholder carried
      const st = socialsSlot.getAttribute('style');
      const wrapSt = st ? ` style="${st}"` : '';
      socialsSlot.outerHTML =
        `<div class="${socialsSlot.dataset.socialWrap || 'footer-socials'}"${wrapSt} aria-label="Social media links">` +
        socialHTML({
          cls,
          style: socialsSlot.dataset.socialStyle || '',
          withNames: socialsSlot.dataset.socialNames === 'true'
        }) + `</div>`;
    });

    // Bespoke social markup (cards, labelled buttons) keeps its own classes
    // and just declares which network it points at, so the URL still comes
    // from SITE rather than being hardcoded per page.
    document.querySelectorAll('a[data-social]').forEach((a) => {
      const s = SITE.social.find((x) => x.icon === a.dataset.social);
      if (s) { a.href = s.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    });
    const contactSlot = document.querySelector('#contact-placeholder, [data-contact-placeholder]');
    if (contactSlot) {
      contactSlot.outerHTML = contactHTML({
        cls: contactSlot.dataset.linkClass || 'footer-link',
        listCls: contactSlot.dataset.listClass || 'footer-links',
        style: contactSlot.dataset.linkStyle || ''
      });
    }

    // Back to top
    document.body.insertAdjacentHTML('beforeend', this.backToTopHTML);
  }
};

// Auto-inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Components.inject();
});
