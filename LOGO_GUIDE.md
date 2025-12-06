# How to Add a Logo to Your Landing Page

## Step 1: Add Logo File

1. Create a `public` folder in your project root (if it doesn't exist)
2. Add your logo file:
   - Recommended: `public/logo.png` or `public/logo.svg`
   - SVG is best for quality and file size
   - PNG works great too (transparent background recommended)

## Step 2: Update App.jsx

Replace the ASCII art section with your logo.

### Option A: Simple Logo Replacement

Find this section in `src/App.jsx` (around line 223-247):

```javascript
{/* ASCII ART PLACEHOLDER */}
<pre className="text-[8px] md:text-[10px] leading-[8px] md:leading-[10px] text-green-400 font-bold select-none whitespace-pre overflow-x-hidden">
{`
   __  __  _____   _____  __  __ 
  |  \\/  ||  __ \\ / ____||  \\/  |
  | \\  / || |__) | (___  | \\  / |
  | |\\/| ||  _  / \\___ \\ | |\\/| |
  | |  | || | \\ \\ ____) || |  | |
  |_|  |_||_|  \\_|_____/ |_|  |_|
                                 
     SYSTEM OVERRIDE: ENABLED
`}
</pre>
```

Replace with:

```javascript
{/* LOGO */}
<div className="flex items-center justify-center">
  <img 
    src="/logo.png" 
    alt={`${CONFIG.ticker} Logo`}
    className="max-w-[200px] md:max-w-[300px] h-auto"
  />
</div>
```

### Option B: Logo with ASCII Art (Side by Side)

Keep both but adjust layout:

```javascript
<div className="flex flex-col md:flex-row items-center gap-4">
  {/* LOGO */}
  <img 
    src="/logo.png" 
    alt={`${CONFIG.ticker} Logo`}
    className="w-32 h-32 md:w-48 md:h-48 object-contain"
  />
  
  {/* ASCII ART (Optional) */}
  <pre className="text-[8px] md:text-[10px] text-green-400">
    {/* Your ASCII art here */}
  </pre>
</div>
```

### Option C: Logo Only (Remove ASCII)

```javascript
{/* LOGO */}
<div className="flex items-center justify-center mb-4">
  <img 
    src="/logo.png" 
    alt={`${CONFIG.ticker} Logo`}
    className="w-48 h-48 md:w-64 md:h-64 object-contain filter drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]"
  />
</div>
```

## Step 3: Style Your Logo (Optional)

Add custom styling to match your theme:

```javascript
<img 
  src="/logo.png" 
  alt={`${CONFIG.ticker} Logo`}
  className="
    max-w-[200px] md:max-w-[300px] 
    h-auto 
    filter 
    drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]
    hover:scale-110 
    transition-transform
  "
/>
```

## Logo File Recommendations

- **Format**: SVG (best) or PNG with transparent background
- **Size**: 512x512px or 1024x1024px (will be scaled down)
- **Background**: Transparent (PNG) or match your theme
- **File size**: Keep under 500KB for fast loading

## Example: Complete Logo Integration

Here's a complete example replacing the ASCII art:

```javascript
<section className="border border-green-500/50 bg-black/80 p-6 md:p-12 rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.2)]">
  <div className="flex flex-col md:flex-row gap-8 items-center">
    
    {/* LOGO */}
    <div className="flex-shrink-0">
      <img 
        src="/logo.png" 
        alt={`${CONFIG.ticker} Logo`}
        className="w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]"
      />
    </div>

    <div className="flex-1 space-y-6 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-green-400 glitch-text">
        <TypingText text={`PROJECT ${CONFIG.ticker}`} />
        <span className="animate-blink">_</span>
      </h1>
      {/* Rest of your content */}
    </div>
  </div>
</section>
```

## After Adding Logo

1. Test locally: `npm run dev`
2. Commit changes: `git add . && git commit -m "Add logo"`
3. Push to GitHub: `git push origin main`
4. Vercel will auto-deploy! 🚀

