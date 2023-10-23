let countdown = 0; // Initialize countdown to 0

function startCountdown() {
    // Get the value of the input field with the ID "timer-input"
    const inputMinutes = parseInt(document.getElementById("timer-input").value);

    // Check if the input is not a valid number or less than or equal to 0
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return; // Exit the function if input is not valid
    }

    // Convert the input minutes to seconds for the countdown
    countdown = inputMinutes * 60; 

    // Get a reference to the element with the ID "countdown" to display the timer
    const timerDisplay = document.getElementById("countdown");

    function updateTimerDisplay() {
        // Calculate the remaining minutes and seconds in the countdown
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;

        // Format the time as "MM:SS" with leading zeros
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Update the content of the timer display with the formatted time
        timerDisplay.textContent = formattedTime;

        // Check if the countdown has reached 0
        if (countdown <= 0) {
            // If the countdown is over, clear the interval and display a message
            clearInterval(intervalId);
            timerDisplay.textContent = "Time's up!";
        } else {
            // If the countdown is still running, decrement the remaining time by 1 second
            countdown--;
        }
    }

    // Call the updateTimerDisplay function immediately to avoid a 1-second delay
    updateTimerDisplay();

    // Set an interval to call the updateTimerDisplay function every 1 second (1000 milliseconds)
    const intervalId = setInterval(updateTimerDisplay, 1000);
}
