# 🚀 Hacker Terminal Upgrade - Feature Guide

## ✨ New Features Overview

Your landing page has been completely upgraded into an immersive hacker terminal experience!

## 🎨 Visual Upgrades

### 1. **Matrix Rain Effect**
- **Live Canvas Animation**: Green characters fall vertically down the screen
- **Performance Optimized**: Uses HTML5 Canvas for smooth 60fps animation
- **Auto-resizing**: Adapts to any screen size

### 2. **Glitch Effect on Title**
- **Random Triggers**: Glitch effect activates randomly every 3-5 seconds
- **Hover Activation**: Also triggers on hover
- **Multi-layer Effect**: Red and cyan glitch layers for authentic Matrix vibe

### 3. **Refined Color Palette**
- **Deep Black**: `#000000` for true black background
- **Toxic Green**: `#00ff41` for that authentic Matrix green
- **Dim Scanlines**: Reduced opacity for less eye strain
- **Custom Scrollbars**: Green-themed scrollbars matching the aesthetic

## 💻 Interactive CLI (Command Line Interface)

### Location
Fixed at the bottom of the screen with terminal-style input.

### Available Commands

Type these commands in the CLI:

1. **`help`** - Shows all available commands
2. **`buy`** - Opens the buy link in a new tab
3. **`chart`** - Opens the draggable live chart window
4. **`ca`** - Displays the contract address
5. **`roadmap`** - Shows the execution protocol (roadmap)
6. **`clear`** - Clears the terminal history

### How to Use
1. Click on the CLI input at the bottom
2. Type a command and press Enter
3. See the response in the command history above

## 📊 Windowed Features

### 1. **Draggable Chart Modal**
- **Open via**: 
  - Type `chart` in CLI
  - Click "LIVE CHART" button in hero section
  - Click "CHART" in navbar (desktop)
- **Features**:
  - Fully draggable window
  - Contains DexScreener iframe
  - Drag by clicking and holding the header
  - Close with X button

### 2. **System Status Sidebar** (Desktop Only)
- **Location**: Right side of screen (desktop only)
- **Shows**:
  - Liquidity Status (animated progress bar)
  - Burn Percentage (animated progress bar)
  - Total Supply
  - Tax Rate
  - Mint Authority Status
- **Animated Progress Bars**: Shimmer effect on progress bars

## 🔐 Contract Address - Encrypted File Block

### New Features
- **Encrypted Appearance**: Shows as blocks (█) before decryption
- **Decryption Animation**: Text scrambles during decryption
- **Copy on Click**: Automatically copies to clipboard after decryption
- **Visual Feedback**: Shows "DECRYPTED & COPIED" message

### How It Works
1. Click on the encrypted contract address block
2. Watch the decryption animation (text scrambling)
3. Address is automatically copied to clipboard
4. Shows confirmation message

## 📝 Updated Terminology

- **Roadmap** → **Execution Protocol**
- **About** → **Manifesto** (ready for future use)

## 🎯 Configuration

All settings are in the `CONFIG` object at the top of `src/App.jsx`:

```javascript
const CONFIG = {
  ticker: "$HACK",
  ca: "8sF9...YOUR_SOLANA_CA_HERE...k2L9",
  supply: "1,000,000,000",
  telegram: "https://t.me/your_link",
  twitter: "https://x.com/your_link",
  pump: "https://pump.fun/board",
  dexscreener: "https://dexscreener.com/solana/YOUR_PAIR_ADDRESS", // NEW!
  liquidity: 100, // NEW! Percentage
  burn: 50, // NEW! Percentage
  tax: "0/0" // NEW!
};
```

### New Config Options
- **`dexscreener`**: Your DexScreener chart URL
- **`liquidity`**: Liquidity percentage (0-100)
- **`burn`**: Burn percentage (0-100)
- **`tax`**: Tax rate (e.g., "0/0", "5/5")

## 📱 Responsive Design

- **Mobile**: CLI and sidebar stack nicely
- **Tablet**: Optimized layout
- **Desktop**: Full sidebar and all features visible

## 🎨 Customization Tips

### Change Colors
In `src/App.jsx`, replace `#00ff41` with your color:
- Blue: `#00aaff`
- Purple: `#aa00ff`
- Red: `#ff0040`

### Adjust Matrix Rain Speed
In `MatrixRain` component, change the interval:
```javascript
const interval = setInterval(draw, 33); // Lower = faster
```

### Modify Glitch Frequency
In `GlitchText` component:
```javascript
setInterval(() => {
  setGlitch(true);
  setTimeout(() => setGlitch(false), 100);
}, 3000 + Math.random() * 2000); // Adjust timing
```

## 🚀 Deployment

After making changes:
```bash
git add .
git commit -m "Upgrade: Hacker terminal interface"
git push origin main
```

Vercel will auto-deploy! 🎉

## 🐛 Troubleshooting

### Chart not opening?
- Make sure `CONFIG.dexscreener` is set to a valid DexScreener URL
- Check browser console for iframe errors

### CLI not working?
- Make sure you're typing commands in lowercase
- Check that the input field is focused

### Matrix rain too slow/fast?
- Adjust the `setInterval` timing in `MatrixRain` component

## 📚 Component Structure

- `MatrixRain` - Canvas-based matrix effect
- `Scanline` - CRT scanline overlay
- `GlitchText` - Glitch effect wrapper
- `TypingText` - Typewriter effect
- `DecryptionAnimation` - Text scrambling animation
- `DraggableChart` - Draggable chart modal
- `TokenomicsSidebar` - Right sidebar with stats
- `CLI` - Command line interface

All components are modular and easy to customize!

