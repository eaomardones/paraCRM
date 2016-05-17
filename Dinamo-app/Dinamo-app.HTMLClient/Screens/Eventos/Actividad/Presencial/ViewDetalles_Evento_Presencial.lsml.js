/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewDetalles_Evento_Presencial.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Detalles_Evento_Presencial.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Detalles_Evento_Presencial." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

