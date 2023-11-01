import { DioAccount } from './DioAccount';

export class ElderlyAccount extends DioAccount {

    constructor(nome: string, accountNumber: number,) {
        super(nome, accountNumber);
    }

    public getRetirement(retirement: number): void {
        const newRetirementValue = retirement + 10;

        super.deposit(newRetirementValue);
    }
}