function loadHeaderFooter(callback) {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Load login modal
            loadLoginModal(function() {
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
