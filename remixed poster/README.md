# Principles of Visual Design Portfolio

A professional, multi-assignment design portfolio website showcasing your design process, reasoning, and final products.

## 📋 Project Structure

```
portfolio/
├── index.html                      # Homepage - portfolio overview
├── assignment-1-chungking.html    # Chungking Express assignment page
├── styles.css                      # Unified stylesheet
├── script.js                       # Dynamic content loading
├── README.md                       # This file
├── CUSTOMIZATION_TEMPLATE.md      # Design thinking worksheet
└── images/                         # Project images
    ├── original-chungking-express-poster.jpg
    ├── remixed-chungking-express-poster.jpg
    ├── ckp1.jpg
    ├── ckp2.jpg
    ├── ckp3.jpg
    ├── ckp4.jpg
    └── ckp5.jpg
```

## 🚀 Quick Start

### 1. **Image Organization**

Create an `images` folder and add your project assets:

```
images/
├── original-chungking-express-poster.jpg    (Original poster)
├── remixed-chungking-express-poster.jpg     (Final remix)
├── ckp1.jpg                                  (Process step 1)
├── ckp2.jpg                                  (Process step 2)
├── ckp3.jpg                                  (Process step 3)
├── ckp4.jpg                                  (Process step 4)
├── ckp5.jpg                                  (Process step 5)
```

**Image Specs:**
- Format: JPG or PNG
- Resolution: 72-150ppi for web
- Size: Optimize under 2MB per image
- Dimensions: Match your canvas specifications

### 2. **Customize the Homepage**

Edit `index.html`:

**Section 1: About (Line ~32-37)**
- Update the portfolio description to reflect your course focus

**Section 2: Assignment Cards (Line ~41-60)**
- Update the assignment title, description, and preview image
- Add more cards by duplicating the card structure

### 3. **Customize the Assignment Page**

Edit `assignment-1-chungking.html`:

**Key Sections to Customize:**

1. **Assignment Brief** (Line ~24-29)
   - Update with your specific assignment requirements

2. **My Approach** (Line ~36-40)
   - Explain your design methodology and approach

3. **Design Thinking** (Line ~57-100)
   - Fill in all 6 justification sections:
     - Aesthetic Transformation
     - Message & Intent
     - Composition
     - Balance & Weight
     - Form & Abstraction
     - Visual Hierarchy

4. **Key Design Decisions** (Line ~105-113)
   - List the specific elements you extracted
   - Describe your aesthetic shift
   - Explain your message changes
   - Detail techniques applied

### 4. **Customize Process Steps**

Edit `script.js` - Update the `timelineSteps` array (Line ~30-60):

```javascript
const timelineSteps = [
    {
        number: 1,
        title: 'Your Step Title',
        description: 'Your step description here'
    },
    // Add/remove steps as needed
];
```

## 📄 Navigation Structure

**Homepage (index.html)**
- Title: "Principles of Visual Design Portfolio"
- Overview of all assignments
- Quick navigation to individual projects

**Assignment Pages**
- Full process documentation
- Original vs. remixed comparison
- Design thinking and justification
- Technical specifications

## 🎨 Design Features

✅ **Responsive Design** - Works on all devices
✅ **Sticky Navigation** - Easy access to portfolio menu
✅ **Visual Hierarchy** - Guides viewers through your process
✅ **Subtle Interactions** - Hover effects and smooth transitions
✅ **Process Timeline** - Showcases your workflow step-by-step
✅ **Comparison View** - Side-by-side original vs. final
✅ **Design Justification** - Clear articulation of your choices

## 🌐 Customization Options

### Change Color Scheme

Edit `styles.css` (Lines 8-14):

```css
--primary-color: #1a1a1a;      /* Dark text */
--secondary-color: #ffffff;    /* White background */
--accent-color: #e63946;       /* Red accent */
--light-gray: #f5f5f5;        /* Light backgrounds */
```

### Adjust Typography

Modify font sizes in `styles.css` by adjusting the root units or specific section sizes.

### Modify Section Order

In HTML files, cut and paste `<section>` blocks to reorder content.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment Options

### **Option 1: GitHub Pages (Recommended)**
1. Push your folder to a GitHub repository
2. Go to **Settings → Pages**
3. Select `main` branch as source
4. Your site will be live at `username.github.io/repo-name`

### **Option 2: Netlify (Easiest)**
1. Visit netlify.com
2. Drag and drop your portfolio folder
3. Get instant live URL

### **Option 3: Local Viewing**
Simply open `index.html` in your browser

## ✅ Pre-Submission Checklist

- [ ] Images organized in `images/` folder
- [ ] All placeholders customized in HTML
- [ ] Process step descriptions updated
- [ ] Design justification sections completed
- [ ] Images load correctly (test in browser)
- [ ] Navigation works on all pages
- [ ] Mobile responsiveness verified
- [ ] Spelling and grammar checked
- [ ] Technical specs included
- [ ] Process material documented (5+ steps)

## 📝 Grading Alignment

The website structure directly addresses course requirements:

| Criterion | Where It Shows |
|-----------|-----------------|
| Different Aesthetics | Original vs. Remixed comparison section |
| Different Message | Design Thinking - Message & Intent section |
| Design Understanding | Design Thinking - All 6 sections |
| Context & Justification | Entire Design Thinking section |
| Process Material | Timeline with 5+ process step images |
| Technical Specs | Specifications section at bottom |

## 🔧 Adding More Assignments

To add a second assignment:

1. **Create new file:** `assignment-2-yourproject.html`
2. **Copy structure** from `assignment-1-chungking.html`
3. **Update content** specific to your project
4. **Add navigation** link in both files
5. **Add card** on homepage with assignment preview

## 📸 Image Optimization Tips

- Use online tools to compress images before uploading
- Maintain consistent aspect ratios for process steps
- Ensure high contrast for text overlay readability
- Use descriptive alt text for accessibility

## 🎯 What Your Professor Will See

A clean, professional portfolio that:
- ✅ Immediately shows your design work
- ✅ Documents your complete process
- ✅ Articulates your design thinking clearly
- ✅ Demonstrates understanding of design principles
- ✅ Is easy to navigate and evaluate

---

**You're ready to showcase your design work!** 🎨

For questions or customization help, refer to `CUSTOMIZATION_TEMPLATE.md`
