// Wait for the HTML document to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Get references to important elements in the HTML
  const form = document.getElementById('contact-form'); // Get the contact form
  const responseDiv = document.getElementById('response'); // Get the response message element

  // Add an event listener for the form's submit event
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      responseDiv.textContent = ''; // Clear any previous response messages

      // Get the values entered in the form fields
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Check if any of the form fields are empty
      if (!name || !email || !message) {
          responseDiv.textContent = 'Please fill in all fields.';
          return; // Stop further processing
      }

      // Validate email format using a client-side regular expression
      if (!isValidEmail(email)) {
          responseDiv.textContent = 'Please enter a valid email address.';
          return; // Stop further processing
      }

      // Create an object with the form data
      const formData = { name, email, message };

      // Convert the form data to a JSON string
      const formDataJSON = JSON.stringify(formData);

      // Save the data to a local JSON file using a download function
      download(formDataJSON, 'contact_data.json', 'application/json');

      // Display a success message and reset the form
      responseDiv.textContent = 'Thank you for your message. We have saved your data locally.';
      form.reset();
  });

  // Function to validate email format using a regular expression
  function isValidEmail(email) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
  }

  // Function to create a Blob (file-like object) and trigger a download
  function download(data, filename, type) {
      const file = new Blob([data], { type: type });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click(); // Simulate a click on the invisible anchor element to trigger the download
  }
});
