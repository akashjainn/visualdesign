// Detail page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const designId = parseInt(urlParams.get('id'));
    
    if (!designId || designId < 1 || designId > 3) {
        window.location.href = 'index.html';
        return;
    }
    
    const design = designsData.designs.find(d => d.id === designId);
    
    if (!design) {
        window.location.href = 'index.html';
        return;
    }
    
    initDetailPage(design);
    initLightbox();
});

// Initialize detail page content
function initDetailPage(design) {
    // Set hero content
    document.getElementById('designTitle').textContent = design.title;
    document.getElementById('designTeaser').textContent = design.teaser;
    
    const heroImage = document.getElementById('heroImage');
    heroImage.src = design.finalImage;
    heroImage.alt = design.title;
    heroImage.onerror = function() { handleImageError(this); };
    
    // Make hero image clickable
    heroImage.addEventListener('click', function() {
        openLightbox(this.src, this.alt);
    });
    
    // Populate analysis section
    populateAnalysis(design);
    
    // Populate process section
    populateProcess(design);
    
    // Update page title
    document.title = `${design.title} - Bad Design Portfolio`;
}

// Populate analysis/reasons section
function populateAnalysis(design) {
    const analysisContent = document.getElementById('analysisContent');
    
    const list = document.createElement('ul');
    list.className = 'analysis-list';
    
    design.reasons.forEach(reason => {
        const item = document.createElement('li');
        item.className = 'analysis-item';
        item.innerHTML = `
            <h3>${reason.title}</h3>
            <p>${reason.description}</p>
        `;
        list.appendChild(item);
    });
    
    analysisContent.appendChild(list);
}

// Populate process images
function populateProcess(design) {
    const processGrid = document.getElementById('processGrid');
    
    // Try to load all possible process steps
    design.processSteps.forEach(step => {
        const processItem = createProcessItem(design.id, step);
        processGrid.appendChild(processItem);
    });
}

// Create process item element
function createProcessItem(designId, stepNumber) {
    const item = document.createElement('div');
    item.className = 'process-item';
    
    // Try common image extensions
    const extensions = ['jpg', 'png', 'jpeg'];
    const basePath = `assets/process/b${designId}p${stepNumber}`;
    
    item.innerHTML = `
        <div class="process-image-wrapper">
            <img 
                src="${basePath}.png" 
                alt="Process step ${stepNumber} for design ${designId}" 
                class="process-image"
                onerror="tryAlternativeExtension(this, '${basePath}', ${stepNumber})"
            >
        </div>
        <div class="process-label">Step ${stepNumber}</div>
    `;
    
    // Click to open in lightbox
    const img = item.querySelector('img');
    img.addEventListener('click', function() {
        if (this.style.display !== 'none') {
            openLightbox(this.src, this.alt);
        }
    });
    
    return item;
}

// Try alternative image extensions if first fails
function tryAlternativeExtension(img, basePath, stepNumber) {
    const currentSrc = img.src;
    
    // Check if we've already tried jpg
    if (!currentSrc.includes('.jpg')) {
        img.src = basePath + '.jpg';
        return;
    }
    
    // Check if we've tried jpeg
    if (!currentSrc.includes('.jpeg')) {
        img.src = basePath + '.jpeg';
        return;
    }
    
    // All extensions failed, show fallback
    handleImageError(img);
}

// Initialize lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImage.src = '';
        }, 300);
    }
}

// Open lightbox (called from other functions)
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Handle image loading errors
function handleImageError(img) {
    const fallback = document.createElement('div');
    fallback.style.cssText = 'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f0f0f0; color: #666; padding: 2rem; text-align: center; font-size: 0.875rem;';
    fallback.textContent = 'Image not available';
    
    // Check if we're in a wrapper
    if (img.parentElement.classList.contains('process-image-wrapper') || 
        img.parentElement.classList.contains('hero-image-wrapper')) {
        img.parentElement.appendChild(fallback);
    } else {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'position: relative; width: 100%; padding-top: 100%; background: #f0f0f0;';
        wrapper.appendChild(fallback);
        fallback.style.position = 'absolute';
        fallback.style.top = '0';
        fallback.style.left = '0';
        img.parentElement.replaceChild(wrapper, img);
        return;
    }
    
    img.style.display = 'none';
}
