# TaxSonic Global Website

A professional, boardroom-grade website for TaxSonic Global - premium regulatory risk, tax intelligence, and governance advisory services.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Getting Started

1. **Open in VS Code**
   - Download or clone this project
   - Open the folder in VS Code

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the website**
   - Open your browser to `http://localhost:5173`
   - The site will auto-reload when you make changes

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   ├── sections/        # Homepage sections
│   ├── ui/              # Reusable UI components
│   └── SEO.tsx          # SEO meta tags component
├── pages/
│   ├── Index.tsx        # Home page
│   ├── About.tsx        # About Us page
│   ├── Services.tsx     # Services index
│   ├── Industries.tsx   # Industries we serve
│   ├── Exclusions.tsx   # What we don't do
│   ├── Contact.tsx      # Contact page
│   └── services/        # Individual service pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── App.tsx              # Main app with routing
```

## 📄 Pages Included

1. **Home** - Hero, value proposition, services preview, CTA
2. **About Us** - Company philosophy, experience, approach
3. **Services** - Index of all 6 advisory services
4. **Service Details** - Individual pages for each service:
   - Regulatory Risk & Governance Advisory
   - Strategic Tax & Entity Structuring
   - Finance, Compliance & Control Architecture
   - Regulatory & Financial Risk Diagnostic
   - Forensic Readiness & Internal Control Advisory
   - Growth, Capital & IPO Readiness
5. **Industries** - Target industries and their challenges
6. **What We Don't Do** - Clear exclusions and boundaries
7. **Contact** - Contact form and information

## 🎨 Design

- **Colors**: White background, charcoal text (#1a1a2e), warm gold accents (#C9A962)
- **Typography**: Cormorant Garamond (headings), Inter (body)
- **Style**: Minimalist, boardroom-grade, professional

## 🌐 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

That's it! Your site will be live in minutes.

## 📧 Contact

- Email: taxsonicglobal@gmail.com
- Advisory by appointment only

## 📝 Customization

### Logo
Replace the logo placeholder in `Header.tsx` and `Footer.tsx` with your actual logo image at `/public/logo.png`.

### Colors
Edit `src/index.css` to adjust the color palette:
- `--gold`: Main accent color
- `--charcoal`: Primary text/dark backgrounds
- `--cream`: Light background sections

### Content
All page content is in the respective page files under `src/pages/`.

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Helmet Async** - SEO meta tags
- **shadcn/ui** - UI component library
