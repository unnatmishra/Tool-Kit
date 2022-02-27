import React, { useState, useEffect } from "react";
const url = "https://api.quotable.io/random";

const QuoteGenerator = () => {
	const [quotes, setQuotes] = useState([]);
	useEffect(() => {
		getNewQuote();
	}, []);
	const getNewQuote = () => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setQuotes(data));
	};
	const { content, author } = quotes;
	return (
		<div style={{ backgroundImage: "url(https://source.unsplash.com/1920x1080/?nature,water)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
			<div className="container pt-5">
				<div className="position-absolute top-50 start-50 translate-middle p-xxl-5 rounded-3" style={{ backgroundImage: "url(./img/quote.jfif)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
					<b>
						<p className="h1">{content}</p>
					</b>
					<i>
						<h4 className="py-5">~{author}</h4>
					</i>
					<a href="/quote-generator" className="btn-lg btn-dark text-decoration-none" onClick={getNewQuote}>New Quote</a>
				</div>
			</div>
			<a href="/" className="btn btn-light btn-lg position-absolute bottom-0 end-0 m-5">Back To Home Page</a>
		</div>
	);
}

export default QuoteGenerator
