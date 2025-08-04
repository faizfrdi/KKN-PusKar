// ===========================================
// MODAL UTILITIES
// ===========================================
class ModalManager {
    static openModal(modal) {
        modal.classList.add('show');
    }
    
    static closeModal(modal, hideClass = 'hiding', delay = 300) {
        modal.classList.add(hideClass);
        setTimeout(() => {
            modal.classList.remove('show', hideClass);
        }, delay);
    }
    
    static setupModalEvents(modal, closeBtn = null) {
        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
        
        // Close on button click
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal(modal));
        }
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.closeModal(modal);
            }
        });
    }
    
}

// ===========================================
// LOGIN MODAL
// ===========================================
const LoginModal = {
    init() {
        this.modal = document.getElementById('loginModal');
        this.loginLink = document.querySelector('.nav-menu a:last-child');
        
        if (!this.modal || !this.loginLink) return;
        
        this.loginLink.onclick = (e) => {
            e.preventDefault();
            ModalManager.openModal(this.modal);
        };
        
        ModalManager.setupModalEvents(this.modal);
    }
};

// ===========================================
// MOBILE MENU
// ===========================================
const MobileMenu = {
    init() {
        this.navContainer = document.querySelector('.nav-container');
        this.navMenu = document.querySelector('.nav-menu');
        
        if (!this.navContainer || !this.navMenu) return;
        
        this.createMenuToggle();
        this.setupEventListeners();
    },
    
    createMenuToggle() {
        this.menuToggle = document.createElement('div');
        this.menuToggle.className = 'menu-toggle';
        this.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        this.navContainer.insertBefore(this.menuToggle, document.querySelector('.search-container'));
    },
    
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        const icon = this.menuToggle.querySelector('i');
        icon.className = this.navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    },
    
    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.querySelector('i').className = 'fas fa-bars';
    },
    
    setupEventListeners() {
        this.menuToggle.addEventListener('click', () => this.toggleMenu());
        
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.menuToggle.contains(e.target) && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 640 && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }
};

// ===========================================
// COUNSELOR DATA & MANAGEMENT
// ===========================================
const counselors = [
    {
        id: 1, name: "nama", title: "Career Development Specialist",
        avatar: "/api/placeholder/80/80",
        specialties: ["Career Transition", "Job Interview Preparation", "Leadership Development"],
        location: "Pusat Karier UIN Jakarta", availability: "Tersedia hari ini",
        availableOnline: true, availableOffline: true
    },
    {
        id: 2, name: "nama", title: "HR & Recruitment Expert",
        avatar: "/api/placeholder/80/80",
        specialties: ["Resume Building", "Hiring Process", "Salary Negotiation"],
        location: "Pusat Karier UIN Jakarta", availability: "Jumat, 07 Maret 2025",
        availableOnline: true, availableOffline: true
    },
    {
        id: 3, name: "nama", title: "Business & Entrepreneurship Advisor",
        avatar: "/api/placeholder/80/80",
        specialties: ["Startup Guidance", "Business Planning", "Market Analysis"],
        location: "Pusat Karier UIN Jakarta", availability: "Tersedia hari ini",
        availableOnline: true, availableOffline: false
    },
    {
        id: 4, name: "nama", title: "Academic & Research Career Counselor",
        avatar: "/api/placeholder/80/80",
        specialties: ["Research Careers", "Academic Job Market", "Publication Strategy"],
        location: "Pusat Karier UIN Jakarta", availability: "Jumat, 07 Maret 2025",
        availableOnline: true, availableOffline: true
    },
    {
        id: 5, name: "nama", title: "Education & Training Specialist",
        avatar: "/api/placeholder/80/80",
        specialties: ["Educational Planning", "Skill Development", "Training Programs"],
        location: "Pusat Karier UIN Jakarta", availability: "Tersedia hari ini",
        availableOnline: false, availableOffline: true
    },
    {
        id: 6, name: "nama", title: "Human Resources Consultant",
        avatar: "/api/placeholder/80/80",
        specialties: ["Career Mapping", "Professional Development", "Workplace Dynamics"],
        location: "Pusat Karier UIN Jakarta", availability: "Jumat, 07 Maret 2025",
        availableOnline: true, availableOffline: true
    }
];

const CounselorManager = {
    init() {
        this.container = document.getElementById('counselors-container');
        if (this.container) this.render();
    },
    
    render() {
        this.container.innerHTML = '';
        counselors.forEach(counselor => {
            const card = this.createCounselorCard(counselor);
            this.container.appendChild(card);
        });
        this.attachEventListeners();
    },
    
    createCounselorCard(counselor) {
        const card = document.createElement('div');
        card.className = 'counselor-card';
        
        const availabilityClass = counselor.availability.includes('hari ini') ? 'available-badge' : 'future-badge';
        const buttonsHtml = this.createButtonsHtml(counselor);
        
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
                <div class="counselor-location">${counselor.location}</div>
                <div class="counselor-availability">
                    Tersedia: <span class="${availabilityClass}">${counselor.availability}</span>
                </div>
                ${buttonsHtml}
            </div>
        `;
        
        return card;
    },
    
    createButtonsHtml(counselor) {
        const buttons = [];
        if (counselor.availableOnline) {
            buttons.push(`<button class="btn btn-outline book-btn" data-counselor="${counselor.id}" data-type="online">Konsultasi Online</button>`);
        }
        if (counselor.availableOffline) {
            buttons.push(`<button class="btn btn-primary book-btn" data-counselor="${counselor.id}" data-type="offline">Pesan Janji Temu</button>`);
        }
        return `<div class="btn-container">${buttons.join('')}</div>`;
    },
    
    attachEventListeners() {
        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.addEventListener('click', BookingManager.handleBookingClick);
        });
    }
};

// ===========================================
// BOOKING SYSTEM
// ===========================================
const BookingManager = {
    init() {
        this.bookingModal = document.getElementById('booking-modal');
        this.invoiceModal = document.getElementById('invoice-modal');
        this.bookingForm = document.getElementById('booking-form');
        this.selectedTimeInput = document.getElementById('selected-time');
        this.meetingLinkContainer = document.getElementById('meeting-link-container');
        
        this.setupEventListeners();
        this.setupDateConstraints();
    },
    
    handleBookingClick(e) {
        const counselorId = parseInt(e.target.dataset.counselor);
        const sessionType = e.target.dataset.type;
        
        document.getElementById('counselor-id').value = counselorId;
        document.getElementById('session-type').value = sessionType;
        document.getElementById(`session-${sessionType}`).checked = true;
        
        ModalManager.openModal(BookingManager.bookingModal);
    },
    
    setupEventListeners() {
        // Time slot selection
        document.querySelectorAll('.time-slot').forEach(slot => {
            if (!slot.classList.contains('disabled')) {
                slot.addEventListener('click', () => this.selectTimeSlot(slot));
            }
        });
        
        // Form submission
        if (this.bookingForm) {
            this.bookingForm.addEventListener('submit', (e) => this.handleFormSubmission(e));
        }
        
        // Modal close events
        ['close-booking', 'close-invoice', 'close-confirmation'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('click', () => {
                    const modal = id.includes('booking') ? this.bookingModal : this.invoiceModal;
                    ModalManager.closeModal(modal);
                });
            }
        });
        
        // Setup modal events
        if (this.bookingModal) ModalManager.setupModalEvents(this.bookingModal);
        if (this.invoiceModal) ModalManager.setupModalEvents(this.invoiceModal);
    },
    
    selectTimeSlot(slot) {
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
        slot.classList.add('selected');
        this.selectedTimeInput.value = slot.dataset.time;
    },
    
    setupDateConstraints() {
        const today = new Date().toISOString().split('T')[0];
        const sessionDateInput = document.getElementById('session-date');
        if (sessionDateInput) sessionDateInput.min = today;
    },
    
    handleFormSubmission(e) {
        e.preventDefault();
        
        const counselorId = document.getElementById('counselor-id').value;
        const counselor = counselors.find(c => c.id === parseInt(counselorId));
        const formData = this.getFormData();
        
        this.populateInvoice(counselor, formData);
        this.showEmailNotification();
        
        ModalManager.closeModal(this.bookingModal);
        setTimeout(() => ModalManager.openModal(this.invoiceModal), 300);
    },
    
    getFormData() {
        return {
            name: document.getElementById('name').value,
            sessionType: document.querySelector('input[name="session-type"]:checked').value,
            date: document.getElementById('session-date').value,
            time: this.selectedTimeInput.value,
            bookingId: `CA-${Math.floor(Math.random() * 10000000).toString().padStart(8, '0')}`
        };
    },
    
    populateInvoice(counselor, formData) {
        const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
        const formattedTime = new Date(`2025-03-06T${formData.time}`).toLocaleTimeString('en-US', {
            hour: 'numeric', minute: 'numeric', hour12: true
        });
        
        // Set invoice values
        const elements = {
            'invoice-counselor': counselor.name,
            'invoice-date': formattedDate,
            'invoice-time': formattedTime,
            'invoice-type': formData.sessionType === 'online' ? 'Online' : 'In-person',
            'invoice-id': formData.bookingId,
            'invoice-client-name': formData.name,
            'email-client-name': formData.name
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        this.setupCalendarIcon(formData.date);
        this.setupMeetingLink(formData.sessionType);
        this.generateQRCode(formData.bookingId);
    },
    
    setupCalendarIcon(date) {
        const dateObj = new Date(date);
        const month = dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        const day = dateObj.getDate();
        
        const monthEl = document.getElementById('invoice-month');
        const dayEl = document.getElementById('invoice-day');
        if (monthEl) monthEl.textContent = month;
        if (dayEl) dayEl.textContent = day;
    },
    
    setupMeetingLink(sessionType) {
        if (sessionType === 'online') {
            this.meetingLinkContainer.style.display = 'block';
            const meetId = Math.random().toString(36).substring(2, 10);
            const meetLink = `https://meet.google.com/${meetId}`;
            const linkEl = document.getElementById('gmeet-link');
            if (linkEl) {
                linkEl.href = meetLink;
                linkEl.textContent = meetLink;
            }
        } else {
            this.meetingLinkContainer.style.display = 'none';
        }
    },
    
    generateQRCode(bookingId) {
        const qrCode = document.getElementById('receipt-qr');
        if (qrCode) {
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
        }
    },
    
    showEmailNotification() {
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'gmail-notification';
            notification.style.cssText = `
                position: fixed; bottom: 20px; right: 20px; background-color: #fff;
                border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                padding: 15px; display: flex; align-items: center; max-width: 350px;
                z-index: 1000; animation: slideIn 0.3s ease, fadeOut 0.5s ease 5s forwards;
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
            this.addNotificationStyles();
            
            setTimeout(() => {
                notification.remove();
            }, 6000);
        }, 1500);
    },
    
    addNotificationStyles() {
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
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
        }
    }
};

// ===========================================
// FEEDBACK WIDGET
// ===========================================
const FeedbackWidget = {
    init() {
        this.widgetToggle = document.getElementById('feedbackWidgetToggle');
        this.widgetMenu = document.getElementById('feedbackWidgetMenu');
        this.feedbackModal = document.getElementById('feedbackModal');
        this.feedbackForm = document.getElementById('feedbackForm');
        this.ratingInput = document.getElementById('feedbackRatingInput');
        
        if (!this.widgetToggle || !this.widgetMenu || !this.feedbackModal) {
            console.error('Feedback widget elements not found!');
            return;
        }
        
        this.setupEventListeners();
        this.setupStarRating();
    },
    
    setupEventListeners() {
        // Toggle widget menu
        this.widgetToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleWidget();
        });
        
        // Close widget on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.feedback-floating-widget')) {
                this.closeWidget();
            }
        });
        
        // Widget options
        document.querySelectorAll('.feedback-widget-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleWidgetAction(option.getAttribute('data-action'));
            });
        });
        
        // Modal events
        const closeBtn = document.getElementById('feedbackCloseBtn');
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeFeedbackModal());
        
        this.feedbackModal.addEventListener('click', (e) => {
            if (e.target === this.feedbackModal) this.closeFeedbackModal();
        });
        
        // Form submission
        if (this.feedbackForm) {
            this.feedbackForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.feedbackModal.classList.contains('active')) {
                    this.closeFeedbackModal();
                } else if (this.widgetMenu.classList.contains('active')) {
                    this.closeWidget();
                }
            }
        });
    },
    
    toggleWidget() {
        this.widgetMenu.classList.toggle('active');
        this.widgetToggle.classList.toggle('active');
    },
    
    closeWidget() {
        this.widgetMenu.classList.remove('active');
        this.widgetToggle.classList.remove('active');
    },
    
    handleWidgetAction(action) {
        const actions = {
            feedback: () => this.openFeedbackModal(),
            whatsapp: () => this.openWhatsApp(),
            email: () => this.openEmail()
        };
        
        if (actions[action]) actions[action]();
    },
    
    openFeedbackModal() {
        this.feedbackModal.classList.add('active');
        this.closeWidget();
        document.body.style.overflow = 'hidden';
    },
    
    closeFeedbackModal() {
        this.feedbackModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.resetFeedbackForm();
    },
    
    resetFeedbackForm() {
        document.getElementById('feedbackFormContainer').style.display = 'block';
        document.getElementById('feedbackSuccessMessage').style.display = 'none';
        if (this.feedbackForm) this.feedbackForm.reset();
        this.clearStarRating();
    },
    
    setupStarRating() {
        const stars = document.querySelectorAll('.feedback-star');
        if (stars.length === 0 || !this.ratingInput) return;
        
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-rating');
                this.ratingInput.value = rating;
                this.updateStarDisplay(rating);
            });
            
            star.addEventListener('mouseover', () => {
                this.updateStarDisplay(star.getAttribute('data-rating'));
            });
        });
        
        const ratingGroup = document.querySelector('.feedback-rating-group');
        if (ratingGroup) {
            ratingGroup.addEventListener('mouseleave', () => {
                this.updateStarDisplay(this.ratingInput.value);
            });
        }
    },
    
    updateStarDisplay(rating) {
        document.querySelectorAll('.feedback-star').forEach((star, index) => {
            star.classList.toggle('active', index < rating);
        });
    },
    
    clearStarRating() {
        document.querySelectorAll('.feedback-star').forEach(star => {
            star.classList.remove('active');
        });
        if (this.ratingInput) this.ratingInput.value = '';
    },
    
    handleFormSubmit(e) {
        e.preventDefault();
        
        const submitBtn = this.feedbackForm.querySelector('.feedback-submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            document.getElementById('feedbackFormContainer').style.display = 'none';
            document.getElementById('feedbackSuccessMessage').style.display = 'block';
            
            setTimeout(() => {
                this.closeFeedbackModal();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    },
    
    openWhatsApp() {
        const phoneNumber = '6281324306918';
        const message = 'Hello, I need assistance regarding Pusat Karier UIN Jakarta services.';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        this.closeWidget();
    },
    
    openEmail() {
        const email = 'karir@uinjkt.ac.id';
        const subject = 'Support Request - Pusat Karier UIN Jakarta';
        const body = 'Hello,\n\nI need assistance with...\n\nThank you.';
        
        // Show email options to user
        this.showEmailOptions(email, subject, body);
        this.closeWidget();
    },
    
    showEmailOptions(email, subject, body) {
        // Create modal for email options
        const emailModal = document.createElement('div');
        emailModal.className = 'email-modal';
        emailModal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); display: flex; align-items: center;
            justify-content: center; z-index: 10000;
        `;
        
        emailModal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 10px; max-width: 400px; text-align: center;">
                <h3 style="margin-bottom: 20px;">Choose Email Option</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <button class="email-option-btn" data-type="gmail" style="padding: 12px 20px; border: none; background: #d44638; color: white; border-radius: 5px; cursor: pointer;">
                        📧 Open Gmail
                    </button>
                    <button class="email-option-btn" data-type="outlook" style="padding: 12px 20px; border: none; background: #0078d4; color: white; border-radius: 5px; cursor: pointer;">
                        📨 Open Outlook
                    </button>
                    <button class="email-option-btn" data-type="mailto" style="padding: 12px 20px; border: none; background: #28a745; color: white; border-radius: 5px; cursor: pointer;">
                        📮 Open Default Email App
                    </button>
                    <button id="email-modal-close" style="padding: 8px 16px; border: 1px solid #ccc; background: white; border-radius: 5px; cursor: pointer;">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(emailModal);
        
        // Handle email option clicks
        emailModal.querySelectorAll('.email-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.type;
                const urls = {
                    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
                    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
                    mailto: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                };
                
                if (type === 'mailto') {
                    window.location.href = urls[type];
                } else {
                    window.open(urls[type], '_blank');
                }
                
                emailModal.remove();
            });
        });
        
        // Close modal
        document.getElementById('email-modal-close').addEventListener('click', () => {
            emailModal.remove();
        });
        
        emailModal.addEventListener('click', (e) => {
            if (e.target === emailModal) emailModal.remove();
        });
    }
};

// ===========================================
// MAIN INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
     LoginModal.init(); // JANGAN inisialisasi di sini!
     MobileMenu.init(); // JANGAN inisialisasi di sini!
     CounselorManager.init();
     BookingManager.init();
     FeedbackWidget.init();
     console.log('All modules initialized successfully!');
 });


// ===========================================
// DROPDOWN MENU
// ===========================================
const dropdowns = document.querySelectorAll('.nav-menu .dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('active');
    });
});
