document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      responseDiv.textContent = '';
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        responseDiv.textContent = 'Please fill in all fields.';
        return;
      }
  
      // Validate email format (client-side)
      if (!isValidEmail(email)) {
        responseDiv.textContent = 'Please enter a valid email address.';
        return;
      }
  
      // Create an object with the form data
      const formData = { name, email, message };
  
      // Convert the data to a JSON string
      const formDataJSON = JSON.stringify(formData);
  
      // Save the data to a local JSON file
      download(formDataJSON, 'contact_data.json', 'application/json');
  
      responseDiv.textContent = 'Thank you for your message. We have saved your data locally.';
      form.reset();
    });
  
    function isValidEmail(email) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
    }
  
    function download(data, filename, type) {
      const file = new Blob([data], { type: type });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();
    }
  });