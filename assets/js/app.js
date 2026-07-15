// CNM System Labs - Interactive Demo Presentation System
//
// ==========================================
// CNM DASHBOARD IMAGE STANDARD
//
// Resolution:
// 1920 x 1080 px
//
// Format:
// JPEG
//
// Naming:
// lowercase-with-hyphens.jpeg
//
// Examples:
// rank-snapshot.jpeg
// brain-dump-tracker.jpeg
// operator-profile.jpeg
// ==========================================

// 1. Dynamic Configuration of Pages and Screenshot Assets
const dashboardPages = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        image: 'assets/images/dashboard/dashboard.png',
        section: 'top'
    },
    // REFOCUS Section
    {
        id: 'rank-snapshot',
        title: 'Rank Snapshot',
        image: 'assets/images/refocus/rank-snapshot.png',
        section: 'refocus'
    },
    {
        id: '90-day-blueprint',
        title: '90-Day Blueprint',
        image: 'assets/images/refocus/90-day-blueprint.png',
        section: 'refocus'
    },
    {
        id: 'weekly-power-planner',
        title: 'Weekly Power Planner',
        image: 'assets/images/refocus/weekly-power-planner.png',
        section: 'refocus'
    },
    {
        id: 'daily-missions',
        title: 'Daily Missions',
        image: 'assets/images/refocus/daily-missions.png',
        section: 'refocus'
    },
    {
        id: 'focus-block',
        title: 'Focus Block',
        image: 'assets/images/refocus/focus-block.png',
        section: 'refocus'
    },
    {
        id: 'mock-autopsy',
        title: 'Mock Autopsy',
        image: 'assets/images/refocus/mock-autopsy.png',
        section: 'refocus'
    },
    {
        id: 'learning-ledger',
        title: 'Learning Ledger',
        image: 'assets/images/refocus/learning-ledger.png',
        section: 'refocus'
    },
    {
        id: 'study-streak-engine',
        title: 'Study Streak Engine',
        image: 'assets/images/refocus/study-streak-engine.png',
        section: 'refocus'
    },
    {
        id: 'confidence-dashboard',
        title: 'Confidence Dashboard',
        image: 'assets/images/refocus/confidence-dashboard.png',
        section: 'refocus'
    },
    {
        id: 'rank-xp-system',
        title: 'Rank XP System',
        image: 'assets/images/refocus/rank-xp-system.png',
        section: 'refocus'
    },
    {
        id: 'win-vault',
        title: 'Win Vault',
        image: 'assets/images/refocus/win-vault.png',
        section: 'refocus'
    },
    // REWIRE Section
    {
        id: 'mission-launch',
        title: 'Mission Launch',
        image: 'assets/images/rewire/mission-launch.png',
        section: 'rewire'
    },
    {
        id: 'bug-tracker',
        title: 'Bug Tracker',
        image: 'assets/images/rewire/bug-tracker.png',
        section: 'rewire'
    },
    {
        id: 'power-zone',
        title: 'Power Zone',
        image: 'assets/images/rewire/power-zone.png',
        section: 'rewire'
    },
    {
        id: 'reset-engine',
        title: 'Reset Engine',
        image: 'assets/images/rewire/reset-engine.png',
        section: 'rewire'
    },
    {
        id: 'operator-profile',
        title: 'Operator Profile',
        image: 'assets/images/rewire/operator-profile.png',
        section: 'rewire'
    },
    {
        id: 'progress-radar',
        title: 'Progress Radar',
        image: 'assets/images/rewire/progress-radar.png',
        section: 'rewire'
    },
    {
        id: 'emergency-mode',
        title: 'Emergency Mode',
        image: 'assets/images/rewire/emergency-mode.png',
        section: 'rewire'
    },
    // RISE Section
    {
        id: 'brain-dump-tracker',
        title: 'Brain Dump Tracker',
        image: 'assets/images/rise/brain-dump-tracker.png',
        section: 'rise'
    },
    {
        id: 'exam-readiness-meter',
        title: 'Exam Readiness Meter',
        image: 'assets/images/rise/exam-readiness-meter.png',
        section: 'rise'
    },
    {
        id: 'fear-deconstructor',
        title: 'Fear Deconstructor',
        image: 'assets/images/rise/fear-deconstructor.png',
        section: 'rise'
    },
    {
        id: 'panic-trigger-detector',
        title: 'Panic Trigger Detector',
        image: 'assets/images/rise/panic-trigger-detector.png',
        section: 'rise'
    },
    {
        id: 'rise-card-generator',
        title: 'RISE Card Generator',
        image: 'assets/images/rise/rise-card-generator.png',
        section: 'rise'
    },
    // Parent View
    {
        id: 'parent-view',
        title: 'Parent View',
        image: 'assets/images/parent-view.png',
        section: 'bottom'
    }
];

// Helper to provide clean, customized SVG icons matching standard premium SaaS tools (e.g. Linear, Stripe)
function getIconSvg(id) {
    const icons = {
        'dashboard': `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>`,
        'rank-snapshot': `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        '90-day-blueprint': `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><path d="M12 6v10M9 9h6M9 13h6"></path></svg>`,
        'weekly-power-planner': `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h8M8 18h5"></path></svg>`,
        'daily-missions': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></svg>`,
        'focus-block': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        'mock-autopsy': `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
        'learning-ledger': `<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
        'study-streak-engine': `<svg viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"></path></svg>`,
        'confidence-dashboard': `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        'rank-xp-system': `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
        'win-vault': `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        'mission-launch': `<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 2C8 2 5 5 5 9c0 2.5 1.5 5 3.5 6.5L12 22l3.5-6.5C17.5 14 19 11.5 19 9c0-4-3-7-7-7z"></path><path d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>`,
        'bug-tracker': `<svg viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="14" rx="4"></rect><path d="M6 7h12M6 11h12M8 15l-3 3M16 15l3 3M12 2v2"></path></svg>`,
        'power-zone': `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
        'reset-engine': `<svg viewBox="0 0 24 24"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
        'operator-profile': `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
        'progress-radar': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 12L16 8"></path><path d="M12 12L9 15"></path></svg>`,
        'emergency-mode': `<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
        'brain-dump-tracker': `<svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.88A2.5 2.5 0 0 1 9.5 2z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.88A2.5 2.5 0 0 0 14.5 2z"></path></svg>`,
        'exam-readiness-meter': `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 12 0h4a10 10 0 0 0-10-10z"></path><path d="M12 12L15 9"></path></svg>`,
        'fear-deconstructor': `<svg viewBox="0 0 24 24"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"></path><path d="M18 8h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path><path d="M23 14H18"></path></svg>`,
        'panic-trigger-detector': `<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
        'rise-card-generator': `<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>`,
        'parent-view': `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    };
    return icons[id] || `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
}

// 2. Global State Variables
let activePageId = 'rank-snapshot';
let zoomScale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

// Touch State for Pinch-to-Zoom
let initialTouchDistance = 0;
let initialScale = 1;
let isPinching = false;

// 3. DOM Elements
const sidebarMenu = document.getElementById('sidebar-menu');
const dashboardImage = document.getElementById('dashboardImage');
const zoomWrapper = document.getElementById('zoom-wrapper');
const emptyState = document.getElementById('empty-state');
const missingViewName = document.getElementById('missing-view-name');
const viewerContainer = document.getElementById('viewer-container');
const appContainer = document.querySelector('.app-container');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');

// 4. Build Sidebar Menu Dynamically with Sub-Sections
function expandActiveSection() {
    const activePage = dashboardPages.find(p => p.id === activePageId);
    if (activePage && activePage.section && ['rewire', 'refocus', 'rise'].includes(activePage.section)) {
        const sectionId = activePage.section;
        const sectionDiv = document.querySelector(`.nav-section[data-section="${sectionId}"]`);
        if (sectionDiv) {
            const content = sectionDiv.querySelector('.nav-section-content');
            const chevron = sectionDiv.querySelector('.chevron-icon');
            if (content && content.classList.contains('collapsed')) {
                content.classList.remove('collapsed');
                if (chevron) chevron.classList.add('rotated');
                localStorage.setItem(`section_collapsed_${sectionId}`, 'false');
            }
        }
    }
}

function renderNavItem(page, container, isChild = false) {
    const item = document.createElement('div');
    item.className = `nav-item${isChild ? ' child-item' : ''}`;
    item.setAttribute('data-id', page.id);
    item.setAttribute('data-tooltip', page.title);

    item.innerHTML = `
        ${getIconSvg(page.id)}
        <span class="nav-label">${page.title}</span>
    `;

    item.addEventListener('click', () => {
        switchPage(page.id);
        // Auto close mobile drawer
        appContainer.classList.remove('sidebar-open');
    });

    container.appendChild(item);
}

function renderSection(sectionId, title, container) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'nav-section';
    sectionDiv.setAttribute('data-section', sectionId);

    const header = document.createElement('div');
    header.className = 'nav-section-header';

    const isCollapsed = localStorage.getItem(`section_collapsed_${sectionId}`) === 'true';

    header.innerHTML = `
        <div class="section-header-left">
            <span class="section-title">${title}</span>
        </div>
        <svg class="chevron-icon${isCollapsed ? '' : ' rotated'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    `;

    const content = document.createElement('div');
    content.className = `nav-section-content${isCollapsed ? ' collapsed' : ''}`;

    const childPages = dashboardPages.filter(p => p.section === sectionId);

    if (childPages.length > 0) {
        childPages.forEach(page => {
            renderNavItem(page, content, true);
        });
    } else {
        const emptyIndicator = document.createElement('div');
        emptyIndicator.className = 'section-empty-msg';
        emptyIndicator.textContent = 'No tools configured';
        content.appendChild(emptyIndicator);
    }

    header.addEventListener('click', () => {
        const currentlyCollapsed = content.classList.contains('collapsed');
        if (currentlyCollapsed) {
            content.classList.remove('collapsed');
            header.querySelector('.chevron-icon').classList.add('rotated');
            localStorage.setItem(`section_collapsed_${sectionId}`, 'false');
        } else {
            content.classList.add('collapsed');
            header.querySelector('.chevron-icon').classList.remove('rotated');
            localStorage.setItem(`section_collapsed_${sectionId}`, 'true');
        }
    });

    sectionDiv.appendChild(header);
    sectionDiv.appendChild(content);
    container.appendChild(sectionDiv);
}

function renderSidebar() {
    sidebarMenu.innerHTML = '';

    // 1. Top Group
    const topPages = dashboardPages.filter(p => p.section === 'top');
    topPages.forEach(page => renderNavItem(page, sidebarMenu));

    // 2. REFOCUS Section
    renderSection('refocus', 'REFOCUS', sidebarMenu);

    // 3. REWIRE Section
    renderSection('rewire', 'REWIRE', sidebarMenu);

    // 4. RISE Section
    renderSection('rise', 'RISE', sidebarMenu);

    // 5. Bottom Group
    const bottomPages = dashboardPages.filter(p => p.section === 'bottom');
    bottomPages.forEach(page => renderNavItem(page, sidebarMenu));
}

// 5. Switching Content Page
function switchPage(pageId) {
    const page = dashboardPages.find(p => p.id === pageId) || dashboardPages[0];

    activePageId = page.id;
    localStorage.setItem('cnm_active_page', activePageId);

    // Update active highlight classes in sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-id') === activePageId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });



    // Reset zoom and panning variables back to center
    resetZoom();

    // Trigger smooth fade transition
    zoomWrapper.style.opacity = '0';
    emptyState.style.opacity = '0';

    // Reset fallback try flag
    delete dashboardImage.dataset.triedFallback;

    // Set immediate loading timeout to update src
    setTimeout(() => {
        const imgEl = document.getElementById("dashboardImage");
        if (imgEl) {
            imgEl.src = page.image;
        } else {
            console.error("CRITICAL: Image element with ID 'dashboardImage' not found in DOM!");
        }
    }, 150);
    expandActiveSection();
}

// 6. Image Loading Handlers
dashboardImage.onload = () => {
    // Clear fallback flag on successful load
    delete dashboardImage.dataset.triedFallback;

    // Automatically switch to cover if aspect ratio is exactly 1920x1080
    if (dashboardImage.naturalWidth === 1920 && dashboardImage.naturalHeight === 1080) {
        dashboardImage.style.objectFit = 'cover';
    } else {
        dashboardImage.style.objectFit = 'contain';
    }

    emptyState.style.display = 'none';
    zoomWrapper.style.display = 'flex';
    viewerContainer.scrollTop = 0;
    viewerContainer.scrollLeft = 0;

    // Smooth transition fade-in
    setTimeout(() => {
        zoomWrapper.style.opacity = '1';
    }, 50);
};

dashboardImage.onerror = () => {
    const currentSrc = dashboardImage.getAttribute('src') || '';

    // Auto-Fix Extensions (.jpg <-> .jpeg) fallback handler
    if (currentSrc && !dashboardImage.dataset.triedFallback) {
        let fallbackSrc = '';
        if (currentSrc.endsWith('.jpg')) {
            fallbackSrc = currentSrc.slice(0, -4) + '.jpeg';
        } else if (currentSrc.endsWith('.jpeg')) {
            fallbackSrc = currentSrc.slice(0, -5) + '.jpg';
        }

        if (fallbackSrc) {
            dashboardImage.dataset.triedFallback = 'true';
            dashboardImage.src = fallbackSrc;
            return; // Stop here and let the browser try to load fallbackSrc
        }
    }

    // Both primary and fallback failed
    zoomWrapper.style.display = 'none';
    emptyState.style.display = 'flex';
    const activePage = dashboardPages.find(p => p.id === activePageId);
    missingViewName.textContent = activePage ? activePage.title : 'Selected Page';

    setTimeout(() => {
        emptyState.style.opacity = '1';
    }, 50);
};



// 8. Screenshot Zoom & Drag Panning Logic

// Calculates boundaries of image panning coordinates depending on zoom level
function clampPan(x, y) {
    if (zoomWrapper.style.display === 'none') return { x: 0, y: 0 };

    const imgRect = dashboardImage.getBoundingClientRect();
    const wrapperRect = zoomWrapper.getBoundingClientRect();

    // Half of the size difference is the boundary limit
    const maxPanX = Math.max(0, (imgRect.width - wrapperRect.width) / 2);
    const maxPanY = Math.max(0, (imgRect.height - wrapperRect.height) / 2);

    return {
        x: Math.min(Math.max(x, -maxPanX), maxPanX),
        y: Math.min(Math.max(y, -maxPanY), maxPanY)
    };
}

function applyTransform() {
    const clamped = clampPan(panX, panY);
    panX = clamped.x;
    panY = clamped.y;

    dashboardImage.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;

    const indicator = document.getElementById('zoom-indicator');
    const valueEl = document.getElementById('zoom-value');

    if (zoomScale > 1) {
        indicator.style.display = 'flex';
        valueEl.textContent = `${Math.round(zoomScale * 100)}%`;
        dashboardImage.classList.add('zoomed');
    } else {
        indicator.style.display = 'none';
        dashboardImage.classList.remove('zoomed');
    }
}

function resetZoom() {
    zoomScale = 1;
    panX = 0;
    panY = 0;
    applyTransform();
}

document.getElementById('zoom-reset').addEventListener('click', resetZoom);

// Double Click -> Toggle 1x <-> 2x Centered on Pointer Location
zoomWrapper.addEventListener('dblclick', (e) => {
    if (zoomScale > 1) {
        resetZoom();
    } else {
        zoomScale = 2;

        // Dynamic centering towards double click point coordinates
        const rect = zoomWrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left - rect.width / 2;
        const clickY = e.clientY - rect.top - rect.height / 2;

        // Panning offsets are opposite to focus coordinate clicks
        panX = -clickX;
        panY = -clickY;

        applyTransform();
    }
});

// Wheel Scaling (supports mouse wheel zoom, prevents outer document scrolling on scale)
zoomWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();

    const zoomFactor = 0.15;
    const direction = e.deltaY < 0 ? 1 : -1;
    const prevScale = zoomScale;

    zoomScale = Math.min(Math.max(zoomScale + direction * zoomFactor, 1), 3);

    if (zoomScale !== prevScale) {
        // Adjust panning based on current zoom scale modification
        if (zoomScale === 1) {
            panX = 0;
            panY = 0;
        } else {
            // Keep panning bounds valid for new zoom scale
            const clamped = clampPan(panX, panY);
            panX = clamped.x;
            panY = clamped.y;
        }
        applyTransform();
    }
}, { passive: false });

// Mouse Drag-to-Pan Event Listeners
zoomWrapper.addEventListener('mousedown', (e) => {
    if (zoomScale <= 1 || zoomWrapper.style.display === 'none') return;

    isDragging = true;
    dashboardImage.classList.add('dragging');

    startX = e.clientX - panX;
    startY = e.clientY - panY;

    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    panX = e.clientX - startX;
    panY = e.clientY - startY;

    applyTransform();
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        dashboardImage.classList.remove('dragging');
    }
});

// 9. Pinch-to-zoom & Swipe gesture handlers
zoomWrapper.addEventListener('touchstart', (e) => {
    if (zoomWrapper.style.display === 'none') return;

    if (e.touches.length === 2) {
        isPinching = true;
        isDragging = false;

        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialTouchDistance = Math.sqrt(dx * dx + dy * dy);
        initialScale = zoomScale;
    } else if (e.touches.length === 1 && zoomScale > 1) {
        isDragging = true;
        isPinching = false;
        dashboardImage.classList.add('dragging');

        startX = e.touches[0].clientX - panX;
        startY = e.touches[0].clientY - panY;
    }
});

zoomWrapper.addEventListener('touchmove', (e) => {
    if (zoomWrapper.style.display === 'none') return;

    if (isPinching && e.touches.length === 2) {
        e.preventDefault();

        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const factor = distance / initialTouchDistance;

        zoomScale = Math.min(Math.max(initialScale * factor, 1), 3);
        applyTransform();
    } else if (isDragging && e.touches.length === 1 && zoomScale > 1) {
        e.preventDefault();

        panX = e.touches[0].clientX - startX;
        panY = e.touches[0].clientY - startY;
        applyTransform();
    }
}, { passive: false });

zoomWrapper.addEventListener('touchend', () => {
    isPinching = false;
    if (isDragging) {
        isDragging = false;
        dashboardImage.classList.remove('dragging');
    }
});

// 10. Navigation Helper using index shifts
function navigatePage(direction) {
    const currentIndex = dashboardPages.findIndex(p => p.id === activePageId);
    if (currentIndex === -1) return;

    let newIndex = currentIndex + direction;

    if (newIndex >= dashboardPages.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = dashboardPages.length - 1;
    }

    switchPage(dashboardPages[newIndex].id);
}

// 11. Keyboard Shortcut Hook
document.addEventListener('keydown', (e) => {
    // Skip shortcut processing if typing in input blocks
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key.toLowerCase()) {
        case 'arrowright':
            navigatePage(1);
            break;
        case 'arrowleft':
            navigatePage(-1);
            break;
    }
});




sidebarBackdrop.addEventListener('click', () => {
    appContainer.classList.remove('sidebar-open');
});

// 14. Initial System Load
function init() {
    renderSidebar();

    let savedActive = localStorage.getItem('cnm_active_page');
    if (savedActive && dashboardPages.some(p => p.id === savedActive)) {
        activePageId = savedActive;
    } else {
        activePageId = 'rank-snapshot';
    }

    switchPage(activePageId);
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
