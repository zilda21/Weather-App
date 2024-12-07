const apiKey = "04c1847b76d405b2bcbd505020c7afbb";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-form input");
const searchBtn = document.querySelector(".search-form button");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found");
            return;
        }

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
    } catch (error) {
        alert("Error fetching weather data");
        console.error(error);
    }
}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const city = searchBox.value.trim();
    if (city) checkWeather(city);
});
