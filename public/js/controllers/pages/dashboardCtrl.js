angular
    .module('HTOS-app', [])
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $http, $location, $timeout, $localStorage) {

    let vm = this;

    vm.heroes = null;

    $(function(){

        $timeout(function() {

            $http.get('/https://api.hotslogs.com/Public/Data/Heroes').success(function(resp) {

                vm.heroes = resp;
                console.log(resp);



            }).error(function(err){
                if(err){
                    console.log("err"+ err);
                }
            });

        });

    });


}