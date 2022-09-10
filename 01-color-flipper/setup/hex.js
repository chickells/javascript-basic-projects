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

    // don't use 'if', use 'for' (haven't learned those yet)

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
        console.log(hexColor);
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
        
})