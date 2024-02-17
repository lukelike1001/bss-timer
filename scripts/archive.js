class TimerButton {
    constructor(buttonID, message, minute, second) {
        this.button = document.getElementById(buttonID);
        this.message = message;
        this.minute = minute;
        this.second = second;
    }

    setUpEventListener() {

        // set a notification to pop-up upon the timer expiring
        // an additional second is added to ensure the pop-up is correctly displayed
        const delayTime = 1000 * (this.minute * 60 + this.second + 1);
        this.button.addEventListener('click', function () {

            // Step 1: Delay the notification by the calculated time
            setTimeout(function() {
                console.log('Delayed code');
            }, delayTime);

            // Step 2: Create the notification
            chrome.notifications.create({
                type: 'basic',
                iconUrl: '../images/guiding_star.png',
                title: 'Time\'s up! ⌛',
                message: this.message
            });
        });
    }
}

// if ((typeof minute !== 'number') || (typeof second !== 'number') || (typeof string_id !== 'string')) {
    // console.log('Either the time parameters aren\'t numbers or the string_id isn\t a string.');
    // return NaN;
// }