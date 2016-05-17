/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Viewpersona.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.persona.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.persona." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.Viewpersona.Delete_persona_execute = function (screen) {
    // Write code here.
    screen.getPersona().then(function (persona) {
        persona.deleteSelected();

    })
};