/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Browseempresas.delete_empresa_execute = function (screen) {
    // Write code here.
    msls.showMessageBox('Desea Eliminar el Registro Seleccionado?', { buttons: msls.MessageBoxButtons.yesNo }).then(function (result) {
        if (result == msls.MessageBoxResult.yes) {
            screen.getEmpresas().then(function (empresas1) {
                empresas1.deleteSelected();
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
