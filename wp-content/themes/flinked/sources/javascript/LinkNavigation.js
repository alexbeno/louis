import AjaxLoading from './AjaxLoading.js'

class LinkNavigation
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.linkAbout = document.querySelector('.topNav__about')
        this.linkHome = document.querySelector('.topNav__logo')
        this.linkMusique = document.querySelector('.goToMusique');
        this.linkGalerie = document.querySelector('.goToGalerie');
    }

    /**
     * event on about link for trigger ajax callback
     */
    clickAbout() {
        this.linkAbout.addEventListener('click', (e) => {
            e.preventDefault()
            let url = this.linkAbout.getAttribute( 'href' )
            AjaxLoading(url)
        })
    }

    /**
     * event on about link for trigger ajax callback
     */
    clickHome() {
        this.linkHome.addEventListener('click', (e) => {
            e.preventDefault()
            let url = this.linkHome.getAttribute( 'href' )
            AjaxLoading(url)
        })
    }

    clickGalerie() {
        if(document.querySelector('.homePage') !== null) {
            let linkGalerie = document.querySelector('.goToGalerie')
            linkGalerie.addEventListener('click', (e) => {
                e.preventDefault()
                let url = linkGalerie.getAttribute( 'data-galeriePage' )
                AjaxLoading(url)
            })
        }
    }

    /**
     * event on history API for trigger ajax callback
     */
    history() {
        window.addEventListener( 'popstate', (e) => {
            e.preventDefault();
            var url = window.location.href;
            AjaxLoading(url)
        } );
    }
    init() {
        this.clickAbout()
        this.clickHome()
        this.history()
        this.clickGalerie()
    }
}

export default LinkNavigation

