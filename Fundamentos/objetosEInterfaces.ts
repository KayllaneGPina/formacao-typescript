interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // A interrogação significa que esse propriedade é OPCIONAL
}

const pessoa: Pessoa = {
    nome: 'Kayllane',
    idade: 21
}

const outraPessoa: Pessoa = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvedor'
}

//Formas de declarar arrays

// const arrayPessoas: Array<Pessoa> = [
//     pessoa,
//     outraPessoa
// ]

const arrayPessoas: Pessoa[] = [
    pessoa,
    outraPessoa
]

console.log(arrayPessoas)
