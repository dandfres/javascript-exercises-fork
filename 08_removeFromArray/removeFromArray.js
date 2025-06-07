const removeFromArray = function(array, ...nums) {
    return array.filter(x => !nums.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
