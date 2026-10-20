//参照型

//配列
//                 0        1        2
const fruits = ["りんご", "みかん","ぶどう"];

console.log(fruits[0]);//りんご
console.log(fruits[1]);//みかん

console.log(fruits.length)// 3  データの数

//オブジェクト

const person = {
//プロパティ（キー）
    name: "太郎",
    age: 65
};

console.log(person.name);//太郎
console.log(person.age);//65

//関数（処理のまとまり）

//関数宣言

//関数の宣言　関数名　（）<-パラメーター
function sayHello(){
    console.log("hello");//処理の内容
}

//関数の出力の宣言
sayHello();

//関数式

const hello2 = function(){
    console.log("hello");//処理の内容
}

hello2();

//アロー関数

const hello3 = () => {
    console.log("hello");//処理の内容
}

hello3();



//引数

const userName = "太郎"
            
function greet(x){
    console.log(`こんにちは、${x}さん`)
}

greet(userName);//関数の出入り口　変数はここでつながります。

//       ①　　　　　　　　　　②　　　　　　　　　　　③
// const userName -> greet(userName) -> function greet(x)
//                   ④                                       ⑤
//-> console.log(`こんにちは、${x}さん`) -> function greet(userName)
//       ⑥
//->greet(userName)

//return

let price = 1000;

function withTax(p){
    return p * 1.1;
};// returnの後にあるデータを処理した状態で返す

const total = withTax(price);

console.log(total);//1100


//       ①　　　　　　　　　　②　　　　　　　　　　　③
// let price  -> withTax(price) ->function withTax(p)
//              ④                    ⑤
//-> return p * 1.1 -> function withTax(p)
//       ⑥                 ⑦　　　　　　　　⑧
//->withTax(price) -> const total -> console.log(total)

let x = 10;
let y = 20;

function calc(a,b){
    return a + b //10 + 20
}

const ttl = calc(x,y)

console.log(ttl);//30