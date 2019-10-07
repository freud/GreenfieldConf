(function(){

    if(!getCookie('cookie-accept')) {
        const header = document.querySelector('header');
        const cookieBar = document.createElement('div');
        cookieBar.classList.add('cookie-bar');
        cookieBar.innerHTML = `
            <p class="mb-0">
                Używamy plików cookie 
                <span class="icon-cookie"></span> 
                w celu zapewnienia lepszych wrażeń. Kontynuując korzystanie z tej strony internetowej, akceptujesz naszą politykę cookie.
            </p>
            <button class="close ml-8 ml-lg-32 ml-xl-80">
                <span class="icon-clear"></span>
            </button>
        `;

        const closeBtn = cookieBar.querySelector('.close');
        header.prepend(cookieBar)

        closeBtn.addEventListener('click', () => {
            setCookie('cookie-accept', true);
            cookieBar.classList.add('fade-out');
        });

        cookieBar.addEventListener('transitionend', e => {
            if(e.target === cookieBar) {
                cookieBar.style.display = 'none';
            }
        });
    }

    function setCookie(name, value, days = 365, path = '/') {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name} = ${encodeURIComponent(value)}; expires=${expires}; path=${path}`
    }

    function getCookie(name) {
        const cookie = document.cookie.split('; ').filter(el => {
            const cookieName = el.split('=')[0];
            return cookieName === name;
        }).join();

        return cookie.slice(cookie.indexOf('=') + 1)
    }

})();