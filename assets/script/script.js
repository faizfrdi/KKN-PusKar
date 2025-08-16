// ===========================================
// MODAL UTILITIES
// ===========================================
class ModalManager {
    static openModal(modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    static closeModal(modal, hideClass = 'hiding', delay = 300) {
        modal.classList.add(hideClass);
        setTimeout(() => {
            modal.classList.remove('show', hideClass);
            document.body.style.overflow = 'auto'; // Restore scroll
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
// ENHANCED LOGIN MODAL WITH REGISTRATION
// ===========================================
const LoginModal = {
    init() {
        this.modal = document.getElementById('loginModal');
        this.loginLink = document.querySelector('.nav-menu > a[href="#"]:last-of-type');
        
        if (!this.modal || !this.loginLink) {
            console.log('Login modal or link not found');
            return;
        }

        // Add click event to login link
        this.loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling
            ModalManager.openModal(this.modal);
            
            // Default to login form when modal opens
            if (typeof window.AuthModal !== 'undefined') {
                window.AuthModal.switchTab('login');
            }
        });
        
        ModalManager.setupModalEvents(this.modal);
        
        // Add close button functionality if exists
        const closeBtn = this.modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                ModalManager.closeModal(this.modal);
            });
        }
        
        // Initialize AuthModal after modal setup
        this.initializeAuthModal();

        // Add the Sign In/Sign Up link switching functionality
        this.setupSwitchLinks();
    },
    
    initializeAuthModal() {
        // Wait for AuthModal to be available
        const checkAuthModal = () => {
            if (typeof window.AuthModal !== 'undefined') {
                window.AuthModal.init();
            } else {
                setTimeout(checkAuthModal, 100);
            }
        };
        checkAuthModal();
    },

    // Function to handle Sign In/Sign Up link switching
    setupSwitchLinks() {
        const signInLink = this.modal.querySelector('[data-target="login"]');
        const signUpLink = this.modal.querySelector('[data-target="register"]');
        const loginForm = this.modal.querySelector('#login-form');
        const registerForm = this.modal.querySelector('#register-form');
        const signUpPrompt = this.modal.querySelector('#sign-up-prompt');
        const signInPrompt = this.modal.querySelector('#sign-in-prompt');

        // Initially, show the "Don't have an account? Sign Up" and hide "Already have an account? Sign In"
        if (registerForm) registerForm.style.display = 'none'; // Initially show the login form
        if (signInPrompt) signInPrompt.style.display = 'none'; // Hide Sign In prompt in login
        if (signUpPrompt) signUpPrompt.style.display = 'block'; // Show Sign Up prompt in login

        // Switch to login form when clicking "Sign In"
        if (signInLink) {
            signInLink.addEventListener('click', () => this.switchTab('login', loginForm, registerForm, signUpPrompt, signInPrompt));
        }

        // Switch to register form when clicking "Sign Up"
        if (signUpLink) {
            signUpLink.addEventListener('click', () => this.switchTab('register', loginForm, registerForm, signUpPrompt, signInPrompt));
        }
    },

    // Function to switch tabs and update the prompt
    switchTab(tab, loginForm, registerForm, signUpPrompt, signInPrompt) {
        if (tab === 'login') {
            if (loginForm) loginForm.style.display = 'block';
            if (registerForm) registerForm.style.display = 'none';
            if (signUpPrompt) signUpPrompt.style.display = 'block';
            if (signInPrompt) signInPrompt.style.display = 'none';
        } else if (tab === 'register') {
            if (loginForm) loginForm.style.display = 'none';
            if (registerForm) registerForm.style.display = 'block';
            if (signUpPrompt) signUpPrompt.style.display = 'none';
            if (signInPrompt) signInPrompt.style.display = 'block';
        }
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
// NEWS DATA MANAGEMENT
// ===========================================
const newsData = [
    {
        id: 1,
        title: "Panduan untuk Membuat CV yang Efektif dan Menarik bagi Jobseeker Siap dipanggil HRD!",
        date: "21 Feb, 2024",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `
            <h2>Mengapa CV Penting?</h2>
            <p>Sebuah Curriculum Vitae (CV) adalah jendela yang mengungkapkan kualifikasi, pengalaman, dan keahlian seseorang kepada calon perekrut. Pentingnya CV sebagai elemen utama dalam pencarian pekerjaan tidak bisa diragukan lagi. Ini bukan hanya sekedar daftar riwayat hidup, tetapi juga cerminan karakter, kualifikasi, dan potensi seseorang pelamar.</p>
            
            <h3>Memahami Esensi CV dan Strukturnya</h3>
            <p>Sebuah Curriculum Vitae (CV) adalah jendela yang mengungkapkan kualifikasi, pengalaman, dan keahlian seseorang kepada calon perekrut. Pentingnya CV sebagai elemen utama dalam pencarian pekerjaan tidak bisa diragukan lagi. Ini bukan hanya sekedar daftar riwayat hidup, tetapi juga cerminan dari karakter, kualifikasi, dan potensi seseorang pelamar.</p>
            
            <h2>Struktur CV yang Efektif</h2>
            <p>Struktur CV yang Efektif:</p>
            <ol>
                <li><strong>Informasi Pribadi yang Relevan:</strong><br>Informasi pribadi harus disajikan dengan jelas dan tertata. Nama lengkap, alamat, nomor telepon, dan alamat email adalah informasi yang sangat penting. Pastikan informasi kontak yang kamu cantumkan aktif.</li>
                
                <li><strong>Ringkasan Profil yang Menarik:</strong><br>Ringkasan profil merupakan highlight singkat yang menunjukkan keahlian dan pengalaman yang relevan dengan posisi yang dilamar. Ini merupakan "headline" dari CV yang harus menarik perhatian untuk mengetahui lebih lanjut.</li>
                
                <li><strong>Riwayat Pendidikan yang Terstruktur:</strong><br>Mulailah dari pendidikan terakhir yang diikuti dengan mencantumkan nama institusi, gelar yang diperoleh, dan tahun lulus. Juga mencantukan prestasi selama berkuliah jika ada relevansi dengan pekerjaan yang dicari.</li>
                
                <li><strong>Pengalaman Kerja yang Detil:</strong><br>Bagian ini mencakup pengalaman kerja yang dimiliki, termasuk nama perusahaan, posisi yang ditempati, rentang waktu, tanggung jawab, dan pencapaian selama bekerja. Pengalaman magang atau proyek yang relevan juga harus disertakan.</li>
                
                <li><strong>Keterampilan dan Kualifikasi yang Dimiliki:</strong><br>Daftar keterampilan dan kemampuan teknis serta interpersonal yang dimiliki. Contoh keterampilan teknis meliputi penggunaan perangkat lunak atau bahasa pemrograman tertentu, sementara keterampilan interpersonal meliputi kemampuan kepemimpinan, kerja tim, dan komunikasi.</li>
                
                <li><strong>Sertifikasi dan Pelatihan yang Memberi Berbeda:</strong><br>Jika ada sertifikasi atau pelatihan yang relevan dengan posisi yang dilamar, cantumkan ini di bagian ini. Ini dapat menunjukkan nilai tambah yang menunjukkan komitmen terhadap pengembangan diri.</li>
                
                <li><strong>Aktivitas dan Penghargaan Tambahan:</strong><br>Jelaskan aktivitas ekstrakurikuler, keangotaan organisasi, atau penghargaan yang pernah diperoleh. Hal ini memberikan gambaran tentang minat, kepemimpinan, dan kemampuan untuk terlibat aktif.</li>
            </ol>
            
            <h2>Menulis CV yang Efektif</h2>
            <p>Penting untuk diingat bahwa CV harus disesuaikan dengan kebutuhan dan persyaratan pekerjaan yang dilamar. Proses pengetahuan dan penyesuaian informasi di dalam CV dapat menjadi faktor yang menunjukkan kesesuaian dengan perusahaan, ketertarikan, dan prestasi yang dimiliki oleh individu tersebut.</p>
            
            <h3>Kesalahan dengan Posisi yang Dilamar: Pastikan CV kamu menunjukkan aspek-aspek yang relevan dengan pekerjaan yang diinginkan.</h3>
            
            <h3>Konsistensi dan Keterbacaan: Struktur yang jelas dan konsisten mempermudah perekrut dalam membaca dan memahami informasi yang disajikan.</h3>
            
            <h3>Pembilhan Kata dan Bahasa yang Tepat: Gunakan bahasa yang profesional dan tepat untuk mencerminkan kepribadian serta kualifikasi yang dimiliki oleh perekrut.</h3>
            
            <h3>Edit dan Revisi Berulang: Lakukan pengecekan ulang untuk memastikan tidak ada kesalahan tata bahasa atau informasi yang salah.</h3>
            
            <p>CV merupakan alat yang sangat vital dalam mencari pekerjaan. Penulisan yang tepat dan terstruktur menunjukkan fungsi untuk memikirkan CV secara efektif mempunyai keahlian yang diinginkan pelamar dengan tepat. Dengan memperhatikan struktur yang dijelaskan di atas dan menyesuaikannya dengan kebutuhan spesifik, setiap orang dapat membuat CV yang memukau dan efektif.</p>
            
            <p>Terlebih lagi, memahami arti sebenarnya dari CV dan bagaimana menyusunnya dengan efektif dapat menjadi pembeda yang signifikan dalam persaingan pencarian pekerjaan seseorang. Dengan fokus pada teknik tertulis yang menonjol informasi yang lengkap, pembaca diharapkan dapat memperoleh wawasan yang lebih baik dalam mempersiapkan CV yang memukau dan efektif.</p>
        `
    },
    {
        id: 2,
        title: "Mengenal Perbedaan Antara Internship, Part Time, dan Full Time di Dunia Kerja",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `
            <h2>Memahami Jenis-Jenis Pekerjaan</h2>
            <p>Dalam dunia kerja modern, terdapat berbagai jenis kesempatan kerja yang dapat dipilih sesuai dengan kebutuhan dan situasi masing-masing individu. Mari kita bahas perbedaan antara internship, part time, dan full time.</p>
            
            <h3>1. Internship (Magang)</h3>
            <p>Internship adalah program kerja temporer yang biasanya diikuti oleh mahasiswa atau fresh graduate untuk mendapatkan pengalaman kerja praktis di bidang yang diminati. Karakteristik internship:</p>
            <ul>
                <li>Durasi biasanya 3-6 bulan</li>
                <li>Fokus pada pembelajaran dan pengembangan skill</li>
                <li>Dapat dibayar atau tidak dibayar</li>
                <li>Sering menjadi jembatan menuju pekerjaan full time</li>
                <li>Mendapat bimbingan dari mentor atau supervisor</li>
            </ul>
            
            <h3>2. Part Time (Paruh Waktu)</h3>
            <p>Pekerjaan part time adalah pekerjaan dengan jam kerja yang lebih sedikit dibandingkan full time, biasanya kurang dari 40 jam per minggu. Karakteristik part time:</p>
            <ul>
                <li>Fleksibilitas waktu kerja</li>
                <li>Cocok untuk mahasiswa atau orang dengan komitmen lain</li>
                <li>Gaji proporsional dengan jam kerja</li>
                <li>Benefit terbatas dibandingkan full time</li>
                <li>Dapat menjadi batu loncatan karier</li>
            </ul>
            
            <h3>3. Full Time (Penuh Waktu)</h3>
            <p>Pekerjaan full time adalah pekerjaan dengan komitmen waktu penuh, biasanya 40 jam atau lebih per minggu. Karakteristik full time:</p>
            <ul>
                <li>Komitmen waktu penuh untuk pekerjaan</li>
                <li>Gaji dan benefit lengkap</li>
                <li>Jenjang karier yang jelas</li>
                <li>Tanggung jawab dan ekspektasi yang lebih tinggi</li>
                <li>Stabilitas finansial yang lebih baik</li>
            </ul>
            
            <h2>Tips Memilih Jenis Pekerjaan yang Tepat</h2>
            <p>Pemilihan jenis pekerjaan harus disesuaikan dengan kondisi personal, tujuan karier, dan situasi keuangan. Pertimbangkan faktor-faktor berikut:</p>
            <ul>
                <li>Tujuan jangka pendek dan panjang</li>
                <li>Ketersediaan waktu</li>
                <li>Kebutuhan finansial</li>
                <li>Stage karier saat ini</li>
                <li>Work-life balance yang diinginkan</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "7 Teknik Ampuh Meningkatkan Efisiensi Kerja saat Terjebak dalam Rutinitas",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `
            <h2>Mengatasi Rutinitas Kerja yang Membosankan</h2>
            <p>Rutinitas kerja yang monoton dapat menurunkan produktivitas dan motivasi. Berikut adalah 7 teknik ampuh untuk meningkatkan efisiensi kerja Anda:</p>
            
            <h3>1. Teknik Pomodoro</h3>
            <p>Bagi waktu kerja menjadi blok-blok 25 menit dengan istirahat 5 menit di antaranya. Teknik ini membantu menjaga fokus dan mencegah kelelahan mental.</p>
            
            <h3>2. Prioritas dengan Matrix Eisenhower</h3>
            <p>Kategorikan tugas berdasarkan urgensi dan kepentingan:</p>
            <ul>
                <li>Penting & Urgent: Kerjakan segera</li>
                <li>Penting & Tidak Urgent: Jadwalkan</li>
                <li>Tidak Penting & Urgent: Delegasikan</li>
                <li>Tidak Penting & Tidak Urgent: Eliminasi</li>
            </ul>
            
            <h3>3. Automation Tools</h3>
            <p>Manfaatkan teknologi untuk mengotomatisasi tugas-tugas repetitif seperti email templates, scheduling, dan data entry.</p>
            
            <h3>4. Time Blocking</h3>
            <p>Alokasikan waktu khusus untuk jenis pekerjaan tertentu. Misalnya, 9-11 AM untuk deep work, 2-3 PM untuk meeting.</p>
            
            <h3>5. Batch Processing</h3>
            <p>Kerjakan tugas-tugas serupa secara bersamaan untuk mengurangi context switching dan meningkatkan efisiensi.</p>
            
            <h3>6. Regular Break dan Exercise</h3>
            <p>Ambil istirahat teratur dan lakukan olahraga ringan untuk menjaga energi dan fokus sepanjang hari.</p>
            
            <h3>7. Continuous Learning</h3>
            <p>Investasikan waktu untuk belajar skill baru atau meningkatkan kemampuan yang sudah ada untuk menghindari stagnasi.</p>
            
            <h2>Implementasi dalam Kehidupan Sehari-hari</h2>
            <p>Mulailah dengan menerapkan satu atau dua teknik terlebih dahulu, kemudian secara bertahap tambahkan teknik lainnya. Konsistensi adalah kunci untuk melihat hasil yang signifikan.</p>
        `
    },
    // Duplicate items for pagination demonstration
    {
        id: 4,
        title: "Panduan untuk Membuat CV yang Efektif dan Menarik bagi Jobseeker Siap dipanggil HRD!",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `[Same content as item 1 for demo purposes]`
    },
    {
        id: 5,
        title: "Mengenal Perbedaan Antara Internship, Part Time, dan Full Time di Dunia Kerja",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `[Same content as item 2 for demo purposes]`
    },
    {
        id: 6,
        title: "7 Teknik Ampuh Meningkatkan Efisiensi Kerja saat Terjebak dalam Rutinitas",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `[Same content as item 3 for demo purposes]`
    },
    {
        id: 7,
        title: "Panduan untuk Membuat CV yang Efektif dan Menarik bagi Jobseeker Siap dipanggil HRD!",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `[Same content as item 1 for demo purposes]`
    },
    {
        id: 8,
        title: "Mengenal Perbedaan Antara Internship, Part Time, dan Full Time di Dunia Kerja",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `[Same content as item 2 for demo purposes]`
    },
    {
        id: 9,
        title: "7 Teknik Ampuh Meningkatkan Efisiensi Kerja saat Terjebak dalam Rutinitas",
        date: "3 Month Ago",
        type: "Job Tip",
        image: "/api/placeholder/400/200",
        content: `[Same content as item 3 for demo purposes]`
    }
];

// ===========================================
// NEWS MANAGER
// ===========================================
const NewsManager = {
    currentPage: 1,
    itemsPerPage: 9,
    
    init() {
        this.container = document.getElementById('news-container');
        this.modal = document.getElementById('newsModal');
        this.modalContent = document.getElementById('news-detail-content');
        
        if (this.container) {
            this.renderNews();
            this.setupPagination();
            this.setupModal();
        }
    },
    
    renderNews() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const newsToShow = newsData.slice(startIndex, endIndex);
        
        this.container.innerHTML = '';
        
        newsToShow.forEach(news => {
            const newsCard = this.createNewsCard(news);
            this.container.appendChild(newsCard);
        });
        
        this.attachEventListeners();
    },
    
    createNewsCard(news) {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.dataset.newsId = news.id;
        
        card.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}" loading="lazy">
            </div>
            <div class="news-content">
                <h3>${news.title}</h3>
                <div class="news-meta">
                    <span class="news-type">${news.type}</span>
                    <span class="news-date">${news.date}</span>
                </div>
            </div>
        `;
        
        return card;
    },
    
    attachEventListeners() {
        const newsCards = document.querySelectorAll('.news-card');
        newsCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const newsId = parseInt(e.currentTarget.dataset.newsId);
                this.openNewsDetail(newsId);
            });
        });
    },
    
    openNewsDetail(newsId) {
        const news = newsData.find(item => item.id === newsId);
        if (!news) return;
        
        this.modalContent.innerHTML = `
            <div class="news-detail-container">
                <div class="news-detail-header">
                    <img src="${news.image}" alt="${news.title}" class="news-detail-image">
                    <div class="news-detail-meta">
                        <span class="news-type">${news.type}</span>
                        <span class="news-detail-date">Updated on ${news.date}</span>
                    </div>
                    <h1 class="news-detail-title">${news.title}</h1>
                </div>
                <div class="news-detail-content">
                    ${news.content}
                </div>
            </div>
        `;
        
        NewsModalManager.openModal(this.modal);
    },
    
    setupModal() {
        const closeBtn = this.modal.querySelector('.close-modal');
        NewsModalManager.setupModalEvents(this.modal, closeBtn);
    },
    
    setupPagination() {
        const totalPages = Math.ceil(newsData.length / this.itemsPerPage);
        const pageNumbers = document.querySelectorAll('.page-number');
        const pageLinks = document.querySelectorAll('.page-link');
        
        // Setup page numbers
        pageNumbers.forEach(pageNum => {
            pageNum.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(e.target.dataset.page);
                if (page !== this.currentPage) {
                    this.goToPage(page);
                }
            });
        });
        
        // Setup previous/next links
        pageLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const action = e.target.dataset.page;
                
                if (action === 'prev' && this.currentPage > 1) {
                    this.goToPage(this.currentPage - 1);
                } else if (action === 'next' && this.currentPage < totalPages) {
                    this.goToPage(this.currentPage + 1);
                }
            });
        });
    },
    
    goToPage(page) {
        this.currentPage = page;
        this.renderNews();
        this.updatePaginationUI();
        
        // Scroll to top of news section
        document.querySelector('.news-page').scrollIntoView({ 
            behavior: 'smooth' 
        });
    },
    
    updatePaginationUI() {
        // Remove active class from all page numbers
        document.querySelectorAll('.page-number').forEach(page => {
            page.classList.remove('active');
        });
        
        // Add active class to current page
        const currentPageElement = document.querySelector(`[data-page="${this.currentPage}"]`);
        if (currentPageElement && currentPageElement.classList.contains('page-number')) {
            currentPageElement.classList.add('active');
        }
    }
};

// ===========================================
// SEARCH FUNCTIONALITY (NEWS PAGE)
// ===========================================
const NewsSearch = {
    init() {
        this.searchBox = document.querySelector('.search-box');
        
        if (this.searchBox) {
            this.setupSearchEvents();
        }
    },
    
    setupSearchEvents() {
        this.searchBox.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            this.performSearch(query);
        });
        
        this.searchBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = e.target.value.toLowerCase().trim();
                this.performSearch(query);
            }
        });
    },
    
    performSearch(query) {
        if (query === '') {
            // Show all news if search is empty
            NewsManager.renderNews();
            return;
        }
        
        // Filter news based on search query
        const filteredNews = newsData.filter(news => 
            news.title.toLowerCase().includes(query) || 
            news.type.toLowerCase().includes(query) ||
            news.content.toLowerCase().includes(query)
        );
        
        this.displaySearchResults(filteredNews, query);
    },
    
    displaySearchResults(results, query) {
        const container = document.getElementById('news-container');
        
        if (results.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <h3 style="color: #666; margin-bottom: 10px;">No results found for "${query}"</h3>
                    <p style="color: #999;">Try different keywords or browse all news below.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = '';
        results.forEach(news => {
            const newsCard = NewsManager.createNewsCard(news);
            container.appendChild(newsCard);
        });
        
        // Reattach event listeners for search results
        NewsManager.attachEventListeners();
    }
};

// ===========================================
// NEWS PAGE UTILITIES
// ===========================================
const NewsPageUtils = {
    init() {
        this.setupSmoothScrolling();
        this.setupLazyLoading();
        this.setupKeyboardNavigation();
    },
    
    setupSmoothScrolling() {
        // Enable smooth scrolling for all internal links
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
    },
    
    setupLazyLoading() {
        // Intersection Observer for lazy loading images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },
    
    setupKeyboardNavigation() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            // ESC key to close modals
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    NewsModalManager.closeModal(openModal);
                }
            }
            
            // Enter key to open news detail when news card is focused
            if (e.key === 'Enter') {
                const focusedCard = document.activeElement;
                if (focusedCard && focusedCard.classList.contains('news-card')) {
                    const newsId = parseInt(focusedCard.dataset.newsId);
                    NewsManager.openNewsDetail(newsId);
                }
            }
        });
        
        // Make news cards focusable
        document.querySelectorAll('.news-card').forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Read article: ${card.querySelector('h3').textContent}`);
        });
    }
};

// ===========================================
// NEWS PAGE ANALYTICS & TRACKING
// ===========================================
const NewsAnalytics = {
    init() {
        this.trackPageView();
        this.setupEventTracking();
    },
    
    trackPageView() {
        // Track page view (implement with your analytics service)
        console.log('News page viewed');
    },
    
    setupEventTracking() {
        // Track news card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.news-card')) {
                const newsCard = e.target.closest('.news-card');
                const newsTitle = newsCard.querySelector('h3').textContent;
                this.trackEvent('news_click', {
                    title: newsTitle,
                    position: Array.from(newsCard.parentNode.children).indexOf(newsCard) + 1
                });
            }
            
            // Track pagination clicks
            if (e.target.classList.contains('page-number') || e.target.classList.contains('page-link')) {
                const page = e.target.dataset.page || e.target.textContent;
                this.trackEvent('pagination_click', { page: page });
            }
            
            // Track search usage
            if (e.target.classList.contains('search-box')) {
                this.trackEvent('search_initiated');
            }
        });
    },
    
    trackEvent(eventName, data = {}) {
        // Implement with your analytics service (Google Analytics, etc.)
        console.log('Event tracked:', eventName, data);
    }
};

// ===========================================
// PERFORMANCE MONITORING
// ===========================================
const NewsPerformance = {
    init() {
        this.measureLoadTime();
        this.setupPerformanceObserver();
    },
    
    measureLoadTime() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`News page loaded in ${loadTime.toFixed(2)}ms`);
        });
    },
    
    setupPerformanceObserver() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }
};

// ===========================================
// ACCESSIBILITY ENHANCEMENTS
// ===========================================
const NewsAccessibility = {
    init() {
        this.setupARIALabels();
        this.setupFocusManagement();
        this.setupScreenReaderSupport();
    },
    
    setupARIALabels() {
        // Add ARIA labels to interactive elements
        document.querySelectorAll('.news-card').forEach((card, index) => {
            const title = card.querySelector('h3').textContent;
            card.setAttribute('aria-label', `Article ${index + 1}: ${title}`);
            card.setAttribute('role', 'article');
        });
        
        // Add ARIA labels to pagination
        document.querySelectorAll('.page-number').forEach(page => {
            const pageNum = page.textContent;
            page.setAttribute('aria-label', `Go to page ${pageNum}`);
        });
    },
    
    setupFocusManagement() {
        // Manage focus for modal
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('show', () => {
                const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (firstFocusable) {
                    firstFocusable.focus();
                }
            });
        });
    },
    
    setupScreenReaderSupport() {
        // Add live region for search results
        const searchContainer = document.getElementById('news-container');
        searchContainer.setAttribute('aria-live', 'polite');
        searchContainer.setAttribute('aria-label', 'News articles');
    }
};

// ===========================================
// ERROR HANDLING
// ===========================================
const NewsErrorHandler = {
    init() {
        this.setupGlobalErrorHandling();
        this.setupNetworkErrorHandling();
    },
    
    setupGlobalErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('News page error:', e.error);
            this.showErrorMessage('Something went wrong. Please refresh the page.');
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            this.showErrorMessage('Failed to load content. Please try again.');
        });
    },
    
    setupNetworkErrorHandling() {
        // Monitor network status
        window.addEventListener('online', () => {
            this.hideErrorMessage();
            console.log('Connection restored');
        });
        
        window.addEventListener('offline', () => {
            this.showErrorMessage('No internet connection. Some features may not work.');
        });
    },
    
    showErrorMessage(message) {
        // Remove existing error message
        this.hideErrorMessage();
        
        const errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: #f44336;
            color: white;
            padding: 15px 30px;
            border-radius: 5px;
            z-index: 10001;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        errorDiv.textContent = message;
        
        document.body.appendChild(errorDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => this.hideErrorMessage(), 5000);
    },
    
    hideErrorMessage() {
        const existingError = document.getElementById('error-message');
        if (existingError) {
            existingError.remove();
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
// DROPDOWN NAVIGATION
// ===========================================
const DropdownNavigation = {
    init() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            const content = dropdown.querySelector('.dropdown-content');
            let hoverTimer;
            
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
            if (trigger) {
                trigger.addEventListener('click', (e) => {
                    if (window.innerWidth <= 640) {
                        e.preventDefault();
                        content.classList.toggle('active');
                        
                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.querySelector('.dropdown-content').classList.remove('active');
                            }
                        });
                    }
                });
            }
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.querySelector('.dropdown-content').classList.remove('active');
                });
            }
        });
    }
};

// ===========================================
// EVENT MANAGEMENT 
// ===========================================
const EventManager = {
    init() {
        this.setupEventCards();
        this.setupPagination();
        this.setupDropdownToggle();
    },

    setupEventCards() {
        const eventCards = document.querySelectorAll('.event-card');
        
        eventCards.forEach(card => {
            card.addEventListener('click', function() {
                // Navigasi ke detail event atau buka modal
                console.log('Event card clicked');
                // Contoh: window.location.href = 'event-detail.html?id=' + eventId;
            });
        });
    },

    setupPagination() {
        const pageLinks = document.querySelectorAll('.page-number, .page-link');
        
        pageLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all page numbers
                document.querySelectorAll('.page-number').forEach(page => {
                    page.classList.remove('active');
                });
                
                // Add active class to clicked page
                if (link.classList.contains('page-number')) {
                    link.classList.add('active');
                }
                
                // Load new events (implementasi tergantung backend)
                const pageNum = link.textContent;
                if (pageNum && pageNum !== 'Next' && pageNum !== 'Previous') {
                    this.loadEvents(pageNum);
                }
            });
        });
    },

    setupDropdownToggle() {
        const dropdowns = document.querySelectorAll('.nav-menu .dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                });
            }
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Prevent dropdown menu clicks from closing the dropdown
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    },

    // Function to load events (placeholder - implementasi tergantung backend)
    loadEvents(page) {
        console.log('Loading events for page:', page);
        // Implementasi AJAX untuk memuat event berdasarkan halaman
        // fetch('/api/events?page=' + page)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Update events grid dengan data baru
        //     });
    }
};

// ===========================================
// ENHANCED MODAL FUNCTIONALITY
// ===========================================
const EnhancedModal = {
    init() {
        // Alternative modal functionality if needed for events page
        const modal = document.getElementById('loginModal');
        const loginLink = document.querySelector('.nav-menu a:last-child');
        
        if (modal && loginLink) {
            // Function to open modal
            const openModal = () => {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            };

            // Function to close modal
            const closeModal = () => {
                modal.classList.add('hiding');
                setTimeout(() => {
                    modal.classList.remove('show', 'hiding');
                    document.body.style.overflow = 'auto';
                }, 300); // Match this with animation duration
            };

            // When user clicks login link, open modal
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });

            // When user clicks outside of the modal content, close it
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Add escape key functionality
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('show')) {
                    closeModal();
                }
            });
        }
    }
};

// ===========================================
// Language Switcher Module Handles bilingual functionality for the website
// ===========================================
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getStoredLanguage();
        this.init();
    }

    /**
     * Get stored language from localStorage or default to 'en'
     */
    getStoredLanguage() {
        try {
            return localStorage.getItem('website_language') || 'en';
        } catch (error) {
            console.warn('localStorage not available:', error);
            return 'en';
        }
    }

    /**
     * Store language preference
     */
    storeLanguage(lang) {
        try {
            localStorage.setItem('website_language', lang);
        } catch (error) {
            console.warn('Could not store language preference:', error);
        }
    }

    /**
     * Initialize the language switcher
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupLanguage());
        } else {
            this.setupLanguage();
        }
    }

    /**
     * Setup language functionality
     */
    setupLanguage() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add event listeners with delegation for dynamically loaded content
        this.attachEventListeners();
        
        // Update button states after a short delay to ensure elements are loaded
        setTimeout(() => this.updateButtonStates(), 100);

        // Listen for header load events
        document.addEventListener('headerLoaded', () => {
            setTimeout(() => {
                this.setLanguage(this.currentLang);
                this.updateButtonStates();
            }, 50);
        });
    }

    /**
     * Attach event listeners for language buttons
     */
    attachEventListeners() {
        // Use event delegation to handle dynamically loaded content
        document.addEventListener('click', (e) => {
            // Check if clicked element is English button
            if (e.target.id === 'btn-en' || e.target.closest('#btn-en')) {
                e.preventDefault();
                this.setLanguage('en');
            } 
            // Check if clicked element is Indonesian button
            else if (e.target.id === 'btn-id' || e.target.closest('#btn-id')) {
                e.preventDefault();
                this.setLanguage('id');
            }
        });

        // Listen for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 'l') { // Alt + L to toggle language
                e.preventDefault();
                const newLang = this.currentLang === 'en' ? 'id' : 'en';
                this.setLanguage(newLang);
            }
        });
    }

    /**
     * Set the active language
     */
    setLanguage(lang) {
        // Validate language
        if (!['en', 'id'].includes(lang)) {
            console.warn('Invalid language:', lang);
            return;
        }

        this.currentLang = lang;
        this.storeLanguage(lang);
        
        // Update body class for CSS targeting
        this.updateBodyClass(lang);
        
        // Update button states
        this.updateButtonStates();
        
        // Trigger custom event for other components
        this.dispatchLanguageChangeEvent(lang);

        // Update search placeholder if exists
        this.updateSearchPlaceholder(lang);

        // Log language change for debugging
        console.log('Language changed to:', lang);
    }

    /**
     * Update body class for CSS language targeting
     */
    updateBodyClass(lang) {
        // Remove existing language classes
        document.body.className = document.body.className.replace(/lang-\w+/g, '').trim();
        
        // Add new language class
        document.body.classList.add(`lang-${lang}`);
    }

    /**
     * Update button states
     */
    updateButtonStates() {
        const btnEn = document.getElementById('btn-en');
        const btnId = document.getElementById('btn-id');
        
        if (btnEn && btnId) {
            // Remove active class from both buttons
            btnEn.classList.remove('active');
            btnId.classList.remove('active');
            
            // Add active class to current language button
            if (this.currentLang === 'en') {
                btnEn.classList.add('active');
            } else {
                btnId.classList.add('active');
            }

            // Update aria-pressed attributes for accessibility
            btnEn.setAttribute('aria-pressed', this.currentLang === 'en');
            btnId.setAttribute('aria-pressed', this.currentLang === 'id');
        }
    }

    /**
     * Update search placeholder text
     */
    updateSearchPlaceholder(lang) {
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            const placeholders = {
                'en': 'Search...',
                'id': 'Cari...'
            };
            searchBox.placeholder = placeholders[lang] || placeholders['en'];
        }
    }

    /**
     * Dispatch custom language change event
     */
    dispatchLanguageChangeEvent(lang) {
        try {
            const event = new CustomEvent('languageChanged', { 
                detail: { 
                    language: lang,
                    previousLanguage: this.previousLang || 'en'
                }
            });
            window.dispatchEvent(event);
            this.previousLang = lang;
        } catch (error) {
            console.warn('Could not dispatch language change event:', error);
        }
    }

    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Toggle between languages
     */
    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'id' : 'en';
        this.setLanguage(newLang);
    }

    /**
     * Check if a specific language is active
     */
    isLanguageActive(lang) {
        return this.currentLang === lang;
    }

    /**
     * Get language display name
     */
    getLanguageDisplayName(lang = this.currentLang) {
        const names = {
            'en': 'English',
            'id': 'Indonesia'
        };
        return names[lang] || 'Unknown';
    }

    /**
     * Force refresh language display
     * Useful when new content is loaded dynamically
     */
    refresh() {
        this.setLanguage(this.currentLang);
        this.updateButtonStates();
    }

    /**
     * Reset to default language
     */
    reset() {
        this.setLanguage('en');
    }

    /**
     * Get available languages
     */
    getAvailableLanguages() {
        return [
            { code: 'en', name: 'English', native: 'English' },
            { code: 'id', name: 'Indonesian', native: 'Indonesia' }
        ];
    }
}

/**
 * Initialize and expose LanguageSwitcher globally
 */
(function() {
    // Create global instance
    window.LanguageSwitcher = new LanguageSwitcher();

    // Expose useful methods to global scope for easy access
    window.setLanguage = function(lang) {
        window.LanguageSwitcher.setLanguage(lang);
    };

    window.getCurrentLanguage = function() {
        return window.LanguageSwitcher.getCurrentLanguage();
    };

    window.toggleLanguage = function() {
        window.LanguageSwitcher.toggleLanguage();
    };

    // Listen for dynamic content loading (like header loading)
    document.addEventListener('DOMNodeInserted', function(e) {
        // Check if language buttons were inserted
        if (e.target.id === 'btn-en' || e.target.id === 'btn-id' || 
            (e.target.querySelector && (e.target.querySelector('#btn-en') || e.target.querySelector('#btn-id')))) {
            setTimeout(() => {
                window.LanguageSwitcher.refresh();
            }, 100);
        }
    });

    // Modern alternative using MutationObserver for better performance
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            let shouldRefresh = false;
            
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            if (node.id === 'btn-en' || node.id === 'btn-id' || 
                                node.querySelector && (node.querySelector('#btn-en') || node.querySelector('#btn-id'))) {
                                shouldRefresh = true;
                            }
                        }
                    });
                }
            });

            if (shouldRefresh) {
                setTimeout(() => {
                    window.LanguageSwitcher.refresh();
                }, 100);
            }
        });

        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Store observer for potential cleanup
        window.LanguageSwitcher.observer = observer;
    }

    // Refresh language switcher when header is loaded
    document.addEventListener('headerLoaded', function() {
        setTimeout(() => {
            window.LanguageSwitcher.refresh();
        }, 150);
    });

    console.log('Language Switcher initialized with language:', window.LanguageSwitcher.getCurrentLanguage());
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
}

// ===========================================
// DEBUG UTILITIES
// ===========================================
const DebugUtilities = {
    init() {
        // Debug untuk dropdown
        console.log('Dropdowns found:', document.querySelectorAll('.dropdown').length);
        
        document.querySelectorAll('.dropdown').forEach((dropdown, index) => {
            dropdown.style.cursor = 'pointer';
            console.log(`Dropdown ${index + 1}:`, dropdown.textContent.trim());
        });
    }
};

// ===========================================
// MAIN INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core modules
    CounselorManager.init();
    BookingManager.init();
    DropdownNavigation.init();
    LoginModal.init();
    MobileMenu.init();
    NewsManager.init();
    NewsSearch.init();
    
    // Initialize additional modules from paste.txt
    EventManager.init();
    EnhancedModal.init();
    DebugUtilities.init();
    NewsPageUtils.init();
    NewsAnalytics.init();
    NewsPerformance.init();
    NewsAccessibility.init();
    NewsErrorHandler.init();
    
    // Initialize optional modules if elements exist
    if (document.getElementById('feedbackWidgetToggle')) {
        FeedbackWidget.init();
    }
    
    console.log('All modules initialized successfully!');
});
