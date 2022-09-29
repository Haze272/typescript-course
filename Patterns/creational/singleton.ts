class Singleton {
    static instance: Singleton;
    variable: number;

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    private constructor() {
        this.variable = 1;
    }

    public increment() {
        this.variable++;
    }
}

let singleton: Singleton = Singleton.getInstance();
singleton.increment();
console.log(singleton.variable);

let singleton2: Singleton = Singleton.getInstance();
console.log(singleton2.variable);