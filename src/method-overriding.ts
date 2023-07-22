class Person {
    constructor(public firstName: string, public lastName: string) {
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Teachers extends Person {
    override get fullName(): string {
        return `Prof. ${super.fullName}`;
    }
}

const teacher_1 = new Teachers('Karan', 'Pratap');  
console.log(teacher_1.fullName)

/**
 * Method Overriding:
 * Overriding is when you call a method on an object
 * and the method in the subclass with the same signature as the one in the superclass is called.
 * 
 * Polymorphism:
 * Polymorphism is where you are not sure of the objects type at runtime and the most specific method is called.
 * Therefore the behaviour of the method called may differ, depending on the objects type at runtime.
 */

const persons = [teacher_1, new Person('Sherlyn', 'Kumari')]

for (let p of persons) {
    console.log(p.fullName);
}