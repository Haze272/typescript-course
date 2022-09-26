class Cat {
    name: string;

    constructor(catName: string) {
        this.name = catName;
    }
}

let concreteCat: Cat = new Cat("Barsik");
console.log(concreteCat.name);