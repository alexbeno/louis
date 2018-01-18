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

    clickAbout() {
        this.linkAbout.addEventListener('click', (e) => {
            e.preventDefault()
            let url = this.linkAbout.getAttribute( 'href' )
            AjaxLoading(url)
        })
    }

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

