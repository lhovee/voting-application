'use strict';

(function () {

   var submitButton = document.querySelector('.btn-submit');
   var apiUrl = appUrl + '/api/:id/polls';

   function updatePoll (data) {
      var PollObject = JSON.parse(data);
      submitButton.innerHTML = PollObject.polls;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, addPoll));

   submitButton.addEventListener('poll', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, addPoll);
      });

   }, false);

})();
