(function() {
    //this module depends on
    // 'store-products' module
    // 'ngRoute'
  angular.module('gemStore')
  //how to use this with directives?
  .config(['$routeProvider',function($routeProvider) {
    // debugger;
    $routeProvider.
    when('/home',
      {
        templateUrl: 'templates/home/mainPage.html',
        controller: 'MainPageController'
      }).
      when('/signup',
      {
        templateUrl: 'templates/signup/signup-main.html',
        controller: 'SignupIndexController'
      }).
      when('/roles',
      {
        templateUrl: 'templates/signup/roles.html',
        controller: 'RoleController'
      }).
      when('/roleDescription',
      {
        templateUrl: 'templates/signup/role-description.html',
        controller: 'RoleDescriptionController'
      }).
      when('/user',
      {
        templateUrl: 'templates/user/user.html',
        controller: 'UserController'
      }).
       when('/personalData',
      {
        templateUrl: 'templates/signup/personal-data.html',
        controller: 'SignupMainController'
      }).
       when('/businessData',
      {
        templateUrl: 'templates/signup/business-data.html',
        controller: 'SignupMainController'
      }).
         when('/profileSummary',
      {
        templateUrl: 'templates/signup/profile-summary.html',
        controller: 'SignupMainController'
      }).
      when('/search',
      {
        templateUrl: 'templates/search/search.html',
        controller: 'SearchController'
      }).
      when('/user_admin',
      {
        templateUrl: 'templates/administracion-usuario/user_admin.html',
        controller: 'UserAdminController'
      }).
      when('/user/:id/problems',
      {
        templateUrl: 'templates/problems/show.html',
        controller: 'ProblemsShowController'
      }).
      when('/usuarios/:id/edit',
      {
        templateUrl: 'templates/administracion-usuario/index.html',
        controller: 'ProblemsIndexController'
      }).

      // usuarios/(?P<usuario>[0-9]+)/problemas_soluciones
      // when('/socialNetworks/:idusuario', {
      // when('/socialNetworks', {
      // controller: 'socialNetworksController',
      // templateUrl: 'templates/signup/user-social-networks.html'
      // }).
      when('/index',
      {
        templateUrl: 'templates/index.html',
      }).
      when('/unal',
      {
        templateUrl: 'templates/unal.html',
      }).
      otherwise({
        redirectTo:'/signup'
      });
  }]);
})();

