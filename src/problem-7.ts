{
    // Problem - 7

    class Car {
        company: string;
        model: string;
        year: number;
        constructor(company: string, model: string, year: number) {
            this.company = company;
            this.model = model;
            this.year = year;
        }
        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            const countendAge = currentYear - this.year;
            return countendAge;
        }
    }
    const car = new Car("Honda", "Civic", 2017);
    car.getCarAge();
    console.log(car.getCarAge());
}