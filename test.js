// problem solving
// 1 ONE  my first full function problme solving
const remainingMOney = (orange, apple, money) => {
  const kg = 300;
  const akg = 400;
  const total1 = orange * 300;
  const totala = apple * 400;
  const total = total1 + totala;
  const minus = money - total;
  return minus;
};
// console.log(remainingMOney(5,5,4000));

const remainder = (input) => {
  const outPut = input % 5;
  return outPut;
};
// console.log(remainder(108));

// find grades of me and my friends

const findGrade = (number) => {
  if (number >= 80) {
    console.log("your grade is A ");
  } else if (number < 80 || number <= 60) {
    console.log("your grade is b");
  }
};
// findGrade(79)

//4 reverse an array element usign loop ;
const arr = [30, 40, 60, 80, 302, 400, 500];
for (let i = arr.length - 1; i >= 0; i--) {
  let number = arr[i];
  // console.log(number);
}

// 5  find average of array ;
// const array = [20, 40, 50, 70];
const make_average = (array) => {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    number += array[i];
    // console.log(number);
  }
  var Find = number / array.length;
  return Find;
};
// console.log(make_average( [20,20,20,20,20,40]));

// 6 write a function that check number is even or odd;
const odd_event = (number) => {
  if (number % 2 === 0) {
    console.log("This is a event number ");
  } else {
    console.log("this is a odd number");
  }
  return number;
};

//7  leap yrar
const leapYear = (year) => {
  // if (year % 4 ===0) {
  //     console.log('This is a leap year ');
  // }
  // else {
  //     console.log('this is not a leap year');
  // }
  let result = 0;
  for (let i = 0; i < year.length; i++) {
    result = year[i];
    if (result % 4 === 0) {
      console.log(result);
    }
  }
  return result;
};
// console.log(leapYear([2020,1990,1800,2300,2000,2001,2002,2003,2004,2010,2012,2011,2024]));

// 8 find oddSum  of array ;
// const array = [20, 40, 50, 70];
const sumOdd = (array) => {
  let number = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const index = i;
    number = array[i];
    if (number % 2 === 1) {
      //   console.log(index,number);
      sum += number;
    }
  }
  return sum;
  // return sum;
};
// console.log(sumOdd([12,33,33,40,11]));
// 9 factorial number find

const factorial = (number) => {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
};
// console.log(factorial(6));

// 10 math object
function shallowEqual(object1, object2) {
  const keys1 = object1["name"];
  const keys2 = object2["friend"];
  const keys3 = object2["name"];
  const keys4 = object1["friend"];

  if (keys1 !== keys2) {
    return false;
  }
  if (keys3 !== keys4) {
    return false;
  }
  if (
    typeof keys1 == "number" ||
    typeof keys2 == "number" ||
    typeof keys3 == "number" ||
    typeof keys4 == "number"
  ) {
    return "error: please enter the right name";
  }
  return true;
}
//11 tallest nu mber of array

const findTallest = (number) => {
  let tallest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > tallest) {
      tallest = element;
    }
  }
  return tallest;
};


// Remove duplicate items from an array

const removeDublicateArray = (arr) => {
  const uniqe = [];
   let result =''
  for (let i = 0; i < arr.length; i++){
    const name = arr[i];
    if (uniqe.includes(name)===false) {
      uniqe.push(name)
      

     }
           
  }
  for (let i = 0; i < uniqe.length; i++){
    // console.log(result=uniqe[i]);
  }

  return result
}

console.log(removeDublicateArray(['baba','dada','baba','dada','sister','bro','sister','mom','aunt','mom','uncle']));