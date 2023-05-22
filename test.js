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
console.log(remainingMOney(5,5,4000));


const remainder = (input) => {
     const outPut = input % 5 ;
    return outPut
}
console.log(remainder(108));