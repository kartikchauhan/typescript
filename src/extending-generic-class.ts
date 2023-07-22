class User {
    constructor(name: string) {}
}

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    // T is Product
    // keyof T => name | price
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

// Pass on the generid type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    findByName(name: string): T | undefined { // Can't have the method name find here because it expects argument of different type from the find method of the parent class
        return this._objects.find(obj => obj.name === name);
    }
} 

// Fix the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}

// const store = new CompressibleStore<Product>();
// store.compress();

const store = new Store<Product>();
store.add({ name: 'a', price: 100 });
store.find('name', 'a');