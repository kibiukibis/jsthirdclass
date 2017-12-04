// ND
var sk = [
    [4, 8, 9],
    [2, 6, 1],
    [5, 7, 9, 9, 3, 4]
];
// isvesti visus skaicius i konsole
// surasti tu nariu suma ir didziausia skaiciu
// HARD: atsitiktinai issursiuoti masyva


var l = sk.length;
var x, y;
for (x = 0; x < l; x++) {
    for (y = 0; y < sk[x].length; y++) {}
    console.log(sk[x])
}

// surasti tu nariu suma ir didziausia skaiciu
var sum = 0;
var max = sk[0][0];
for (x = 0; x < l; x++) {
    for (y = 0; y < sk[x].length; y++) {
        sum += sk[x][y];
        if (sk[x][y] > max) max = sk[x][y]
    }
}
console.warn(`array elements sum is ${sum} max value is ${max}`);

var naujasSk = [];
var l = sk.length;
z = 0;
for (x = 0; x < l; x++) {
    for (y = 0; y < sk[x].length; y++) {
        naujasSk[z] = sk[x][y];
        z++;
    }
}
// console.warn(naujasSk)

var rNumber;
var skSorted = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];


console.warn(`Randomly rearranged array`)
for (x = 0; x < sk.length; x++) {
    for (y = 0; y < sk[x].length; y++) {
        rNumber = Math.floor(Math.random() * naujasSk.length);
        skSorted[x][y] = naujasSk[rNumber];
        naujasSk.splice(rNumber, 1);
    }
    console.log(skSorted[x])
}
console.warn(`Primary array`)
for (x = 0; x < l; x++) {
    for (y = 0; y < sk[x].length; y++) {}
    console.log(sk[x])
}
console.warn(`newer push`)