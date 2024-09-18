class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    print() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}

const person = new Person('Beki', 'Abdyldaev');
person.print()