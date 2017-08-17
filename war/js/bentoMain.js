/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
 
/*
* This file contains the backend process for the web page.
* The holds the values/properties that is common to the application.
* @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/13/2016] 0.01 – Lehmar Cabrillos  – Initial codes.
 */

/**
 * The angular module object.
 * @param bentoApp - the application name (refer to the 'ng-app' directive)
 */
var app = angular.module('bentoApp', ['ngRoute']);



/**
* Sets the routing of the screen and controller depending on the url that
* is accessed.
**/
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/registerDishScreen', {
        templateUrl: '/html/templates/bentoDish.html',
        controller: 'dishController'
      })
      .when('/customizeBentoScreen', {
        templateUrl: '/html/templates/bentoCustomize.html',
        controller: 'bentoController'
      })
	  .when('/bentoMenuScreen', {
        templateUrl: '/html/templates/bentoMenu.html',
        controller: 'menuController'
      })
      .otherwise({
        templateUrl: '../html/templates/bentoDish.html',
        controller: 'dishController'
      });
  }]);


/**
 * This controller serves as the holder for the all the other controllers
 * defined in the application.
 * Setting the properties, and methods of the angular controller.
 * The properties and methods inside this controller can be accessed using the '$parent'.
 * @param bentoMainController - the controller name 
 * 			(refer to the 'ng-controller' directive)
 * @param function() - the services that will be used in this controller.
 */
app.controller('bentoMainController', function($scope) {
	console.log("bentoMain.bentoMainController " + "start");
	/**
	 * These serves as the global variables that can be accessed by the
	 * sub-controllers (dishController, bentoController, and menuController)
	 * using the $scope.$parent syntax.
	 */
	/**
	 * Holds the display name for the header.
	 */
	$scope.headerName = "Register Dish";
	/**
	 * Holds the name of the image that will be used as the header image.
	 */
	$scope.headerImage = "dish_icon.png";
	/**
	 * This will hold the list of 'dish' that are stored statically.
	 */
	$scope.dishList = [];
	
});
