// login btn to main page and if user enter wrong pin or mobile number show error on login page

document.getElementById('login').addEventListener('click', function () {
    const mobile = "1000000000";
    const Pin = "1234";
    const mobileInput = document.getElementById("mobile-number")
    const mobileNumber = mobileInput.value;
    const pinInput = document.getElementById('pin-number')
    const pinNumber = pinInput.value;
    if (mobileNumber === mobile && pinNumber === Pin) {
        window.location.href = "./main.html"
    }
    else {
        console.log('show error');
        const p = document.createElement('p')
        p.textContent = " Invalid pin or mobile number"
        p.classList.add('text-red-600', 'text-[10px]', 'underline', 'mx-auto', 'text-center');
        document.getElementById("login-item-container").append(p)

    }

})