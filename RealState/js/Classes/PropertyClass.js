
export class Property {

    constructor(cost, rent, expenses, rollClosing=false) {
        this.cost = cost;
        this.rent = rent;
        this.expenses = expenses;
        this.rollingClosing = rollClosing;
        this.closingCost = 0;
        this.calculateClosingCost()
    }

    calculateClosingCost() {
        if (!this.rollingClosing) {
            this.closingCost = this.cost * 0.035;
        } else {
            this.closingCost = 0;
        }
    }

}
