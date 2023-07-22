// Documentation: https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Product {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    readonly [Property in keyof T]: T[Property];
}

type Optional<T> = {
    [K in keyof T]?: T[K];
};

type Nullable<T> = {
    [K in keyof T]?: T[K] | null;
}

let product: ReadOnly<Product> = {
    name: 'Apple',
    price: 100
};

// product.name = 'Banana'; // Error: Cannot assign to 'name' because it is a read-only property.