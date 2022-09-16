var World = /** @class */ (function () {
    function World(_name) {
        this.name = _name;
    }
    return World;
}());
var ourWorld = new World("Мир");
var header = this.document.getElementById("header");
header.innerHTML = "Привет, " + ourWorld.name;
