// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// notes: attempting to literally copy and paste previous
// code because it seems to be literally the same thing
// but diff variables/classes

// doing this because if i were actually being paid for this,
// you bet your ass i'd be as lazy as possible to 
// maximize by output per time
// alright, VAMOS

const openBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

console.log(modal);

openBtn.addEventListener('click', function() {
    modal.classList.toggle('open-modal')
})

closeBtn.addEventListener('click', function () {
    modal.classList.toggle('open-modal')
})