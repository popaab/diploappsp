"use strict";angular.module("diploappApp",["ngAnimate","ngMessages","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/overview.html",controller:"MainCtrl"}).when("/overview",{templateUrl:"views/overview.html",controller:"OverviewCtrl"}).when("/form",{templateUrl:"views/form.html",controller:"FormCtrl"}).when("/form/:siteID",{templateUrl:"views/form.html",controller:"FormCtrl"}).when("/site/:siteID",{templateUrl:"views/site.html",controller:"SiteCtrl"}).when('/sign', {templateUrl: 'views/sign.html',controller: 'MainCtrl'}).otherwise({redirectTo:"/"})}]),angular.module("diploappApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("diploappApp").controller("OverviewCtrl",["$scope","$http","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],$("#myTabs a").click(function(a){a.preventDefault(),$(this).tab("show")}),b.get("json/site.json").success(function(b){a.sites=b,a.whichSite=c.siteID})}]),angular.module("diploappApp").controller("FormCtrl",["$scope","$http","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.get("json/site.json").success(function(b){a.sites=b,a.whichSite=c.siteID})}]),angular.module("diploappApp").controller("SiteCtrl",["$scope","$http","$routeParams",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.get("json/site.json").success(function(b){a.sites=b,a.whichSite=c.siteID})}]);