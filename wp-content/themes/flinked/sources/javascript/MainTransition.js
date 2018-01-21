class MainTransition
{
    /**
     * Constructor
     */
    constructor(  )
    {
      this.cards = document.querySelectorAll('.trans__single');
      this.logo = document.querySelector('.trans__logo');
      this.main = document.querySelector('.trans');
    }

    return() {
      for (const card of this.cards) {
        card.classList.add('trans__single--return')
      }
      this.logo.classList.add('trans__logo--return')
      setTimeout( () => {
        this.main.classList.remove('trans--active')
        setTimeout( () => {
          for (const card of this.cards) {
            card.classList.remove('trans__single--active')
            card.classList.remove('trans__single--return')
            this.logo.classList.remove('trans__logo--active')
            this.logo.classList.remove('trans__logo--return')
          }
        }, 100);
      }, 1100);
    }

    init() {
      this.main.classList.add('trans--active')
      setTimeout( () => {
        for (const card of this.cards) {
          card.classList.add('trans__single--active')
        }
        this.logo.classList.add('trans__logo--active')
      }, 100);
    }
}

export default MainTransition

