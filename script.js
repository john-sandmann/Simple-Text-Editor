function init(){

    if(localStorage.getItem("text")){
        document.getElementById("input").innerHTML = localStorage.getItem("text");
    }

    document.getElementById("input").addEventListener('input', function(){
        localStorage.setItem('text', document.getElementById("input").innerHTML.toString());
    });

    document.getElementById("b-button").addEventListener('click', function(){changeText("bold")});
    document.getElementById("i-button").addEventListener('click', function(){changeText("italic")});
    document.getElementById("undo-button").addEventListener('click', function(){changeText("undo")});
    document.getElementById("redo-button").addEventListener('click', function(){changeText("redo")});
}

function changeText(commandToExec){
    document.execCommand(commandToExec);
}

document.addEventListener('load', init());