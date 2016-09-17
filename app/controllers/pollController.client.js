'use strict';
/* global ajaxFunctions */
/* global appUrl */

(function () {

   var newOptionButton = document.querySelector('.btn-newOption');
   var submitButton = document.querySelector('.btn-submit');
   var apiUrl = appUrl + '/api/:id/polls';
   
   submitButton.addEventListener('click', function() {
      var pollNameText = document.getElementById('pollName').value;
      var option1Text = document.getElementById('option1').value;
      var option2Text = document.getElementById('option2').value;
   
      // Read whatever is in the form and create a poll from that
      // Read the poll name and each option name from their text boxes
      // Send a POST request with the poll name and each option name
      var test = {pollName: pollNameText, option1: option1Text, option2: option2Text};
      ajaxFunctions.ajaxPost(apiUrl, test);
        // Change pages to the newly created poll's page
   }, false);
   
   newOptionButton.addEventListener('click', function() {
       // Add a new option text box
   }, false);

})();
