class World {
    name : string;

    constructor(_name: string){
          
        this.name = _name;
    }
}

const ourWorld: World = new World("Мир");
const header = this.document.getElementById("header");
header.innerHTML = "Привет, " + ourWorld.name;