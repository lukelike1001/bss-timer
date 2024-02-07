// Set the date we're counting down to
function setTimer(minute, second, string_id) {

    // store copies of the minute and second to reset the time upon finishing
    let orig_minute = minute;
    let orig_second = second;

    // check that the minute and second inputs are numbers
    // also verify that string_id is a string
    if ((typeof minute !== 'number') || (typeof second !== 'number') || (typeof string_id !== 'string')) {
        console.log('Either the time parameters aren\'t numbers or the string_id isn\t a string.');
        return NaN;
    }

    // run the timer given the input parameters
    let timerInterval = setInterval(runTimer, 1000);

    function runTimer() {

        // display the current time
        document.getElementById(string_id).innerText = format_time(minute, second);

        // if the time is 00:00, stop the timer
        // otherwise, decrement seconds and minutes as needed
        if ((minute === 0) && (second === 0)) {
            document.getElementById(string_id).innerText = format_time(orig_minute, orig_second);
            alert('Timer expired!');
            clearInterval(timerInterval);
        } else if (second === 0) {
            minute -= 1;
            second += 59;
        } else {
            second -= 1;
        }
    }

    function format_time(minute, second) {
        let formatted_minute = String(minute).padStart(2, '0');
        let formatted_second = String(second).padStart(2, '0');
        let msg = formatted_minute + ':' + formatted_second + '⏰';
        return msg;
    }
}


// create event listeners for all the button IDs
// use arrow functions to prevent automatic calls upon loading the application
document.getElementById("ladybug").addEventListener("click", () => {
    setTimer(5, 0, "ladybug");
});
document.getElementById("rhino_beetle").addEventListener("click", () => {
    setTimer(5, 0, "rhino_beetle");
});
document.getElementById("scorpion").addEventListener("click", () => {
    setTimer(20, 0, "scorpion");
});
document.getElementById("mantis").addEventListener("click", () => {
    setTimer(20, 0, "mantis");
});
document.getElementById("spider").addEventListener("click", () => {
    setTimer(30, 0, "spider");
});
document.getElementById("werewolf").addEventListener("click", () => {
    setTimer(60, 0, "werewolf");
});
