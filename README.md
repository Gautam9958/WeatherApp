# WeatherAI Pro

A production-style React + TypeScript weather dashboard with Open-Meteo weather data and a local Ollama AI assistant.

## Features
- Current weather, humidity, wind and precipitation
- City search with Open-Meteo geocoding
- Browser geolocation
- 24-hour forecast
- 7-day forecast
- Celsius/Fahrenheit toggle
- Favorite cities
- Ollama-powered weather Q&A using the actual fetched forecast as context
- Responsive dark UI
- Clean service/store/component architecture

## Requirements
- Node.js 18+
- Ollama installed locally for AI features

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```

## Ollama setup
Install Ollama from https://ollama.com/ then run:
```bash
ollama pull llama3.2
ollama serve
```
The app expects Ollama at `http://localhost:11434` by default.

## Weather API
Open-Meteo is used. No API key is required for its free non-commercial API tier.

## Build
```bash
npm run build
```

## GitHub
Do not commit `.env`. Commit `.env.example` instead.

## Architecture
`components/` contains UI, `services/` contains external APIs, `hooks/` contains data hooks, `store/` contains global state, `types/` contains TypeScript contracts and `utils/` contains weather-code/formatting logic.
