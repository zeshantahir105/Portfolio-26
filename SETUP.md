# Quick Setup Guide

## 🚀 Getting Started

Since npm may not be available in your current environment, here are alternative ways to run the project:

### Option 1: Install Node.js and npm

1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. Verify installation:
   ```bash
   node --version
   npm --version
   ```
3. Run the project:
   ```bash
   npm install
   npm run dev
   ```

### Option 2: Use VS Code with Terminal

1. Open the project in VS Code
2. Open a new terminal (Terminal → New Terminal)
3. Make sure Node.js is installed
4. Run:
   ```bash
   npm install
   npm run dev
   ```

### Option 3: Use Git Bash or WSL

If you're on Windows, you can use:
- **Git Bash**: Install Git for Windows
- **WSL**: Windows Subsystem for Linux

## 📝 Customization Checklist

Before deploying, update the following:

### 1. Personal Information
- [ ] Update name and title in `components/Hero.tsx`
- [ ] Update description in `components/Hero.tsx`
- [ ] Update location in `components/Hero.tsx`

### 2. Links
- [ ] Add LinkedIn URL in `components/Hero.tsx`
- [ ] Add Loom/Demo URL in `components/Hero.tsx`
- [ ] Add LinkedIn URL in `components/CallToAction.tsx`
- [ ] Add email in `components/CallToAction.tsx`
- [ ] Add email in `components/Footer.tsx`
- [ ] Add LinkedIn URL in `components/Footer.tsx`

### 3. Projects
- [ ] Verify all project URLs in `components/Projects.tsx`
- [ ] Add actual project links (replace '#' placeholders)
- [ ] Update project descriptions if needed

### 4. SEO & Metadata
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your name in metadata
- [ ] Update description

### 5. Contact Information
- [ ] Update email address throughout the site
- [ ] Add social media links

## 🎨 Styling Tips

### Change Color Scheme
Edit `tailwind.config.ts` to change the primary colors.

### Add More Animations
The project uses Tailwind CSS animations. You can add more in `globals.css`.

### Responsive Design
All components are already responsive, but you can adjust breakpoints in `tailwind.config.ts`.

## 🐛 Common Issues

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Module Not Found
Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Check `tsconfig.json` and ensure all types are correct.

## 📦 Deploy

### Quick Deploy to Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Environment Variables
If you add API keys or secrets, create `.env.local`:
```
NEXT_PUBLIC_EMAIL=your@email.com
```

## 🎉 You're Ready!

Your portfolio is now set up and ready to customize. Good luck!

