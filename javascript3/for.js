//反復処理

//for文

for(let i = 0; i <= 5;i++){
    console.log(`${i}回目`)
}
//i++  インクリメント演算子  これを書かないと無限ループが発生

//number =  数値型
//string =  文字列型
//boolean =  真偽値型


//forEach

const fruits = ["りんご", "みかん", "ぶどう"]


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


fruits.forEach(function(f){
   console.log(f);
});


