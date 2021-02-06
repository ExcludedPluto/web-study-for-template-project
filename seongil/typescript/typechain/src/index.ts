class Human{
    public name:string;
    public age:number;
    public gender:string;
    constructor(name:string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 10, "female");

const sayHi = (person:Human):void => {
    const {name, age, gender } = person;
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
}

sayHi(lynn);

export {};