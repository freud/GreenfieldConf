const speakerModal = {
    init: () => {
        const triggers = document.querySelectorAll('.speaker-heading, .speaker-img, .speaker-slide');
        const id = 'speakers-modal';
        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                let speaker = e.target.closest('[data-speaker]').dataset.speaker
                speaker = speaker.replace(/=>/g, ': ')
                speaker = JSON.parse(speaker)

                let  { name, img, twitter, linkedin, desc, website } = speaker;
                name = name.split(' ');
                
                const content = `
                    <div class="modal modal-speakers">
                        <div class="row mt-48 mb-32 mb-sm-64">
                            <div class="col-sm-6 col-md-5">
                                <div class="heading mb-48 mb-md-80">
                                    <div class="frame-fill">
                                        <div class="rect"></div>
                                        <div class="content">
                                            <p class="mb-8">
                                                ${website}
                                            </p>
                                            <h2 class="h1">
                                                ${name[0]}
                                                <br/>
                                                ${name[1]}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-48">
                                    <a href="${twitter}" target="blank" class="mr-72">
                                        <span class="icon-twitter h3"></span>
                                    </a>
                                    <a href="${linkedin}" target="blank">
                                        <span class="icon-linkedin h3"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6 align-self-end mt-80 mt-sm-0">
                                <div class="img-frame">
                                    <img src="../../../images/speakers/${img}" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-10 col-xl-8 px-xl-0">
                                <p>
                                    ${desc}
                                </p>
                            </div>
                        </div>
                        <button class="close">
                            <span class="icon-clear"></span>
                        </button>
                    </div>
                `;
        
                initModal({
                    id, 
                    content
                });
            });
        });
    }
}