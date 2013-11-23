'use strict';

angular.module('mean')
  .directive('draggable', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.draggable({
        	revert:true
        });
    }
    };
  });
