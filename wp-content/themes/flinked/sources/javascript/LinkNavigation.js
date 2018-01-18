import AjaxLoading from './AjaxLoading.js'

class LinkNavigation
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.linkAbout = document.querySelector('.topNav__about')
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
     * event on history API for trigger ajax callback
     */
    history() {
        window.addEventListener( 'popstate', function(e) {
            e.preventDefault();
            var url = window.location.href;
            AjaxLoading(url)
        } );
    }
    init() {
        this.clickAbout()
        this.history()
    }
}

export default LinkNavigation

