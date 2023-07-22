abstract class Shape { // We cannot create an instance of an abstract class.
    constructor(public color: string) {}

    displayColor(): void { // Abstract class can have a normal method. Abstract classes can have method implementation
        console.log(this.color);
    }

    abstract render(): void
}

class Circle extends Shape { // The class which extends the abstract class must define all the abstract methods.
    constructor(public radius: number, color: string) {
        super(color);
    }

    render(): void {
        console.log(`Rendering Circle with radius ${this.radius} and color ${this.color}`);
    }
}

const circle_1 = new Circle(1.2, 'Red');
circle_1.render();

circle_1.displayColor();
