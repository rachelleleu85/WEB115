// JavaScript code for form validation

// Get the form element
let form = document.getElementById("myForm");

// Add event listener to the form for submit event
form.addEventListener("submit", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value;

    // Regular expression pattern for alphanumeric input
    let alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert("Valid input! Form submitted successfully.");
        // The form would submit here if the server was set up for it
    } else {
        // Invalid input: display error message
        alert("Error: Please enter only alphanumeric characters (letters and numbers only).");
    }
});