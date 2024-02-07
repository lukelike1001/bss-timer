// Set the date we're counting down to
function setTimer(minute, second, string_id) {

    // check that the minute and second inputs are numbers
    // also verify that string_id is a string
    if ((typeof minute !== 'number') || (typeof second !== 'number') || (typeof string_id !== 'string')) {
        console.log('Either the time parameters aren\'t numbers or the string_id isn\t a string.');
        return NaN;
    }

    // run the timer given the input parameters
    var timerInterval = setInterval(runTimer, 1000);

    function runTimer() {

        // display the current time
        let formatted_minute = String(minute).padStart(2, '0');
        let formatted_second = String(second).padStart(2, '0');
        const msg = formatted_minute + ':' + formatted_second + '⏰';
        document.getElementById(string_id).innerText = msg;

        // if the time is 00:00, stop the timer
        // otherwise, decrement seconds and minutes as needed
        if ((minute === 0) && (second === 0)) {
            alert('Timer expired!');
            clearInterval(timerInterval);
        } else if (second === 0) {
            minute -= 1;
            second += 59;
        } else {
            second -= 1;
        }
    }
}


// create event listeners for all the button IDs
const ladybug_button = document.querySelector('#ladybug');
ladybug_button.addEventListener("click", setTimer(0, 2, "ladybug"));

document.getElementById("rhino_beetle").addEventListener("click", setTimer(0, 5, "rhino_beetle"));
document.getElementById("scorpion").addEventListener("click", setTimer(20, 0, "scorpion"));
document.getElementById("mantis").addEventListener("click", setTimer(20, 0, "mantis"));
document.getElementById("spider").addEventListener("click", setTimer(20, 0, "spider"));
document.getElementById("werewolf").addEventListener("click", setTimer(20, 0, "werewolf"));
