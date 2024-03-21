const outputYear = document.querySelector('.output_year');
const outputMonth = document.querySelector('.output_month');
const outputDay = document.querySelector('.output_day');
const submitBtn = document.querySelector('.submit-btn');

const inputYear = document.querySelector('#year');
const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');

const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');

let isValid = true; // Define isValid variable outside the event listeners

// Event listener for form submission
submitBtn.addEventListener('click', () => {
    validateInputs();
    if (isValid) {
        calculateAge();
    } else {
        alert("Please correct the errors.");
    }
});

// Function to validate input values
function validateInputs() {
    isValid = true; // Reset isValid before validation

    // Validate day
    if (+inputDay.value > 31 || +inputDay.value === 0) {
        errorDay.textContent = (+inputDay.value === 0) ? "This field is required" : "Must be a valid date";
        isValid = false;
    } else {
        errorDay.textContent = "";
    }

    // Validate month
    if (+inputMonth.value > 12 || +inputMonth.value === 0) {
        errorMonth.textContent = (+inputMonth.value === 0) ? "This field is required" : "Must be a valid month";
        isValid = false;
    } else {
        errorMonth.textContent = "";
    }

    // Validate year
    if (+inputYear.value > 2024 || +inputYear.value === 0) {
        errorYear.textContent = (+inputYear.value === 0) ? "This field is required" : "Must be a valid year";
        isValid = false;
    } else {
        errorYear.textContent = "";
    }
}

// Function to calculate age
function calculateAge() {
    let birthday = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;

    // Display everything
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
}

// Event listeners for input validation
inputDay.addEventListener('input', validateDay);
inputMonth.addEventListener('input', validateMonth);
inputYear.addEventListener('input', validateYear);

function validateDay() {
    if (+inputDay.value > 31 || +inputDay.value === 0) {
        errorDay.textContent = (+inputDay.value === 0) ? "This field is required" : "Must be a valid date";
        isValid = false;
    } else {
        errorDay.textContent = "";
    }
}

function validateMonth() {
    if (+inputMonth.value > 12 || +inputMonth.value === 0) {
        errorMonth.textContent = (+inputMonth.value === 0) ? "This field is required" : "Must be a valid month";
        isValid = false;
    } else {
        errorMonth.textContent = "";
    }
}

function validateYear() {
    if (+inputYear.value > 2024 || +inputYear.value === 0) {
        errorYear.textContent = (+inputYear.value === 0) ? "This field is required" : "Must be a valid year";
        isValid = false;
    } else {
        errorYear.textContent = "";
    }
}

