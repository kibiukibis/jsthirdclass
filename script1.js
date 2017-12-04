/*
 for (x = 0; x <=100; x++) {
 if(x%3==0 && x%5==0){
 console.log('XY')
 }else if(x%3==0){
 console.log('X')
 }else if(x%5==0){
 console.log('Y')
 }else{
 console.log(x)
 }
 }*/

// Randam masyvo nariu suma
var numbers = [4, 7, 8, 2, 4, 9, 11, 4, 8];

var sum = 0;
for (x = 0; x < numbers.length; x++) {
    sum += numbers[x];
}
console.log(sum);
console.log('vidurkis', sum / numbers.length);

// Surasti didziausia skaiciu

var max = numbers[0];

for (x = 1; x < numbers.length; x++) {
    if (numbers[x] > max) {
        max = numbers[x]
    }
}
console.log(max);

// Dvigubo lygio masyvas

var prekes = [
    ['pienas', 2.10, 1999], // prekes[0]
    ['vafliai', 3.15, 2000, false], // prekes[1]
    ['tortas', 1.99, 2011] // prekes[2]
];

console.log(prekes[2][1]);

for (x = 0; x < prekes.length; x++) {
    for (y = 0; y < prekes[x].length; y++) {
        console.log(prekes[x][y])
    }
}

// ND
var sk = [
    [4, 8, 9],
    [2, 6, 1],
    [5, 7, 9, 9, 3, 4]
];
// isvesti visus skaicius i konsole
// surasti tu nariu suma ir didziausia skaiciu
// HARD: atsitiktinai issursiuoti masyva

var skaiciai = [6, 8, 34, 6, 45, 12, 45, 93, 23, 67, 34, 78, 34];

var sorted = [];
var totalLenght = skaiciai.length;

for (y = 0; y < totalLenght; y++) {

    var max = skaiciai[0];
    for (x = 0; x < skaiciai.length; x++) {
        if (skaiciai[x] > max) max = skaiciai[x]
    }
    sorted.unshift(max); //idedu didz. nari i nauja masyva
    i = skaiciai.indexOf(max); //paskaiciuoju didziausio nario indexa
    skaiciai.splice(i, 1); //istrinu surasta didz. nari pagal index
}