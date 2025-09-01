const findTheOldest = function (people) {
    let age = [];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    people.forEach((person, index) => {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = currentYear;
        }
        age[index] = person.yearOfDeath - person.yearOfBirth;
    })
    let max = Math.max(...age)

    const oldest = people.filter(checkOldest);

    function checkOldest(person) {
        return (person.yearOfDeath - person.yearOfBirth) === max;
    }
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
