//nav stickybar 
window.onscroll = stickyNav();


function stickyNav() {
//get the bar
const nav = document.getElementById("nav");
//get the offset top position 
const sticky = nav.offsetTop
//add sticky class list when offset position is less than
//or equal to pageYoffset or else remove it
    if(window.pageYOffset >= sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};