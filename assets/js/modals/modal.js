export function initModal(triggers, id, content) {
    let modal = null;

    function onClick() {
        if(!modal) {
            modal = createModal(id, content);
         }

         const {modalBg, modalContent} = modal;
         modalBg.classList.add('open');
         setTimeout(() => modalContent.classList.add('shown'), 10);
     };
    
     if(triggers.length) {
         triggers.forEach(trigger => {
            trigger.addEventListener('click', onClick);
         });
     } else {
         triggers.addEventListener('click', onClick);
     }
    
}

function createModal(id, content) {
    const modal = document.createElement('div');
    modal.setAttribute('id', id);
    modal.classList.add('modal-bg');
    modal.innerHTML =  content;

    document.body.appendChild(modal);

    const modalContent = modal.querySelector('.modal');
    const closeBtn = modal.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        modalContent.classList.remove('shown');
    });

    return {
        modalBg: modal,
        modalContent,
        closeBtn
    }
}