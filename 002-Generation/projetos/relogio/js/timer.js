let currentTime = document.getElementById('currtime');
function ajusteZero(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
};

function updateTime() {

    let timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds()

    // currentTime.innerHTML = (String(hh).length == 1 ? "0" : "") + hh + "<span>:</span>" + (String(mm).length == 1 ? "0" : "") + mm + "<span>:</span>" + (String(ss).length == 1 ? "0" : "") + ss;

    currentTime.innerHTML = ajusteZero(hh) + "<span>:</span>" + ajusteZero(mm) + "<span>:</span>" + ajusteZero(ss);
    setTimeout(updateTime, 1000);
}

updateTime();

