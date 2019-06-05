var app = angular.module('principalmodule', []);

app.controller('Saludos', function($scope, $http) {

    $http.post('/users/Saludos', {
    }).then(function (response) {

        console.log(JSON.stringify(response));
        $scope.Nombre = response.data.Nombre;
        $scope.Id = response.data.Id;
    });

});
