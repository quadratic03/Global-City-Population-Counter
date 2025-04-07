# Global City Population Counter

A modern web application for tracking and visualizing city population statistics from around the world in real-time, with special focus on Philippine cities.

## Features

- **Real-time Population Counter**: Dynamic display of current population with animated number transitions
- **Global City Selection**: Choose from cities across all continents with organized region grouping
- **Philippine Cities Focus**: Complete data for Manila, Quezon City, Cebu City, Davao City, Makati, and more
- **Global Location Search**: Search for any city, country, street, or address worldwide with intelligent suggestions
- **Interactive Map**: Visual representation of the selected location with multiple viewing options
- **Time Period Control**: Switch between Day, Week, Month, and Year views directly from the header
- **Robust Map System**: Multiple tile providers with automatic fallback options for reliability
- **Comprehensive Statistics**: View key demographics including birth rate, death rate, immigration, and more
- **Interactive Controls**: Toggle real-time updates and refresh data
- **Data Export**: Export city population data in CSV format
- **Responsive Design**: Fully responsive layout for desktop and mobile devices

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)
- Internet connection for the map features

### Installation

1. Clone or download this repository
2. If using XAMPP, place the files in your `htdocs` directory
3. Open `index.html` in your browser or through your local server

## Usage

### City Selection

- Use the city selector dropdown to choose from cities organized by region
- Filter cities by typing in the search box above the dropdown
- Philippine cities are grouped together for easy access
- Select "Use as custom location" if your city isn't listed

### Time Period Control

- Use the Time Period selector in the header to switch between Day, Week, Month, and Year views
- Each time period affects:
  - The update frequency of real-time population changes
  - The calculation of growth rates and statistics
  - The visual indicator in the population counter section

### Searching for Locations

The application supports searching for any location worldwide:

1. Type a location name in the search bar at the top of the page
   - As you type, you'll see intelligent suggestions appear
   - Suggestions include cities, countries, landmarks, and streets
2. Select from the suggestions or continue typing your custom location
3. Press Enter or click the search button to perform the search
4. The application will generate and display population statistics for the searched location
5. The map will update to show the location

For advanced searches, use formats like:
- "Times Square, New York" (landmark in city)
- "Oxford Street, London" (street in city) 
- "Brandenburg Gate, Berlin" (landmark in city)
- "Roxas Boulevard, Manila, Philippines" (street in specific country)

For locations not in the predefined list, the app generates realistic population data based on:
- Country-level population data if available
- Statistical models for demographic calculations
- Language and terminology analysis to determine the likely country

### Using the Map

- Zoom in/out using the +/- controls or mouse wheel
- Pan the map by clicking and dragging
- Toggle between street view and satellite imagery
- Use the "Focus Current" button to center on the current location
- The map features multiple fallback tile sources for reliability

### Exporting Data

Click the "Export" button to download the current location's population data as a CSV file.

### Printing

Click the "Print" button to generate a print-friendly version of the current location statistics.

## Philippine Cities

The application includes detailed information for Philippine cities including:

- **Manila**: The capital city with population, density, and growth trends
- **Quezon City**: The most populous city in Metro Manila
- **Cebu City**: The major urban center in the Visayas
- **Davao City**: The largest city in Mindanao
- **Other Cities**: Makati, Taguig, Pasig, Zamboanga City, Cagayan de Oro, General Santos, Bacolod, Iloilo City, and Baguio

Each city includes comprehensive data on population density, growth rate, birth/death rates, and demographic information.

## Data Sources

The application uses:
- Real data for predefined major cities
- Country-level population data from the World Bank and UN
- Generated data for other locations based on statistical models
- OpenStreetMap and multiple reliable tile providers for mapping

## Technical Details

The application is built with:
- HTML5
- CSS3 with Flexbox and Grid layouts
- Vanilla JavaScript (ES6+)
- Leaflet for interactive mapping
- Multiple map tile providers with automatic fallback system
- Intelligent address parsing and country detection
- Font Awesome for icons

## Recent Improvements

- Added 13 Philippine cities with comprehensive demographic data
- Implemented robust map tile fallback system for reliable display
- Enhanced global search with intelligent address parsing
- Added dynamic time period selection in the header
- Improved city filtering with organized region grouping
- Fixed text visibility issues in search inputs
- Added special handling for specific addresses vs. city statistics 