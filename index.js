//Open tabs from main page
 function openTab(event, tabName) {
     //remove active class
     event.target.className.replace('tablinksactive', "tablinks");
     //hide all displays
     const tabContent = document.querySelectorAll('.tabcontent')
     for(let i=0; i<tabContent.length;i++){
         tabContent[i].style.display = "none"
     };
     //tab contents already have display set to none, show display of selected tab
     const newTab = document.getElementById(tabName);
     newTab.style.display = "block";
    };

document.getElementById('title').click();
//Jump in the FAQ page the various sections
function jump(explanation) {
    const value =  document.getElementById(explanation);
    const yOffset = -80;
    const y = value.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top:y, behavior:"smooth"});
};
//tab between the menus
function openMenu( event, desiredMenu){
    //get the menu options content
    const menuOptions = document.getElementsByClassName('menuOptions');
    for(let i=0; i<menuOptions.length;i++) {
        menuOptions[i].style.display = "none";
    };
    //remove active classes
    //look to see if the active class shas been added, and remove it
    const active = document.getElementsByClassName('menuLinksactive');
    for(let i=0; i<active.length;i++){
        active[i].className = active[i].className.replace('active', '');
    }
    //display the current target through display block
    document.getElementById(desiredMenu).style.display = "block";
    //add the active class
    event.currentTarget.className += "active";
};
//Modal for reservation
function openModal (){
    const modal = document.getElementById('modalReservations');
   //open the modal
   modal.style.display= "block";
};
function closeModal(){
    const modal = document.getElementById('modalReservations');
    modal.style.display= "none"
};
document.getElementById('brunchMenu').click();
//hamburger toggle
function hamburgerToggle() {
    //get element
    var x = document.getElementById("options");
    //if it's open close it
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
        //if it's closed open it
      x.style.display = "block";
    };
  };
function stickyNav () {
    const nav = document.getElementById("nav");
    //offset top of nav
    const offSet = nav.offsetTop
    if (window.pageYOffset >= offSet) {
        nav.classList.add("sticky")
    } else {
            nav.classList.remove("sticky");
          };
};
//call sticky nav on scroll
window.onscroll = stickyNav();
