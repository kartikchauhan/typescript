function Component (constructor: Function) { // For type `Function`, runtime assumes we are going to apply this decorator on a class.
    console.log(`Component decorator called`, constructor); // This is constructor function
    
    constructor.prototype.id = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log(`Component inserted in DOM`);
    }
}

@Component
class ProfileComponent {}