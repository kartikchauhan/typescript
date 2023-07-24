function minLength(length: number) {
    return function(target: any, propertyName: string) {
        let value: number;

        const descriptor: PropertyDescriptor = {
            set(val: number): void {
                if (val.toString().length < length) {
                    throw new Error(`${propertyName} must be at least ${length} characters`);
                }

                value = val;
            },

            get(): number {
                return value;
            }
        }

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class Address {
    @minLength(5)
    public pincode: number;

    constructor(pincode: number) {
        this.pincode = pincode;
    }
}

const address_1 = new Address(12121);
console.log(address_1.pincode);