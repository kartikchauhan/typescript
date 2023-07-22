function wrapInArray (value: number): [number] {
    return [value];
}

function genericWrapInArray<T>(value: T): [T] {
    return [value];
}

function wrapInArrayMultipleValues (value1: number, value2: number): number[] { // return multiple values of type number
    return [value1, value2, 3, 4, 5];
}

function genericWrapInArrayMultipleValues<T, U> (value1: T, value2: U) {
    return [value1, value2];
}

function print<T> (arr: T) {
    console.log(arr);
}

print(wrapInArray(3));

print(genericWrapInArray(3));
print(genericWrapInArray('red'));

print(wrapInArrayMultipleValues(3, 4));

print(genericWrapInArrayMultipleValues(3, 10));
print(genericWrapInArrayMultipleValues(3, 'red'));
