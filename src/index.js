module.exports = function towelSort (matrix) {
    if(arguments.length == 0) return [];
    if(matrix.length == 0) return [];
    const result = matrix.map((item, index) => {
      if(index % 2 == 1) {
        return item.reverse();
      } else {
        return item
      }
    })
    
    return result.flat(1);;
}
