/**
 * main.js
 */
'use strict';

requirejs.config({
	
	baseUrl: 'js',
	
	paths:{
		'jquery': '../lib/jquery/jquery.min',
		'angular': '../lib/angular/angular',
		'library': '../lib',
		'angular-route': '../lib/angular/angular-route'
			
	},
	
	shim:{
		'angular':{
			deps:['jquery'],  // dependencies
			exports:'angular' // export
		},
		'angular-route':{
			deps:['jquery'],  // dependencies
			exports:'angular-route' // export
		}
	}	

});

requirejs([
	'jquery', 
	'angular',
	'angular-route',
	'app',
	'routes'],
	
	function($, angular, app) {
	
		//페이지가 완전히 로드된 뒤에 실행
		$(document).ready(function () {			
			angular.bootstrap(document, ['mainApp']);
			
		});
	
	}
);
