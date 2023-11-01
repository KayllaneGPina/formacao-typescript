// Classe Abstrata
export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        
    }

    public getName = (): void => {
        console.log(this.name) 
    }

    public deposit(value: number): void {
        if (this.validateStatus()) {
            this.balance += value;
            console.log(`Deposit made successfully! New balance: $${this.balance}`);
        }
    }

    public withdraw = (value: number): void => {
        if (this.validateStatus() && this.balance > 0) {
            if (value < this.balance) {
                this.balance -= value
                console.log('Withdrawal made successfully!')
            } else {
                console.log('Invalid balance!')
            }
        } else {
            console.log('Invalid balance!')
        }
    }

    public getBalance = (): void => { console.log(`You have a balance of $${this.balance}`) }

    public validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Invalid account')
    }
}