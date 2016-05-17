/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewVendedorCliente.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.VendedorCliente.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.VendedorCliente." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

