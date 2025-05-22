//your JS code here. If required.
// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form data using the name attributes
    const formData = new FormData(this);
    
    const firstName = formData.get('First Name');
    const lastName = formData.get('Last Name');
    const phoneNumber = formData.get('Phone Number');
    const emailId = formData.get('Email ID');
    
    // Create alert message with spaces between labels and values
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
    
    // Display alert
    alert(alertMessage);
});