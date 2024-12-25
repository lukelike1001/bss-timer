// Set the date we're counting down to
function setTimer(minute, second, string_id, message) {

    // if the timer is already running, stop it
    if (activeMap[string_id]) {
        activeMap[string_id] = false;
        clearInterval(timerMap[string_id]);
        showNotification("Timer canceled! 🛑");
    } else {
        activeMap[string_id] = true;
        timerMap[string_id] = bgpage.setAlarm((minute*60 + second) * 60000);
        clearInterval(timerMap[string_id]);
        showNotification(message);
    }

    function showNotification(message) {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: '../images/basic_bee.png',
            title: 'Time\'s up! ⌛',
            message: message
        });
    }
}

// create a hashmap to keep track of active timers
let timerMap = {};
let activeMap = {};
let keys = ["ladybug", "rhino_beetle", "scorpion", "mantis", "spider", "werewolf"];

for (let key in keys) {
    activeMap[key] = false;
}


// create event listeners for all the button IDs
// use arrow functions to prevent automatic calls upon loading the application
document.getElementById("ladybug").addEventListener("click", () => {
    let minute = 0, second = 10;
    let message = 'The ladybugs have respawned! 🔴';
    setTimer(minute, second, "ladybug", message);
    document.getElementById("ladybug").innerText = "05:00 ⏰";
});
document.getElementById("rhino_beetle").addEventListener("click", () => {
    let minute = 5, second = 0;
    let message = 'The rhino beetles have respawned! 🔵';
    setTimer(minute, second, "rhino_beetle", message);
    document.getElementById("ladybug").innerText = "05:00 ⏰";
});
document.getElementById("scorpion").addEventListener("click", () => {
    let minute = 20, second = 0;
    let message = 'The scorpions have respawned! 🌹';
    setTimer(minute, second, "scorpion", message);
    document.getElementById("ladybug").innerText = "20:00 ⏰";
});
document.getElementById("mantis").addEventListener("click", () => {
    let minute = 20, second = 0;
    let message = 'The mantises have respawned! 🌲';
    setTimer(minute, second, "mantis", message);
    document.getElementById("ladybug").innerText = "20:00 ⏰";
});
document.getElementById("spider").addEventListener("click", () => {
    let minute = 30, second = 0;
    let message = 'The spider has respawned! 🕷️';
    setTimer(minute, second, "spider", message);
    document.getElementById("ladybug").innerText = "30:00 ⏰";
});
document.getElementById("werewolf").addEventListener("click", () => {
    let minute = 60, second = 0;
    let message = 'The werewolf has respawned! 🐺';
    setTimer(minute, second, "werewolf", message);
    document.getElementById("ladybug").innerText = "60:00 ⏰";
});
