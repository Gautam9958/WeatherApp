# 🌦️ WeatherAI Pro

A modern, professional weather application built with **React, TypeScript, Vite, Zustand, Open-Meteo, and Ollama AI**.

WeatherAI Pro provides real-time weather information, hourly and daily forecasts, location search, favorites, temperature unit switching, browser geolocation, and an AI-powered weather assistant running locally through Ollama.

The project is designed as a **production-style portfolio project**, with a clean architecture that separates UI components, API services, state management, hooks, types, and utilities.

---

## 📸 Features

### 🌤️ Weather Features

* Current weather information
* Temperature
* Feels-like temperature
* Humidity
* Wind speed
* Wind direction
* Precipitation
* Weather condition
* Day/night detection
* Hourly weather forecast
* 7-day weather forecast
* Rain probability
* UV index
* Sunrise and sunset
* Automatic timezone handling

### 🔎 Location Search

Search for cities around the world.

Example:

```text
Delhi
Mumbai
London
New York
Tokyo
Bangalore
Paris
```

The application uses the Open-Meteo Geocoding API to convert a city name into latitude and longitude.

---

## 🤖 AI Weather Assistant

WeatherAI Pro includes a local AI assistant powered by **Ollama**.

You can ask questions such as:

```text
Will it rain today?

Is it good for a bike ride?

Should I carry an umbrella?

What will the weather be tomorrow?

Compare today's weather with tomorrow.

Explain today's weather.
```

The AI receives the weather data currently loaded in the application and generates an answer based on that data.

### Why Ollama?

Ollama allows the AI model to run locally on your computer.

This means:

* No OpenAI API key is required
* No paid AI API is required
* Weather data stays within the application flow
* AI processing can happen locally
* You can change the AI model later

---

# 🛠️ Technology Stack

## Frontend

* React
* TypeScript
* Vite
* CSS
* Zustand
* Lucide React

## Weather API

* Open-Meteo Forecast API
* Open-Meteo Geocoding API

## AI

* Ollama
* Llama 3.2

## Development

* npm
* Git
* GitHub

---

# 🏗️ Application Architecture

The project follows a layered architecture.

```text
User
 │
 ▼
React UI
 │
 ├── Search
 ├── Weather Card
 ├── Hourly Forecast
 ├── Daily Forecast
 ├── Favorites
 └── AI Assistant
 │
 ▼
Hooks / Zustand Store
 │
 ├── Weather State
 ├── Location State
 └── Unit State
 │
 ▼
Service Layer
 │
 ├── weatherApi.ts
 │
 ├── geocoding API
 │
 └── ollamaApi.ts
 │
 ├───────────────┐
 ▼               ▼
Open-Meteo      Ollama
Weather API     Local AI
```

This separation makes the project easier to:

* Maintain
* Test
* Debug
* Extend
* Explain during interviews

---

# 📁 Project Structure

```text
weather-ai/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Search.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── Forecast.tsx
│   │   └── WeatherAI.tsx
│   │
│   ├── hooks/
│   │   └── useWeather.ts
│   │
│   ├── services/
│   │   ├── weatherApi.ts
│   │   └── ollamaApi.ts
│   │
│   ├── store/
│   │   └── weatherStore.ts
│   │
│   ├── types/
│   │   └── weather.ts
│   │
│   ├── utils/
│   │   └── weatherCodes.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
└── README.md
```

---

# 🌐 APIs Used

The project uses two Open-Meteo APIs and one local Ollama API.

---

## 1. Open-Meteo Weather API

Open-Meteo provides the actual weather forecast.

Official website:

https://open-meteo.com/

Forecast API:

```text
https://api.open-meteo.com/v1/forecast
```

### API Key

**No API key is required for this project.**

That is one of the reasons Open-Meteo is useful for this portfolio project.

---

## 2. Open-Meteo Geocoding API

The geocoding API converts a city name into coordinates.

For example:

```text
Delhi
```

can return:

```text
Latitude: 28.6139
Longitude: 77.2090
Country: India
```

API:

```text
https://geocoding-api.open-meteo.com/v1/search
```

Again:

**No API key is required.**

---

# 📡 How Weather Data Works

When the user searches for a city:

```text
User enters "Delhi"
        ↓
Search.tsx
        ↓
searchLocations()
        ↓
Open-Meteo Geocoding API
        ↓
Latitude + Longitude
        ↓
getWeather(latitude, longitude)
        ↓
Open-Meteo Forecast API
        ↓
Weather JSON
        ↓
Zustand Store
        ↓
React Components
        ↓
Weather Dashboard
```

---

# 🔢 Why Latitude and Longitude?

Weather APIs generally use geographical coordinates instead of city names for precise weather information.

For example:

```text
Delhi
```

is converted into:

```text
latitude  = 28.6139
longitude = 77.2090
```

Then the application sends those coordinates to Open-Meteo.

Example:

```text
https://api.open-meteo.com/v1/forecast
?latitude=28.6139
&longitude=77.2090
&current=temperature_2m
```

---

# 🤖 Ollama Setup

Ollama is used to run the AI model locally.

Official Ollama website:

https://ollama.com/

Download and install Ollama for your operating system.

After installation, verify it:

```bash
ollama --version
```

---

# 🧠 Install the AI Model

This project uses:

```text
llama3.2
```

Download it using:

```bash
ollama pull llama3.2
```

Verify:

```bash
ollama list
```

You should see something similar to:

```text
NAME
llama3.2
```

---

# ▶️ Start Ollama

Start the Ollama server:

```bash
ollama serve
```

Ollama normally runs at:

```text
http://localhost:11434
```

The application communicates with:

```text
http://localhost:11434/api/chat
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_OLLAMA_URL=http://localhost:11434
VITE_OLLAMA_MODEL=llama3.2
```

---

# ⚠️ Important: Do NOT Commit `.env`

Your `.env` file should be ignored by Git.

Your `.gitignore` should contain:

```gitignore
node_modules/
dist/

.env
.env.local
.env.*.local

.DS_Store
*.log

.vscode/
.idea/
```

Commit:

```text
.env.example
```

instead of:

```text
.env
```

---

# 📄 `.env.example`

The repository contains:

```env
VITE_OLLAMA_URL=http://localhost:11434
VITE_OLLAMA_MODEL=llama3.2
```

A new developer can copy it:

```bash
cp .env.example .env
```

Then modify the values if necessary.

---

# 💻 System Requirements

Recommended:

```text
Node.js 18+
npm 9+
Git
Ollama
```

Check Node:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Check Git:

```bash
git --version
```

Check Ollama:

```bash
ollama --version
```

---

# 🚀 Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Enter the project:

```bash
cd weather-ai
```

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
cp .env.example .env
```

---

# ▶️ Run the Application

Start the development server:

```bash
npm run dev
```

or:

```bash
npm start
```

Vite will display something similar to:

```text
Local:
http://localhost:5173/
```

Open the URL in your browser.

---

# 🤖 Run WeatherAI

You need Ollama running separately.

### Terminal 1

Start Ollama:

```bash
ollama serve
```

### Terminal 2

Start React:

```bash
npm run dev
```

Then open the application.

The architecture is:

```text
Browser
   │
   ├──────────────► Open-Meteo
   │                 Weather Data
   │
   └──────────────► Ollama
                     │
                     └── llama3.2
```

---

# 🔄 Complete Application Flow

## Step 1 — Application Starts

React/Vite starts the application.

```text
main.tsx
   ↓
App.tsx
```

---

## Step 2 — Default Location

The application initially uses Delhi:

```text
Delhi
Latitude: 28.6139
Longitude: 77.2090
```

---

## Step 3 — Weather Request

The application calls:

```text
getWeather(latitude, longitude)
```

from:

```text
src/services/weatherApi.ts
```

---

## Step 4 — Open-Meteo Response

Open-Meteo returns:

```text
Current Weather
Hourly Forecast
Daily Forecast
Sunrise
Sunset
UV Index
Rain Probability
Wind
Humidity
Temperature
```

---

## Step 5 — Store Weather

The weather data is stored using Zustand.

```text
weatherStore.ts
```

This allows multiple components to access the same weather data.

---

# 🧠 Why Zustand?

Instead of passing weather data through many levels of React props:

```text
App
 ↓
Component
 ↓
Component
 ↓
Component
```

we use a centralized store:

```text
             Zustand
                │
     ┌──────────┼──────────┐
     ↓          ↓          ↓
 Weather     Location     Unit
     │
     ├── WeatherCard
     ├── Forecast
     └── WeatherAI
```

This makes state management cleaner.

---

# 🔍 Search Logic

The search component uses a small debounce delay.

Example:

```text
User types:

D
De
Del
Delh
Delhi
```

Instead of sending an API request for every character, the application waits briefly before searching.

This reduces unnecessary API requests.

Flow:

```text
User Input
    ↓
Debounce
    ↓
Geocoding API
    ↓
Search Results
    ↓
User selects city
    ↓
Coordinates
    ↓
Weather API
```

---

# 🌡️ Temperature Conversion

The application supports:

```text
°C
°F
```

The weather API provides Celsius values.

For Fahrenheit:

```text
°F = (°C × 9/5) + 32
```

The conversion is handled on the client side.

This means we don't need another API request when the user switches units.

---

# ⭐ Favorites

Users can add locations to favorites.

Example:

```text
Delhi ⭐
Mumbai ⭐
London ⭐
Tokyo ⭐
```

The favorite location is stored in the application's state.

Selecting a favorite location loads its weather data.

---

# 📊 Weather Information

The application displays:

### Current

```text
Temperature
Feels Like
Humidity
Wind
Precipitation
Weather Condition
Day/Night
```

### Hourly

```text
Time
Temperature
Rain Probability
Humidity
Wind
Weather Condition
```

### Daily

```text
Date
Maximum Temperature
Minimum Temperature
Rain Probability
UV Index
Sunrise
Sunset
Weather Condition
```

---

# 🌦️ Weather Codes

Open-Meteo uses WMO weather codes.

For example:

```text
0     Clear sky
1-3   Mainly clear / partly cloudy / overcast
45-48 Fog
51-57 Drizzle
61-67 Rain
71-77 Snow
80-82 Rain showers
95    Thunderstorm
96-99 Thunderstorm with hail
```

The application converts these numeric codes into human-readable conditions.

This logic is located in:

```text
src/utils/weatherCodes.ts
```

---

# 🤖 AI Weather Logic

The AI assistant does not independently retrieve weather from the internet.

Instead:

```text
Open-Meteo
    ↓
Weather Data
    ↓
React Application
    ↓
Ollama
    ↓
Llama 3.2
    ↓
AI Response
```

The application sends relevant weather information to Ollama.

Example context:

```json
{
  "current": {
    "temperature_2m": 31,
    "relative_humidity_2m": 62,
    "wind_speed_10m": 12
  },
  "daily": {
    "temperature_2m_max": [33],
    "temperature_2m_min": [25],
    "precipitation_probability_max": [40]
  }
}
```

The AI then answers the user's question using this context.

---

# 🧩 Ollama API

The frontend sends a request to:

```text
http://localhost:11434/api/chat
```

Example request structure:

```json
{
  "model": "llama3.2",
  "stream": false,
  "messages": [
    {
      "role": "system",
      "content": "You are Weather AI..."
    },
    {
      "role": "user",
      "content": "Will it rain today?"
    }
  ]
}
```

Ollama returns:

```json
{
  "message": {
    "content": "There is a 40% chance of rain today..."
  }
}
```

The React application displays that response.

---

# 🔒 AI Data Safety

The project is designed so that the AI model runs locally through Ollama.

No external AI API key is required.

The AI endpoint is:

```text
localhost
```

The weather data itself comes from Open-Meteo.

---

# 📂 Important Files

## `src/App.tsx`

Main application component.

Responsible for composing:

* Header
* Search
* Weather card
* Forecast
* AI assistant
* Favorites
* Location controls

---

## `src/services/weatherApi.ts`

Responsible for communicating with Open-Meteo.

Contains:

```text
searchLocations()
getWeather()
```

---

## `src/services/ollamaApi.ts`

Responsible for communicating with Ollama.

Contains:

```text
askOllama()
```

---

## `src/store/weatherStore.ts`

Contains global application state.

```text
Location
Weather
Temperature Unit
Favorites
```

---

## `src/hooks/useWeather.ts`

Responsible for loading weather data when the selected location changes.

Flow:

```text
Location changes
      ↓
useWeather()
      ↓
getWeather()
      ↓
Open-Meteo
      ↓
setWeather()
```

---

## `src/types/weather.ts`

Contains TypeScript interfaces.

This provides type safety throughout the application.

---

## `src/utils/weatherCodes.ts`

Converts WMO weather codes into:

```text
Label
Icon
Description
```

---

# 🧪 Available Scripts

Start development server:

```bash
npm run dev
```

Start application:

```bash
npm start
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run tests:

```bash
npm test
```

Run tests once:

```bash
npm run test:run
```

---

# 🏭 Production Build

Create a production build:

```bash
npm run build
```

Vite creates:

```text
dist/
```

You can preview it locally:

```bash
npm run preview
```

---

# 🚀 Deployment

The React frontend can be deployed to platforms such as:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages

However, there is an important point with the AI functionality.

The browser needs access to:

```text
Ollama
```

If Ollama is running only on your personal computer:

```text
http://localhost:11434
```

then the deployed website cannot use your computer's Ollama server for other users.

For a public production deployment, the AI architecture should be changed to:

```text
Browser
   ↓
Your Backend
   ↓
Ollama Server
```

instead of:

```text
Browser
   ↓
localhost:11434
```

---

# 🏗️ Future Production Architecture

For a fully deployed production version:

```text
                    ┌──────────────┐
                    │   Browser    │
                    │ React + Vite │
                    └──────┬───────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       Open-Meteo API             Backend API
                                      │
                                      ▼
                                   Ollama
                                      │
                                      ▼
                                  AI Model
```

This would allow multiple users to use the application.

A backend could be built using:

```text
Node.js
Express.js
```

or:

```text
Python
FastAPI
```

---

# 🐛 Troubleshooting

## `npm install` fails

First check:

```bash
node -v
npm -v
```

Remove installed dependencies:

```bash
rm -rf node_modules package-lock.json
```

Then:

```bash
npm cache verify
npm install
```

If the npm cache is corrupted:

```bash
npm cache clean --force
```

Then:

```bash
npm install
```

---

# ❌ `npm start` Missing Script

If you see:

```text
Missing script: "start"
```

check:

```bash
npm run
```

The project should contain:

```json
"scripts": {
  "dev": "vite",
  "start": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
```

You can also use:

```bash
npm run dev
```

---

# ❌ Ollama Connection Error

If the application shows:

```text
Ollama is not reachable
```

check:

```bash
ollama list
```

Make sure the model exists:

```text
llama3.2
```

If it doesn't:

```bash
ollama pull llama3.2
```

Start Ollama:

```bash
ollama serve
```

Then verify the server is running at:

```text
http://localhost:11434
```

---

# ❌ Weather Data Not Loading

Check:

1. Internet connection
2. Open-Meteo availability
3. Browser console
4. Network tab
5. Latitude/longitude
6. API response

Open-Meteo does not require an API key.

---

# 🌍 Browser Location

The application can request the user's browser location.

The browser will display a permission request:

```text
Allow this site to access your location?
```

If the user denies permission, the application can continue using the selected/default location.

---

# 🔐 Security

Do not commit:

```text
.env
```

to GitHub.

Do commit:

```text
.env.example
```

Never put private API keys or secrets directly into React source code.

Remember that Vite environment variables beginning with:

```text
VITE_
```

are exposed to the browser.

Therefore, **real private secrets should never be stored in `VITE_*` variables**.

---

# 🔄 Complete Data Flow

The complete application flow is:

```text
                    USER
                      │
                      ▼
                Search City
                      │
                      ▼
            Geocoding API
                      │
                      ▼
             Latitude/Longitude
                      │
                      ▼
             Weather API
                      │
                      ▼
              Weather JSON
                      │
                      ▼
              Zustand Store
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
     Weather Card  Forecast     AI Chat
                                  │
                                  ▼
                                Ollama
                                  │
                                  ▼
                              Llama 3.2
                                  │
                                  ▼
                            AI Response
```

---

# 💡 Example User Journey

A user opens the application.

### 1. Default Weather

The application loads:

```text
Delhi
```

and displays the current weather.

### 2. Search

The user searches:

```text
Mumbai
```

### 3. Geocoding

Open-Meteo returns:

```text
Mumbai
Latitude
Longitude
Country
```

### 4. Weather Request

The coordinates are sent to the forecast API.

### 5. Dashboard

The application displays:

```text
Current Weather
Hourly Forecast
7-Day Forecast
```

### 6. AI

The user asks:

```text
Is it a good day for a bike ride?
```

The application sends the weather context to Ollama.

### 7. AI Response

Llama 3.2 analyzes the supplied weather information and generates a response.

---

# 🎯 Why This Project Is Portfolio Worthy

This project demonstrates more than basic React CRUD functionality.

It demonstrates:

```text
React
TypeScript
API Integration
REST APIs
Async Programming
State Management
Custom Hooks
Debouncing
Geolocation
Error Handling
Environment Variables
Local AI
Ollama
JSON Data Processing
Responsive UI
Component Architecture
Git/GitHub
Production Build
```

It can also be discussed during interviews as an example of integrating a **traditional external API with a local LLM workflow**.

---

# 🧠 Interview Explanation

If an interviewer asks:

### "Explain your WeatherAI project."

You can explain it like this:

> I built a weather application using React, TypeScript and Vite. I used Open-Meteo for weather and geocoding data, so the application doesn't require a weather API key. I separated the API layer from the UI using service modules and used Zustand for global state management.
>
> I also integrated Ollama with Llama 3.2 to create a local AI weather assistant. Instead of allowing the AI to independently fetch weather data, I pass the currently loaded weather context to the model so its response is based on the application's actual weather data.
>
> I also implemented location search, debouncing, browser geolocation, hourly and daily forecasts, favorites, temperature unit conversion, error handling, and responsive UI.

---

# 🔮 Future Improvements

Possible future improvements include:

* Persistent favorites using localStorage
* Weather charts
* Weather radar
* Air quality information
* Pollen information
* Severe weather alerts
* Sunrise/sunset visualization
* Better mobile experience
* PWA support
* Offline caching
* Service workers
* API request cancellation
* Request caching
* Retry mechanism
* Error boundaries
* Automated tests
* CI/CD
* Docker
* Node.js backend
* Authentication
* User profiles
* Cloud-hosted Ollama
* Streaming AI responses
* AI-generated weather summaries
* Voice-based weather assistant

---

# 📜 API Documentation

## Open-Meteo

Official documentation:

https://open-meteo.com/en/docs

Geocoding documentation:

https://open-meteo.com/en/docs/geocoding-api

## Ollama

Official documentation:

https://docs.ollama.com/

Ollama API:

```text
http://localhost:11434/api/chat
```

---

# 📄 License

This project is intended for learning, portfolio, and development purposes.

Check the respective API/model terms before using the project commercially.

---

# 👨‍💻 Author

**Gautam Kumar**

React.js / MERN / Full-Stack Developer

GitHub:

https://github.com/Gautam9958

---

## ⭐ If You Like This Project

Give the repository a ⭐ on GitHub and feel free to improve the project.

```text
React + TypeScript + Open-Meteo + Ollama
                    ↓
             WeatherAI Pro
```
