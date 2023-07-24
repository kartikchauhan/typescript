function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;

    descriptor.get = function () {
        const result = original?.call(this);

        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}

class Name {
    constructor(public firstName: String, public lastName: String) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const name_1 = new Name('kartik', 'chauhan');

console.log(name_1.fullName);