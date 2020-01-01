(function(){
    const wrappers = document.querySelectorAll('.anim-wrapper');

    revealElements(wrappers);
    window.addEventListener('scroll', () => {
        revealElements(wrappers);
    });
    
    function isInViewport (el) {
        let divider = 2;
        let top = el.offsetTop;
        let left = el.offsetLeft;
        const width = el.offsetWidth;
        const height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
    
        return (
          (top + height) >= window.pageYOffset &&
          left >= window.pageXOffset &&
          top <= (window.pageYOffset + window.innerHeight / divider) &&
          (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }
    
    function revealElements(elements) {
        if(elements.length) {
            elements.forEach(el => {
                if(isInViewport(el)) {
                    el.classList.add('shown');
                };
            })
        }
    }
})();