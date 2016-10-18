(function(){
'use strict';
angular.module('NameCalculator',[])

.controller('NameCalculatorController',f unction ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);//get the total value
    $scope.totalValue = totalNameValue;

  };

});
  function calculatNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt( i);
      }

    return totalStringValue;
  }

})();
