async function fetchData() {
    const baseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67d9b4011emshe451b567bf5f60ep124c93jsnb5d262c7267c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        let button = document.querySelector('#btnsrc');
        let input = document.querySelector('#inpt');
        let temp = document.querySelector('.temp');
        let info1 = document.querySelector('.box1');
        let info2 = document.querySelector('.box2');

        button.addEventListener('click', async () => {
            const city = input.value;
            if (!city) {
                temp.textContent = 'City not found';
                info1.innerHTML = '';
                info2.innerHTML = '';
                return;
            }

            const url = baseUrl + encodeURIComponent(city); // Append city name to URL
            const response = await fetch(url, options);
            const result = await response.json(); // Parse response as JSON
            console.log(result);

            // Display temperature from API response
            temp.textContent = `Temperature of ${city} is ${result.temp}°C`;

            // Display various weather information
            if (result.temp == null) {
                temp.innerHTML='city not found';
                info1.innerHTML='';
                info2.innerHTML='';
            } else {
                info1.innerHTML = `Cloud pct : ${result.cloud_pct}<br>`;
                info1.innerHTML += `Feels like : ${result.feels_like}<br>`;
                info1.innerHTML += `Humidity : ${result.humidity}<br>`;
                info1.innerHTML += `Max temperature : ${result.max_temp}<br>`;
                info1.innerHTML += `Min temperature : ${result.min_temp}<br>`;

                info2.innerHTML = `sunrise : ${result.sunrise}<br>`;
                info2.innerHTML += `sunset : ${result.sunset}<br>`;
                info2.innerHTML += `wind degree : ${result.wind_degree}<br>`;
                info2.innerHTML += `wind speed : ${result.wind_speed}<br>`;
            }

        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();





