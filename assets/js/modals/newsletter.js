document.addEventListener('DOMContentLoaded', () => {
    const signupBtns = document.querySelectorAll('.btn-signup');
    const id = 'modal-newsletter';
    const content = `
        <div class="modal">
            <div class="row">
                <div class="heading col-sm-8 mb-48 mb-md-80">
                    <div class="frame-fill">
                        <div class="rect"></div>
                        <div class="content">
                            <p class=mb-8>In Touch!</p>
                            <h2 class="h1">Zapisz się <br class="d-none d-lg-block" /> do newslettera</h2>
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
                        Podaj poprawny adres e-mail
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
                    Wyrażam zgodę na przetwarzanie moich danych osobowych, zgodnie z ustawą o ochronie danych osobowych, do celów marketingowych. 
                    <div class="collapse" id="agreement-collapse">
                        Podanie danych osobowych jest dobrowolne. Wiem, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych jest Fundacja conf.IT ul. Rydza Śmigłego 62/8, Zielona Góra. Wykorzystujemy Mailchimp jako naszą platformę marketingową. Klikając poniżej, potwierdzasz, że Twoje informacje zostaną przekazane Mailchimp w celu ich przetworzenia. Dowiedz się więcej o praktykach ochrony prywatności stosowanych przez Mailchimp 
                        <a href="https://mailchimp.com/legal/privacy/" target="_blank" class="text-primary">tutaj</a>.
                    </div>
                </label>  
                <button 
                    class="toggle-collapse" 
                    type="button" 
                    data-target="#agreement-collapse"
                    data-more="Więcej"
                    data-less="Mniej"
                >
                    Więcej
                </button>
                <button type="submit" class="btn primary mt-32">Zapisuję się!</button>
            </form>
            <button class="close">
                <span class="icon-clear"></span>
            </button>
        </div>
    `;


    signupBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            initModal({
                id, 
                content,
                validate: true
            });
        });
    });
});