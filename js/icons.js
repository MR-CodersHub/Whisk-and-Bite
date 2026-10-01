/* ============================================================
   WHISK & BITE — Icon System
   Inline SVG sprite. Every icon is a <symbol> defined once here
   and referenced on demand with:
       <svg class="icon"><use href="#i-NAME"></use></svg>
   Icons inherit colour from `color` and size from `font-size`.
   ============================================================ */

const ICON_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
     style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none"><defs>

<symbol id="i-lollipop" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="9" r="6.2"/>
  <path d="M10.9 15.1 10 22"/>
  <path d="M10.2 6.1a5.2 5.2 0 0 1 5.6 4.1"/>
  <path d="M7.4 11.6a5.2 5.2 0 0 0 4.6 4"/>
</symbol>

<symbol id="i-cake-slice" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 20.5h16"/>
  <path d="M4 20.5V14h16v6.5"/>
  <path d="M8 14V9.5a4 4 0 0 1 8 0V14"/>
  <path d="M12 9.5V6.6"/>
  <circle cx="12" cy="4.8" r="1.3"/>
</symbol>

<symbol id="i-birthday-cake" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 20.5h18"/>
  <path d="M4 20.5v-6.5h16v6.5"/>
  <path d="M4 16.5c1.4 1.2 2.9 1.2 4.3 0s2.9-1.2 4.3 0 2.9 1.2 4.3 0 2.9-1.2 3.1-1"/>
  <path d="M8.5 14V9.6M15.5 14V9.6"/>
  <circle cx="8.5" cy="7.4" r="1.2"/>
  <circle cx="15.5" cy="7.4" r="1.2"/>
</symbol>

<symbol id="i-cupcake" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.4 11.6h15.2l-1.7 8.7a1.5 1.5 0 0 1-1.5 1.2H7.6a1.5 1.5 0 0 1-1.5-1.2l-1.7-8.7Z"/>
  <path d="M4.4 11.6c0-1.1 1.8-1.7 2.1-3.1.3-1.8 1.5-2.8 2.9-2.8.6 0 1 .2 1.7.9.3-1 1-1.6 1.5-1.6s1.2.6 1.5 1.6c.7-.7 1.1-.9 1.7-.9 1.4 0 2.6 1 2.9 2.8.3 1.4 2.1 2 2.1 3.1H4.4Z"/>
  <path d="M9.5 15.5h.01M12 15.5h.01M14.5 15.5h.01"/>
</symbol>

<symbol id="i-chocolate" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="8.2" width="16" height="12.3" rx="2"/>
  <path d="M4 8.2 6 4h12l2 4.2"/>
  <path d="M12 8.2v12.3M4 14.3h16"/>
</symbol>

<symbol id="i-pudding" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 13.2h16c0 4-3.6 7.3-8 7.3s-8-3.3-8-7.3Z"/>
  <path d="M4 13.2c0-1.3 3.6-2.2 8-2.2s8 .9 8 2.2"/>
  <path d="M12 11V7.2"/>
  <circle cx="12" cy="5.4" r="1.4"/>
</symbol>

<symbol id="i-ice-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.2 8.6h7.6L13.6 20a1 1 0 0 1-1 .7h-1.2a1 1 0 0 1-1-.7L8.2 8.6Z"/>
  <path d="M6.3 8.6a2.5 2.5 0 0 1 .4-4.7 3 3 0 0 1 5.4 0 2.5 2.5 0 0 1 5.1 0 2.5 2.5 0 0 1-.4 4.7H6.3Z"/>
</symbol>

<symbol id="i-strawberry" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 7.4c-.9 0-1.5.6-1.5.6C7.6 8 5.5 10.5 5.5 13.6 5.5 17.5 8.5 20.6 12 20.6s6.5-3.1 6.5-7c0-3.1-2.1-5.6-4.5-5.6 0 0-.6-.6-1.5-.6Z"/>
  <path d="M8.6 5.4h6.8"/>
  <path d="M12 5.4V2.8"/>
  <path d="M9.6 12.4h.01M14.4 12.4h.01M12 15.6h.01"/>
</symbol>

<symbol id="i-blueberry" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9.2" cy="14.4" r="5.6"/>
  <circle cx="16" cy="15.6" r="4.6"/>
  <path d="M8.2 13.2 9.4 14.4M8.2 15.8 9.4 17M15.4 14.6l.9.9M15.4 16.6l.9.9"/>
</symbol>

<symbol id="i-lemon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="11.2" cy="12.8" rx="8.2" ry="6" transform="rotate(-45 11.2 12.8)"/>
  <path d="M17.6 6.4 20 4"/>
  <path d="M19.6 6.6c1.6.4 2.6 1.4 3 2.6-1.6.5-2.7-.3-3-1.6"/>
</symbol>

<symbol id="i-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13" r="8.4"/>
  <path d="M12 4.6V3"/>
  <path d="M14.6 5.4c1.7 0 3.2 1.1 3.7 2.5-2 .6-3.8-.2-3.7-2.5Z"/>
</symbol>

<symbol id="i-nut" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9.2 5.4c-3 0-5.2 2-5.2 4.5s2.2 4.1 4.7 4.1c2 0 2.6-2 5.1-2"/>
  <path d="M14.8 5.4c3 0 5.2 2 5.2 4.5s-2.2 4.1-4.7 4.1c-2 0-2.6-2-5.1-2"/>
  <path d="M11.8 12v4.3a2.2 2.2 0 0 0 2.4 2.2c1.4 0 2.4-1 2.4-2.2"/>
</symbol>

<symbol id="i-coconut" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13.4" r="8"/>
  <path d="M9 11.4h.01M15 11.4h.01M9.8 16.2c1.4 1.1 3 1.1 4.4 0"/>
  <path d="M9.2 5.6 10.7 8M14.8 5.6 13.3 8"/>
</symbol>

<symbol id="i-salt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.2 8.4h7.6l-1.1 12.1a1 1 0 0 1-1 .9h-3.4a1 1 0 0 1-1-.9L8.2 8.4Z"/>
  <path d="M8.2 8.4 9.3 4.6h5.4l1.1 3.8"/>
  <path d="M10.4 12h.01M13.6 12h.01M10.8 15.6h.01M13.2 15.6h.01"/>
</symbol>

<symbol id="i-tea" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 8.6h11.6v6.6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8.6Z"/>
  <path d="M15.6 9.6h1.6a2.5 2.5 0 0 1 0 5h-1.6"/>
  <path d="M7 3.2c0 1.1 1.1 1.1 1.1 2.6S7 7.3 7 8.6M11.2 3.2c0 1.1 1.1 1.1 1.1 2.6s-1.1 1.5-1.1 2.8"/>
</symbol>

<symbol id="i-coffee" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 8.6h12.6v6.2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8.6Z"/>
  <path d="M16.6 9.6H18a2.5 2.5 0 0 1 0 5h-1.4"/>
  <path d="M6.6 3.2c0 1 1 1 1 2.4S6.6 6.8 6.6 8.2M10.6 3.2c0 1 1 1 1 2.4s-1 1.4-1 2.6"/>
</symbol>

<symbol id="i-jar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 2.8h8"/>
  <path d="M8.6 2.8v2.4L7 7.4v12.2a1.4 1.4 0 0 0 1.4 1.4h7.2a1.4 1.4 0 0 0 1.4-1.4V7.4l-1.6-2.2V2.8"/>
  <path d="M7.2 7.4h9.6"/>
</symbol>

<symbol id="i-gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3.2 9.2h17.6v4H3.2z"/>
  <path d="M4.6 13.2h14.8v7.2a1 1 0 0 1-1 1H5.6a1 1 0 0 1-1-1v-7.2Z"/>
  <path d="M12 9.2v12.2"/>
  <path d="M12 9.2S10.5 3.4 7.4 3.4a2.4 2.4 0 0 0 0 4.8H12"/>
  <path d="M12 9.2s1.5-5.8 4.6-5.8a2.4 2.4 0 0 1 0 4.8H12"/>
</symbol>

<symbol id="i-package" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.6 7.8v8.4a1.5 1.5 0 0 1-.8 1.3l-6.8 3.6a1.5 1.5 0 0 1-1.6 0l-6.8-3.6a1.5 1.5 0 0 1-.8-1.3V7.8"/>
  <path d="m3.7 7.3 8.3-4 8.3 4-8.3 4.2-8.3-4.2Z"/>
  <path d="M12 11.5V21"/>
</symbol>

<symbol id="i-party-popper" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.6 21.4 6.4 19 15 10.4l-3.4-3.4L3 16l-1 5.4h.6Z"/>
  <path d="m11.6 7 1.6-1.6a2.3 2.3 0 0 1 3.3 3.3L14.9 10"/>
  <path d="m18.6 2.6.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z"/>
  <path d="M6.6 3.4l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3L4.8 5.2l1.3-.5.5-1.3Z"/>
</symbol>

<symbol id="i-sparkles" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="m11 2.6 1.7 4.7 4.7 1.7-4.7 1.7L11 15.4 9.3 10.7 4.6 9l4.7-1.7L11 2.6Z"/>
  <path d="m18 13.4.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z"/>
  <path d="m6 14.4.6 1.6 1.6.6-1.6.6L6 18.8l-.6-1.6-1.6-.6 1.6-.6L6 14.4Z"/>
</symbol>

<symbol id="i-star" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="m12 2.4 2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.44l-5.88 3.08 1.12-6.56L2.48 9.32l6.58-.96L12 2.4Z"/>
</symbol>

<symbol id="i-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6.8 3.6h10.4v5.2a5.2 5.2 0 0 1-10.4 0V3.6Z"/>
  <path d="M6.8 4.8H4.4A1.6 1.6 0 0 0 2.8 6.4C2.8 9 4.9 10.5 7.4 10.5"/>
  <path d="M17.2 4.8h2.4a1.6 1.6 0 0 1 1.6 1.6c0 2.6-2.1 4.1-4.6 4.1"/>
  <path d="M12 14v3.2"/>
  <path d="M8.4 21.2h7.2"/>
  <path d="M10.2 17.2h3.6l.6 4h-4.8l.6-4Z"/>
</symbol>

<symbol id="i-rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2.4c3 2.2 4.6 5.7 4.6 9.2L16 15.2H8l-.6-3.6c0-3.5 1.6-7 4.6-9.2Z"/>
  <circle cx="12" cy="9.2" r="1.8"/>
  <path d="m8 15.2-3 3 3.6.6M16 15.2l3 3-3.6.6"/>
  <path d="m10 18.8 2 3 2-3"/>
</symbol>

<symbol id="i-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21.6c3.9 0 6.6-2.6 6.6-6.2 0-4-3.1-5.7-4.1-9.4-1.7 1-2.6 3.1-2.6 4.7 0 1.3-1 1.9-1.7 1.2-.9-.9-1.2-2.2-1.2-3.4-1.7 1.5-3.6 4-3.6 6.9 0 3.6 2.6 6.2 6.6 6.2Z"/>
</symbol>

<symbol id="i-magic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.8 21.2 12.4 11.6"/>
  <path d="m12.6 8.2 3.2 3.2"/>
  <path d="m17.4 2.6.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"/>
  <path d="m6.6 3.2.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5L4.5 5.3l1.5-.6.6-1.5Z"/>
</symbol>

<symbol id="i-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.4 20.4C4 10.2 10 3.4 20 3.4c.4 10.2-5.6 17-15.6 17Z"/>
  <path d="M4.4 20.4C8.4 16 12.6 11.6 20 3.4"/>
</symbol>

<symbol id="i-blossom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="6.4" r="3"/>
  <circle cx="16.9" cy="10" r="3"/>
  <circle cx="15" cy="15.9" r="3"/>
  <circle cx="9" cy="15.9" r="3"/>
  <circle cx="7.1" cy="10" r="3"/>
  <circle cx="12" cy="11.2" r="1.5"/>
</symbol>

<symbol id="i-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21.4c4.2-2.6 7.2-6.2 7.2-9.8A5.6 5.6 0 0 0 12 6.4a5.6 5.6 0 0 0-7.2 5.2c0 3.6 3 7.2 7.2 9.8Z"/>
  <path d="M12 15c1.9-1.1 3.1-2.6 3.1-4.2a3.1 3.1 0 0 0-6.2 0c0 1.6 1.2 3.1 3.1 4.2Z"/>
</symbol>

<symbol id="i-bouquet" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="6" r="2.6"/>
  <circle cx="7.2" cy="9.6" r="2.6"/>
  <circle cx="16.8" cy="9.6" r="2.6"/>
  <path d="M12 8.6v10.8"/>
  <path d="M12 19.4c-3 0-5.2-1.5-5.8-3.6"/>
  <path d="M12 19.4c3 0 5.2-1.5 5.8-3.6"/>
</symbol>

<symbol id="i-wedding" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="8.4" cy="14.6" r="5.6"/>
  <circle cx="15.6" cy="14.6" r="5.6"/>
  <path d="m12 3.4 1.8 3h-3.6l1.8-3Z"/>
</symbol>

<symbol id="i-ring" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="14.6" r="6.2"/>
  <path d="m9.3 7.4-2.4-4.2h10.2l-2.4 4.2"/>
  <path d="M10.2 3.2h3.6"/>
</symbol>

<symbol id="i-heart-ribbon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21.2s-7.6-4.7-7.6-9.7a4.4 4.4 0 0 1 7.6-3.1 4.4 4.4 0 0 1 7.6 3.1c0 5-7.6 9.7-7.6 9.7Z"/>
  <path d="M8.4 2.6c-1.7 0-2.5.8-2.5 1.7s.8 1.7 2.5 1.7 2.5-.8 2.5-1.7-.8-1.7-2.5-1.7Z"/>
  <path d="M15.6 2.6c-1.7 0-2.5.8-2.5 1.7s.8 1.7 2.5 1.7 2.5-.8 2.5-1.7-.8-1.7-2.5-1.7Z"/>
</symbol>

<symbol id="i-love-letter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2.6" y="5" width="18.8" height="14" rx="2"/>
  <path d="m3.2 6.4 8.8 6.2 8.8-6.2"/>
</symbol>

<symbol id="i-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21s-7.6-4.7-7.6-9.7A4.4 4.4 0 0 1 12 8.2a4.4 4.4 0 0 1 7.6 3.1c0 5-7.6 9.7-7.6 9.7Z"/>
</symbol>

<symbol id="i-palette" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.3 0 2-.8 2-1.7 0-1.4-1-1.6-1-2.6 0-.8.7-1.4 1.6-1.4h1.5a4.9 4.9 0 0 0 4.9-4.9c0-4-4-6.9-9-6.9Z"/>
  <circle cx="7.6" cy="11.2" r="1.1" fill="currentColor" stroke="none"/>
  <circle cx="10.2" cy="7.6" r="1.1" fill="currentColor" stroke="none"/>
  <circle cx="14.6" cy="7.6" r="1.1" fill="currentColor" stroke="none"/>
  <circle cx="17" cy="11.2" r="1.1" fill="currentColor" stroke="none"/>
</symbol>

<symbol id="i-chef" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6.4 15.4c-1.7 0-3-1.3-3-3 0-1.2.7-2.3 1.7-2.9-.2-1.2.6-2.3 1.6-2.3.9 0 1.7.7 2 1.6.3-.9 1.1-1.6 2-1.6 1.4 0 2.6 1.2 2.6 2.7 1 .6 1.6 1.6 1.6 2.8 0 1.7-1.3 3-3 3H6.4Z"/>
  <path d="M6.4 15.4v5.2h11.2v-5.2"/>
  <path d="M9.4 20.6v-2.6M14.6 20.6v-2.6"/>
</symbol>

<symbol id="i-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="7.8" r="4"/>
  <path d="M4 20.8c0-4.4 3.6-7 8-7s8 2.6 8 7"/>
</symbol>

<symbol id="i-baby" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12.6" r="8.4"/>
  <path d="M8.6 14.6c1 1.2 2.1 1.8 3.4 1.8s2.4-.6 3.4-1.8"/>
  <path d="M9.2 10.6h.01M14.8 10.6h.01"/>
  <path d="M12 4.2c-1.5 0-2.5 1-2.5 2.5"/>
</symbol>

<symbol id="i-graduation" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.4 8.4 12 3.8l9.6 4.6-9.6 4.6-9.6-4.6Z"/>
  <path d="M6.4 10.4v5.4c0 1.6 2.5 3 5.6 3s5.6-1.4 5.6-3v-5.4"/>
  <path d="M21.6 8.4v6"/>
</symbol>

<symbol id="i-tree" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="m12 2.4 4.1 5.6h-2.5l3.5 4.5h-2.9l3.5 5.3H6.3l3.5-5.3H6.9l3.5-4.5H7.9L12 2.4Z"/>
  <path d="M12 17.8v4"/>
</symbol>

<symbol id="i-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3.4 10.6 12 3.6l8.6 7"/>
  <path d="M5.6 9.4v11h12.8v-11"/>
  <path d="M10 20.4v-5.2h4v5.2"/>
</symbol>

<symbol id="i-building" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.2 20.8V5.2A2 2 0 0 1 6.2 3.2h6.4a2 2 0 0 1 2 2v15.6"/>
  <path d="M14.6 9.4h3.2a2 2 0 0 1 2 2v9.4"/>
  <path d="M2.6 20.8h18.8"/>
  <path d="M7.4 7h3.2M7.4 10.4h3.2M7.4 13.8h3.2M7.4 17.2h3.2"/>
</symbol>

<symbol id="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4.2"/>
  <path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/>
</symbol>

<symbol id="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.4 14.6A8.6 8.6 0 0 1 9.4 3.6a8.6 8.6 0 1 0 11 11Z"/>
</symbol>

<symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3.8 12h16.4"/>
  <path d="m14.2 6 6 6-6 6"/>
</symbol>

<symbol id="i-arrow-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.2 12H3.8"/>
  <path d="m9.8 6-6 6 6 6"/>
</symbol>

<symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M3 12h18"/>
  <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z"/>
</symbol>

<symbol id="i-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 4.4 3.6 6.6v13L9 17.4l6 2.2 5.4-2.2v-13L15 6.6 9 4.4Z"/>
  <path d="M9 4.4v13M15 6.6v13"/>
</symbol>

<symbol id="i-map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21.4s7-6 7-11.2a7 7 0 1 0-14 0c0 5.2 7 11.2 7 11.2Z"/>
  <circle cx="12" cy="10" r="2.6"/>
</symbol>

<symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3.4" y="5" width="17.2" height="16" rx="2"/>
  <path d="M3.4 10h17.2M8 3v4M16 3v4"/>
  <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.4h.01M12 17.4h.01"/>
</symbol>

<symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 6.8v5.6l3.6 2.1"/>
</symbol>

<symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10.6" cy="10.6" r="7"/>
  <path d="m20.6 20.6-4.9-4.9"/>
</symbol>

<symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2"/>
  <path d="m3.2 6.2 8.8 6.2 8.8-6.2"/>
</symbol>

<symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 16.9V19a1.4 1.4 0 0 1-1.5 1.4A16.6 16.6 0 0 1 3.6 5.5 1.4 1.4 0 0 1 5 4h2.1a1.4 1.4 0 0 1 1.4 1.2c.1 1 .3 1.9.7 2.8a1.4 1.4 0 0 1-.3 1.5l-.9.9a13.4 13.4 0 0 0 6 6l.9-.9a1.4 1.4 0 0 1 1.5-.3c.9.3 1.8.6 2.8.7A1.4 1.4 0 0 1 20 16.9Z"/>
</symbol>

<symbol id="i-comment" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.6 12.4c0 4-3.8 7.2-8.6 7.2-1 0-2-.1-2.9-.4L3.8 21l1.5-3.5c-1.4-1.3-2.1-3.1-2.1-5.1 0-4 3.8-7.2 8.6-7.2s8.8 3.2 8.8 7.2Z"/>
</symbol>

<symbol id="i-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.2 13.8a4.2 4.2 0 0 0 6.2.5l2.6-2.6a4.2 4.2 0 0 0-5.9-5.9l-1.5 1.5"/>
  <path d="M13.8 10.2a4.2 4.2 0 0 0-6.2-.5l-2.6 2.6a4.2 4.2 0 0 0 5.9 5.9l1.5-1.5"/>
</symbol>

<symbol id="i-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18.4h6M10.2 21.4h3.6"/>
  <path d="M12 2.6a6.2 6.2 0 0 0-3.7 11.2c.5.4.8 1 .8 1.6v.6h5.8v-.6c0-.6.3-1.2.8-1.6A6.2 6.2 0 0 0 12 2.6Z"/>
</symbol>

<symbol id="i-handshake" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="m8.6 12.6-2.6-2.6a2 2 0 0 1 0-2.8l.3-.3a2 2 0 0 1 2.8 0l2 2"/>
  <path d="m11.1 8.9 3-2.6a2 2 0 0 1 2.8 0l.3.3a2 2 0 0 1 0 2.8l-2.6 2.6"/>
  <path d="m8.6 12.6 2.1 2.1M11.4 12.6l-1.1 2.2M14 12.6l-1.1 1.7"/>
</symbol>

<symbol id="i-test-tube" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.8 2.6h6.4"/>
  <path d="M10.4 2.6v6.6l-4.7 8.4a2 2 0 0 0 1.7 3h9.2a2 2 0 0 0 1.7-3l-4.7-8.4V2.6"/>
  <path d="M7.4 14.6h9.2"/>
</symbol>

<symbol id="i-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4.4" y="10" width="15.2" height="10.6" rx="2"/>
  <path d="M8 10V7.4a4 4 0 0 1 8 0V10"/>
  <path d="M12 13.8v2.6"/>
</symbol>

<symbol id="i-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12s3.6-6.6 10-6.6S22 12 22 12s-3.6 6.6-10 6.6S2 12 2 12Z"/>
  <circle cx="12" cy="12" r="3.1"/>
</symbol>

<symbol id="i-eye-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9.9 5.3A9.9 9.9 0 0 1 12 5.1c6.4 0 10 6.9 10 6.9a17.4 17.4 0 0 1-3.2 4"/>
  <path d="M6.2 6.7A17.4 17.4 0 0 0 2 12s3.6 6.9 10 6.9a9.6 9.6 0 0 0 4.2-1"/>
  <path d="m3 3 18 18"/>
  <path d="M14.4 14.5a3.1 3.1 0 0 1-4.3-4.3"/>
</symbol>

<symbol id="i-pushpin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9.4 2.8h5.2l-.7 6.3 3.3 3.3H6.8l3.3-3.3-.7-6.3Z"/>
  <path d="M12 12.4v8.8"/>
</symbol>

<symbol id="i-rosette" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8.6" r="5.4"/>
  <path d="m8.4 13.2-1.6 8 5.2-2.6 5.2 2.6-1.6-8"/>
</symbol>

<symbol id="i-briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2.8" y="7.4" width="18.4" height="12.8" rx="2"/>
  <path d="M8.8 7.4V6a2 2 0 0 1 2-2h2.4a2 2 0 0 1 2 2v1.4"/>
  <path d="M2.8 12.8h18.4"/>
</symbol>

<symbol id="i-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="5"/>
  <circle cx="12" cy="12" r="4.1"/>
  <path d="M17.4 6.6h.01"/>
</symbol>

<symbol id="i-facebook" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M14.8 8.7V7.2c0-.8.2-1.2 1.3-1.2h1.3V2.9h-2.3c-2.4 0-3.4 1.4-3.4 3.7v2.1H9.2v3.2h2.5V21h3.1v-9.1h2.4l.4-3.2h-2.8Z"/>
</symbol>

<symbol id="i-x" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"/>
</symbol>

<symbol id="i-brand-apple" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M16.5 12.7c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.1-2.9.9-3.7.9s-1.9-.9-3.1-.9c-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8 2.1-1.2 2.9-2.3c.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.8-1.1-2.8-3.9ZM14.6 5.4c.6-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.6 2.8-1.4Z"/>
</symbol>

<symbol id="i-brand-google" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M3 12h18"/>
  <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z"/>
  <path d="M4.2 6.6h15.6M4.2 17.4h15.6"/>
</symbol>

</defs></svg>`;

const Icons = {
  /* Returns an inline <svg> that references a sprite symbol. */
  svg(name, extraClass) {
    return `<svg class="icon${extraClass ? ' ' + extraClass : ''}" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;
  },

  /* Inject the sprite into the document (idempotent). */
  mount() {
    if (document.getElementById('wb-icon-sprite')) return;
    const host = document.createElement('div');
    host.id = 'wb-icon-sprite';
    host.setAttribute('aria-hidden', 'true');
    host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
    host.innerHTML = ICON_SPRITE;
    (document.body || document.documentElement).appendChild(host);
  },

  /* Swap an <svg> in place of its sprite symbol. */
  set(el, name, extraClass) {
    if (el) el.innerHTML = this.svg(name, extraClass);
  }
};

Icons.mount();
document.addEventListener('DOMContentLoaded', Icons.mount);
