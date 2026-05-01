# AGENTOS Landing Page

A professional, high-converting landing page for AGENTOS - the operating system for AI employees.

## ✨ Features

- **Modern Design** - Dark theme with sage green accents
- **Fully Responsive** - Mobile-optimized design
- **Interactive Animations** - Smooth transitions and hover effects
- **Demo Request Form** - Integrated lead capture with validation
- **GitHub Pages Ready** - Auto-deployed on every push
- **Performance Optimized** - Fast loading with CSS animations
- **Accessibility Focused** - WCAG compliant with ARIA labels

## 🚀 Quick Start

### Deploy to GitHub Pages
1. This repo is already set up for GitHub Pages
2. Go to Settings → Pages
3. Ensure `main` branch is selected as source
4. Your site will be live at: `https://chetansatange29-star.github.io/`

### Auto-Deployment
Every push to `main` automatically deploys via `.github/workflows/deploy.yml`

## 📝 Form Submission

The landing page includes a professional demo request form. To enable lead capture:

1. **Choose an integration method:**
   - 🔹 PHP Backend (own server)
   - 🔹 Formspree (easiest, no backend)
   - 🔹 Firebase (scalable, free)

2. **See `FORM-INTEGRATION.md`** for detailed setup instructions

3. **Test the form** at your live site

## 🎨 Customization

### Edit Page Content
- Update copy in `index.html` sections
- Change pricing in the pricing section
- Modify agent descriptions

### Change Colors
Edit CSS variables at the top of `index.html`:
```css
--accent: #7FA99B;      /* Main accent color */
--bg: #0F1115;          /* Background */
--text: #EDEDED;        /* Text color */
```

### Change Pricing
Update lines ~620 in `index.html`:
```html
<div class="amount">₹4,999 <small>/ month / agent</small></div>
```

## 📊 Page Structure

```
Hero Section
  ↓
Problem Section
  ↓
How It Works (4 Steps)
  ↓
Social Proof
  ↓
Why Choose AGENTOS
  ↓
Pricing (2 Plans)
  ↓
Final CTA
  ↓
Footer
```

## 🔗 Sections

- **#agents** - AI Agent Types
- **#how** - How It Works Process
- **#pricing** - Pricing Plans
- **#demo** - Final Demo CTA

## 📱 Mobile Experience

- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly buttons
- Optimized form size
- Fast load times

## 🔐 Security

✅ HTTPS via GitHub Pages  
✅ Input validation (client & server)  
✅ Email validation  
✅ CORS protection  

## 📈 Performance

- Inline CSS (single HTTP request)
- Lightweight JavaScript
- GPU-accelerated animations
- Optimized images
- Fast Time to Interactive (TTI)

## 🛠️ Tech Stack

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript (no dependencies)
- GitHub Pages (deployment)

## 📞 Support

- See `FORM-INTEGRATION.md` for form setup help
- Check `.github/workflows/deploy.yml` for deployment details
- Test form at your live site

## 📝 File Guide

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `api/submit-demo.php` | PHP form handler (optional) |
| `config/firebase-config.js` | Firebase config (optional) |
| `.github/workflows/deploy.yml` | Auto-deployment |
| `FORM-INTEGRATION.md` | Form setup guide |

## 🎯 Next Steps

1. ✅ Deploy to GitHub Pages
2. 📝 Choose form integration method
3. 🔧 Configure based on FORM-INTEGRATION.md
4. 🧪 Test form submission
5. 📊 Monitor incoming leads

## 📄 License

Created for AGENTOS. Feel free to modify as needed.

---

**Site:** https://chetansatange29-star.github.io/  
**Status:** 🟢 Live and Ready  
**Last Updated:** 2026-05-01
