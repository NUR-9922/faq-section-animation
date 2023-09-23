const toggle_box = document.getElementById("toggle-box");
let onOff = true;
function turnOnlight(){
    if( onOff === true){
   document.getElementById("toggle").style.marginLeft = "40px";
   document.getElementById("sub-sec-1").style.visibility = "visible";
   document.getElementById("sub-sec-1").style.opacity = "1";
   document.getElementById("light-2").style.marginTop = "0px";
   document.getElementById("toggle-box").style.color = "red";
   document.getElementById("toggle-box").style.backgroundColor = "white";
   document.getElementById("toggle-box").style.border = "solid 2px yellow ";
   document.getElementById("sec-2").style.color = "white ";
   
   onOff = false;
    }
    else{
        document.getElementById("toggle").style.marginLeft = "0px";
        document.getElementById("sub-sec-1").style.visibility = "hidden";
        document.getElementById("sub-sec-1").style.opacity = "0";
        document.getElementById("toggle-box").style.backgroundColor = "#232529";
        document.getElementById("toggle-box").style.border = "none ";
        document.getElementById("sec-2").style.color = "black ";
        onOff = true;
    }
}


// faq section

const i = document.getElementById("i-1");
const contenar = document.getElementById("contener-1");

let click = true;
function myFun() {

    if (click === true) {
        contenar.style.height = "140px";
        contenar_4.style.height = "50px";
        contenar_3.style.height = "50px";
        contenar_2.style.height = "50px";
        i.style.transform = "rotate(0deg)";

        click = false;
    }
    else {

        i.style.transform = "rotate(45deg)";
        contenar.style.height = "50px";
        click = true;
    }


}

const i_2 = document.getElementById("i-2");
const contenar_2 = document.getElementById("contener-2");
let click_2 = true;
function myFun2() {

    if (click_2 === true) {
        contenar.style.height = "50px";
        contenar_4.style.height = "50px";
        contenar_3.style.height = "50px";
        contenar_2.style.height = "140px";
        i_2.style.transform = "rotate(0deg)";
        click_2 = false;
    }
    else {
        i_2.style.transform = "rotate(45deg)";
        contenar_2.style.height = "50px";
        click_2 = true;
    }

}




const i_3 = document.getElementById("i-3");
const contenar_3 = document.getElementById("contener-3");
let click_3 = true;
function myFun3() {

    if (click_3 === true) {
        contenar_4.style.height = "50px";
        contenar_3.style.height = "140px";
        contenar_2.style.height = "50px";
        contenar.style.height = "50px";
        i_3.style.transform = "rotate(0deg)";
        click_3 = false;
    }
    else {
        i_3.style.transform = "rotate(45deg)";
        contenar_3.style.height = "50px";
        click_3 = true;
    }

}


const i_4 = document.getElementById("i-4");
const contenar_4 = document.getElementById("contener-4");
let click_4 = true;
function myFun4() {

    if (click_4 === true) {
        contenar_4.style.height = "140px";
        contenar_3.style.height = "50px";
        contenar_2.style.height = "50px";
        contenar.style.height = "50px";
        i_4.style.transform = "rotate(0deg)";
        click_4 = false;
    }
    else {
        i_4.style.transform = "rotate(45deg)";
        contenar_4.style.height = "50px";
        click_4 = true;
    }

}
