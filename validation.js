function startCountdown() {

    //targetDate, it creates a date object representing the date and time selected by the user.
    //For currentDate, it creates a date object representing the current date and time.

    var targetDate = new Date(document.getElementById('datetime').value);
    var currentDate = new Date();


    //validation
    var timeRemaining = targetDate - currentDate;
    if (timeRemaining < 0) {
        document.getElementById('countdown').textContent = "Invalid date! Please select a future date and time.";
        return;
    }

    // Calculate the total number of days remaining
    var totalDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Calculate the number of months from the total days
    var months = Math.floor(totalDays / 30);

    // Calculate the remaining days after considering months
    var days = totalDays % 30;

    // Calculate the remaining hours
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calculate the remaining minutes
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // Calculate the remaining seconds
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


    var countdownString = months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
    document.getElementById('countdown').textContent = "Time remaining: " + countdownString;
}