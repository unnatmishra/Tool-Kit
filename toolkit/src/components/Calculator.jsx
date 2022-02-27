import React, { useState } from 'react'

const Calculator = () => {
	const [result, setResult] = useState("");
	const handleClick = e => setResult(result.concat(e.target.name));

	const backspace = () => setResult(result.slice(0, -1));

	const clear = () => setResult("");

	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Error");
		}
	}

	return (
		<div style={{ backgroundImage: "url(https://source.unsplash.com/1920x1080/weekly?water)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }} className="">
			<div className="container pt-2">
				<table className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
					<tr>
						<td colSpan="4">
							<input className="form-control-lg" type="text" value={result} autoFocus />
						</td>
					</tr>
					<tr>
						<td colSpan="2">
							<button id="clear" className="btn btn-success text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={clear}>Clear</button>
						</td>
						<td>
							<button id="backspace" className="btn btn-danger text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={backspace}>&lt;</button>
						</td>
						<td>
							<button name="/" className="btn btn-light w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>/</button>
						</td>
					</tr>
					<tr>
						<td>
							<button name="7" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>7</button>
						</td>
						<td>
							<button name="8" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>8</button>
						</td>
						<td>
							<button name="9" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>9</button>
						</td>
						<td>
							<button name="*" className="btn btn-light w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>&times;</button>
						</td>
					</tr>
					<tr>
						<td>
							<button name="4" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>4</button>
						</td>
						<td>
							<button name="5" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>5</button>
						</td>
						<td>
							<button name="6" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>6</button>
						</td>
						<td>
							<button name="-" className="btn btn-light w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>__</button>
						</td>
					</tr>
					<tr>
						<td>
							<button name="1" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>1</button>
						</td>
						<td>
							<button name="2" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>2</button>
						</td>
						<td>
							<button name="3" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>3</button>
						</td>
						<td>
							<button name="+" className="btn btn-light w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>+</button>
						</td>
					</tr>
					<tr>
						<td>
							<button name="0" className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>0</button>
						</td>
						<td>
							<button name="." className="btn btn-dark text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={handleClick}>.</button>
						</td>
						<td colSpan="2">
							<button id="result" className="btn btn-primary text-white w-100 p-3" style={{ fontSize: "25px" }} onClick={calculate}>Result</button>
						</td>
					</tr>
				</table>
				<div style={{ background: "url(./img/calc.jpeg)", height: "18rem", backgroundSize: "cover", backgroundPosition: "center" }}></div>
			</div>
			<a href="/" className="btn btn-light btn-lg position-absolute bottom-0 end-0 m-5">Back To Home Page</a>
		</div>
	);
}

export default Calculator