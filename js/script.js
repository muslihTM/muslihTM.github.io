/* Navbar mobile*/
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
/* slider */
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
  indicators: false
}); 

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 50
});

const elem = document.querySelectorAll('select');
M.FormSelect.init(elem);

const collabs = document.querySelectorAll('.collapsible');
M.Collapsible.init(collabs);

var cars = document.querySelectorAll('.carousel');
M.Carousel.init(cars);

