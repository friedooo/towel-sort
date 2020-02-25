
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];

    if (arguments[0] == undefined)
    return [];

    for (let i = 0; i < matrix.length; i++)
    {
        if (i%2 == 0)
        {
            for(let elem of matrix[i])
        result.push(elem);
        }
        
        else
        {
            for (let elem of matrix[i].reverse())
            result.push(elem);
        }
    
    }
    return result;
}
