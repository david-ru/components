(function (angular) {
  'use strict';

  angular.module('progressBarSteps', [])
    .component('progressBarSteps', {
      templateUrl: 'components/commons/progress-bar-steps/progress-bar-steps.html',
      controller: ProgressBarStepsController,
      bindings: {
        totalSteps: '<',
        currentStep: '<',
        stepsNames: '<',
        sizeClass: '@'
      }
    })

  function ProgressBarStepsController () {
    var ctrl = this;

    var ol = document.getElementById("progressBarSteps");
    var estilos = "progress-bar-steps";
    if (ctrl.sizeClass) {
      estilos = estilos + " " + ctrl.sizeClass;
    }
    ol.setAttribute("class", estilos);
    for (var i=1; i<=ctrl.totalSteps; i++) {
      var li = document.createElement("li");
      //li.setAttribute("data-step", i); //Información para dentro del paso
      //li.appendChild(document.createTextNode(i)); //Información para debajo del paso

      li.appendChild(document.createTextNode(ctrl.stepsNames[i-1]));

      if (i < ctrl.currentStep) {
        li.setAttribute("class", "is-complete");
      }
      if (i === ctrl.currentStep) {
        li.setAttribute("class", "is-active");
      }
      if (i === ctrl.totalSteps) {
        li.setAttribute("class", "progress-bar-steps-last");
      }
      if (i === ctrl.currentStep && i === ctrl.totalSteps) {
        li.setAttribute("class", "is-active progress-bar-steps-last");
      }

      ol.appendChild(li);
    }
  }
    
})(window.angular);
