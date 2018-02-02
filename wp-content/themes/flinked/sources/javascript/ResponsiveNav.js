import AjaxLoading from './AjaxLoading.js'
class ResponsiveNav
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.button = document.querySelector('.responsiveMenu__icones')
        this.nav = document.querySelector('.responsiveMenu')
        this.transition = document.querySelectorAll('.trans__single')
        this.transContent = document.querySelector('.trans');
        this.link = document.querySelectorAll('.responsiveMenu__content__item');
        this.closesButton = document.querySelector('.responsiveMenu__close');
    }

    opens() {
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.transContent.classList.add('trans--active')
            setTimeout( () => {
                for (const single of this.transition) {
                    single.classList.add('trans__single--active')
                }
                this.nav.classList.add('responsiveMenu--active');
            }, 100);
        })
    }
    closes() {
        for (const single of this.link) {
            single.addEventListener('click', (e) => {
                e.preventDefault();
                let url = single.getAttribute( 'href' )
                AjaxLoading(url, "menuTrans")
                setTimeout( () => {
                    for (const singles of this.transition) {
                        singles.classList.add('trans__single--return')
                    }
                    this.nav.classList.add('responsiveMenu--return');
                  }, 300);
                setTimeout( () => {
                    this.transContent.classList.add('trans--return')
                    setTimeout( () => {
                        this.transContent.classList.remove('trans--active')
                        this.nav.classList.remove('responsiveMenu--active')
                        this.nav.classList.remove('responsiveMenu--return')
                        for (const card of this.transition) {
                          card.classList.remove('trans__single--active')
                          card.classList.remove('trans__single--return')
                        }
                      }, 200);
                }, 1200);
            })
        }
    }

    closesMenu() {
        this.closesButton.addEventListener('click', (e) => {
            e.preventDefault();
            for (const singles of this.transition) {
                singles.classList.add('trans__single--return')
            }
            this.nav.classList.add('responsiveMenu--return');
            setTimeout( () => {
                this.transContent.classList.add('trans--return')
                setTimeout( () => {
                    this.transContent.classList.remove('trans--active')
                    this.nav.classList.remove('responsiveMenu--active')
                    this.nav.classList.remove('responsiveMenu--return')
                    for (const card of this.transition) {
                        card.classList.remove('trans__single--active')
                        card.classList.remove('trans__single--return')
                    }
                    }, 200);
            }, 800);
        })
    }

    init() {
        this.opens();
        this.closes();
        this.closesMenu();
    }
}

export default ResponsiveNav

