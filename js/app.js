angular
.module("communityApp", ["ui.router", "ngResource", "ui.bootstrap"])
.config(["$stateProvider", RouterFunction])
.factory("CommunityFactory", ["$resource", CommunityFactoryFunction])
.controller("ProductIndexController", ["CommunityFactory", ProductIndexControllerFunction])
.controller("ProductShowController", ["CommunityFactory", "$stateParams", ProductShowControllerFunction])
.controller("ProductNewController", ["CommunityFactory", "$state", ProductNewControllerFunction])
.controller("ProductEditController", ["CommunityFactory", "$state", "$stateParams", ProductEditControllerFunction])



function RouterFunction($stateProvider){
  $stateProvider.state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html"
  });
  $stateProvider.state("faq", {
    url: "/faq.html",
    templateUrl: "js/ng-views/faq.html",
  });
  $stateProvider.state("productIndex",{
    url: "/products",
    templateUrl: "js/ng-views/products/index.html",
    controller: "ProductIndexController",
    controllerAs: "vm"
  });
  $stateProvider.state("productNew", {
    url: "/products/new",
    templateUrl: "js/ng-views/products/new.html",
    controller: "ProductNewController",
    controllerAs: "vm"
  });
  $stateProvider.state("productShow", {
    url: "/products/:id",
    templateUrl: "js/ng-views/products/show.html",
    controller: "ProductShowController",
    controllerAs: "vm"
  });
  $stateProvider.state("productEdit", {
    url: "/products/:id/edit",
    templateUrl: "js/ng-views/products/edit.html",
    controller: "ProductEditController",
    controllerAs: "vm"
  })
}

function CommunityFactoryFunction($resource){
  return $resource("http://localhost:3000/products/:id", {}, {
    update: {method: "PUT"}
  })
}

function ProductIndexControllerFunction(CommunityFactory){
  this.products = CommunityFactory.query()
}

function ProductShowControllerFunction(CommunityFactory, $stateParams){
  this.product = CommunityFactory.get({id: $stateParams.id})
}

function ProductNewControllerFunction(CommunityFactory, $state){
  this.product = new CommunityFactory();
  this.create = function(){
    this.product.$save().then(response => $state.go("productIndex"))
  }
}

function ProductEditControllerFunction(CommunityFactory, $state, $stateParams){
  this.product = CommunityFactory.get({id: $stateParams.id})
  this.update = function(){
    this.product.$update({id: $stateParams.id}).then(response => $state.go("productIndex"))
  }
  this.destroy = function(){
    this.product.$delete({id: $stateParams.id}).then(response => $state.go("productIndex"))
  }
}
