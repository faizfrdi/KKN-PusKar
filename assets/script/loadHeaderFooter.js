function loadHeaderFooter(callback) {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            
            // Initialize dropdown navigation after header is loaded
            initializeDropdowns();
            
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
