/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Viewresponsable.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.responsable.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.responsable." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

