# 🦅 WingWatch Delhi

A local-first web application for tracking migratory and resident birds in Delhi NCR.

## Quick Start

Simply open `index.html` in any modern web browser. No build tools or installation required!

## Features

### 🗺️ Dashboard - Arrival Board
- Track bird sightings across 5 key locations in Delhi NCR
- Filter by location, category, and sighting status
- Report sightings with date, count, and notes
- Automatic status updates based on report frequency

### 🎵 Bird Call Analyzer
- Upload audio recordings of bird calls
- AI-powered species identification using Gemini API
- Context-aware suggestions based on location, habitat, and time

### 📚 Species Explorer
- Browse 40 bird species across 5 categories
- Detailed species profiles with seasonal information
- IUCN conservation status
- Real-time conservation data via Perplexity API

### ⚙️ Settings
- Configure your own Perplexity and Gemini API keys
- Optional localStorage persistence
- Data management and reset options
- Complete privacy and security control

## Data

### Locations
- Sultanpur Bird Sanctuary
- Okhla Bird Sanctuary
- Najafgarh Jheel
- Yamuna Khadar
- Bhindawas

### Bird Categories
- **Waterfowl** (13 species): Bar-headed Goose, Northern Shoveler, Common Pochard, etc.
- **Waders** (7 species): Black-tailed Godwit, Common Redshank, Pied Avocet, etc.
- **Gulls and Terns** (6 species): Brown-headed Gull, River Tern, etc.
- **Raptors** (6 species): Steppe Eagle, Marsh Harrier, Osprey, etc.
- **Residents** (8 species): Indian Peafowl, Black Kite, Shikra, etc.

## API Configuration (Optional)

To use AI-powered features:

1. **Gemini API** (for Bird Call analysis)
   - Get API key from: https://makersuite.google.com/app/apikey
   - Base URL: `https://generativelanguage.googleapis.com`

2. **Perplexity API** (for Conservation data)
   - Get API key from: https://www.perplexity.ai/settings/api
   - Base URL: `https://api.perplexity.ai`

Configure both in the Settings tab.

## Privacy & Security

✅ **Local-First**: All data stored in your browser  
✅ **No Backend**: No server required  
✅ **No Tracking**: No analytics or data collection  
✅ **Secure APIs**: Keys never hardcoded, optional localStorage persistence  
✅ **Offline Ready**: Core features work without internet  

## Technology

- **HTML5**: Semantic structure
- **CSS3**: Modern responsive design with CSS custom properties
- **Vanilla JavaScript**: No frameworks or dependencies
- **localStorage**: Client-side data persistence
- **Fetch API**: Optional API integrations

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## File Structure

```
wingwatch-delhi/
├── index.html    # Main application structure
├── app.js        # Application logic and data
├── styles.css    # Styling and responsive design
└── README.md     # This file
```

## Usage Tips

### Reporting Sightings
1. Find the bird on the Dashboard
2. Click "I Saw It"
3. Fill in date and approximate count
4. Save - the card updates automatically!

### Smart Status System
- **Not sighted** (grey): No reports yet
- **Spotted low numbers** (amber): 1-4 reports
- **Peak season** (green): 5+ reports

### Filtering Birds
Combine multiple filters:
- Select a specific location
- Search by bird name
- Filter by category
- Toggle status visibility

## Contributing

This is a static local-first application. To modify:

1. Edit the source files directly
2. Refresh browser to see changes
3. No build step required

### Adding New Birds

Edit the `BIRDS` array in `app.js`:

```javascript
{
  id: "unique_id",
  englishName: "Species Name",
  hindiName: "हिंदी नाम",
  category: "Waterfowl", // or Waders, Gulls and Terns, Raptors, Residents
  isResident: false,
  iucnStatus: "Least Concern",
  season: {
    arrival: "October",
    peak: "December",
    departure: "March",
    note: "Additional info"
  }
}
```

### Adding New Locations

Edit the `LOCATIONS` array in `app.js`:

```javascript
{
  id: "location_id",
  name: "Location Name"
}
```

## License

This is a demonstration project. Feel free to use and modify as needed.

## Credits

Built with ❤️ for bird watchers and nature enthusiasts in Delhi NCR.

---

**Happy Birding! 🦅**
