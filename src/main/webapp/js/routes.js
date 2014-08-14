'use strict';

define(['app', 'route-config'],
	function (app, routeConfig) {
		
		return app.config(['$routeProvider', 
			                  function($routeProvider) {
			
			
			/*
			 * routeProvider.when(path, route);
			 * route = Object
			 * route.controller = {string|function()}
			 * route.controllerAs = {string} : controller alias name
			 * route.template = {string|functiion()} : html
			 * route.templateUrl = {string|function()} html path
			 * route.resolve = {object<string, function>
			 * 
			 */
			//alert(app);
			//alert(angularRoute);
			//var r = {};
			//r.template = 'partials/selfevaldoc/selfevaldocouln.html';
			//r.controller = 'controllers/selfevaldoc/selfevaldocouln';
			//$routeProvider.when('/view1', r);
			
            $routeProvider.when('/view1', routeConfig.config('partials/selfevaldoc/selfevaldocouln.html', 'controllers/selfevaldoc/selfevaldocouln'));
            
           
            
        }]);
		
		
		
	}
);
