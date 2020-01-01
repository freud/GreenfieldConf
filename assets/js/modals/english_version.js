document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.lang-link-en');
    const id = 'modal-english-version';
    const content = `
        <div class="modal">
            <div class="row">
                <div class="heading col-sm-9 mb-32">
                    <div class="frame-fill">
                        <div class="rect"></div>
                        <div class="content">
                            <p class=mb-8>Ups!</p>
                            <h2 class="h1 mb-16">English version coming soon</h2>
                            <p>We work hard to provide you with the best possible experience. Please be patient. So let's stay in touch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <form 
                novalidate 
                action="https://greenfieldconf.us20.list-manage.com/subscribe/post?u=28984104b9db97fbf1e0e8c4f&amp;id=10ad75a3a1" 
                method="POST"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
            >
                <div class="col-md-10 col-lg-7 px-0">
                    <input
                        type="email" 
                        class="form-input" 
                        placeholder="Twój adres e-mail" 
                        id="mce-EMAIL"
                        name="EMAIL" 
                        required 
                    />
                    <div class="invalid-message mt-8 ml-16">
                        Enter a valid email address
                    </div>
                    <label class="d-none" for="mce-EMAIL">
                        Twój adres e-mail
                    </label>
                </div>
                <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="gdpr_5581"
                    name="gdpr[5581]"
                />
                <label for="gdpr_5581">
                    I agree to the processing of my personal data in accordance with the PDP Act, for marketing purposes.
                    <div class="collapse" id="en-agreement-collapse">
                        Providing personal data is voluntary. I know that I have the right to access and correct my personal data, request the cessation of their processing. The administrator of the data is the conf.IT Foundation ul. Rydza Śmigłego 62/8, Zielona Góra, Poland. We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices 
                        Mailchimp 
                        <a href="https://mailchimp.com/legal/privacy/" target="_blank" class="text-primary">here</a>.
                    </div>
                </label>  
                <button 
                    class="btn toggle-collapse" 
                    type="button" 
                    data-target="#en-agreement-collapse"
                    data-more="More"
                    data-less="Less"
            >
                More
            </button>
                <button type="submit" class="btn primary mt-32">Subscribe!</button>
            </form>
            <button class="close">
                <span class="icon-clear"></span>
            </button>
        </div>
    `;
    
    triggers.forEach(btn => {
        btn.addEventListener('click', e => {
            initModal({
                id, 
                content,
                validate: true
            });
        });
    });
});
