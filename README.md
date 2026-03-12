# Muhammad Zeshan Tahir - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful gradient animations and smooth transitions
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 14 App Router
- **SEO Friendly**: Proper meta tags and semantic HTML
- **TypeScript**: Type-safe code throughout the project
- **Tailwind CSS**: Modern utility-first CSS framework

## 📋 Sections

1. **Hero Section**: Professional introduction with animated background
2. **Skills & Expertise**: Showcase of technical skills and technologies
3. **Featured Projects**: Detailed project cards with tech stack and contributions
4. **Why Work With Me**: Key strengths and statistics
5. **Call to Action**: Contact section with social links
6. **Navigation & Footer**: Smooth scrolling navigation and comprehensive footer

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── WhyWorkWithMe.tsx   # Why Work With Me section
│   ├── CallToAction.tsx    # CTA section
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Add your LinkedIn and Loom links

2. **Projects** (`components/Projects.tsx`):
   - Update project details
   - Add actual project links

3. **Contact Information** (`components/CallToAction.tsx` & `components/Footer.tsx`):
   - Update email address
   - Add social media links

4. **Metadata** (`app/layout.tsx`):
   - Update SEO metadata

### Color Scheme

The portfolio uses a gradient color scheme. To customize:
- Edit `tailwind.config.ts` for theme colors
- Modify gradient classes in component files

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

- **Netlify**: Supports Next.js with the Netlify Next.js plugin
- **AWS Amplify**: Deploy with AWS Amplify Console
- **Self-hosted**: Build and deploy to your own server

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

Muhammad Zeshan Tahir
- 📍 Islamabad, Pakistan
- 💼 LinkedIn: [Your LinkedIn URL]
- 📧 Email: your.email@example.com

---

Built with ❤️ using Next.js and Tailwind CSS

