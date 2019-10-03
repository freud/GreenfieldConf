(function(){
    const sections = document.querySelectorAll('.section:not(.section-frame)');
    const sectionsFrame = document .querySelectorAll('.section-frame');
    
    revealElements(sections);
    revealElements(sectionsFrame, true);
    window.addEventListener('scroll', () => {
        revealElements(sections);
        revealElements(sectionsFrame, true);
    });
    
    function isInViewport (el, entire = false) {
        entire = entire ? 1 : 1.5;
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
          top >= window.pageYOffset &&
          left >= window.pageXOffset &&
          (top + height / entire) <= (window.pageYOffset + window.innerHeight) &&
          (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }
    
    function revealElements(elements, entire = false) {
        if(elements.length) {
            elements.forEach(el => {
                if(isInViewport(el, entire)) {
                    el.classList.add('shown');
                };
            })
        }
    }
})();