/*let price = 1000;
let count = 2;

const withTax = (p,c) => {
    return p * c
}

const total = withTax(price, count) * 1.1;

console.log(`合計は${total}円です`)//合計は2200円です*/

/*
let price = 10;//値段
let count = 20;//個数
function withTax(pri,cou){
    return 1.1 * pri * cou;
}
const list = withTax(price,count);
console.log(`会計は${list}円です`);
*/


//自習　１３００円のギネスビールを何杯飲んだか？
//let price = 1300;
//function withTax(p, count){
    //return p * 1.1
//};
//const total = withTax(price);
//let count = 5;
//console.log(total);
//function calc(a,b){
    //return a * b　
//}
//const totalPrice = calc(price, count)*1.1;
//userName = "望"
//function greet(userName){
    //console.log(`こんにちは、${userName}さん　あなたはギネスビールを ${calc(1300, count)}円分飲みましたよ！`)
//}
//greet(userName);


let price = 1300;
let count = 5;

function withTax(p){
    return p * 1.1;
}
const total = withTax(price);

console.log(`税込み${total.toFixed(0)}で${count}杯を飲みました`)




