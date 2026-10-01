/* ============================================================
   WHISK & BITE — Blog posts data + details-page renderer

   Every card on blog.html / blog2.html links to
   blog-details.html?post=<slug>. This file renders the matching
   article (hero, body, tags, related posts) into the hooks in
   blog-details.html. No ?post= (or unknown slug) falls back to
   the featured pairing guide.
   ============================================================ */

const BLOG_POSTS = {
  'chocolate-pairing': {
    title: 'The Ultimate Guide to Pairing Chocolate with Unexpected Flavours',
    titleHTML: 'The Ultimate Guide to Pairing Chocolate<br/>with <em>Unexpected Flavours</em>',
    short: 'Chocolate Flavour Guide',
    category: 'Flavor Guide', icon: 'palette',
    date: 'September 28, 2026', read: '8 min read',
    image: '../images/blog-post-flavor.jpg',
    alt: 'Artistic arrangement of flavor ingredients including raspberry, pistachio, lemon curd and dark chocolate',
    excerpt: 'From raspberry and pistachio to blood orange and espresso — how our head chef builds unforgettable flavour combinations.',
    tags: ['Chocolate', 'Flavour Pairing', 'Cake Pops', 'Baking Tips'],
    body: `<p>There is a reason our <em>raspberry and dark chocolate</em> cake pop is our bestselling flavour — it should not work, and yet it is transcendent. Bright tartness cutting through deep, almost bitter 72% couverture creates something balanced and utterly addictive.</p><p>After eight years of creating desserts, I believe the most memorable flavours surprise you first, then make complete sense. Here is our complete guide to the pairings we swear by.</p><blockquote>"Great flavour pairings share aromatic molecules — they surprise your brain while satisfying it."</blockquote><h2>The 5 Unexpected Pairings We Love</h2><div class="flavor-pairing-card"><div class="pairing-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-strawberry"></use></svg></div><div><strong>Dark Chocolate + Raspberry</strong><p style="font-size:0.9rem;margin:0;margin-top:0.3rem;">Citric acids amplify chocolate's fruity undertones while tannins soften the tartness.</p></div></div><div class="flavor-pairing-card"><div class="pairing-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-leaf"></use></svg></div><div><strong>White Chocolate + Pistachio</strong><p style="font-size:0.9rem;margin:0;margin-top:0.3rem;">Creamy vanilla notes meet earthy, savoury complexity — subtle and sophisticated.</p></div></div><div class="flavor-pairing-card"><div class="pairing-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-salt"></use></svg></div><div><strong>Milk Chocolate + Fleur de Sel</strong><p style="font-size:0.9rem;margin:0;margin-top:0.3rem;">Salt amplifies sweetness. A tiny pinch creates an explosion of depth.</p></div></div><div class="flavor-pairing-card"><div class="pairing-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-orange"></use></svg></div><div><strong>Dark Chocolate + Blood Orange</strong><p style="font-size:0.9rem;margin:0;margin-top:0.3rem;">Jammy, floral citrus bridging beautifully with dark chocolate's fruit notes.</p></div></div><div class="flavor-pairing-card"><div class="pairing-icon"><svg class="icon" aria-hidden="true" focusable="false"><use href="#i-rose"></use></svg></div><div><strong>White Chocolate + Rose & Lychee</strong><p style="font-size:0.9rem;margin:0;margin-top:0.3rem;">Floral and ethereal — like something from a Parisian patisserie.</p></div></div><h2>How to Apply This at Home</h2><ul><li>Start with <strong>quality chocolate</strong> — complexity in means complexity out</li><li>Use <strong>contrasting intensities</strong> — bold against subtle</li><li>Consider <strong>texture contrast</strong> — crunchy against smooth</li><li>Think <strong>aroma first</strong> — if they smell good together, they taste good together</li></ul><p>Ready to explore your own combination? Tell us about your occasion and tastes in our custom order form — we will take it from there.</p>`
  },

  'cake-pops-home': {
    title: 'How to Make Bakery-Quality Cake Pops at Home',
    titleHTML: 'How to Make Bakery-Quality<br/>Cake Pops <em>at Home</em>',
    short: 'Cake Pops at Home',
    category: 'Recipes', icon: 'cake-slice',
    date: 'September 20, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/1200x/93/a2/19/93a21966824cf4eaae5b4691734b724c.jpg',
    alt: 'Assorted artisan cake pops with gold leaf decorations',
    excerpt: 'Our head chef shares her exact method for bakery-quality cake pops, including the secret to a perfect chocolate shell.',
    tags: ['Cake Pops', 'Recipes', 'Chocolate', 'Baking Tips'],
    body: `<p>Great cake pops are 90% technique. The crumb must be moist but firm, the binding just enough to hold a sphere, and the shell thin enough to crack delicately. Here is exactly how we do it in the studio, scaled for your kitchen.</p><p>Bake a rich vanilla or chocolate sponge, cool completely, then crumb it finely. Work in frosting one spoon at a time — stop the moment the mixture holds together when squeezed. Roll tight spheres, chill overnight, then dip in properly tempered chocolate.</p><blockquote>"The secret is temper: glossy, snappy chocolate that never blooms white."</blockquote><h2>The 4 Rules That Matter Most</h2><ul><li><strong>Chill twice</strong> — once after rolling, once after inserting sticks</li><li><strong>Thin the coating</strong> — a spoon of neutral oil per 200g keeps shells delicate</li><li><strong>Tap, don't shake</strong> — tap the stick wrist to shed excess coating</li><li><strong>Decorate fast</strong> — sprinkles and leaf go on before the shell sets</li></ul><p>Master these and your homemade pops will rival any bakery box — or skip the washing up and let us craft them for you.</p>`
  },

  'ingredient-quality': {
    title: 'Why Ingredient Quality Makes All the Difference',
    titleHTML: 'Why Ingredient Quality<br/>Makes <em>All the Difference</em>',
    short: 'Ingredient Quality',
    category: 'Tips', icon: 'bulb',
    date: 'September 15, 2026', read: '5 min read',
    image: 'https://i.pinimg.com/736x/9e/58/f4/9e58f46c0957c302964811c267d1f7f5.jpg',
    alt: 'Premium baking ingredients on marble surface',
    excerpt: 'Why we pay premium prices for couverture, vanilla and berries — and why it shows in every single bite.',
    tags: ['Ingredients', 'Chocolate', 'Quality', 'Baking Tips'],
    body: `<p>Two cake pops can look identical and taste worlds apart. The difference is almost always the ingredients: the percentage and origin of the chocolate, real vanilla versus vanillin, butter versus margarine. Your palate notices, even if your eyes do not.</p><p>We use 72% single-origin Belgian couverture, Madagascan vanilla, cultured butter and seasonal organic fruit. It costs more — our margins would love compound chocolate — but flavour is the whole product.</p><blockquote>"There is no technique that rescues poor chocolate."</blockquote><h2>Where Quality Shows Most</h2><ul><li><strong>Chocolate shell</strong> — snap, gloss and melt all come from cocoa butter content</li><li><strong>Vanilla crumb</strong> — real beans perfume the whole bite; extract alone cannot</li><li><strong>Fruit centres</strong> — fresh compote versus essence is night and day</li><li><strong>Freshness</strong> — premium inputs plus small batches beat preservatives</li></ul><p>Taste one of our pops next to a mass-market version and you will understand in a single bite.</p>`
  },

  'wedding-table': {
    title: 'Planning the Perfect Wedding Dessert Table',
    titleHTML: 'Planning the Perfect<br/>Wedding <em>Dessert Table</em>',
    short: 'Wedding Dessert Table',
    category: 'Events', icon: 'party-popper',
    date: 'September 10, 2026', read: '7 min read',
    image: 'https://i.pinimg.com/736x/87/ee/a7/87eea792002b4cc01eaaf182768b2296.jpg',
    alt: 'Elegant wedding dessert table setup with gold candelabras',
    excerpt: 'Quantities, styling and timelines — our complete guide to a breathtaking wedding dessert spread.',
    tags: ['Weddings', 'Events', 'Dessert Table', 'Custom Orders'],
    body: `<p>A dessert table is theatre: height, colour and abundance arranged for that gasp when guests walk in. After hundreds of weddings, our formula is settled — and it starts with numbers, not flowers.</p><p>Plan 3 to 4 bite-size pieces per guest alongside your cutting cake, across at least three heights. Match two flavours to your menu and add one surprise — our rose and lychee pop converts skeptics at every single wedding.</p><blockquote>"Guests photograph the table before they taste it — style it like you mean it."</blockquote><h2>Our Planning Checklist</h2><ul><li><strong>Book 6 to 8 weeks out</strong> — peak season sells out fast</li><li><strong>Match your palette</strong> — send invitations so we colour-match coatings</li><li><strong>Three heights minimum</strong> — cake stands, crates and pedestals</li><li><strong>Plan the reveal</strong> — unveil after speeches for maximum impact</li></ul><p>Tell us your venue, colours and guest count — we will design the table, deliver it and style it on the day.</p>`
  },

  'edible-painting': {
    title: 'The Art of Edible Painting: A Day in the Studio',
    titleHTML: 'The Art of Edible Painting:<br/><em>A Day in the Studio</em>',
    short: 'Edible Painting',
    category: 'Behind the Scenes', icon: 'instagram',
    date: 'September 5, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/1200x/20/62/f5/2062f546a7a00368b18427c1d242bbce.jpg',
    alt: 'Artisan hand-painting custom designs on cake pops',
    excerpt: 'Follow artist Maya through a full day of hand-painting wedding cake pops — tools, techniques and magic.',
    tags: ['Custom Orders', 'Art', 'Studio', 'Cake Pops'],
    body: `<p>By 8am Maya has already tempered white chocolate, mixed twelve edible paint shades and lined up forty pops like tiny canvases. Each one gets a base coat, a setting hour, then the real work begins — monograms, florals and gold leaf, entirely by hand.</p><p>Food-safe colours behave like watercolours: they bloom, they bleed, they demand confidence. A single bridal monogram takes eleven minutes; a full suite of forty takes the whole day plus nerves of steel.</p><blockquote>"Every pop is signed by a human hand — that is the whole point."</blockquote><h2>Maya's Toolkit</h2><ul><li><strong>00-size brushes</strong> — for monogram hairlines</li><li><strong>Edible lustre dusts</strong> — champagne, rose gold, antique gold</li><li><strong>24k gold leaf</strong> — applied with a dry squirrel-hair tip</li><li><strong>Cocoa-butter paints</strong> — they bond to chocolate instead of beading</li></ul><p>Send a photo, invitation or fabric swatch — and watch it come back as dessert.</p>`
  },

  'truffle-chocolate': {
    title: "Dark vs Milk vs White Chocolate: What's Best for Truffles?",
    titleHTML: 'Dark vs Milk vs White:<br/>Best Chocolate <em>for Truffles?</em>',
    short: 'Best Chocolate for Truffles',
    category: 'Flavor Guide', icon: 'palette',
    date: 'August 28, 2026', read: '6 min read',
    image: 'https://i.pinimg.com/736x/9e/da/67/9eda67f8c80bb5d23fbe93f02d1f26af.jpg',
    alt: 'Luxury chocolate truffles in velvet box',
    excerpt: 'The science of chocolate selection — why each type creates a completely different truffle experience.',
    tags: ['Chocolate', 'Truffles', 'Flavour Pairing'],
    body: `<p>The same ganache recipe made three ways tastes like three different desserts. Cocoa percentage controls everything: firmness, sweetness, melt speed and which flavours can stand beside it.</p><p>Dark (70%+) gives structure and intensity — ideal for bold centres like espresso or raspberry. Milk (35 to 40%) is crowd-pleasing silk, perfect for caramel and hazelnut. White (30% cocoa butter) is a blank canvas for florals, citrus and fruit.</p><blockquote>"Match intensity to intensity — bold with bold, delicate with delicate."</blockquote><h2>Quick Selection Guide</h2><ul><li><strong>Dark</strong> — espresso, raspberry, sea salt, chilli</li><li><strong>Milk</strong> — caramel, hazelnut, malt, peanut butter</li><li><strong>White</strong> — passionfruit, rose, lemon, matcha</li><li><strong>Rule of thumb</strong> — the stronger the centre, the darker the shell</li></ul><p>Or skip the decision: our tasting box includes all three, side by side.</p>`
  },

  'store-fresh': {
    title: 'How to Store Desserts for Maximum Freshness',
    titleHTML: 'How to Store Desserts<br/>for <em>Maximum Freshness</em>',
    short: 'Storing Desserts',
    category: 'Tips', icon: 'bulb',
    date: 'August 22, 2026', read: '4 min read',
    image: 'https://i.pinimg.com/736x/dc/20/a1/dc20a1f4c8193e0aa2d6c92a9d12cda4.jpg',
    alt: 'Premium dessert packaging with wax seal and satin ribbon',
    excerpt: 'Keeping cake pops, brownies and truffles tasting perfect for as long as possible.',
    tags: ['Baking Tips', 'Storage', 'Cake Pops'],
    body: `<p>Freshness is packaging plus temperature plus time. Our bites contain no preservatives, so a little knowledge keeps them tasting studio-fresh for days.</p><p>Cake pops hold a week at cool room temperature in their wrap — the chocolate shell is a natural seal. Brownies want airtight and room temp for five days. Cheesecakes and truffles live in the fridge and taste best after twenty minutes back at room temperature.</p><blockquote>"Cold mutes flavour — always serve chilled desserts at room temperature."</blockquote><h2>Storage Cheat Sheet</h2><ul><li><strong>Cake pops</strong> — wrapped, cool room temp, 7 days</li><li><strong>Brownie bites</strong> — airtight, room temp, 5 days</li><li><strong>Mini cheesecakes</strong> — refrigerated, 3 days</li><li><strong>Truffles</strong> — refrigerated, 2 weeks; warm up before serving</li></ul><p>When in doubt, eat them within 48 hours of delivery — you will not regret it.</p>`
  },

  'brownie-crackle': {
    title: 'Fudgy Brownie Bites: Secrets of the Perfect Crackle Top',
    titleHTML: 'Fudgy Brownie Bites:<br/>Secrets of the <em>Perfect Crackle Top</em>',
    short: 'Perfect Crackle Top',
    category: 'Recipes', icon: 'cake-slice',
    date: 'August 18, 2026', read: '5 min read',
    image: '../images/brownie-bites.jpg',
    alt: 'Fudgy brownie bites with crackle tops on marble',
    excerpt: 'Whipping time, chocolate ratio and oven tricks behind our award-winning crackle tops.',
    tags: ['Brownies', 'Recipes', 'Chocolate'],
    body: `<p>That paper-thin, glossy crackle is meringue science: well-whipped eggs and fully dissolved sugar rising to the surface as the brownie sets. Get it right and the top shatters delicately over a dense, fudgy centre.</p><p>Whisk eggs and sugar a full four minutes until ribbon-thick, fold in 72% chocolate and butter just until combined, and pull the tray when the centre still trembles — carryover heat finishes the job without drying a single bite.</p><blockquote>"Underbake slightly, always. You can never unbake a brownie."</blockquote><h2>Crackle-Top Rules</h2><ul><li><strong>Whip 4 full minutes</strong> — volume is non-negotiable</li><li><strong>Melt, never boil</strong> — chocolate and butter just combined</li><li><strong>Rest the batter</strong> — ten minutes deepens flavour and sheen</li><li><strong>Cool in the tray</strong> — clean cuts need a fully set slab</li></ul><p>Top warm bites with flaky salt and watch them disappear.</p>`
  },

  'cheesecake-toppings': {
    title: 'Mini Cheesecakes: 7 Seasonal Toppings Worth Trying',
    titleHTML: 'Mini Cheesecakes: 7 Seasonal<br/>Toppings <em>Worth Trying</em>',
    short: 'Seasonal Toppings',
    category: 'Flavor Guide', icon: 'palette',
    date: 'August 14, 2026', read: '5 min read',
    image: '../images/mini-cheesecakes.jpg',
    alt: 'Mini cheesecakes with fresh seasonal fruit',
    excerpt: 'How we match each season fruit to our silky New York-style base.',
    tags: ['Cheesecake', 'Flavour Pairing', 'Seasonal'],
    body: `<p>A mini cheesecake is a perfect two-bite canvas: buttery crumb, silk filling, and a crown of whatever is ripest right now. Our topping menu turns over with the seasons — here is what to ask for and when.</p><p>Spring brings macerated strawberries and rhubarb; summer is all passionfruit curd and blueberry compote. Autumn pairs spiced apple with salted caramel, and winter belongs to blood orange and dark chocolate shavings.</p><blockquote>"Seasonal fruit needs nothing — sugar, heat and restraint."</blockquote><h2>Topping Principles</h2><ul><li><strong>Acid first</strong> — citrus and berries cut richness</li><li><strong>One hero</strong> — a single fruit, done properly, beats a medley</li><li><strong>Texture last</strong> — crumbs and nuts go on at serving</li><li><strong>Serve cool, not cold</strong> — flavour opens as they warm</li></ul><p>Ask what is seasonal when you order — the answer is always the best topping.</p>`
  }

};
