import {initModal} from './modal.js';

const signupBtns = document.querySelectorAll('.btn-signup');
const id = 'modal-newsletter';
const content = `
    <div class="modal">
        <div class="row">
            <div class="heading col-9 mb-80">
                <div class="frame-fill">
                    <div class="rect"></div>
                    <div class="content">
                        <p class=mb-8>In Touch!</p>
                        <h2 class="h1">Zapisz się <br class="d-none d-lg-block" /> do newslettera</h2>
                    </div>
                </div>
            </div>
        </div>
        <form novalidate>
            <div class="col-md-10 col-lg-7">
                <input type="email" class="form-input" placeholder="Twój adres e-mail" id="email" required />
                <div class="invalid-message mt-8 ml-16">Enter a valid email address</div>
                <label class="d-none" for="email">Twój adres e-mail</label>
            </div>
            <input type="checkbox" class="checkbox" id="agreement"/>
            <label for="agreement">
                Wyrażam zgodę na przetwarzanie moich danych osobowych, zgodnie z ustawą o ochronie danych osobowych, do celów marketingowych. Podanie danych osobowych jest dobrowolne. Wiem, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych jest Fundacja conf.IT ul. Rydza Śmigłego 62/8, Zielona Góra. Wykorzystujemy Mailchimp jako naszą platformę marketingową. Klikając poniżej, potwierdzasz, że Twoje informacje zostaną przekazane Mailchimp w celu ich przetworzenia. Dowiedz się więcej o praktykach ochrony prywatności stosowanych przez Mailchimp tutaj.
            </label>  
            <button type="submit" class="btn primary mt-32">Zapisuję się!</button>
        </form>
        <button class="close">
            <span class="icon-clear"></span>
        </button>
    </div>
`;

initModal(signupBtns, id, content)