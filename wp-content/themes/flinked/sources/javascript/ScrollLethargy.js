import AjaxLoading from './AjaxLoading.js'

class ScrollLethargy
{
    /**
     * Constructor
     */
    constructor(  )
    {

        this.content = document.querySelector('body');
        // this.insta = true;
        this.music = true;

        // home parameter
        this.home = true;
        this.contentHome = document.querySelector('.homePage');
        this.homeLink = document.querySelector('.goToGalerie');

        //galerie parameter
        this.insta = true;
        this.instaLink = document.querySelector('.goToHome');
        this.scriptA;
    }

    /**
     * Send Ajax request
     * @param url url of the page
     */
    sendAjax(url) {
      AjaxLoading(url)
    }

    /**
     * lethargy event for Galerie
     */
    homePage() {
      let lethargy = new Lethargy();
      var scroll =  (e) =>  {
        if (this.home === true) {
          e.preventDefault();
          e.stopPropagation();
          if (lethargy.check(e) === -1) {

            this.home = false;
            this.sendAjax(this.homeLink.getAttribute('data-galeriePage'))

          }
        }
      };
      this.contentHome.addEventListener('mousewheel', scroll);
      this.contentHome.addEventListener('DOMMouseScroll', scroll);
      this.contentHome.addEventListener('wheel', scroll);
      this.contentHome.addEventListener('MozMousePixelScroll', scroll);
    }

        /**
     * lethargy event for Galerie
     */
    scrolling() {
      let lethargy = new Lethargy();
      var scroll =  (e) =>  {

        if (this.home === true) {
          if(document.querySelector('.goToGalerie') !== null) {
            e.preventDefault();
            e.stopPropagation();
            if (lethargy.check(e) === -1) {
              this.homeLink = document.querySelector('.goToGalerie');
              this.home = false;
              this.insta = true;
              this.sendAjax(this.homeLink.getAttribute('data-galeriePage'))

            }
          }
        }
        if (this.insta === true) {
          if(document.querySelector('.goToHome') !== null) {
            e.preventDefault();
            e.stopPropagation();
            if (lethargy.check(e) === 1) {
              this.instaLink = document.querySelector('.goToHome');
              this.insta = false;
              this.home = true;
              this.scriptA = document.querySelector('.insta-scriptA');
              this.scriptA.remove();
              this.sendAjax(this.instaLink.getAttribute('data-homePage'))
            }
          }
        }
      };
      this.content.addEventListener('mousewheel', scroll);
      this.content.addEventListener('DOMMouseScroll', scroll);
      this.content.addEventListener('wheel', scroll);
      this.content.addEventListener('MozMousePixelScroll', scroll);
    }

    init() {

        this.scrolling()
    }
}

export default ScrollLethargy

