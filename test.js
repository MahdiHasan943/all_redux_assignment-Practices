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

