// shows notification message upon timer expriation
function showNotification(message) {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '../images/basic_bee.png',
        title: 'Time\'s up! ⌛',
        message: message
    });
}


/*
 *  LADYBUG BUTTON
 */
document.addEventListener('DOMContentLoaded', function () {

    // define the basic components
    let targetButton = document.getElementById('ladybug');
    let message = 'The ladybugs have respawned! 🔴';
    let minute = 5, second = 0;

    // then send the notification
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 1000*(60*minute + second + 1), message);
    });
});


/*
 *  RHINO BEETLE BUTTON
 */
document.addEventListener('DOMContentLoaded', function () {

    // define the basic components
    let targetButton = document.getElementById('rhino_beetle');
    let message = 'The rhino beetles have respawned! 🔵';
    let minute = 5, second = 0;

    // then send the notification
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 1000*(60*minute + second + 1), message);
    });
});


/*
 *  SCORPION BUTTON
 */
document.addEventListener('DOMContentLoaded', function () {

    // define the basic components
    let targetButton = document.getElementById('scorpion');
    let message = 'The scorpions have respawned! 🌹';
    let minute = 20, second = 0;

    // then send the notification
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 1000*(60*minute + second + 1), message);
    });
});


/*
 *  MANTIS BUTTON
 */
document.addEventListener('DOMContentLoaded', function () {

    // define the basic components
    let targetButton = document.getElementById('mantis');
    let message = 'The mantises have respawned! 🌲';
    let minute = 20, second = 0;

    // then send the notification
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 1000*(60*minute + second + 1), message);
    });
});


/*
 *  SPIDER BUTTON
 */
document.addEventListener('DOMContentLoaded', function () {

    // define the basic components
    let targetButton = document.getElementById('spider');
    let message = 'The spider has respawned! 🕷️';
    let minute = 30, second = 0;

    // then send the notification
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 1000*(60*minute + second + 1), message);
    });
});


/*
 *  WEREWOLF BUTTON
 */
document.addEventListener('DOMContentLoaded', function () {

    // define the basic components
    let targetButton = document.getElementById('werewolf');
    let message = 'The werewolf has respawned! 🐺';
    let minute = 60, second = 0;

    // then send the notification
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 1000*(60*minute + second + 1), message);
    });
});
