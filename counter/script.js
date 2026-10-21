const count = document.getElementById("count");
const message = document.getElementById("message");
const button = document.getElementById("reset");

let visits = Number(localStorage.getItem("visits") || 0);

visits = visits + 1;

localStorage.setItem("visits", visits );

count.textContent = visits + "回目";

if (visits === 1){
    message.textContent = "初めての訪問です！"
}else if (visits < 2){
    message.textContent = "また来てくれてありがとうございます。"
}else{
    message.textContent = "いつも大変お世話になっております。"
}

button.addEventListener("click", function(){
    localStorage.removeItem("visits");

    count.textContent = "0回目";
    message.textContent = "リセットしました！"
})