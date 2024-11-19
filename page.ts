const cityInput = document.getElementById('cityInput')as HTMLElement;
const getWeatherBtn = document.getElementById('getWeatherBtn')as HTMLElement;
const weatherInfo = document.getElementById('weather-info')as HTMLElement;

        getWeatherBtn.addEventListener('click', () => {
            const cityName = cityInput;
            if (cityName) {
                // Replace with your actual API key and endpoint
                const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.cod === 200) {
                            const temperature = data.main.temp;
                            const description = data.weather[0].description;
                            const feelsLike = data.main.feels_like;
                            const humidity = data.main.humidity;
                            const windSpeed = data.wind.speed;

                            weatherInfo.innerHTML = `
                                <p><strong>Temperature:</strong> ${temperature}°C</p>
                                <p><strong>Feels Like:</strong> ${feelsLike}°C</p>
                                <p><strong>Description:</strong> ${description}</p>
                                <p><strong>Humidity:</strong> ${humidity}%</p>
                                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                            `;
                        } else {
                            weatherInfo.innerHTML = `<p>City not found or an error occurred.</p>`;
                        }
                    })
                    .catch(error => {
                        weatherInfo.innerHTML = `<p>Error fetching weather data.</p>`;
                        console.error('Error:', error);
                    });
            } else {
                weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
            }
        });