'use strict';

var htmlcoinApp = angular.module('htmlcoinApp', ['ngRoute', 'LocalStorageModule', 'htmlcoinControllers']);
htmlcoinApp.config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider',
	function ($routeProvider, $locationProvider, localStorageServiceProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl'
	});
	localStorageServiceProvider.setPrefix('htmlcoinApp');
	$locationProvider.html5Mode(false).hashPrefix('!');
}])
.run(function($rootScope,$location)
		{    
	$rootScope.selectedBg = 'home';
	$rootScope.location=$location.path();
	if (localStorage.getItem('lang') == null) {
		localStorage.setItem('lang', JSON.stringify(langArr[defaultLang]));
	}
	$rootScope.Lang = Lang;
	$rootScope.langArr = langArr;
	$rootScope.activeLang = JSON.parse(localStorage.getItem('lang'));
	$rootScope.initLangs = function () {
		var headerLangs = {};
		var headerLang;
		for (headerLang in langArr) {
			if (langArr[headerLang].name != $rootScope.activeLang.name) {
				headerLangs[headerLang] = langArr[headerLang];
			}
		}
		$rootScope.headerLangs = headerLangs;
	}
	$rootScope.switchLang = function (lang) {
		localStorage.setItem('lang', JSON.stringify(langArr[lang]));
		$rootScope.activeLang = JSON.parse(localStorage.getItem('lang'));
		$rootScope.initLangs();
	};
	$rootScope.initLangs();
	$rootScope.notify = function (msg, type) {
		var icon = '';
		if (type == 'success') {
			icon = '<span class="glyphicon glyphicon-ok-circle"></span>';
		} else if (type == 'danger') {
			icon = '<span class="glyphicon glyphicon-remove-circle"></span>';
		} else if (type == 'warning') {
			icon = '<span class="glyphicon glyphicon-warning-sign"></span>';
		} else {
			icon = '';
		}
		$.notify(icon + '&nbsp;' + msg, {
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOut'
			},
			placement: {
				from: "top",
				align: "center"
			},
			z_index: 999999,
			type: type
		});
	}
});
