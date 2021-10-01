const productOfIntegers = (array) => {
    let resultArray = [];
    array.forEach((value) => {
        let filteredArray = array.filter((value1 => {
            return value !== value1;
        })).reduce((previousValue, currentValue) => {
            return previousValue * currentValue;
        });
        resultArray.push(filteredArray);
    });
    return resultArray;
};

console.log(productOfIntegers([1, 2, 3, 4, 5]));
console.log(productOfIntegers([10, 22, 13, 42, 50]));
console.log(productOfIntegers([3, 2, 1]));