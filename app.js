const dateOfBirthdate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#check-btn");
const outputDiv = document.querySelector(".output");

function calculation(){
    
    var sum = 0;
    for(let i=0; i<dateOfBirthdate.length; i++){
        if(date[i]==="-"){
            continue;
        }else{
            sum+=Number(date[i]);
        }
        
    }
if(sum%luckyNumber===0){
    displayMessage("Your Birthday is Lucky !");
}else{
    displayMessage("Not so lucky Day !");
}
function displayMessage(message){
    outputDiv.innerText = message;
}

}

check.addEventListener("click", calculation);