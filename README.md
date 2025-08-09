# Alexander Shropshire's Personal Portfolio

A modern, responsive portfolio website built with Next.js and Once UI. Features a clean design, MDX-based content system, and optimized for performance and SEO.

## 🌐 Live Website

**Visit:** [shropshire.vercel.app](https://shropshire.vercel.app)

## 🚀 What This App Does

### Core Features
- **Personal Portfolio** - Showcase projects, blog posts, and professional experience
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **MDX Content System** - Write projects and blog posts in Markdown with React components
- **SEO Optimized** - Automatic meta tags, Open Graph images, and sitemap generation
- **Performance Focused** - Fast loading with Next.js optimizations
- **Contact Integration** - Built-in contact form with Supabase database

### Pages & Sections
- **Home** - Personal introduction and featured content
- **About** - Professional experience, education, skills, and recommendations
- **Projects** - Showcase of technical projects with images and descriptions
- **Blog** - Technical writing and insights
- **Gallery** - Visual portfolio of work
- **Contact** - Integrated contact form for professional outreach

## 🛠️ Technology Stack

- **Framework:** Next.js 15.4.6 (React 19)
- **UI System:** Once UI Core
- **Styling:** CSS Modules + Once UI Design System
- **Content:** MDX for projects and blog posts
- **Deployment:** Vercel
- **Contact Form:** Supabase + Row Level Security
- **Icons:** Once UI Icon Library
- **TypeScript:** Full type safety

## 📁 Project Structure

```
magic-portfolio/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog posts
│   │   ├── projects/          # Project showcase
│   │   ├── gallery/           # Image gallery
│   │   └── api/               # API routes (contact form)
│   ├── components/            # Reusable React components
│   ├── resources/             # Configuration and content
│   │   ├── content.js         # Main content configuration
│   │   └── once-ui.config.js  # UI system configuration
│   └── utils/                 # Utility functions
├── public/                    # Static assets
│   ├── images/               # Images and photos
│   └── favicon-*.png         # Favicon files
└── package.json              # Dependencies and scripts
```

## 🎯 How to Use This as a Template

### 1. Clone the Repository
```bash
git clone https://github.com/as6140/personal-website.git
cd personal-website/magic-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Your Content
Edit `src/resources/content.js` to customize:
- **Personal Information** - Name, role, avatar, location
- **Social Links** - LinkedIn, GitHub, email, etc.
- **Navigation** - Enable/disable pages
- **Content** - About sections, skills, experience

### 4. Add Your Projects
Create new `.mdx` files in `src/app/projects/`:
```mdx
---
title: "Your Project Title"
publishedAt: "2024-01-01"
summary: "Brief project description"
images:
  - "/images/projects/your-project/image1.jpg"
  - "/images/projects/your-project/image2.jpg"
team:
  - name: "Your Name"
    role: "Your Role"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/yourprofile"
---

## Overview
Your project description here...

## Technologies Used
- Technology 1
- Technology 2
```

### 5. Add Your Blog Posts
Create new `.mdx` files in `src/app/blog/posts/`:
```mdx
---
title: "Your Blog Post Title"
publishedAt: "2024-01-01"
summary: "Brief post description"
---

## Introduction
Your blog post content here...
```

### 6. Customize Styling
- **Theme:** Edit `src/resources/once-ui.config.js` for colors, fonts, and layout
- **Components:** Modify components in `src/components/`
- **CSS:** Add custom styles in `src/resources/custom.css`

### 7. Set Up Contact Form (Optional)
1. Create Google Apps Script from `google-apps-script.js`
2. Deploy as web app
3. Update the script URL in `src/components/MailingList.tsx`

### 8. Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

## 🔧 Key Configuration Files

### `src/resources/content.js`
- **Personal info** - Name, role, avatar, location
- **Social links** - LinkedIn, GitHub, email
- **Navigation** - Page visibility and structure
- **Content sections** - About, experience, skills

### `src/resources/once-ui.config.js`
- **Theme settings** - Colors, fonts, layout
- **Route configuration** - Page paths and protection
- **Display options** - Features to show/hide

### `src/app/layout.tsx`
- **Global layout** - Header, footer, navigation
- **Meta tags** - SEO and social sharing
- **Theme provider** - Dark/light mode

## 🎨 Customization Options

### Design System
- **Colors:** 12 brand colors + neutral palette
- **Typography:** Custom font families and sizes
- **Spacing:** Consistent spacing scale
- **Components:** 50+ pre-built components

### Content Management
- **MDX Support:** Write content with React components
- **Dynamic Routing:** Automatic page generation
- **Image Optimization:** Automatic optimization and lazy loading
- **SEO:** Automatic meta tags and structured data

### Performance
- **Static Generation:** Pre-rendered pages for speed
- **Image Optimization:** WebP format and responsive images
- **Code Splitting:** Automatic bundle optimization
- **Caching:** Aggressive caching strategies

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect GitHub** repository to Vercel
2. **Configure build settings:**
   - Framework: Next.js
   - Root Directory: `/` (or `magic-portfolio` if in subfolder)
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Add environment variables** (if needed)
4. **Deploy**

### Other Platforms
- **Netlify:** Compatible with Next.js
- **Railway:** Easy deployment option
- **AWS/GCP:** Advanced deployment options

## 📊 Performance Metrics

- **First Load JS:** 101-340 kB per page
- **Build Time:** ~30 seconds
- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- **Core Web Vitals:** Optimized for all metrics

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- **Fork** for your own use
- **Submit issues** for bugs or improvements
- **Create pull requests** for enhancements

## 📄 License

This project is based on the Magic Portfolio template by Once UI.
- **Original License:** CC BY-NC 4.0
- **Attribution:** Required for commercial use
- **Modifications:** Allowed for personal use

## 🙏 Acknowledgments

- **Once UI** - Design system and components
- **Next.js** - React framework
- **Vercel** - Deployment platform
- **MDX** - Content authoring

---

**Built with ❤️ using Next.js and Once UI**