const findTheOldest = function(people) {
    return people.reduce((oldest, actual) => {
        const currentYear = new Date().getFullYear();
        
        const oldestDeath = oldest.yearOfDeath ?? currentYear;
        const actualDeath = actual.yearOfDeath ?? currentYear;

        const oldestAge = oldestDeath - oldest.yearOfBirth;
        const actualAge = actualDeath - actual.yearOfBirth;

        return actualAge > oldestAge ? actual : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
