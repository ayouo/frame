'use strict';

define([], 
	function() {

		var $controllerProvider; //컨트롤러 프로바이더를 받을 변수
	
		//컨트롤러 프로바이더 설정 함수
		function setControllerProvider(value) {
			$controllerProvider = value;
		}
		
		function config(template, controllerPath) {
			var html, routeDefinition = {};
			html = template;
			routeDefinition.template = function () {
				return html;
			};
			routeDefinition.controller = controllerPath.substring(controllerPath.lastIndexOf("/") + 1);

			routeDefinition.resolve = {
				delay: function ($q, $rootScope) {
					var defer = $q.defer();
					
					$controllerProvider.register(controllerPath.substring(controllerPath.lastIndexOf("/") + 1), controllerPath);
					
					defer.resolve();
					$rootScope.$apply();
					
					return defer.promise;
				}
			};
			
			
			//$q.defer.resolve();
			//$rootScope.$apply();
			
			return routeDefinition;
			
		}; // end of return function
		
		return {
			setControllerProvider: setControllerProvider,
			config: config
		};
	}
);