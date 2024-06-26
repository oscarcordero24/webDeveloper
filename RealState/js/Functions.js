
// Objects ("Classes")
export function Loan(amount, downPaymentPercent, interest, years) {
    this.amount = amount;
    this.downPayment = amount * downPaymentPercent;
    this.interest = interest;
    this.years = years;
    this.months = years * 12;
    this.monthlyPayments = monthlyPayment(this.amount-this.downPayment, this.interest, this.months);
    this.totalLoan = this.amount - this.downPayment;
}

export function Property(cost, rent, expenses) {
    this.cost = cost;
    this.rent = rent;
    this.expenses = expenses
}

export function Expenses(mortgage, energy, water, trash, hoa, internet, parking, tax, vacancy) {
    this.mortgage = mortgage;
    this.energy = energy;
    this.water = water;
    this.trash = trash;
    this.hoa = hoa;
    this.internet = internet;
    this.parking = parking;
    this.tax = tax;
    this.vacancy = vacancy
}

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

export function getBetterDeal(minCashflow, minRent, minPrice=50000, maxPrice=1000000) {
    for (var i = minPrice; i < maxPrice; i++) {

        var newExpenses = new Expenses(
            0, // Mortgage
            120, // Energy
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
            0.2, // Down Payment Percentage (decimal)
            0.07, // Interest (decimal)
            30 // Years
        );
        
        // Update expenses for the house
        newHouse.expenses.mortgage = newLoan.monthlyPayments;
        newHouse.expenses.tax = taxCalculator(newHouse.cost, 0.0015);
        newHouse.expenses.vacancy = vacancyCalculator(newLoan.monthlyPayments, 2)
        
        // Calculate Cashflow
        var newCashflowMonthly = cashflow(newHouse.rent, newHouse.expenses, "month");
    
        if (newCashflowMonthly < minCashflow) {
            break;
        }
    
    };

    return [newHouse, newLoan, newExpenses];
}

function monthlyPayment(principal, interest, period) {
    let numerator = principal * interest/12 * Math.pow(1 + interest/12, period);
    let denominator = Math.pow(1 + interest/12, period) - 1;

    return stringToFloat(numerator/denominator);
} 

function stringToFloat (numberString) {
    try {
        let result = parseFloat(numberString.toFixed(2));
        return result;
    } catch (error) {
        console.log("Error while parsing '" + resultString + "'. \nError: " + error);
        return 0;
    }
}
