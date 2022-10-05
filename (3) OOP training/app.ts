class Triangle {
    a: number;
    b: number;
    c: number;

    constructor(_a: number, _b: number, _c: number) {
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }

    private calculateArea(): number {
        let halfPerimeter = (this.a + this.b + this.c) / 2;

        let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));

        return area;
    }

    //  Ваш метод

    public toString(): void {
        console.log(`Стороны треугольника: ${this.a} ${this.b} ${this.c},  площадь треугольника: ${this.calculateArea()}`);
    }
}

let triangle: Triangle = new Triangle(3, 4, 5);
triangle.toString();