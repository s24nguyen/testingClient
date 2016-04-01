'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HeaderCtrl', function ($scope, $http, $cookieStore, $location) {

    $scope.user = $cookieStore.get('user');
    console.log($scope.user);

    $scope.logout = function () {
      console.log(arguments);
      $http.get('/api/logout?id=' + $scope.user.id, null).success(logoutSuccess).error(logoutSuccess);
    }

    var logoutSuccess = function (data, status) {
      $http.defaults.headers.common['X-AUTH-TOKEN'] = '';
      $cookieStore.remove('user');
      $scope.user = null;
      $location.path("")
    }



    $scope.err = false;

    $scope.login = function () {
      $http.post('/api/header', $scope.authInfo).success(loginSuccess).error(loginFailure);
    }

    var loginSuccess = function(data, status){
      $cookieStore.put('user', data);
      $http.defaults.headers.common['X-AUTH-TOKEN'] = data.token;
      $location.path("playerprofile");
    }

    var loginFailure = function(data, status){
      $scope.err = true;
    }
    $('#login-modal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  });
