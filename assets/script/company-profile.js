// Complete Company Profile Manager with all companies
const CompanyProfileManager = {
    companies: [
        {
            id: 1,
            name: "Jet Group Co.",
            location: "Jakarta, Indonesia",
            logo: "jet",
            vacancyCount: "2 Vacancy",
            latestPost: "June 6, 2024",
            description: {
                main: "Jet Group Co adalah perusahaan yang bergerak dalam berbagai bidang, termasuk teknologi informasi, layanan keuangan, dan konsultasi bisnis. Didirikan dengan tujuan menyediakan solusi inovatif dan berkualitas tinggi, Jet Group Co terus berupa menjadi pemimpin di pasar dengan fokus pada kepuasan pelanggan dan pengembangan berkelanjutan.",
                vision: "Menjadi perusahaan terdepan yang menginspirasi perubahan positif melalui inovasi dan keunggulan dalam setiap layanan yang kami tawarkan.",
                mission: [
                    "Inovasi: Mengembangkan dan mengimplementasikan solusi teknologi mutakhir yang memenuhi kebutuhan pasar dan memajukan industri.",
                    "Kualitas Layanan: Menyediakan layanan berkualitas tinggi yang melebihi harapan pelanggan dengan pendekatan profesional dan etika kerja yang tinggi.",
                    "Pelanggan Utama: Membangun hubungan jangka panjang dengan pelanggan melalui kepercayaan, transparansi, dan pelayanan yang responsif.",
                    "Pengembangan SDM: Menciptakan lingkungan kerja yang mendukung pengembangan dan kesejahteraan karyawan kami.",
                    "Tanggung Jawab Sosial: Berkontribusi secara positif kepada masyarakat dan lingkungan sekitar melalui berbagai inisiatif sosial dan lingkungan."
                ]
            },
            currentJobs: [
                { title: "Web Developer", deadline: "Deadline 31 August 2024 | 00:00", vacancyBadge: "1 Vacancy" },
                { title: "Cyber Security", deadline: "Deadline 31 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 2,
            name: "COX Enterprises",
            location: "Bali, Indonesia",
            logo: "cox",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: {
                main: "COX Enterprises adalah perusahaan multinasional yang bergerak di bidang media, komunikasi, dan teknologi informasi. Dengan pengalaman lebih dari 50 tahun, kami telah menjadi pionir dalam transformasi digital dan inovasi teknologi yang mengubah cara orang berkomunikasi dan mengakses informasi.",
                vision: "Menjadi pemimpin global dalam menyediakan solusi teknologi komunikasi yang menghubungkan dunia.",
                mission: [
                    "Teknologi Terdepan: Mengembangkan dan menyediakan teknologi komunikasi paling canggih dan andal.",
                    "Konektivitas Global: Menghubungkan orang-orang di seluruh dunia melalui platform komunikasi yang inovatif.",
                    "Kualitas Layanan: Memberikan layanan pelanggan terbaik dengan standar kualitas internasional.",
                    "Inovasi Berkelanjutan: Terus berinovasi untuk menciptakan solusi yang memenuhi kebutuhan masa depan."
                ]
            },
            currentJobs: [
                { title: "Financial Analyst", deadline: "Deadline 30 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 3,
            name: "ZEE Corp",
            location: "Bandung, Indonesia",
            logo: "zee",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: {
                main: "ZEE Corp merupakan perusahaan teknologi lokal yang fokus pada pengembangan solusi digital untuk berbagai industri. Kami berkomitmen untuk memajukan ekosistem digital Indonesia melalui inovasi dan teknologi yang dapat diakses oleh semua kalangan.",
                vision: "Menjadi perusahaan teknologi Indonesia terdepan yang mendorong transformasi digital nasional.",
                mission: [
                    "Digital untuk Semua: Mengembangkan teknologi yang dapat diakses dan digunakan oleh semua lapisan masyarakat.",
                    "Inovasi Lokal: Menciptakan solusi teknologi yang sesuai dengan kebutuhan lokal Indonesia.",
                    "Pemberdayaan UMKM: Membantu usaha kecil dan menengah berkembang melalui teknologi digital.",
                    "Talenta Digital: Mengembangkan talenta digital Indonesia melalui program pelatihan dan pengembangan."
                ]
            },
            currentJobs: [
                { title: "Personal Finance Advisor", deadline: "Deadline 29 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 4,
            name: "Life's Good Corporation",
            location: "Jakarta, Indonesia",
            logo: "lg",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: {
                main: "Life's Good Corporation adalah perusahaan multinasional yang bergerak di bidang elektronik konsumen dan teknologi. Sebagai salah satu merek terkemuka di dunia, kami terus berinovasi dalam menciptakan produk yang meningkatkan kualitas hidup konsumen melalui teknologi canggih dan desain yang elegan.",
                vision: "Menciptakan kehidupan yang lebih baik melalui inovasi teknologi yang berkelanjutan dan berdampak positif bagi masyarakat global.",
                mission: [
                    "Inovasi Berkelanjutan: Mengembangkan produk-produk inovatif yang memenuhi kebutuhan konsumen masa depan.",
                    "Kualitas Premium: Menghadirkan produk berkualitas tinggi dengan standar internasional yang ketat.",
                    "Kepuasan Konsumen: Memberikan pengalaman terbaik kepada konsumen melalui produk dan layanan yang unggul.",
                    "Teknologi Ramah Lingkungan: Mengembangkan teknologi yang berkelanjutan dan ramah terhadap lingkungan.",
                    "Global Partnership: Membangun kemitraan strategis untuk memperluas jangkauan dan dampak positif."
                ]
            },
            currentJobs: [
                { title: "Finance Data Entry", deadline: "Deadline 28 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 5,
            name: "Fashion Company Ltd.",
            location: "Padang, Indonesia",
            logo: "fashion",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: {
                main: "Fashion Company Ltd. adalah perusahaan fashion lokal yang menghadirkan tren terkini dengan kualitas terbaik. Kami berkomitmen untuk mengangkat industri fashion Indonesia ke kancah internasional melalui desain yang autentik, kualitas premium, dan nilai-nilai budaya lokal yang kuat.",
                vision: "Menjadi brand fashion Indonesia terdepan yang dikenal di tingkat global dengan mempertahankan identitas dan nilai-nilai budaya lokal.",
                mission: [
                    "Desain Autentik: Menciptakan desain fashion yang unik dan mencerminkan kekayaan budaya Indonesia.",
                    "Kualitas Terbaik: Menggunakan bahan berkualitas tinggi dan proses produksi yang memenuhi standar internasional.",
                    "Sustainable Fashion: Mengembangkan praktik fashion yang berkelanjutan dan ramah lingkungan.",
                    "Pemberdayaan Lokal: Mendukung pengrajin dan produsen lokal dalam pengembangan industri fashion Indonesia.",
                    "Fashion untuk Semua: Menyediakan produk fashion berkualitas dengan harga yang terjangkau untuk berbagai kalangan."
                ]
            },
            currentJobs: [
                { title: "Chief Financial Officer", deadline: "Deadline 27 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 6,
            name: "The Weather Company",
            location: "Jakarta, Indonesia",
            logo: "weather",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: {
                main: "The Weather Company adalah perusahaan teknologi global yang menyediakan layanan informasi cuaca dan data analitik. Dengan teknologi AI dan machine learning yang canggih, kami memberikan prediksi cuaca yang akurat dan insight data yang membantu berbagai industri dalam pengambilan keputusan strategis.",
                vision: "Menjadi penyedia informasi cuaca dan data analitik terpercaya yang membantu dunia dalam menghadapi tantangan iklim global.",
                mission: [
                    "Akurasi Data: Menyediakan data cuaca dan prediksi yang akurat menggunakan teknologi terdepan.",
                    "Inovasi Teknologi: Mengembangkan teknologi AI dan machine learning untuk analisis cuaca yang lebih baik.",
                    "Solusi Industri: Memberikan solusi khusus untuk berbagai industri yang bergantung pada kondisi cuaca.",
                    "Mitigasi Risiko: Membantu masyarakat dan bisnis dalam mengurangi risiko akibat perubahan cuaca ekstrem.",
                    "Edukasi Publik: Meningkatkan kesadaran masyarakat tentang pentingnya informasi cuaca dalam kehidupan sehari-hari."
                ]
            },
            currentJobs: [
                { title: "Tax Specialist", deadline: "Deadline 26 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 7,
            name: "Tokopedia",
            location: "Jakarta, Indonesia",
            logo: "tokopedia",
            vacancyCount: "2 Vacancy",
            latestPost: "June 5, 2024",
            description: {
                main: "Tokopedia adalah perusahaan teknologi Indonesia yang menyediakan platform marketplace online terdepan di Indonesia. Sebagai bagian dari ekosistem digital GoTo, kami berkomitmen untuk memdemocratizing commerce melalui teknologi dan memberdayakan UMKM Indonesia untuk berkembang di era digital.",
                vision: "Membangun Indonesia yang lebih baik melalui teknologi dengan menciptakan ekosistem digital yang inklusif dan berkelanjutan.",
                mission: [
                    "Democratizing Commerce: Memberikan kesempatan yang sama kepada semua penjual untuk sukses dalam bisnis online.",
                    "Teknologi untuk Semua: Mengembangkan teknologi yang mudah diakses dan digunakan oleh seluruh lapisan masyarakat.",
                    "Pemberdayaan UMKM: Mendukung pertumbuhan usaha kecil dan menengah melalui platform digital yang komprehensif.",
                    "Inovasi Berkelanjutan: Terus berinovasi dalam mengembangkan fitur dan layanan yang memenuhi kebutuhan pengguna.",
                    "Kontribusi Nasional: Berkontribusi positif terhadap perekonomian Indonesia melalui penciptaan lapangan kerja dan pertumbuhan ekonomi digital."
                ]
            },
            currentJobs: [
                { title: "Software Engineer", deadline: "Deadline 25 August 2024 | 00:00", vacancyBadge: "1 Vacancy" },
                { title: "Product Manager", deadline: "Deadline 24 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 8,
            name: "Gojek",
            location: "Jakarta, Indonesia",
            logo: "gojek",
            vacancyCount: "3 Vacancy",
            latestPost: "June 4, 2024",
            description: {
                main: "Gojek adalah platform teknologi terdepan di Asia Tenggara yang menyediakan berbagai layanan on-demand. Dari transportasi online hingga layanan finansial digital, Gojek telah mengubah cara masyarakat Indonesia menjalani kehidupan sehari-hari melalui teknologi yang inovatif dan solusi yang terintegrasi.",
                vision: "Menjadi platform teknologi yang mengubah kehidupan jutaan orang dengan menciptakan dampak positif yang berkelanjutan bagi masyarakat, mitra, dan ekosistem digital.",
                mission: [
                    "Teknologi untuk Dampak: Menggunakan teknologi untuk menciptakan dampak positif yang nyata bagi masyarakat Indonesia.",
                    "Ekosistem Terintegrasi: Membangun ekosistem layanan digital yang terintegrasi untuk memenuhi kebutuhan sehari-hari.",
                    "Pemberdayaan Mitra: Memberdayakan jutaan mitra driver dan merchant untuk meningkatkan kesejahteraan mereka.",
                    "Inovasi Berkelanjutan: Terus berinovasi dalam mengembangkan layanan dan teknologi yang bermanfaat.",
                    "Inklusi Digital: Memperluas akses teknologi dan layanan digital kepada seluruh lapisan masyarakat Indonesia."
                ]
            },
            currentJobs: [
                { title: "Backend Developer", deadline: "Deadline 23 August 2024 | 00:00", vacancyBadge: "1 Vacancy" },
                { title: "Data Scientist", deadline: "Deadline 22 August 2024 | 00:00", vacancyBadge: "1 Vacancy" },
                { title: "UX Designer", deadline: "Deadline 21 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 9,
            name: "Shopee",
            location: "Jakarta, Indonesia",
            logo: "shopee",
            vacancyCount: "2 Vacancy",
            latestPost: "June 3, 2024",
            description: {
                main: "Shopee adalah platform e-commerce terdepan di Asia Tenggara yang menyediakan pengalaman berbelanja online yang mudah dan aman. Dengan fokus pada mobile-first approach dan gamifikasi, Shopee telah mengubah cara konsumen berbelanja online dan membantu jutaan penjual mengembangkan bisnis mereka.",
                vision: "Menjadi platform e-commerce pilihan utama di Asia Tenggara yang menghubungkan penjual dan pembeli dalam ekosistem digital yang aman dan menyenangkan.",
                mission: [
                    "Mobile-First Experience: Mengoptimalkan pengalaman berbelanja melalui teknologi mobile yang user-friendly.",
                    "Keamanan Transaksi: Menyediakan platform yang aman dengan sistem pembayaran dan perlindungan konsumen yang terpercaya.",
                    "Pemberdayaan Penjual: Membantu penjual dari berbagai skala untuk berkembang melalui tools dan fitur yang komprehensif.",
                    "Inovasi E-commerce: Menghadirkan inovasi dalam industri e-commerce melalui gamifikasi dan teknologi terbaru.",
                    "Ekosistem Digital: Membangun ekosistem e-commerce yang terintegrasi dengan berbagai layanan pendukung."
                ]
            },
            currentJobs: [
                { title: "Marketing Specialist", deadline: "Deadline 20 August 2024 | 00:00", vacancyBadge: "1 Vacancy" },
                { title: "Business Analyst", deadline: "Deadline 19 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 10,
            name: "Bank Mandiri",
            location: "Jakarta, Indonesia",
            logo: "mandiri",
            vacancyCount: "1 Vacancy",
            latestPost: "June 2, 2024",
            description: {
                main: "Bank Mandiri adalah bank terbesar di Indonesia yang menyediakan layanan perbankan komprehensif untuk individu dan korporasi. Sebagai bank BUMN terdepan, kami berkomitmen untuk mendukung pertumbuhan ekonomi Indonesia melalui inovasi digital banking dan layanan finansial yang berkelanjutan.",
                vision: "Menjadi lembaga keuangan Indonesia yang paling dikagumi dan selalu menjadi yang terdepan dalam melayani nasabah.",
                mission: [
                    "Layanan Prima: Memberikan layanan perbankan berkualitas tinggi yang memuaskan seluruh nasabah.",
                    "Inovasi Digital: Mengembangkan teknologi perbankan digital yang canggih dan aman untuk kemudahan nasabah.",
                    "Dukungan Ekonomi: Berperan aktif dalam mendukung pertumbuhan ekonomi nasional melalui pembiayaan yang produktif.",
                    "Tata Kelola Baik: Menerapkan prinsip good corporate governance dalam setiap aspek operasional.",
                    "Tanggung Jawab Sosial: Berkontribusi dalam pembangunan sosial dan lingkungan melalui program CSR yang berkelanjutan."
                ]
            },
            currentJobs: [
                { title: "Relationship Manager", deadline: "Deadline 18 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 11,
            name: "Bank Central Asia",
            location: "Jakarta, Indonesia",
            logo: "bca",
            vacancyCount: "2 Vacancy",
            latestPost: "June 1, 2024",
            description: {
                main: "BCA adalah salah satu bank swasta terkemuka di Indonesia yang dikenal dengan layanan digital banking yang inovatif. Dengan jaringan ATM terluas dan teknologi perbankan yang selalu terdepan, BCA terus memberikan solusi finansial yang memudahkan kehidupan nasabah di era digital.",
                vision: "Menjadi bank pilihan utama dengan memberikan solusi keuangan terbaik bagi kemajuan bisnis dan kemakmuran bersama.",
                mission: [
                    "Kepuasan Nasabah: Mengutamakan kepuasan nasabah melalui layanan yang excellent dan solusi finansial yang inovatif.",
                    "Teknologi Terdepan: Mengembangkan teknologi perbankan digital yang aman, mudah, dan dapat diandalkan.",
                    "Pertumbuhan Berkelanjutan: Menciptakan nilai tambah bagi stakeholder melalui pertumbuhan bisnis yang berkelanjutan.",
                    "Sumber Daya Manusia: Mengembangkan SDM yang kompeten dan profesional dalam memberikan layanan terbaik.",
                    "Tanggung Jawab Sosial: Berpartisipasi aktif dalam pembangunan ekonomi dan sosial masyarakat Indonesia."
                ]
            },
            currentJobs: [
                { title: "Credit Analyst", deadline: "Deadline 17 August 2024 | 00:00", vacancyBadge: "1 Vacancy" },
                { title: "IT Support", deadline: "Deadline 16 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        },
        {
            id: 12,
            name: "Unilever Indonesia",
            location: "Jakarta, Indonesia",
            logo: "unilever",
            vacancyCount: "1 Vacancy",
            latestPost: "May 30, 2024",
            description: {
                main: "Unilever Indonesia adalah anak perusahaan dari Unilever global yang memproduksi berbagai produk konsumen terkemuka. Dengan komitmen pada sustainable living dan purpose-driven brands, kami terus berinovasi dalam menghadirkan produk-produk berkualitas yang meningkatkan kualitas hidup masyarakat Indonesia.",
                vision: "Membuat sustainable living menjadi hal yang biasa dengan menciptakan brands yang memiliki purpose dan memberikan dampak positif bagi masyarakat dan planet.",
                mission: [
                    "Sustainable Living: Mengembangkan produk dan praktik bisnis yang berkelanjutan untuk planet yang lebih baik.",
                    "Purpose-Driven Brands: Menciptakan merek-merek yang memiliki tujuan mulia dan memberikan dampak positif.",
                    "Kualitas Terjamin: Menghadirkan produk berkualitas tinggi yang aman dan bermanfaat bagi konsumen.",
                    "Inovasi Berkelanjutan: Terus berinovasi dalam pengembangan produk yang memenuhi kebutuhan konsumen masa depan.",
                    "Pertumbuhan Inklusif: Mendorong pertumbuhan bisnis yang inklusif dan memberikan manfaat bagi seluruh stakeholder."
                ]
            },
            currentJobs: [
                { title: "Brand Manager", deadline: "Deadline 15 August 2024 | 00:00", vacancyBadge: "1 Vacancy" }
            ]
        }
    ],

    otherJobs: [
        {
            id: 101,
            title: "Personal Finance Advisor",
            company: "ZEE Corp",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Remote",
            experience: "3-5 years",
            salary: "Rp6.000.000",
            salaryPeriod: "/month",
            posted: "7 days ago",
            applicants: "34 applicants",
            logo: "zee"
        },
        {
            id: 102,
            title: "Finance Data Entry",
            company: "Life's Good Corporation",
            location: "Jakarta, Indonesia",
            type: "Part-Time",
            workStyle: "Remote",
            experience: "1-3 years",
            salary: "Rp1.000.000",
            salaryPeriod: "/month",
            posted: "2 days ago",
            applicants: "12 applicants",
            logo: "lg"
        },
        {
            id: 103,
            title: "Chief Financial Officer",
            company: "Fashion Company Ltd.",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Onsite",
            experience: "> 10 years",
            salary: "Rp100.000.000",
            salaryPeriod: "/month",
            posted: "14 days ago",
            applicants: "4 applicants",
            logo: "fashion"
        },
        {
            id: 104,
            title: "Mobile App Developer",
            company: "Tokopedia",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Hybrid",
            experience: "2-4 years",
            salary: "Rp12.000.000",
            salaryPeriod: "/month",
            posted: "3 days ago",
            applicants: "28 applicants",
            logo: "tokopedia"
        },
        {
            id: 105,
            title: "DevOps Engineer",
            company: "Gojek",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Remote",
            experience: "3-6 years",
            salary: "Rp15.000.000",
            salaryPeriod: "/month",
            posted: "5 days ago",
            applicants: "45 applicants",
            logo: "gojek"
        },
        {
            id: 106,
            title: "Content Marketing Manager",
            company: "Shopee",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Onsite",
            experience: "4-6 years",
            salary: "Rp11.000.000",
            salaryPeriod: "/month",
            posted: "1 week ago",
            applicants: "22 applicants",
            logo: "shopee"
        }
    ],

    currentCompany: null,

    init() {
        this.loadCompanyData();
    },

    loadCompanyData() {
        // Get company ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const companyId = parseInt(urlParams.get('id'));
        
        if (!companyId) {
            // Redirect to companies page if no ID provided
            window.location.href = 'companies.html';
            return;
        }

        // Find company data
        this.currentCompany = this.companies.find(company => company.id === companyId);
        
        if (!this.currentCompany) {
            // Redirect to companies page if company not found
            window.location.href = 'companies.html';
            return;
        }

        this.displayCompanyProfile();
        this.displayCurrentOpenings();
        this.displayOtherJobs();
    },

    displayCompanyProfile() {
        const company = this.currentCompany;
        
        // Update page title
        document.title = `${company.name} - Pusat Karier UIN Syarif Hidayatullah`;
        
        // Update company header
        document.getElementById('company-logo').className = `company-logo ${company.logo}`;
        document.getElementById('company-logo').textContent = company.name.charAt(0).toUpperCase();
        document.getElementById('company-name').textContent = company.name;
        document.getElementById('company-location').textContent = company.location;
        document.getElementById('vacancy-count').textContent = company.vacancyCount;
        document.getElementById('latest-post').textContent = company.latestPost;
        
        // Update company description
        const descriptionContent = document.getElementById('company-description-content');
        descriptionContent.innerHTML = `
            <div class="description-content">
                <p>${company.description.main}</p>
                
                <div class="company-vision">
                    <h4>Visi</h4>
                    <p>${company.description.vision}</p>
                </div>
                
                <div class="company-mission">
                    <h4>Misi</h4>
                    <ol>
                        ${company.description.mission.map(mission => `<li>${mission}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `;
    },

    displayCurrentOpenings() {
        const container = document.getElementById('current-openings');
        const company = this.currentCompany;
        
        container.innerHTML = `
            <div class="current-openings-list">
                ${company.currentJobs.map(job => `
                    <div class="opening-item">
                        <div class="opening-info">
                            <h4>${job.title}</h4>
                            <div class="opening-meta">
                                <span>Looking For SI</span>
                                <span class="opening-deadline">${job.deadline}</span>
                            </div>
                        </div>
                        <div class="vacancy-badge">${job.vacancyBadge}</div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    displayOtherJobs() {
        const container = document.getElementById('other-jobs-grid');
        
        container.innerHTML = this.otherJobs.map(job => `
            <div class="other-job-card" onclick="window.location.href='vacancies.html'">
                <div class="other-job-header">
                    <div class="other-job-logo ${job.logo}">
                        ${job.company.charAt(0).toUpperCase()}
                    </div>
                    <div class="other-job-info">
                        <h4>${job.title}</h4>
                        <p class="other-job-company">${job.company}</p>
                        <p class="other-job-location">${job.location}</p>
                    </div>
                </div>
                
                <div class="other-job-details">
                    <span class="job-tag ${job.type.toLowerCase().replace('-', '-')}">${job.type}</span>
                    <span class="job-tag ${job.workStyle.toLowerCase()}">${job.workStyle}</span>
                    <span class="job-tag experience">${job.experience}</span>
                </div>
                
                <div class="other-job-footer">
                    <div class="other-job-meta">
                        <div class="other-job-salary">${job.salary}<span class="salary-period">${job.salaryPeriod}</span></div>
                        <div class="other-job-posted">${job.posted}</div>
                        <div class="other-job-applicants">${job.applicants}</div>
                    </div>
                    <button class="apply-now-btn" onclick="event.stopPropagation(); alert('Apply feature coming soon!')">Apply Now</button>
                </div>
            </div>
        `).join('');
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof CompanyProfileManager !== 'undefined') {
        CompanyProfileManager.init();
    }
});