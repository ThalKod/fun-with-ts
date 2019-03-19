class Person {
    name: string;
    private type: string;
    protected age: number = 22;

    constructor(name: string, public username: string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type: string){
        this.type = type;
        console.log(type);
    }
}

const person = new Person("Thal", "Marcelin");
person.printAge();
person.setType("Cool Guy");
console.log(person);

class Thal extends Person{
    // name: string = "Thal2";
    constructor(username: string){
        super("Thal2", username);
    }
}

const thal = new Thal("nan";
console.log(thal);
 // Getter and Setter

class Plant {
    private _species: string = "Default";

    get species(): string{
        return this._species;
    }

    set species(value: string): void{
        if(value.length > 3){
            this._species = value;
        }else{
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);


// Static properties & Methods

class Helpers {
    static PI: number = 3.14;

    static calcCirconference(diameter: number) : number{
        return this.PI * diameter;
    }
}

console.log(Helpers.PI * 2);
console.log(Helpers.calcCirconference(23));

// Abstract Classes
abstract class Project{
    projectName: string = "Default";
    budget: number = 0;

    abstract changeName(name: string): void;

    calcBudget(): number{
        return this.budget *3;
    }
}

class ITProject extends Project{
    constructor(budget: number){
        super();
        this.budget = budget;
    }

    changeName(name: string) :void{
        this.projectName = name;
    }
}

let newProject = new ITProject(123);

console.log(newProject);
newProject.changeName("Super project");
console.log(newProject);
