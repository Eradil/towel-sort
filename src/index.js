// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (!matrix) {
        return [];
    } else {
        matrix.forEach((element, index) => {
            if (index % 2 !== 0) {
                console.log(element.reverse());
            }
            for (let num of element) {
                res.push(num);
            }
        });
    }

    return res;
};
