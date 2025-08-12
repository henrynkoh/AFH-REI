/**
 * AFH Series Manager - Dynamic Video Series Management
 * 
 * This utility makes it easy to add new Adult Family Home analysis video series
 * to the master landing page without manually editing HTML.
 */

class AFHSeriesManager {
    constructor() {
        this.seriesData = [
            {
                id: 'afh-property-analysis',
                title: 'AFH Property Analysis',
                subtitle: 'Complete Property Evaluation Guide',
                description: 'Master the art of analyzing Adult Family Home properties for investment decisions. Learn how to evaluate property suitability, assess renovation needs, calculate cash flow potential, and ensure DSHS compliance requirements are met.',
                icon: '🏠',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_property_analysis_all_versions.html',
                sourceUrl: '#',
                status: 'active',
                tags: ['property analysis', 'DSHS compliance', 'investment evaluation', 'renovation assessment']
            },
            {
                id: 'dshs-compliance',
                title: 'DSHS Compliance Guide',
                subtitle: 'Regulatory Requirements Mastery',
                description: 'Comprehensive guide to Washington State DSHS requirements for Adult Family Homes. Learn about licensing, safety standards, resident care requirements, and how to ensure your property meets all regulatory standards for operation.',
                icon: '📋',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'dshs_compliance_all_versions.html',
                sourceUrl: '#',
                status: 'active',
                tags: ['DSHS compliance', 'licensing', 'safety standards', 'regulatory requirements']
            },
            {
                id: 'afh-investment-strategy',
                title: 'AFH Investment Strategy',
                subtitle: 'Complete Investment Guide',
                description: 'Learn proven investment strategies specifically for Adult Family Homes. Discover how to identify profitable opportunities, calculate ROI, manage operational costs, and build a successful AFH investment portfolio.',
                icon: '💰',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_investment_strategy_all_versions.html',
                sourceUrl: '#',
                status: 'active',
                tags: ['investment strategy', 'ROI calculation', 'portfolio building', 'operational costs']
            },
            {
                id: 'afh-renovation',
                title: 'AFH Property Renovation',
                subtitle: 'Renovation & Compliance Guide',
                description: 'Essential guide to renovating properties for Adult Family Home use. Learn about accessibility requirements, safety modifications, DSHS compliance upgrades, and cost-effective renovation strategies that maximize property value.',
                icon: '🔨',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_renovation_all_versions.html',
                sourceUrl: '#',
                status: 'active',
                tags: ['renovation', 'accessibility', 'safety modifications', 'compliance upgrades']
            },
            {
                id: 'afh-market-analysis',
                title: 'AFH Market Analysis',
                subtitle: 'Market Research & Trends',
                description: 'Master AFH market analysis and research techniques. Learn how to identify high-demand areas, analyze demographic trends, evaluate competition, and make data-driven decisions about AFH property investments.',
                icon: '📊',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_market_analysis_all_versions.html',
                sourceUrl: '#',
                status: 'active',
                tags: ['market analysis', 'demographics', 'competition analysis', 'trends']
            },
            {
                id: 'afh-operations',
                title: 'AFH Operational Management',
                subtitle: 'Day-to-Day Operations Guide',
                description: 'Learn essential operational management skills for Adult Family Homes. Discover staffing strategies, resident care protocols, financial management, and how to maintain high-quality care while maximizing profitability.',
                icon: '👥',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_operations_all_versions.html',
                sourceUrl: '#',
                status: 'active',
                tags: ['operations management', 'staffing', 'resident care', 'financial management']
            },
            {
                id: 'afh-financing',
                title: 'AFH Financing Strategies',
                subtitle: 'Specialized Financing Guide',
                description: 'Learn about specialized financing options for Adult Family Home investments. Discover conventional loans, SBA loans, portfolio financing, and creative financing strategies tailored specifically for AFH properties.',
                icon: '🚀',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_financing_all_versions.html',
                sourceUrl: '#',
                status: 'coming-soon',
                tags: ['financing', 'SBA loans', 'portfolio financing', 'creative financing']
            },
            {
                id: 'afh-portfolio-scaling',
                title: 'AFH Portfolio Scaling',
                subtitle: 'Multi-Property Management',
                description: 'Master the art of scaling your Adult Family Home portfolio. Learn systematic approaches to acquiring multiple properties, managing multiple locations, and building a sustainable AFH investment business.',
                icon: '📈',
                created: 'August 2, 2025',
                versions: 7,
                landingPage: 'afh_portfolio_scaling_all_versions.html',
                sourceUrl: '#',
                status: 'coming-soon',
                tags: ['portfolio scaling', 'multi-property', 'business growth', 'sustainability']
            }
        ];
        
        this.initializePage();
    }
    
    initializePage() {
        this.updateStats();
        this.renderSeriesCards();
        this.setupSearch();
        this.setupEventListeners();
    }
    
    updateStats() {
        const activeSeries = this.seriesData.filter(series => series.status === 'active');
        const totalVideos = activeSeries.reduce((sum, series) => sum + series.versions, 0);
        const totalDuration = totalVideos * 30; // Assuming 30 minutes per video on average
        
        document.getElementById('totalSeries').textContent = activeSeries.length;
        document.getElementById('totalVideos').textContent = totalVideos;
        document.getElementById('totalDuration').textContent = totalDuration.toLocaleString();
        document.getElementById('totalVersions').textContent = '7';
    }
    
    renderSeriesCards() {
        const seriesGrid = document.querySelector('.series-grid');
        if (!seriesGrid) return;
        
        // Clear existing cards
        seriesGrid.innerHTML = '';
        
        this.seriesData.forEach(series => {
            const card = this.createSeriesCard(series);
            seriesGrid.appendChild(card);
        });
    }
    
    createSeriesCard(series) {
        const card = document.createElement('div');
        card.className = `series-card ${series.status === 'coming-soon' ? 'coming-soon' : ''}`;
        card.dataset.seriesId = series.id;
        
        const versions = this.generateVersionBadges(series.versions);
        const actions = this.generateActionButtons(series);
        
        card.innerHTML = `
            <div class="series-header">
                <div class="series-icon">${series.icon}</div>
                <div>
                    <h3 class="series-title">${series.title}</h3>
                    <p class="series-subtitle">${series.subtitle}</p>
                </div>
            </div>
            
            <p class="series-description">${series.description}</p>
            
            <div class="series-meta">
                <span>📅 ${series.status === 'coming-soon' ? 'Coming Soon' : `Created: ${series.created}`}</span>
                <span>🎬 ${series.versions} Video Versions</span>
            </div>
            
            <div class="series-versions">
                ${versions}
            </div>
            
            <div class="series-actions">
                ${actions}
            </div>
        `;
        
        return card;
    }
    
    generateVersionBadges(versions) {
        const durationOptions = ['15s', '25s', '50s', '75s', '90s', '100s', '120s'];
        return durationOptions.slice(0, versions).map(duration => 
            `<span class="version-badge">${duration}</span>`
        ).join('');
    }
    
    generateActionButtons(series) {
        if (series.status === 'coming-soon') {
            return '<button class="action-btn" disabled>⏳ Coming Soon</button>';
        }
        
        return `
            <a href="${series.landingPage}" class="action-btn">🎬 Watch All Versions</a>
            <a href="${series.sourceUrl}" class="action-btn secondary" target="_blank">📺 Source Video</a>
        `;
    }
    
    setupSearch() {
        // Add search functionality if needed
        console.log('🔍 Search functionality ready');
    }
    
    setupEventListeners() {
        // Add any additional event listeners
        console.log('🎧 Event listeners initialized');
    }
    
    addNewVideoSeries(seriesInfo) {
        const newSeries = {
            id: seriesInfo.id || `afh-series-${Date.now()}`,
            title: seriesInfo.title || 'New AFH Series',
            subtitle: seriesInfo.subtitle || 'New Series Subtitle',
            description: seriesInfo.description || 'Description for new series',
            icon: seriesInfo.icon || '🏠',
            created: seriesInfo.created || new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }),
            versions: seriesInfo.versions || 7,
            landingPage: seriesInfo.landingPage || '#',
            sourceUrl: seriesInfo.sourceUrl || '#',
            status: seriesInfo.status || 'active',
            tags: seriesInfo.tags || ['new series']
        };
        
        this.seriesData.push(newSeries);
        this.updateStats();
        this.renderSeriesCards();
        
        console.log('✅ New series added:', newSeries);
        return newSeries;
    }
    
    activateComingSoonSeries(seriesId, additionalInfo = {}) {
        const series = this.seriesData.find(s => s.id === seriesId);
        if (!series) {
            console.error('❌ Series not found:', seriesId);
            return false;
        }
        
        if (series.status === 'coming-soon') {
            series.status = 'active';
            series.created = additionalInfo.created || new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            if (additionalInfo.landingPage) series.landingPage = additionalInfo.landingPage;
            if (additionalInfo.sourceUrl) series.sourceUrl = additionalInfo.sourceUrl;
            
            this.updateStats();
            this.renderSeriesCards();
            
            console.log('✅ Series activated:', series);
            return true;
        }
        
        console.log('ℹ️ Series already active:', seriesId);
        return false;
    }
    
    searchSeries(query) {
        const searchTerm = query.toLowerCase();
        return this.seriesData.filter(series => 
            series.title.toLowerCase().includes(searchTerm) ||
            series.subtitle.toLowerCase().includes(searchTerm) ||
            series.description.toLowerCase().includes(searchTerm) ||
            series.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    getSeriesById(seriesId) {
        return this.seriesData.find(series => series.id === seriesId);
    }
    
    getAllSeries() {
        return [...this.seriesData];
    }
    
    getActiveSeries() {
        return this.seriesData.filter(series => series.status === 'active');
    }
    
    getComingSoonSeries() {
        return this.seriesData.filter(series => series.status === 'coming-soon');
    }
}

// Global functions for easy access
function addNewVideoSeries(seriesInfo) {
    return window.afhSeriesManager.addNewVideoSeries(seriesInfo);
}

function activateComingSoonSeries(seriesId, additionalInfo) {
    return window.afhSeriesManager.activateComingSoonSeries(seriesId, additionalInfo);
}

// Initialize the series manager when the page loads
document.addEventListener('DOMContentLoaded', function() {
    window.afhSeriesManager = new AFHSeriesManager();
    
    console.log('🏠 AFH Series Manager Initialized');
    console.log('📚 Available functions:');
    console.log('  - addNewVideoSeries(seriesInfo)');
    console.log('  - activateComingSoonSeries(seriesId, additionalInfo)');
    console.log('  - afhSeriesManager.searchSeries(query)');
    console.log('  - afhSeriesManager.getAllSeries()');
    console.log('  - afhSeriesManager.getActiveSeries()');
    console.log('  - afhSeriesManager.getComingSoonSeries()');
});

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AFHSeriesManager;
}
