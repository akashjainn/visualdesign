# Bad Design Portfolio

A fashionable, minimal portfolio microsite showcasing three intentionally bad designs with detailed analysis and process documentation.

## 🎨 Overview

This static website presents a critical analysis of design failures through:
- 3 final design artifacts (poster-sized works)
- Process visuals for each design iteration
- Detailed explanations of why each design fails
- Rubric checklist validation
- Modern, accessible UX with image lightbox functionality

## 📁 Project Structure

```
bad design/
├── index.html              # Home page with gallery grid
├── detail.html             # Detail page template for each design
├── README.md               # This file
├── css/
│   └── styles.css          # All styles (responsive, accessible)
├── js/
│   ├── data.js             # Data-driven design configuration
│   ├── main.js             # Home page functionality
│   └── detail.js           # Detail page functionality
└── assets/
    ├── finals/             # Final design artifacts
    │   ├── bad design 1.png
    │   ├── bad design 2.png
    │   └── bad design 3.png
    └── process/            # Process documentation images
        ├── b1p1.jpg        # Design 1, Process step 1
        ├── b1p2.png        # Design 1, Process step 2
        ├── b1p3.png        # Design 1, Process step 3
        ├── b2p1.png        # Design 2, Process step 1
        ├── b2p2.png        # Design 2, Process step 2
        ├── b2p3.png        # Design 2, Process step 3
        ├── b2p4.png        # Design 2, Process step 4
        ├── b3p1.png        # Design 3, Process step 1
        ├── b3p2.png        # Design 3, Process step 2
        └── b3p3.png        # Design 3, Process step 3
```

## 🚀 Running Locally

### Option 1: Simple HTTP Server (Python)

If you have Python installed:

```bash
# Navigate to the project directory
cd "C:\Users\akash\Documents\bad design"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser to: `http://localhost:8000`

### Option 2: Node.js HTTP Server

If you have Node.js installed:

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to the project directory
cd "C:\Users\akash\Documents\bad design"

# Start server
http-server -p 8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Opening

You can also open `index.html` directly in your browser by double-clicking it, though some features may work better with a local server.

## ✨ Features

### Home Page (index.html)
- **Gallery Grid**: Responsive grid showcasing all 3 designs
- **Hover Effects**: Smooth transitions and image scaling
- **Teaser Text**: Quick "why it's bad" summaries
- **Rubric Checklist**: Visual confirmation of assignment requirements
- **Keyboard Navigation**: Full keyboard support for accessibility

### Detail Pages (detail.html?id=1,2,3)
- **Hero Section**: Large display of final design
- **Analysis Section**: Numbered list with detailed explanations
- **Process Grid**: Auto-renders all process images (b{id}p{step})
- **Image Lightbox**: Click any image to view full-size
- **Graceful Fallbacks**: Missing images handled elegantly

### Design System
- **Typography**: Inter (body) + Playfair Display (headings)
- **Color Palette**: Minimal monochrome with strategic accents
- **Spacing**: Consistent rhythm using CSS custom properties
- **Responsive**: Mobile-first, adapts to all screen sizes
- **Accessible**: WCAG AA contrast, keyboard navigation, screen reader support
- **Motion**: Subtle animations with reduced-motion support

## 🎯 Assignment Rubric Coverage

✅ **3 Visual Artifacts**: All three final designs present  
✅ **Process Visuals**: Multiple process steps for each design  
✅ **Detailed Reasoning**: 5 specific reasons per design with explanations  
✅ **Professional Presentation**: Editorial-style, modern typography  
✅ **Accessibility**: Keyboard navigation, proper contrast, semantic HTML

## 🔧 Customization

To modify the design data or add more designs:

1. Edit `js/data.js` to update:
   - Design titles and descriptions
   - Reason lists and explanations
   - Process step counts

2. Add images following the naming convention:
   - Finals: `bad design {number}.png`
   - Process: `b{designNumber}p{stepNumber}.{jpg|png}`

3. The site will automatically render based on the data structure.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Technical Notes

- **Data-Driven**: Single source of truth in `data.js`
- **No Dependencies**: Pure HTML/CSS/JavaScript (no frameworks)
- **Static**: Can be hosted anywhere (GitHub Pages, Netlify, etc.)
- **Performance**: Optimized images and minimal JavaScript
- **SEO-Friendly**: Semantic HTML with proper meta tags

## 📄 License

This is a student project for educational purposes.

---

**Built with attention to typography, spacing, and user experience.**
