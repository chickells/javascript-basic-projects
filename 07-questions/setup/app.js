//using selectors inside the element
// traversing the dom


// okay so we have a plus/minus button on a box
// the button icon itself toggles/switches between plus/minus
// think 'show more...' and 'show less' buttons on YT/IG/etc
//  it will toggle a css class 'show-text' within that div
// but you have to write a script that does this ONLY
// to the box it is located within...hmmmmm let's give it a whirl

// first step, target +/- buttons 'question-btn'
// done
// second step, toggle the show/hide class 'show-text'

/* THIS SHIT DON'T WORK YO, was able to select it but even
manually adding 'show-text' to <div class"question-text"> in the 
element inspector doesn't actually show the text.

must be missing something.... hmmmm

ALRIGHT LETS GO TO CALSPEED YA C00NTS*/


const expandBtn = document.querySelector('.question-btn')
const toggleText = document.querySelector('.question-text')

console.log(expandBtn);
expandBtn.addEventListener('click', function (){
    toggleText.classList.toggle('show-text')
});