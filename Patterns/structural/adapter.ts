class Target {
    public operation(): void {
        console.log("Target: some operation happend!");
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor (_adaptee: Adaptee) {
        this.adaptee = _adaptee;
    }
    
    //  В этом методе происходит логика адаптирования
    public operation(): void {
        let result: string = this.adaptee.foreignOperation().split("").reverse().join("");
        console.log("Adaper: some operation happend!");
    }
}

class Adaptee {
    public foreignOperation(): string {
        return "!dneppah noitarepo ngierof emos :eetpadA";
    }
}

function clientCode(target: Target): void {
    target.operation();
}

let target: Target = new Target();

clientCode(target);

let adaptee: Adaptee = new Adaptee();
let adapter: Adapter = new Adapter(adaptee);

clientCode(adapter);