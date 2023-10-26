const array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.push(11)
array.push(12)
// console.log(`Primeiro array ${array}`)
array.pop()
// console.log(`Segundo array ${array}`)
const findNumber = array.find(num => num > 5)
// console.log(findNumber)  Retorna o primeiro valor que atende a condição


const letras: string[] = ['a', 'b', 'c', 'z', 'e', 'i', 'o', 'u']

const findLetra = letras.find(letra => letra === 'a')
// console.log(findLetra)

// array.forEach(num => console.log(num > 5)); // retorna true ou false
// array.forEach(num =>{
//     if (num > 2 && num % 2 == 0) console.log(num)
// });

// array.map(num => console.log(num))

// letras.map(letra => console.log(letra))


// console.log(array[0])
// console.log(letras.length)
// console.log(letras)
 