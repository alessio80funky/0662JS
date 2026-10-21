try{
    const input = 0
    //throw new Error ("年齢が入力されていません"); ->  エラーのパターンをカスタマイズするために使う記述
    if (input === ""){
        throw new Error ("年齢が入力されていません");
    }
    
    //Number(input) -> 数値型のデータ型しか読み込まないようにする
    const age = Number(input);

    // Number.isNaN(age) ->  入力した値が数値型でなければという意味です。
    if (age === 0 || Number.isNaN(age)){
        throw new Error ("数値を入力してください");
    }

    console.log( age + "才ですね")

}catch (error){

    console.log(error.message)

}