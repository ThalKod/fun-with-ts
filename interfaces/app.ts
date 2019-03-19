interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}


const greet = (person: NamedPerson): void => {
    console.log("Hello " + person.name);
};

const person: NamedPerson = {
    name: "Thal",
    age: 34,
    hobbies: ["hello"],
    greet(lastName: string){
        console.log(this.name + " " + lastName);
    }
};

greet(person);
person.greet("lasfa");

class Person implements NamedPerson{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    greet(lastName: string){
        console.log(this.name + " " + lastName);
    };
}

const newPerson = new Person("Thal");
greet(newPerson);

newPerson.greet("Marcelin");

// Function type

interface doubleValueFunct {
    (number1: number, number2: number): number;
}

const myFunction: doubleValueFunct = (val,val2) => {
    return val2 + val;
};

console.log(myFunction(12,24));

// inheritance

interface agePerson extends NamedPerson{
    age: number;
}
const oldPerson: agePerson = {
    name: "ad",
    age: 23,
    hobbies: ["hello"],
    greet(lastName: string){
        console.log(this.name + " " + lastName);
    }
};
