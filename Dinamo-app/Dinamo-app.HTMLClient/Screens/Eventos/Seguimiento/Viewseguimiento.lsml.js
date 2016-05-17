/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Viewseguimiento.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.seguimiento.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.seguimiento." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

