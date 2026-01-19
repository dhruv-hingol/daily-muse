# GitHub Pages Deployment Guide

## ✅ Configuration Complete!

Your Next.js app is now configured for GitHub Pages deployment.

## 📁 Files Created/Modified:

1. **next.config.mjs** - Configured for static export
2. **.github/workflows/deploy.yml** - GitHub Actions workflow
3. **public/.nojekyll** - Prevents Jekyll processing
4. **package.json** - Added export script

## 🚀 Deployment Instructions:

### 1. Enable GitHub Pages in Repository Settings:

- Go to your repository on GitHub
- Navigate to **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**

### 2. Push Your Code:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. GitHub Actions Will Automatically:

- Install dependencies
- Build your Next.js app
- Deploy to GitHub Pages

### 4. Access Your Site:

Your site will be available at:
**https://dhruv-hingol.github.io/daily-muse/**

## 🔧 Configuration Details:

- **Static Export**: Enabled with `output: 'export'`
- **Base Path**: Set to `/daily-muse` for GitHub Pages subdomain
- **Image Optimization**: Disabled (required for static export)
- **No Jekyll**: `.nojekyll` file prevents GitHub from processing with Jekyll

## 🧪 Test Build Locally:

```bash
yarn build
```

This will create an `out` directory with your static files.

## 📝 Important Notes:

1. Every push to `main` branch triggers automatic deployment
2. Build time: ~2-3 minutes
3. API routes won't work in static export (they're serverless functions)
4. You might need to use environment variables for API keys

## 🎯 Next Steps:

If you need to use API routes, consider:

- Using **Vercel** (recommended for Next.js)
- Or **Netlify** (supports serverless functions)
- Or keep API logic client-side with CORS-enabled endpoints
