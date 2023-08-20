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

    function createFrom() {
        const form = document.createElement('form');
        const formGroup = document.createElement('div');

       
        formGroup.classList.add('form__group');
        form.appendChild(formGroup);

        const btnValidate = document.createElement('button');
        btnValidate.innerHTML = "DEMARRER PARTIE";
        form.appendChild(btnValidate);
        elMain.appendChild(form);

    }

    btnPlayer.addEventListener('click', (e)=> {
        e.preventDefault();
        savePlayer();
        reset();
        createFrom();
    })

    

})