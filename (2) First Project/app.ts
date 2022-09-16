class Triangle {
    a: number;
    b: number;
    c: number;

    constructor(_a: number, _b: number, _c: number) {
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }

    getArea(): number {
        let p: number = (this.a + this.b + this.c) / 2;

        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

let triangle: Triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea());