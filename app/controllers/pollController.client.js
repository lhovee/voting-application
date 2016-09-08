'use strict';
/* global ajaxFunctions */
/* global appUrl */

(function () {

   var newOptionButton = document.querySelector('.btn-newOption');
   var submitButton = document.querySelector('.btn-submit');
   var option1Text = document.querySelector('#option1');
   var option2Text = document.querySelector('#option2');
   var apiUrl = appUrl + '/api/:id/polls';
   
   submitButton.addEventListener('click', function() {
       // Read whatever is in the form and create a poll from that
       // Read the poll name and each option name from their text boxes
       // Send a POST request with the poll name and each option name
       ajaxFunctions.ajaxRequest('POST', apiUrl, function() {
           // Nothing needs to be done
       } );
       // Change pages to the newly created poll's page
   }, false);
   
   newOptionButton.addEventListener('click', function() {
       // Add a new option text box
   }, false);

})();
