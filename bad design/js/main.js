// Main JavaScript for index page
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initLightbox();
});

// Initialize gallery grid
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    designsData.designs.forEach(design => {
        const card = createGalleryCard(design);
        galleryGrid.appendChild(card);
    });
}

// Create individual gallery card
function createGalleryCard(design) {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.setAttribute('role', 'article');
    card.setAttribute('tabindex', '0');
    
    card.innerHTML = `
        <div class="gallery-image-wrapper">
            <img 
                src="${design.finalImage}" 
                alt="${design.title}" 
                class="gallery-image"
                onerror="handleImageError(this)"
            >
        </div>
        <div class="gallery-info">
            <h2 class="gallery-title">${design.title}</h2>
            <p class="gallery-teaser">${design.teaser}</p>
            <a href="detail.html?id=${design.id}" class="gallery-link">
                View Analysis →
            </a>
        </div>
    `;
    
    // Make entire card clickable
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('gallery-link')) {
            window.location.href = `detail.html?id=${design.id}`;
        }
    });
    
    // Keyboard navigation
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.href = `detail.html?id=${design.id}`;
        }
    });
    
    return card;
}

// Initialize lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    
    // Click on images to open lightbox
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-image')) {
            openLightbox(e.target.src, e.target.alt);
        }
    });
    
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
    
    function openLightbox(src, alt) {
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImage.src = '';
        }, 300);
    }
}

// Handle image loading errors
function handleImageError(img) {
    const fallback = document.createElement('div');
    fallback.style.cssText = 'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f0f0f0; color: #666; padding: 2rem; text-align: center; font-size: 0.875rem;';
    fallback.textContent = 'Image not available';
    
    img.parentElement.appendChild(fallback);
    img.style.display = 'none';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
