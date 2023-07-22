class Teacher {
    constructor(public firstName: string, public lastName: string) {
    }

    walk() {
        console.log(`${this.firstName} ${this.lastName} is walking...`);
    }
}

class Student extends Teacher {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    study() {
        console.log(`Student ${this.firstName} ${this.lastName} with id ${this.studentId} is studying...`);
    }
}

const student_1 = new Student(101, 'Karan', 'Pratap');
student_1.walk();
student_1.study();