import intlTelInput from 'intl-tel-input';

const input1 = document.querySelector("#phone");

intlTelInput(input1, {
    utilsScript: "../functions/utils.js",
    initialCountry: 'us'
});

// window.input1 = input1
