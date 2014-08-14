/**
 * test
 */
'use strict';


define([
		'angular',
		'route-config'
	],
	
	function (angular, routeConfig) {
		

		//var mainApp = angular.module('mainApp', []);
		var app = angular.module('mainApp', ['ngRoute'], function($controllerProvider){
			routeConfig.setControllerProvider($controllerProvider); //for controllers
		});
		
		/*

		app.config(['$routeProvider',
	                  function($routeProvider) {
	                    $routeProvider.
	                      when('/view1', {
	                        templateUrl: 'partials/selfevaldoc/selfevaldocouln.html',
	                        controller: 'controllers/selfevaldoc/selfevaldocouln'
	                    });
	                    
	                }]);
		
		*/
		
	
		app.controller('mainController', function ($scope) {
			$scope.test= '111111111111';
			
			
			
		});
		/*
		mainApp.controller('SelfEvalDocOulnCtrl', function($scope){
			$scope.abcd = 'test message';
		});
		
		*/
		return app;		 
	}

);

