const lowercaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input must be an array'));
            return;
        }

        const result = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());

        resolve(result);
    });
}


// Test the function with a mixed array
const mixedArray = ["PIZZA", 10, true, "HELLO", "WORLD", null];

lowercaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
