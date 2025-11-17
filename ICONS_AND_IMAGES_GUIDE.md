# Icons and Images Guide for AGRISAVE

## ✅ Icons Implemented

All emojis have been replaced with clean SVG icons using Feather Icons style.

### Problem Section Icons
1. **Can't See Everything** - Eye with slash (visibility off)
2. **Expensive Monitoring** - Dollar sign
3. **React Too Late** - Clock

### Feature Section Icons
1. **See Crop Problems Early** - Satellite/Sun rays
2. **Optimize Water & Inputs** - Water droplet
3. **Predict Yields Accurately** - Bar chart
4. **Monitor From Smartphone** - Mobile phone

### Testimonial Section Icons
- User profile icons for all three farmers

## Icon Style

- **Type:** SVG line icons (Feather Icons style)
- **Size:** 48x48px for features, 64x64px for testimonials
- **Color:** Inherits from parent (var(--secondary-green))
- **Stroke Width:** 2px
- **Style:** Minimal, clean, professional

## Benefits of SVG Icons

✅ **Scalable** - Look sharp on all screen sizes  
✅ **Lightweight** - Faster page load  
✅ **Customizable** - Easy to change colors via CSS  
✅ **Accessible** - Work on all devices and browsers  
✅ **No emoji issues** - No broken characters or missing fonts  

## Images Still Needed

See `IMAGE_GENERATION_PROMPTS.md` for detailed prompts to generate these images:

### Priority 1 (Essential)
- [ ] `satellite-farm-monitoring.webp` - Hero section image
- [ ] `og-image.jpg` - Social sharing (1200x630px)
- [ ] `twitter-image.jpg` - Twitter card (1200x600px)
- [ ] `favicon-32x32.png` - Browser favicon
- [ ] `favicon-16x16.png` - Small favicon
- [ ] `apple-touch-icon.png` - iOS icon (180x180px)

### Priority 2 (Nice to Have)
- [ ] `crop-health-ndvi-map.webp` - Feature showcase
- [ ] `soil-moisture-map.webp` - Feature showcase
- [ ] `yield-prediction-dashboard.webp` - Feature showcase
- [ ] `mobile-app-interface.webp` - Feature showcase

### Priority 3 (Optional)
- [ ] `farmer-john-iowa.webp` - Testimonial photo
- [ ] `farmer-sarah-california.webp` - Testimonial photo
- [ ] `farmer-marcus-kansas.webp` - Testimonial photo

## Current Images

✅ **agrisave-logo.png** - Logo added!
- Features letter "A" with green leaves and brown soil
- Used in navigation bar
- Used as site favicon/icon
- Properly styled with responsive sizing

✅ **brand-image1.jpg** - Hero image added!
- Currently displayed in hero section
- Optimized for web display
- Responsive and mobile-friendly

## How to Add Images

1. **Generate images** using prompts from `IMAGE_GENERATION_PROMPTS.md`
2. **Optimize images:**
   ```bash
   # Convert to WebP
   cwebp -q 80 input.jpg -o output.webp
   
   # Or use online tools
   # - TinyPNG.com
   # - Squoosh.app
   ```
3. **Save to `/images/` folder** with descriptive names
4. **Update references** in HTML if needed

## Image Status

The site currently has:
- ✅ Logo (agrisave-logo.png) - Working
- ✅ Hero image (brand-image1.jpg) - Working
- ⚠️ OG images - Need to be created for social sharing
- ⚠️ Favicons - Need to be created

## Quick Start

To get the site looking professional quickly:

1. **Create hero image** (most visible)
2. **Create favicons** (browser tab branding)
3. **Create OG image** (social media sharing)
4. Other images can be added gradually

## Testing

After adding images, test:
- [ ] Images load on all pages
- [ ] Images are optimized (<200KB each)
- [ ] Alt text is descriptive
- [ ] Images look good on mobile
- [ ] Social sharing preview works (Facebook, Twitter, LinkedIn)

## Resources

- **AI Image Generators:** Midjourney, DALL-E 3, Stable Diffusion
- **Stock Photos:** Unsplash, Pexels, iStock
- **Optimization Tools:** TinyPNG, Squoosh, ImageOptim
- **Icon Libraries:** Feather Icons, Heroicons, Lucide

## Need More Icons?

If you need additional icons, use this pattern:

```html
<div class="icon-class">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <!-- SVG path here -->
    </svg>
</div>
```

Get SVG code from:
- **Feather Icons:** feathericons.com
- **Heroicons:** heroicons.com
- **Lucide:** lucide.dev
