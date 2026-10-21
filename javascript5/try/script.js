const input = document.getElementById("age");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", function(){
    try{
        const text = input.value;

        if(text === ""){
            throw new Error("年齢入力してください");
        };

        const age = Number(text);

        if(Number.isNaN(age)){
            throw new Error("数字を入力してください");
        };

        if(age < 0){
            throw new Error("０以上の数値を入力してください");
        };

        message.textContent = age + "才ですね"
        message.style.color = "green"
        
    }catch(e){
        message.textContent = e.message;
        message.style.color = "red";
    };
});