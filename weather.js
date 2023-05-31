const searchCity = async () => {
	const city = document.getElementById('city-input').value
	console.log(city)
	const data = await getData(city)
	console.log(data)
	showWeatherData(data)
}


const getData = (city) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '021646fad5msh1407a64c60e5bebp11cb57jsnf808a04e7cfe',
			'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
		}
	};

	// const weatherPromise = 
	return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.log(err))
}

const showWeatherData = (res) => {
	document.getElementById('city-name').innerHTML = res.name
	document.getElementById('weather-type').innerHTML = res.weather[0].main
	document.getElementById('temp').innerHTML = res.main.temp
	document.getElementById('min-temp').innerHTML = res.main.temp_min
	document.getElementById('max-temp').innerHTML = res.main.temp_max
}