//エスケープシーケンス

console.log("I'm 太郎"); //I'm 太郎 ok
console.log('"こんにちは"といった'); // ok
console.log("\"こんにちは\"といった") ///上記と同じ結果が出る

//テンプレート文字列

const userName = "太郎";
const age = 65;

console.log(`私は${userName}です${age}才です`)//私は太郎です65才です

