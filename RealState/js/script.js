
// Import Functions
import {
    currencyString,
    taxCalculator,
    vacancyCalculator,
    cashflow,
    Loan,
    Property,
    Expenses,
    getBetterDeal,
    getInterestPrincipalValues
} from './Functions.js';


/* ================= HTML & CSS =================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    console.log("=====================")
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


/* ==================== CODE ====================== */

let expenses = new Expenses(
    0, // Mortgage
    0, // Energy
    80, // Water
    50, // Trash
    150, // HOA
    0, // Internet
    0, // Parking
    0, // Tax
    0 // Vacancy
);

let house = new Property(
    400000, // Cost
    3000, // rent
    expenses // Expenses object
);

let loan = new Loan(
    house.cost, // Loan Amount
    0, // Down Payment Percentage (decimal)
    0.05, // Interest (decimal)
    30 // Years
);

// Update expenses for the house
house.expenses.mortgage = loan.monthlyPayments;
house.expenses.tax = taxCalculator(
    house.cost, // House Price
    0.015 // Annual Tax (decimal)
);
house.expenses.vacancy = vacancyCalculator(
    loan.monthlyPayments, // Loan mortgage
    2 // Amount of months the property will be vacancy
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
    2500 // Minimum Rent
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
/* console.log(currentReportString);
console.log(newReportString); */
