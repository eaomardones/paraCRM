/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCliente.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Cliente.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Cliente." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

