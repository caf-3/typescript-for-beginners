import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("Mario", "work on mario website", 250);
const invTwo = new Invoice("Luigi", "work on Luigi website", 300);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
