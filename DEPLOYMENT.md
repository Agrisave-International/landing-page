# AGRISAVE Deployment Guide

## Quick Start

This is a static website that can be deployed to any hosting platform. No build process required for basic deployment.

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

**Why Netlify:**
- Free tier available
- Automatic HTTPS
- Form handling built-in
- Easy continuous deployment from Git
- CDN included

**Steps:**
1. Create account at netlify.com
2. Connect your Git repository (GitHub, GitLab, Bitbucket)
3. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
4. Deploy!

**Form Setup:**
- Forms already configured with `data-netlify="true"`
- View submissions in Netlify dashboard
- Set up email notifications in Settings → Forms

**Custom Domain:**
1. Go to Domain settings
2. Add custom domain (agrisave.com)
3. Follow DNS configuration instructions
4. HTTPS automatically enabled

### Option 2: Vercel

**Why Vercel:**
- Excellent performance
- Free tier available
- Great for Next.js if you upgrade later
- Easy Git integration

**Steps:**
1. Create account at vercel.com
2. Import Git repository
3. Deploy (automatic detection)
4. Add custom domain in project settings

**Configuration:**
- `vercel.json` already included
- Handles redirects and headers
- Automatic HTTPS

### Option 3: GitHub Pages

**Why GitHub Pages:**
- Completely free
- Simple for static sites
- Good for open source projects

**Steps:**
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main`)
4. Select root folder
5. Save and wait for deployment

**Custom Domain:**
1. Add CNAME file with your domain
2. Configure DNS at your registrar
3. Enable HTTPS in GitHub settings

### Option 4: AWS S3 + CloudFront

**Why AWS:**
- Enterprise-grade
- Highly scalable
- Full control
- Pay-as-you-go pricing

**Steps:**
1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Create CloudFront distribution
5. Configure custom domain with Route 53
6. Enable HTTPS with ACM certificate

**Cost Estimate:**
- ~$1-5/month for small traffic
- Scales with usage

### Option 5: Traditional Web Hosting

**Providers:**
- Bluehost
- SiteGround
- HostGator
- DreamHost

**Steps:**
1. Purchase hosting plan
2. Upload files via FTP/SFTP
3. Configure domain
4. Enable HTTPS (usually free with Let's Encrypt)

## Pre-Deployment Checklist

### Required Updates
- [ ] Replace Google Analytics ID in index.html
- [ ] Replace Microsoft Clarity ID in index.html
- [ ] Update all placeholder URLs (demo video, Calendly, etc.)
- [ ] Add real images to `/images/` folder
- [ ] Update email addresses (hello@, support@, team@)
- [ ] Configure form backend or use Netlify forms
- [ ] Update canonical URL to your actual domain
- [ ] Update OG image URLs to your actual domain

### Optional Optimizations
- [ ] Minify CSS and JS (use package.json scripts)
- [ ] Compress images to WebP format
- [ ] Set up CDN (CloudFlare)
- [ ] Configure email service (SendGrid, Mailchimp)
- [ ] Set up monitoring (UptimeRobot, Pingdom)

## DNS Configuration

### Required DNS Records

**For Netlify:**
```
A     @     75.2.60.5
CNAME www   your-site.netlify.app
```

**For Vercel:**
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

**For CloudFlare (recommended):**
1. Add your domain to CloudFlare
2. Update nameservers at registrar
3. CloudFlare handles DNS automatically
4. Enable proxy (orange cloud) for DDoS protection

### Email Configuration
If using custom domain for email:
```
MX    @    10 mx1.your-email-provider.com
MX    @    20 mx2.your-email-provider.com
TXT   @    "v=spf1 include:_spf.your-email-provider.com ~all"
```

## Post-Deployment

### Immediate Tasks
1. Test website on multiple devices
2. Verify all forms work
3. Check analytics tracking
4. Test all links
5. Verify HTTPS is working
6. Submit sitemap to Google Search Console

### Week 1 Tasks
1. Monitor analytics daily
2. Set up email notifications for form submissions
3. Configure backup system
4. Set up uptime monitoring
5. Test page speed (aim for <3s)

### Ongoing Maintenance
- Weekly: Check analytics, respond to inquiries
- Monthly: Update content, review performance
- Quarterly: Security updates, content refresh

## Environment Variables

If using a backend for forms, set these environment variables:

```bash
# Email Service (SendGrid example)
SENDGRID_API_KEY=your_api_key_here
FROM_EMAIL=hello@agrisave.com

# Analytics
GA_TRACKING_ID=G-XXXXXXXXXX
CLARITY_PROJECT_ID=XXXXXXXXXX

# Form Webhook (optional)
FORM_WEBHOOK_URL=https://hooks.zapier.com/...
```

## Monitoring Setup

### Uptime Monitoring
**UptimeRobot (Free):**
1. Sign up at uptimerobot.com
2. Add monitor for https://agrisave.com
3. Set check interval (5 minutes)
4. Configure email alerts

### Performance Monitoring
**Google PageSpeed Insights:**
- Test weekly: https://pagespeed.web.dev/
- Target: 90+ score on all metrics

**WebPageTest:**
- Test monthly: https://www.webpagetest.org/
- Test from multiple locations

### Error Tracking
**Sentry (Optional):**
```html
<script src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: 'YOUR_DSN_HERE' });
</script>
```

## Backup Strategy

### Automated Backups
1. **Git Repository**: Primary backup (code)
2. **Hosting Provider**: Usually includes automatic backups
3. **Manual Backups**: Download full site monthly

### What to Backup
- All HTML/CSS/JS files
- Images and assets
- Form submissions data
- Analytics data exports
- DNS configuration

## Rollback Plan

If something goes wrong:

1. **Netlify/Vercel**: 
   - Go to Deployments
   - Click on previous working deployment
   - Click "Publish deploy"

2. **GitHub Pages**:
   - Revert commit in Git
   - Push to trigger redeployment

3. **Traditional Hosting**:
   - Upload backup files via FTP
   - Restore from hosting provider backup

## Security Best Practices

### Headers (Already Configured)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Additional Security
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Set up CloudFlare for DDoS protection
- [ ] Configure CSP (Content Security Policy)
- [ ] Regular security scans
- [ ] Keep dependencies updated

### Form Security
- [ ] Add CAPTCHA to prevent spam (reCAPTCHA v3)
- [ ] Rate limiting on form submissions
- [ ] Email verification for signups
- [ ] Honeypot fields for bot detection

## Cost Estimates

### Free Tier (Recommended for Launch)
- **Hosting**: Netlify/Vercel (Free)
- **Domain**: $10-15/year
- **Email**: Google Workspace ($6/user/month) or Zoho (Free tier)
- **Total**: ~$10-15/year + $0-72/year for email

### Paid Tier (For Scale)
- **Hosting**: Netlify Pro ($19/month) or AWS (~$5-20/month)
- **Domain**: $10-15/year
- **Email**: Google Workspace ($6/user/month)
- **CDN**: CloudFlare Pro ($20/month)
- **Analytics**: Free (GA4, Clarity)
- **Total**: ~$50-100/month

## Support Resources

### Documentation
- Netlify Docs: docs.netlify.com
- Vercel Docs: vercel.com/docs
- GitHub Pages: docs.github.com/pages

### Community
- Netlify Community: community.netlify.com
- Vercel Discord: vercel.com/discord
- Stack Overflow: stackoverflow.com

### Troubleshooting
- Check browser console for JavaScript errors
- Verify DNS propagation: whatsmydns.net
- Test SSL: ssllabs.com/ssltest
- Check uptime: downforeveryoneorjustme.com

## Next Steps After Deployment

1. **Set up analytics** - Verify tracking works
2. **Submit to search engines** - Google Search Console, Bing
3. **Social media** - Share launch announcement
4. **Email list** - Notify existing contacts
5. **Monitor** - Watch for issues first 48 hours
6. **Iterate** - Collect feedback and improve

## Emergency Contacts

Keep these handy:
- **Hosting Support**: [Provider support link]
- **Domain Registrar**: [Registrar support]
- **DNS Provider**: [DNS support]
- **Developer**: [Your contact]
- **Backup Location**: [Where backups are stored]
