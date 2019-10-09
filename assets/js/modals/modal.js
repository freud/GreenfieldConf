export function initModal(triggers, id, content, submitted = false) {
    let modal = null;

    function onClick() {
        if(!modal) {
            modal = createModal(id, content);
            const form = modal.modalContent.querySelector('form');
            validateForm(form, submitted);
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

function validateForm(form) {
    let submitted = false;
    const emailInput = form.querySelector('input[type="email"]');
    const checkbox = form.querySelector('input[type="checkbox"]');

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateEmail();
        validateCheckbox();
    });

    emailInput.addEventListener('input', () => {
        if(submitted) {
            validateEmail();
        }
    });

    checkbox.addEventListener('change', () => {
        if(submitted) {
            validateCheckbox();
        }
    });

    function validateEmail() {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = regex.test(emailInput.value);
        if(!isValid) {
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.remove('invalid');
        }
        submitted = true;
    }

    function validateCheckbox() {
        const isValid = checkbox.checked;
        if(!isValid) {
            checkbox.classList.add('invalid');
        } else {
            checkbox.classList.remove('invalid');
        }
        submitted = true;
    }
}