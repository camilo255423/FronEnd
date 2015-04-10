(function(){
	angular.module('gemStore')
	.service('registroService', ['$resource', '$location',function($resource,$location) {
		var usuario = {nombres:"",
						apellido1:"",
						apellido2:"",
						numero_documento:"",
						correo:"", 
						nombre_institucion: "", 
					    telefono_institucion: "", 
					    ubicacion_institucion: "", 
					    direccion_institucion: "", 
					    correo_institucion: "", 
					    NIT: "", 
					    rol: 1, 


					};
		var usuarioredes = new Array();
        var changeView = function(view){
			$location.path(view);
		};
		  var getUsuario = function(){
		      return usuario;
		  }
		  var getUsuarioRedes = function(){
		      return usuarioredes;
		  }
		  
	  return {
	    changeView: changeView,
	    getUsuario: getUsuario,
	    getUsuarioRedes: getUsuarioRedes
	  };

	}]);
})();