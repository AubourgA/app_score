export  function reset(el) {
    const removeEl = document.querySelector(`${el}`);
    removeEl.remove();
}

export function unShowModal() {
    const modal = document.querySelector('.modal__container')
    modal.classList.add('desactive');
    
}


export  function getNamePlayer() {
    const players = document.querySelectorAll('.form__group > input');
    players.forEach( (item,key) => {
        let ObjPlayer = {
             playerName : item.value,
             point : 0
        };

        localStorage.setItem(`player${key+1}`,  JSON.stringify(ObjPlayer));
     })
 }

 /**
  * Check if every player have record score or not
  * 
  * @param {} el 
  * @returns 
  */
 const verifTour = (el) => {
    let count = 0;
    el.forEach( item => {
        if(item.classList.contains('active')) {
            count++;
        }
    })

    if (count>0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Update point for each player
 */
function updatePlayerPoint(player, point) {
    let playerPoint = document.querySelector(`[data-player=${player}] > .text--point`);
    playerPoint.innerText = point;
  
}





/**
 * Create Modal for assignating points to player
 * @param {*} data 
 */
const createModal = (data) => {

    //definition du conteneur
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal__container');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    
    //definition du btn
    const btnValid = document.createElement('button');
    btnValid.classList.add('modal__btn');
    btnValid.addEventListener('click', ()=> {
        
        let currentPlayer = JSON.parse(localStorage.getItem(data));
        currentPlayer.point = currentPlayer.point + parseInt(inputPoint.value);
        
        localStorage.setItem(data, JSON.stringify(currentPlayer));
        unShowModal();
        updatePlayerPoint(data, currentPlayer.point)
        reset('.desactive');

        //verif fin de partie
        const playerDiv = document.querySelectorAll('.player__list article');    
        const Nb = JSON.parse(localStorage.getItem('NbPlayer'));
        checkEnd(Nb, playerDiv);
    
    });

    btnValid.innerHTML = "Ajouter";

    // definition du label
    const labelPoint = document.createElement('label');
    labelPoint.classList.add('title__h3');
    labelPoint.innerHTML = 'Point Manche : ';

    // definition de l'input
    const inputPoint = document.createElement('input');
    inputPoint.classList.add('modal__input');
    inputPoint.setAttribute('type','number')

    modal.appendChild(labelPoint);
    modal.appendChild(inputPoint);
    modal.appendChild(btnValid);
    modalWrapper.appendChild(modal);

    document.body.prepend(modalWrapper);
}
 
 const addPoint = (e) => {
 
    e.target.classList.remove('active');
    createModal(e.target.dataset.player);
    e.target.removeEventListener('click', addPoint);

  
    
 }

export const handleTour = () => {
     const playerDiv = document.querySelectorAll('.player__list article');               

    
     // Verification du tour complet
    if( !verifTour(playerDiv) ) {
        alert('Manche incomplete');
        return
         };

    // ajout le fonction sur chaque joueur
     playerDiv.forEach(item => {
       item.classList.add('active');
       item.addEventListener('click', addPoint);
     })


 }

 /**
  * Check game over in function point of player
  * @param {} Nb 
  * @param {*} player 
  */
 function checkEnd(Nb, player) {
     
    //si tous les joueur ont leur score ajouté
     if(verifTour(player)) {
         
        let maxPoint = localStorage.getItem('MaxPoint');
       let playerList = [];
       let playerListSorted = [];
       player.forEach(item => item.classList.remove('order'))


       //remplir tableau et le trier
        for(let i=0; i<Nb;i++) {
            playerList.push(JSON.parse(localStorage.getItem('player'+(i+1))));
            playerListSorted = playerList.sort( (a,b) => b.point - a.point ) ;
        }

        for(let i=0; i<Nb; i++) {
            if(JSON.parse(localStorage.getItem('player'+(i+1) )).point >= maxPoint) {
                document.querySelector('.title__h2').innerText = 'Classement';
                document.querySelector('.btn--manche').value = "Fin de partie";
                launchConfetti();   
                playerListSorted.forEach( (item, index) => {
                    
                    document.querySelector(`[data-name=${item.playerName}]`).classList.add('order-'+(Nb-index));
        
                } );
              document.querySelector(`[data-name=${playerListSorted[Nb-1].playerName}] .text--name`).prepend(document.createElement('span').innerText = "🏆");
                
            }
        }       

    }
 }




 function launchConfetti() {
     let myCanvas = document.createElement('canvas');
     document.body.prepend(myCanvas);
     var myConfetti = confetti.create(myCanvas, {
       resize: true,
       useWorker: true
     });

     myConfetti({
        particleCount: 800,
        spread: 250
       
      });
 }









