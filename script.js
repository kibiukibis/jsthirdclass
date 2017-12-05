// // funkcijos aprasymas

// function getInfo(name = 'Benamis', age = 35) {
//     console.log(`mano vardas ${name} ir amzius ${age}`);
// }

// getInfo('Martynas', '32');
// getInfo('Petras', '65');
// getInfo();

// // parametru skaiciavimas

// function getShapeArea(a, b, type) {
//     if (type === 'staciakampis') {
//         var area = a * b;
//         console.log('staciakampio plotas yra:', area);
//         return area;
//     } else if (type === 'trikampis') {
//         var area = a * b / 2
//         console.log('trikampio plotas yra:', area);
//         return area;
//     } else {
//         console.error('Error, patikslinkite duomenis');
//         return 0;
//     }


// }

// // getShapeArea(8, 4, 'staciakampis');
// // getShapeArea(8, 4, 'trikampis');
// // getShapeArea(8, 4, 'bukakampis');

// // getShapePerimeter()
// function getShapePerimeter(a, b, type) {
//     var perimeter;
//     if (type === 'staciakampis') {
//         perimeter = (a + b) * 2;
//         console.log('staciakampio perimetras yra:', perimeter)
//         return perimeter;
//     } else if (type === 'trikampis') {
//         perimeter = (Math.sqrt((a * a) + (b * b)) + a + b)
//         console.log('trikampio perimetras yra:', perimeter)
//         return perimeter;
//     } else {
//         console.error('Error, patikslinkite duomenis')
//         return 0;
//     }
// }

// // getShapePerimeter(3, 3, 'staciakampis')
// // getShapePerimeter(3, 3, 'trikampis')
// // getShapePerimeter(3, 3, 'bukakampis')

// function getShapeInfo(a, b, type) {
//     getShapeArea(a, b, type);
//     getShapePerimeter(a, b, type);
// }
// getShapeInfo(8, 4, 'staciakampis');
// getShapeInfo(8, 4, 'trikampis');
// getShapeInfo(8, 4, 'bukakampis');



// const shapes = [
//     [52, 9, 'staciakampis'],
//     [5, 91, 'trikampis'],
//     [1, 12, 'staciakampis'],
//     [5, 9, 'trikampis'],
//     [5, 9, 'apskritimas'],
//     [92, 9, 'trikampis'],
// ];

// // gauti pirmosisos fromos infromacija

// var totalArea = 0;
// var totalPerimeter = 0;
// for (x = 0; x < shapes.length; x++) {
//     getShapeInfo(shapes[x][0], shapes[x][1], shapes[x][2]);
//     totalArea += getShapeArea(shapes[x][0], shapes[x][1], shapes[x][2]);
//     totalPerimeter += getShapePerimeter(shapes[x][0], shapes[x][1], shapes[x][2]);
// }
// console.log(totalArea);
// console.log(totalPerimeter);

// ND
const prekes = [
    ['suris', 2.23, 2019],
    ['vynas', 11.23, 2021],
    ['mesa', 4.99, 2016],
    ['kefyras', 2.10, 2015]
];

// #1 parasyti funkcija getProduct() kuri isveda paduotos prekes info isprintuoja pavadinima kaina ir galiojimo metus
// #2 parasyti funkcija, kuri nustato ar preke yra pasenusi
// #3 surasti bendra prekiu kaina
// #4 parasyti funkcija kuri gauna argumenta bendra prekiu kaina ir mokamu pinigu suma. Ta funkcija paskaiciuoja graza
// Hard: parasyti bendra funkcija kuri iskviecia vaikines funkcijas (#1,#2)
console.warn(`Namu darbai`)

function getProduct() {
    var x;
    for (x = 0; x < prekes.length; x++) {
        console.log(`${prekes[x][0]} ${prekes[x][1]} ${prekes[x][2]}`)
    }
}

function outDate() {
    var x;
    for (x = 0; x < prekes.length; x++) {
        if (prekes[x][2] < 2017) {
            console.error(`${prekes[x][0]} ${prekes[x][1]} ${prekes[x][2]} galiojimo laikas pasibaiges`)
        }
    }
}

var sum = 0;
for (x = 0; x < prekes.length; x++) {
    sum = sum + prekes[x][1];
}
sum = sum.toPrecision(4);
var suma;

function pay(paid, suma = sum) {
    var change;
    var paid;
    console.log(`Sumoketa: ${paid}`)
    console.log(`Bendra suma: ${suma}`)
    if (sum > paid) {
        console.warn(`Lesu nepakanka. Prekiu kaina: ${suma}`)
    } else if (sum < paid) {
        change = paid - suma;
        console.log(`Graza: ${change}`)

    }
}


function getProductStatus() {
    getProduct();
    outDate();
}

getProductStatus();
pay(100);