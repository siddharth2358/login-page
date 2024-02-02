document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Validate username
      const usernameInput = document.getElementById("Username");
      const username = usernameInput.value;
  
      if (!isValidUsername(username)) {
        alert("Username must be alphanumeric and between 3 and 20 characters");
        return;
      }
  
      // Validate email
      const emailInput = document.getElementById("email");
      const email = emailInput.value;
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
      }
  
      // Validate password and confirmPassword
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("ConfirmPassword");
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long and include both letters and numbers");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
      }
  
      // Validate First Name
      const fnameInput = document.getElementById("Fname");
      const fname = fnameInput.value;
  
      if (!isValidName(fname)) {
        alert("First Name must contain only letters and be between 2 and 30 characters");
        return;
      }
  
      // Validate Last Name
      const lnameInput = document.getElementById("Lname");
      const lname = lnameInput.value;
  
      if (!isValidName(lname)) {
        alert("Last Name must contain only letters and be between 2 and 30 characters");
        return;
      }
  
      // Validate Age
      const ageInput = document.getElementById("age");
      const age = ageInput.value;
  
      if (!isValidAge(age)) {
        alert("Please enter a valid age between 18 and 75");
        return;
      }
  
      // Validate Phone Number
      const phoneNumberInput = document.getElementById("phoneNumber");
      const phoneNumber = phoneNumberInput.value;
  
      if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid Indian phone number");
        return;
      }
  
      // Validate Qualification
      const qualificationInput = document.getElementById("Qualification");
      const qualification = qualificationInput.value;
  
      if (!isValidQualification(qualification)) {
        alert("Qualification must be between 2 and 50 characters");
        return;
      }
  
      // Validate Native Place
      const nativePlaceInput = document.getElementById("Nativeplace");
      const nativePlace = nativePlaceInput.value;
  
      if (!isValidNativePlace(nativePlace)) {
        alert("Native Place must be between 2 and 50 characters");
        return;
      }
  
      // Validate Terms and Conditions
      const termsCheckbox = document.getElementById("terms");
  
      if (!termsCheckbox.checked) {
        alert("Please agree to the terms and conditions");
        return;
      }
  
      // ... (other validations and form submission logic)
  
      alert("Registration successful!");
    });
  
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
  
