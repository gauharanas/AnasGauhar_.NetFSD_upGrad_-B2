const API_KEY = "YOUR_API_KEY";
const CITY = "Delhi";

// 🔹 Promise Version
const fetchWeatherWithPromise = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => formatWeather(data))
    .catch((error) => console.error("Error:", error.message));
};

// 🔹 Async/Await Version
const fetchWeatherAsync = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    console.log(formatWeather(data));
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

// Format weather report
const formatWeather = (data) => `
  ---- Weather Report ----
  City: ${data.name}
  Temperature: ${data.main.temp}°C
  Condition: ${data.weather[0].description}
  Humidity: ${data.main.humidity}%
`;

// Call async version
fetchWeatherAsync();
