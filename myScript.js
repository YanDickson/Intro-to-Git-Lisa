var date = 1990;
var year = 2020;
var age = function(){
    var myAge = year - date;
    return myAge;
}

currentAge = age()
console.log('I am ' + currentAge + ' years old.')
