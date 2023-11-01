import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    public getLoan(value: number): void {
        console.log(`You have taken a loan of $${value}`);
        super.deposit(value);
    }
}


