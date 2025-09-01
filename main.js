// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = ['transaction-section', 'add-money-section', 'cash-out-section', 'transfer-money-section', 'get-bonus-section', 'pay-bill-section'];
    for (const section of sections) {
        document.getElementById
            (section).classList.add('hidden');
    }
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to highlight the active button
function showBtnColor(btnDivId) {
    const btnColors = ['add-money', 'cashout', 'transfermoneys', 'getbonus', 'paybill', 'transactionbtn'];
    for (const btnColor of btnColors) {
        document.getElementById(btnColor).classList.remove('bg-blue-100')
    }
    document.getElementById(btnDivId).classList.add('bg-blue-100');
}

// here we work on add money btn 
document.getElementById('add-money').addEventListener('click', function () {
    showSection('add-money-section');
    showBtnColor('add-money')
})
// for cash out btn
document.getElementById('cashout').addEventListener('click', function () {

    showSection('cash-out-section');
    showBtnColor('cashout')
})
// transfer money btn
document.getElementById('transfermoneys').addEventListener('click', function () {
    showSection('transfer-money-section');
    showBtnColor('transfermoneys')
})
// get bonus section btn
document.getElementById('getbonus').addEventListener('click', function () {
    showSection('get-bonus-section');
    showBtnColor('getbonus')

})
// pay bill section btn
document.getElementById('paybill').addEventListener('click', function () {
    showSection('pay-bill-section');
    showBtnColor('paybill')
})
// transaction btn
document.getElementById('transactionbtn').addEventListener('click', function () {
    showSection('transaction-section');
    showBtnColor('transactionbtn')
})
// show value function to get input value
function showValue(inputIdToGetValue) {
    return document.getElementById(inputIdToGetValue).value;
}

// active add money to manage add money and check pin num to validate
document.getElementById('addmoneybluebtn').addEventListener('click', function () {
    const bank = document.getElementById('bankname').value;

    const accountNum = document.getElementById('accountnum').value = '';

    const addAmount = parseInt(document.getElementById('addamount').value);

    const pinNumber = document.getElementById('pinnum').value;
    if (accountNum.length !== 11) {
        alert('Account number must be 11 digit');
        return;
    }
    if (pinNumber === '1234'
    ) {
        const availableBalance = parseInt(document.getElementById('availablebalance').innerText);

        const newAvailableBalance = addAmount + availableBalance;

        document.getElementById('availablebalance').innerText = newAvailableBalance;
    }
    else {
        const p = document.createElement('p');
        p.textContent = " Invalid pin or mobile number"
        p.classList.add('text-red-600', 'text-[10px]', 'underline', 'mx-auto', 'text-center');
        document.getElementById("add-money-section").append(p)
    }
})

// logout btn to turn back to login page
document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = "index.html"
})

// cash out btn to manage cash out and check pin num to validate

document.getElementById('withdrawbtn').addEventListener('click', function () {
    const agentNumber = showValue('agentnum');
    const amountNum = showValue('cashoutammount');

    const pinNum = showValue('cashoutpinnum')

    const UpAmount = document.getElementById('availablebalance').innerText;

    if (agentNumber.length !== 11) {
        alert('Account number must be 11 digit')
        return;
    }
    if (pinNum === '1234') {
        const updateAmount = parseInt(UpAmount) - parseInt(amountNum);
        document.getElementById('availablebalance').innerText = updateAmount;

    }
})

// send money btn to manage send money and check pin num to validate
document.getElementById('sendnow').addEventListener('click', function () {
    const userAccountNum = showValue('useraccnum');
    const sendAmount = showValue('sendammount');

    const sendPinNum = showValue('sendoutpinnum')

    const UpAmountT = document.getElementById('availablebalance').innerText;

    if (userAccountNum.length !== 11) {
        alert('Account number must be 11 digit')
        return;
    }
    if (sendPinNum === '1234') {
        const newUpdateAmountForSenMoney = parseInt(UpAmountT) - parseInt(sendAmount);
        document.getElementById('availablebalance').innerText = newUpdateAmountForSenMoney;

    }
})
// bonus btn to manage bonus coupon
document.getElementById('bonusbtn').addEventListener('click', function () {
    const UpAmountTT = document.getElementById('availablebalance').innerText;
    const couponValue = showValue('coupon')
    if (couponValue === 'payoo!') {
        document.getElementById('availablebalance').innerText = parseInt(UpAmountTT) + parseInt(UpAmountTT * 0.1);
    }
    else {
        alert('coupon are not valid')
    }

})


