
// Import Functions
import {
    currencyString,
    taxCalculator,
    vacancyCalculator,
    cashflow,
    getBetterDeal,
    getInterestPrincipalValues,
} from './Functions/functions.js';
import {Loan} from './Classes/LoanClass.js';
import {Expenses} from './Classes/ExpensesClass.js';
import {Property} from './Classes/PropertyClass.js';


/* ================= HTML & CSS =================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const menuBtn = document.querySelector('.sidebar .icon');
const sideBarNav = document.querySelector('.sidebar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Top of the screen
        let offset = sec.offsetTop - 150; // Top location of the section
        let height = sec.offsetHeight; // Height of the section
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })
}

menuBtn.addEventListener('click', function() {
    sideBarNav.classList.toggle('active');
})




/* ==================== CODE ====================== */

let showCashflowReport = false;
let showMonthlyPaymentReport = true;

let expenses = new Expenses(
    0, // Mortgage
    0, // Energy
    0, // Water
    0, // Trash
    19, // HOA
    0, // Internet
    0, // Parking
    0, // Tax
    0 // Vacancy
);

let house = new Property(
    330000, // Cost
    0, // rent
    expenses // Expenses object
);

let loan = new Loan(
    house.cost, // Loan Amount
    0, // Down Payment Percentage (decimal)
    0.075, // Interest (decimal)
    30, // Years
    false // Rolling Closing
);

// Update expenses for the house
house.expenses.mortgage = loan.monthlyPayments;
house.expenses.tax = taxCalculator(
    house.cost, // House Price
    0.0114 // Annual Tax (decimal)
);
house.expenses.vacancy = vacancyCalculator(
    loan.monthlyPayments, // Loan mortgage
    1.5 // Amount of months the property will be vacancy
);

// Calculate Cashflow
let cashflowMonthly = cashflow(
    house.rent, // Property Rent
    house.expenses, // Property Expenses
    "month" // Term => 'month' or 'year'
);

// Check for a more convinient deal
let bestDeal = getBetterDeal( // Return an array: [newHouse, newLoan, newExpenses]
    300, // Minimum cashfow
    3000, // Minimum Rent
    loan.downPayment, // Down Payment
    loan.interest, // Interest
    loan.years, // Years
    100000, // Minimum Cost
    house.cost // Maximum Cost
);

// Calculate principal, interest and balance for whole period
let chartData = getInterestPrincipalValues(loan.totalLoan, loan.monthlyPayments, loan.interest, loan.years);
let totalInterest = chartData.interest.reduce((accumulative, current) => accumulative + current);
let totalPrincipal = chartData.principal.reduce((accumulative, current) => accumulative + current);

let currentReportString = 
`
This proprety original price is ${currencyString(house.cost)}. With this price,
a rent of ${currencyString(house.rent)} and a total of ${currencyString(house.rent-cashflowMonthly)}
in expenses, the total cashflow this property will generate is ${currencyString(cashflowMonthly)}.
`

let newReportString = 
`
A better deal for this property is a price of ${currencyString(bestDeal[0].cost)}. 
With this price, a rent of ${currencyString(bestDeal[0].rent)} and a total 
of ${currencyString(bestDeal[0].rent-cashflow(bestDeal[0].rent,bestDeal[0].expenses, "month"))} in expenses, the total 
cashflow this property will generate is ${currencyString(cashflow(bestDeal[0].rent,bestDeal[0].expenses, "month"))}.
`

if (showCashflowReport) {
    console.log(currentReportString);
    console.log(newReportString);
    console.log([house, loan, expenses]);
    console.log(bestDeal);
}

if (showMonthlyPaymentReport) {

    let totalExpenses = 0;
    Object.keys(house.expenses).forEach(value => {
        if (value !== "vacancy") {
            totalExpenses += house.expenses[value];
        }
    });

    let reportString = `House price: $${house.cost.toFixed(2)}\nExpenses: $${totalExpenses.toFixed(2)}\n\n`;

    Object.keys(house.expenses).forEach(value => {
        if (value !== "vacancy") {
            reportString += `-${value}: $${house.expenses[value].toFixed(2)}\n`;
        }
    });

    console.log(reportString);
}

