const title = document.getElementById("title"); 

title.textContent = "新しい文字";

//title.style.color = "red";
//title.style.backgroundColor = "yellow";
//title.style.fontSize = "40px";

title.classList.add("big"); 



const list = document.getElementById("list");

const x = document.createElement("div"); 
x.textContent = "新しい項目"; 

list.appendChild(x);  


const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", function(){
    message.textContent = "ボタンが押されました！"
});



