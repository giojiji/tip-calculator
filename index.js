document.getElementById("btn5").addEventListener("click", btn5);
document.getElementById("btn10").addEventListener("click", btn10);
document.getElementById("btn15").addEventListener("click", btn15);
document.getElementById("btn25").addEventListener("click", btn25);
document.getElementById("btn50").addEventListener("click", btn50);



var validate = function(e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }


  function onlyNumberKey(evt) {
              
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function onlyNumberKeyy(evt) {
              
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) && ASCIICode !== 46)
        return false;
    return true;
}


let tipamount = document.getElementById("tipamount")
let totaltipamount = document.getElementById("totaltipamount")
let percentbox = document.getElementsByClassName("percent")
let personquantity; 
let amount;
let sumreset = false
let percentinp;
let totaltip;
let total
function calculate () {
    amount = document.getElementById("amount").value
    amount = Number(amount)
    document.getElementById("percent-inp").value = ""
    document.getElementById("personquantity").value = ""
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
    document.getElementById("personquantity").disabled = false
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
}

function percent () {
    percentinp = document.getElementById("percent-inp").value
    percentinp = Number(percentinp)
    totaltip = amount * percentinp / 100
    total = amount + (amount * percentinp / 100)
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("personquantity").value = ""
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
}


function btn5 () {
    amount = document.getElementById("amount").value
    amount = Number(amount)
    totaltip = amount * 5 / 100
    total = amount + (amount * 5 / 100)
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("btn5").style.background = "#26C2AE";
    document.getElementById("personquantity").value = ""
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
    document.getElementById("percent-inp").value = ""
}

function btn10 () {
    amount = document.getElementById("amount").value
    amount = Number(amount)
    totaltip = amount * 10 / 100
    total = amount + (amount * 10 / 100)
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("btn10").style.background = "#26C2AE";
    document.getElementById("personquantity").value = ""
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
    document.getElementById("percent-inp").value = ""
}

function btn15 () {
    amount = document.getElementById("amount").value
    amount = Number(amount)
    totaltip = amount * 15 / 100
    total = amount + (amount * 15 / 100)
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("btn15").style.background = "#26C2AE";
    document.getElementById("personquantity").value = ""
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
    document.getElementById("percent-inp").value = ""
}

function btn25 () {
    amount = document.getElementById("amount").value
    amount = Number(amount)
    totaltip = amount * 25 / 100
    total = amount + (amount * 25 / 100)
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("btn25").style.background = "#26C2AE";
    document.getElementById("personquantity").value = ""
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
    document.getElementById("percent-inp").value = ""
}

function btn50 () {
    amount = document.getElementById("amount").value
    amount = Number(amount)
    totaltip = amount * 50 / 100
    total = amount + (amount * 50 / 100)
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("btn50").style.background = "#26C2AE";
    document.getElementById("personquantity").value = 0
    document.getElementById("not-zero").style.display = "flex"
    document.getElementById("zerobox").style.border = "1px solid red"
    document.getElementById("percent-inp").value = ""
}

function calculateperson() {
    personquantity = document.getElementById("personquantity").value
    personquantity = Number(personquantity)
    if (personquantity != 0 && !isNaN(totaltip)){
    fulltip = totaltip / personquantity
    fullamount = total / personquantity
    tipamount.value = "$" + fulltip.toFixed(2)
    totaltipamount.value = "$" + fullamount.toFixed(2)
    document.getElementById("not-zero").style.display = "none"
    document.getElementById("zerobox").style.border = "none"
    if(fullamount > 0) {
        document.getElementById("reset").style.backgroundColor = "#26C2AE"
        sumreset = true
    }
    }
}


function resetamount () {
    if (sumreset == true) {
    tipamount.value = "$" + "0.00"
    totaltipamount.value = "$" + "0.00"
    if(personquantity > 0) {
        document.getElementById("reset").style.backgroundColor = "#0D686D"
    }
    personquantity = 0
    totaltip = totaltip * 0
    total = total * 0
    for(let i = 0; i < percentbox.length; i++)
    {percentbox[i].style.background = "#00474B"}
    document.getElementById("amount").value = ""
    document.getElementById("personquantity").value = ""
    document.getElementById("percent-inp").value = ""
    document.getElementById("personquantity").disabled = true
    document.getElementById("not-zero").style.display = "none"
    document.getElementById("zerobox").style.border = "none"
    sumreset = false
}
}
document.getElementById("reset").addEventListener("mouseover", mouseOver);
document.getElementById("reset").addEventListener("mouseout", mouseOut);



function mouseOver() {
    if(personquantity > 0 && amount > 0) {
    document.getElementById("reset").style.background = "#9FE8DF"
}
  }
  
  function mouseOut() {
    if(personquantity > 0 && amount > 0) {
    document.getElementById("reset").style.background = "#26c2ae"}
  }


