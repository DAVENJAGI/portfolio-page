document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.site_text_top');

    const homeLink = document.querySelector('.site_text_top[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.outer_education_div').forEach(outerDiv => {
        const dotDiv = outerDiv.querySelector('.top_round_div');
        
        outerDiv.addEventListener('mouseenter', () => {
            dotDiv.style.backgroundColor = "#86D5EE";
        });

        outerDiv.addEventListener('mouseleave', () => {
            dotDiv.style.backgroundColor = "gray";
        });
    });


    const allDivs = document.querySelectorAll('div');
    allDivs.forEach((div, i) => {
        setTimeout(() => {
        div.classList.add('bounce-in');
        }, i * 100);
    });


    const menuToggle = document.getElementById("menu_toggle");
    const navMenu = document.getElementById("second_part_header");
    const overlayDiv = document.getElementById('overlay');

    menuToggle.addEventListener("change", () => {
        if (menuToggle.checked) {
        navMenu.style.display = "flex";
        overlayDiv.style.visibility = "visible";
        } else {
        navMenu.style.display = "none";
        }
    });

    window.addEventListener("load", () => {
        if (window.innerWidth < 768) {
        navMenu.style.display = "none";
        }
    });

    
    if (navMenu && overlayDiv) {
        const isHidden = window.getComputedStyle(navMenu).display === 'none';
        console.log('Is sidebar item hidden?', isHidden);
    
        if (!isHidden && window.innerWidth <= 768) {
            overlayDiv.style.visibility = 'visible';
        }
    }

    overlayDiv.addEventListener("click", (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        const isClickOnLabel = event.target.closest("label[for='menu_toggle']");
        overlayDiv.style.visibility = 'hidden';
    
        if (!isClickInsideMenu && !isClickOnToggle && !isClickOnLabel) {
            navMenu.style.display = "none";
            menuToggle.checked = false;
        }
    });


    window.addEventListener('load', () => {
        document.querySelectorAll('.top_greetings').forEach(el => {
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = '';
        });
    });

    function triggerBounce() {
        const icons = document.querySelectorAll('.contact_tabs');
        icons.forEach(icon => {
          icon.classList.add('bounce');
          setTimeout(() => {
            icon.classList.remove('bounce');
          }, 700);
        });
    }
      
    triggerBounce();
    setInterval(triggerBounce, 2 * 60 * 1000);
    window.addEventListener('resize', () => {
        location.reload();
    })
});
