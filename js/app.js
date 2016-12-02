angular
.module("communityApp", ["ui.router", "ngResource", "ui.bootstrap"])
.config(["$stateProvider", RouterFunction])
.controller("indexController", [IndexControllerFunction])

function RouterFunction($stateProvider){
  console.log("routerfunction")
  $stateProvider.state("welcome", {
    url: "/",
    templateUrl: "js/ng-views/welcome.html",
    controller: "indexController",
    controllerAs: "vm"
  });
}
//
function IndexControllerFunction(){
  console.log("indexController working")
}
