// Introdução a POO
class User {
    name: string 
    age: number 

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }

    showName = () => {console.log(this.name)}
}

const user: User = new User('Maria', 23);
user.showName();

const otherUser: User = new User('Joao', 30)
otherUser.showName();