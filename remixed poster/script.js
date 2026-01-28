/**
 * Portfolio script - handles dynamic content loading and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load process images on assignment pages
    const processGrid = document.getElementById('processGrid');
    const timeline = document.getElementById('timeline');
    
    if (processGrid) {
        loadProcessGrid();
    }
    
    if (timeline) {
        loadTimeline();
    }
});

/**
 * Load process grid for assignment pages (old format)
 */
function loadProcessGrid() {
    const processGrid = document.getElementById('processGrid');
    
    const processSteps = [
        {
            number: 1,
            title: 'Initial Analysis',
            description: 'Identified core visual elements in the original poster: composition, color relationships, and focal points.'
        },
        {
            number: 2,
            title: 'Element Extraction',
            description: 'Isolated key design components and abstracted them into reusable forms for recomposition.'
        },
        {
            number: 3,
            title: 'Aesthetic Exploration',
            description: 'Experimented with new visual styles and color palettes to establish a distinct aesthetic direction.'
        },
        {
            number: 4,
            title: 'Composition Refinement',
            description: 'Applied compositional principles to arrange elements in a new configuration with different messaging.'
        },
        {
            number: 5,
            title: 'Fine-tuning & Polish',
            description: 'Refined details, adjusted balance and weight, and applied finishing touches to the final remix.'
        }
    ];
    
    processSteps.forEach(step => {
        const card = createProcessCard(step);
        processGrid.appendChild(card);
    });
}

/**
 * Load timeline for assignment detail pages
 */
function loadTimeline() {
    const timeline = document.getElementById('timeline');
    
    const timelineSteps = [
        {
            number: 1,
            title: 'Initial Analysis',
            description: 'Identified core visual elements in the original poster: composition, color relationships, and focal points.'
        },
        {
            number: 2,
            title: 'Element Extraction',
            description: 'Isolated key design components and abstracted them into reusable forms for recomposition.'
        },
        {
            number: 3,
            title: 'Aesthetic Exploration',
            description: 'Experimented with new visual styles and color palettes to establish a distinct aesthetic direction.'
        },
        {
            number: 4,
            title: 'Composition Refinement',
            description: 'Applied compositional principles to arrange elements in a new configuration with different messaging.'
        },
        {
            number: 5,
            title: 'Fine-tuning & Polish',
            description: 'Refined details, adjusted balance and weight, and applied finishing touches to the final remix.'
        }
    ];
    
    timelineSteps.forEach(step => {
        const card = createProcessCard(step);
        timeline.appendChild(card);
    });
}

/**
 * Create a process card element
 */
function createProcessCard(step) {
    const card = document.createElement('div');
    card.className = 'process-card';
    
    const imageFilename = `ckp${step.number}`;
    
    card.innerHTML = `
        <img src="./images/${imageFilename}.jpg" alt="Process Step ${step.number}" onerror="this.parentElement.style.background='var(--light-gray)'">
        <div class="process-card-content">
            <h3>Step ${step.number}: ${step.title}</h3>
            <p>${step.description}</p>
        </div>
    `;
    
    return card;
}

/**
 * Smooth scroll behavior for navigation
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Update active navigation link based on current page
 */
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('nav-active');
        }
    });
}
