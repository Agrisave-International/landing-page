# Cloudflare Pages - Quick Start Guide

## 🚀 Deploy in 10 Minutes

### Method 1: Via GitHub (Recommended)

#### Step 1: Push to GitHub (3 minutes)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial AGRISAVE landing page"

# Add GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/agrisave.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Cloudflare (5 minutes)

1. Go to **https://dash.cloudflare.com/**
2. Click **"Workers & Pages"** (left sidebar)
3. Click **"Create application"**
4. Click **"Pages"** tab
5. Click **"Connect to Git"**
6. Select **GitHub**
7. Authorize Cloudflare
8. Select **"agrisave"** repository
9. Click **"Begin setup"**

**Build Configuration:**
- Project name: `agrisave`
- Production branch: `main`
- Framework preset: **None**
- Build command: (leave empty)
- Build output directory: `/` (root)

10. Click **"Save and Deploy"**

✅ **Done!** Your site is live at: `https://agrisave.pages.dev`

---

### Method 2: Direct Upload (Quick Test)

#### For Quick Testing Without GitHub:

1. Go to **https://dash.cloudflare.com/**
2. Click **"Workers & Pages"**
3. Click **"Create application"**
4. Click **"Pages"** tab
5. Click **"Upload assets"**
6. Drag and drop your entire project folder
7. Click **"Deploy site"**

✅ **Done!** Instant deployment!

---

## After Deployment

### 1. Set Up Forms (Required)

Your forms won't work without a backend. Choose one:

**Option A: Formspree (Easiest)**
1. Go to https://formspree.io/
2. Sign up (free)
3. Create new form
4. Copy your form endpoint
5. Update `index.html`:

```html
<!-- Find line ~510, replace: -->
<form id="waitlist-form" name="waitlist" method="POST" data-netlify="true">

<!-- With: -->
<form id="waitlist-form" action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

**Option B: Web3Forms (Free Forever)**
1. Go to https://web3forms.com/
2. Enter your email
3. Get access key
4. Update `index.html`:

```html
<form id="waitlist-form" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR-ACCESS-KEY">
    <!-- rest of form -->
</form>
```

### 2. Update Analytics IDs

In `index.html`:

```javascript
// Line ~60 - Google Analytics
gtag('config', 'G-YOUR-ACTUAL-ID');

// Line ~70 - Microsoft Clarity
"clarity", "script", "YOUR-ACTUAL-ID"
```

### 3. Add Custom Domain (Optional)

1. In Cloudflare Pages dashboard
2. Go to **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Enter your domain
5. Follow DNS instructions

---

## Troubleshooting

### "Could not find wrangler.toml"
- **Ignore this!** You don't need it for static sites
- Wrangler is for Workers, not Pages
- Deploy via dashboard (not CLI)

### Site not loading?
- Wait 2-3 minutes for deployment
- Check build logs in dashboard
- Verify all files were pushed to GitHub

### Forms not working?
- Did you set up Formspree or Web3Forms?
- Check form action URL is correct
- Test form submission

### Images not loading?
- Verify images are in `/images/` folder
- Check file paths in HTML
- Clear browser cache

---

## Quick Commands

```bash
# Update your site
git add .
git commit -m "Update content"
git push

# Cloudflare will automatically redeploy!
```

---

## What You Get (Free)

- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ Custom domains
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Global CDN (200+ locations)
- ✅ Web Analytics
- ✅ 500 builds/month

---

## Support

- **Dashboard**: https://dash.cloudflare.com/
- **Docs**: https://developers.cloudflare.com/pages/
- **Community**: https://community.cloudflare.com/

---

## Summary

1. ✅ Push to GitHub
2. ✅ Connect to Cloudflare Pages
3. ✅ Deploy (automatic)
4. ✅ Set up forms
5. ✅ Launch! 🎉

**Your site will be live in 10 minutes!**
