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
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if ((top >= offset) && (top < offset + height)) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                });
                navlinksD.forEach(links => {
                    links.classList.remove('active');
                });
                document.querySelector('header .navbar ul li a[href*="' + id + '"]').classList.add('active');
                document.querySelector('header .dropdownMenu a[href*="' + id + '"]').classList.add('active');
            }
        });
    };
    


    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll('.slider img');
        const prevBtn = document.querySelector('.previous');
        const nextBtn = document.querySelector('.next');
        let currentIndex = 0;
    
        const showSlide = (index) => {
            slides.forEach((slide) => slide.classList.remove('active'));
            slides[index].classList.add('active');
        };
    
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
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