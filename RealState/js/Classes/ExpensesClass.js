
export class Expenses {

    constructor(mortgage, energy, water, trash, hoa, internet, parking, tax, vacancy, homeInsurance) {
        this.mortgage = mortgage;
        this.energy = energy;
        this.water = water;
        this.trash = trash;
        this.hoa = hoa;
        this.internet = internet;
        this.parking = parking;
        this.tax = tax;
        this.vacancy = vacancy;
        this.homeInsurance = homeInsurance / 12;
    }
}
