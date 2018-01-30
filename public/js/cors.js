angular
	.module('HTOS',[
		'ngRoute',
		'ngStorage',
		'restangular',
		])

	.configure(configure);


	configure.$inject = ['$routeProvider','RestangularProvider', '$mdThemingProvider'];


	function configure($routeProvider, $RestangularProvider, $mdThemingProvider){
		$routeProvider
			.when('/dashboard',{
				templateUrl : 'index.html',
				controller : 'DashboardController',
				controllerAs : 'dashboard'
			})
			.otherwise({
				redirectTo:'/dashboard'
			})


		RestangularProvider.setBaseUrl('')
	}