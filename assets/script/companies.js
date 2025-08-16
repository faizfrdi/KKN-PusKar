// Companies Manager
const CompaniesManager = {
    companies: [
        {
            id: 1,
            name: "Jet Group Co.",
            location: "Jakarta, Indonesia",
            category: "national",
            logo: "jet",
            vacancyCount: "2 Vacancy",
            latestPost: "June 6, 2024",
            description: "Jet Group Co adalah perusahaan yang bergerak dalam berbagai bidang, termasuk teknologi informasi, layanan keuangan, dan konsultasi bisnis...",
            jobs: [
                { id: 1, title: "Web Developer", deadline: "31 August 2024 | 00:00" },
                { id: 2, title: "Cyber Security", deadline: "31 August 2024 | 00:00" }
            ]
        },
        {
            id: 2,
            name: "COX Enterprises",
            location: "Bali, Indonesia",
            category: "multinational",
            logo: "cox",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: "COX Enterprises adalah perusahaan multinational yang bergerak di bidang media, komunikasi, dan teknologi informasi...",
            jobs: [
                { id: 3, title: "Financial Analyst", deadline: "30 August 2024 | 00:00" }
            ]
        },
        {
            id: 3,
            name: "ZEE Corp",
            location: "Bandung, Indonesia",
            category: "national",
            logo: "zee",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: "ZEE Corp merupakan perusahaan teknologi lokal yang fokus pada pengembangan solusi digital untuk berbagai industri...",
            jobs: [
                { id: 4, title: "Personal Finance Advisor", deadline: "29 August 2024 | 00:00" }
            ]
        },
        {
            id: 4,
            name: "Life's Good Corporation",
            location: "Jakarta, Indonesia",
            category: "multinational",
            logo: "lg",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: "Life's Good Corporation adalah perusahaan multinasional yang bergerak di bidang elektronik konsumen dan teknologi...",
            jobs: [
                { id: 5, title: "Finance Data Entry", deadline: "28 August 2024 | 00:00" }
            ]
        },
        {
            id: 5,
            name: "Fashion Company Ltd.",
            location: "Padang, Indonesia",
            category: "national",
            logo: "fashion",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: "Fashion Company Ltd. adalah perusahaan fashion lokal yang menghadirkan tren terkini dengan kualitas terbaik...",
            jobs: [
                { id: 6, title: "Chief Financial Officer", deadline: "27 August 2024 | 00:00" }
            ]
        },
        {
            id: 6,
            name: "The Weather Company",
            location: "Jakarta, Indonesia",
            category: "multinational",
            logo: "weather",
            vacancyCount: "1 Vacancy",
            latestPost: "June 6, 2024",
            description: "The Weather Company adalah perusahaan teknologi global yang menyediakan layanan informasi cuaca dan data analitik...",
            jobs: [
                { id: 7, title: "Tax Specialist", deadline: "26 August 2024 | 00:00" }
            ]
        },
        {
            id: 7,
            name: "Tokopedia",
            location: "Jakarta, Indonesia",
            category: "national",
            logo: "tokopedia",
            vacancyCount: "2 Vacancy",
            latestPost: "June 5, 2024",
            description: "Tokopedia adalah perusahaan teknologi Indonesia yang menyediakan platform marketplace online terdepan di Indonesia...",
            jobs: [
                { id: 8, title: "Software Engineer", deadline: "25 August 2024 | 00:00" },
                { id: 9, title: "Product Manager", deadline: "24 August 2024 | 00:00" }
            ]
        },
        {
            id: 8,
            name: "Gojek",
            location: "Jakarta, Indonesia",
            category: "national",
            logo: "gojek",
            vacancyCount: "3 Vacancy",
            latestPost: "June 4, 2024",
            description: "Gojek adalah platform teknologi terdepan di Asia Tenggara yang menyediakan berbagai layanan on-demand...",
            jobs: [
                { id: 10, title: "Backend Developer", deadline: "23 August 2024 | 00:00" },
                { id: 11, title: "Data Scientist", deadline: "22 August 2024 | 00:00" },
                { id: 12, title: "UX Designer", deadline: "21 August 2024 | 00:00" }
            ]
        },
        {
            id: 9,
            name: "Shopee",
            location: "Jakarta, Indonesia",
            category: "multinational",
            logo: "shopee",
            vacancyCount: "2 Vacancy",
            latestPost: "June 3, 2024",
            description: "Shopee adalah platform e-commerce terdepan di Asia Tenggara yang menyediakan pengalaman berbelanja online yang mudah dan aman...",
            jobs: [
                { id: 13, title: "Marketing Specialist", deadline: "20 August 2024 | 00:00" },
                { id: 14, title: "Business Analyst", deadline: "19 August 2024 | 00:00" }
            ]
        },
        {
            id: 10,
            name: "Bank Mandiri",
            location: "Jakarta, Indonesia",
            category: "national",
            logo: "mandiri",
            vacancyCount: "1 Vacancy",
            latestPost: "June 2, 2024",
            description: "Bank Mandiri adalah bank terbesar di Indonesia yang menyediakan layanan perbankan komprehensif untuk individu dan korporasi...",
            jobs: [
                { id: 15, title: "Relationship Manager", deadline: "18 August 2024 | 00:00" }
            ]
        },
        {
            id: 11,
            name: "Bank Central Asia",
            location: "Jakarta, Indonesia",
            category: "national",
            logo: "bca",
            vacancyCount: "2 Vacancy",
            latestPost: "June 1, 2024",
            description: "BCA adalah salah satu bank swasta terkemuka di Indonesia yang dikenal dengan layanan digital banking yang inovatif...",
            jobs: [
                { id: 16, title: "Credit Analyst", deadline: "17 August 2024 | 00:00" },
                { id: 17, title: "IT Support", deadline: "16 August 2024 | 00:00" }
            ]
        },
        {
            id: 12,
            name: "Unilever Indonesia",
            location: "Jakarta, Indonesia",
            category: "multinational",
            logo: "unilever",
            vacancyCount: "1 Vacancy",
            latestPost: "May 30, 2024",
            description: "Unilever Indonesia adalah anak perusahaan dari Unilever global yang memproduksi berbagai produk konsumen terkemuka...",
            jobs: [
                { id: 18, title: "Brand Manager", deadline: "15 August 2024 | 00:00" }
            ]
        }
    ],

    currentCategory: 'all',
    currentPage: 1,
    companiesPerPage: 6,
    displayedCompanies: 0,
    filteredCompanies: [],

    init() {
        console.log('CompaniesManager initializing...');
        this.filteredCompanies = [...this.companies];
        this.displayCompanies();
        this.bindEvents();
        console.log('CompaniesManager initialized successfully');
    },

    displayCompanies() {
        const container = document.getElementById('companies-grid');
        if (!container) {
            console.error('Companies grid container not found');
            return;
        }

        const startIndex = this.displayedCompanies;
        const endIndex = Math.min(startIndex + this.companiesPerPage, this.filteredCompanies.length);
        const companiesToShow = this.filteredCompanies.slice(startIndex, endIndex);

        if (startIndex === 0) {
            container.innerHTML = '';
        }

        companiesToShow.forEach(company => {
            const companyCard = this.createCompanyCard(company);
            container.appendChild(companyCard);
        });

        this.displayedCompanies = endIndex;
        
        // Update load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            if (this.displayedCompanies >= this.filteredCompanies.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    },

    createCompanyCard(company) {
        const card = document.createElement('div');
        card.className = 'company-card';
        card.setAttribute('data-company-id', company.id);
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
            <div class="company-card-header">
                <div class="company-logo ${company.logo}">
                    ${company.name.charAt(0).toUpperCase()}
                </div>
                <div class="company-info">
                    <h3>${company.name}</h3>
                    <p class="company-location">${company.location}</p>
                </div>
            </div>
            
            <div class="company-stats">
                <div class="vacancy-count">${company.vacancyCount}</div>
                <div class="latest-post">Latest Post ${company.latestPost}</div>
            </div>
        `;

        // Add click event listener to the card
        card.addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateToCompanyProfile(company.id);
        });

        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });

        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${company.name} profile`);

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.navigateToCompanyProfile(company.id);
            }
        });

        return card;
    },

    navigateToCompanyProfile(companyId) {
        // Navigate to company profile page with company ID as parameter
        console.log(`Navigating to company profile: ${companyId}`);
        
        // Find company data to validate
        const company = this.companies.find(c => c.id === companyId);
        if (!company) {
            console.error('Company not found:', companyId);
            alert('Company not found!');
            return;
        }

        // Store company data in sessionStorage for faster loading
        try {
            sessionStorage.setItem('selectedCompany', JSON.stringify(company));
        } catch (error) {
            console.warn('Could not store company data:', error);
        }

        // Navigate to company profile page
        window.location.href = `company-profile.html?id=${companyId}`;
    },

    bindEvents() {
        console.log('Binding events...');
        
        // Category dropdown events - PERBAIKAN UTAMA
        const categoryTrigger = document.getElementById('categoryTrigger');
        const categoryMenu = document.getElementById('categoryMenu');
        const selectedCategory = document.getElementById('selectedCategory');
        
        console.log('Category elements found:', {
            trigger: !!categoryTrigger,
            menu: !!categoryMenu,
            selected: !!selectedCategory
        });

        if (categoryTrigger && categoryMenu && selectedCategory) {
            // Remove any existing event listeners to prevent duplicates
            categoryTrigger.removeEventListener('click', this.handleCategoryTriggerClick);
            
            // Bind the click handler with proper context
            this.handleCategoryTriggerClick = this.handleCategoryTriggerClick.bind(this);
            categoryTrigger.addEventListener('click', this.handleCategoryTriggerClick);

            // Handle category option selection
            const categoryOptions = categoryMenu.querySelectorAll('.category-option');
            console.log('Category options found:', categoryOptions.length);
            
            categoryOptions.forEach(option => {
                // Remove existing listeners
                option.removeEventListener('click', this.handleCategoryOptionClick);
                
                // Create bound handler and store reference
                const boundHandler = this.handleCategoryOptionClick.bind(this);
                option.boundHandler = boundHandler;
                option.addEventListener('click', boundHandler);
            });

            // Close dropdown when clicking outside
            this.handleDocumentClick = this.handleDocumentClick.bind(this);
            document.removeEventListener('click', this.handleDocumentClick);
            document.addEventListener('click', this.handleDocumentClick);
            
            // Close dropdown on escape key
            this.handleEscapeKey = this.handleEscapeKey.bind(this);
            document.removeEventListener('keydown', this.handleEscapeKey);
            document.addEventListener('keydown', this.handleEscapeKey);
            
        } else {
            console.error('Category dropdown elements not found!');
        }

        // Location search
        const locationInput = document.querySelector('.location-input input');
        if (locationInput) {
            locationInput.removeEventListener('input', this.handleLocationInput);
            this.handleLocationInput = this.handleLocationInput.bind(this);
            locationInput.addEventListener('input', this.handleLocationInput);
        }

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.removeEventListener('click', this.handleLoadMore);
            this.handleLoadMore = this.handleLoadMore.bind(this);
            loadMoreBtn.addEventListener('click', this.handleLoadMore);
        }
    },

    // Separate handler methods for better context management
    handleCategoryTriggerClick(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Category trigger clicked');
        
        const categoryTrigger = document.getElementById('categoryTrigger');
        const categoryMenu = document.getElementById('categoryMenu');
        
        if (!categoryTrigger || !categoryMenu) return;
        
        const isOpen = categoryMenu.classList.contains('show');
        
        if (isOpen) {
            // Close dropdown
            categoryMenu.classList.remove('show');
            categoryTrigger.classList.remove('open');
            console.log('Dropdown closed');
        } else {
            // Open dropdown
            categoryMenu.classList.add('show');
            categoryTrigger.classList.add('open');
            console.log('Dropdown opened');
        }
    },

    handleCategoryOptionClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const option = e.currentTarget;
        const value = option.getAttribute('data-value');
        const text = option.textContent.trim();
        
        console.log('Category option clicked:', value, text);
        
        const categoryTrigger = document.getElementById('categoryTrigger');
        const categoryMenu = document.getElementById('categoryMenu');
        const selectedCategory = document.getElementById('selectedCategory');
        const categoryOptions = categoryMenu.querySelectorAll('.category-option');
        
        // Remove active class from all options
        categoryOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to selected option
        option.classList.add('active');
        
        // Update selected text
        if (selectedCategory) {
            selectedCategory.textContent = text;
        }
        
        // Update current category
        this.currentCategory = value;
        
        // Close dropdown
        if (categoryMenu && categoryTrigger) {
            categoryMenu.classList.remove('show');
            categoryTrigger.classList.remove('open');
        }
        
        // Filter companies
        this.filterCompanies();
    },

    handleDocumentClick(e) {
        const categoryTrigger = document.getElementById('categoryTrigger');
        const categoryMenu = document.getElementById('categoryMenu');
        
        if (categoryTrigger && categoryMenu) {
            if (!categoryTrigger.contains(e.target) && !categoryMenu.contains(e.target)) {
                categoryMenu.classList.remove('show');
                categoryTrigger.classList.remove('open');
            }
        }
    },

    handleEscapeKey(e) {
        if (e.key === 'Escape') {
            const categoryTrigger = document.getElementById('categoryTrigger');
            const categoryMenu = document.getElementById('categoryMenu');
            
            if (categoryTrigger && categoryMenu) {
                categoryMenu.classList.remove('show');
                categoryTrigger.classList.remove('open');
            }
        }
    },

    handleLocationInput() {
        this.filterCompanies();
    },

    handleLoadMore() {
        this.displayCompanies();
    },

    filterCompanies() {
        const locationInput = document.querySelector('.location-input input');
        const locationQuery = locationInput ? locationInput.value.toLowerCase().trim() : '';
        
        console.log('Filtering companies:', {
            category: this.currentCategory,
            location: locationQuery
        });
        
        this.filteredCompanies = this.companies.filter(company => {
            const categoryMatch = this.currentCategory === 'all' || company.category === this.currentCategory;
            const locationMatch = locationQuery === '' || company.location.toLowerCase().includes(locationQuery);
            
            return categoryMatch && locationMatch;
        });
        
        // Reset pagination
        this.displayedCompanies = 0;
        this.currentPage = 1;
        
        // Display filtered results
        this.displayCompanies();
        
        console.log('Filtered companies count:', this.filteredCompanies.length);
    },

    // Method to get company data by ID (for external use)
    getCompanyById(id) {
        return this.companies.find(company => company.id === parseInt(id));
    },

    // Method to get all companies (for external use)
    getAllCompanies() {
        return [...this.companies];
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing CompaniesManager...');
    CompaniesManager.init();
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.CompaniesManager = CompaniesManager;
}