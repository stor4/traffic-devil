document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const inputs = document.querySelectorAll(".hero__form .d-input");

  function checkFormValidity() {
    let allFilled = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });
    submitBtn.disabled = !allFilled;
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkFormValidity();

      if (input.id === "email" && !validateEmail(input.value)) {
        input.classList.add("input-error");
        input.setCustomValidity("Inserisci un indirizzo email valido");
      } else {
        input.classList.remove("input-error");
        input.setCustomValidity("");
      }
    });
  });

  checkFormValidity();
});
