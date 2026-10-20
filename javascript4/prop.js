//プロパティ

const fruits = ["りんご","みかん","ぶどう"];
console.log(fruits.length)// 3


const message = "こんにちは";
console.log(message.length);//5


const word = "hello";

console.log(word.toUpperCase())//HELLO

const fruits2 = ["りんご", "みかん"];
console.log(fruits2)//[ 'りんご', 'みかん' ]
fruits2.push("ぶどう");  
console.log(fruits2.length)//3
console.log(fruits2);//[ 'りんご', 'みかん', 'ぶどう' ]


const dice = Math.floor(Math.random() * 6) + 1;


const today = new Date();       // 今の日時
console.log(today.toLocaleDateString("ja-JP"));//2026/10/20
//console.log(today);