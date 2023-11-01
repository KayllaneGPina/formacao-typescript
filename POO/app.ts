import { CompanyAccount } from './Class/CompanyAccount';
import { PeopleAccount } from './Class/PeopleAccount';
import { ElderlyAccount } from './Class/ElderlyAccount';

const companyAccount: CompanyAccount = new CompanyAccount('A', 1);
companyAccount.deposit(200);
companyAccount.getLoan(150);
companyAccount.getBalance();
companyAccount.withdraw(36);
companyAccount.getBalance();
console.log(companyAccount);

console.log('----');

const peopleAccount: PeopleAccount = new PeopleAccount(2, 'B', 2); 
peopleAccount.deposit(10);
peopleAccount.withdraw(25); // - Testing whether a withdrawal amount greater than what exists in the account is valid
peopleAccount.getBalance();
console.log(peopleAccount);

console.log('---');

const elderlyAccount: ElderlyAccount = new ElderlyAccount('C', 3);
elderlyAccount.getRetirement(100);
elderlyAccount.withdraw(20);
elderlyAccount.getBalance();
console.log(elderlyAccount);
