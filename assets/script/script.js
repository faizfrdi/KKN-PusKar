// Get modal element
const modal = document.getElementById('loginModal');
const modalContent = modal.querySelector('.modal-content');

// Get login link
const loginLink = document.querySelector('.nav-menu a:last-child');

// Function to open modal
function openModal() {
    modal.classList.add('show');
}

// Function to close modal
function closeModal() {
    modal.classList.add('hiding');
    setTimeout(() => {
        modal.classList.remove('show', 'hiding');
    }, 300); // Match this with animation duration
}

// When user clicks login link, open modal
if (loginLink) {
    loginLink.onclick = function(e) {
        e.preventDefault();
        openModal();
    }
}

// When user clicks outside of the modal content, close it
window.onclick = function(e) {
    if (e.target == modal) {
        closeModal();
    }
}

// Optional: Add escape key functionality
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create and append the menu toggle button
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Insert before the search container
    navContainer.insertBefore(menuToggle, document.querySelector('.search-container'));
    
    // Toggle menu when clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Change icon
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
    
    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 640 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
    
    // Initialize counselors
    renderCounselors();
    
    // Set min date for booking (today)
    const today = new Date().toISOString().split('T')[0];
    const sessionDateInput = document.getElementById('session-date');
    if (sessionDateInput) {
        sessionDateInput.min = today;
    }
});

// Counseling career advice

// Counselor data
const counselors = [
    {
        id: 1,
        name: "nama",
        title: "Career Development Specialist",
        avatar: "/api/placeholder/80/80",
        specialties: ["Career Transition", "Job Interview Preparation", "Leadership Development"],
        location: "Pusat Karier UIN Jakarta",
        availability: "Tersedia hari ini",
        availableOnline: true,
        availableOffline: true
    },
    {
        id: 2,
        name: "nama",
        title: "HR & Recruitment Expert",
        avatar: "/api/placeholder/80/80",
        specialties: ["Resume Building", "Hiring Process", "Salary Negotiation"],
        location: "Pusat Karier UIN Jakarta",
        availability: "Jumat, 07 Maret 2025",
        availableOnline: true,
        availableOffline: true
    },
    {
        id: 3,
        name: "nama",
        title: "Business & Entrepreneurship Advisor",
        avatar: "/api/placeholder/80/80",
        specialties: ["Startup Guidance", "Business Planning", "Market Analysis"],
        location: "Pusat Karier UIN Jakarta",
        availability: "Tersedia hari ini",
        availableOnline: true,
        availableOffline: false
    },
    {
        id: 4,
        name: "nama",
        title: "Academic & Research Career Counselor",
        avatar: "/api/placeholder/80/80",
        specialties: ["Research Careers", "Academic Job Market", "Publication Strategy"],
        location: "Pusat Karier UIN Jakarta",
        availability: "Jumat, 07 Maret 2025",
        availableOnline: true,
        availableOffline: true
    },
    {
        id: 5,
        name: "nama",
        title: "Education & Training Specialist",
        avatar: "/api/placeholder/80/80",
        specialties: ["Educational Planning", "Skill Development", "Training Programs"],
        location: "Pusat Karier UIN Jakarta",
        availability: "Tersedia hari ini",
        availableOnline: false,
        availableOffline: true
    },
    {
        id: 6,
        name: "nama",
        title: "Human Resources Consultant",
        avatar: "/api/placeholder/80/80",
        specialties: ["Career Mapping", "Professional Development", "Workplace Dynamics"],
        location: "Pusat Karier UIN Jakarta",
        availability: "Jumat, 07 Maret 2025",
        availableOnline: true,
        availableOffline: true
    }
];

// DOM Elements
const counselorsContainer = document.getElementById('counselors-container');
const bookingModal = document.getElementById('booking-modal');
const invoiceModal = document.getElementById('invoice-modal');
const closeBooking = document.getElementById('close-booking');
const closeInvoice = document.getElementById('close-invoice');
const closeConfirmation = document.getElementById('close-confirmation');
const bookingForm = document.getElementById('booking-form');
const timeSlots = document.querySelectorAll('.time-slot');
const selectedTimeInput = document.getElementById('selected-time');
const sessionTypeRadios = document.querySelectorAll('input[name="session-type"]');
const meetingLinkContainer = document.getElementById('meeting-link-container');

// Render counselors
function renderCounselors() {
    if (!counselorsContainer) return;
    
    counselorsContainer.innerHTML = '';
    
    counselors.forEach(counselor => {
        const card = document.createElement('div');
        card.className = 'counselor-card';
        
        const availabilityClass = counselor.availability.includes('hari ini') ? 'available-badge' : 'future-badge';
        
        const buttonsHtml = `
            <div class="btn-container">
                ${counselor.availableOnline ? `<button class="btn btn-outline book-btn" data-counselor="${counselor.id}" data-type="online">Konsultasi Online</button>` : ''}
                ${counselor.availableOffline ? `<button class="btn btn-primary book-btn" data-counselor="${counselor.id}" data-type="offline">Pesan Janji Temu</button>` : ''}
            </div>
        `;
        
        card.innerHTML = `
            <div class="counselor-info">
                <div class="counselor-header">
                    <img src="${counselor.avatar}" alt="${counselor.name}" class="counselor-avatar">
                    <div class="counselor-name-title">
                        <h3>${counselor.name}</h3>
                        <p>${counselor.title}</p>
                    </div>
                </div>
                <div class="counselor-specialties">
                    ${counselor.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                </div>
                <div class="counselor-location">
                    ${counselor.location}
                </div>
                <div class="counselor-availability">
                    Tersedia: <span class="${availabilityClass}">${counselor.availability}</span>
                </div>
                ${buttonsHtml}
            </div>
        `;
        
        counselorsContainer.appendChild(card);
    });
    
    // Add event listeners to booking buttons
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', handleBookingClick);
    });
}

// Handle booking button click
function handleBookingClick(e) {
    const counselorId = parseInt(e.target.dataset.counselor);
    const sessionType = e.target.dataset.type;
    
    // Set hidden inputs
    document.getElementById('counselor-id').value = counselorId;
    document.getElementById('session-type').value = sessionType;
    
    // Set radio button based on session type
    if (sessionType === 'online') {
        document.getElementById('session-online').checked = true;
    } else {
        document.getElementById('session-offline').checked = true;
    }
    
    // Show booking modal
    bookingModal.classList.add('show');
}

// Handle time slot selection
if (timeSlots) {
    timeSlots.forEach(slot => {
        if (!slot.classList.contains('disabled')) {
            slot.addEventListener('click', () => {
                timeSlots.forEach(s => s.classList.remove('selected'));
                slot.classList.add('selected');
                selectedTimeInput.value = slot.dataset.time;
            });
        }
    });
}

// Handle form submission
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const counselorId = document.getElementById('counselor-id').value;
        const counselor = counselors.find(c => c.id === parseInt(counselorId));
        
        // Generate a booking ID
        const bookingId = `CA-${Math.floor(Math.random() * 10000000).toString().padStart(8, '0')}`;
        
        // Get form values
        const name = document.getElementById('name').value;
        const sessionType = document.querySelector('input[name="session-type"]:checked').value;
        const date = document.getElementById('session-date').value;
        const time = selectedTimeInput.value;
        
        // Format date for display
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Format time for display
        const formattedTime = new Date(`2025-03-06T${time}`).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        
        // Set invoice values
        document.getElementById('invoice-counselor').textContent = counselor.name;
        document.getElementById('invoice-date').textContent = formattedDate;
        document.getElementById('invoice-time').textContent = formattedTime;
        document.getElementById('invoice-type').textContent = sessionType === 'online' ? 'Online' : 'In-person';
        document.getElementById('invoice-id').textContent = bookingId;
        document.getElementById('invoice-client-name').textContent = name;
        document.getElementById('email-client-name').textContent = name;
        
        // Generate QR code (placeholder)
        const qrCode = document.getElementById('receipt-qr');
        qrCode.innerHTML = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" fill="#FFFFFF"/>
            <rect x="20" y="20" width="80" height="80" fill="#F5F5F5"/>
            <rect x="30" y="30" width="10" height="10" fill="#000000"/>
            <rect x="50" y="30" width="10" height="10" fill="#000000"/>
            <rect x="70" y="30" width="10" height="10" fill="#000000"/>
            <rect x="30" y="50" width="10" height="10" fill="#000000"/>
            <rect x="50" y="50" width="10" height="10" fill="#000000"/>
            <rect x="70" y="50" width="10" height="10" fill="#000000"/>
            <rect x="30" y="70" width="10" height="10" fill="#000000"/>
            <rect x="50" y="70" width="10" height="10" fill="#000000"/>
            <rect x="70" y="70" width="10" height="10" fill="#000000"/>
            <text x="60" y="110" text-anchor="middle" font-size="8" fill="#666666">${bookingId}</text>
        </svg>`;
        
        // Simulate email notification
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'gmail-notification';
            notification.style = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                padding: 15px;
                display: flex;
                align-items: center;
                max-width: 350px;
                z-index: 1000;
                animation: slideIn 0.3s ease, fadeOut 0.5s ease 5s forwards;
                transform: translateX(400px);
            `;
            
            notification.innerHTML = `
                <div style="width: 40px; height: 40px; margin-right: 15px; background-color: #D44638; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
                    </svg>
                </div>
                <div>
                    <div style="font-weight: 600; margin-bottom: 5px;">New Email</div>
                    <div style="font-size: 14px; color: #555;">Your Career Advice Session has been confirmed</div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Add animation style
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(400px); }
                    to { transform: translateX(0); }
                }
                
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            // Remove notification after 6 seconds
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 6000);
        }, 1500);
        
        // Set calendar icon values
        const dateObj = new Date(date);
        const month = dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        const day = dateObj.getDate();
        document.getElementById('invoice-month').textContent = month;
        document.getElementById('invoice-day').textContent = day;
        
        // Show/hide meeting link based on session type
        if (sessionType === 'online') {
            meetingLinkContainer.style.display = 'block';
            // Generate a random Meet link
            const meetId = Math.random().toString(36).substring(2, 10);
            document.getElementById('gmeet-link').href = `https://meet.google.com/${meetId}`;
            document.getElementById('gmeet-link').textContent = `https://meet.google.com/${meetId}`;
        } else {
            meetingLinkContainer.style.display = 'none';
        }
        
        // Close booking modal and show invoice modal
        bookingModal.classList.remove('show');
        setTimeout(() => {
            invoiceModal.classList.add('show');
        }, 300);
    });
}

// Close modals
if (closeBooking) {
    closeBooking.addEventListener('click', () => {
        bookingModal.classList.remove('show');
    });
}

if (closeInvoice) {
    closeInvoice.addEventListener('click', () => {
        invoiceModal.classList.remove('show');
    });
}

if (closeConfirmation) {
    closeConfirmation.addEventListener('click', () => {
        invoiceModal.classList.remove('show');
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (bookingModal && e.target === bookingModal) {
        bookingModal.classList.remove('show');
    }
    if (invoiceModal && e.target === invoiceModal) {
        invoiceModal.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Feedback widget initializing...');
    
    // Get elements
    const widgetToggle = document.getElementById('feedbackWidgetToggle');
    const widgetMenu = document.getElementById('feedbackWidgetMenu');
    const feedbackModal = document.getElementById('feedbackModal');
    const feedbackCloseBtn = document.getElementById('feedbackCloseBtn');
    const feedbackForm = document.getElementById('feedbackForm');
    
    console.log('Widget elements:', {
        widgetToggle: !!widgetToggle,
        widgetMenu: !!widgetMenu,
        feedbackModal: !!feedbackModal
    });

    if (!widgetToggle || !widgetMenu || !feedbackModal) {
        console.error('Feedback widget elements not found!');
        return;
    }

    // Toggle widget menu
    widgetToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Widget toggle clicked');
        
        widgetMenu.classList.toggle('active');
        widgetToggle.classList.toggle('active');
    });

    // Close widget menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.feedback-floating-widget')) {
            widgetMenu.classList.remove('active');
            widgetToggle.classList.remove('active');
        }
    });

    // Handle widget option clicks
    const widgetOptions = document.querySelectorAll('.feedback-widget-option');
    widgetOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const action = this.getAttribute('data-action');
            console.log('Widget option clicked:', action);
            
            switch(action) {
                case 'feedback':
                    openFeedbackModal();
                    break;
                case 'whatsapp':
                    openWhatsApp();
                    break;
                case 'email':
                    openEmail();
                    break;
            }
        });
    });

    // Feedback Modal Functions
    function openFeedbackModal() {
        console.log('Opening feedback modal');
        feedbackModal.classList.add('active');
        widgetMenu.classList.remove('active');
        widgetToggle.classList.remove('active');
        document.body.style.overflow = 'hidden';
    }

    function closeFeedbackModal() {
        console.log('Closing feedback modal');
        feedbackModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Reset form
        document.getElementById('feedbackFormContainer').style.display = 'block';
        document.getElementById('feedbackSuccessMessage').style.display = 'none';
        if (feedbackForm) feedbackForm.reset();
        clearStarRating();
    }

    // Close modal events
    if (feedbackCloseBtn) {
        feedbackCloseBtn.addEventListener('click', closeFeedbackModal);
    }

    feedbackModal.addEventListener('click', function(event) {
        if (event.target === feedbackModal) {
            closeFeedbackModal();
        }
    });

    // Star Rating System
    const stars = document.querySelectorAll('.feedback-star');
    const ratingInput = document.getElementById('feedbackRatingInput');

    if (stars.length > 0 && ratingInput) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                ratingInput.value = rating;
                updateStarDisplay(rating);
                console.log('Rating selected:', rating);
            });

            star.addEventListener('mouseover', function() {
                const rating = this.getAttribute('data-rating');
                updateStarDisplay(rating);
            });
        });

        const ratingGroup = document.querySelector('.feedback-rating-group');
        if (ratingGroup) {
            ratingGroup.addEventListener('mouseleave', function() {
                const currentRating = ratingInput.value;
                updateStarDisplay(currentRating);
            });
        }
    }

    function updateStarDisplay(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function clearStarRating() {
        stars.forEach(star => {
            star.classList.remove('active');
        });
        if (ratingInput) ratingInput.value = '';
    }

    // Submit Feedback
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Feedback form submitted');
            
            // Show loading state
            const submitBtn = this.querySelector('.feedback-submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Hide form and show success message
                document.getElementById('feedbackFormContainer').style.display = 'none';
                document.getElementById('feedbackSuccessMessage').style.display = 'block';

                // Auto close after 3 seconds
                setTimeout(() => {
                    closeFeedbackModal();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }



    function openWhatsApp() {
        console.log('Opening WhatsApp');
        const phoneNumber = '6281324306918';
        const message = 'Hello, I need assistance regarding Pusat Karier UIN Jakarta services.';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        widgetMenu.classList.remove('active');
        widgetToggle.classList.remove('active');
    }

    function openEmail() {
        console.log('Opening email');
        const email = 'karir@uinjkt.ac.id';
        const subject = 'Support Request - Pusat Karier UIN Jakarta';
        const body = 'Hello,\n\nI need assistance with...\n\nThank you.';
        const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoURL;
        widgetMenu.classList.remove('active');
        widgetToggle.classList.remove('active');
    }

    // Keyboard accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (feedbackModal.classList.contains('active')) {
                closeFeedbackModal();
            } else if (widgetMenu.classList.contains('active')) {
                widgetMenu.classList.remove('active');
                widgetToggle.classList.remove('active');
            }
        }
    });

    console.log('Feedback widget initialized successfully!');
});
