'use strict';

angular.module('confusionApp')
		.constant('baseUrl', 'http://localhost:3000/')
        .service('menuFactory', ['$resource', 'baseUrl',function($resource, baseUrl) {
    
                this.getDishes = function(){
                    
                    return $resource(baseUrl+"dishes/:id",null,{'update':{method:'PUT'}});
                    
                };
    
                this.getPromotion = function(){
                	return $resource(baseUrl+"promotions/:id",null);
                };
        }])

        .factory('corporateFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {
    
    		var getLeaders = function () {
    			return $resource(baseUrl+"leadership/:id",null);
    		};

    		return {
    			getLeaders: getLeaders
    		};
        }])
        .factory('feedbackFactory', ['$resource', 'baseUrl', function($resource, baseUrl){

    		var getFeedback = function () {
    			return $resource(baseUrl+"feedback/:id",null,{'create':{method:'POST'}});
    		};

    		return{
    			getFeedback: getFeedback
    		};
        }])
;
