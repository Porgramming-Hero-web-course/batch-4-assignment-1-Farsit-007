{
    // Problem - 6

    interface Profile {
        name?: string,
        age?: number,
        email?: string
    }

    const updateProfile = (obj: Profile, update: Profile): Profile => {
        return { ...obj, ...update }
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { name: "Farsit" }));

}