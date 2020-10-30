var date = 1990;
var year = 2020;
var retirementAge = 65;
var age = function(){
    var myAge = year - date;
    return myAge;
}

currentAge = age()
console.log('I am ' + currentAge + ' years old.')

var yearsUntilRetire = function() {
    var years = retirementAge - currentAge;
    return years
}

yearsLeft = yearsUntilRetire()
console.log('I have ' + yearsLeft + ' years until retirement.')

