// Simple Genercs

const echo = (data: any) => {
    return data;
};

console.log(echo("Max"));
console.log(echo(25).length);
console.log(echo({ name: "max", age: 23}));

// Bettet Generics

const betterEcho = <T>(data: T) => {
    return data;
};

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(23));
console.log(betterEcho({ name: "max", age: 23}));

// Built in generics
const testResults: Array<number> = [1.53, 32.45];
testResults.push(23);

// Arrays

const printAll = <T>(args: T[]): void => {
    args.forEach((element) => console.log(element));
};

printAll<string>((["35","Ada"]));

// Generics Types
const echo2: <T>(data: T) => T = betterEcho;

echo2<string>("sd");

// Generics clasees

class MathC<T extends number> {
    baseValue: T;
    multiplyValue: T;

    constructor(val1, val2){
        this.baseValue = val1;
        this.multiplyValue = val2
    }

    calculate(): number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new MathC<number>("Ads",20);
console.log(simpleMath.calculate());
