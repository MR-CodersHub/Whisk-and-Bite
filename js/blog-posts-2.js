/* ============================================================
   WHISK & BITE — Blog posts, part 2 + details-page renderer.
   Merges the remaining posts into BLOG_POSTS (defined in
   js/blog-posts.js) and renders blog-details.html?post=<slug>.
   ============================================================ */

Object.assign(BLOG_POSTS, {
  'party-box': {
    title: 'How to Build a Party Dessert Box Guests Remember',
    titleHTML: 'How to Build a Party Dessert Box<br/><em>Guests Remember</em>',
    short: 'Party Dessert Box',
    category: 'Events', icon: 'party-popper',
    date: 'August 8, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/1200x/69/27/cb/6927cbfd7b8f87cbbf63f25a1b0f7d88.jpg',
    alt: 'Party dessert box filled with assorted celebration bites',
    excerpt: 'Portions, variety and packaging — our catering checklist for unforgettable party boxes.',
    tags: ['Parties', 'Events', 'Gifting'],
    body: `<p>The best party boxes feel abundant but curated: a tight colour story, three textures, and one talking point. Random assortments look generous for ten seconds; designed ones get photographed.</p><p>Our formula per guest: two cake pops in theme colours, one brownie bite, one truffle, plus a printed tag. For thirty guests that is a 120-piece box with volume pricing — generous without waste.</p><blockquote>"People remember the box as much as the bites — packaging is part of the flavour."</blockquote><h2>Box-Building Checklist</h2><ul><li><strong>Theme colours first</strong> — coatings matched to the party palette</li><li><strong>Three textures</strong> — pop, fudge and ganache in every box</li><li><strong>Label everything</strong> — guests with allergies thank you</li><li><strong>Order 10% extra</strong> — the box always empties faster than planned</li></ul><p>Send your date, headcount and theme — we handle the rest, delivered party-ready.</p>`
  },

  'birthday-colours': {
    title: 'Birthday Pops: Picking Colours That Pop on Camera',
    titleHTML: 'Birthday Pops: Colours<br/>That <em>Pop on Camera</em>',
    short: 'Birthday Pop Colours',
    category: 'Tips', icon: 'bulb',
    date: 'August 2, 2026', read: '4 min read',
    image: 'https://i.pinimg.com/736x/4b/45/66/4b4566b866111e8b949bcf5346b5062a.jpg',
    alt: 'Colourful birthday cake pops styled for photos',
    excerpt: 'Lighting, backdrops and edible colours that photograph beautifully.',
    tags: ['Birthdays', 'Tips', 'Custom Orders'],
    body: `<p>Birthday desserts live twice: on the table and on camera. Some shades that look vivid in person wash out under phone flash — neons fade, pastels vanish — while jewel tones and metallics glow.</p><p>Our camera-proof palette: raspberry pink, champagne gold and deep cocoa, with white drizzle for contrast. Photograph near a window, never under yellow downlights, and shoot the bouquet before candles — melting waits for no one.</p><blockquote>"Design for the photo and the party takes care of itself."</blockquote><h2>Photo-Ready Tips</h2><ul><li><strong>Jewel tones win</strong> — raspberry, emerald and sapphire hold their colour</li><li><strong>Add metallics</strong> — gold leaf catches every light source</li><li><strong>Contrast the backdrop</strong> — dark pops on light stands, light on dark</li><li><strong>Shoot fast</strong> — chocolate and candles are on a timer</li></ul><p>Tell us the party theme and we will engineer pops that photograph as good as they taste.</p>`
  },

  'meet-makers': {
    title: 'Meet the Makers: A Morning Inside Our Studio',
    titleHTML: 'Meet the Makers:<br/>A Morning <em>Inside Our Studio</em>',
    short: 'Inside Our Studio',
    category: 'Behind the Scenes', icon: 'instagram',
    date: 'July 28, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/736x/26/0d/96/260d9632570bacaf21b3a73333b75168.jpg',
    alt: 'Baker decorating desserts inside the artisan studio',
    excerpt: 'Ovens on at 5am — a behind-the-scenes look at the team behind your favourite bites.',
    tags: ['Studio', 'Team', 'Art'],
    body: `<p>The studio wakes before the city: ovens on at five, chocolate tempering by six, and the day's orders mapped on the wall in colour-coded tickets. Twelve hands will touch your box before it leaves.</p><p>Amelia tastes every ganache batch. Maya paints monograms to playlist order. Kai logs oven curves the way pilots log flights. It is obsession, cheerfully organised.</p><blockquote>"Nobody here makes dessert they would not serve at their own wedding."</blockquote><h2>How a Box Gets Made</h2><ul><li><strong>5am bake</strong> — sponges and brownie slabs, never day-old</li><li><strong>Morning dip</strong> — tempered chocolate, two coats, zero shortcuts</li><li><strong>Afternoon art</strong> — painting, leaf and sugar flowers</li><li><strong>Evening pack</strong> — ribbon, wax seal, personal card</li></ul><p>Come taste the difference a cared-for morning makes.</p>`
  },

  'caramel-masterclass': {
    title: 'Salted Caramel Masterclass: From Sugar to Silk',
    titleHTML: 'Salted Caramel Masterclass:<br/>From <em>Sugar to Silk</em>',
    short: 'Salted Caramel Masterclass',
    category: 'Recipes', icon: 'cake-slice',
    date: 'July 22, 2026', read: '7 min read',
    image: 'https://i.pinimg.com/736x/66/86/07/668607ea3fddee3d423e25c620f01597.jpg',
    alt: 'Salted caramel dessert flavour close-up',
    excerpt: 'Temperatures, timing and the fleur de sel finish behind our silk-smooth caramel.',
    tags: ['Caramel', 'Recipes', 'Chocolate'],
    body: `<p>Caramel splits for exactly two reasons: impatience and cold cream. Keep the heat steady, warm your cream, and sugar transforms from crystals to amber silk without a grain in sight.</p><p>Cook to 175C for pourable sauce, 118C for sliceable centres. Off the heat, whisk in butter then cream, and finish with fleur de sel — never table salt, whose harsh iodine fights the butter.</p><blockquote>"Watch the colour, not the clock — amber waits for no recipe."</blockquote><h2>Silk Rules</h2><ul><li><strong>Dry pan first</strong> — melt sugar alone for cleanest flavour</li><li><strong>Warm cream only</strong> — cold dairy seizes hot sugar instantly</li><li><strong>Swirl, never stir</strong> — agitation invites crystals</li><li><strong>Salt at the end</strong> — so its crunch survives</li></ul><p>Drizzle it over everything — starting with our caramel brownie bite.</p>`
  }
});

/* ─── Details-page renderer ─────────────────────────────── */
const BlogPost = {
  relatedCount: 3,

  icon(name) {
    return `<svg class="icon" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;
  },

  init() {
    if (!document.getElementById('article-main-title')) return; // listing pages: nothing to do
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('post');
    const key = (slug && BLOG_POSTS[slug]) ? slug : 'chocolate-pairing';
    const post = BLOG_POSTS[key];
    if (!post) return;

    const set = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    const heroImg = document.getElementById('article-hero-img');
    if (heroImg) { heroImg.src = post.image; heroImg.alt = post.alt; }

    set('article-category', `${this.icon(post.icon)} ${post.category}`);
    set('article-date', `${this.icon('calendar')} ${post.date}`);
    set('article-read', post.read);
    set('article-main-title', post.titleHTML);

    const crumb = document.getElementById('article-crumb');
    if (crumb) crumb.textContent = post.short;

    const body = document.getElementById('article-body');
    if (body) body.innerHTML = post.body;

    const tags = document.getElementById('article-tags');
    if (tags) {
      tags.innerHTML = `<span style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;">Tags:</span>` +
        post.tags.map((t) => `<button class="tag">${t}</button>`).join('');
    }

    document.title = `${post.short} | Whisk & Bite — Tiny Treats, Big Moments`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', post.excerpt);

    const grid = document.getElementById('related-grid');
    if (grid) {
      const keys = Object.keys(BLOG_POSTS).filter((s) => s !== key);
      const sameCat = keys.filter((s) => BLOG_POSTS[s].category === post.category);
      const rest = keys.filter((s) => BLOG_POSTS[s].category !== post.category);
      const pick = [...sameCat, ...rest].slice(0, this.relatedCount);
      grid.innerHTML = pick.map((s, i) => {
        const p = BLOG_POSTS[s];
        return `<div class="related-post-card reveal revealed reveal-delay-${i + 1}">` +
          `<div style="overflow:hidden;"><img src="${p.image}" alt="${p.alt}" loading="lazy"/></div>` +
          `<div class="related-post-card-body">` +
          `<div style="font-size:0.75rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:var(--raspberry);margin-bottom:0.75rem;">${this.icon(p.icon)} ${p.category}</div>` +
          `<h4 style="font-size:1.1rem;font-weight:700;line-height:1.4;margin-bottom:0.75rem;"><a href="blog-details.html?post=${s}" style="color:var(--text);">${p.title}</a></h4>` +
          `<a href="blog-details.html?post=${s}" style="font-size:0.8rem;font-weight:700;color:var(--raspberry);letter-spacing:0.05em;text-transform:uppercase;">Read Article →</a>` +
          `</div></div>`;
      }).join('');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => BlogPost.init());
