"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 10, "female");
const sayHi = (person) => {
    const { name, age, gender } = person;
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
};
sayHi(lynn);
//# sourceMappingURL=index.js.map