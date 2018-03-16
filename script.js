var showCurrentTime = function()
{
var clock = document.getElementById('clock');
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";
if (hours >= noon)
    {
		meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
var time = new Date(). getHours();
var messageText;
var isPartyTime;
var partyTimeButton = document.getElementById("partyTimeButton");
var noon = 12;
var evening = 18;
var wakeupTime = 9;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime = 17;
var updateClock = function()
{
var lolcat = document.getElementById("lolcat");
var message = document.getElementById("timeEvent");
if (time == partyTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	messageText = "From disco to disco...";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	messageText = "Nappy, nappy...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	messageText = "Yum, yum, yum...";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "Get up, get up!!!";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	messageText = "Good morning!";
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	messageText = "Good evening!";
} else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	messageText = "Good afternoon!";
}

message.innerText = messageText;
lolcat.src = image;

showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var isPartyTime = false;



var partyEvent = function() {


if (isPartyTime === false) {
    isPartyTime = true;
	time = partyTime;
    partyTimeButton.innerText = "DISCO!";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
	isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "IS DEAD";
    partyTimeButton.style.backgroundColor = "#222";
}
};

partyTimeButton.addEventListener("click", partyEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
	napTime = napTimeSelector.value;
};
var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
