
const genericsFunction = <T>(val1: T, val2: T): number => {
    return +val2 + +val2;
};

genericsFunction<string>("asf", "asf");


class Map<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T){
        this.map[key] = item;
    }

    getItem(key: string){
        return this.map[key];
    }

    clear(){
        this.map = {};
    }

    printMap() {
        for(let key in this.map){
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new Map<number>();

numberMap.setItem("Apples", 10);
numberMap.setItem("person",23);

const neas = numberMap.getItem("Apples");

console.log(neas);

numberMap.printMap();
