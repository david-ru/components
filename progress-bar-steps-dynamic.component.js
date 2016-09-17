(function (angular) {
  'use strict';

  angular.module('progressBarSteps', [])
    .component('progressBarSteps', {
      templateUrl: './componentes/progress-bar-steps-dynamic/progress-bar-steps-dynamic.html',
      controller: ProgressBarStepsController,
      bindings: {
        totalSteps: '<',
        currentStep: '<',
        sizeClass: '@'
      }
    })

  function ProgressBarStepsController () {
    var ctrl = this;

    var ol = document.getElementById("progressBarStepsDynamic");
    ol.setAttribute("class", "progress " + ctrl.sizeClass);
    for (var i=1; i<=ctrl.totalSteps; i++) {
      var li = document.createElement("li");
      li.setAttribute("data-step", i);
      li.appendChild(document.createTextNode(i));
      if (i < ctrl.currentStep) {
        li.setAttribute("class", "is-complete");
      }
      if (i === ctrl.currentStep) {
        li.setAttribute("class", "is-active");
      }
      if (i === ctrl.totalSteps) {
        li.setAttribute("class", "progress-last");
      }
      ol.appendChild(li);
    }
  }
    
})(window.angular);