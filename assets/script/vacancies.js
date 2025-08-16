// Vacancies Manager
const VacanciesManager = {
    jobs: [
        {
            id: 1,
            title: "Website Developer",
            company: "Jet Group Co.",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Onsite",
            experience: "3-5 years",
            salary: "Rp5.000.000 - 8.000.000",
            salaryPeriod: "/month",
            posted: "6 days ago",
            applicants: "88 applicants",
            companyLogo: "jet",
            description: "It's fun to work in a company where people truly BELIEVE in what they're doing!",
            fullDescription: `Software engineering takes the central role in building Traveloka products and systems. You will be responsible for designing, building, improving, or maintaining our backend applications, third-party data integration, data API, backend systems, or working with monitoring tools and infrastructure. You will be exposed to several advanced technologies such as hotel and room data aggregation, inventory aggregation from multiple sources, openAI-related applications, and others.

You will work in cross-functional teams and meet great people regularly from top-tier technology, consulting, product, or academic background. We work in an open environment where there are no boundaries or power distance. Everyone is encouraged to speak their mind, propose ideas, influence others, and continuously grow themselves.`,
            requirements: [
                "Bachelor's degree in Computer Science or equivalent from a reputable university with good academic results is preferred.",
                "Having minimum 3 years of experience in software engineering, application development or system development",
                "Passion in software engineering, application development, or systems development",
                "Excellent understanding of software engineering concepts, design patterns, and algorithms",
                "Strong object-oriented analysis and design skills.",
                "Good business acumen, excellent problem skills and broad understanding of software and system design.",
                "Comfortable working up and down the technology stack."
            ]
        },
        {
            id: 2,
            title: "Financial Analyst",
            company: "COX Enterprises",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Onsite",
            experience: "5-10 years",
            salary: "Rp10.000.000",
            salaryPeriod: "/month",
            posted: "3 days ago",
            applicants: "47 applicants",
            companyLogo: "cox",
            description: "Join our finance team to analyze market trends and provide strategic insights.",
            fullDescription: `We are seeking a skilled Financial Analyst to join our dynamic finance team. In this role, you will be responsible for analyzing financial data, preparing reports, and providing insights that will help drive strategic business decisions.

You will work closely with senior management to evaluate investment opportunities, assess financial performance, and develop forecasting models. This position offers excellent opportunities for professional growth in a collaborative environment.`,
            requirements: [
                "Bachelor's degree in Finance, Accounting, Economics, or related field",
                "5-10 years of experience in financial analysis or related field",
                "Strong analytical and quantitative skills",
                "Proficiency in Excel, SQL, and financial modeling",
                "Excellent communication and presentation skills",
                "CFA or similar certification preferred"
            ]
        },
        {
            id: 3,
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
            companyLogo: "zee",
            description: "Help clients achieve their financial goals through personalized advice and planning.",
            fullDescription: `As a Personal Finance Advisor, you will work directly with clients to help them achieve their financial objectives. You will provide comprehensive financial planning services, including investment advice, retirement planning, and risk management strategies.

This remote position offers flexibility while maintaining close client relationships through digital channels. You will be part of a growing team dedicated to making financial advice accessible and effective.`,
            requirements: [
                "Bachelor's degree in Finance, Business, or related field",
                "3-5 years of experience in financial advisory or planning",
                "Strong interpersonal and communication skills",
                "Knowledge of investment products and financial markets",
                "Relevant licenses (Series 7, 66) preferred",
                "Ability to work independently in a remote environment"
            ]
        },
        {
            id: 4,
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
            companyLogo: "lg",
            description: "Maintain accurate financial records and support the finance team operations.",
            fullDescription: `We are looking for a detail-oriented Finance Data Entry specialist to join our team on a part-time basis. This remote position involves maintaining accurate financial records, processing invoices, and supporting various finance operations.

This is an excellent opportunity for someone looking to gain experience in finance while maintaining a flexible work schedule. You will work with modern cloud-based systems and receive training on our processes.`,
            requirements: [
                "High school diploma or equivalent; Associate degree preferred",
                "1-3 years of experience in data entry or administrative roles",
                "Proficiency in Excel and basic accounting software",
                "Strong attention to detail and accuracy",
                "Ability to work independently and meet deadlines",
                "Basic understanding of financial principles"
            ]
        },
        {
            id: 5,
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
            companyLogo: "fashion",
            description: "Lead the financial strategy and operations of our growing fashion company.",
            fullDescription: `We are seeking an experienced Chief Financial Officer to lead our financial strategy and operations. This senior executive role requires a strategic thinker with extensive experience in financial management, particularly in the retail/fashion industry.

You will be responsible for financial planning, risk management, record-keeping, and financial reporting. The ideal candidate will have experience with rapid growth companies and be comfortable in a dynamic, fast-paced environment.`,
            requirements: [
                "MBA in Finance or Accounting; CPA preferred",
                "Minimum 10 years of senior financial management experience",
                "Experience in retail or fashion industry preferred",
                "Strong leadership and team management skills",
                "Expertise in financial planning, analysis, and reporting",
                "Experience with ERP systems and financial software",
                "Excellent strategic thinking and problem-solving abilities"
            ]
        },
        {
            id: 6,
            title: "Tax Specialist",
            company: "The Weather Company",
            location: "Jakarta, Indonesia",
            type: "Full-Time",
            workStyle: "Remote",
            experience: "3-5 years",
            salary: "Rp6.000.000",
            salaryPeriod: "/month",
            posted: "18 days ago",
            applicants: "34 applicants",
            companyLogo: "weather",
            description: "Ensure compliance with tax regulations and optimize tax strategies.",
            fullDescription: `Join our finance team as a Tax Specialist where you will be responsible for ensuring compliance with all tax regulations while optimizing our tax strategies. This remote position offers the opportunity to work with a innovative technology company in the weather data industry.

You will handle corporate tax filings, work on tax planning initiatives, and collaborate with external tax advisors. This role offers excellent growth opportunities in a rapidly expanding company.`,
            requirements: [
                "Bachelor's degree in Accounting, Finance, or Taxation",
                "3-5 years of tax preparation and compliance experience",
                "Knowledge of Indonesian tax laws and regulations",
                "Experience with tax software and preparation tools",
                "Strong analytical and research skills",
                "Professional tax certification preferred",
                "Ability to work independently in remote environment"
            ]
        }
    ],

    currentPage: 1,
    jobsPerPage: 6,
    displayedJobs: 0,
    filteredJobs: [],

    init() {
        this.filteredJobs = [...this.jobs];
        this.displayJobs();
        this.bindEvents();
        this.updateResultsCount();
    },

    displayJobs() {
        const container = document.getElementById('job-listings');
        const startIndex = this.displayedJobs;
        const endIndex = Math.min(startIndex + this.jobsPerPage, this.filteredJobs.length);
        const jobsToShow = this.filteredJobs.slice(startIndex, endIndex);

        if (startIndex === 0) {
            container.innerHTML = '';
        }

        jobsToShow.forEach(job => {
            const jobCard = this.createJobCard(job);
            container.appendChild(jobCard);
        });

        this.displayedJobs = endIndex;
        
        // Update load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (this.displayedJobs >= this.filteredJobs.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    },

    createJobCard(job) {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.setAttribute('data-job-id', job.id);
        
        card.innerHTML = `
            <div class="job-card-header">
                <div class="company-logo ${job.companyLogo}">
                    ${job.company.charAt(0).toUpperCase()}
                </div>
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <p class="company-name">${job.company}</p>
                    <p class="job-location">${job.location}</p>
                </div>
            </div>
            
            <div class="job-details">
                <span class="job-tag ${job.type.toLowerCase().replace('-', '-')}">${job.type}</span>
                <span class="job-tag ${job.workStyle.toLowerCase()}">${job.workStyle}</span>
                <span class="job-tag experience">${job.experience}</span>
            </div>
            
            <div class="job-footer">
                <div class="job-meta">
                    <div class="job-salary">${job.salary}<span class="salary-period">${job.salaryPeriod}</span></div>
                    <div class="job-posted">${job.posted}</div>
                    <div class="job-applicants">${job.applicants}</div>
                </div>
                <button class="apply-btn" onclick="event.stopPropagation(); VacanciesManager.showJobDetail(${job.id})">Apply Now</button>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showJobDetail(job.id);
        });

        return card;
    },

    showJobDetail(jobId) {
        const job = this.jobs.find(j => j.id === jobId);
        if (!job) return;

        const modal = document.getElementById('job-modal');
        const content = document.getElementById('job-detail-content');
        
        content.innerHTML = `
            <div class="modal-job-header">
                <div class="modal-company-info">
                    <div class="modal-company-logo ${job.companyLogo}">
                        ${job.company.charAt(0).toUpperCase()}
                    </div>
                    <div class="modal-company-details">
                        <h4>${job.company}</h4>
                        <p>${job.location}</p>
                    </div>
                </div>
                
                <h2 class="modal-job-title">${job.title}</h2>
                
                <div class="modal-job-info">
                    <div class="modal-info-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span class="modal-salary">${job.salary}${job.salaryPeriod}</span>
                    </div>
                    <div class="modal-info-item">
                        <i class="fas fa-briefcase"></i>
                        <span>${job.type}</span>
                    </div>
                    <div class="modal-info-item">
                        <i class="fas fa-clock"></i>
                        <span>${job.experience}</span>
                    </div>
                    <div class="modal-info-item">
                        <i class="fas fa-users"></i>
                        <span>${job.applicants}</span>
                    </div>
                </div>
                
                <div class="modal-job-tags">
                    <span class="job-tag ${job.type.toLowerCase().replace('-', '-')}">${job.type}</span>
                    <span class="job-tag ${job.workStyle.toLowerCase()}">${job.workStyle}</span>
                    <span class="job-tag experience">${job.experience}</span>
                </div>
                
                <p style="color: #6b7280; font-style: italic; margin-top: 1rem;">Uploaded ${job.posted}</p>
            </div>
            
            <div class="modal-job-content">
                <div class="modal-section">
                    <h3>About the job</h3>
                    <p>${job.description}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Job Description</h3>
                    <p>${job.fullDescription}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Requirements</h3>
                    <ul>
                        ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="modal-apply-section">
                <h3>Submit your resume</h3>
                <div class="upload-area" onclick="document.getElementById('resume-upload').click()">
                    <i class="fas fa-cloud-upload-alt"></i>
                    <p>Drag and drop to upload</p>
                    <input type="file" id="resume-upload" style="display: none;" accept=".pdf,.doc,.docx">
                </div>
                <button class="upload-btn">Upload</button>
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    },

    bindEvents() {
        // Close modal events
        const modal = document.getElementById('job-modal');
        const closeBtn = document.querySelector('.close-modal');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        loadMoreBtn.addEventListener('click', () => {
            this.displayJobs();
        });

        // Search functionality
        const searchBtn = document.querySelector('.search-btn');
        const jobSearch = document.querySelector('.job-search');
        const locationSearch = document.querySelector('.location-search');
        
        searchBtn.addEventListener('click', () => {
            this.performSearch();
        });

        jobSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        locationSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Filter functionality
        const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.applyFilters();
            });
        });

        // Clear all filters
        const clearAllBtn = document.querySelector('.clear-all-btn');
        clearAllBtn.addEventListener('click', () => {
            filterCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            this.applyFilters();
        });

        // Resume upload functionality
        document.addEventListener('change', (e) => {
            if (e.target.id === 'resume-upload') {
                const file = e.target.files[0];
                if (file) {
                    const uploadArea = document.querySelector('.upload-area p');
                    uploadArea.textContent = `Selected: ${file.name}`;
                }
            }
        });
    },

    performSearch() {
        const jobQuery = document.querySelector('.job-search').value.toLowerCase();
        const locationQuery = document.querySelector('.location-search').value.toLowerCase();
        
        this.filteredJobs = this.jobs.filter(job => {
            const matchesJob = !jobQuery || 
                job.title.toLowerCase().includes(jobQuery) ||
                job.company.toLowerCase().includes(jobQuery);
            
            const matchesLocation = !locationQuery || 
                job.location.toLowerCase().includes(locationQuery);
            
            return matchesJob && matchesLocation;
        });

        this.applyFilters();
    },

    applyFilters() {
        const activeFilters = this.getActiveFilters();
        
        this.filteredJobs = this.jobs.filter(job => {
            // Search filters
            const jobQuery = document.querySelector('.job-search').value.toLowerCase();
            const locationQuery = document.querySelector('.location-search').value.toLowerCase();
            
            const matchesJob = !jobQuery || 
                job.title.toLowerCase().includes(jobQuery) ||
                job.company.toLowerCase().includes(jobQuery);
            
            const matchesLocation = !locationQuery || 
                job.location.toLowerCase().includes(locationQuery);

            // Filter by job type
            if (activeFilters.jobTypes.length > 0) {
                const matchesJobType = activeFilters.jobTypes.some(type => 
                    job.type.toLowerCase().replace('-', '-') === type
                );
                if (!matchesJobType) return false;
            }

            // Filter by experience
            if (activeFilters.experience.length > 0) {
                const matchesExperience = activeFilters.experience.some(exp => {
                    if (exp === 'less-than-year') return job.experience.includes('< 1') || job.experience.includes('Less than');
                    if (exp === '1-3-years') return job.experience.includes('1-3');
                    if (exp === '3-5-years') return job.experience.includes('3-5');
                    if (exp === '5-10-years') return job.experience.includes('5-10');
                    if (exp === 'more-than-10') return job.experience.includes('> 10');
                    return false;
                });
                if (!matchesExperience) return false;
            }

            // Filter by work style
            if (activeFilters.workStyles.length > 0) {
                const matchesWorkStyle = activeFilters.workStyles.some(style =>
                    job.workStyle.toLowerCase() === style
                );
                if (!matchesWorkStyle) return false;
            }

            return matchesJob && matchesLocation;
        });

        this.displayedJobs = 0;
        this.displayJobs();
        this.updateResultsCount();
    },

    getActiveFilters() {
        const jobTypes = [];
        const experience = [];
        const workStyles = [];

        document.querySelectorAll('.filter-option input[type="checkbox"]:checked').forEach(checkbox => {
            const value = checkbox.value;
            const parent = checkbox.closest('.filter-group');
            const filterType = parent.querySelector('h4').textContent;

            if (filterType === 'Job Type') {
                jobTypes.push(value);
            } else if (filterType === 'Experience') {
                experience.push(value);
            } else if (filterType === 'Work styles') {
                workStyles.push(value);
            }
        });

        return { jobTypes, experience, workStyles };
    },

    updateResultsCount() {
        const resultsInfo = document.querySelector('.search-results-info');
        const jobQuery = document.querySelector('.job-search').value || 'Finance';
        const locationQuery = document.querySelector('.location-search').value || 'Jakarta, Indonesia';
        
        resultsInfo.innerHTML = `Showing <strong>${this.filteredJobs.length}</strong> Jobs <strong>${jobQuery}</strong> in <strong>${locationQuery}</strong>`;
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof VacanciesManager !== 'undefined') {
        VacanciesManager.init();
    }
});