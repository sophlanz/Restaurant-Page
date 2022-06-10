

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
    
function openTab(event,tabName) {
        
        const tabcontent = document.getElementsByClassName('tabcontent');
        //hide non-selected tabs
        for (let i=0; i<tabcontent.length;i++) {
            tabcontent[i].style.display = "none";
        }
        //monitor which tab is showing by removing the active classes of the links
        const tablinks = document.getElementsByClassName('tablinksactive');
        for (let i=0; i<tablinks.length;i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
        //show the current tap
       document.getElementById(tabName).style.display = "block";
        //add an active class to it's tab link
        event.currentTarget.className += "active";
        
    };
document.getElementById("title").click();

function jump(explanation) {
    const value =  document.getElementById(explanation);
    const yOffset = -80;
    const y = value.getBoundingClientRect().top + window.pageYOffset + yOffset;
   
   window.scrollTo({top:y, behavior:"smooth"});
};