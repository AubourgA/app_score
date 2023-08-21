export  function reset(el) {
    const removeEl = document.querySelector(`${el}`);
    removeEl.remove();
}

/**
* record in localStorage nb player
*/
export function savePlayer() {
   let NbPlayer = parseInt(document.getElementById("players").value);
   localStorage.setItem('NbPlayer', NbPlayer);
}


export  function getNamePlayer() {
    const players = document.querySelectorAll('.form__group > input');
    players.forEach( (item,key) => {
        let ObjPlayer = {
             playerName : item.value,
             point : 0
        };

        localStorage.setItem(`player-${key+1}`,  JSON.stringify(ObjPlayer));
     })
 }