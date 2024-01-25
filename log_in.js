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



document.getElementById("view").addEventListener("click",function()
{
    var passwordInput = document.getElementById('lozinka');
    
    var slika = document.getElementById("slika");

    if (passwordInput.type === 'password') {
        slika.src="img/hide.png"
        passwordInput.type = 'text';
    } else {
        slika.src = "img/view.png"
      passwordInput.type = 'password';
    }
})




  
  
const log_in = document.getElementById("log_in")


log_in.addEventListener('click', function(){
    // const baseUrl = "http://softinz20233-001-site1.gtempurl.com/api/users";

    let name = document.querySelector('#korisnicko_ime');

    let password = document.querySelector('#lozinka');
  
  
  fetch("users.json")
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    // console.log(data);
    // console.log(data.username,data.password)

  
    for(var i=0;i<data.length;i++)
    {
      if(data[i].username === name.value && data[i].password === password.value)
      {
        console.log(data[i])
        localStorage.setItem("user",data[i].username)
        window.location.href = "search.html"
        
        break;
      }     
    }

    // GRESKE AKO NE NADJE NI JENDOG USER-A
    setTimeout(() => {
      errorFunction();
    }, 200);
    
  })
});


function errorFunction(){
  let tekst = document.querySelector('#error-tekst');
  tekst.style.display = 'block';
}


let inputs = document.querySelectorAll('input');

for(let i = 0; i < inputs.length; i++) {

  inputs[i].setAttribute('autocomplete', 'off'); // sprecavanje autoispune

}  










