// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// create button click event
// then event click ---> check if links has "show-links"
// create if/then that updates class name upon click
// boom, easy, let's get this bread
const toggle = document.querySelector('.nav-toggle')
const linkClass = document.querySelector('.links')
console.log(linkClass);


toggle.addEventListener('click', function () {
    if (linkClass.contains('.show-links')) {
        // remove 'show-links', else add 'show-links'
    }
})  