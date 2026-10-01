/* ============================================================
   WHISK & BITE — Core JavaScript
   Shared utilities, components and interactions
   ============================================================ */

'use strict';

/* ─── Theme & RTL Persistence ───────────────────────────── */
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('wb-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateIcons();
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('wb-theme', next);
    this.updateIcons();
  },

  updateIcons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('[data-theme-icon]').forEach(el => {
      Icons.set(el, isDark ? 'sun' : 'moon');
    });
  }
};

const RTLManager = {
  init() {
    const saved = localStorage.getItem('wb-dir') || 'ltr';
    document.documentElement.setAttribute('dir', saved);
    this.updateLabel();
  },

  toggle() {
    const current = document.documentElement.getAttribute('dir');
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', next);
    localStorage.setItem('wb-dir', next);
    this.updateLabel();
  },

  updateLabel() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('[data-rtl-label]').forEach(el => {
      el.textContent = isRTL ? 'LTR' : 'RTL';
      el.setAttribute('aria-label', isRTL ? 'Switch to left-to-right' : 'Switch to right-to-left');
      el.setAttribute('title', isRTL ? 'Switch to left-to-right' : 'Switch to right-to-left');
    });
  }
};

/* ─── Navbar ─────────────────────────────────────────────── */
const Navbar = {
  el: null,
  hamburger: null,
  mobileMenu: null,
  overlay: null,
  scrollThreshold: 60,

  init() {
    this.el = document.querySelector('.navbar');
    this.hamburger = document.querySelector('.hamburger');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.overlay = document.querySelector('.mobile-overlay');

    if (!this.el) return;

    // Contrast over the top of the page comes from <html data-nav>,
    // set per page: "dark" for a dark hero, "solid" for split layouts,
    // absent/other for a light background. .scrolled overrides it.

    this.onScroll();
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });

    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.openMobile());
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.closeMobile());
    }
    const closeBtn = document.querySelector('.mobile-menu-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeMobile());

    // Mark active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  onScroll() {
    const scrolled = window.scrollY > this.scrollThreshold;
    // .scrolled is the only scroll-driven state; CSS overrides the
    // [data-nav] contrast rules from there.
    this.el.classList.toggle('scrolled', scrolled);
  },

  openMobile() {
    this.hamburger?.classList.add('open');
    this.mobileMenu?.classList.add('open');
    this.overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeMobile() {
    this.hamburger?.classList.remove('open');
    this.mobileMenu?.classList.remove('open');
    this.overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ─── Hero Slider ────────────────────────────────────────── */
const HeroSlider = {
  slides: [],
  dots: [],
  current: 0,
  total: 0,
  timer: null,
  interval: 5500,

  init() {
    this.slides = Array.from(document.querySelectorAll('.hero-slide'));
    this.dots   = Array.from(document.querySelectorAll('.slider-dot'));
    this.total  = this.slides.length;
    if (!this.total) return;

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    document.querySelector('.slider-prev')?.addEventListener('click', () => this.prev());
    document.querySelector('.slider-next')?.addEventListener('click', () => this.next());

    // Touch swipe
    let startX = 0;
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
      heroEl.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      heroEl.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
      });
    }

    this.goTo(0);
    this.startAuto();
  },

  goTo(index) {
    this.slides[this.current]?.classList.remove('active');
    this.dots[this.current]?.classList.remove('active');
    this.current = (index + this.total) % this.total;
    this.slides[this.current]?.classList.add('active');
    this.dots[this.current]?.classList.add('active');
  },

  next() { this.goTo(this.current + 1); this.resetAuto(); },
  prev() { this.goTo(this.current - 1); this.resetAuto(); },

  startAuto() { this.timer = setInterval(() => this.next(), this.interval); },
  resetAuto() { clearInterval(this.timer); this.startAuto(); }
};

/* ─── Scroll Reveal ──────────────────────────────────────── */
const ScrollReveal = {
  observer: null,

  init() {
    const options = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      this.observer.observe(el);
    });
  }
};

/* ─── FAQ Accordion ──────────────────────────────────────── */
const FAQ = {
  init() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }
};

/* ─── Flavor Selector ────────────────────────────────────── */
const FlavorSelector = {
  init() {
    document.querySelectorAll('.flavor-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const group = this.closest('.flavor-group');
        if (group?.dataset.multi !== 'true') {
          group?.querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
        }
        this.classList.toggle('active');
      });
    });
  }
};

/* ─── Product Filter ───────────────────────────────────────
   Each tab group controls only the cards in its own target section.
   Buttons never submit or navigate, so filtering cannot reload the page. */
const ProductFilter = {
  init() {
    document.querySelectorAll('.filter-tabs').forEach(group => {
      // The blog grid is owned by BlogFilter (tabs + search combined).
      if (group.dataset.filterTarget === '#blog-grid') return;
      const tabs = Array.from(group.querySelectorAll('.filter-tab[data-filter]'));
      const target = group.dataset.filterTarget
        ? document.querySelector(group.dataset.filterTarget)
        : group.closest('section');
      const items = Array.from((target || document).querySelectorAll('[data-category]'));
      if (!tabs.length || !items.length) return;

      tabs.forEach(tab => {
        tab.type = 'button';
        tab.addEventListener('click', (event) => {
          event.preventDefault();
          tabs.forEach(other => {
            const selected = other === tab;
            other.classList.toggle('active', selected);
            other.setAttribute('aria-selected', String(selected));
          });

          const filter = tab.dataset.filter || 'all';
          items.forEach(item => {
            const show = filter === 'all' || item.dataset.category === filter;
            item.classList.remove('revealed');
            item.style.display = show ? '' : 'none';
            if (show) {
              void item.offsetWidth;
              requestAnimationFrame(() => item.classList.add('revealed'));
            }
          });
        });
      });
    });
  }
};

/* ─── Back to Top ────────────────────────────────────────── */
const BackToTop = {
  btn: null,

  init() {
    this.btn = document.getElementById('back-to-top');
    if (!this.btn) return;

    window.addEventListener('scroll', () => {
      this.btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* ─── Toast Notification ─────────────────────────────────── */
const Toast = {
  show(message, type = 'default', duration = 3000) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = `toast ${type}`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }
};

/* ─── Forms ───────────────────────────────────────────────────
   One delegated handler for every form on the site, including the
   newsletter that arrives with the injected footer. Submitting never
   navigates: the page stays put and only the fields are cleared. */
const Forms = {
  /* Copy per form, so signing in never gets told "message sent". */
  messages: {
    'main-contact-form': 'Thanks! Your enquiry is in and we\'ll reply within one business day.',
    'comment-form': 'Comment posted. Thanks for the flavour talk!',
    'login-form': 'You\'re signed in. Welcome back!',
    'register-form': 'Account created. Welcome to Whisk & Bite!',
    'newsletter-form': 'You\'re subscribed! Sweet updates coming your way.',
    'sidebar-newsletter': 'You\'re subscribed! Sweet updates coming your way.',
    'h2-newsletter': 'You\'re subscribed! Sweet updates coming your way.',
    'notify-form': 'You\'re on the list. We\'ll let you know first.'
  },

  fallback: 'Thanks! Your submission went through.',

  init() {
    /* Delegated: the shared footer form does not exist yet at init,
       so binding per-element would miss it. */
    document.addEventListener('submit', (e) => this.onSubmit(e));
    document.addEventListener('input', (e) => {
      if (e.target.classList && e.target.classList.contains('error')) {
        e.target.classList.remove('error');
        e.target.removeAttribute('aria-invalid');
      }
    });
    document.addEventListener('blur', (e) => {
      const el = e.target;
      if (!el.classList || !el.classList.contains('form-control')) return;
      /* Optional fields are valid when empty, so only judge them once
         the visitor has actually typed something. */
      if (!el.required && !String(el.value).trim()) return;
      this.validateField(el);
    }, true);
  },

  /* The plain newsletter fields ship without the .form-error-msg span the
     styled ones have, so a bad address would fail silently. Give every
     validated control a message to show. */
  ensureMessage(el) {
    if (el.nextElementSibling && el.nextElementSibling.classList.contains('form-error-msg')) return;
    /* The newsletter fields sit in a flex row; let the message drop onto
       its own line rather than squeezing the input. */
    const row = el.parentElement;
    if (row && getComputedStyle(row).display.includes('flex')) row.style.flexWrap = 'wrap';
    const msg = document.createElement('span');
    msg.className = 'form-error-msg';
    el.insertAdjacentElement('afterend', msg);
  },

  messageFor(el) {
    const label = el.labels && el.labels[0];
    const name = (label ? label.textContent : el.name || 'This field').replace(/\s*\*\s*$/, '').trim();
    if (el.validity && el.validity.typeMismatch) return `Enter a valid email address`;
    if (el.validity && el.validity.valueMissing) return `${name} is required`;
    return `Check ${name.toLowerCase()}`;
  },
  onSubmit(e) {
    const form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    e.preventDefault();

    if (!this.validate(form)) {
      this.hideStatus(form);
      const firstBad = form.querySelector('.error, [aria-invalid="true"]');
      if (firstBad) firstBad.focus();
      return;
    }

    this.clearFields(form);
    this.resetChoices(form);
    this.succeed(form);
  },

  validate(form) {
    let ok = true;

    /* Styled fields use the site's own email/tel rules, which also drive
       the inline .form-error-msg spans that sit next to them. */
    form.querySelectorAll('.form-control[required]').forEach((input) => {
      if (!this.validateField(input)) ok = false;
    });

    /* Everything else (newsletter inputs, selects) leans on the browser. */
    form.querySelectorAll('input[required], textarea[required], select[required]').forEach((el) => {
      if (el.type === 'hidden' || el.type === 'submit') return;
      const good = el.checkValidity();
      el.setAttribute('aria-invalid', good ? 'false' : 'true');
      if (!good) {
        this.ensureMessage(el);
        const span = el.nextElementSibling;
        if (span && span.classList.contains('form-error-msg')) span.textContent = this.messageFor(el);
        ok = false;
      }
    });

    return ok;
  },

  validateField(input) {
    const value = input.value.trim();
    let isValid = input.checkValidity() && value !== '';

    if (value && input.type === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (value && input.type === 'tel') {
      isValid = /^[\d\s+\-()]{7,}$/.test(value);
    }

    input.classList.toggle('error', !isValid);
    return isValid;
  },

  /* Only the fields are cleared - layout, buttons and the rest of the
     page are left exactly as they were. */
  clearFields(form) {
    form.querySelectorAll('input, textarea, select').forEach((el) => {
      if (el.type === 'hidden' || el.type === 'submit' || el.type === 'button') return;

      el.classList.remove('error');
      el.removeAttribute('aria-invalid');

      if (el.type === 'checkbox' || el.type === 'radio') {
        el.checked = el.hasAttribute('checked');
      } else if (el.tagName === 'SELECT') {
        const def = [...el.options].find((o) => o.hasAttribute('selected')) || el.options[0];
        if (def) el.selectedIndex = def.index;
      } else {
        el.value = '';
      }
    });
  },

  /* Flavor chips are buttons rather than inputs, so they survive a
     reset() - clear them by hand or the next enquiry inherits them. */
  resetChoices(form) {
    form.querySelectorAll('.flavor-btn.active').forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
  },

  succeed(form) {
    const msg = this.messages[form.id] || this.fallback;
    this.showStatus(form, msg);
    Toast.show('✓ ' + msg, 'success');
    // After sign in / registration, take the visitor home.
    if (form.id === 'login-form' || form.id === 'register-form') {
      const home = /(?:^|\/)pages\/[^/]*$/.test(window.location.pathname) ? '../index.html' : 'index.html';
      setTimeout(() => { window.location.href = home; }, 1200);
    }
  },

  showStatus(form, msg) {
    let box = form.querySelector('.form-status');
    if (!box) {
      box = document.createElement('p');
      box.className = 'form-status';
      box.setAttribute('role', 'status');
      box.setAttribute('aria-live', 'polite');
      form.appendChild(box);
    }
    box.textContent = msg;
    box.classList.add('show');
  },

  hideStatus(form) {
    const box = form.querySelector('.form-status');
    if (box) box.classList.remove('show');
  }
};


/* ─── Lightbox ───────────────────────────────────────────── */
const Lightbox = {
  el: null,
  imgEl: null,

  init() {
    this.el = document.getElementById('lightbox');
    if (!this.el) return;

    this.imgEl = this.el.querySelector('img');

    document.querySelectorAll('[data-lightbox]').forEach(trigger => {
      const open = () => {
        const src = trigger.dataset.lightbox || trigger.querySelector('img')?.src;
        if (src && this.imgEl) {
          this.imgEl.src = src;
          this.el.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      };
      trigger.addEventListener('click', open);
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });

    const closeBtn = this.el.querySelector('.lightbox-close');
    closeBtn?.addEventListener('click', () => this.close());
    this.el.addEventListener('click', e => { if (e.target === this.el) this.close(); });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.el.classList.contains('open')) this.close();
    });
  },

  close() {
    this.el.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ─── Marquee (duplicate for seamless loop) ──────────────── */
const Marquee = {
  init() {
    document.querySelectorAll('.marquee-track').forEach(track => {
      const clone = track.innerHTML;
      track.innerHTML = clone + clone;
    });
  }
};

/* ─── Counter Animation ──────────────────────────────────── */
const Counter = {
  init() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  },

  animate(el) {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
};

/* ─── Anchor Scroll (fixed-header offset + reveal-aware) ──
    The navbar is fixed, so a native jump to #custom / #bulk would land
    hidden underneath it. Every in-page hash navigation goes through
    here instead, and cross-page links like services.html#custom are
    corrected on arrival (see init). */
const AnchorScroll = {
  headerOffset() {
    const nav = document.querySelector('.navbar');
    return (nav ? nav.offsetHeight : 72) + 24;
  },

  scrollToHash(hash, { push = true } = {}) {
    if (!hash || hash === '#') return false;
    const el = document.getElementById(hash.replace('#', ''));
    if (!el) return false;
    // The target cards carry .reveal (opacity 0 until observed). If the
    // browser jumped while hidden, the section would look empty — force it.
    el.classList.add('revealed');
    const y = el.getBoundingClientRect().top + window.scrollY - this.headerOffset();
    window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
    // Brief highlight so visitors can spot the landing section.
    el.classList.remove('anchor-flash');
    void el.offsetWidth;
    el.classList.add('anchor-flash');
    setTimeout(() => el.classList.remove('anchor-flash'), 1800);
    if (push && window.location.hash !== hash) {
      history.pushState(null, '', hash);
    }
    return true;
  },

  samePage(href) {
    if (!href || href.startsWith('#')) return true;
    const [path] = href.split('#');
    if (!path) return true;
    const current = window.location.pathname.split('/').pop() || 'index.html';
    return path.split('/').pop() === current;
  },

  init() {
    // Delegated: works for the injected navbar + any later content.
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || !href.includes('#')) return;
      const hash = '#' + href.split('#').pop();
      if (!document.getElementById(hash.replace('#', ''))) return;
      if (this.samePage(href)) {
        e.preventDefault();
        Navbar.closeMobile();
        this.scrollToHash(hash);
      }
      // Different page + hash: let the browser navigate natively.
      // This page's own load handler (below) fixes the offset on arrival.
    });

    // Correct the landing position when arriving with a hash, e.g.
    // index.html -> services.html#custom. Wait a tick so images,
    // fonts and .reveal states have settled before measuring.
    const land = () => {
      if (window.location.hash) {
        this.scrollToHash(window.location.hash, { push: false });
      }
    };
    window.addEventListener('hashchange', () => land());
    if (document.readyState === 'complete') {
      setTimeout(land, 350);
    } else {
      window.addEventListener('load', () => setTimeout(land, 350));
      setTimeout(land, 800); // fallback if load is delayed by images
    }
  }
};

/* ─── Equal Detail Cards ────────────────────────────────
    #custom-details and #bulk-details carry near-identical content but
    text wrapping can leave one a few pixels taller. Pin both to the
    tallest on desktop so the pair looks like a matched set. */
const EqualCards = {
  ids: ['custom-details', 'bulk-details'],

  init() {
    const cards = this.ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (cards.length < 2) return;
    const eq = () => {
      cards.forEach((c) => { c.style.minHeight = ''; });
      if (window.innerWidth <= 768) return; // stacked layout: natural height
      const tallest = Math.max(...cards.map((c) => c.offsetHeight));
      cards.forEach((c) => { c.style.minHeight = tallest + 'px'; });
    };
    window.addEventListener('load', eq);
    window.addEventListener('resize', eq);
    setTimeout(eq, 400); // after fonts / reveal settle
    setTimeout(eq, 1200); // after late images
  }
};

/* NOTE: the old Smooth Page Transition interceptor was removed — it was
   never wired into Init All, and its preventDefault + delayed redirect
   pattern is what broke hash targets like services.html#custom.
   Plain page links navigate natively; same-page hashes via AnchorScroll. */

/* ─── Cursor Sparkles ────────────────────────────────────── */
const Sparkles = {
  colors: ['#B83B68','#D6B46A','#F3A982','#A8B98A','#FFF3D9'],
  enabled: window.matchMedia('(pointer: fine)').matches,

  init() {
    if (!this.enabled) return;
    document.addEventListener('mousemove', e => {
      if (Math.random() > 0.4) return;
      this.create(e.clientX, e.clientY);
    });
  },

  create(x, y) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      width: 8px; height: 8px;
      border-radius: 50%;
      background: ${this.colors[Math.floor(Math.random() * this.colors.length)]};
      left: ${x}px; top: ${y}px;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.3s ease, opacity 0.5s ease;
      opacity: 1;
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = `translate(${(Math.random()-0.5)*40}px, ${(Math.random()-0.5)*40-20}px) scale(1)`;
      el.style.opacity = '0';
    });
    setTimeout(() => el.remove(), 600);
  }
};

/* ─── Blog Filter (tabs + search, one owner) ─────────────
    Fully delegated so it cannot miss dynamically added tabs and never
    depends on ProductFilter. Filters #blog-grid by active category
    AND search text together, with a result-count line. */
const BlogFilter = {
  init() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const group = document.querySelector('.filter-tabs[data-filter-target="#blog-grid"]');
    const field = document.querySelector('input[type="search"][aria-label="Search blog articles"]');
    const cards = Array.from(grid.querySelectorAll('[data-category]'));
    if (!cards.length) return;

    let note = document.getElementById('blog-search-note');
    if (!note) {
      note = document.createElement('p');
      note.id = 'blog-search-note';
      note.setAttribute('role', 'status');
      note.style.cssText = 'font-size:0.875rem;color:var(--text-muted);margin:0 0 1.25rem;display:none;';
      grid.parentElement.insertBefore(note, grid);
    }

    const activeCategory = () => {
      const active = group ? group.querySelector('[data-filter].active') : null;
      return active ? (active.dataset.filter || 'all') : 'all';
    };

    const apply = () => {
      const raw = field ? field.value.trim() : '';
      const q = raw.toLowerCase();
      const cat = activeCategory();
      let shown = 0;
      cards.forEach((card) => {
        const text = (card.textContent || '').toLowerCase();
        const show = (cat === 'all' || card.dataset.category === cat) && (!q || text.includes(q));
        card.classList.remove('revealed');
        card.style.display = show ? '' : 'none';
        if (show) {
          void card.offsetWidth;
          card.classList.add('revealed');
          shown++;
        }
      });
      if (!q && cat === 'all') {
        note.textContent = '';
        note.style.display = 'none';
      } else {
        note.style.display = '';
        const bits = [];
        if (cat !== 'all') bits.push(`category “${cat}”`);
        if (q) bits.push(`search “${raw}”`);
        note.textContent = shown
          ? `${shown} article${shown > 1 ? 's' : ''} found (${bits.join(' + ')})`
          : `No articles found (${bits.join(' + ')}). Try clearing the search.`;
      }
    };

    // Tabs — delegated so order of init never matters.
    document.addEventListener('click', (e) => {
      const tab = e.target.closest ? e.target.closest('.filter-tabs [data-filter]') : null;
      if (!tab || !group || !group.contains(tab)) return;
      e.preventDefault();
      group.querySelectorAll('[data-filter]').forEach((other) => {
        const selected = other === tab;
        other.classList.toggle('active', selected);
        other.setAttribute('aria-selected', String(selected));
      });
      apply();
    });

    // Search — live on typing, plus button and Enter.
    if (field) {
      field.addEventListener('input', apply);
      field.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); apply(); }
      });
      const btn = field.parentElement ? field.parentElement.querySelector('button') : null;
      if (btn) btn.addEventListener('click', apply);
    }
  }
};

/* ─── Init All ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  RTLManager.init();
  Navbar.init();
  HeroSlider.init();
  ScrollReveal.init();
  FAQ.init();
  FlavorSelector.init();
  ProductFilter.init();
  BlogFilter.init();
  BackToTop.init();
  Forms.init();
  Lightbox.init();
  Marquee.init();
  Counter.init();
  AnchorScroll.init();
  EqualCards.init();
  Sparkles.init();

  // Bind control buttons
  document.querySelectorAll('[data-action="toggle-theme"]').forEach(btn => {
    btn.addEventListener('click', () => ThemeManager.toggle());
  });
  document.querySelectorAll('[data-action="toggle-rtl"]').forEach(btn => {
    btn.addEventListener('click', () => RTLManager.toggle());
  });
});
