function init(){
    document.getElementById("b-button").addEventListener('click', function(){changeText("bold")});
    document.getElementById("i-button").addEventListener('click', function(){changeText("italic")})
}

function changeText(commandToExec){
    document.execCommand(commandToExec);
}

document.addEventListener('load', init())