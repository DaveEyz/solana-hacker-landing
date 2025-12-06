# Deploy to Vercel - Quick Guide

## Step 1: Go to Vercel
Visit: https://vercel.com

## Step 2: Sign in with GitHub
- Click "Sign in" or "Log in"
- Choose "Continue with GitHub"
- Authorize Vercel to access your GitHub account

## Step 3: Import Your Project
1. Click "Add New..." button (top right)
2. Select "Project"
3. You'll see your GitHub repositories
4. Find "solana-hacker-landing" and click "Import"

## Step 4: Configure (Auto-detected)
Vercel will automatically detect:
- **Framework Preset:** Vite ✅
- **Root Directory:** `./` ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅
- **Install Command:** `npm install` ✅

**Just click "Deploy" - no changes needed!**

## Step 5: Wait for Deployment
- Build will take 1-2 minutes
- You'll see the build logs in real-time
- Once complete, you'll get a live URL!

## Your Site Will Be Live At:
`solana-hacker-landing.vercel.app` (or similar)

## Automatic Deployments
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- No manual deployment needed!

## Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS instructions

