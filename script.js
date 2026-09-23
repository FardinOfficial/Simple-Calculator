

let Num1 = document.getElementById("No1");
let Num2 = document.getElementById("No2");
let Calc = document.getElementById("Calcolator");
 



function plus(){

    let operation = Number(Num1.value) + Number(Num2.value)
    Calc.innerText= operation;
}

function minus(){
      let operation = Number(Num1.value) - Number(Num2.value)
    Calc.innerText= operation;
}
function multiply(){
       let operation = Number(Num1.value) * Number(Num2.value)
    Calc.innerText= operation;
}
function divide(){
   let operation = Number(Num1.value) / Number(Num2.value)
    Calc.innerText= operation;
}