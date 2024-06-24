# Weather App
This project is a simple weather application built using ReactJS. It allows users to input the name of a city or state and fetches the current temperature and weather conditions using the OpenWeatherMap API.

## Getting Started
  Ensure you have the following installed on your development machine:

  Node.js
  npm (Node Package Manager)

### Installation

1. Clone the repository:
        `git clone https://github.com/your-username/weather-app.git`
    
2. Navigate into the project directory:
        `cd weather-app`

3. Install the required dependencies:
        `npm install`

## Available Scripts

In the project directory, you can run:
1. Start the development server:
        `npm start`
 


### `Project Structure`

weather-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── ...
├── src/
│   ├── App.js
│   ├── index.js
│   ├── weather.css
├── .gitignore
├── package.json
├── README.md
└── ...


### `API Integration`

This application uses the OpenWeatherMap API to fetch weather data.

1. Example API call:
    `https://api.openweathermap.org/data/2.5/weather?q=${message}&appid=91f0cf04214630a40bcbd5bd14354f15&units=metric`
    
    Make sure to replace ${message} with the actual city or state name.


2. Example Code Snippet
    Here is a brief example of how the API is called in the application:

    `const fetchWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91f0cf04214630a40bcbd5bd14354f15&units=metric`);
    const data = await response.json();
    return data;
    }`    



### `Screenshots`
    To add screenshots, follow the structure below:

    ![Screenshot 1](!![WeatherApp](https://github.com/Gautam9958/WeatherApp/assets/77527062/dbb11be8-990a-4e74-b871-52632a4f4bc1))


