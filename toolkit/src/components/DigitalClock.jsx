import React, { useState } from 'react'

const DigitalClock = () => {
	const [currentTime, setCurrenttime] = useState(false);
	const updateTime = () => {
		let time = new Date().toLocaleTimeString();
		setCurrenttime(time);
	}

	setInterval(updateTime, 0);
	return <h3>{currentTime}</h3>
}

export default DigitalClock