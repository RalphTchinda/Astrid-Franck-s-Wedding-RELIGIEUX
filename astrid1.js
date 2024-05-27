document.addEventListener("DOMContentLoaded", function() {
    var countdownElement = document.getElementById("countdown1");

    // Set the target date and time
    var targetDate = new Date("July 13, 2024 14:59:59").getTime();

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "EXPIRED";
        } else {
            var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
            var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML =
                (months < 10 ? "0" + months : months) + "Mois " +
                (days < 10 ? "0" + days : days) + "Jours " +
                (hours < 10 ? "0" + hours : hours) + "h " +
                (minutes < 10 ? "0" + minutes : minutes) + "m " +
                (seconds < 10 ? "0" + seconds : seconds) + "s";
        }
    }, 1000);
});