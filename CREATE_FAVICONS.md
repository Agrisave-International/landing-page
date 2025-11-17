# How to Create Favicons from Your Logo

You already have `agrisave-logo.png` - let's turn it into favicons!

## Quick Method (2 minutes)

### Option 1: Online Tool (Easiest)
1. Go to **https://favicon.io/favicon-converter/**
2. Upload `images/agrisave-logo.png`
3. Click "Download"
4. Extract the zip file
5. Copy these files to your root folder:
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png`

### Option 2: RealFaviconGenerator (Best Quality)
1. Go to **https://realfavicongenerator.net/**
2. Upload `images/agrisave-logo.png`
3. Customize if needed (or use defaults)
4. Click "Generate favicons"
5. Download and extract
6. Copy files to root folder

## What You Need

Your site needs these 3 files in the root folder:
```
/favicon-32x32.png    (32x32 pixels)
/favicon-16x16.png    (16x16 pixels)
/apple-touch-icon.png (180x180 pixels)
```

## Already Configured!

The HTML already has the correct links:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

Just add the files and they'll work automatically!

## Manual Method (If you prefer)

If you have image editing software:

1. **Open** `images/agrisave-logo.png` in Photoshop/GIMP/Figma
2. **Resize** to these sizes:
   - 32x32 pixels → Save as `favicon-32x32.png`
   - 16x16 pixels → Save as `favicon-16x16.png`
   - 180x180 pixels → Save as `apple-touch-icon.png`
3. **Export** as PNG with transparency
4. **Move** files to root folder (same level as index.html)

## Tips

- ✅ Keep it simple - your logo works great as-is
- ✅ Transparent background is fine
- ✅ The green and brown colors will stand out in browser tabs
- ✅ Test by opening your site and checking the browser tab

## Verify It Works

After adding favicons:
1. Open `index.html` in browser
2. Look at the browser tab
3. You should see your logo icon!

## Create OG Image Too

While you're at it, create a social sharing image:

1. Go to **https://www.canva.com/**
2. Create "Facebook Post" (1200x630px)
3. Add your logo
4. Add text: "AGRISAVE - Monitor Your Farm From Space with AI"
5. Use green background (#4A7C25)
6. Download as `og-image.jpg`
7. Save to `/images/og-image.jpg`

Done! Your site will look professional when shared on social media.

---

**Time Required:** 2-5 minutes  
**Difficulty:** Easy  
**Tools Needed:** Just a web browser!
