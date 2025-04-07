// City data - normally this would come from a backend API
const cityData = {
    'new-york': {
        name: 'New York City',
        population: 8336817,
        growthRate: 0.007, // 0.7%
        yearlyChange: 58358,
        birthRate: 13.5,
        deathRate: 7.1,
        immigrationRate: 42858,
        emigrationRate: 38293,
        density: 27012,
        medianAge: 36.9,
        genderRatio: { female: 52.3, male: 47.7 },
        householdSize: 2.6,
        coordinates: [-74.0060, 40.7128]
    },
    'tokyo': {
        name: 'Tokyo',
        population: 13960000,
        growthRate: 0.001, // 0.1%
        yearlyChange: 13960,
        birthRate: 8.9,
        deathRate: 9.5,
        immigrationRate: 217000,
        emigrationRate: 203000,
        density: 6358,
        medianAge: 46.7,
        genderRatio: { female: 51.3, male: 48.7 },
        householdSize: 1.9,
        coordinates: [139.6917, 35.6895]
    },
    'london': {
        name: 'London',
        population: 8982000,
        growthRate: 0.011, // 1.1%
        yearlyChange: 98802,
        birthRate: 13.9,
        deathRate: 7.2,
        immigrationRate: 133000,
        emigrationRate: 97000,
        density: 5701,
        medianAge: 35.6,
        genderRatio: { female: 50.9, male: 49.1 },
        householdSize: 2.5,
        coordinates: [-0.1278, 51.5074]
    },
    'paris': {
        name: 'Paris',
        population: 2165423,
        growthRate: -0.003, // -0.3%
        yearlyChange: -6496,
        birthRate: 12.5,
        deathRate: 6.7,
        immigrationRate: 38000,
        emigrationRate: 50000,
        density: 21057,
        medianAge: 41.2,
        genderRatio: { female: 53.4, male: 46.6 },
        householdSize: 1.8,
        coordinates: [2.3522, 48.8566]
    },
    'beijing': {
        name: 'Beijing',
        population: 21542000,
        growthRate: 0.013, // 1.3%
        yearlyChange: 280046,
        birthRate: 9.1,
        deathRate: 5.3,
        immigrationRate: 478000,
        emigrationRate: 301000,
        density: 1300,
        medianAge: 38.1,
        genderRatio: { female: 49.3, male: 50.7 },
        householdSize: 2.3,
        coordinates: [116.4074, 39.9042]
    },
    // Add more global cities including Philippines
    'manila': {
        name: 'Manila',
        population: 1780148,
        growthRate: 0.012, // 1.2%
        yearlyChange: 21362,
        birthRate: 15.7,
        deathRate: 6.8,
        immigrationRate: 34000,
        emigrationRate: 28000,
        density: 42857,
        medianAge: 25.3,
        genderRatio: { female: 50.6, male: 49.4 },
        householdSize: 4.1,
        coordinates: [120.9842, 14.5995]
    },
    'quezon-city': {
        name: 'Quezon City',
        population: 2960048,
        growthRate: 0.015, // 1.5%
        yearlyChange: 44401,
        birthRate: 16.3,
        deathRate: 5.9,
        immigrationRate: 39000,
        emigrationRate: 24000,
        density: 18222,
        medianAge: 26.1,
        genderRatio: { female: 51.2, male: 48.8 },
        householdSize: 4.3,
        coordinates: [121.0509, 14.6760]
    },
    'cebu-city': {
        name: 'Cebu City',
        population: 922611,
        growthRate: 0.018, // 1.8%
        yearlyChange: 16607,
        birthRate: 18.1,
        deathRate: 6.3,
        immigrationRate: 25000,
        emigrationRate: 18000,
        density: 6433,
        medianAge: 24.9,
        genderRatio: { female: 50.8, male: 49.2 },
        householdSize: 4.5,
        coordinates: [123.8854, 10.3157]
    },
    'davao-city': {
        name: 'Davao City',
        population: 1632991,
        growthRate: 0.021, // 2.1%
        yearlyChange: 34293,
        birthRate: 19.3,
        deathRate: 5.7,
        immigrationRate: 28000,
        emigrationRate: 15000,
        density: 678,
        medianAge: 23.8,
        genderRatio: { female: 49.7, male: 50.3 },
        householdSize: 4.7,
        coordinates: [125.6128, 7.0707]
    },
    // Add more global cities from different continents
    'mumbai': {
        name: 'Mumbai',
        population: 20411274,
        growthRate: 0.017, // 1.7%
        yearlyChange: 346992,
        birthRate: 16.2,
        deathRate: 6.8,
        immigrationRate: 450000,
        emigrationRate: 320000,
        density: 32303,
        medianAge: 29.7,
        genderRatio: { female: 48.3, male: 51.7 },
        householdSize: 4.2,
        coordinates: [72.8777, 19.0760]
    },
    'sao-paulo': {
        name: 'São Paulo',
        population: 12325232,
        growthRate: 0.008, // 0.8%
        yearlyChange: 98602,
        birthRate: 14.5,
        deathRate: 6.1,
        immigrationRate: 156000,
        emigrationRate: 120000,
        density: 7653,
        medianAge: 32.5,
        genderRatio: { female: 52.6, male: 47.4 },
        householdSize: 3.2,
        coordinates: [-46.6333, -23.5505]
    },
    'lagos': {
        name: 'Lagos',
        population: 14862111,
        growthRate: 0.035, // 3.5%
        yearlyChange: 520174,
        birthRate: 35.5,
        deathRate: 9.2,
        immigrationRate: 380000,
        emigrationRate: 102000,
        density: 7759,
        medianAge: 18.2,
        genderRatio: { female: 49.1, male: 50.9 },
        householdSize: 5.8,
        coordinates: [3.3792, 6.5244]
    },
    'cairo': {
        name: 'Cairo',
        population: 20076000,
        growthRate: 0.022, // 2.2%
        yearlyChange: 441672,
        birthRate: 24.6,
        deathRate: 5.8,
        immigrationRate: 185000,
        emigrationRate: 92000,
        density: 10431,
        medianAge: 24.6,
        genderRatio: { female: 49.5, male: 50.5 },
        householdSize: 4.6,
        coordinates: [31.2357, 30.0444]
    },
    'sydney': {
        name: 'Sydney',
        population: 5312163,
        growthRate: 0.016, // 1.6%
        yearlyChange: 84995,
        birthRate: 12.9,
        deathRate: 5.7,
        immigrationRate: 105000,
        emigrationRate: 67000,
        density: 433,
        medianAge: 36.4,
        genderRatio: { female: 50.7, male: 49.3 },
        householdSize: 2.6,
        coordinates: [151.2093, -33.8688]
    },
    'mexico-city': {
        name: 'Mexico City',
        population: 9209944,
        growthRate: 0.006, // 0.6%
        yearlyChange: 55260,
        birthRate: 15.8,
        deathRate: 5.2,
        immigrationRate: 118000,
        emigrationRate: 95000,
        density: 6000,
        medianAge: 30.1,
        genderRatio: { female: 51.9, male: 48.1 },
        householdSize: 3.4,
        coordinates: [-99.1332, 19.4326]
    },
    'moscow': {
        name: 'Moscow',
        population: 12537954,
        growthRate: 0.004, // 0.4%
        yearlyChange: 50152,
        birthRate: 11.3,
        deathRate: 9.6,
        immigrationRate: 150000,
        emigrationRate: 112000,
        density: 4926,
        medianAge: 40.3,
        genderRatio: { female: 54.6, male: 45.4 },
        householdSize: 2.5,
        coordinates: [37.6173, 55.7558]
    },
    // Add more Philippine cities
    'makati': {
        name: 'Makati',
        population: 582602,
        growthRate: 0.013, // 1.3%
        yearlyChange: 7574,
        birthRate: 14.3,
        deathRate: 5.8,
        immigrationRate: 22000,
        emigrationRate: 15000,
        density: 19856,
        medianAge: 29.2,
        genderRatio: { female: 51.5, male: 48.5 },
        householdSize: 3.8,
        coordinates: [121.0244, 14.5547]
    },
    'zamboanga-city': {
        name: 'Zamboanga City',
        population: 861799,
        growthRate: 0.019, // 1.9%
        yearlyChange: 16374,
        birthRate: 21.4,
        deathRate: 6.1,
        immigrationRate: 19000,
        emigrationRate: 12000,
        density: 594,
        medianAge: 24.1,
        genderRatio: { female: 50.2, male: 49.8 },
        householdSize: 4.6,
        coordinates: [122.0790, 6.9214]
    },
    'cagayan-de-oro': {
        name: 'Cagayan de Oro',
        population: 675950,
        growthRate: 0.022, // 2.2%
        yearlyChange: 14871,
        birthRate: 20.8,
        deathRate: 5.5,
        immigrationRate: 15000,
        emigrationRate: 8500,
        density: 1495,
        medianAge: 25.3,
        genderRatio: { female: 51.1, male: 48.9 },
        householdSize: 4.3,
        coordinates: [124.6319, 8.4542]
    },
    'general-santos': {
        name: 'General Santos',
        population: 594446,
        growthRate: 0.024, // 2.4%
        yearlyChange: 14267,
        birthRate: 22.3,
        deathRate: 5.2,
        immigrationRate: 14000,
        emigrationRate: 7500,
        density: 2866,
        medianAge: 24.7,
        genderRatio: { female: 50.3, male: 49.7 },
        householdSize: 4.5,
        coordinates: [125.1728, 6.1164]
    },
    'taguig': {
        name: 'Taguig',
        population: 804915,
        growthRate: 0.023, // 2.3%
        yearlyChange: 18513,
        birthRate: 17.8,
        deathRate: 4.9,
        immigrationRate: 28000,
        emigrationRate: 13000,
        density: 15980,
        medianAge: 26.2,
        genderRatio: { female: 51.3, male: 48.7 },
        householdSize: 4.1,
        coordinates: [121.0509, 14.5176]
    },
    'pasig': {
        name: 'Pasig',
        population: 755300,
        growthRate: 0.018, // 1.8%
        yearlyChange: 13595,
        birthRate: 16.5,
        deathRate: 5.2,
        immigrationRate: 22000,
        emigrationRate: 14000,
        density: 14640,
        medianAge: 27.5,
        genderRatio: { female: 51.7, male: 48.3 },
        householdSize: 4.0,
        coordinates: [121.0851, 14.5764]
    },
    'bacolod': {
        name: 'Bacolod',
        population: 561875,
        growthRate: 0.017, // 1.7%
        yearlyChange: 9552,
        birthRate: 18.3,
        deathRate: 6.7,
        immigrationRate: 12000,
        emigrationRate: 7500,
        density: 2506,
        medianAge: 26.8,
        genderRatio: { female: 51.4, male: 48.6 },
        householdSize: 4.4,
        coordinates: [122.9483, 10.6713]
    },
    'iloilo-city': {
        name: 'Iloilo City',
        population: 457626,
        growthRate: 0.016, // 1.6%
        yearlyChange: 7322,
        birthRate: 17.2,
        deathRate: 6.5,
        immigrationRate: 10500,
        emigrationRate: 7000,
        density: 5901,
        medianAge: 27.2,
        genderRatio: { female: 51.8, male: 48.2 },
        householdSize: 4.2,
        coordinates: [122.5726, 10.7202]
    },
    'baguio': {
        name: 'Baguio',
        population: 345366,
        growthRate: 0.015, // 1.5%
        yearlyChange: 5180,
        birthRate: 16.8,
        deathRate: 6.2,
        immigrationRate: 9000,
        emigrationRate: 5500,
        density: 6045,
        medianAge: 28.3,
        genderRatio: { female: 52.1, male: 47.9 },
        householdSize: 4.0,
        coordinates: [120.5960, 16.4023]
    }
};

// Population data for other locations
const populationData = {
    // Default population by country - the actual values could come from a CDN/API
    'default': {
        'United States': { base: 331002651, growthRate: 0.0059 },
        'Japan': { base: 126476461, growthRate: -0.003 },
        'United Kingdom': { base: 67886011, growthRate: 0.0053 },
        'France': { base: 65273511, growthRate: 0.0022 },
        'China': { base: 1439323776, growthRate: 0.0039 },
        'India': { base: 1380004385, growthRate: 0.0099 },
        'Brazil': { base: 212559417, growthRate: 0.0072 },
        'Russia': { base: 145934462, growthRate: -0.0002 },
        'Canada': { base: 37742154, growthRate: 0.0089 },
        'Australia': { base: 25499884, growthRate: 0.0162 },
        'Germany': { base: 83783942, growthRate: 0.0032 },
        'Italy': { base: 60461826, growthRate: -0.0015 },
        'Mexico': { base: 128932753, growthRate: 0.0119 },
        'South Korea': { base: 51269185, growthRate: 0.0023 },
        'Spain': { base: 46754778, growthRate: 0.0004 }
    }
};

// Elements
let cityNameElement, currentDatetimeElement, lastUpdatedElement, 
    populationCounterElement, changeIndicatorElement, yearlyComparisonElement,
    citySelector, searchButton, searchInput, realTimeToggle, timePeriodSelect,
    refreshDataButton, exportDataButton, compareCitiesButton,
    shareDataButton, printReportButton;

// Map variables
let map;
let marker;
let tileLayer;
let isSatelliteView = false;

// Current state
let currentCity = 'new-york';
let isRealTimeUpdates = true;
let timePeriod = 'year';
let intervalId = null;
let lastUpdatedTime = new Date();
let customLocation = null;
let elementInitialized = false;

// Formatters
const numberFormatter = new Intl.NumberFormat('en-US');
const percentFormatter = new Intl.NumberFormat('en-US', { 
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
});

// Add extra fallback options for map tiles
const tileFallbacks = {
    // Default street map options
    street: [
        // Main OpenStreetMap
        {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            options: {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
                subdomains: 'abc'
            }
        },
        // OpenStreetMap direct
        {
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            options: {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
            }
        },
        // Stamen Terrain (fallback)
        {
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
            options: {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
                subdomains: 'abcd',
                maxZoom: 18
            }
        }
    ],
    // Satellite map options
    satellite: [
        // ESRI Satellite
        {
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            options: {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
                maxZoom: 19
            }
        },
        // USGS Satellite
        {
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
            options: {
                attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
                maxZoom: 16
            }
        }
    ]
};

// Safely get DOM elements
function getElements() {
    if (elementInitialized) return true;
    
    // Get all required elements
    cityNameElement = document.getElementById('city-name');
    currentDatetimeElement = document.getElementById('current-datetime');
    lastUpdatedElement = document.getElementById('last-updated');
    populationCounterElement = document.getElementById('population-counter');
    changeIndicatorElement = document.getElementById('change-indicator');
    yearlyComparisonElement = document.getElementById('yearly-comparison');
    citySelector = document.getElementById('city-selector');
    searchButton = document.getElementById('search-button');
    searchInput = document.getElementById('location-search');
    realTimeToggle = document.getElementById('real-time-toggle');
    timePeriodSelect = document.getElementById('time-period');
    refreshDataButton = document.getElementById('refresh-data');
    exportDataButton = document.getElementById('export-data');
    compareCitiesButton = document.getElementById('compare-cities');
    shareDataButton = document.getElementById('share-data');
    printReportButton = document.getElementById('print-report');
    
    // Check if all required elements exist
    const requiredElements = [cityNameElement, populationCounterElement, 
                             changeIndicatorElement, yearlyComparisonElement];
                             
    for (const element of requiredElements) {
        if (!element) {
            console.error('Required element not found in the DOM');
            return false;
        }
    }
    
    elementInitialized = true;
    return true;
}

// Initialize the application
function initApp() {
    // Hide loading screen when initialization begins
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2000);
    
    // Get all required elements
    if (!getElements()) {
        console.error('Failed to initialize: Required DOM elements not found');
        return;
    }
    
    // Initialize the time period select element
    if (timePeriodSelect) {
        timePeriodSelect.value = timePeriod;
    }
    
    updateDateTime();
    initMap();
    initAutocomplete();
    populateCitySelector();
    loadCityData(currentCity);
    setupEventListeners();
    updateTimePeriodUI(); // Initialize time period UI elements
    startRealTimeUpdates();
    
    // Update date/time every second
    setInterval(updateDateTime, 1000);
}

// Check if Leaflet is loaded
function isLeafletLoaded() {
    return typeof L !== 'undefined';
}

// Display error message in a container
function displayError(container, message) {
    container.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
            <button onclick="location.reload()" class="retry-button">
                <i class="fas fa-sync"></i> Reload Page
            </button>
        </div>
    `;
}

// Initialize the map
function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }
    
    // Display loading state
    mapContainer.innerHTML = `
        <div class="component-loader">
            <div class="loader-spinner"></div>
            <p>Loading map...</p>
        </div>
    `;
    
    // Check if Leaflet loaded with a timeout
    let checkAttempts = 0;
    const maxAttempts = 5;
    
    function checkLeafletAndInit() {
        if (isLeafletLoaded()) {
            initLeafletMap(mapContainer);
        } else if (checkAttempts < maxAttempts) {
            checkAttempts++;
            setTimeout(checkLeafletAndInit, 1000); // Try again in 1 second
        } else {
            displayError(mapContainer, 'Map library failed to load after multiple attempts. Please check your internet connection.');
        }
    }
    
    checkLeafletAndInit();
}

// Initialize map with Leaflet
function initLeafletMap(mapContainer) {
    try {
        // Get starting coordinates from current city
        const cityCoords = cityData[currentCity].coordinates;
        
        // Clear the map container to ensure clean initialization
        mapContainer.innerHTML = '';
        
        // Create the map - note Leaflet uses [lat, lng] instead of [lng, lat]
        map = L.map('map').setView([cityCoords[1], cityCoords[0]], 10);
        
        // Try to add a tile layer with fallback options
        if (!tryLoadTiles('street')) {
            throw new Error('Failed to load any map tiles');
        }
        
        // Create a marker for the current location
        marker = L.marker([cityCoords[1], cityCoords[0]], {
            title: cityData[currentCity].name
        }).addTo(map);
        
        // Add popup to marker showing city name and population
        marker.bindPopup(`
            <b>${cityData[currentCity].name}</b><br>
            Population: ${numberFormatter.format(cityData[currentCity].population)}
        `);
        
        // Setup map controls
        setupMapControls();
        
        console.log('Leaflet map loaded successfully');
        
    } catch (error) {
        console.error('Error initializing map:', error);
        displayError(mapContainer, 'Failed to initialize map. Please check your internet connection.');
    }
}

// Initialize the search functionality
function initAutocomplete() {
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }
    
    // Set up search functionality
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    // Also trigger search on Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Add suggestions for common locations as user types
    searchInput.addEventListener('input', function() {
        generateSearchSuggestions(this.value);
    });
}

// Generate search suggestions as user types
function generateSearchSuggestions(query) {
    // If query is too short, don't show suggestions
    if (!query || query.length < 2) {
        hideSearchSuggestions();
        return;
    }
    
    // Create suggestions container if it doesn't exist
    let suggestionsContainer = document.getElementById('search-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.id = 'search-suggestions';
        suggestionsContainer.className = 'search-suggestions';
        
        // Insert after search input
        searchInput.parentNode.insertBefore(suggestionsContainer, searchInput.nextSibling);
    }
    
    // Generate suggestions
    const suggestions = [];
    
    // Add predefined cities
    for (const cityId in cityData) {
        if (cityData[cityId].name.toLowerCase().includes(query.toLowerCase())) {
            suggestions.push({
                type: 'city',
                name: cityData[cityId].name,
                id: cityId
            });
        }
    }
    
    // Add country suggestions from population data
    for (const country in populationData.default) {
        if (country.toLowerCase().includes(query.toLowerCase())) {
            suggestions.push({
                type: 'country',
                name: country
            });
        }
    }
    
    // Add international address and street suggestions
    const internationalAddresses = [
        // North America
        'Fifth Avenue, New York, USA',
        'Hollywood Boulevard, Los Angeles, USA',
        'Michigan Avenue, Chicago, USA',
        'Bourbon Street, New Orleans, USA',
        'Market Street, San Francisco, USA',
        'Robson Street, Vancouver, Canada',
        'Avenida Reforma, Mexico City, Mexico',
        
        // Europe
        'Champs-Élysées, Paris, France',
        'Oxford Street, London, UK',
        'Via Veneto, Rome, Italy',
        'La Rambla, Barcelona, Spain',
        'Kurfürstendamm, Berlin, Germany',
        'Nevsky Prospekt, St. Petersburg, Russia',
        'Nyhavn, Copenhagen, Denmark',
        
        // Asia Pacific
        'Ginza, Tokyo, Japan',
        'Orchard Road, Singapore',
        'Nathan Road, Hong Kong',
        'Khao San Road, Bangkok, Thailand',
        'Chapel Street, Melbourne, Australia',
        'Queen Street, Auckland, New Zealand',
        'MG Road, Bangalore, India',
        
        // Middle East & Africa
        'Tahlia Street, Riyadh, Saudi Arabia',
        'Sheikh Zayed Road, Dubai, UAE',
        'Long Street, Cape Town, South Africa',
        'Osu Oxford Street, Accra, Ghana',
        
        // Philippines (more detailed addresses)
        'Roxas Boulevard, Manila, Philippines',
        'Session Road, Baguio, Philippines',
        'Colon Street, Cebu City, Philippines',
        'JP Laurel Avenue, Davao City, Philippines',
        'Lacson Street, Bacolod, Philippines',
        'McKinley Road, Makati, Philippines',
        'Tomas Morato Avenue, Quezon City, Philippines',
        '32nd Street, Bonifacio Global City, Taguig, Philippines',
        'General Luna Street, Intramuros, Manila, Philippines',
        'Burgos Street, Makati, Philippines',
        'Escario Street, Cebu City, Philippines',
        'Katipunan Avenue, Quezon City, Philippines'
    ];
    
    for (const address of internationalAddresses) {
        if (address.toLowerCase().includes(query.toLowerCase())) {
            suggestions.push({
                type: 'address',
                name: address
            });
        }
    }
    
    // Add common address formats/types as suggestions if query matches a pattern
    if (/street|road|avenue|boulevard|lane|drive|way|plaza|square/i.test(query)) {
        suggestions.push({
            type: 'address-format',
            name: `${query} (Search any street address worldwide)`
        });
    }
    
    if (/district|neighborhood|borough|quarter|area/i.test(query)) {
        suggestions.push({
            type: 'address-format',
            name: `${query} (Search any district or neighborhood)`
        });
    }
    
    // Limit suggestions to top 8 for better visibility
    suggestions.splice(8);
    
    // Display suggestions
    if (suggestions.length > 0) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            
            // Add icon based on type
            let icon = 'map-marker-alt';
            if (suggestion.type === 'country') icon = 'globe';
            else if (suggestion.type === 'city') icon = 'city';
            else if (suggestion.type === 'address') icon = 'road';
            else if (suggestion.type === 'address-format') icon = 'info-circle';
            
            item.innerHTML = `<i class="fas fa-${icon}"></i> ${suggestion.name}`;
            
            // Add click event
            item.addEventListener('click', function() {
                searchInput.value = suggestion.name;
                hideSearchSuggestions();
                performSearch();
            });
            
            suggestionsContainer.appendChild(item);
        });
        
        // Show the suggestions
        suggestionsContainer.style.display = 'block';
    } else {
        hideSearchSuggestions();
    }
}

// Hide search suggestions
function hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

// Perform search using a simple approach
function performSearch() {
    const searchValue = searchInput.value.trim();
    if (!searchValue) return;
    
    // Hide suggestions when search is performed
    hideSearchSuggestions();
    
    // Check if it's a predefined city
    for (const cityId in cityData) {
        if (cityData[cityId].name.toLowerCase() === searchValue.toLowerCase()) {
            currentCity = cityId;
            loadCityData(cityId);
            return;
        }
    }
    
    // Show loading state
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.insertAdjacentHTML('beforeend', `
            <div class="component-loader" id="search-loader">
                <div class="loader-spinner"></div>
                <p>Searching location...</p>
            </div>
        `);
    }
    
    // Simulate location service delay
    setTimeout(() => {
        // Remove loading indicator
        const loader = document.getElementById('search-loader');
        if (loader) loader.remove();
        
        // Parse the location input to extract more context
        const locationDetails = parseLocationInput(searchValue);
        
        // Create a custom location based on search
        customLocation = {
            name: searchValue,
            coordinates: locationDetails.coordinates || generateRandomCoordinatesNear(cityData[currentCity].coordinates),
            city: locationDetails.city || extractCityFromSearch(searchValue),
            country: locationDetails.country || guessCountry(searchValue),
            address: locationDetails.address || searchValue,
            isSpecificAddress: locationDetails.isSpecificAddress
        };
        
        // Generate population data for this location
        generatePopulationData();
        
        // Update the map and UI
        updateMap(customLocation.coordinates);
        loadCustomLocationData();
        
        // Clear the search input but keep the value visually
        const enteredValue = searchInput.value;
        searchInput.blur();
    }, 1500);
}

// Extract city name from search query if possible
function extractCityFromSearch(searchValue) {
    // If it's a simple query without commas, return as is
    if (!searchValue.includes(',')) {
        return searchValue;
    }
    
    // For comma-separated address, try to extract city
    const parts = searchValue.split(',').map(part => part.trim());
    
    // If 3+ parts, second to last is likely city (Street, City, Country)
    if (parts.length >= 3) {
        return parts[parts.length - 2];
    }
    
    // If 2 parts, it could be "City, Country" or "Street, City"
    if (parts.length === 2) {
        // Check if second part is a known country
        for (const country in populationData.default) {
            if (parts[1].toLowerCase().includes(country.toLowerCase())) {
                return parts[0]; // Return first part as city
            }
        }
        
        // Otherwise, return second part as city
        return parts[1];
    }
    
    // Fallback to full search value
    return searchValue;
}

// Parse location input to extract more context
function parseLocationInput(input) {
    const result = {
        original: input,
        city: null,
        country: null,
        coordinates: null,
        isSpecificAddress: false
    };
    
    // Check for comma-separated format (e.g., "Times Square, New York, USA")
    const parts = input.split(',').map(part => part.trim());
    
    if (parts.length > 1) {
        // Last part is likely a country
        const potentialCountry = parts[parts.length - 1];
        
        // Check if it matches a known country
        for (const country in populationData.default) {
            if (country.toLowerCase() === potentialCountry.toLowerCase() || 
                potentialCountry.toLowerCase().includes(country.toLowerCase())) {
                result.country = country;
                break;
            }
        }
        
        // If no country found, check common country codes and names
        if (!result.country) {
            const countryCodes = {
                'USA': 'United States',
                'US': 'United States',
                'UK': 'United Kingdom',
                'UAE': 'United Arab Emirates',
                'PH': 'Philippines',
                'AU': 'Australia',
                'CA': 'Canada',
                'FR': 'France',
                'DE': 'Germany',
                'JP': 'Japan',
                'CN': 'China',
                'IN': 'India',
                'BR': 'Brazil',
                'RU': 'Russia'
            };
            
            if (countryCodes[potentialCountry.toUpperCase()]) {
                result.country = countryCodes[potentialCountry.toUpperCase()];
            }
        }
        
        // Second to last part is likely a city if we have at least 3 parts
        if (parts.length > 2) {
            const potentialCity = parts[parts.length - 2];
            
            // Check if it matches a known city
            for (const cityId in cityData) {
                if (cityData[cityId].name.toLowerCase() === potentialCity.toLowerCase()) {
                    result.city = cityData[cityId].name;
                    result.coordinates = cityData[cityId].coordinates;
                    break;
                }
            }
        }
        
        // If we have a city and country, or address with 3+ parts, consider it a specific address
        if ((result.city && result.country) || parts.length >= 3) {
            result.isSpecificAddress = true;
        }
        
        // If we identified a place, use earlier parts as the street or landmark
        if (result.country || result.city) {
            // Remove the identified place(s)
            const addressParts = [...parts];
            if (result.country) addressParts.pop();
            if (result.city && parts.length > 2) addressParts.pop();
            
            result.address = addressParts.join(', ');
        }
    }
    
    return result;
}

// Guess country based on search term
function guessCountry(term) {
    // Simple check if the term contains a known country name
    for (const country in populationData.default) {
        if (term.toLowerCase().includes(country.toLowerCase())) {
            return country;
        }
    }
    
    // Default fallbacks based on common terms or languages
    const countryHints = {
        'street': 'United States',
        'avenue': 'United States',
        'boulevard': 'France',
        'plaza': 'Spain',
        'square': 'United Kingdom',
        'strasse': 'Germany',
        'via': 'Italy',
        'calle': 'Spain',
        'rue': 'France'
    };
    
    for (const hint in countryHints) {
        if (term.toLowerCase().includes(hint)) {
            return countryHints[hint];
        }
    }
    
    // Default to one of the predefined countries randomly
    const countries = Object.keys(populationData.default);
    return countries[Math.floor(Math.random() * countries.length)];
}

// Generate random coordinates near the specified point for demo purposes
function generateRandomCoordinatesNear(baseCoords) {
    // Add a small random offset to the base coordinates
    // This is just for demo purposes since we don't have a real geocoding service
    const latOffset = (Math.random() - 0.5) * 0.2; // About +/- 0.1 degrees
    const lngOffset = (Math.random() - 0.5) * 0.2;
    
    return [baseCoords[0] + lngOffset, baseCoords[1] + latOffset];
}

// Try loading map tiles with fallback options
function tryLoadTiles(type = 'street') {
    if (!map) return false;
    
    // Get the appropriate tile sources
    const sources = tileFallbacks[type] || tileFallbacks.street;
    let tileIndex = 0;
    let success = false;
    
    // Try each source until one works or we run out of options
    function tryNextSource() {
        if (tileIndex >= sources.length) {
            console.error('All tile sources failed, trying minimal fallback');
            // Try the minimal fallback as last resort
            if (type !== 'minimal') {
                return tryLoadTiles('minimal');
            }
            return false;
        }
        
        // Remove any existing tile layer
        if (tileLayer) {
            map.removeLayer(tileLayer);
        }
        
        const source = sources[tileIndex];
        console.log(`Trying tile source ${tileIndex}: ${source.url}`);
        
        try {
            // Add the tile layer
            tileLayer = L.tileLayer(source.url, source.options).addTo(map);
            
            // Check if it works
            const testImg = new Image();
            testImg.onerror = function() {
                console.error(`Tile source ${tileIndex} failed to load`);
                tileIndex++;
                tryNextSource();
            };
            testImg.onload = function() {
                console.log(`Tile source ${tileIndex} loaded successfully`);
                success = true;
            };
            
            // Test with a sample tile URL
            const zoom = 1, x = 1, y = 1;
            const url = source.url
                .replace('{z}', zoom)
                .replace('{x}', x)
                .replace('{y}', y)
                .replace('{r}', '')
                .replace('{s}', source.options.subdomains ? source.options.subdomains[0] : 'a');
                
            testImg.src = url;
            return true;
        } catch (error) {
            console.error(`Error with tile source ${tileIndex}:`, error);
            tileIndex++;
            tryNextSource();
        }
    }
    
    return tryNextSource();
}

// Toggle satellite/street map view
function toggleMapType() {
    if (!map) return;
    
    isSatelliteView = !isSatelliteView;
    
    // Try to load the appropriate tile type
    tryLoadTiles(isSatelliteView ? 'satellite' : 'street');
    
    // Update button appearance
    const toggleButton = document.getElementById('toggle-satellite');
    if (toggleButton) {
        toggleButton.classList.toggle('active', isSatelliteView);
    }
}

// Setup map controls
function setupMapControls() {
    const toggleSatelliteBtn = document.getElementById('toggle-satellite');
    const zoomToCityBtn = document.getElementById('zoom-to-city');
    
    if (toggleSatelliteBtn) {
        toggleSatelliteBtn.addEventListener('click', toggleMapType);
    }
    
    if (zoomToCityBtn) {
        zoomToCityBtn.addEventListener('click', function() {
            zoomToCurrentCity();
        });
    }
}

// Zoom to current city or custom location
function zoomToCurrentCity() {
    if (!map) return;
    
    const location = customLocation || cityData[currentCity];
    if (!location) return;
    
    // Leaflet uses [lat, lng] format for setView
    map.setView([location.coordinates[1], location.coordinates[0]], 10, {
        animate: true,
        duration: 1.0
    });
    
    // Open the popup to show location info
    if (marker) {
        marker.openPopup();
    }
}

// Update map with new location
function updateMap(coordinates) {
    if (!map || !marker) {
        console.error('Map or marker not initialized');
        return;
    }
    
    try {
        // Update marker position - Leaflet uses [lat, lng] format
        marker.setLatLng([coordinates[1], coordinates[0]]);
        
        // Update popup content
        const location = customLocation || cityData[currentCity];
        marker.bindPopup(`
            <b>${location.name}</b><br>
            Population: ${numberFormatter.format(Math.floor(location.population))}
        `);
        
        // Update map view
        map.setView([coordinates[1], coordinates[0]], 10, {
            animate: true
        });
        
    } catch (error) {
        console.error('Error updating map:', error);
    }
}

// Generate population data for custom location
function generatePopulationData() {
    if (!customLocation) return;
    
    // Default values to use if no matching data is found
    let basePopulation = 100000;
    let growthRate = 0.005;
    
    // Try to find population data based on country
    if (customLocation.country && populationData.default[customLocation.country]) {
        const countryData = populationData.default[customLocation.country];
        
        // For cities, use a fraction of country population
        if (customLocation.city) {
            // Rough estimate - larger cities might have 5-15% of country population
            const fraction = Math.random() * 0.1 + 0.05;
            basePopulation = Math.floor(countryData.base * fraction);
        } else {
            basePopulation = countryData.base;
        }
        
        growthRate = countryData.growthRate;
    } else if (customLocation.city) {
        // If we don't have country data but have a city
        basePopulation = Math.floor(Math.random() * 5000000) + 100000;
        growthRate = (Math.random() * 0.02) - 0.005; // -0.5% to 1.5%
    }
    
    // Add population data to custom location
    customLocation.population = basePopulation;
    customLocation.growthRate = growthRate;
    customLocation.yearlyChange = Math.floor(basePopulation * growthRate);
    
    // Generate other demographic data
    customLocation.birthRate = Math.floor(Math.random() * 20) + 8; // 8-28 per 1,000
    customLocation.deathRate = Math.floor(Math.random() * 15) + 5; // 5-20 per 1,000
    customLocation.immigrationRate = Math.floor(basePopulation * (Math.random() * 0.02)); // 0-2% of population
    customLocation.emigrationRate = Math.floor(basePopulation * (Math.random() * 0.02)); // 0-2% of population
    customLocation.density = Math.floor(Math.random() * 20000) + 1000; // 1,000-21,000 per sq mi
    customLocation.medianAge = Math.floor(Math.random() * 20) + 25; // 25-45 years
    
    const femalePercent = Math.floor(Math.random() * 10) + 45; // 45-55%
    customLocation.genderRatio = {
        female: femalePercent,
        male: 100 - femalePercent
    };
    
    customLocation.householdSize = (Math.random() * 2) + 1.5; // 1.5-3.5 people
    customLocation.householdSize = parseFloat(customLocation.householdSize.toFixed(1));
}

// Load custom location data
function loadCustomLocationData() {
    if (!customLocation) return;
    
    // Update city name
    cityNameElement.textContent = customLocation.name;
    
    // Set population data
    const population = customLocation.population || Math.floor(Math.random() * 1000000) + 100000;
    
    // Store original population if not already stored
    if (!customLocation.originalPopulation) {
        customLocation.originalPopulation = population;
        customLocation.population = population;
    } else {
        // Reset to original population when refreshing
        customLocation.population = customLocation.originalPopulation;
    }
    
    // Format population number
    populationCounterElement.textContent = numberFormatter.format(Math.floor(customLocation.population));
    
    // Calculate growth rate based on country or random if not available
    let growthRate;
    if (customLocation.country && populationData.default[customLocation.country]) {
        growthRate = populationData.default[customLocation.country].growthRate;
    } else {
        // Random growth rate between -0.5% and 3%
        growthRate = (Math.random() * 3.5 - 0.5) / 100;
    }
    
    // Store growth rate in customLocation
    customLocation.growthRate = growthRate;
    
    // Calculate yearly change
    const yearlyChange = Math.floor(customLocation.population * growthRate);
    customLocation.yearlyChange = yearlyChange;
    
    // Format growth indicators
    const growthRateFormatted = (growthRate >= 0 ? '+' : '') + percentFormatter.format(growthRate);
    const yearlyChangeFormatted = (yearlyChange >= 0 ? '+' : '') + numberFormatter.format(yearlyChange);
    
    // Set change indicator classes and text
    changeIndicatorElement.className = growthRate > 0 ? 'positive' : (growthRate < 0 ? 'negative' : 'neutral');
    changeIndicatorElement.innerHTML = `
        <i class="fas fa-arrow-${growthRate > 0 ? 'up' : (growthRate < 0 ? 'down' : 'right')}"></i> 
        ${Math.abs(growthRate * 100).toFixed(1)}%
    `;
    
    yearlyComparisonElement.textContent = `${yearlyChangeFormatted} vs last year`;
    
    // Update last updated timestamp
    lastUpdatedTime = new Date();
    lastUpdatedElement.textContent = lastUpdatedTime.toLocaleString();
    
    // Build custom location data for statistics cards
    const locationData = {
        population: customLocation.population,
        growthRate: growthRate,
        yearlyChange: yearlyChange,
        birthRate: customLocation.isSpecificAddress ? 0 : (Math.random() * 30 + 8).toFixed(1),
        deathRate: customLocation.isSpecificAddress ? 0 : (Math.random() * 15 + 4).toFixed(1),
        immigrationRate: customLocation.isSpecificAddress ? 0 : Math.floor(Math.random() * 300000 + 10000),
        emigrationRate: customLocation.isSpecificAddress ? 0 : Math.floor(Math.random() * 200000 + 5000),
        density: customLocation.isSpecificAddress ? 0 : Math.floor(Math.random() * 20000 + 500),
        medianAge: (Math.random() * 20 + 20).toFixed(1),
        genderRatio: { 
            female: (Math.random() * 5 + 48).toFixed(1), 
            male: (Math.random() * 5 + 48).toFixed(1) 
        },
        householdSize: (Math.random() * 3 + 2).toFixed(1)
    };
    
    // Store these values in customLocation for future reference
    Object.assign(customLocation, locationData);
    
    // Normalize gender ratio to 100%
    const total = parseFloat(locationData.genderRatio.female) + parseFloat(locationData.genderRatio.male);
    locationData.genderRatio.female = ((parseFloat(locationData.genderRatio.female) / total) * 100).toFixed(1);
    locationData.genderRatio.male = (100 - parseFloat(locationData.genderRatio.female)).toFixed(1);
    
    // Update statistics cards
    updateStatisticsCards(customLocation);
    
    // If this is a specific address, update the statistic cards to be more appropriate
    if (customLocation.isSpecificAddress) {
        updateAddressStatistics();
    }
}

// Update statistics for a specific address
function updateAddressStatistics() {
    // Get the stat cards
    const statCards = document.querySelectorAll('.stat-card');
    
    // For specific addresses like streets, some statistics don't make sense
    // Hide or modify certain statistics
    statCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const valueElement = card.querySelector('.stat-value');
        const trendElement = card.querySelector('.trend-indicator');
        
        // Handle each stat type appropriately for addresses
        switch (title) {
            case 'birth rate':
            case 'death rate':
            case 'immigration rate':
            case 'emigration rate':
            case 'population density':
                // These don't apply to specific addresses
                valueElement.textContent = 'N/A for specific address';
                trendElement.style.display = 'none';
                break;
                
            case 'age distribution':
                if (customLocation.city) {
                    valueElement.textContent = `See ${customLocation.city} statistics`;
                } else {
                    valueElement.textContent = 'No data for specific address';
                }
                trendElement.style.display = 'none';
                break;
                
            case 'gender ratio':
                if (customLocation.city) {
                    valueElement.textContent = `See ${customLocation.city} statistics`;
                } else {
                    valueElement.textContent = 'No data for specific address';
                }
                trendElement.style.display = 'none';
                break;
                
            case 'household size':
                // This might make sense for a street or neighborhood
                // Keep as is
                break;
        }
    });
}

// Update the current date and time display
function updateDateTime() {
    const now = new Date();
    currentDatetimeElement.textContent = now.toLocaleString();
    
    // Set up interval to update the time every second
    if (!window.dateTimeInterval) {
        window.dateTimeInterval = setInterval(function() {
            const now = new Date();
            currentDatetimeElement.textContent = now.toLocaleString();
        }, 1000);
    }
}

// Load and display city data
function loadCityData(cityId) {
    const city = cityData[cityId];
    if (!city) return;
    
    // Clear custom location
    customLocation = null;
    
    // Store original population if not already stored
    if (!city.originalPopulation) {
        city.originalPopulation = city.population;
    } else {
        // Reset to original population when switching cities
        city.population = city.originalPopulation;
    }
    
    // Update map with city coordinates
    updateMap(city.coordinates);
    
    // Update city name
    cityNameElement.textContent = city.name;
    
    // Update population counter with formatted number
    populationCounterElement.textContent = numberFormatter.format(Math.floor(city.population));
    
    // Update growth indicators
    const growthRateFormatted = (city.growthRate >= 0 ? '+' : '') + percentFormatter.format(city.growthRate);
    const yearlyChangeFormatted = (city.yearlyChange >= 0 ? '+' : '') + numberFormatter.format(city.yearlyChange);
    
    // Set appropriate CSS class based on growth rate
    changeIndicatorElement.className = city.growthRate > 0 ? 'positive' : (city.growthRate < 0 ? 'negative' : 'neutral');
    
    // Update growth rate display with icon
    changeIndicatorElement.innerHTML = `
        <i class="fas fa-arrow-${city.growthRate > 0 ? 'up' : (city.growthRate < 0 ? 'down' : 'right')}"></i> 
        ${Math.abs(city.growthRate * 100).toFixed(1)}%
    `;
    
    // Update yearly comparison
    yearlyComparisonElement.textContent = `${yearlyChangeFormatted} vs last year`;
    
    // Update last updated timestamp
    lastUpdatedTime = new Date();
    lastUpdatedElement.textContent = lastUpdatedTime.toLocaleString();
    
    // Update statistics cards
    updateStatisticsCards(city);
}

// Update all statistics cards with city data
function updateStatisticsCards(city) {
    const statCards = document.querySelectorAll('.stat-card');
    
    // Update each stat card with the corresponding city data
    statCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const valueElement = card.querySelector('.stat-value');
        const trendElement = card.querySelector('.trend-indicator');
        
        // Set values based on card title
        switch (title) {
            case 'birth rate':
                valueElement.textContent = `${city.birthRate} per 1,000`;
                setTrendIndicator(trendElement, 0.3);
                break;
            case 'death rate':
                valueElement.textContent = `${city.deathRate} per 1,000`;
                setTrendIndicator(trendElement, -0.2);
                break;
            case 'immigration rate':
                valueElement.textContent = `${numberFormatter.format(city.immigrationRate)} annually`;
                setTrendIndicator(trendElement, 2.1);
                break;
            case 'emigration rate':
                valueElement.textContent = `${numberFormatter.format(city.emigrationRate)} annually`;
                setTrendIndicator(trendElement, -1.5);
                break;
            case 'population density':
                valueElement.textContent = `${numberFormatter.format(city.density)} per sq mi`;
                setTrendIndicator(trendElement, 0.5);
                break;
            case 'age distribution':
                valueElement.textContent = `Median: ${city.medianAge} years`;
                setTrendIndicator(trendElement, 0.0);
                break;
            case 'gender ratio':
                valueElement.textContent = `F:${city.genderRatio.female}% M:${city.genderRatio.male}%`;
                setTrendIndicator(trendElement, 0.1);
                break;
            case 'household size':
                valueElement.textContent = `Average: ${city.householdSize}`;
                setTrendIndicator(trendElement, -0.2);
                break;
        }
    });
}

// Set trend indicator with icon and percentage
function setTrendIndicator(element, percentage) {
    let direction, className;
    
    if (percentage > 0) {
        direction = 'up';
        className = 'positive';
    } else if (percentage < 0) {
        direction = 'down';
        className = 'negative';
    } else {
        direction = 'equals';
        className = 'neutral';
    }
    
    element.className = `trend-indicator ${className}`;
    element.innerHTML = `<i class="fas fa-${direction}"></i> ${Math.abs(percentage)}%`;
}

// Setup event listeners
function setupEventListeners() {
    // City selector change event
    citySelector.addEventListener('change', function() {
        currentCity = this.value;
        loadCityData(currentCity);
        stopRealTimeUpdates();
        if (isRealTimeUpdates) {
            startRealTimeUpdates();
        }
    });
    
    // Search button click event
    searchButton.addEventListener('click', function() {
        // Trigger search with current input value
        if (searchInput.value.trim() !== '') {
            // If autocomplete hasn't selected a place yet, we can still focus the input
            searchInput.focus();
        }
    });
    
    // Real-time toggle change event
    realTimeToggle.addEventListener('change', function() {
        isRealTimeUpdates = this.checked;
        if (isRealTimeUpdates) {
            startRealTimeUpdates();
        } else {
            stopRealTimeUpdates();
        }
    });
    
    // Time period change event
    timePeriodSelect.addEventListener('change', function() {
        timePeriod = this.value;
        if (isRealTimeUpdates) {
            stopRealTimeUpdates();
            startRealTimeUpdates();
        }
    });
    
    // Refresh data button click event
    refreshDataButton.addEventListener('click', function() {
        if (customLocation) {
            loadCustomLocationData();
        } else {
            loadCityData(currentCity);
        }
    });
    
    // Export data button click event
    exportDataButton.addEventListener('click', function() {
        exportData();
    });
    
    // Compare cities button click event
    compareCitiesButton.addEventListener('click', function() {
        alert('City comparison feature will be available in the next update.');
    });
    
    // Share data button click event
    shareDataButton.addEventListener('click', function() {
        alert('Sharing feature will be available in the next update.');
    });
    
    // Print report button click event
    printReportButton.addEventListener('click', function() {
        window.print();
    });
    
    // Close search suggestions when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#location-search') && !e.target.closest('#search-suggestions')) {
            hideSearchSuggestions();
        }
    });
}

// Start real-time population updates
function startRealTimeUpdates() {
    if (intervalId) return;
    
    // Determine update interval based on time period
    let updateInterval;
    switch (timePeriod) {
        case 'day':
            updateInterval = 1000; // 1 second
            break;
        case 'week':
            updateInterval = 3000; // 3 seconds
            break;
        case 'month':
            updateInterval = 5000; // 5 seconds
            break;
        case 'year':
        default:
            updateInterval = 10000; // 10 seconds
            break;
    }
    
    // Update UI to reflect the current time period
    updateTimePeriodUI();
    
    // Start interval to update population
    intervalId = setInterval(() => {
        updatePopulationInRealTime();
    }, updateInterval);
}

// Stop real-time updates
function stopRealTimeUpdates() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// Update population in real-time
function updatePopulationInRealTime() {
    // Use either custom location or selected city
    const locationData = customLocation || cityData[currentCity];
    if (!locationData) return;
    
    // Calculate population change based on growth rate and time period
    let changeMultiplier;
    switch (timePeriod) {
        case 'day':
            changeMultiplier = locationData.growthRate / 365;
            break;
        case 'week':
            changeMultiplier = locationData.growthRate / 52;
            break;
        case 'month':
            changeMultiplier = locationData.growthRate / 12;
            break;
        case 'year':
        default:
            changeMultiplier = locationData.growthRate;
            break;
    }
    
    // Apply small random variance for more realistic updates
    const variance = Math.random() * 0.002 - 0.001;
    const effectiveChangeRate = changeMultiplier + variance;
    
    // Calculate new population
    const changeAmount = Math.floor(locationData.population * effectiveChangeRate / 100);
    locationData.population += changeAmount;
    
    // Update display
    populationCounterElement.textContent = numberFormatter.format(Math.floor(locationData.population));
    
    // Update last updated timestamp
    lastUpdatedTime = new Date();
    lastUpdatedElement.textContent = lastUpdatedTime.toLocaleString();
}

// Export data to CSV
function exportData() {
    // Use either custom location or selected city
    const locationData = customLocation || cityData[currentCity];
    if (!locationData) return;
    
    // Create CSV content
    const csvContent = [
        'Metric,Value',
        `Location Name,${locationData.name}`,
        `Population,${locationData.population}`,
        `Growth Rate,${locationData.growthRate * 100}%`,
        `Yearly Change,${locationData.yearlyChange}`,
        `Birth Rate,${locationData.birthRate} per 1000`,
        `Death Rate,${locationData.deathRate} per 1000`,
        `Immigration Rate,${locationData.immigrationRate} annually`,
        `Emigration Rate,${locationData.emigrationRate} annually`,
        `Population Density,${locationData.density} per sq mi`,
        `Median Age,${locationData.medianAge} years`,
        `Female Population,${locationData.genderRatio.female}%`,
        `Male Population,${locationData.genderRatio.male}%`,
        `Average Household Size,${locationData.householdSize}`,
        `Export Date,${new Date().toLocaleString()}`
    ].join('\n');
    
    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    const locationName = locationData.name.replace(/[\s,\/\\]+/g, '_');
    link.setAttribute('download', `${locationName}_Population_Data.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Populate city selector dropdown
function populateCitySelector() {
    if (!citySelector) return;
    
    // Clear existing options (except the first one if it's a default/placeholder)
    while (citySelector.options.length > 0) {
        citySelector.remove(0);
    }
    
    // Sort cities alphabetically by name
    const sortedCities = Object.entries(cityData).sort((a, b) => {
        return a[1].name.localeCompare(b[1].name);
    });
    
    // Group cities by continent/region for better organization
    const regions = {
        'Philippines': [], // Put Philippines first
        'Asia': [],
        'Europe': [],
        'North America': [],
        'South America': [],
        'Africa': [],
        'Oceania': [],
        'Other': []
    };
    
    // Map city keys to their regions
    const cityRegions = {
        'manila': 'Philippines',
        'quezon-city': 'Philippines',
        'cebu-city': 'Philippines',
        'davao-city': 'Philippines',
        'makati': 'Philippines',
        'zamboanga-city': 'Philippines',
        'cagayan-de-oro': 'Philippines',
        'general-santos': 'Philippines',
        'taguig': 'Philippines',
        'pasig': 'Philippines',
        'bacolod': 'Philippines',
        'iloilo-city': 'Philippines',
        'baguio': 'Philippines',
        'tokyo': 'Asia',
        'beijing': 'Asia',
        'mumbai': 'Asia',
        'london': 'Europe',
        'paris': 'Europe',
        'moscow': 'Europe',
        'new-york': 'North America',
        'mexico-city': 'North America',
        'sao-paulo': 'South America',
        'lagos': 'Africa',
        'cairo': 'Africa',
        'sydney': 'Oceania'
    };
    
    // Add cities to their respective regions
    sortedCities.forEach(([id, city]) => {
        const region = cityRegions[id] || 'Other';
        if (regions[region]) {
            regions[region].push({id, name: city.name});
        } else {
            regions['Other'].push({id, name: city.name});
        }
    });
    
    // Create option groups and add to selector
    Object.entries(regions).forEach(([region, cities]) => {
        if (cities.length === 0) return;
        
        const optgroup = document.createElement('optgroup');
        optgroup.label = region;
        
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.id;
            option.textContent = city.name;
            // Add data attribute for filtering
            option.setAttribute('data-search', city.name.toLowerCase());
            optgroup.appendChild(option);
        });
        
        citySelector.appendChild(optgroup);
    });
    
    // Set the default selected city
    citySelector.value = currentCity;
    
    // Add search filter to the city selector
    addCitySearchFilter();
}

// Add search filter to city selector
function addCitySearchFilter() {
    // Check if the container already exists
    let filterContainer = document.querySelector('.city-filter-container');
    
    if (!filterContainer) {
        // Create filter container
        filterContainer = document.createElement('div');
        filterContainer.className = 'city-filter-container';
        
        // Create filter input
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.className = 'city-filter-input';
        filterInput.placeholder = 'Filter cities...';
        
        // Add input event for filtering
        filterInput.addEventListener('input', function() {
            const filterValue = this.value.toLowerCase();
            filterCityOptions(filterValue);
        });
        
        // Add clear button
        const clearButton = document.createElement('button');
        clearButton.className = 'city-filter-clear';
        clearButton.innerHTML = '<i class="fas fa-times"></i>';
        clearButton.addEventListener('click', function() {
            filterInput.value = '';
            filterCityOptions('');
            filterInput.focus();
        });
        
        // Append elements
        filterContainer.appendChild(filterInput);
        filterContainer.appendChild(clearButton);
        
        // Add the filter before the select element
        const locationSelector = document.querySelector('.location-selector');
        if (locationSelector) {
            locationSelector.insertBefore(filterContainer, citySelector);
        }
        
        // Add styles for the filter
        addCityFilterStyles();
    }
}

// Add styles for city filter
function addCityFilterStyles() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .city-filter-container {
            position: relative;
            margin-bottom: 8px;
        }
        
        .city-filter-input {
            width: 100%;
            padding: 8px 30px 8px 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            font-size: 14px;
            box-sizing: border-box;
        }
        
        .city-filter-input:focus {
            outline: none;
            border-color: #3a4b6d;
            box-shadow: 0 0 0 2px rgba(58, 75, 109, 0.2);
        }
        
        .city-filter-clear {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #888;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            width: 20px;
            height: 20px;
        }
        
        .city-filter-clear:hover {
            color: #333;
        }
        
        /* Improve select styling */
        #city-selector {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            background-color: white;
            font-size: 14px;
            max-height: 300px;
            cursor: pointer;
        }
        
        #city-selector:focus {
            outline: none;
            border-color: #3a4b6d;
            box-shadow: 0 0 0 2px rgba(58, 75, 109, 0.2);
        }
        
        /* Style for option groups */
        #city-selector optgroup {
            font-weight: bold;
            color: #3a4b6d;
            padding: 5px;
        }
        
        #city-selector option {
            padding: 8px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(styleElement);
}

// Filter city options based on search input
function filterCityOptions(query) {
    const optgroups = citySelector.querySelectorAll('optgroup');
    
    // Keep track of which optgroups have visible options
    const visibleOptgroups = new Set();
    
    // Process each option
    optgroups.forEach(optgroup => {
        let hasVisibleOptions = false;
        const options = optgroup.querySelectorAll('option');
        
        options.forEach(option => {
            const searchText = option.getAttribute('data-search');
            const matches = searchText.includes(query);
            
            // Hide/show options with display style
            option.style.display = matches ? '' : 'none';
            
            if (matches) {
                hasVisibleOptions = true;
            }
        });
        
        // Hide empty optgroups
        optgroup.style.display = hasVisibleOptions ? '' : 'none';
        
        if (hasVisibleOptions) {
            visibleOptgroups.add(optgroup.label);
        }
    });
    
    // Show a message if no results found
    updateNoResultsMessage(visibleOptgroups.size === 0, query);
}

// Update the no results message
function updateNoResultsMessage(show, query) {
    let noResultsElement = document.getElementById('no-city-results');
    
    if (show) {
        if (!noResultsElement) {
            noResultsElement = document.createElement('div');
            noResultsElement.id = 'no-city-results';
            noResultsElement.className = 'no-results-message';
            citySelector.parentNode.appendChild(noResultsElement);
        }
        
        noResultsElement.innerHTML = `
            <p>No cities found matching "${query}"</p>
            <button id="add-custom-city">Use as custom location</button>
        `;
        
        // Add event listener to the custom location button
        const addCustomBtn = document.getElementById('add-custom-city');
        if (addCustomBtn) {
            addCustomBtn.addEventListener('click', function() {
                // Use the entered query as search input
                searchInput.value = query;
                performSearch();
                
                // Hide the no results message
                noResultsElement.style.display = 'none';
            });
        }
        
        noResultsElement.style.display = 'block';
    } else if (noResultsElement) {
        noResultsElement.style.display = 'none';
    }
}

// Update the UI to reflect the current time period
function updateTimePeriodUI() {
    // Update the time period dropdown to match the current selection
    if (timePeriodSelect) {
        timePeriodSelect.value = timePeriod;
    }
    
    // Update any other UI elements that should reflect the time period
    const periodLabels = {
        day: 'Daily',
        week: 'Weekly',
        month: 'Monthly',
        year: 'Yearly'
    };
    
    // Add or update a label in the counter display to show current time period
    const counterDisplay = document.querySelector('.counter-display');
    let periodIndicator = document.getElementById('period-indicator');
    
    if (!periodIndicator && counterDisplay) {
        periodIndicator = document.createElement('div');
        periodIndicator.id = 'period-indicator';
        periodIndicator.className = 'period-indicator';
        counterDisplay.appendChild(periodIndicator);
    }
    
    if (periodIndicator) {
        periodIndicator.textContent = `${periodLabels[timePeriod]} Growth Rate`;
    }
    
    // Update the header time period selector styling
    if (timePeriodSelect) {
        // Remove any existing active classes from all options
        const options = timePeriodSelect.querySelectorAll('option');
        options.forEach(option => {
            option.classList.remove('active');
        });
        
        // Add active class to the selected option
        const selectedOption = timePeriodSelect.querySelector(`option[value="${timePeriod}"]`);
        if (selectedOption) {
            selectedOption.classList.add('active');
        }
        
        // Update the label to show more information
        const label = document.querySelector('.time-period-selector label');
        if (label) {
            label.innerHTML = `<i class="fas fa-calendar-alt"></i> ${periodLabels[timePeriod]}:`;
        }
    }
}

// Initialize app when document is ready with retry
function initWithRetry(retryCount = 0, maxRetries = 3) {
    try {
        if (document.readyState === 'complete') {
            initApp();
        } else if (retryCount < maxRetries) {
            console.log(`Document not ready, retrying initialization (${retryCount + 1}/${maxRetries})`);
            setTimeout(() => initWithRetry(retryCount + 1, maxRetries), 1000);
        } else {
            console.error('Failed to initialize app after multiple attempts');
            // Force initialization as a last resort
            initApp();
        }
    } catch (error) {
        console.error('Error during app initialization:', error);
        // Try one more time after error
        if (retryCount < maxRetries) {
            setTimeout(() => initWithRetry(retryCount + 1, maxRetries), 2000);
        }
    }
}

// Start initialization when document is ready
document.addEventListener('DOMContentLoaded', () => initWithRetry());

// Time period change handler - separated from event listener for better organization
function handleTimePeriodChange(newPeriod) {
    // Update global time period
    timePeriod = newPeriod;
    
    // Update the UI to reflect the current time period
    updateTimePeriodUI();
    
    // Reset any existing location data to its original population
    if (customLocation && customLocation.originalPopulation) {
        customLocation.population = customLocation.originalPopulation;
    } else {
        for (const cityId in cityData) {
            if (cityData[cityId].originalPopulation) {
                cityData[cityId].population = cityData[cityId].originalPopulation;
            }
        }
    }
    
    // Update the UI to reflect changes
    if (customLocation) {
        loadCustomLocationData();
    } else {
        loadCityData(currentCity);
    }
    
    // Restart real-time updates with new period if enabled
    if (isRealTimeUpdates) {
        stopRealTimeUpdates();
        startRealTimeUpdates();
    }
}