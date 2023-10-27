var count = 0
function filterClose(){
    console.log("Au revoir");
    document.getElementById('filter-component').style.display="none";
    count = 0;
}

document.getElementById("button-filtre-close").addEventListener("click", function(){
    filterClose();});

function filterOpen(){
    console.log("Coucou")
    if (count == 0){
        document.getElementById('filter-component').style.display = "block";
        count = 1;
    }
    else if (count == 1) {
        filterClose();
    }

}

document.getElementById("button-filtre-open").addEventListener("click", function(){
    filterOpen();});