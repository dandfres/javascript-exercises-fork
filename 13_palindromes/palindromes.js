const palindromes = function (word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const cleanedString = word
        .toLowerCase()
        .split('')
        .filter(char => alphabet.includes(char))
        .join('');
    const reverseString = cleanedString.split('').reverse().join('');
    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
