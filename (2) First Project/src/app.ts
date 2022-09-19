class Monkey {
    protected _chromosomeNumber: number = 48;
    public weight: number;
    public height: number;
    
    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }

    get chromosomeNumber(): number {
        return this._chromosomeNumber;
    }
}

class Human extends Monkey {
    protected _chromosomeNumber: number = 46;
    public name: string;

    constructor(weight: number, height: number, name: string) {
        super(weight, height);
        this.name = name;
    }

    public saySelfName(): void {
        console.log(`My name is ${this.name}!`);
    }
}

let concreteHuman: Human = new Human(70, 170, "Ivan");
concreteHuman.saySelfName();