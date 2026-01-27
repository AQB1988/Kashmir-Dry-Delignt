# Deployment Guide

This guide will help you deploy your Kashmir Dry Delight website to various hosting platforms.

## Build Your Project

First, create a production build:

```bash
cd kashmir-dry-delight
npm run build
```

This creates a `dist` folder with optimized, production-ready files.

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Pros**: Free, automatic deployments, great for React apps

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts. Your site will be live in minutes!

3. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite and deploys
   - Every push to main branch auto-deploys

**Configuration**: Vercel automatically handles Vite builds. No extra config needed!

---

### 2. Netlify

**Pros**: Free tier, easy setup, good for static sites

1. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag and drop your `dist` folder
   - Or connect GitHub for auto-deployments

3. **Build Settings** (if using GitHub):
   - Build command: `npm run build`
   - Publish directory: `dist`

---

### 3. GitHub Pages

**Pros**: Free, integrated with GitHub

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/kashmir-dry-delight"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Your site will be at `https://yourusername.github.io/kashmir-dry-delight`

**Note**: For React Router, you'll need to add a `404.html` that redirects to `index.html`.

---

### 4. Firebase Hosting

**Pros**: Free tier, Google infrastructure

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**:
   ```bash
   firebase login
   ```

3. **Initialize**:
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Public directory: `dist`
   - Single-page app: Yes
   - Don't overwrite index.html: No

4. **Deploy**:
   ```bash
   firebase deploy
   ```

---

### 5. AWS S3 + CloudFront

**Pros**: Scalable, professional setup

1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist` folder contents
4. Set up CloudFront distribution
5. Configure custom domain

---

### 6. Custom Server (VPS/Dedicated)

**Pros**: Full control

1. **Using Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/kashmir-dry-delight/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

2. **Using Apache**:
   Create `.htaccess` in `dist` folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Important: Update URLs After Deployment

After deploying, update these files with your actual domain:

1. **public/robots.txt** - Replace `yourdomain.com`
2. **public/sitemap.xml** - Replace all `yourdomain.com` URLs
3. **src/components/SEO.jsx** - Update `siteUrl` constant
4. **index.html** - Update meta tag URLs

## Environment Variables

If you need different configs for dev/prod, create:

1. `.env.development`:
   ```
   VITE_SITE_URL=http://localhost:5173
   ```

2. `.env.production`:
   ```
   VITE_SITE_URL=https://yourdomain.com
   ```

Then use in code:
```jsx
const siteUrl = import.meta.env.VITE_SITE_URL
```

## Post-Deployment Checklist

- [ ] Website is accessible
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms work (if any)
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Domain URLs updated
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] Google Search Console submitted
- [ ] Analytics installed (if using)

## Troubleshooting

### 404 Errors on Refresh
- **Problem**: React Router routes return 404
- **Solution**: Configure server to serve `index.html` for all routes (see Nginx/Apache configs above)

### Images Not Loading
- **Problem**: Images show broken
- **Solution**: Ensure images are in `public` folder and paths start with `/`

### Build Errors
- **Problem**: Build fails
- **Solution**: 
  - Check Node version (should be 16+)
  - Delete `node_modules` and `package-lock.json`
  - Run `npm install` again
  - Check for TypeScript errors

### Slow Loading
- **Problem**: Site loads slowly
- **Solution**:
  - Optimize images
  - Enable compression
  - Use CDN
  - Check bundle size

## Recommended: Vercel

For React/Vite apps, **Vercel is the easiest option**:
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier is generous
- Auto-deployments from GitHub

Just connect your GitHub repo and you're done! 🚀

