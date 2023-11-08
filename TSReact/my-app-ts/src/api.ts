const conta = {
    email: 'kay@gmail.com',
    password: '123',
    name: 'Kay'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})