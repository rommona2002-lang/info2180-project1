/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.newsletter form');
  var emailInput = document.querySelector('.newsletter input[type="email"]');
  var messageBox = document.querySelector('.newsletter .message');
  if (!form || !emailInput || !messageBox) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = (emailInput.value || '').trim();
    var looksValid = /.+@.+\..+/.test(email);
    if (looksValid) {
      messageBox.textContent = 'Thank you! Your email address ' + email + ' has been added to our mailing list!';
      form.reset();
    } else {
      messageBox.textContent = 'Please enter a valid email address.';
    }
  });
});
