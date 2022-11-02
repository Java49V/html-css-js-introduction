
function fromNumberToString(value, code) {
    var digit,
        radix = code.length,
        result = '';

    do {
        digit = value % radix;
        result = code[digit] + result;
        value = Math.floor(value / radix);
    } while (value)

    return result;
}
console.log(fromNumberToString(900550, '0123456789abcdefghijklmnopqrstuvwxyz')); //36
console.log(fromNumberToString(46016237, '0123456789abcdefghijklmnopqrstuvwxyz')); //36
console.log(fromNumberToString(46016237, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')); //36

function fromStringToNumber(value, code) {
    return [...value].reduce((r, a) => r * code.length + code.indexOf(a), 0);
}
console.log(fromStringToNumber('java', '0123456789abcdefghijklmnopqrstuvwxyz')); //36
console.log(fromStringToNumber('react', '0123456789abcdefghijklmnopqrstuvwxyz')); //36
// console.log(toString(11483, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')); 
// console.log(parseInt('java', '0123456789abcdefghijklmnopqrstuvwxyz'));
// console.log(parseInt('a', 'abcdefghijklmnopqrstuvwxyz0123456789+-'));
// console.log(toString(142, 'abcdefghijklmnopqrstuvwxyz0123456789+-'));


// function dec2bin(dec) {
//     return (dec >>> 0).toString(2);
//   }
// console.log(dec2bin(11483)); //2

function fromDecToBinary(v) {
    // if (!Number.isSafeInteger(v) || v < 0) {
    //   throw new Error('v must be a non-negative integer');
    // }
    if (v < 0) {
        return console.log("you entered negative integer");
    }
    if (v === 1) {
        return '1';
    }
    if (v === 0) {
        return '0';
    }
    return fromDecToBinary(Math.floor(v / 2)) + (v % 2);
}
console.log(fromDecToBinary(11483));

function changeBase(number, fromBase, toBase) {
    if (fromBase == 10)
        return (parseInt(number)).toString(toBase)
    else if (toBase == 10)
        return parseInt(number, fromBase);
    else {
        var numberInDecimal = parseInt(number, fromBase);
        return parseInt(numberInDecimal).toString(toBase);
    }
}
console.log(changeBase(10110011011011, 2, 10));

console.log(changeBase(11483, 10, 2));

// function sumDigits(number) {
//     // if (number < 0) {
//     //     number = -number;
//     // }
//     number = Math.abs(number);
//     let sum = 0;
//     number = Math.trunc(number); //get read of the fractional part
//     do {
//         let digit = number % 10;
//         number = (number - digit) / 10;
//         // sum = sum + digit;
//         sum += digit;
//     } while(number !=0);
//     return sum;
// }
// let sum = sumDigits(-623.12345);
// console.log(sum);


//  let num = -0623;
//  function sum_of_digit(n)
//  {
//      if (n == 0)
//      return 0;
//      if (n < 0)
//      n = -n;
//      return (n % 10 + sum_of_digit(parseInt(n / 10)));
//  }

//  let result = sum_of_digit(num);
//  console.log( "Sum of digits in "+ num +" is "+result );

// function sumDigits(n) {
//     return `${n}`.match(/\d/g).reduce( (sum, digit) => sum + +digit, 0 );
//   }

//   console.log( sumDigits( -623 ) );

// function sum_of_digit(n) {      
//     let sum = 0;
//     for( let digit of `${n}` ){ // прямо тут, сразу превращая n в строку
//       sum += +digit;
//     }      
//     return sum;
//   }

//   console.log( sum_of_digit(-623) );

