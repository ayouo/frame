'use strict';

define([
        'angular',
        'angular-route',
		'app' 		
	],

	function (angular, ang, app) {
		
		return app.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/selfevaldocouln', {
				templateUrl: 'partials/selfevaldoc/selfevaldocouln',
				controller: 'controllers/selfevaldoc/selfevaldocouln'					
			});
		}]);
		
	}
);
