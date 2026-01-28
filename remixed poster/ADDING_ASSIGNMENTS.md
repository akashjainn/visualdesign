# Adding New Assignments to Your Portfolio

This guide explains how to add new design projects to your portfolio website.

## 📋 Step-by-Step Process

### 1. Create a New Assignment File

Copy the assignment template structure. For Assignment 2, create `assignment-2-yourproject.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Project Title | Visual Design Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navigation">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.html">Akash Jain</a>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html">Portfolio</a></li>
                <li><a href="assignment-1-chungking.html">Chungking Express</a></li>
                <li><a href="assignment-2-yourproject.html" class="nav-active">Your Project</a></li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <!-- Copy sections from assignment-1-chungking.html and customize -->
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### 2. Update Navigation

Add the new assignment link to **all HTML files**:

**index.html** (in nav menu):
```html
<li><a href="assignment-2-yourproject.html">Your Project Title</a></li>
```

**assignment-1-chungking.html** (in nav menu):
```html
<li><a href="assignment-2-yourproject.html">Your Project Title</a></li>
```

**assignment-2-yourproject.html** (in nav menu):
```html
<li><a href="assignment-2-yourproject.html" class="nav-active">Your Project Title</a></li>
```

### 3. Add Assignment Card to Homepage

Edit `index.html` and add a new card in the assignments grid (after the Chungking card):

```html
<div class="assignment-card">
    <div class="assignment-preview">
        <div class="preview-placeholder">
            <img src="./images/project2-final.jpg" alt="Project 2 Preview" onerror="this.style.display='none'">
            <div class="preview-overlay"></div>
        </div>
    </div>
    <div class="assignment-info">
        <h3>Your Project Title</h3>
        <p class="assignment-description">Brief description of your project and what it explores.</p>
        <a href="assignment-2-yourproject.html" class="assignment-link">View Project →</a>
    </div>
</div>
```

### 4. Update Process Steps for New Assignment

If your new assignment has different process steps, edit `script.js`:

Add a new function to handle your assignment:

```javascript
/**
 * Load process steps for assignment 2
 */
function loadAssignment2Timeline() {
    const timeline = document.getElementById('timeline');
    
    const timelineSteps = [
        {
            number: 1,
            title: 'Your Step 1',
            description: 'Description of step 1'
        },
        {
            number: 2,
            title: 'Your Step 2',
            description: 'Description of step 2'
        },
        // Add more steps as needed
    ];
    
    timelineSteps.forEach(step => {
        const card = createProcessCard(step);
        timeline.appendChild(card);
    });
}
```

Then call it on the assignment 2 page:

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('assignment-2')) {
            loadAssignment2Timeline();
        }
    });
</script>
```

### 5. Organize Images for New Assignment

Create a subdirectory structure for organization:

```
images/
├── chungking/
│   ├── original-chungking-express-poster.jpg
│   ├── remixed-chungking-express-poster.jpg
│   ├── ckp1.jpg
│   ├── ckp2.jpg
│   └── ...
├── project2/
│   ├── project2-original.jpg
│   ├── project2-final.jpg
│   ├── process-01.jpg
│   ├── process-02.jpg
│   └── ...
```

Then update image paths in HTML:

```html
<img src="./images/project2/project2-final.jpg" alt="Project 2 Final">
```

## 🎨 Assignment Page Structure

Each assignment page should include:

1. **Hero Section** - Project title and tagline
2. **Assignment Brief** - What the assignment requires
3. **My Approach** - How you tackled the project
4. **Design Process** - Timeline/steps showing your workflow
5. **Original vs. Final** - Comparison of before/after
6. **Design Thinking** - Justification sections (usually 6)
7. **Key Design Decisions** - Bullet points of main choices
8. **Specifications** - Technical details (if applicable)

## 📝 CSS Classes for Assignments

The CSS supports different assignment types. Customize backgrounds/colors:

```css
/* For assignment-specific styling */
.assignment-hero {
    /* Custom background for each assignment */
}
```

## 🔄 Dynamic Process Loading

To automatically load process images for different assignments, update `script.js`:

```javascript
function loadProcessImages(assignmentNumber, maxSteps) {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    for (let i = 1; i <= maxSteps; i++) {
        // Create cards for each step
    }
}
```

## 📸 Image Naming Convention

For consistency, use this naming convention:

```
assignment-1-chungking/
├── original.jpg
├── final.jpg
├── step-01.jpg
├── step-02.jpg

assignment-2-yourproject/
├── original.jpg
├── final.jpg
├── step-01.jpg
├── step-02.jpg
```

## ✅ Quick Checklist for New Assignments

- [ ] Created new HTML file (assignment-X-name.html)
- [ ] Updated navigation in all files
- [ ] Added assignment card to homepage
- [ ] Organized images in proper folder
- [ ] Customized all text sections
- [ ] Updated or created process steps
- [ ] Tested links on all pages
- [ ] Verified responsive design
- [ ] Checked image loading
- [ ] Spell-checked all content

## 🎯 Best Practices

1. **Keep File Names Consistent**: Use kebab-case (assignment-2-title)
2. **Organize Images**: Group by assignment in subdirectories
3. **Update Navigation**: Always update nav on ALL pages
4. **Test Links**: Click through all navigation after changes
5. **Mobile Test**: Verify on phone/tablet
6. **Image Optimization**: Keep file sizes under 2MB
7. **Consistent Naming**: Use same naming for process images

---

**Your portfolio grows with each project!** 🚀
