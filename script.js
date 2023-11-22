function submitForm(event) {
    alert("Form submitted. All data is correct!")
    event.preventDefault();
}

const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

// -----------------------------------------------------------------------------
// EMAIL VALIDATION
// -----------------------------------------------------------------------------
const email = document.getElementById("email");
const spanEmail = document.getElementById("span-email");

email.addEventListener("input", (event) => {
    // remove .setCustomValidity
    
    if (email.validity.valueMissing) {
        spanEmail.textContent = "You need to enter an email address."
        spanEmail.className = "error";
    }else if (email.validity.typeMismatch) {
        spanEmail.textContent = "Please, introduce a valid email address."
        spanEmail.className = "error";
    } else {
        spanEmail.textContent = "";
        spanEmail.classList.remove("error");
    }
})

// -----------------------------------------------------------------------------
//  COUNTRY & ZIP-CODE VALIDATION
// -----------------------------------------------------------------------------
const selectCountry = document.getElementById("select-country");
const zipCode = document.getElementById("zip-code");
const spanCountry = document.getElementById("span-country");
const spanZipCode = document.getElementById("span-zip-code");

// setup the selected country and zipcode by default (Spain)
selectCountry.selectedIndex = 0;
zipCode.setAttribute("pattern", "\\d{5}");

// Change pattern of zipCode to the selected country value if changed
selectCountry.addEventListener("change", (e) => {
    const zipCodePattern = selectCountry.value;
    zipCode.setAttribute("pattern", zipCodePattern);
    // console.log(`e.target.value = ${ e.target.value }`);
})

zipCode.setCustomValidity("Enter a zip-code!");
// Check if the zip-code is valid for the selected country
zipCode.addEventListener("input", (event) => {
        // Error messages
        if (zipCode.validity.valueMissing) {
            spanZipCode.textContent = "You need to enter a zip-code."
            
            spanZipCode.className = "error";
        }else if (zipCode.validity.patternMismatch) {
            spanZipCode.textContent = "Zip-code not valid for the selected country."
            spanZipCode.className = "error";
        } else {
            spanZipCode.textContent = "";
            spanZipCode.classList.remove("error");
        }
})

// -----------------------------------------------------------------------------
// PASSWORD VALIDATION
// -----------------------------------------------------------------------------
