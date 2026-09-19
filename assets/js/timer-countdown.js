//COUNTDOWN SCRIPT [Days, Hours, Minutes, Second]

// Set target dates here (YY-MM-DD) (JST = +09:00 offset)
const targetDate1 = new Date("2027-05-15T00:00:00+09:00").getTime();
const targetDate2 = new Date("2027-09-07T00:00:00+09:00").getTime(); 

function updateSingleTimer(targetTime, prefix) {
    const now = new Date().getTime();
    const timeDifference = targetTime - now;
    
    if (timeDifference <= 0) {
        document.getElementById(prefix + "days").textContent = "00";
        document.getElementById(prefix + "hours").textContent = "00";
        document.getElementById(prefix + "minutes").textContent = "00";
        document.getElementById(prefix + "seconds").textContent = "00";
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    document.getElementById(prefix + "days").textContent = String(days).padStart(2, '0');
    document.getElementById(prefix + "hours").textContent = String(hours).padStart(2, '0');
    document.getElementById(prefix + "minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById(prefix + "seconds").textContent = String(seconds).padStart(2, '0');
}

function updateAllCountdowns() {
    updateSingleTimer(targetDate1, "t1-");
    updateSingleTimer(targetDate2, "t2-");
}
updateAllCountdowns();
setInterval(updateAllCountdowns, 1000);
