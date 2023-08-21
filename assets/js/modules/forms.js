export function getNbPlayer() {
    return JSON.parse(localStorage.getItem('NbPlayer'));
}

  /**
     * create group label and input
     * @param {*} el 
     */
    export function createGroup(el) {
            let Nb = parseInt(localStorage.getItem("NbPlayer"));
            for(let i = 0; i< Nb; i++) {
                const formGroup = document.createElement('div');
                formGroup.classList.add('form__group');
            
                let label = document.createElement('label');
                label.innerHTML = "Nom du joueur "+(i+1);
                label.setAttribute('for', `name-${i+1}`)
                let input = document.createElement('input');
                input.classList.add('input--space')
                input.setAttribute('id', `name-${i+1}`)
                formGroup.appendChild(label);
                formGroup.appendChild(input);
            el.appendChild(formGroup);    
            }
        }

    
        /**
         * Create article with data for each player to be include 
         * @param {*} el 
         * @returns 
         */
    export   function myPlayer(el, cl) {
        let article = document.createElement('article');
        let artName = document.createElement('p');
        let artPoint = document.createElement('p');

        artName.innerHTML = el.playerName;
        artPoint.innerHTML= el.point;

        artName.classList.add('text--name');
        artPoint.classList.add('text--point');
        article.classList.add('card', `${cl}`)
        article.appendChild(artName);
        article.appendChild(artPoint);

        return article;
    }

    
        /**
         * create div to wrap function myPlayer
         * @returns 
         */
        export function createListPlayer() {
            let NbPlayer = getNbPlayer();
            let list = document.createElement('div')
            list.classList.add('player__list');
    
            for(let i=1; i< NbPlayer+1; i++) {
               let datas = JSON.parse(localStorage.getItem(`player-${i}`));
               list.appendChild(myPlayer(datas, `card--${i}`));
            }
            
            return list;
        }
    

        /**
         * Create an element BTN
         * @param {*} string 
         */
        export function createBTN(string) {
            const btn = document.createElement('input');
            btn.setAttribute('type', 'button');
            btn.classList.add('btn--manche');
            btn.value = `${string}`;
            return btn;
        }