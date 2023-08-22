import { reset, savePlayer, getNamePlayer, handleTour } from './modules/utils.js';
import { title } from './modules/style.js';
import { createGroup, createListPlayer } from './modules/forms.js';

window.addEventListener("DOMContentLoaded", ()=> {
    const elMain = document.querySelector('main');

    const btnPlayer = document.querySelector('#btn__player')


        /**
         * Create formular with player to start a game out of generic div
         */
       function createFrom() {
            const form = document.createElement('form');
            createGroup(form); 
            const btnValidate = document.createElement('button');
            btnValidate.classList.add('btn--next')
            btnValidate.innerHTML = "DEMARRER PARTIE";
            form.appendChild(btnValidate);
            btnValidate.addEventListener('click', handleGame);
            elMain.appendChild(form);

        }


     /**
         * Create an element BTN nouvelle manche
         * @param {*} string 
         */
       function createBTN(string) {
        const btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.classList.add('btn--manche');
        btn.value = `${string}`;
        btn.addEventListener('click', handleTour);

        return btn;
    }



    /**
     * start Game
     */
    function handleGame(e) {
        e.preventDefault();
        getNamePlayer();
        reset('form');
        reset('h2')
        elMain.appendChild(title("Classement",'title--center'));
        elMain.appendChild(createListPlayer());
        elMain.appendChild(createBTN("Nouvelle Manche"));
    }


    /**
     * Create Game
     *  */ 
    btnPlayer.addEventListener('click', (e)=> {
        e.preventDefault();
        localStorage.clear();
        savePlayer();
        reset('form');
        createFrom();
    })

})