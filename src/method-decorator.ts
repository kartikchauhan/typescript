function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;

    descriptor.value = function(...args: any) {
        console.log(`Method ${methodName} starting...\n`);
        original.call(this, ...args);
        console.log(`\nMethod ${methodName} terminated...\n`);
    }
}

class PersonComponent {
    @Log
    say(message: string) {
        console.log('Person says', message)
    }

    @Log
    walk(distance: string, duration: string) {
        console.log(`Person walks ${distance} in ${duration}`);
    }
}

const personComponent = new PersonComponent()
personComponent.say('What is up?');
personComponent.walk('10 km', '60 min.')