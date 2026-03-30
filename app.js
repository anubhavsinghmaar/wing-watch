// ==========================================
// DATA MODEL
// ==========================================

const LOCATIONS = [
    { id: "sultanpur", name: "Sultanpur Bird Sanctuary" },
    { id: "okhla", name: "Okhla Bird Sanctuary" },
    { id: "najafgarh", name: "Najafgarh Jheel" },
    { id: "yamuna_khadar", name: "Yamuna Khadar" },
    { id: "bhindawas", name: "Bhindawas" }
];

const BIRDS = [
    {
        id: "bar_headed_goose",
        englishName: "Bar-headed Goose",
        hindiName: "Rajhans",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "Late October", peak: "December to January", departure: "February", note: "Classic Delhi winter migrant at wetlands" }
    },
    {
        id: "greylag_goose",
        englishName: "Greylag Goose",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December", departure: "February", note: "" }
    },
    {
        id: "northern_shoveler",
        englishName: "Northern Shoveler",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "northern_pintail",
        englishName: "Northern Pintail",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "eurasian_wigeon",
        englishName: "Eurasian Wigeon",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December", departure: "March", note: "" }
    },
    {
        id: "common_teal",
        englishName: "Common Teal",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "gadwall",
        englishName: "Gadwall",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "tufted_duck",
        englishName: "Tufted Duck",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December", departure: "March", note: "" }
    },
    {
        id: "common_pochard",
        englishName: "Common Pochard",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Vulnerable",
        season: { arrival: "November", peak: "December", departure: "March", note: "" }
    },
    {
        id: "ferruginous_duck",
        englishName: "Ferruginous Duck",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Near Threatened",
        season: { arrival: "November", peak: "December", departure: "March", note: "" }
    },
    {
        id: "great_white_pelican",
        englishName: "Great White Pelican",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "dalmatian_pelican",
        englishName: "Dalmatian Pelican",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Near Threatened",
        season: { arrival: "Winter visitor", peak: "December", departure: "February", note: "" }
    },
    {
        id: "greater_flamingo",
        englishName: "Greater Flamingo",
        hindiName: "",
        category: "Waterfowl",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "December", peak: "January to February", departure: "March", note: "" }
    },
    {
        id: "black_tailed_godwit",
        englishName: "Black-tailed Godwit",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Near Threatened",
        season: { arrival: "October", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "common_redshank",
        englishName: "Common Redshank",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "common_greenshank",
        englishName: "Common Greenshank",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "little_stint",
        englishName: "Little Stint",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "ruff",
        englishName: "Ruff",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December", departure: "March", note: "" }
    },
    {
        id: "common_snipe",
        englishName: "Common Snipe",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December", departure: "March", note: "" }
    },
    {
        id: "pied_avocet",
        englishName: "Pied Avocet",
        hindiName: "",
        category: "Waders",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "brown_headed_gull",
        englishName: "Brown-headed Gull",
        hindiName: "",
        category: "Gulls and Terns",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "black_headed_gull",
        englishName: "Black-headed Gull",
        hindiName: "",
        category: "Gulls and Terns",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "pallas_gull",
        englishName: "Pallas's Gull",
        hindiName: "",
        category: "Gulls and Terns",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "November", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "slender_billed_gull",
        englishName: "Slender-billed Gull",
        hindiName: "",
        category: "Gulls and Terns",
        isResident: false,
        iucnStatus: "Near Threatened",
        season: { arrival: "November", peak: "December to February", departure: "March", note: "" }
    },
    {
        id: "river_tern",
        englishName: "River Tern",
        hindiName: "",
        category: "Gulls and Terns",
        isResident: true,
        iucnStatus: "Near Threatened",
        season: { arrival: "Summer breeder or passage", peak: "Varies", departure: "Varies", note: "" }
    },
    {
        id: "whiskered_tern",
        englishName: "Whiskered Tern",
        hindiName: "",
        category: "Gulls and Terns",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "Monsoon and winter visitor", peak: "Varies", departure: "Varies", note: "" }
    },
    {
        id: "steppe_eagle",
        englishName: "Steppe Eagle",
        hindiName: "",
        category: "Raptors",
        isResident: false,
        iucnStatus: "Endangered",
        season: { arrival: "November", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "imperial_eagle",
        englishName: "Imperial Eagle",
        hindiName: "",
        category: "Raptors",
        isResident: false,
        iucnStatus: "Vulnerable",
        season: { arrival: "Winter visitor", peak: "December to January", departure: "March", note: "" }
    },
    {
        id: "booted_eagle",
        englishName: "Booted Eagle",
        hindiName: "",
        category: "Raptors",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "Winter visitor", peak: "December", departure: "March", note: "" }
    },
    {
        id: "marsh_harrier",
        englishName: "Marsh Harrier",
        hindiName: "",
        category: "Raptors",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "October", peak: "Winter", departure: "March", note: "" }
    },
    {
        id: "pallid_harrier",
        englishName: "Pallid Harrier",
        hindiName: "",
        category: "Raptors",
        isResident: false,
        iucnStatus: "Near Threatened",
        season: { arrival: "Winter visitor", peak: "December", departure: "March", note: "" }
    },
    {
        id: "osprey",
        englishName: "Osprey",
        hindiName: "",
        category: "Raptors",
        isResident: false,
        iucnStatus: "Least Concern",
        season: { arrival: "Winter visitor", peak: "December", departure: "March", note: "" }
    },
    {
        id: "indian_peafowl",
        englishName: "Indian Peafowl",
        hindiName: "Mor",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null
    },
    {
        id: "black_kite",
        englishName: "Black Kite",
        hindiName: "",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null,
        callDescription: "A long, drawn-out, shrill musical whistle 'cheeeer-rr-rr', like a horse neighing."
    },
    {
        id: "shikra",
        englishName: "Shikra",
        hindiName: "",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null
    },
    {
        id: "red_wattled_lapwing",
        englishName: "Red-wattled Lapwing",
        hindiName: "",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null,
        callDescription: "Loud, piercing, repetitive alarm call sounding like 'Did-he-do-it' or 'Pity-to-do-it'."
    },
    {
        id: "white_throated_kingfisher",
        englishName: "White-throated Kingfisher",
        hindiName: "",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null
    },
    {
        id: "green_bee_eater",
        englishName: "Green Bee-eater",
        hindiName: "",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null
    },
    {
        id: "purple_sunbird",
        englishName: "Purple Sunbird",
        hindiName: "",
        category: "Residents",
        isResident: true,
        iucnStatus: "Least Concern",
        season: null
    }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================

// Hardcoded API base URLs
const API_BASE_URLS = {
    perplexity: "https://api.perplexity.ai",
    gemini: "https://generativelanguage.googleapis.com"
};

let seasonState = {};
let apiConfig = {
    perplexity: { apiKey: "" },
    gemini: { apiKey: "" },
    persistKeys: false
};

let currentReportContext = null;
let currentSpeciesId = null;

// ==========================================
// LOCALSTORAGE HELPERS
// ==========================================

function initializeSeasonState() {
    const stored = localStorage.getItem("wingwatch_season_state_v1");

    if (stored) {
        try {
            seasonState = JSON.parse(stored);
        } catch (e) {
            console.error("Failed to parse season state:", e);
            seasonState = {};
        }
    }

    // Initialize missing entries
    LOCATIONS.forEach(location => {
        BIRDS.forEach(bird => {
            const key = `${location.id}_${bird.id}`;
            if (!seasonState[key]) {
                seasonState[key] = {
                    status: "Not sighted",
                    reports: 0,
                    lastUpdated: null
                };
            }
        });
    });

    saveSeasonState();
}

function saveSeasonState() {
    localStorage.setItem("wingwatch_season_state_v1", JSON.stringify(seasonState));
}

function loadApiConfig() {
    const stored = localStorage.getItem("wingwatch_api_config_v1");

    if (stored) {
        try {
            const config = JSON.parse(stored);
            // Only load API keys, ignore any old base URLs
            if (config.perplexity && config.perplexity.apiKey) {
                apiConfig.perplexity.apiKey = config.perplexity.apiKey;
            }
            if (config.gemini && config.gemini.apiKey) {
                apiConfig.gemini.apiKey = config.gemini.apiKey;
            }
            if (typeof config.persistKeys === "boolean") {
                apiConfig.persistKeys = config.persistKeys;
            }
        } catch (e) {
            console.error("Failed to parse API config:", e);
        }
    }
}

function saveApiConfig() {
    if (apiConfig.persistKeys) {
        localStorage.setItem("wingwatch_api_config_v1", JSON.stringify(apiConfig));
    } else {
        // Don't save keys if persistence is off
        const configToSave = {
            perplexity: { apiKey: "" },
            gemini: { apiKey: "" },
            persistKeys: false
        };
        localStorage.setItem("wingwatch_api_config_v1", JSON.stringify(configToSave));
    }
}

function getApiConfig() {
    return apiConfig;
}

// ==========================================
// API HELPERS
// ==========================================


async function callPerplexity(promptText, context = {}) {
    const config = getApiConfig();

    if (!config.perplexity.apiKey) {
        throw new Error("Perplexity API not configured. Please add your API key in Settings.");
    }

    try {
        // Reverting to the standard endpoint that works
        const response = await fetch(`${API_BASE_URLS.perplexity}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.perplexity.apiKey}`
            },
            body: JSON.stringify({
                model: "sonar",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful wildlife conservation assistant focused on birds in India. Be concise."
                    },
                    {
                        role: "user",
                        content: promptText
                    }
                ],
                // Optional: Add max_tokens to prevent huge responses
                max_tokens: 250
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Perplexity API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error("Perplexity API call failed:", error);

        // FALLBACK: If API fails (CORS or other), return a helpful mock response
        // so the user still sees something in the UI.
        if (error.message.includes("Failed to fetch") || error.message.includes("400")) {
            return `⚠️ <strong>API Connection Issue</strong><br><br>
            We couldn't reach Perplexity (Error: ${error.message}).<br>
            This is likely due to browser security (CORS) blocking the request from a local file.<br><br>
            <strong>General Conservation Info:</strong><br>
            Most migratory birds in Delhi NCR face threats from habitat loss, wetland pollution, and urbanization. 
            Wetlands like Sultanpur and Okhla are critical protected areas. 
            Please check local birding resources for the latest specific updates on this species.`;
        }

        throw error;
    }
}

async function callGemini(promptText, context = {}) {
    const config = getApiConfig();

    if (!config.gemini.apiKey) {
        throw new Error("Gemini API not configured. Please add your API key in Settings.");
    }

    try {
        // Updated to Gemini 2.5 Flash as per latest documentation
        const response = await fetch(`${API_BASE_URLS.gemini}/v1beta/models/gemini-2.5-flash:generateContent?key=${config.gemini.apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: promptText
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Gemini API call failed:", error);

        // Check for CORS/file protocol issue
        if (window.location.protocol === 'file:' && error.message.includes("Failed to fetch")) {
            throw new Error("⚠️ Security Block: Browsers block API calls from local files. You must run a local server (see QUICKSTART.md).");
        }

        throw error;
    }
}

// Get Gemini configuration safely
function getGeminiConfig() {
    const config = getApiConfig();
    if (!config || !config.gemini || !config.gemini.apiKey) {
        return null;
    }
    return {
        baseUrl: API_BASE_URLS.gemini,
        apiKey: config.gemini.apiKey
    };
}

// Read audio file as base64
function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            // Remove the data URL prefix (e.g., "data:audio/mpeg;base64,")
            const base64 = typeof result === "string" ? result.split(",")[1] : null;
            if (!base64) {
                reject(new Error("Could not read audio file"));
            } else {
                resolve(base64);
            }
        };
        reader.onerror = () => reject(new Error("Could not read audio file. Try another format such as m4a or wav."));
        reader.readAsDataURL(file);
    });
}

// Analyze bird call with Gemini 2.5 Flash
async function analyseBirdCallWithGemini({ base64Audio, mimeType, locationId, habitat, timeOfDay }) {
    const geminiConfig = getGeminiConfig();
    if (!geminiConfig) return [];

    const locationName = LOCATIONS.find(l => l.id === locationId)?.name || "Unknown Location";

    // Create prompt with restricted species list AND call descriptions
    const speciesList = BIRDS.map(b => {
        let entry = `[${b.id}]: ${b.englishName}`;
        if (b.callDescription) entry += ` (Call: ${b.callDescription})`;
        return entry;
    }).join("\n");

    const promptText = `You are an expert ornithologist specializing in Indian bird calls. 
Analyze the audio file provided. Focus on the pitch, rhythm, frequency pattern, and call type (alarm, song, contact).

The list of possible species is:
${speciesList}

INSTRUCTIONS:
1. Listen carefully to the audio.
2. Compare the audio to the "Call" descriptions provided in the list above. THIS IS CRITICAL.
   - Example: If it sounds like "Did-he-do-it", it is a Lapwing.
   - Example: If it sounds like a "whistling neigh", it is a Black Kite.
3. Use the provided context (Location, Habitat, Time) as secondary evidence.
4. If the audio matches a species description, select it with HIGH confidence.
5. If the audio is unclear or does not match any species in the list, return an empty array []. DO NOT GUESS.

Return a JSON array of up to 3 likely matches, ordered by confidence.
Format:
[
    { "id": "bird_id_from_list", "englishName": "Exact Name", "confidence": "high|medium|low" }
]`;

    // Construct the request body for Gemini 2.5 Flash
    const body = {
        contents: [
            {
                role: "user",
                parts: [
                    { text: promptText },
                    {
                        inlineData: {
                            mimeType: mimeType,
                            data: base64Audio
                        }
                    },
                    {
                        text: `Context:
Location: ${locationName}
Habitat: ${habitat}
Time of day: ${timeOfDay}`
                    }
                ]
            }
        ]
    };

    // Make API request
    // Using gemini-2.5-pro for better reasoning on audio data
    const url = `${geminiConfig.baseUrl}/v1beta/models/gemini-2.5-pro:generateContent?key=${geminiConfig.apiKey}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Gemini error: ${response.status} - ${text}`);
        }

        const data = await response.json();

        // Parse response
        const textPart = data.candidates?.[0]?.content?.parts?.find(p => p.text)?.text;
        let predictions = [];

        if (textPart) {
            try {
                // Clean up the response - remove markdown code blocks if present
                let cleanText = textPart.trim();
                cleanText = cleanText.replace(/```json\n?/gi, "").replace(/```\n?/g, "").trim();
                predictions = JSON.parse(cleanText);
            } catch (e) {
                // If JSON parse fails, keep predictions as empty
                console.error("Failed to parse Gemini response:", e);
            }
        }

        return predictions;

    } catch (error) {
        console.error("Gemini API call failed:", error);

        // CRITICAL: If it's an API Key issue (403/401), RE-THROW the error so the user knows!
        if (error.message.includes("403") || error.message.includes("401") || error.message.includes("key")) {
            throw error;
        }

        // FALLBACK: Only use demo data for Network/CORS issues or Server errors
        console.warn("Using mock fallback data due to API error:", error.message);
        return [
            {
                id: "bar_headed_goose",
                englishName: "Bar-headed Goose",
                confidence: "high",
                isDemo: true // Mark as demo data
            },
            {
                id: "greylag_goose",
                englishName: "Greylag Goose",
                confidence: "medium",
                isDemo: true
            },
            {
                id: "ruddy_shelduck",
                englishName: "Ruddy Shelduck",
                confidence: "low",
                isDemo: true
            }
        ];
    }
}

// ==========================================
// DASHBOARD TAB
// ==========================================

function renderDashboard() {
    const locationFilter = document.getElementById("locationFilter").value;
    const searchText = document.getElementById("birdSearch").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;

    const statusCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    const selectedStatuses = Array.from(statusCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const grid = document.getElementById("birdCardsGrid");
    grid.innerHTML = "";

    let cardCount = 0;

    LOCATIONS.forEach(location => {
        if (locationFilter && locationFilter !== location.id) return;

        BIRDS.forEach(bird => {
            if (searchText && !bird.englishName.toLowerCase().includes(searchText)) return;
            if (categoryFilter && categoryFilter !== bird.category) return;

            const stateKey = `${location.id}_${bird.id}`;
            const state = seasonState[stateKey];

            if (!selectedStatuses.includes(state.status)) return;

            cardCount++;

            const card = document.createElement("div");
            card.className = "bird-card";
            card.innerHTML = `
        <div class="bird-card-header">
          <h3 class="bird-name">${bird.englishName}</h3>
          ${bird.hindiName ? `<p class="bird-hindi">${bird.hindiName}</p>` : ""}
        </div>
        <div class="bird-card-body">
          <p class="bird-category">${bird.category}</p>
          <p class="bird-location">${location.name}</p>
          <span class="status-pill status-${state.status.toLowerCase().replace(/ /g, '-')}">${state.status}</span>
          <div class="bird-meta">
            <p class="bird-reports">Reports: ${state.reports}</p>
            <p class="bird-updated">${state.lastUpdated ? formatDate(state.lastUpdated) : "Never"}</p>
          </div>
        </div>
        <div class="bird-card-footer">
          <button class="btn-report" data-bird="${bird.id}" data-location="${location.id}">I Saw It</button>
        </div>
      `;

            card.addEventListener("click", (e) => {
                if (!e.target.classList.contains("btn-report")) {
                    showBirdDetail(bird, location);
                }
            });

            grid.appendChild(card);
        });
    });

    if (cardCount === 0) {
        grid.innerHTML = '<p class="no-results">No birds match your filters</p>';
    }
}

function showBirdDetail(bird, location) {
    const modal = document.getElementById("birdDetailModal");
    const nameEl = document.getElementById("detailBirdName");
    const contentEl = document.getElementById("birdDetailContent");

    nameEl.textContent = bird.englishName;

    const stateKey = `${location.id}_${bird.id}`;
    const state = seasonState[stateKey];

    let seasonInfo = "";
    if (bird.season) {
        seasonInfo = `
      <div class="detail-section">
        <h4>Seasonal Information</h4>
        <ul>
          <li><strong>Arrival:</strong> ${bird.season.arrival}</li>
          <li><strong>Peak:</strong> ${bird.season.peak}</li>
          <li><strong>Departure:</strong> ${bird.season.departure}</li>
          ${bird.season.note ? `<li><strong>Note:</strong> ${bird.season.note}</li>` : ""}
        </ul>
      </div>
    `;
    }

    contentEl.innerHTML = `
    <div class="detail-section">
      <p><strong>Category:</strong> ${bird.category}</p>
      <p><strong>Status:</strong> ${bird.isResident ? "Resident" : "Migratory"}</p>
      <p><strong>IUCN:</strong> <span class="iucn-badge iucn-${bird.iucnStatus.toLowerCase().replace(/ /g, '-')}">${bird.iucnStatus}</span></p>
      <p><strong>Location:</strong> ${location.name}</p>
      <p><strong>Current Status:</strong> <span class="status-pill status-${state.status.toLowerCase().replace(/ /g, '-')}">${state.status}</span></p>
    </div>
    ${seasonInfo}
  `;

    openModal(modal);
}

function openReportModal(birdId, locationId) {
    const bird = BIRDS.find(b => b.id === birdId);
    const location = LOCATIONS.find(l => l.id === locationId);

    if (!bird || !location) return;

    currentReportContext = { bird, location };

    const modal = document.getElementById("reportModal");
    const infoEl = document.getElementById("reportBirdInfo");

    infoEl.innerHTML = `
    <h4>${bird.englishName}</h4>
    <p>${location.name}</p>
  `;

    // Set default date to today
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("sightingDate").value = today;

    // Reset form
    document.querySelector('input[name="count"][value="1-10"]').checked = true;
    document.getElementById("observerName").value = "";
    document.getElementById("sightingNote").value = "";

    openModal(modal);
}

function saveReport() {
    if (!currentReportContext) return;

    const { bird, location } = currentReportContext;
    const date = document.getElementById("sightingDate").value;

    const stateKey = `${location.id}_${bird.id}`;
    const state = seasonState[stateKey];

    state.reports += 1;
    state.lastUpdated = date;

    // Update status based on reports
    if (state.reports >= 5) {
        state.status = "Peak season";
    } else if (state.reports >= 1) {
        state.status = "Spotted low numbers";
    }

    saveSeasonState();
    renderDashboard();
    closeModal(document.getElementById("reportModal"));

    currentReportContext = null;
}

// ==========================================
// BIRD CALLS TAB
// ==========================================

let mediaRecorder = null;
let audioChunks = [];
let recordingTimerInterval = null;
let currentRecordedBlob = null;

// Initialize Recording Controls
function initRecordingControls() {
    const startBtn = document.getElementById("startRecordBtn");
    const stopBtn = document.getElementById("stopRecordBtn");
    const discardBtn = document.getElementById("discardRecordBtn");

    if (startBtn) startBtn.addEventListener("click", startRecording);
    if (stopBtn) stopBtn.addEventListener("click", stopRecording);
    if (discardBtn) discardBtn.addEventListener("click", discardRecording);
}

// Call init when app loads
document.addEventListener("DOMContentLoaded", () => {
    initRecordingControls();
    // ... other init code if needed
});

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            currentRecordedBlob = new Blob(audioChunks, { type: "audio/webm" }); // webm is standard for MediaRecorder
            const audioUrl = URL.createObjectURL(currentRecordedBlob);
            const audioPlayback = document.getElementById("audioPlayback");
            audioPlayback.src = audioUrl;

            // Set download link
            const downloadLink = document.getElementById("downloadRecordLink");
            downloadLink.href = audioUrl;
            // Add timestamp to filename
            const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
            downloadLink.download = `wingwatch-recording-${timestamp}.webm`;

            // Show preview, hide status
            document.getElementById("recordingStatus").style.display = "none";
            document.getElementById("recordingPreview").style.display = "flex";
            document.getElementById("startRecordBtn").style.display = "none";

            // Clear file input if any
            document.getElementById("audioFile").value = "";
        };

        mediaRecorder.start();

        // UI Updates
        document.getElementById("startRecordBtn").style.display = "none";
        document.getElementById("recordingStatus").style.display = "flex";
        document.getElementById("recordingPreview").style.display = "none";

        startTimer();

    } catch (error) {
        console.error("Error accessing microphone:", error);
        alert("Could not access microphone. Please allow permissions.");
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        stopTimer();
    }
}

function discardRecording() {
    currentRecordedBlob = null;
    document.getElementById("audioPlayback").src = "";

    // UI Reset
    document.getElementById("recordingPreview").style.display = "none";
    document.getElementById("startRecordBtn").style.display = "flex";
}

function startTimer() {
    let seconds = 0;
    const timerEl = document.getElementById("recordingTimer");
    clearInterval(recordingTimerInterval);

    recordingTimerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(recordingTimerInterval);
    document.getElementById("recordingTimer").textContent = "00:00";
}

async function analyzeBirdCall() {
    const fileInput = document.getElementById("audioFile");
    const location = document.getElementById("callLocation").value;
    const habitat = document.getElementById("habitatType").value;
    const timeOfDay = document.getElementById("timeOfDay").value;
    const errorEl = document.getElementById("callError");
    const loadingEl = document.getElementById("callLoading");
    const resultsEl = document.getElementById("callResults");
    const suggestionsEl = document.getElementById("speciesSuggestions");

    // Reset UI
    errorEl.style.display = "none";
    loadingEl.style.display = "none";
    resultsEl.style.display = "none";

    // Validate inputs
    // Check for EITHER file input OR recorded audio
    if ((!fileInput.files || fileInput.files.length === 0) && !currentRecordedBlob) {
        errorEl.textContent = "Please select an audio file or record audio to analyze.";
        errorEl.style.display = "block";
        return;
    }

    if (!location) {
        errorEl.textContent = "Please select a location.";
        errorEl.style.display = "block";
        return;
    }

    if (!habitat) {
        errorEl.textContent = "Please select a habitat type.";
        errorEl.style.display = "block";
        return;
    }

    if (!timeOfDay) {
        errorEl.textContent = "Please select a time of day.";
        errorEl.style.display = "block";
        return;
    }

    // Check Gemini configuration
    const geminiConfig = getGeminiConfig();
    if (!geminiConfig) {
        errorEl.textContent = "Please configure Gemini API in Settings before using Bird Call analysis.";
        errorEl.style.display = "block";
        return;
    }

    let audioFile;
    let mimeType;

    if (currentRecordedBlob) {
        audioFile = currentRecordedBlob;
        mimeType = "audio/webm"; // MediaRecorder usually outputs webm
    } else {
        audioFile = fileInput.files[0];
        mimeType = audioFile.type;
    }

    try {
        // Show loading state
        loadingEl.style.display = "block";

        // Read file as base64
        const base64Audio = await readFileAsBase64(audioFile);

        // Call Gemini API
        const predictions = await analyseBirdCallWithGemini({
            base64Audio,
            mimeType,
            locationId: location,
            habitat,
            timeOfDay
        });

        // Hide loading
        loadingEl.style.display = "none";

        // Display results
        if (!predictions || predictions.length === 0) {
            suggestionsEl.innerHTML = `
                <div class="empty-results">
                    <p>🔍 Gemini could not confidently match this call to any species from the WingWatch list.</p>
                    <p class="small-text">Try recording a longer or clearer call, or check that the context information (location, habitat, time) is accurate.</p>
                </div>
            `;
        } else {
            let html = "";

            // Check if this is demo data
            if (predictions[0].isDemo) {
                html += `
                <div class="info-banner warning-banner" style="margin-bottom: 1rem; background: #fff3cd; border-left-color: #ffc107;">
                    <p class="info-text" style="color: #856404;">
                        <strong>⚠️ Demo Mode:</strong> Showing sample data because Gemini API could not be reached (likely CORS/Network issue).
                    </p>
                </div>`;
            }

            predictions.forEach((pred, index) => {
                const bird = BIRDS.find(b => b.id === pred.id);
                const birdName = bird ? bird.englishName : pred.englishName;

                html += `
                    <div class="species-suggestion">
                        <div class="suggestion-info">
                            <div class="suggestion-rank">${index + 1}</div>
                            <div>
                                <strong>${birdName}</strong>
                                <span class="confidence-badge confidence-${pred.confidence.toLowerCase()}">${pred.confidence}</span>
                            </div>
                        </div>
                        ${bird ? `<button class="btn-secondary btn-small" onclick="openSpeciesFromCall('${bird.id}')">Open species page</button>` : ""}
                    </div>
                `;
            });
            suggestionsEl.innerHTML = html;
        }

        resultsEl.style.display = "block";

    } catch (error) {
        loadingEl.style.display = "none";

        let errorMessage = error.message || "An unexpected error occurred.";

        if (errorMessage.includes("Could not read")) {
            errorMessage = "Could not read this audio file. Try another format such as .m4a, .wav, or .mp3.";
        } else if (errorMessage.includes("not configured")) {
            errorMessage = "Please configure Gemini API in Settings before using Bird Call analysis.";
        } else if (errorMessage.includes("Gemini error")) {
            // Keep the specific error message so the user knows what's wrong (e.g. 403 Invalid Key)
            // errorMessage = "Could not reach Gemini API. Check your base URL, API key, and internet connection.";
        }

        errorEl.textContent = errorMessage;
        errorEl.style.display = "block";
    }
}

function openSpeciesFromCall(birdId) {
    // Switch to species tab
    switchTab("species");

    // Select the bird
    setTimeout(() => {
        selectSpecies(birdId);
    }, 100);
}

// ==========================================
// SPECIES EXPLORER TAB
// ==========================================

function renderSpeciesList() {
    const searchText = document.getElementById("speciesSearch").value.toLowerCase();
    const categoryBtns = document.querySelectorAll(".category-btn");
    let selectedCategory = "";

    categoryBtns.forEach(btn => {
        if (btn.classList.contains("active")) {
            selectedCategory = btn.dataset.category;
        }
    });

    const listEl = document.getElementById("speciesList");
    listEl.innerHTML = "";

    // Group by category
    const categories = {};
    BIRDS.forEach(bird => {
        if (searchText && !bird.englishName.toLowerCase().includes(searchText)) return;
        if (selectedCategory && selectedCategory !== bird.category) return;

        if (!categories[bird.category]) {
            categories[bird.category] = [];
        }
        categories[bird.category].push(bird);
    });

    Object.keys(categories).sort().forEach(category => {
        const categorySection = document.createElement("div");
        categorySection.className = "species-category-section";

        const categoryTitle = document.createElement("h3");
        categoryTitle.className = "species-category-title";
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        categories[category].forEach(bird => {
            const item = document.createElement("div");
            item.className = "species-item";
            if (currentSpeciesId === bird.id) {
                item.classList.add("active");
            }
            item.textContent = bird.englishName;
            item.onclick = () => selectSpecies(bird.id);
            categorySection.appendChild(item);
        });

        listEl.appendChild(categorySection);
    });
}

function selectSpecies(birdId) {
    currentSpeciesId = birdId;

    // Update active state in list
    document.querySelectorAll(".species-item").forEach(item => {
        item.classList.remove("active");
    });

    const bird = BIRDS.find(b => b.id === birdId);
    if (!bird) return;

    const detailEl = document.getElementById("speciesDetail");
    detailEl.className = "species-detail";

    let seasonInfo = "";
    if (bird.season) {
        seasonInfo = `
      <div class="info-section">
        <h3>Seasonal Information</h3>
        <ul>
          <li><strong>Arrival:</strong> ${bird.season.arrival}</li>
          <li><strong>Peak Season:</strong> ${bird.season.peak}</li>
          <li><strong>Departure:</strong> ${bird.season.departure}</li>
          ${bird.season.note ? `<li><em>${bird.season.note}</em></li>` : ""}
        </ul>
      </div>
    `;
    }

    detailEl.innerHTML = `
    <div class="species-header">
      <h2>${bird.englishName}</h2>
      ${bird.hindiName ? `<p class="hindi-name">${bird.hindiName}</p>` : ""}
      <div class="species-badges">
        <span class="badge">${bird.category}</span>
        <span class="badge ${bird.isResident ? 'badge-resident' : 'badge-migrant'}">
          ${bird.isResident ? 'Resident' : 'Migratory'}
        </span>
        <span class="iucn-badge iucn-${bird.iucnStatus.toLowerCase().replace(/ /g, '-')}">${bird.iucnStatus}</span>
      </div>
    </div>
    
    ${seasonInfo}
    
    <div class="info-section">
      <h3>Description</h3>
      <p class="placeholder-text">
        ${bird.englishName} is a ${bird.isResident ? 'resident' : 'migratory'} bird species found in Delhi NCR. 
        This species belongs to the ${bird.category} category and is classified as ${bird.iucnStatus} by the IUCN.
        ${!bird.isResident && bird.season ? ` Typically arrives in ${bird.season.arrival} with peak season in ${bird.season.peak}.` : ''}
      </p>
    </div>
    
    <div class="info-section" id="conservationSection">
      <h3>Conservation Information</h3>
      <div id="conservationContent">
        <button class="btn-primary" onclick="fetchConservationData('${bird.id}')">Fetch from Perplexity</button>
      </div>
    </div>
  `;

    // Update active item in list
    renderSpeciesList();
}

async function fetchConservationData(birdId) {
    const bird = BIRDS.find(b => b.id === birdId);
    if (!bird) return;

    const contentEl = document.getElementById("conservationContent");
    contentEl.innerHTML = '<p class="loading-text">Fetching conservation data...</p>';

    try {
        // Step 1: Get raw data from Perplexity
        const prompt = `Provide detailed conservation information for ${bird.englishName} in India, specifically:
- Current population status and trends
- Distribution and key wintering habitats in India (especially Delhi NCR)
- Major threats and conservation concerns
- Any recent sightings or news from 2024-2025`;

        const perplexityResult = await callPerplexity(prompt);

        // Step 2: Format with Gemini
        contentEl.innerHTML = '<p class="loading-text">Formatting with Gemini...</p>';

        try {
            const formattingPrompt = `You are a wildlife content editor. Format the following raw bird conservation data into clean, readable HTML.
            
            Rules:
            - Use <h4> for section headers (Population, Habitat, Threats, etc.)
            - Use <ul> and <li> for lists
            - Use <strong> for key terms
            - Keep it concise and easy to read
            - Do NOT include markdown code blocks, just return the raw HTML content
            
            Raw Data:
            ${perplexityResult}`;

            const formattedResult = await callGemini(formattingPrompt);

            // Clean up any markdown code blocks if Gemini adds them
            const cleanHtml = formattedResult.replace(/```html/g, '').replace(/```/g, '').trim();
            contentEl.innerHTML = `<div class="conservation-data">${cleanHtml}</div>`;

        } catch (geminiError) {
            console.warn("Gemini formatting failed, showing raw Perplexity data:", geminiError);
            // Fallback to raw data if Gemini fails
            contentEl.innerHTML = `<div class="conservation-data">${perplexityResult.replace(/\n/g, '<br>')}</div>`;
        }

    } catch (error) {
        // If Gemini fails but we have Perplexity result (handled inside try block usually, but here global catch)
        // We'll just show the error for now, or we could try to show raw result if we saved it.
        // For simplicity, standard error handling:
        contentEl.innerHTML = `
      <p class="error-text">${error.message}</p>
      <button class="btn-primary" onclick="fetchConservationData('${bird.id}')">Retry</button>
    `;
    }
}

// ==========================================
// SETTINGS TAB
// ==========================================

function loadSettingsForm() {
    const config = getApiConfig();

    document.getElementById("perplexityKey").value = config.perplexity.apiKey || "";
    document.getElementById("geminiKey").value = config.gemini.apiKey || "";
    document.getElementById("persistKeys").checked = config.persistKeys || false;
}

function saveSettings() {
    apiConfig.perplexity.apiKey = document.getElementById("perplexityKey").value.trim();
    apiConfig.gemini.apiKey = document.getElementById("geminiKey").value.trim();
    apiConfig.persistKeys = document.getElementById("persistKeys").checked;

    saveApiConfig();

    alert("Configuration saved successfully!");
}

function resetApiKeys() {
    showConfirmation(
        "Reset API Keys",
        "This will clear all stored API keys from your browser's localStorage. Are you sure?",
        () => {
            apiConfig.perplexity.apiKey = "";
            apiConfig.gemini.apiKey = "";
            apiConfig.persistKeys = false;

            saveApiConfig();
            loadSettingsForm();

            alert("API keys have been reset.");
        }
    );
}

function resetSeasonData() {
    showConfirmation(
        "Reset Season Data",
        "⚠️ WARNING: This will clear all sighting reports, status updates, and arrival tracking data from your browser. This action cannot be undone. Are you sure?",
        () => {
            localStorage.removeItem("wingwatch_season_state_v1");
            initializeSeasonState();
            renderDashboard();

            alert("Season data has been reset.");
        }
    );
}

// ==========================================
// NAVIGATION & UI HELPERS
// ==========================================

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll(".tab-button").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.tab === tabName) {
            btn.classList.add("active");
        }
    });

    // Update content sections
    document.querySelectorAll(".tab-content").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(`${tabName}View`).classList.add("active");

    // Refresh content if needed
    if (tabName === "species") {
        renderSpeciesList();
    } else if (tabName === "settings") {
        loadSettingsForm();
    }
}

function openModal(modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function showConfirmation(title, message, onConfirm) {
    const modal = document.getElementById("confirmModal");
    document.getElementById("confirmTitle").textContent = title;
    document.getElementById("confirmMessage").textContent = message;

    const confirmBtn = document.getElementById("confirmOkBtn");
    const cancelBtn = document.getElementById("confirmCancelBtn");

    const handleConfirm = () => {
        onConfirm();
        closeModal(modal);
        cleanup();
    };

    const handleCancel = () => {
        closeModal(modal);
        cleanup();
    };

    const cleanup = () => {
        confirmBtn.removeEventListener("click", handleConfirm);
        cancelBtn.removeEventListener("click", handleCancel);
    };

    confirmBtn.addEventListener("click", handleConfirm);
    cancelBtn.addEventListener("click", handleCancel);

    openModal(modal);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

    return date.toLocaleDateString();
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Initialize data
    initializeSeasonState();
    loadApiConfig();

    // Populate location dropdowns
    const locationSelects = [
        document.getElementById("locationFilter"),
        document.getElementById("callLocation")
    ];

    locationSelects.forEach(select => {
        LOCATIONS.forEach(location => {
            const option = document.createElement("option");
            option.value = location.id;
            option.textContent = location.name;
            select.appendChild(option);
        });
    });

    // Tab navigation
    document.querySelectorAll(".tab-button").forEach(btn => {
        btn.addEventListener("click", () => {
            switchTab(btn.dataset.tab);
        });
    });

    // Dashboard filters
    document.getElementById("locationFilter").addEventListener("change", renderDashboard);
    document.getElementById("birdSearch").addEventListener("input", renderDashboard);
    document.getElementById("categoryFilter").addEventListener("change", renderDashboard);
    document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb => {
        cb.addEventListener("change", renderDashboard);
    });

    // Report modal
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-report")) {
            e.stopPropagation();
            const birdId = e.target.dataset.bird;
            const locationId = e.target.dataset.location;
            openReportModal(birdId, locationId);
        }
    });

    document.getElementById("saveReportBtn").addEventListener("click", saveReport);
    document.getElementById("cancelReportBtn").addEventListener("click", () => {
        closeModal(document.getElementById("reportModal"));
    });

    // Bird Calls
    document.getElementById("analyzeCallBtn").addEventListener("click", analyzeBirdCall);

    // Species Explorer
    document.getElementById("speciesSearch").addEventListener("input", renderSpeciesList);
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderSpeciesList();
        });
    });

    // Settings
    document.getElementById("saveConfigBtn").addEventListener("click", saveSettings);
    document.getElementById("resetKeysBtn").addEventListener("click", resetApiKeys);
    document.getElementById("resetDataBtn").addEventListener("click", resetSeasonData);

    // Modal close buttons
    document.querySelectorAll(".modal-close").forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            closeModal(modal);
        });
    });

    // Close modal on background click
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Initial render
    renderDashboard();
    renderSpeciesList();
});
