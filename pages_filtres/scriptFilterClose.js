function close(){
    console.log("Au revoir");
    document.getElementById('to-close-menu').style.display="none";
}

document.getElementById("button-close").addEventListener("click", function(){
    close();});

function open(){
    console.log("Coucou")
    document.getElementById('to-close-menu').style.display = "block";
}

document.getElementById("button-open").addEventListener("click", function(){
    open();});