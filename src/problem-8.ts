{
    // Problem - 8

    type Person = {
        name: string,
        age: number,
        email: string
    };
    const validateKeys = <T extends Person>(obj: T, keys: (keyof T)[]): boolean => {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true
    }
    const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person1, ["name", "age"]));

}