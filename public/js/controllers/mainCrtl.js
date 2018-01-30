angular
    .module('HTOS-app',[])

    .controller('MainController', ['$scope', MainController]);

function MainController($scope) {

    let vm = this;
    // Set active tab
    $scope.$on("$routeChangeSuccess", function(event, current, previous) {
        if(current.$$route) {
            $scope.activeTab = current.$$route.activeTab;
        }
    });

 }