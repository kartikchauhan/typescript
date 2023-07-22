class KeyValue { // problem with this class is we've to define the type of `key` and `value`
    constructor(public key: string, public value: string) {}
}

class GenericKeyValue<T, U> {
    constructor(public key: T, public value: U) {}
}

const pair_1 = new KeyValue('foo', 'bar');

const pair_2 = new GenericKeyValue<string, string>('color', 'red');
const pair_3 = new GenericKeyValue<number, number>(0, 10); // `pair_3.key.` will show auto completion feature and will ensure type safety

const pair_4 = new GenericKeyValue(0, 'yellow'); // can infer the type from the value