angular
.module("communityApp", ["ui.router", "ngResource", "ui.bootstrap"])
.config(["$stateProvider", RouterFunction])
.factory("CommunityFactory", ["$resource", CommunityFactoryFunction])
.controller("IndexController", ["CommunityFactory", IndexControllerFunction])

function CommunityFactoryFunction($resource){
  return $resource( "http://localhost:8080/");
}

function RouterFunction($stateProvider){
  console.log("log: router function works")
  $stateProvider.state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html",
    controller: "IndexController",
    controllerAs: "vm"
  });
  $stateProvider.state("listing",{
    url: "/listing.html",
    templateUrl: "js/ng-views/listing.html",
    controller: "IndexController",
    controllerAs: "vm"
  });
  $stateProvider.state("show", {
    url: "/show.html",
    templateUrl: "js/ng-views/show.html",
    controller: "IndexController",
    controllerAs: "vm"
  });
  $stateProvider.state("faq", {
    url: "/faq.html",
    templateUrl: "js/ng-views/faq.html",
    controller: "IndexController",
    controllerAs: "vm"
  })
}
//
function IndexControllerFunction(CommunityFactory){
  console.log("log: index controller works")
}
