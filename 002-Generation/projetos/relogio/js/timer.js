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

    currentTime.innerHTML = setZero(hh) + "<span>:</span>" + ajusteZero(mm) + "<span>:</span>" + ajusteZero(ss);
    // setTimeout(updateTime, 1000);
}

updateTime();

function setZero(value) {

    debugger;
    console.log('value:' + value);
    debugger;

    'use strict';
    let _value = '0' + value;
    debugger;
    console.log('_value:' + _value);

    let _newValue = '';
    debugger;
    console.log('_newValue:' + _newValue);
    debugger;
    for (let i = _value.length - 1; i > _value.length - 3; i--) {
        console.log('i:' + i);
        debugger;
        _newValue = _value[i] + _newValue;
        console.log('_newValue:' + _newValue);
        debugger;
    }

    try {
        var calculo = 10 / 0;
        debugger;
        console.log('calculo:' + _calculo);
        debugger;
        console.log(calculo);
    }
    catch (e) {
        console.log('deu erro');
        debugger;
    }
    finally {
        console.log('passou aqui!');
        debugger;
    }

    console.log('_newValue' + _newValue);
    debugger;
    return _newValue;

}