let currentInput = "";
let history = [];
let historyIndex = -1;

const exp = document.getElementById("exp");
const ans=document.getElementById("ans");

function handleInput(val) {
    document.getElementById("input").value += val;
}

function calculate() {
    document.getElementById("output").innerText = eval(document.getElementById("input").value);
}

function loading(){
    const stored = sessionStorage.getItem("");
    if(stored){
        equations = JSON.parse(stored);
    }
    else{
        equations = [];
        sessionStorage.removeItem("equations");
    }
}

function goUp(){

}

function goDown(){

}

