let form = document.querySelector('form');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let phoneInput = document.querySelector('#phone');
let message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
        message.innerHTML = 'Please enter a valid email address.';
        return;
    }

    if (!validatePassword(passwordInput.value)) {
        message.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
        return;
    }

    if (!validatePhone(phoneInput.value)) {
        message.innerHTML = 'Please enter a valid phone number.';
        return;
    }

    // If all validations pass, submit the form
    form.submit();
});

function validateEmail(email) {
    // Validate email address using regular expression
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(password);
}

function validatePhone(phone) {
    // Validate phone number using regular expression
    let re = /^\d{10}$/;
    return re.test(phone);
}