angular.module('mean.system').controller('IndexController', ['$scope', '$location', '$rootScope', '$http', 'Global', function ($scope, $location, $rootScope, $http, Global) {
    $scope.global = Global;
  //    console.log($scope.userprofile);
  // $scope.getLinkedInData = function() {
  //               if(!$scope.hasOwnProperty("userprofile"))
  //               {
  //                       IN.API.Profile("me")
                //         .fields([ "id", "firstName", "lastName", "pictureUrl", "publicProfileUrl" ])
                //         .result(function(result) 
                //         {
                //             console.log($scope.userprofile);
                //        // set the model
                //                 $rootScope.$apply(function() 
                //                 {
                //                         var userprofile =result.values[0];
                //                         $rootScope.userprofile = userprofile;
                //                         $rootScope.loggedUser = true;
                //        //go to main
                //                         $location.path("/main");
                //                 })
                //        .error(function(err) 
                //             {
                //                 $scope.error = err;
                //             })
                //         });
                //      }
                // };

    $scope.list1 = 
    [
        {name: 'AngularJS', reject: true},
        {name: 'Is'},
        {name: 'teh'},
        {name: '@wesome'}
    ];
  
    $scope.list2 = [];
}]);