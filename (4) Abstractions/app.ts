abstract class Person {
    protected name: string = "Ivan";
    protected surname: string;
    protected age: number;

    constructor(
        _name: string,
        _surname: string,
        _age: number
        ) {
            this.name = _name;
            this.surname = _surname;
            this.age = _age;
        }
}


class Customer extends Person {
    public phoneNumber: string;
    public email: string;

    constructor(
        _name: string,
        _surname: string,
        _age: number,
        _phoneNumber: string,
        _email: string
        ) {
        super(_name, _surname, _age);

        this.phoneNumber = _phoneNumber;
        this.email = _email;
    }

    public makeOrder(): void {
        console.log("I wanna create order!");
    }

    public cancelOrder(): void {
        console.log("I wanna cancel order!");
    }
}


class Employee extends Person {
    private salary: number;
    private customers: Customer[];

    constructor(
        _name: string,
        _surname: string,
        _age: number,
        _salary: number
    ) {
        super(_name, _surname, _age);

        this.salary = _salary;
        this.customers = [];
    }

    public addCustomer(customer: Customer) {
        this.customers.push(customer);
    }
}