
function sumDigits(number) {
    // if (number < 0) {
    //     number = -number;
    // }
    number = Math.abs(number);
    let sum = 0;
    number = Math.trunc(number); //get read of the fractional part
    do {
        let digit = number % 10;
        number = (number - digit) / 10;
        // sum = sum + digit;
        sum += digit;
    } while(number !=0);
    return sum;
}
let sum = sumDigits(-623.12345);
console.log(sum);


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