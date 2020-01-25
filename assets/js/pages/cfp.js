window.onload = () => {
    const img = document.getElementById('img-sticky');
    const features = Array.from(document.querySelectorAll('.feature'));


    function handleStickyImage() {
        const imgTop = img.getBoundingClientRect().top;
        const imgBottom = img.getBoundingClientRect().bottom;
 
        function setSrc(index) {
            img.src = `/images/cfp/speaker${index}.png`;
        }
        
        for (let [index, feature] of features.entries()) {
             const featureTop = feature.getBoundingClientRect().top;
             const featureBottom = feature.getBoundingClientRect().bottom;

             if(index === 0 && featureTop >= imgTop) {
                setSrc(1);
                break;
            } else if(featureTop <= imgTop && featureBottom > imgBottom) {
                const {index} = feature.dataset;
                setSrc(index);
                break;
            } else if(index === features.length - 1 && featureBottom < imgBottom) {
                setSrc(features.length + 1);
            }
        }
    }

    if(window.innerWidth >= 992) {
        document.addEventListener('scroll', handleStickyImage);
        handleStickyImage();
    }
}