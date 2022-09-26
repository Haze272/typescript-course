class A {
    public showInfo() {
        console.log("I'm an A-class object!");
    }
}

class B extends A {
    
}

let b: B = new B();
b.showInfo();