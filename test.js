// problem solving
// 1 ONE  my first full function problme solving 
const remainingMOney = (orange, apple, money) => {  
    const kg = 300;
    const akg = 400;  
    const total1 = orange *300;
    const totala = apple *400;
    const total = total1 + totala;
    const minus =  money-total;     
    return minus;
}
// console.log(remainingMOney(5,5,4000));


const remainder = (input) => {
     const outPut = input % 5 ;
    return outPut
}
// console.log(remainder(108));


// find grades of me and my friends

const findGrade = (number) => {
    
     if (number >= 80) {
              console.log('your grade is A ');
    }
    
     else if (number<80||number<=60) {
         console.log('your grade is b');
     }
    
}
// findGrade(79)

//4 reverse an array element usign loop ;
const arr = [30, 40, 60, 80, 302, 400, 500];
for (let i = arr.length - 1; i >= 0; i--){
    let number = arr[i];
    // console.log(number);
    
}


// 5  find average of array ;
// const array = [20, 40, 50, 70];
const make_average = (array) => {
    let number = 0;
    for (let i = 0; i < array.length; i++){
        number += array[i];
        // console.log(number);

        
    }
    var Find = number / array.length;
    return Find;
}
// console.log(make_average( [20,20,20,20,20,40]));

// 6 write a function that check number is even or odd;
const odd_event = (number) => {
   
    if (number % 2 ===0) { 
        console.log('This is a event number ');
    }
    else {
        console.log('this is a odd number');
    }
    return number
   
}

//7  leap yrar 
const leapYear = (year) => {
   
    if (year % 4 ===0) { 
        console.log('This is a leap year ');
    }
    else {
        console.log('this is not a leap year');
    }
    return year
   
}
// console.log(leapYear(2029));


// 8 find oddSum  of array ;
// const array = [20, 40, 50, 70];
const sumOdd = (array) => {
       let number =0   
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        const index = i;
        number = array[i];
        if (number % 2 === 1) {
    //   console.log(index,number);
          sum+=number
        }

        
    }
    return sum;
    // return sum;  
}
// console.log(sumOdd([12,33,33,40,11]));
