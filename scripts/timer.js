// Set the date we're counting down to
function setTimer(minute, second, string_id) {

    // check that the minute and second inputs are numbers
    // also verify that the string is a 
    if ((typeof minute !== 'number') || (typeof second !== 'number') || (typeof string_id !== 'string')) {
        console.log('Either the time parameters aren\'t numbers or the string_id isn\t a string.');
        return NaN;
    }

    // run the timer given the input parameters
    var timerInterval = setInterval(runTimer, 1000);

    function runTimer() {

        // display the current time
        let formatted_second = String(second).padStart(2, '0');
        document.getElementById(string_id).text_content = '${minute}:${formatted_second} ⏰';

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