"use strict";
class Triangle {
    a;
    b;
    c;
    constructor(_a, _b, _c) {
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}
let triangle = new Triangle(3, 4, 5);
console.log(triangle.getArea());
let power = (a, b) => a ** b;
