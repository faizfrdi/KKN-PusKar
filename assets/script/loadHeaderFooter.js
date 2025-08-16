function loadHeaderFooter(callback) {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            
            // Dispatch header loaded event for language switcher
            document.dispatchEvent(new CustomEvent('headerLoaded'));
            
            // Initialize dropdown navigation after header is loaded
            initializeDropdowns();
            
            // Initialize mobile menu
            initializeMobileMenu();
            
            // Refresh language switcher if it exists
            if (window.LanguageSwitcher) {
                setTimeout(() => {
                    window.LanguageSwitcher.refresh();
                }, 100);
            }
            
            // Load login modal
            loadLoginModal(function() {
                // Initialize AuthModal after login modal is loaded
                if (typeof window.AuthModal !== 'undefined') {
                    window.AuthModal.init();
                }
                
                // Load feedback modal
                loadFeedbackModal(function() {
                    // Load footer
                    fetch('components/footer.html')
                        .then(response => response.text())
                        .then(data => {
                            document.getElementById('footer-container').innerHTML = data;
                            if (typeof callback === "function") callback();
                        })
                        .catch(error => console.error('Error loading footer:', error));
                });
            });
        })
        .catch(error => console.error('Error loading header:', error));
}

// Loader login modal
function loadLoginModal(callback) {
    fetch('components/login-modal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('login-modal-container').innerHTML = html;
            
            // Initialize AuthModal after HTML is inserted
            setTimeout(() => {
                if (typeof window.AuthModal !== 'undefined') {
                    window.AuthModal.init();
                } else {
                    // If AuthModal is not available, try again after a short delay
                    setTimeout(() => {
                        if (typeof window.AuthModal !== 'undefined') {
                            window.AuthModal.init();
                        }
                    }, 200);
                }
            }, 50);
            
            if (typeof callback === "function") callback();
        })
        .catch(err => console.error('Failed to load login modal:', err));
}

// Loader feedback modal
function loadFeedbackModal(callback) {
    fetch('components/feedback-modal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('feedback-modal-container').innerHTML = html;
            if (typeof callback === "function") callback();
        })
        .catch(err => console.error('Failed to load feedback modal:', err));
}

// Initialize dropdown functionality
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const content = dropdown.querySelector('.dropdown-content');
        let hoverTimer;
        
        if (!trigger || !content) return;
        
        // Desktop hover behavior
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimer);
            content.classList.add('active');
        });
        
        dropdown.addEventListener('mouseleave', () => {
            hoverTimer = setTimeout(() => {
                content.classList.remove('active');
            }, 150);
        });
        
        // Mobile click behavior
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 640) {
                e.preventDefault();
                content.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherContent = otherDropdown.querySelector('.dropdown-content');
                        if (otherContent) {
                            otherContent.classList.remove('active');
                        }
                    }
                });
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const content = dropdown.querySelector('.dropdown-content');
                if (content) {
                    content.classList.remove('active');
                }
            });
        }
    });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    // Remove any existing event listeners
    menuToggle.removeEventListener('click', toggleMobileMenu);
    
    // Add click event listener
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    function toggleMobileMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        } else {
            navMenu.classList.add('active');
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            document.body.style.overflow = 'hidden';
        }
        
        // Update ARIA attributes
        menuToggle.setAttribute('aria-expanded', !isActive);
        navMenu.setAttribute('aria-hidden', isActive);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 640) {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-toggle')) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on nav links
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && !e.target.closest('.dropdown')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });
    
    // Set initial ARIA attributes
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'false');
}

// Utility function to refresh all components
function refreshComponents() {
    // Refresh dropdowns
    initializeDropdowns();
    
    // Refresh mobile menu
    initializeMobileMenu();
    
    // Refresh language switcher
    if (window.LanguageSwitcher) {
        window.LanguageSwitcher.refresh();
    }
}
