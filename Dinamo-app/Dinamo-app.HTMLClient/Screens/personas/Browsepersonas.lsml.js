/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Browsepersonas.delete_persona_execute = function (screen) {
    // Write code here.
   
    msls.showMessageBox('Desea Eliminar el Registro Seleccionado?', { buttons: msls.MessageBoxButtons.yesNo}).then (function(result){
        if (result == msls.MessageBoxResult.yes) {
            screen.getPersonas().then(function (persona1) {
                persona1.deleteSelected();
                myapp.commitChanges().then(function success() {

                    // If success.

                    msls.showMessageBox("Operacion Exitosa", { title: "Borrado" });

                }, function fail(e) {

                    // If error occurs,

                    msls.showMessageBox(e.message, { title: e.title }).then(function () {

                        // Cancel Changes

                        myapp.cancelChanges();

                    });

                });
            
            });
        }
        else {
            msls.showMessageBox('Operacion Cancelada')
        }
     
    });
    
};

myapp.Browsepersonas.Searchpersonas_execute = function (screen) {
    // Write code here.

};