(function(){
    /**
    *  Module
    *
    * Description
    */
    angular.module('gemStore')
    .controller('SignupMainController',['$scope', 'registroService',
        function($scope,registroService){

            $scope.form=""; 
            $scope.showErrors=false;               
            $scope.validate = function(model,icon,error)
            { 
                console.log("validando");

                if(!$scope.showErrors)
                {    
                    if(model.$untouched)
                    {
                        return "";
                    }    
                }    
              
                if(model==$scope.form.email)
                {

                   if(!$scope.form.email.$error.required)
                   {
                     $scope.form.telefono.$setValidity("required", true);

                    
                   }   
                }  
                if(model==$scope.form.telefono)
                {

                   if(!$scope.form.telefono.$error.required)
                   {
                    $scope.form.email.$setValidity("required", true);
                   }   
                }  
           

                if(icon!=undefined)
                {
                          if(model.$invalid)
                            {
                                
                                return "glyphicon glyphicon-remove form-control-feedback";   
                                
                            }
                            else
                            {

                                return "glyphicon glyphicon-ok form-control-feedback";               
                            
                            }

                }
                else{ 
                        if(model.$invalid)
                        {
                            
                            return "form-group has-error has-feedback";   
                            
                        }
                        else
                        {

                            
                            return "form-group has-success has-feedback";               
                        
                        }
                    }
                  
             };                

            $scope.changeView  = function (view,form){
                                    if(form != undefined)
                                    {    
                                        if(form.$valid){
                                        registroService.changeView(view);

                                        }
                                        else
                                        {
                                            $scope.showErrors=true;
                                        }   
                                    }else{
                                        registroService.changeView(view);
                                    }

                                };

            $scope.usuario      = registroService.getUsuario();
            $scope.usuarioRedes = registroService.getUsuarioRedes();
            $scope.getRedById = function(id)
                                {
                                    var longitud=0;
                                    if($scope.redes)
                                    {
                                        longitud=$scope.redes.length;
                                    }
                                    var i;
                                    for(i=0;i<longitud;i++)
                                    {
                                        if($scope.redes[i].id==id)
                                            return $scope.redes[i];
                                    }
                                    return -1;
                                };
            $scope.save = function(user) {
                
                user.$save()
                .then(function(user){
               
                }).catch(function(errors){
                    console.log("Errores retornado por el POST de agregar usuario",errors);
                }).finally(function(){
                    $scope.isSubmitting = false;
                    registroService.changeView('user/'+user.id);
                });

                scope = {}
        };
    }]);
})();