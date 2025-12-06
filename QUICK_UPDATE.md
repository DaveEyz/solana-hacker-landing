# ⚡ Quick Update & Redeploy Commands

## 🎯 The Simple Process

**Every time you make changes, just run these 3 commands:**

```bash
git add .
git commit -m "Your update description"
git push origin main
```

That's it! Vercel will automatically redeploy in 1-2 minutes. 🚀

## 📝 Common Update Scenarios

### Update Token Information

1. Edit `src/App.jsx` → Change the `CONFIG` object (lines 9-23)
2. Run the 3 commands above
3. Done! ✅

### Add/Change Logo

1. Add logo file to `public/logo.png`
2. Edit `src/App.jsx` → Replace ASCII art with logo (see LOGO_GUIDE.md)
3. Run the 3 commands above
4. Done! ✅

### Change Colors/Styles

1. Edit `src/App.jsx` → Change Tailwind color classes (e.g., `green-500` → `blue-500`)
2. Or edit `src/index.css` for global styles
3. Run the 3 commands above
4. Done! ✅

### Update Text Content

1. Edit `src/App.jsx` → Find and change any text
2. Run the 3 commands above
3. Done! ✅

## 🔍 Check Your Deployment

After pushing, check your deployment:
- Go to: https://vercel.com/dashboard
- Click your project
- See the latest deployment status
- Click to view build logs if needed

## 💡 Pro Tips

- **Test first**: Run `npm run dev` to preview changes locally
- **Good commit messages**: Describe what you changed
- **Check Vercel**: If deployment fails, check the build logs

## 📚 More Details

- See `UPDATE_GUIDE.md` for detailed instructions
- See `LOGO_GUIDE.md` for logo setup
- See `DEPLOYMENT.md` for initial setup info

