// const menu__icon = document.getElementById("menu__icon"); 
// const nav__list = document.getElementById("nav-list"); 

// menu__icon.addEventListener('click', () =>{
// nav__list.classList.toggle('active')

  
// })
// menu_close.addEventListener('click', () =>{

//   mobile__menu.style.display = "none"
//   menu__icon.style.display = "block"
//   menu_close.style.display = "none"
  
// })

// $('.navTrigger').click(function () {
//   $(this).toggleClass('active');
//   console.log("Clicked menu");
//   $("#mainListDiv").toggleClass("show_list");
//   $("#mainListDiv").fadeIn();

// });

// PARALLAX SECTION
const parallax = document.getElementById("first");
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.8 + "px";
})