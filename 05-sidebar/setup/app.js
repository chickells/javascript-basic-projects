const menuToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeSidebar = document.querySelector('.close-btn')

console.log(closeSidebar)

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar')
})

closeSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
})