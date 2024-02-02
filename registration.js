document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const username = document.getElementById('Username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('ConfirmPassword').value;
        const Firstname = document.getElementById('Firstname').value;
        const Lastname = document.getElementById('Lastname').value;
        const Age = document.getElementById('Age').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const Qualification = document.getElementById('Qualification').value;
        const NativePlace = document.getElementById('NativePlace').value.split(',').map(item => item.trim()); // Convert NativePlace to an array


        
        if (
            !validateUsername(username) ||
            !validateEmail(email) ||
            !validatePassword(password) ||
            !validateConfirmPassword(password, confirmPassword) ||
            !validateFirstName(Firstname) ||
            !validateLastName(Lastname) ||
            !validateAge(Age) ||
            !validatePhoneNumber(phoneNumber) ||
            !validateQualification(Qualification) ||
            !validateNativePlace(NativePlace) ||
            
        ) 
        } else {
            // You can submit the form or perform other actions here
            alert('Registration successful!');
            
            // form.submit();
        }
    }

    function validateUsername(username) {
        // Username should have a minimum of 5 characters and a maximum of 15 characters
        const minLength = 5;
        const maxLength = 15;

        if (username.length < minLength || username.length > maxLength) {
            alert('Username must be between 5 and 15 characters.');
            return false;
        }

        

        return true;
    }

    function validateEmail(email) {
        // Email validation using a simple regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }


    function validatepassword(password) {
        // password should have a minimum of 8 characters
        const minLength = 8;

        // password should contain at least one uppercase, one lowercase, one number, and one special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;

        if (password.length < minLength || !regex.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return false;
        }

        return true;
    }

    function validateConfirmPassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match.');
            return false;
        }

        return true;
    }


    function validateFirstName(FirstName) {
        // First name should have a minimum of 5 characters, a maximum of 15 characters, and contain only alphabets
        const minLength = 5;
        const maxLength = 15;
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (FirstName.length < minLength || FirstName.length > maxLength || !alphabetRegex.test(FirstName)) {
            alert('First name must be between 5 and 15 characters and contain only alphabets.');
            return false;
        }

        return true;
    }

    function validateLastName(LastName) {
        // Last name should have a minimum of 5 characters, a maximum of 15 characters, and contain only alphabets
        const minLength = 5;
        const maxLength = 15;
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (LastName.length < minLength || LastName.length > maxLength || !alphabetRegex.test(LastName)) {
            alert('Last name must be between 5 and 15 characters and contain only alphabets.');
            return false;
        }

        return true;
    }

    function validateAge(Age) {
        // Age should be a number between 12 and 75
        const minAge = 12;
        const maxAge = 75;

        if (isNaN(Age) || Age < minAge || Age > maxAge) {
            alert('Please enter a valid age between 12 and 75.');
            return false;
        }

        return true;
    }
     
    function validatePhoneNumber(phoneNumber) {
        // Phone number validation for Indian format /^[6-9]\d{9}$/
        const regex = /^[6-9]\d{9}$/;

        if (!regex.test(phoneNumber)) {
            alert('Please enter a valid Indian phone number.');
            return false;
        }

        return true;
    }
     
    function validateQualification(Qualification) {
        // Qualification should have a minimum of 5 characters, a maximum of 30 characters, and contain only alphabets and commas
        const minLength = 5;
        const maxLength = 30;
        const alphabetAndCommaRegex = /^[a-zA-Z,]+$/;

        if (Qualification.length < minLength || Qualification.length > maxLength || !alphabetAndCommaRegex.test(Qualification)) {
            alert('Qualification must be between 5 and 30 characters and contain only alphabets and commas.');
            return false;
        }

        return true;
    }
     
    function validateNativePlace(NativePlace) {
        // Native Place should be an array with a minimum of 1 item and a maximum of 5 items, allowing only alphabets
        const minLength = 5;
        const maxLength = 30;
        const alphabetAndCommaRegex = /^[a-zA-Z,]+$/;

        if (NativePlace.length < minLength || NativePlace.length > maxLength || !alphabetAndCommaRegex.test(NativePlace)) {
            alert('Native Place must be between 5 and 30 characters and contain only alphabets and commas.');
            return false;
        }
        return true;
    }

    
});
