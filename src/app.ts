//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(t: string):void;
    spend(a: number):number;
}

const me: IsPerson = {
    name: 'Paul',
    age: 20,
    speak(text: string):void{
        console.log(this.name,'said',text);
    },
    spend(amount: number): number{
        console.log(this.name,'spent',amount);
        return amount;
    }
}
me.speak('Hello world')

import { Invoice } from './classes/Invoice.js'
const invOne = new Invoice("Mario", "work on mario website", 250);
const invTwo = new Invoice("Luigi", "work on Luigi website", 300);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach( inv => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
})