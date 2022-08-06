let colors = require('colors');
let minimist = require('minimist');

const colorArray = [colors.green, colors.yellow, colors.red];
const error = colors.red;
let numbersArray = [];

let argv = minimist(process.argv.slice(2));
let argvArray = argv._;

let fromNumber = +(argvArray[0]);
let toNumber = +(argvArray[1]);

let isNumbers = () => {
        if (isNaN(argvArray[0] || isNaN(argvArray[1]))) {
           return console.log(error('Ошибка! На ввод принимаются только числа. Попробуйте снова'))
        } allNumbers();
    }

let allNumbers = () => {
    let colorIndex = 0;
    for (let i = fromNumber; i <= toNumber; i++) {
            if (isPrime(i) === true) {
                let currentColor = colorArray[colorIndex]
                console.log(currentColor(i));
                numbersArray.push(i);
                if (colorIndex === colorArray.length -1) {
                    colorIndex = 0;
                } else colorIndex++;
            }
    }
    if (numbersArray.length === 0)
    console.log(error('Простых чисел не найдено. Попробуйте другие числа'))
}


let isPrime = (number) => {
    let start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    } return number > 1;
}

isNumbers();