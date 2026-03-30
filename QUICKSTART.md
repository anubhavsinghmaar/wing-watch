# WingWatch Delhi - Quick Start Guide

## 🚀 Running the Application

**Important**: This app makes API calls and must be served over HTTP, not opened as a file.

### Quick Start (Choose One Method)

#### Option 1: Python Web Server (Recommended)
```bash
# Navigate to the project folder
cd /path/to/wingwatch-delhi

# Start server (Python 3)
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Open in browser:
# http://localhost:8000
```

#### Option 2: Node.js (http-server)
```bash
# Install globally (one time)
npm install -g http-server

# Navigate to project folder
cd /path/to/wingwatch-delhi

# Start server
http-server -p 8000

# Open in browser:
# http://localhost:8000
```

#### Option 3: PHP Built-in Server
```bash
# Navigate to project folder
cd /path/to/wingwatch-delhi

# Start server
php -S localhost:8000

# Open in browser:
# http://localhost:8000
```

#### Option 4: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## ⚠️ Why Can't I Just Open the HTML File?

Opening `index.html` directly gives you a `file://` URL, which browsers block from making API requests due to CORS (Cross-Origin Resource Sharing) security policies.

**Direct file opening**: `file:///Users/.../index.html` ❌ APIs blocked
**Local web server**: `http://localhost:8000/` ✅ APIs work

---

## 🔑 After Starting the Server

1. Open `http://localhost:8000` in your browser
2. Go to **Settings** tab
3. Add your API keys:
   - **Perplexity**: Get from [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)
   - **Gemini**: Get from [Google AI Studio](https://makersuite.google.com/app/apikey)
4. Click **Save Configuration**
5. Now all features will work!

---

## 📱 Features That Work Offline (No Server Needed)

If you just want to track sightings without API features:
- Dashboard with bird cards ✅
- Report sightings ✅
- Species Explorer (basic info) ✅

These will work even when opened as `file://`, but you won't get:
- Bird Call audio analysis ❌
- Conservation data from Perplexity ❌

---

## 🐛 Troubleshooting

**Issue**: "Failed to fetch" error
**Solution**: Make sure you're using `http://localhost:8000`, not `file://`

**Issue**: Port 8000 already in use
**Solution**: Try a different port (e.g., 8001, 8080, 3000)

**Issue**: Python/Node not installed
**Solution**: Install Python from [python.org](https://python.org) or use VS Code Live Server

---

## 🎯 Recommended Setup

1. **Install Python** (if not installed): Most Macs have it pre-installed
2. **One command**: `python3 -m http.server 8000`
3. **Open browser**: `http://localhost:8000`
4. **Bookmark it**: Save the URL for easy access

That's it! The server will run until you press Ctrl+C in Terminal.
