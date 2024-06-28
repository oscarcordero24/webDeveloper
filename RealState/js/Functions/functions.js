import {Loan} from '../Classes/LoanClass.js';
import {Expenses} from '../Classes/ExpensesClass.js';
import {Property} from '../Classes/PropertyClass.js';
// Other Functions
export function currencyString(amount) {
    return new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(amount);
}

export function taxCalculator(propertyCost, tax) {
    return (propertyCost*tax)/12;
}

export function vacancyCalculator(monthlyPayment, vacancyPeriod) {
    return (monthlyPayment*vacancyPeriod)/12;
}

export function cashflow (rent, expenses, period) {

    let accumulativeCashflow = rent;

    for (let expense in expenses) {
        accumulativeCashflow -= expenses[expense];
    };

    if (period === "month") {
        return stringToFloat(accumulativeCashflow);
    } else if (period === "year") {
        return stringToFloat(accumulativeCashflow * 12);
    } else {
        console.log("Error while choosing a period for cashflow.")
    }
    return 0;
}

export function getInterestPrincipalValues(loanAmount, monthlyPayment, interest, years) {
    let months = years * 12;
    let interestMonth = interest / 12;
    let loanBalance = loanAmount;

    let valuesList = {
        interest: [],
        principal: [],
        balance: []
    };

    for (let i = 0; i < months; i++) {
        var currentInterest = loanBalance * interestMonth;
        var currentPrincipal = monthlyPayment - currentInterest;
        loanBalance -= currentPrincipal;
        valuesList.interest.push(currentInterest);
        valuesList.principal.push(currentPrincipal);
        valuesList.balance.push(loanBalance)
    };

    return valuesList;
}

export function getBetterDeal(minCashflow, minRent, downPayment=0.2, interest=0.07, years=30, minPrice=50000, maxPrice=1000000) {
    for (var i = minPrice; i < maxPrice + 1; i++) {

        var newExpenses = new Expenses(
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
        
        var newHouse = new Property(
            i, // Cost
            minRent, // rent
            newExpenses // Expenses object
        );
        
        var newLoan = new Loan(
            newHouse.cost, // Loan Amount
            downPayment, // Down Payment Percentage (decimal)
            interest, // Interest (decimal)
            years // Years
        );
        
        // Update expenses for the house
        newHouse.expenses.mortgage = newLoan.monthlyPayments;
        newHouse.expenses.tax = taxCalculator(newHouse.cost, 0.015);
        newHouse.expenses.vacancy = vacancyCalculator(newLoan.monthlyPayments, 2)
        
        // Calculate Cashflow
        var newCashflowMonthly = cashflow(newHouse.rent, newHouse.expenses, "month");
    
        if (newCashflowMonthly < minCashflow) {
            break;
        }
    
    };

    return [newHouse, newLoan, newExpenses];
}

function stringToFloat (numberString) {
    try {
        let result = parseFloat(numberString.toFixed(2));
        return result;
    } catch (error) {
        console.log("Error while parsing '" + numberString + "'. \nError: " + error);
        return 0;
    }
}
