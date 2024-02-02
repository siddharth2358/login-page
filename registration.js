document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const validationResults = validateForm();

    if (validationResults.isValid) {
      // Perform form submission logic
      alert("Registration successful!");
    } else {
      // Display all validation errors
      alert(validationResults.errors.join("\n"));
    }
  });

  function validateForm() {
    const errors = [];

    function addError(message) {
      errors.push(message);
    }

    // Validate username
    const username = validateField("Username", isValidUsername, "Username must be alphanumeric and between 3 and 20 characters");

    // Validate email
    const email = validateField("email", isValidEmail, "Please enter a valid email address");

    // Validate password and confirmPassword
    const password = validateField("password", isValidPassword, "Password must be at least 8 characters long and include both letters and numbers");
    const confirmPassword = validateField("ConfirmPassword", (value) => value === password, "Password and Confirm Password do not match");

    // Validate First Name
    const fname = validateField("Fname", isValidName, "First Name must contain only letters and be between 2 and 30 characters");

    // Validate Last Name
    const lname = validateField("Lname", isValidName, "Last Name must contain only letters and be between 2 and 30 characters");

    // Validate Age
    const age = validateField("age", isValidAge, "Please enter a valid age between 18 and 75");

    // Validate Phone Number
    const phoneNumber = validateField("phoneNumber", isValidPhoneNumber, "Please enter a valid Indian phone number");

    // Validate Qualification
    const qualification = validateField("Qualification", isValidQualification, "Qualification must be between 2 and 50 characters");

    // Validate Native Place
    const nativePlace = validateField("Nativeplace", isValidNativePlace, "Native Place must be between 2 and 50 characters");

    // Validate Terms and Conditions
    const termsCheckbox = document.getElementById("terms");

    if (!termsCheckbox.checked) {
      addError("Please agree to the terms and conditions");
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  }

  function validateField(fieldId, validationFunction, errorMessage) {
    const fieldInput = document.getElementById(fieldId);
    const fieldValue = fieldInput.value;

    if (!validationFunction(fieldValue)) {
      alert(errorMessage);
      throw new Error(errorMessage); // Stop further validation on error
    }

    return fieldValue;
  }
// Function to validate username
  function isValidUsername(username) {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(username) && username.length >= 3 && username.length <= 20;
  }

  // Function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to validate password
  function isValidPassword(password) {
    // Password must be at least 8 characters long and include both letters and numbers
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }

  // Function to validate name (First Name and Last Name)
  function isValidName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name) && name.length >= 2 && name.length <= 30;
  }

  // Function to validate age
  function isValidAge(age) {
    // Age must be between 18 and 75
    const ageRegex = /^(1[8-9]|[2-6][0-9]|7[0-5])$/;
    return ageRegex.test(age);
  }

  // Function to validate Indian phone number
  function isValidPhoneNumber(phoneNumber) {
    // Indian phone number format (10 digits starting with 7, 8, or 9)
    const phoneRegex = /^[789]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  }

  // Function to validate qualification
  function isValidQualification(qualification) {
    // Qualification must be between 2 and 50 characters
    return qualification.length >= 2 && qualification.length <= 50;
  }

  // Function to validate native place
  function isValidNativePlace(nativePlace) {
    // Native Place must be between 2 and 50 characters
    return nativePlace.length >= 2 && nativePlace.length <= 50;
  }

});
