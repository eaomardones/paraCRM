/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Viewvendedor.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.vendedor.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.vendedor." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

