const findTheOldest = function(people) {
    return people.reduce((max, actual) => {
        const maxAge = max.yearOfDeath - max.yearOfBirth;
        const actualAge = actual.yearOfDeath - actual.yearOfBirth;
        return actualAge > maxAge ? actual : max;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
