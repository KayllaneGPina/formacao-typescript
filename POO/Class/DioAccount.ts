// Classe Abstrata
export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    // Getters e Setters
    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if(this.validateStatus()) {
        console.log(`${this.name} você depositou!`)
        }
    }

    withdraw = (): void => {console.log(`${this.name} você sacou!`)}

    getBalance = (): void => {console.log(`R$${this.balance} reais de saldo`)}

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}