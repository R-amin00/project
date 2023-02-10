
//Grocerry Shop
function changeMoney () {
    const inputMoney = document.getElementById('inputMoney').value;
    const sumMoney = document.getElementById('totalPrice');
    const changeMoney = document.getElementById('changeMoney');
    const apple = document.getElementById('apple').value;
    const orange = document.getElementById('orange').value;
    const applePrice = apple * 700;
    const orangePrice = orange * 700;
    const inputMoneyNum = Number(inputMoney);
    const totalPrice = applePrice + orangePrice;
    const backMoney = inputMoneyNum - totalPrice;
    sumMoney.innerText = totalPrice;
    changeMoney.innerText = backMoney;
}

//Avarage
function average () {
    const inputMath = document.getElementById('inputMath').value;
    const inputBio = document.getElementById('inputBio').value;
    const inputChemi = document.getElementById('inputChemi').value;
    const inputPhy = document.getElementById('inputPhy').value;
    const inputBan = document.getElementById('inputBan').value;
    const inputEng = document.getElementById('inputEng').value;
    const showAvrg = document.getElementById('showAvrg');
    const totalMark = Number(inputMath) + Number(inputBio) + Number(inputChemi) + Number(inputPhy) + Number(inputBan) + Number(inputEng) ;
    const avrg = totalMark / 6;
    const resultAvrg = avrg.toFixed(2);
    showAvrg.innerText = resultAvrg;
}

//String Combine in one Line
function combineString () {
    const firstString = document.getElementById('firstString').value;
    const secondString = document.getElementById('secondString').value;
    const combineLine = document.getElementById('combineLine');
    const combine = firstString + ' ' + secondString;
    combineLine.innerText = combine;
}

//Reminder
function reminder () {
    const givenNumber = document.getElementById('givenNumber').value;
    const divider = document.getElementById('divider').value;
    const reminderResult = document.getElementById('reminderResult');
    const reminderNum = Number(givenNumber) % Number(divider);
    reminderResult.innerText = reminderNum;
}