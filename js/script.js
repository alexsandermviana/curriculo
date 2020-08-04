var esquemaDeCores = "blue"
var botao = document.querySelector("#trocarCores");
function trocarCor(){ 
    if(esquemaDeCores == "blue"){
        document.getElementById('trocarCores').style.backgroundColor = "#700202";
        document.getElementById('aboutMe').style.backgroundColor = "#700202";
        document.getElementById('education').style.backgroundColor = "#991313";
        document.getElementById('photo').style.borderColor = "#ff9c9c";
        esquemaDeCores = "red";
    }else if(esquemaDeCores == "red"){
        document.getElementById('trocarCores').style.backgroundColor = "#003b12";
        document.getElementById('aboutMe').style.backgroundColor = "#003b12";
        document.getElementById('education').style.backgroundColor = "#006411";
        document.getElementById('photo').style.borderColor = "#a4ff9c";
        esquemaDeCores = "green";
    }else if(esquemaDeCores = "green"){
        document.getElementById('trocarCores').style.backgroundColor = "#023b70";
        document.getElementById('aboutMe').style.backgroundColor = "#023b70";
        document.getElementById('education').style.backgroundColor = "#004d96";
        document.getElementById('photo').style.borderColor = "#81c6ff";
        esquemaDeCores = "blue";
    }

}
// #023b70 #004d96 #81c6ff
// #700202 #af1313 #ff9c9c
// #003b12 #006411 #a4ff9c
botao.onclick = trocarCor;