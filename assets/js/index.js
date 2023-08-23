import { reset, getNamePlayer, handleTour } from './modules/utils.js';
import { title } from './modules/style.js';
import { createGroup, createListPlayer } from './modules/forms.js';

window.addEventListener("DOMContentLoaded", ()=> {
    const elMain = document.querySelector('main');

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
     * Lauch game : create player list for starting game
     */
    function handleGame(e) {
        e.preventDefault();
        getNamePlayer();
        reset('form');
        reset('h2')
      
        elMain
            .appendChild(title("Classement",'title--center'))
            .appendChild(createListPlayer())
            .appendChild(createBTN("Nouvelle Manche"));
    }



   /**
    * Create Step 1
    */
    const form = document.querySelector('form');
        // get form data
        form.addEventListener("submit", (e)=> {
            const data = new FormData(form);
            let res;
            for (const entry of data) {
               res = entry[1];
            }
            e.preventDefault();
        //save nb player in localStorage
            localStorage.setItem('NbPlayer', res);
            reset('form');
            createFrom();
        })
    

})