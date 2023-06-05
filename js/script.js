//Recupero elementi dal DOM

const result = document.getElementById('result');

//Recupero Buttons
const generate = document.getElementById('generates');
const cancel = document.getElementById('cancel');


//Creazione array con la lista della spesa
const list = ['pane', 'olio', 'zucchero', 'mandarini', 'arance'];

//Indice Lista
listIndex = 0;




//FOR SOLUTION//

//Button Generates
generate.addEventListener(`click`, function() {

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.remove(`d-none`);
    result.classList.add(`d-block`);

    for(let i = 0 ; i < list.length; i++ ){
        result.innerHTML += list[i] + "<br>";
    }
})

//Button Cancel
cancel.addEventListener(`click`, function(){

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.add(`d-none`);
})



//WHILE SOLUTION//

//Button Generates
generate.addEventListener(`click`, function() {

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.remove(`d-none`);
    result.classList.add(`d-block`);

    while(listIndex < list.length){
        result.innerHTML += list[listIndex] + "<br>";

        listIndex++;
    }
})

//Button Cancel
cancel.addEventListener(`click`, function(){

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.add(`d-none`);
})