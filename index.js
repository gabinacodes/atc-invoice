var y = ""
var a = document.getElementById("stem")
var b = document.getElementById("cohort")
var c = document.getElementById("QHSE")
var d = document.getElementById("consultation")
var x = document.getElementById("amount").value
var z = document.getElementById("para").innerHTML

document.getElementById("para").style.display = "none"
document.getElementById("payment").style.display = "none"

document.getElementById("radio").onclick = function name(params) {
    document.getElementById("para").style.display = "block"
    var nam = ""
    nam = document.getElementById("amount").value
    document.getElementById("para").innerHTML =z + nam ;
    document.getElementById("payment").style.display = "block"
}


console.log(x)

