import MainTransition from './MainTransition.js'
class Drag
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.page = document.querySelector('.musiquePage');
        this.mover = document.querySelector('.musiquePage__dragMover');
        this.single = document.querySelectorAll('.musiquePage__drag');
        this.pochette = document.querySelectorAll('.musiquePage__drag__img');
        this.singleOne = document.querySelector('.musiquePage__drag');
        this.trans = document.querySelector('.album-trans');
        this.navText = document.querySelector('.musiquePage__rightNavigation__texte');
        this.navSubText = document.querySelector('.musiquePage__rightNavigation__subTexte');
        this.exit = document.querySelector('.musiquePage__rightNavigation');
        this.image = document.querySelector('.cursor__img')
        this.canDrag = true;
        this.active = false;
        this.mainTransition = new MainTransition();
        this.audio = document.querySelectorAll('.musiquePage__audio');
        this.buttons = document.querySelectorAll('.musiquePage__content__songplay');
    }

    setMoverSize() {
      this.numberOfAlbum = this.single.length;
      this.size = 70 * this.numberOfAlbum + 10;
      this.mover.style.width = this.size + 'vw';
    }

    unshowAlbum () {
      let activeDrag = document.querySelector('.musiquePage__drag--active')
      let activeContent = document.querySelector('.musiquePage__content--active')
      let activeTitle = document.querySelector('.musiquePage__drag__title--active')
      let activeMover = document.querySelector('.musiquePage__dragMover--active')

      if(activeDrag !== null) {
        activeDrag.classList.remove('musiquePage__drag--active')
        activeContent.classList.remove('musiquePage__content--active')
        activeContent.classList.remove('musiquePage__content--block')
        activeTitle.classList.remove('musiquePage__drag__title--active')
        activeMover.classList.remove('musiquePage__dragMover--active')
      }

      for (const single of this.single) {
        single.classList.remove('musiquePage__drag--none');
      }

      for (const audios of this.audio) {
        audios.pause();
        audios.currentTime = 0;
      }

      for (const buttons of this.buttons) {
        buttons.classList.remove('musiquePage__content__songplay--active')
      }

      this.setMoverSize();
    }

    centerScreen(index) {
      if(window.innerWidth > 800) {
        console.log('inferieur')
        let transScreen = 100 * index;

        this.mover.style.webkitTransform =
        this.mover.style.transform =
          'translate(-' + transScreen + 'vw)';

        this.numberOfAlbum = this.single.length;
        this.size = 100 * this.numberOfAlbum;
        this.mover.style.width = this.size + 'vw';
      }
    }

    transitions() {
      this.trans.style.display ="block";
      setTimeout( () => {
        this.trans.classList.add('album-trans--active')
        let dragCursor = this.image.getAttribute('data-normal');
        this.image.setAttribute('src', dragCursor)

      }, 30);
    }

    transitionsReturn() {
      this.setExit();
      this.trans.classList.remove('album-trans--active')
      setTimeout( () => {
        this.trans.style.display ="none";
      }, 800);
    }

    setExit() {
      this.exit.style.opacity ="1";
      this.navText.innerText = "Fermer"
      this.navSubText.innerText = "click"
      this.exit.style.cursor="pointer"

      this.exit.addEventListener('click', () => {
        if(this.active === true) {
          this.exit.style.cursor="initial"
          this.navText.innerText = this.navText.getAttribute('data-text');
          this.navSubText.innerText = this.navSubText.getAttribute('data-text');
          this.unshowAlbum();
          let dragCursor = this.image.getAttribute('data-drag');
          this.image.setAttribute('src', dragCursor)
          this.exit.style.opacity ="0";
          this.canDrag = true;
        }
      })
    }

    clickEvent() {
      for (const [index, single ] of this.single.entries()) {
        single.setAttribute('data-index', index);
        single.childNodes[3].addEventListener('click', (e) => {

          this.transitions()

          setTimeout( () => {
            for (const singleBis of this.single) {
              singleBis.classList.add('musiquePage__drag--none');
            }
            single.classList.remove('musiquePage__drag--none');
            this.canDrag = false;
            this.active = true;
            single.classList.add('active-album');
          }, 700);

          setTimeout( () => {
            single.childNodes[1].classList.add('musiquePage__content--block')
            setTimeout( () => {
              // this.centerScreen(index)
              single.classList.add('musiquePage__drag--active')
              single.childNodes[1].classList.add('musiquePage__content--active')
              single.childNodes[5].classList.add('musiquePage__drag__title--active')
              this.mover.classList.add('musiquePage__dragMover--active')
            }, 100);
          }, 800);

          setTimeout(() => {
              this.transitionsReturn()
          }, 1000);
        })
      }
    }

    Inversescroll() {
      let scrolling = 0;
      let prevY = 0;
      let prevX = 0;
      var scroll = (event) => {

        if(event.deltaY !== 0) {
          scrolling += event.deltaY;
          this.page.scrollTo(scrolling, 0);
        }

        prevX = event.deltaX;
        prevY = event.deltaY;
      }

      this.page.addEventListener('mousewheel', scroll);
      this.page.addEventListener('DOMMouseScroll', scroll);
      this.page.addEventListener('wheel', scroll);
      this.page.addEventListener('MozMousePixelScroll', scroll);
    }

    init() {
      if(this.mover !== null) {
        let dragCursor = this.image.getAttribute('data-drag');
        this.image.setAttribute('src', dragCursor)
        this.setMoverSize();
        this.clickEvent();
      }
    }
}

export default Drag

