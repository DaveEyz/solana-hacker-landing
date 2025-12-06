# How to Update and Redeploy Your Site

## 🚀 Automatic Redeployment

**Good News!** Since Vercel is connected to your GitHub repository, **any changes you push to GitHub will automatically redeploy your site!**

## 📝 Step-by-Step Update Process

### 1. Make Your Changes Locally

Edit the files you need:
- **Token Info**: Edit `src/App.jsx` → `CONFIG` object (lines 9-23)
- **Styles**: Edit `src/App.jsx` or `src/index.css`
- **Logo**: Add logo to `public/` folder and reference it in `src/App.jsx`

### 2. Test Locally (Optional but Recommended)

```bash
npm run dev
```

Visit http://localhost:5173 to preview your changes.

### 3. Commit and Push to GitHub

```bash
git add .
git commit -m "Update: Changed token info and added logo"
git push origin main
```

### 4. Vercel Auto-Deploys! 🎉

- Vercel detects the push automatically
- Builds your site (takes 1-2 minutes)
- Your site updates live!

You can watch the deployment progress in your Vercel dashboard.

## 📍 Where to Make Changes

### Update Token Information

**File:** `src/App.jsx` (lines 9-23)

```javascript
const CONFIG = {
  ticker: "$YOUR_TOKEN",           // Change token symbol
  ca: "YOUR_CONTRACT_ADDRESS",      // Change contract address
  supply: "1,000,000,000",          // Change supply
  telegram: "https://t.me/your_link", // Change Telegram link
  twitter: "https://x.com/your_link", // Change Twitter link
  pump: "https://pump.fun/your_link"  // Change Pump.fun link
};
```

### Update Styles

**Files:**
- `src/App.jsx` - Component styles (Tailwind classes)
- `src/index.css` - Global styles and animations

**Common style changes:**
- Colors: Change `green-500` to any Tailwind color (e.g., `blue-500`, `purple-500`)
- Font sizes: Adjust text size classes
- Spacing: Modify padding/margin classes

### Add Logo

1. **Add logo file:**
   - Place your logo in `public/logo.png` (or `.svg`, `.jpg`, etc.)

2. **Update App.jsx:**
   - Replace the ASCII art section with your logo
   - See example in the code comments

### Update ASCII Art

**File:** `src/App.jsx` (lines 225-247)

Replace the ASCII art text with your own or use an ASCII art generator:
- https://www.asciiart.eu/
- https://patorjk.com/software/taag/

## 🎨 Quick Style Customization Examples

### Change Color Scheme

Replace all `green-` classes with your color:
- `green-500` → `blue-500` (for blue theme)
- `green-500` → `purple-500` (for purple theme)
- `green-500` → `red-500` (for red theme)

### Change Background

In `src/App.jsx`, find:
```javascript
className="min-h-screen bg-black"
```

Change to:
```javascript
className="min-h-screen bg-gray-900"  // Dark gray
// or
className="min-h-screen bg-slate-900" // Slate
```

## 📸 Adding a Logo

See `LOGO_GUIDE.md` for detailed instructions on adding logos.

## ⚡ Quick Update Workflow

1. Edit files
2. `git add .`
3. `git commit -m "Your update message"`
4. `git push origin main`
5. Wait 1-2 minutes
6. Site is updated! ✨

## 🔍 Check Deployment Status

- Go to https://vercel.com/dashboard
- Click on your project
- See deployment history and status
- Click on a deployment to see build logs

## 💡 Tips

- **Test locally first** with `npm run dev`
- **Commit often** with descriptive messages
- **Check Vercel dashboard** if deployment fails
- **Preview deployments** are created for pull requests

