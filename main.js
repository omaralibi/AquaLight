const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdownMenu');;
const toggleBtnIcon = document.querySelector('.toggle_btn i')

    toggleBtn.onclick = function(){
        dropdownMenu.classList.toggle('open');
        const isOpen = dropdownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    };

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar ul li a');
let navlinksD = document.querySelectorAll('header .dropdownMenu a');

function setActiveLink() {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if ((top >= offset) && (top < (offset + (height*0.8)))) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            navlinksD.forEach(links => {
                links.classList.remove('active');
            });

            let navbarLink = document.querySelector(`header .navbar ul li a[href="#${id}"]`);
            let dropdownLink = document.querySelector(`header .dropdownMenu a[href="#${id}"]`);

            if (navbarLink) navbarLink.classList.add('active');
            if (dropdownLink) dropdownLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

    


    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll('.slider img');
        let currentIndex = 0;
    
        const showSlide = (index) => {
            slides.forEach((slide) => slide.classList.remove('active'));
            slides[index].classList.add('active');
            slides.forEach((slide) => slide.classList.remove('nxt'));
            slides[(index + 1) % slides.length].classList.add('nxt');

        };
    

        setInterval(function(){
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        },2000)
    });
    

    let nav = document.querySelector(".navbar");
    var new_scroll_position = 0;
    var last_scroll_position;
    window.onscroll = function() {
        if(window.scrollY>200 ){
          window.addEventListener('scroll', function() {
            last_scroll_position = window.scrollY;
            if (new_scroll_position < last_scroll_position && last_scroll_position > 500) {
              nav.classList.remove("slideDown");
              nav.classList.add("slideUp");
            } else if (new_scroll_position > last_scroll_position+20) {
              nav.classList.remove("slideUp");
              nav.classList.add("slideDown");
            }
            new_scroll_position = last_scroll_position;
          });
        }
    }