import React from 'react'
import DigitalClock from './DigitalClock'
import "./Home.css"

const Home = () => {
	const routes = [
		{
			a: "/calculator",
			img: "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/Calculator_5122x.png",
		},
		{
			a: "/quote-generator",
			img: "./img/quote.jpeg",
		},
		{
			a: "/weather-app",
			img: "https://weather.omegatower.ninja/img/logo.png",
		}
	]
	const links = [
		{
			a: "https://www.instagram.com/snaps.on.claps/",
			img: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
		},
		{
			a: "https://www.facebook.com/groups/718224812235913/",
			img: "http://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png"
		},
		{
			a: "https://www.google.com/maps/place/Chitkara+University/@30.5160865,76.6575891,17z/data=!3m1!4b1!4m5!3m4!1s0x390fc32344a6e2d7:0x81b346dee91799ca!8m2!3d30.5160865!4d76.6597778",
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/1200px-Google_Maps_icon_%282015-2020%29.svg.png"
		},
		{
			a: "https://www.youtube.com/watch?v=T0ZchG3oTeo",
			img: "https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-play-logo-transparent-png-7.png"
		}
	]
	return (
		<div style={{ background: "url(./img/tools.jpeg)", backgroundSize: "cover", height: "100vh" }}>
			<div className="container py-5">
				<a href="https://www.instagram.com/trucker_tools">
					<div className="position-absolute end-0 top-0 mx-5 my-3 btn-sm btn btn-light">About Us</div>
				</a>
				<div className="text-white">
					<DigitalClock />
				</div>
				<div className="row my-5 pt-5">
					{
						routes.map(item => (
							<div className="col-md-4 d-flex align-items-center justify-content-center my-5 py-4">
								<a href={item.a} className="cards">
									<img src={item.img} alt="" width={150} height={150} />
								</a>
							</div>
						))
					}
				</div>
				<div className="row">
					{
						links.map(item => (
							<div className="col-md-3 d-flex align-items-center justify-content-center">
								<a href={item.a} className="cards">
									<img src={item.img} alt="" width={100} height={100} />
								</a>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Home
