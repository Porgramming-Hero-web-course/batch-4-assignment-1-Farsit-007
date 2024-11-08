{
    // Problem - 3

    const countWordOccurrences = (array: string, word: string): number => {
        let count: number = 0;
        const lowerCaseString = array.toLocaleLowerCase()
        const lowerCaseWord = word.toLocaleLowerCase()
        const splitedString = lowerCaseString.split(" ")
        splitedString.forEach((item) => {
            if (item === lowerCaseWord) {
                count = count + 1
            }
        })
        return count
    }

       console.log( countWordOccurrences("I love typescript Typescript", "typescript"));

}