'use strict';
/* global ajaxFunctions */
/* global appUrl */

(function () {

   var newOptionButton = document.querySelector('.btn-newOption');
   var submitButton = document.querySelector('.btn-submit');
   var target = document.querySelector('.target');
   var apiUrl = appUrl + '/api/:id/polls';
   
   function updatePolls (data) {
      var pollObject = JSON.parse(data);
      target.innerHTML = pollObject.name;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePolls));

         // Read whatever is in the form and create a poll from that
      // Read the poll name and each option name from their text boxes
      
   submitButton.addEventListener('click', function() {
      console.log("firing");
      var pollNameText = document.getElementById('pollName').value;
      var option1Text = document.getElementById('option1').value;
      var option2Text = document.getElementById('option2').value;

      // Send a POST request with the poll name and each option name
      var myPoll = {pollName: pollNameText, option1: option1Text, option2: option2Text};
      ajaxFunctions.ajaxPost(apiUrl, myPoll);
      ajaxFunctions.ajaxGet(apiUrl, updatePolls);
   
        // Change pages to the newly created poll's page
      var locationObj = appUrl + '/viewPolls';
      window.location.href = locationObj;
   }, false);

   
   newOptionButton.addEventListener('click', function() {
       // Add a new option text box
   }, false);

})();

