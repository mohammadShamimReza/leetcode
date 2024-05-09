const reverse = (array) => {
    let result = []
    console.log(array[array.length - 1])
    for (let i = 0; i < array.length; i++) {
        result.push(array[array.length - i-1])
         
    }
    return result;
}


console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));