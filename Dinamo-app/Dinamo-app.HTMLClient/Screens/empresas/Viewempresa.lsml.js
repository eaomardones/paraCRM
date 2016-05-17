/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Viewempresa.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.empresa.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.empresa." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

