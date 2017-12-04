// surasti didziausia skaiciu masyve
var numbers = [4, 7, 8, 2, 9, 5]
var max = numbers[0];
for (x = 1; x < numbers.length; x++) {
    if (max < numbers[x]) {
        max = numbers[x]
    }
}
console.log(max)

// vidiniai masyvai
var prekes = [
    ['pienas', 2.10, 1999],
    ['vafliai', 3.15, 2000, 'neimsiu'],
    ['tortas', 1.99, 2001]
];

console.log(prekes[2][1]);
for (x = 0; x < prekes.length; x++) {
    for (y = 0; y < prekes[x].length; y++) {
        console.log(prekes[x][y]);
    }
}


// ND
var sk = [
        [4, 8, 9],
        [2, 6, 1],
        [5, 7, 9, 5, 6, 7]
    ]
    // isvesti visus i konsole
    //surasti nariu suma ir didziausia skaiciu
    //Hard: 

var skaiciai = [6, 8, 34, 55, 78, 23, 34, 78, 97, 33, 2, 11];


var sorted = [];
var totalLenght = skaiciai.length;

for (y = 0; y < totalLenght; y++) {
    var max = skaiciai[0];
    for (x = 0; x < skaiciai.length; x++) {
        if (skaiciai[x] > max) max = skaiciai[x]
    }
    sorted.unshift(max); //idedu didz. nari i nauja masyva
    i = skaiciai.indexOf(max); //paskaiciuoju didiziausio nario indeksa
    skaiciai.splice(i, 1); //istrinu surasta didz. nari is masyvo

}