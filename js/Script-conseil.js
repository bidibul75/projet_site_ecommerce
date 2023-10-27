function close(){
    console.log("Au revoir");
    var conseilDiv = document.getElementById('to-close-conseil');
    conseilDiv.classList.remove('show');
}

document.getElementById("button-close-conseil").addEventListener("click", function(){
    close();

});

function open(){
    console.log("Coucou");
    var conseilDiv = document.getElementById('to-close-conseil');
    conseilDiv.classList.add('show');
}

document.getElementById("button-open-conseil").addEventListener("click", function(){
    open();

});