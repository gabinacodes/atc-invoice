var y = ""

const a = document.getElementById("stem")
const b = document.getElementById("cohort")
const c = document.getElementById("QHSE")
const d = document.getElementById("consultation")
const x = document.getElementById("amount").value
const z = document.getElementById("para")
const r = document.getElementById("para").innerHTML
document.getElementById("para").style.display = "none"
document.getElementById("payment").style.display = "none"

document.getElementsByClassName("btn")[0].onclick = function name(params) {
    var v = document.getElementsByClassName("email")[0].value
    var e = document.getElementsByClassName("email")[0]
    var reg = /\d/
    var f =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(f.test(v)){
        
        e.style.border = "2px solid black"
        return true;
        
    }else{
       e.style.border = "2px solid red"
        e.style.marginBottom = "7px"
      
       return false
    }
  
}
document.getElementsByClassName("btn").onclick = function name(params) {
    
}

document.getElementById("radio").onclick = function name(params) {
    document.getElementById("para").style.display = "block"
   
    document.getElementById("payment").style.display = "block"
}

amount.addEventListener('input',myfunction)

function myfunction(e) {
    z.textContent = r + e.target.value;
}
stem.addEventListener('click',myffunction)

function myffunction(e) {
    z.textContent = r + e.target.value + " for stem" ;
}
cohort.addEventListener('click',mydfunction)

function mydfunction(e) {
    z.textContent = r + e.target.value + "  for Cohort";
}
QHSE.addEventListener('click',mysfunction)

function mysfunction(e) {
    z.textContent = r + e.target.value + "  for QHSE course";
}
consultation.addEventListener('click',myafunction)

function myafunction(e) {
    z.textContent = r + e.target.value + " for consultation";
}

console.log(x)

