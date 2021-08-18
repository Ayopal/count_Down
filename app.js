const countDown = () => {
	const countDate = new Date("August 20, 2021 00:00:00").getTime();
	const currentTime = new Date().getTime();
	const gap = countDate - currentTime;

	//How the fuck does time work?
	const second = 1000;
	const minute = second * 60; // This is 1 minute, since 60 seconds is 1 minute.
	const hour = minute * 60;
	const day = hour * 24;

	//Calculate

	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);
	console.log(textDay);

	document.querySelector(".day").innerHTML = textDay;
	document.querySelector(".hour").innerHTML = textHour;
	document.querySelector(".minute").innerHTML = textMinute;
	document.querySelector(".second").innerHTML = textSecond;
};

setInterval(() => {
	countDown();
}, 999);
