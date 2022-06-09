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
    function openTab(event,option) {
        
        const tabContent = document.getElementsByClassName('tabcontent');
        //hide non-selected tabs
        for (i=0; i<tabContent.length;i++) {
            tabContent[i].style.display = "none";
        }
        //monitor which tab is showing by removing the active classes of the links
        const tabLinks = document.getElementsByClassName('tablinks');
        for (i=0; i<tabLinks.length;i++) {
            tabLinks[i].className = tabLinks[i].className.replace('active', "");
        }
        //show the current tap
        document.getElementById(option).style.display = "block";
        //add an active class to it's tab link
        event.currentTarget.className += "active";
    }
//call the homepage
document.getElementById('title').click();