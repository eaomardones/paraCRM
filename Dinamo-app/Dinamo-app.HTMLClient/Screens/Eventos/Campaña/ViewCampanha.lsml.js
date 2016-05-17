/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCampanha.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Campanha.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Campanha." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

