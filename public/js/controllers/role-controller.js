(function(){
	angular.module('gemStore')
	.controller('RoleController', ['$scope', function($scope){
		$scope.titulo = "Pagina Principal Controller";
		$scope.roles = [
		    {src: './images/RegistroRolComerciante.png', des: 'Imagen 01'},
		    {src: './images/RegistroRolEmpresario.png',  des: 'Imagen 02'},
		    {src: './images/RegistroRolInstitucion.png', des: 'Imagen 03'},
		    {src: './images/RegistroRolUniversidad.png', des: 'Imagen 04'},
		    {src: './images/RegistroRolUniversidad.png', des: 'Imagen 04'},
		    {src: './images/RegistroRolUniversidad.png', des: 'Imagen 04'}
		];
	}]);
})();