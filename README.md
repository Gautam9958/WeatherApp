# WeatherAI Pro 🌦️

WeatherAI Pro is a React + TypeScript weather application with a local AI assistant powered by Ollama.

It uses **Open-Meteo** for weather and location data, so no weather API key is required. Ollama runs locally and uses the current weather data to answer weather-related questions.

## Features

* Search weather by city
* Detect current location using browser geolocation
* Current weather conditions
* Hourly forecast
* 7-day forecast
* Temperature in °C / °F
* Humidity, wind and precipitation information
* Rain probability
* UV index
* Sunrise and sunset
* Favorite locations
* Local AI weather assistant
* Responsive UI
* TypeScript
* Zustand state management

## Tech Stack

**Frontend**

* React
* TypeScript
* Vite
* Zustand
* CSS
* Lucide React

**APIs**

* Open-Meteo Weather API
* Open-Meteo Geocoding API

**AI**

* Ollama
* Llama 3.2

---

## Project Structure

```text
weather-ai/
├── src/
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
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Getting Started

## Requirements

Make sure the following are installed:

* Node.js 18+
* npm
* Git
* Ollama

Check your versions:

```bash
node -v
npm -v
git --version
ollama --version
```

---

## 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd weather-ai
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_OLLAMA_URL=http://localhost:11434
VITE_OLLAMA_MODEL=llama3.2
```

You can also create it from the example file:

```bash
cp .env.example .env
```

### Environment Variables

| Variable            | Description                           |
| ------------------- | ------------------------------------- |
| `VITE_OLLAMA_URL`   | Local Ollama server URL               |
| `VITE_OLLAMA_MODEL` | Ollama model used by the AI assistant |

Open-Meteo does **not** require an API key, so there is no weather API key in the `.env` file.

---

# Open-Meteo API

Weather data comes from Open-Meteo.

Official documentation:

https://open-meteo.com/en/docs

The application uses:

```text
https://api.open-meteo.com/v1/forecast
```

for weather information.

For city search/geocoding it uses:

```text
https://geocoding-api.open-meteo.com/v1/search
```

Both APIs are used directly from the frontend and do not require an API key for this project.

---

# Ollama Setup

The AI assistant uses Ollama to run the language model locally.

Install Ollama from:

https://ollama.com/

After installation, download the model:

```bash
ollama pull llama3.2
```

Check installed models:

```bash
ollama list
```

Start the Ollama server:

```bash
ollama serve
```

Ollama will normally be available at:

```text
http://localhost:11434
```

The application sends AI requests to:

```text
http://localhost:11434/api/chat
```

---

# Running the Application

Start the Vite development server:

```bash
npm run dev
```

Or:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:5173
```

You need two processes running during development:

### Terminal 1

```bash
ollama serve
```

### Terminal 2

```bash
npm run dev
```

---

# How It Works

The application has three main parts:

```text
React Application
       │
       ├── Open-Meteo
       │      ├── Geocoding
       │      └── Weather Forecast
       │
       └── Ollama
              └── Llama 3.2
```

### City Search

When a user searches for a city:

```text
City Name
   ↓
Open-Meteo Geocoding API
   ↓
Latitude + Longitude
   ↓
Open-Meteo Forecast API
   ↓
Weather Data
```

For example:

```text
Delhi
   ↓
28.6139, 77.2090
   ↓
Weather forecast
```

The weather data is then stored in the Zustand store and consumed by the UI components.

---

# AI Weather Assistant

The AI assistant does not fetch weather information by itself.

The application first gets weather data from Open-Meteo.

That data is then provided to Ollama together with the user's question.

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

Example:

```text
User:
"Will it rain today?"

Weather data:
Temperature: 31°C
Humidity: 62%
Rain probability: 40%

        ↓

Ollama / Llama 3.2

        ↓

AI response
```

This keeps the AI response based on the weather information currently loaded by the application.

---

# State Management

Zustand is used for application-level state.

The main store contains:

* Current location
* Weather data
* Temperature unit
* Favorite locations

The store is located at:

```text
src/store/weatherStore.ts
```

This avoids passing weather data through multiple levels of React components.

---

# Services

API-related logic is kept outside the UI components.

### `weatherApi.ts`

Handles:

* City search
* Geocoding
* Weather requests

### `ollamaApi.ts`

Handles:

* Ollama requests
* AI prompt/context
* AI response

This keeps API logic separate from presentation logic.

---

# Weather Codes

Open-Meteo returns WMO weather codes such as:

```text
0       Clear sky
1-3     Cloudy
45-48   Fog
51-57   Drizzle
61-67   Rain
71-77   Snow
80-82   Rain showers
95-99   Thunderstorm
```

The application converts these codes into readable weather conditions and icons.

The mapping is handled in:

```text
src/utils/weatherCodes.ts
```

---

# Browser Location

The application can use the browser's Geolocation API.

When the user allows location access, the browser provides:

```text
Latitude
Longitude
```

Those coordinates are then passed to the weather API.

If location permission is denied, the user can continue using city search.

---

# Available Scripts

### Development

```bash
npm run dev
```

### Start

```bash
npm start
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm test
```

### Run Tests Once

```bash
npm run test:run
```

---

# Production Build

Create a production build:

```bash
npm run build
```

The generated files will be placed inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

# Environment & Git

The actual `.env` file should not be committed.

`.gitignore` should contain:

```gitignore
node_modules/
dist/

.env
.env.local
.env.*.local

*.log
.DS_Store
```

Commit:

```text
.env.example
```

Do not commit:

```text
.env
```

---

# Troubleshooting

## Ollama is not responding

Check whether Ollama is running:

```bash
ollama list
```

Start the server:

```bash
ollama serve
```

If the model is missing:

```bash
ollama pull llama3.2
```

---

## `npm install` fails

Remove the existing installation:

```bash
rm -rf node_modules package-lock.json
```

Then run:

```bash
npm cache verify
npm install
```

If npm reports a cache-related error:

```bash
npm cache clean --force
npm install
```

---

## Weather is not loading

Check:

1. Internet connection
2. Browser console
3. Network requests
4. Open-Meteo API response
5. Latitude and longitude returned by geocoding

No weather API key is required.

---

# API References

### Open-Meteo

https://open-meteo.com/

### Open-Meteo Forecast API

https://open-meteo.com/en/docs

### Open-Meteo Geocoding API

https://open-meteo.com/en/docs/geocoding-api

### Ollama

https://ollama.com/

### Ollama API Documentation

https://docs.ollama.com/

---

# Future Improvements

Possible improvements for future versions:

* Persistent favorites
* Weather charts
* Air quality
* Weather alerts
* Weather radar
* PWA/offline support
* API caching
* Request cancellation
* Automated testing
* CI/CD
* Node.js backend
* Authentication
* Streaming Ollama responses
* Cloud-hosted AI backend

---

# Author

**Gautam Kumar**

React.js / MERN / Full-Stack Developer

GitHub:
https://github.com/Gautam9958

---

## License

This project is intended for learning, development, and portfolio use.
