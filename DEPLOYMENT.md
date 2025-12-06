# Deployment Guide - GitHub & Vercel

## Step 1: Push to GitHub

### If Git is installed:

1. **Initialize Git repository:**
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Create initial commit:**
   ```bash
   git commit -m "Initial commit: Hacker-themed Solana token landing page"
   ```

4. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Choose a repository name (e.g., `solana-hacker-landing`)
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

5. **Connect and push to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### If Git is NOT installed:

1. **Install Git for Windows:**
   - Download from: https://git-scm.com/download/win
   - Install with default settings
   - Restart your terminal/PowerShell

2. **Then follow the steps above**

## Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import your project:**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find and click "Import" next to your repository

3. **Configure deployment:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
   - **Install Command:** `npm install` (should be auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)

5. **Your site is live!**
   - You'll get a URL like: `your-project-name.vercel.app`
   - Every push to the main branch will automatically deploy

## Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Troubleshooting

- **Build fails?** Check the build logs in Vercel dashboard
- **Styles not working?** Make sure Tailwind CSS is properly configured (already done)
- **Need to update?** Just push new commits to GitHub, Vercel will auto-deploy

