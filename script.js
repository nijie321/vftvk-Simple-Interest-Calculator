// function isValid(s, type="float"){
//     let p = null;
//     if(type === "float"){
//         p = parseFloat(s);
//     }else if(type === "int"){
//         p = parseInt(s);
//     }
    
//     if(isNaN(p)){
//         return false;
//     }

//     return isNaN(p) ? false : p;
// }

function onRangeChange(){
    document.getElementById("output").textContent = document.getElementById("rate_input").value + "%";
}


function compute()
{
    // p = document.getElementById("principal").value;
    p = document.getElementById("amount_input").value;
    rate = document.getElementById("rate_input").value;
    nYear = document.getElementById("year_input").value;

    p_float = parseFloat(p);
    rateFloat = parseFloat(rate);
    nYearFloat = parseFloat(nYear);

    
    if(isNaN(p_float) || p_float <= 0){
        if(isNaN(p_float)){
            alert("Please enter a valid number");
        }
        if(p_float <= 0){
            alert("Please enter a positive number.");
        }
        document.getElementById("amount_input").focus();
    }else{
        total = p_float * (rateFloat/100) * nYearFloat;
        curYear = parseInt(Date().split(" ")[3]);
        document.getElementById("line1").textContent = p_float;
        document.getElementById("line2").textContent = rateFloat+'%';
        document.getElementById("line3").textContent = total;
        document.getElementById("line4").textContent = curYear + parseInt(nYearFloat);
        document.getElementById("spandiv").style.visibility = 'visible';
    }

    // if(isNaN(p_float) || p_float < 0){
    //     console.log("the value entered is invalid.");
    // }else{
    //     console.log(p_float);
    // }

    // if(p_float < 0) {
    //     alert("Please enter a positive number.");
    // }
    
}
        