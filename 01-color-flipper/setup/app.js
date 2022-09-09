const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 and 3 -- colors[x] (selecting all of our array of colors)
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    // gets random WHOLE number (rounded down with math.floor) from 0 to length of array
    return Math.floor(Math.random() * colors.length);
}