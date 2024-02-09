appcounter = document.querySelector(".title")
appDecrement = document.querySelector(".menfi")
appIncrement = document.querySelector(".musbet")
appReset = document.querySelector(".reset")

let count = 0;

function Incrementvalue() {
 count++;
 appcounter.textContent = count;
 
 if (count > 0) {
    appcounter.style.color = "gren";
 }
 if (count === 0){
    appcounter.style.color = "black";
 }
}

function Decrementvalue() {
    if (count > 0) {
    count--;
    appcounter.textContent = count;
    }
   
    if (count === 0){
       appcounter.style.color = "black";
    }
   }

   function resetValue(){
    count = 0

    appcounter.textContent = count;

    appcounter.style.color = "black";
   }
   

   appDecrement.addEventIstener("click",Decrementvalue)
   appIncrement.addEventIstener("click",Incrementvalue)
   appReset.addEventIstener("click",resetValue)
