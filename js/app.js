angular
.module("communityApp", ["ui.router", "ngResource", "ui.bootstrap"])
.config(["$stateProvider", RouterFunction])
.factory("CommunityFactory", ["$resource", CommunityFactoryFunction])
.controller("IndexController", ["CommunityFactory", IndexControllerFunction])



function RouterFunction($stateProvider){
  console.log("log: router function works")
  $stateProvider.state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html"
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
    // controller: "ShowController",
    // controllerAs: "vm"
  });
  $stateProvider.state("new", {
    url: "/new.html",
    templateUrl: "js/ng-views/new.html",
    // controller: "NewController",
    // controllerAs: "vm"
  })
  $stateProvider.state("faq", {
    url: "/faq.html",
    templateUrl: "js/ng-views/faq.html",
  })
}

function CommunityFactoryFunction($resource){
  return $resource("http://localhost:3000/products/:id");
}

function IndexControllerFunction(CommunityFactory){
  this.products = CommunityFactory.query()
}
