/* ------------------------------------------------------------------------------
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) Rococo Global Technologies, Inc - All Rights Reserved 2016
 * --------------------------------------------------------------------------- */
 
/*
* This file contains the backend process for the 'Register Dish' screen
* that is under the 'dishController'.
* The holds the values/properties that is common to the application.
* @author Lehmar Cabrillos
 * @version 0.01
 * Version History
 * [04/13/2016] 0.01 – Lehmar Cabrillos  – Initial codes.
 */

app.controller('dishController', function($scope) {
	console.log("bentoDish.dishController " + "start");
	
	$scope.$parent.headerName = "Register Dish";
	$scope.$parent.headerImage = "dish_icon.png";
	
	$scope.dishItem = {
			id: 0,
			name: "",
			type: "",
			price: 0
	}
	
    /**
     * Holds the array of dish type that will be used to populate the
     * 'dishItem.type' select element, and contains the image location of the 
     * selected type.
     */
	$scope.typeArray = [
		{optionValue: "mainDish" ,displayValue: "Main Dish", imageFile: "main_dish_type.png"},
		{optionValue: "sideDish" ,displayValue: "Side Dish", imageFile: "side_dish_type.png"},
		{optionValue: "soup" ,displayValue: "Soup", imageFile: "soup_type.png"}
	];
	
	/**
	 * Used to initialize the content of screen 1 ('Register Dish' screen).
	 */
	$scope.initRegisterDishScreen = function(){
		console.log("bentoDish.initRegisterDishScreen " + "start");
		$scope.dishItem.id = 0;
		$scope.dishItem.name = "";
		$scope.dishItem.type = $scope.typeArray[0];
		$scope.dishItem.price = 0;
		console.log("bentoDish.initRegisterDishScreen " + "end");
	}
	
	/**
	 * Used to validate the dish name. 
	 * Displays the error message if there exists.
	 */
	$scope.validateNameExists = function(){
		console.log("bentoDish.validateNameExists " + "start");
		// check if the name does not exists, and name is not null
		var name = $scope.dishItem.name;
		var valid = true;
		// checking if the item already exists.
		for (var counter = 0; counter < $scope.$parent.dishList.length; counter++) {
			/* TODO: check if the inputted 'dish' name matches the name of the 
			 * current 'dish' from the 'dishList' array.
			 * HINT: Use the .toLowerCase() function to ignore the type-case.*/
			if (name.toLowerCase() === $scope.$parent.dishList[counter].name.toLowerCase()) {
				alert("Name already exists. Please input another name.");
				valid = false;
				break;
			}
		}
		return valid;
		console.log("bentoDish.validateNameExists " + "end");
	}
	
	/**
	 * Use to display the dishes in the list.
	 */
	$scope.displayAllDishes = function(){
		console.log("bentoDish.displayAllDishes " + "start");
		for (var counter = 0; counter < $scope.$parent.dishList.length; counter++) {
			console.log($scope.$parent.dishList[counter]);
		}
		console.log("bentoDish.displayAllDishes " + "end");
	}
	
	/**
	 * Used to insert dish to the 'dishList' array. 
	 */
	$scope.registerDish = function(){
		console.log("bentoDish.registerDish " + "start");
		// ask the user if he/she wants to proceed to inserting the 'dish'
		var confirmation = window.confirm("Are you sure you want to insert dish?");
		if (true == confirmation) {
			// check if inputs are valid
			/* TODO: Check if the name exists in the 'dishList' array
			 * Use the validateNameExists() function.*/
			if ($scope.validateNameExists() == true) {
				/* TODO: Create the 'dish' item to be inserted.
				 * Supply other properties.
				*/
				var dish = {
						id: $scope.$parent.dishList.length,
						name: $scope.dishItem.name,
						type: $scope.dishItem.type.displayValue,
						price: $scope.dishItem.price
				};
			
				/*TODO: Insert the 'dish' item that was created above
				 * into the 'dishList' array. */
				$scope.$parent.dishList.push(dish);
				alert("Inserting Dish was successful.")
				
				// initializing the contents of the ingredient screen.
				$scope.initRegisterDishScreen();
				$scope.displayAllDishes();
			}
		}
		console.log("bentoDish.registerDish " + "end");
	}
	
	/** ------------------------------------------------------
	 * Initial Call of the functions.
	 */
	$scope.initRegisterDishScreen();
});