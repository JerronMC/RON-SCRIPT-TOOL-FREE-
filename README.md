RON SCRIPTS v2.1.4 — Real-link entries added.

# RON SCRIPT TOOL FREE — UI UPGRADE

A mobile-first skin script dashboard for the RON SCRIPTS collection.

## Included

- Premium glass/neon dashboard redesign
- Live online ribbon and animated UI effects
- Quick category chips
- Spotlight / featured strip
- Search, sorting, hero and type filters
- Favorites and comments
- VIP Access-aware download flow
- Custom Script Lab with experimental concept entries
- Hero Vault
- Multiple themes and compact view
- Firebase realtime metrics
- Mobile-friendly layout

## VIP access

VIP entries can set `accessOnly: true` and `accessMessage` in `scriptData`. The UI will show **Access** instead of **Download** and display the permission message.

## Custom concepts

Custom Lab entries use `customOnly: true`. They are clearly marked as concepts/previews and do not pretend to have a public file URL.

## Files

- `index.html` — interface and card template
- `style.css` — UI/theme styles
- `script.js` — catalog, filtering, Firebase, favorites, VIP access, Custom Lab


## v3.0 access gate
The first visit uses a 3-step launch gate: creator quest, Cloudflare Turnstile, then the main vault.

### Turnstile setup
In `script.js`, replace `PASTE_YOUR_TURNSTILE_SITE_KEY_HERE` with the public site key created for your domain. Cloudflare's current Turnstile docs recommend a sitekey in the page and server-side token validation for production security.

For a GitHub Pages-only catalog, the client gate is a UX gate; it does not by itself provide server-enforced bot protection.
