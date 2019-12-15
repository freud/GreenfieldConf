function initModal({id, content, submitted = false, validate = false}) {
    let modal = document.getElementById(id);
    const created = !!modal;
    
    if (!created) {
        modal = createModal({id, content});
        const form = modal.querySelector('form');
        if(validate) {
            validateForm(form, submitted);
        }
        handleCollapse(modal);
    }

        if(created) {
            modal.innerHTML = content;
            createCloseModalHandler(modal);
        }
        const modalContent = modal.querySelector('.modal');

        modal.classList.add('open');
        document.body.style.overflowY = 'hidden';
        setTimeout(() => modalContent.classList.add('shown'), 10);         
}

function createModal({id, content}) {
    const modal = document.createElement('div');
    modal.setAttribute('id', id);
    modal.classList.add('modal-bg');
    modal.innerHTML =  content;

    document.body.appendChild(modal);

    createCloseModalHandler(modal);

    return modal;
} 

function createCloseModalHandler(modal) {
    const modalContent = modal.querySelector('.modal');
    const closeBtn = modal.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        modalContent.classList.remove('shown');
        document.body.style.overflowY = 'auto';
    });
}

function validateForm(form) {
    let submitted = false;
    const emailInput = form.querySelector('input[type="email"]');
    const checkbox = form.querySelector('input[type="checkbox"]');

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateCheckbox();
        validateEmail();
        if(validateEmail() && validateCheckbox()) {
            form.submit();
        }
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

        return isValid;
    }

    function validateCheckbox() {
        const isValid = checkbox.checked;
        if(!isValid) {
            checkbox.classList.add('invalid');
        } else {
            checkbox.classList.remove('invalid');
        }
        submitted = true;

        return isValid;
    }
}

function handleCollapse(modal) {
    const collapseToggle = modal.querySelectorAll('.toggle-collapse');

    if(collapseToggle.length) {
        collapseToggle.forEach(toggler => {
            toggler.addEventListener('click', () => {
                const target = modal.querySelector(toggler.dataset.target);
                target.classList.toggle('show');
                if(target.classList.contains('show')) {
                    toggler.innerText = toggler.dataset.less;
                } else {
                    toggler.innerText = toggler.dataset.more;
                }
            });
        });
    }
}