function mobileMenu() {
    var originalMenu = document.querySelector('.header ul');
    var pom = document.querySelector('.pomocni');
    let btn = document.querySelector('.header button');

    if(btn.innerText === "MENU") {
        var clonedMenu = originalMenu.cloneNode(true);
        pom.appendChild(clonedMenu); 
        btn.innerText = "CLOSE";
    } else if(btn.innerText === "CLOSE") {
        pom.removeChild(pom.lastChild); 
        btn.innerText = "MENU";
    }
}

/* HEADER KRAJ*/



function searchFunction(){
    
    let unetaVr = document.querySelector('#searchInput').value;

    if(unetaVr != null)  
    {

        if(unetaVr === "Reykjavik")
            window.location.href = "http://localhost:5500/card.html?location=1";
        else
            window.location.href = "http://localhost:5500/not_found.html";
    }

}


document.getElementById('searchInput').addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        searchFunction(); 
    }
});









