

/**
 * @ngdoc directive
 * @name myApp.directive:rAutogrow
 * @element textarea
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * **Note:** ie<9 needs polyfill for window.getComputedStyle
 *
 * @example
   <example module="myApp">
     <file name="index.html">
        <r-autogrow></r-autogrow>
     </file>
   </example>
 */
 

var myApp = angular.module('myApp', []);

myApp.directive('rAutogrow', function() {
  return {
			restrict: 'AEC',		
			template : "<div>pankaj</div>",
			link : function(scope,attr,ele,ctrl){
				//alert(0)
				
				/**
				 * @ngdoc function
				 * @name rAutogrow.mySuperFunction
				 *
				 * @param {event} event Receive the emitted event
				 * Updates the contact information
				 *
				 * @return {method} ContactService returns the updateContact method and a promise
				 */

		 function mySuperFunction() {
			var i = 5;
			var j = 5;
			i += j;
			return i;
		 } 
		 
		 /**
				 * @ngdoc function
				 * @name rAutogrow.abc
				 *
				 * @param {event} event Receive the emitted event
				 * @param {int} a Receive the emitted event
				 * @param {string} g Receive the emitted event
				 * Updates the contact information
				 *
				 * @return {method} ContactService returns the updateContact method and a promise
				 */

		 function abc() {
			var i = 5;
			var j = 5;
			i += j;
			return i;
		 } 
		 
		 
		 /**
				 * @ngdoc function
				 * @name rAutogrow.xyz
				 *
				 * @param {number} event Receive the emitted event
				  * @param {object} event Receive the emitted event
				 * Updates the contact information
				 *
				 * @return {method} ContactService returns the updateContact method and a promise
				 */

		 function xyz() {
			var i = 5;
			var j = 5;
			i += j;
			return i;
		 } 
		 
		 
		 
		 
		 
		 
		 
		 
		 
 
			}
  };
});

/**
  * @ngdoc overview
  * @ngdoc controller
  * @name myApp.maincontroller:controller
  * @description
  *
  * # myApp
  * The factoryName is my favorite service in the world.
  *
  */
myApp.controller("MainController", function($scope) {
				/**
				 * @ngdoc function
				 * @name MainController.xyz
				 *
				 * @param {number} event Receive the emitted event
				  * @param {object} event Receive the emitted event
				 * Updates the contact information
				 *
				 * @return {method} ContactService returns the updateContact method and a promise
				 */

		 function xyz() {
			var i = 5;
			var j = 5;
			i += j;
			return i;
		 } 
   });
