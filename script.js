window.addEventListener('load',()=> {
    const locationElement = document.getElementById('location');
    const iconElement = document.getElementById('icon');
    const descriptionElement = document.getElementById('description');
    const tempElement = document.getElementById('temp');
    const unitElement = document.getElementById('unit');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const city = searchInput.value;
        if(city.trim() !=='') {
            getWeatherData(city);        }
    });

    function getWeatherData(city) {
        const apikey ="88fb26593ba794b2e59f213b48e35117";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then(response => response.json())
    .then(data => {
        locationElement.textContent= data.name;
        descriptionElement.textContent = data.weather[0].description;
        tempElement.textContent= Math.round(data.main.temp - 273.15);
        iconElement.src = `https:\\openweathermap.org/img/w/${data.weather[0].icon}.png`;

    })   
    .catch(error => {
        console.log('Error fetching weather data:',error);
    }
            
    )}
    
})