{
    // Problem - 1
    const sumArray = (array: number[]): number => {
        const sum: number = array.reduce((a: number, c: number) => a + c, 0)
        return sum
    }
    console.log(sumArray([1, 2, 3, 4, 5])); 

    // Too Run The File Please Go TO package.json file and chnage the file name
}