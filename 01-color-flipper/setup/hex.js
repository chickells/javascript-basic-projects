const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener ('click', function(){
    //loop that randomly selects a 'digit' from our array 
    // (which is 0-14) and then adds 1 to our count, plus
    // appends hex array value to hexColor.  Once count
    // reaches 6, then assign value of hexColor to the 
    // querySelector('.color)

    // my hexColor function works to randomly select and return one of the hex[x]
    // BUT I am having trouble getting it to loop through 6 times and 
    // append onto itself to create a six digit hex 

    let hexColor = '#';
    let n = 0;
    function hexCreator(n) {
        if (n < 6) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
            console.log(hexColor);
            n += 1
        } else {
        return hexColor
        }
    }
})