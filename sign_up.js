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


                    
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": []
};


let inputs = document.querySelectorAll('input');



for(let i=0; i < inputs.length; i++)
{
    inputs[i].addEventListener('change', function(event){


        let currentInput = event.target; 


        let inputName = currentInput.getAttribute('name');
        let inputValue = currentInput.value;

        // console.log(inputName + " je promenjen. Nova vrednost: " + inputValue);


        if(inputValue.length > 4)
        {
            errors[inputName] = [];

            switch(inputName)
            {
                case 'ime_prezime':
                    let unosTeksta = inputValue.trim().split(" ");
                    if(unosTeksta.length < 2)
                    {
                        errors[inputName].push("Please enter Name and Surname");
                    }
                break;
                
                case 'email':
                    if(!mailValidation(inputValue))
                    {
                        errors[inputName].push("Incorrect E-mail address");
                    }
                break;
                
                case 'lozinka':
                    if(!passwordValidation(inputValue))
                    {
                        errors[inputName].push("The password must contain a special character");
                    }
                break; 
                
                case 'ponovi_lozinku':
                    let lozinka = document.querySelector('#lozinka').value;
                    if(lozinka != inputValue)
                    {
                        errors[inputName].push("Passwords do not match")
                    }
            }
        }
        else
        {
            errors[inputName] = ['The field must contain at least 5 characters'];
        }


        populateErrors(errors);

    });
}



function populateErrors(){

    for(let elem of document.querySelectorAll('ul.lista'))
    {
        elem.remove();
    }

    for(let key of Object.keys(errors))
    {
        let input = document.querySelector(`input[name="${key}"`);

        let parentElement = input.parentElement;

        let lista = document.createElement('ul');
        lista.className = "lista";
        parentElement.appendChild(lista);

        
        for (let i = 0; i < errors[key].length; i++) 
        {
            let error = errors[key][i];

            let li = document.createElement('li');
            li.innerText = error;

            lista.appendChild(li);
        }

    }
}


function passwordValidation(p){
    if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(p))
        return true;
    else    
        return false;
}

function mailValidation(m){
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(m))
        return true;
    else    
        return false;
}



for(let i = 0; i < inputs.length; i++) {

  inputs[i].setAttribute('autocomplete', 'off'); // sprecavanje autoispune

} 


// let jezik = document.querySelector('#language');

// jezik.addEventListener('click',function(){
//     if(jezik.innerText === "SR")
//     {
//         jezik.innerText = "EN";

//         translateToSerbian();
//     }
//     else if(jezik.innerText === "EN")
//     {
//         jezik.innerText = "SR";

//         translateToEnglish();
//     }
// }); 




function viewFunction(event)
{
    event.preventDefault();

    let parentDiv = event.currentTarget.closest('div');

    let input = parentDiv.querySelector('input');

    let picture = parentDiv.querySelector('img');

    if(input.type === 'password')
    {
        picture.src = "img/hide.png"

        input.type = 'text';
    }
    else
    {
        picture.src = "img/view.png"; 

        input.type = 'password';
    }
}








