var navbar = document.querySelector('nav') ; 
var nav_burger = document.getElementById('nav-burger') ; 

if(window.innerWidth < 950){
    navbar.className = "phone-nav"

}
else{
    navbar.className = "desktop-nav"

}

window.addEventListener("resize", (event)=>{
    if(window.innerWidth < 950){
        navbar.className = "phone-nav"

    }
    else{
        navbar.className = "desktop-nav"

    }
});

nav_burger.addEventListener('click', function() {
    navbar.classList.toggle('expanded');
  });
