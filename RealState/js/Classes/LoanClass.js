

export class Loan {

    constructor(amount, downPaymentPercent, interest, years) {
        this.amount = amount;
        this.downPayment = amount * downPaymentPercent;
        this.interest = interest;
        this.years = years;
        this.months = years * 12;
        this.totalLoan = this.amount - this.downPayment;
        this.monthlyPayments = this.monthlyPayment();
        
    }

    monthlyPayment() {
        let numerator = this.totalLoan * this.interest/12 * Math.pow(1 + this.interest/12, this.months);
        let denominator = Math.pow(1 + this.interest/12, this.months) - 1;
    
        return this.stringToFloat(numerator/denominator);
    } 

    stringToFloat (numberString) {
        try {
            let result = parseFloat(numberString.toFixed(2));
            return result;
        } catch (error) {
            console.log("Error while parsing '" + numberString + "'. \nError: " + error);
            return 0;
        }
    }

}