# MainLog Marketing Site

Marketing website for [Aircraft-Logs.com](https://aircraft-logs.com) — AI-powered aircraft maintenance tracking.

## Pages

- **index.html** — Landing page (hero, features, AI spotlight, pricing, FAQ)
- **pricing.html** — Detailed pricing with FAQ
- **about.html** — Jim's story and company values
- **blog.html** — Blog index (placeholder posts for SEO structure)
- **contact.html** — Contact form and info

## Hosting

This site is designed for **GitHub Pages** (free hosting):

### Quick Setup

1. Create a new GitHub repo (e.g., `mainlog-marketing`)
2. Push these files to the `main` branch
3. Go to **Settings → Pages**
4. Set source to "Deploy from a branch" → `main` → `/ (root)`
5. Your site will be live at `https://yourusername.github.io/mainlog-marketing/`

### Custom Domain

To use `aircraft-logs.com` or `www.aircraft-logs.com`:

1. In GitHub Pages settings, enter your custom domain
2. Add DNS records at your registrar:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME** for `www` pointing to `yourusername.github.io`
3. Check "Enforce HTTPS"

### Recommended Domain Setup

- `aircraft-logs.com` → GitHub Pages (this marketing site)
- `app.aircraft-logs.com` → Digital Ocean/Hatchbox (Rails app)

## Contact Form

The contact page uses [Formspree](https://formspree.io) for form handling:

1. Sign up at formspree.io (free tier: 50 submissions/month)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `contact.html` with your form ID

## Customization

### Screenshots
Replace the placeholder divs in `index.html` with actual app screenshots:
```html
<img src="images/dashboard-screenshot.png" alt="MainLog Dashboard" class="hero-screenshot">
```

### Photo
Replace the placeholder in `about.html` with a real photo of Jim/the airplane.

### Blog Posts
When ready to write real posts, create individual HTML files (e.g., `blog/understanding-ads.html`). For a proper blog with markdown support, consider migrating to Hugo later.

### Colors
All colors are CSS custom properties in `styles.css` under `:root`. The palette:
- Navy (#0B1D33) — Trust, professionalism
- Amber (#D4883A) — Action, warmth
- Cream (#F6F2EC) — Background warmth
- Sky (#89B0D3) — Aviation feel

### Fonts
- **Instrument Serif** — Headlines (elegant, readable)
- **DM Sans** — Body text (clean, modern)

Both loaded from Google Fonts.
