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
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal__container');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    
    //btn
    const btnValid = document.createElement('button');
    btnValid.classList.add('modal__btn');
    btnValid.addEventListener('click', ()=> {
        let currentPlayer = JSON.parse(localStorage.getItem(data));
        currentPlayer.point = currentPlayer.point + parseInt(inputPoint.value);
     
        localStorage.setItem(data, JSON.stringify(currentPlayer));
        unShowModal();
       
        updatePlayerPoint(data, currentPlayer.point)

    });
    btnValid.innerHTML = "Ajouter";

    //label
    const labelPoint = document.createElement('label');
    labelPoint.classList.add('title__h3');
    labelPoint.innerHTML = 'Point Manche : ';

    //input
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
    
    if( !verifTour(playerDiv) ) {
        alert('Manche incomplete');
        return
         };

     playerDiv.forEach(item => {
       item.classList.add('active');
       item.addEventListener('click', addPoint);

     })
 }


 