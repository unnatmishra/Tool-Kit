import React, { useState } from 'react'
const api = {
	key: "0d030fb0db2b55fa63ff2d84e99b03ac",
	base: "https://api.openweathermap.org/data/2.5/"
}

const WeatherApp = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
	const search = evt => {
		if (evt.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`).then(res => res.json()).then(result => {
				setWeather(result);
				setQuery('');
				console.log(result);
			});
		}
	}
	const dateBuilder = (d) => {
		console.log(d, d.getDay(), d.getDate(), d.getMonth(), d.getFullYear())
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		return `${day} || ${date} ${month}, ${year}`
	}
	return (
		<div style={{ backgroundImage: "url(https://source.unsplash.com/1920x1080/?nature,water))", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
			<div className="container pt-5">
				<div className="">
					<input type="text" className="form-control bg-dark text-white" placeholder="Enter location and press enter" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} autoFocus />
				</div>
				{(typeof weather.main != "undefined") ? (
					<div style={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? { backgroundImage: "url(./img/warm-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "50vh" } : { backgroundImage: "url(./img/cold-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "50vh" }) : { backgroundImage: "url(./img/cold-bg.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "50vh" }} className="position-absolute top-50 start-50 translate-middle p-xxl-5 rounded-3">
						<ul style={{ textAlign: "left", listStyle: "none" }} className="p-5">
							<li className="h3">{weather.name} - {weather.sys.country}</li>
							<li className="h3">{dateBuilder(new Date())}</li>
							<li className="h3">{weather.weather[0].main}</li>
							<li className="h3">{Math.round(weather.main.temp)} °C</li>
						</ul>
					</div>
				) : ('')}
			</div>
			<a href="/" className="btn btn-light btn-lg position-absolute bottom-0 end-0 m-5">Back To Home Page</a>
		</div>
	);
}

export default WeatherApp
