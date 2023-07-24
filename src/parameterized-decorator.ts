type ComponentOptions = {
    selector: string
};

function DecoratorFactory (options: ComponentOptions) {
    console.log('Inside decorator factory')

    return (constructor: Function) => {
        console.log('constructor', constructor);
        
        constructor.prototype.options = options;
        constructor.prototype.id = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log(`Component inserted in DOM`);
        }
    }
}

console.log('one')

@DecoratorFactory({ selector: '#profile-image'})
class ImageComponent{}

console.log('two')