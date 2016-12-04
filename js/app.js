angular
.module("communityApp", ["ui.router", "ngResource", "ui.bootstrap"])
.config(["$stateProvider", RouterFunction])
.factory("CommunityFactory", ["$resource", CommunityFactoryFunction])
.controller("IndexController", ["CommunityFactory", IndexControllerFunction])
.controller("ShowController", ["CommunityFactory", "$stateParams", ShowControllerFunction])



function RouterFunction($stateProvider){
  console.log("log: router function works")
  $stateProvider.state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html"
  });
  $stateProvider.state("productIndex",{
    url: "/products",
    templateUrl: "js/ng-views/products/index.html",
    controller: "IndexController",
    controllerAs: "vm"
  });
  $stateProvider.state("productShow", {
    url: "/products/:id",
    templateUrl: "js/ng-views/products/show.html",
    controller: "ShowController",
    controllerAs: "vm"
  });
  $stateProvider.state("productNew", {
    url: "products/new",
    templateUrl: "js/ng-views/products/new.html",
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

function ShowControllerFunction(CommunityFactory, $stateParams){
  this.product = CommunityFactory.get({id: $stateParams.id})
  console.log(this.products)
}
