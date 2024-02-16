async function fetchweatherData(cityName) {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cd55fd49dac96850711a491fef67b7dd`;
	const response = await fetch(url);
	const data = await response.json();
	let city = document.getElementById("city");
	city.innerHTML=data.name;
	let windspeed = document.getElementById("windspeed");
	windspeed.innerHTML = data.wind.speed + " km/hr";
	let humidity = document.getElementById("humidity");
	humidity.innerHTML = data.main.humidity+" g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"°C"; 
	console.log(data);
}
function fetchCity() {
	let cityName = document.getElementById('city_name');
	if (cityName.value==="") 
	{
		alert("Enter a city name");
	}
	else
	{
		fetchweatherData(cityName.value);
		cityName.value="";
	}
}