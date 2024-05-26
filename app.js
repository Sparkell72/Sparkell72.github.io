let tg = window.telegram.WebApp;

tg.expend();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn6.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});


telegram.Webapp.onEvent("mainButtonClicked", function(){
    tg.sedData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p")

p.innerText = `${tg.initDataUsnafe.user.first_name}`
`${tg.initDataUsnafe.user.last_name}`

usercard.appendChild(p);
