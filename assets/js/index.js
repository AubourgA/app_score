window.addEventListener("DOMContentLoaded", ()=> {
    const elMain = document.querySelector('main');

    const btnPlayer = document.querySelector('#btn__player')


    function getNumberPlayer() {
        let players = document.getElementById("players").value; 
        return players;
    }

    function savePlayer() {
        let NbPlayer = parseInt(getNumberPlayer());
        localStorage.setItem('NbPlayer', NbPlayer);
    }


    function reset() {
        const elForm = document.querySelector('form');
        elForm.remove();
    }

    function createGroup(el) {
        let Nb = parseInt(localStorage.getItem("NbPlayer"));
        for(let i = 0; i< Nb; i++) {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form__group');
           
            let label = document.createElement('label');
            label.innerHTML = "Nom du joueur "+(i+1);
            label.setAttribute('for', `name-${i+1}`)
            let input = document.createElement('input');
            input.setAttribute('id', `name-${i+1}`)
            formGroup.appendChild(label);
            formGroup.appendChild(input);
        el.appendChild(formGroup);    
        }
        
    
    }
    //Create new form for name of player
    function createFrom() {
        const form = document.createElement('form');
              
        createGroup(form); 
        const btnValidate = document.createElement('button');
        btnValidate.innerHTML = "DEMARRER PARTIE";
        form.appendChild(btnValidate);
        elMain.appendChild(form);
       
    }




    //launch function 
    btnPlayer.addEventListener('click', (e)=> {
        e.preventDefault();
        savePlayer();
        reset();
        createFrom();
    })

    

})