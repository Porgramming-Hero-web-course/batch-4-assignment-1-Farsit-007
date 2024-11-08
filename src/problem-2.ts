{
    // Problem - 2

    const removeDuplicates = (array: number[]): number[] => {
        const newArray: number[] = []
        array.forEach((a) => {
            if (!newArray.includes(a)) {
                newArray.push(a);
            }
        });
        return newArray
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}