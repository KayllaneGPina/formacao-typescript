import { soma, multiplica } from './soma'
describe('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1)  //Value - arrange / soma - Act
        expect(value).toBe(2) // Essa linha é o nosso assert
    }) 

    it('Deve multiplicar o numero po dois', () => {
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it('Deve multiplicar o numero por tres', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    it('Deve informar um erro, com multiplicador diferente de 2 ou 3', () => {
        const value = multiplica(2, 4)
        expect(value).toBe('Multiplicador não aceito')
    })
})