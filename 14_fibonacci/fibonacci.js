const fibonacci = function(n) {
    const succesion = [0, 1];
    if (n < 0) {
        return 'OOPS';
    } else {
        for (let i = 1; i < n; i++) {
            succesion.push(succesion[i - 1] + succesion[i])
        }
        return succesion[n]
    }
};

// Do not edit below this line
module.exports = fibonacci;
