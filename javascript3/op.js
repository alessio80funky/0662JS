///比較演算子

//number

console.log(10 > 3);//true
console.log(10 >= 3);//true
console.log(2 >= 3);//false
console.log(3 >= 3);//true
console.log(2 <= 3);//true
console.log(3 === 3);//true
console.log("3" === 3);//false
console.log("3" !== 3);//true

let n = 10;

console.log(n > 3);//true

let n1 = 10;
let n2 = 3;

console.log(n1 > n2);//true

//string (言葉の頭文字で判断)

console.log("あ" < "い")//true

console.log("apple" < "banana")//true

console.log("10" < "9");//true

//論理演算子

const age = 70;
const age2 = 64;
const age3 = 65;
const isMember = true;
const premiumMember = false;
//              true       true
console.log(age >= 65 && isMember);//true 
//              false        true
console.log(age2 >= 65 && isMember);//false
//               true        true          false
console.log(age2 >= 65 && isMember && premiumMember);//false
//&& の場合は　true を出すためにはすべてのデータがtrueでなければなりません。
//              true          false  
console.log(age >= 65 || premiumMember);//true
//|| の場合はtrueが少なくとも一つあればプログラム全体trueになります。
//             true         false
console.log(age >= 70 && !isMember);//false
//!  否定演算子　

//代入演算子

//[　=　]は代入演算子の代表です。

// 代入演算子　＋　算術演算子　＝＞　算術型代入演算子
//算術型代入演算子は計算してから代入を行います

let point = 10;
point += 5;//15
point -= 2;//13
console.log(point);


// 代入演算子　＋　論理演算子　＝＞　論理型代入演算子

let nickName;
nickName ??= "ゲスト"; //nullish
console.log(nickName);

let message = "こんにちは";
message &&= "こんばんは";
console.log(message);


