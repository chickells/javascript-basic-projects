// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('reset')){
            count = 0;
        }
        else if (styles.contains('increase')){
            count++;
        }

        // ROUGH IDEA FOR HOW TO CHANGE COLOR ALONGSIDE COUNT, BUT 
        // IDK HOW TO TARGET CONTENT COLOR YET
        // SAVING NOW TO FINISH LATER 
        //
        // IT'S 'value.style.color = xxxxxx'
        // value ---> is the ID of my span (where text is)
        // style ---> targets a css style to change
        // color ---> self explanatory.

        if (count < 0) {
            value.style.color = 'red';
        } 
        else if (count === 0) {
            value.style.color = 'black';
        } 
        else if (count > 0) {
            value.style.color = 'green';
        }
        value.textContent = count;
    })
})