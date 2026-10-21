const btn = document.getElementById("btn");
const kekka = document.getElementById("kekka");
const detame = document.getElementById("detame");


btn.addEventListener("click", function(){
try{
      kekka.style.color = "black";
      const bango = Math.floor(Math.random() * 6) + 1;

    //Math.random() ０以上1未満を作る -> 0.75
    // X 6 -> 4.5
    //Math.floor()少数以下を切り捨てる -> 4
    // + 1 -> 5
//                    0   1   2   3    4    5
    const saikoro = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    detame.textContent = saikoro[bango - 1];
    detame.style.fontSize = "80px"

    kekka.textContent = "出た目：" + bango;

    if (bango === 1){
         kekka.textContent = "1：残念";
    } else if( bango === 2) {
         kekka.textContent ="2：残念";
    } else if (bango === 3) {
        kekka.textContent = "3：残念";
    } else if ( bango === 4){
        kekka.textContent = "4：残念";
    }else if ( bango === 5){
        kekka.textContent = "5：残念";
    }else if ( bango === 6){
        kekka.textContent = "6：おめでとうございます！";

        kekka.style.color = "red";
        
        setTimeout(() => {

  location.reload()
  window.alert("リセットしました");
}, 500);
    }
} catch (error){
    console.log(error.message)
}
  


})