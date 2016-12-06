angular
.module("communityApp", ["ui.router", "ngResource", "ui.bootstrap", "truncate", "ngTagsInput"])
.config(["$stateProvider", RouterFunction])
.factory("CommunityFactory", ["$resource", CommunityFactoryFunction])
.factory("CommentFactory", ["$resource", CommentFactoryFunction])
.controller("ProductIndexController", ["CommunityFactory", ProductIndexControllerFunction])
.controller("ProductShowController", ["CommunityFactory","CommentFactory", "$stateParams", "$state", ProductShowControllerFunction])
.controller("ProductNewController", ["CommunityFactory", "$state", ProductNewControllerFunction])
.controller('MainCtrl', function($scope, $http){
  $scope.tags = [
    {text: 'Tag1'},
    {text: 'Tag2'},
    {text: 'Tag3'}
  ];
});


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
  })

}

function CommunityFactoryFunction($resource){
  return $resource("http://localhost:3000/products/:id", {}, {
    update: {method: "PUT"}
  })
}

function CommentFactoryFunction($resource) {
  return $resource("http://localhost:3000/products/:product_id/comments/:id", {}, {
    update: {method: "PUT"}
  })
}

function ProductIndexControllerFunction(CommunityFactory){
  this.products = CommunityFactory.query()
}

function ProductShowControllerFunction(CommunityFactory, CommentFactory, $stateParams, $state){
  this.product = CommunityFactory.get({id: $stateParams.id})
  this.comment = new CommentFactory()

  this.update = function(){
    this.product.$update({id: $stateParams.id}).then((response) => {
      this.product = response
    })
  }

  this.destroy = function(){
    this.product.$delete({id: $stateParams.id}).then(response => $state.go("productIndex"))
  }

  this.addComment = function(){
    this.comment.$save({product_id: $stateParams.id}).then((response) => {
      this.product.comments = response.comments
    })
  }

  this.removeComment = function(id){
    console.log(id)
    this.comment.$delete({product_id: $stateParams.id, id: id}).then(console.log("delete comment"))
  }

  this.addVote = function(){
    this.product.votes += 1;
    this.product.$update({id: $stateParams.id}).then((response) => {
      this.product = response
    })
  }
}

function ProductNewControllerFunction(CommunityFactory, $state){
  this.product = new CommunityFactory();
  this.create = function(){
    this.product.$save().then(response => $state.go("productIndex"))
  }
}
