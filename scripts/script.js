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
});
