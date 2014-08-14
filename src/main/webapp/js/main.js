/**
 * main.js
 */
'use strict';

requirejs.config({
	
	baseUrl: 'js',
	
	paths:{
		jquery: '../lib/jquery/jquery.min',
		angular: '../lib/angular/angular',
		angularRoute: '../lib/angular/angular-route'
			
	},
	
	shim:{
		angular:{
			deps:['jquery'],  // dependencies
			exports:'angular' // export
		},
		angularRoute:{
			deps:['angular'],  // dependencies
			exports:'angularRoute' // export
		}
	}	

});

require([
	'angular',
	'angularRoute',
	'app',
	'routes'
	],
	
	function(angular, angularRoute, app, routes) {
	
		//페이지가 완전히 로드된 뒤에 실행
		$(document).ready(function () {		
			// angularjs 수동 실행, html에 ng-app이 사용되지 않음
			angular.bootstrap(document, ['mainApp']);
			

		});
	
	}
);
