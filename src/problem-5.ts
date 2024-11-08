{
    // Problem - 5
    const getProperty = <X, Y extends keyof X>(Obj: X, key: Y) => {
        return Obj[key]
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}