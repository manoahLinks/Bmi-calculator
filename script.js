function calcBmi (weight, height){
    weight = document.querySelector('#weight').value;
    height = document.querySelector('#height').value;


    document.querySelector('#bmiresult').innerHTML = parseInt(weight) / ((parseFloat(height) * parseFloat(height)));
}
// modal section
const modalClose = document.querySelector('#close');
const modal1 = document.querySelector('#modalBmi');
const bmiBtn = document.querySelector('#btn1');

bmiBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    modal1.classList.add('myModals-display');


})

modalClose.addEventListener('click', function (event){

    event.preventDefault();
modal1.classList.remove('myModals-display')
})

