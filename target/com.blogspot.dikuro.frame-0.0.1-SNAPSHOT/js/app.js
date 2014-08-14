/**
 * 
 */
'use strict';


define([
		'angular'
	],
	
	function (angular) {

		var mainApp = angular.module('mainApp', []);
		
		mainApp.controller('mainController', function ($scope) {
			alert('call mainController');
		});
		
		return mainApp;		 
	}

);

