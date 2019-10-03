import {initModal} from './modal.js';

const signupBtns = document.querySelectorAll('.lang-link-en');
const id = 'modal-english-version';
const content = `
    <div class="modal">
        <div class="row">
            <div class="heading col-9 mb-32">
                <div class="frame-fill">
                    <div class="rect"></div>
                    <div class="content">
                        <p class=mb-8>Ups!</p>
                        <h2 class="h1 mb-16">English version coming soon</h2>
                        <p>We work hard to provide you with the best possible experience. Please be patient. So let's keep in touch.</p>
                    </div>
                </div>
            </div>
        </div>
        <form class="mb-32">
            <div class="col-md-10 col-lg-7">
                <input type="email" class="form-input mb-32" placeholder="Your e-mail" id="email-english" />
                <label class="d-none" for="email">Twój adres e-mail</label>
            </div>
            <input type="checkbox" class="checkbox" id="agreement"/>
            <label for="agreement">
            I agree to the processing of my personal data in accordance with the PDP Act, for marketing purposes. Providing personal data is voluntary. I know that I have the right to access and correct my personal data, request the cessation of their processing. The administrator of the data is the conf.IT Foundation ul. Rydza Śmigłego 62/8, Zielona Góra, Poland. We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices here.
            </label>  
        </form>
        <button class="btn primary">Zapisuję się!</button>
        <button class="close">
            <span class="icon-clear"></span>
        </button>
    </div>
`;

initModal(signupBtns, id, content)