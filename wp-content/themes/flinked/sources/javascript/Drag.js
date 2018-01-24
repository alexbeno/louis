import MainTransition from './MainTransition.js'
class Drag
{
    /**
     * Constructor
     */
    constructor(  )
    {
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
    }

    setMoverSize() {
      this.numberOfAlbum = this.single.length;
      this.size = 80 * this.numberOfAlbum + 10;
      this.mover.style.width = this.size + 'vw';
    }

    unshowAlbum () {
      let activeDrag = document.querySelector('.musiquePage__drag--active')
      let activeContent = document.querySelector('.musiquePage__content--active')
      let activeTitle = document.querySelector('.musiquePage__drag__title--active')
      let activeMover = document.querySelector('.musiquePage__dragMover--active')

      activeDrag.classList.remove('musiquePage__drag--active')
      activeContent.classList.remove('musiquePage__content--active')
      activeTitle.classList.remove('musiquePage__drag__title--active')
      activeMover.classList.remove('musiquePage__dragMover--active')

      this.setMoverSize();
    }

    dragInAlbum() {
      let current = document.querySelector('.active-album');
      let index = parseInt(current.getAttribute('data-index'));
      let next = index + 1;
      let translate = next * 100
      if(next <= this.single.length) {
        this.mover.style.transform= "translateX(-" + translate + "vw)"
      }
    }

    centerScreen(index) {

      let transScreen = 100 * index;

      this.mover.style.webkitTransform =
      this.mover.style.transform =
        'translate(-' + transScreen + 'vw)';

      this.numberOfAlbum = this.single.length;
      this.size = 100 * this.numberOfAlbum;
      this.mover.style.width = this.size + 'vw';
    }

    transitions() {
      this.trans.style.display ="block";
      setTimeout( () => {
        this.trans.classList.add('album-trans--active')
        let dragCursor = this.image.getAttribute('data-normal');
        this.image.setAttribute('src', dragCursor)

      }, 100);
    }

    transitionsReturn() {
      this.setExit();
      this.trans.classList.remove('album-trans--active')
      setTimeout( () => {
        this.trans.style.display ="none";
      }, 800);
    }

    setExit() {
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
          this.canDrag = true;
        }
      })
    }

    /**
     * event for detect the drag
     * @function changeAlbum()
     */
    dragEvent () {
      let that = this;
      let element = document.querySelector('.musiquePage__dragMover');
      let x = 0;
      let y = 0;
      interact(element)
      .draggable({
        max : 1,
        snap: {
          targets: [
            interact.createSnapGrid({ x:1, y: 1 })
          ],
          range: Infinity,
          relativePoints: [ { x: 5, y: 5 } ]
        },
        inertia: true,
        restrict: {
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        },
      })

      .on('dragmove', function (event) {
        if(that.canDrag === true) {
          that.active = false;
          x += event.dx;
          y = event.dy;
          let size = (element.offsetWidth - element.offsetWidth * 2) + that.singleOne.offsetWidth
          if( size < parseFloat(element.getAttribute('data-x')) && parseFloat(element.getAttribute('data-x')) < 1 )
          {
            that.dragMoveListener(element, event.dx)
          }
          else if( parseFloat(element.getAttribute('data-x')) > 0 ) {
            x = -1
            element.setAttribute('data-x', -1)
            that.dragMoveListener(element, event.dx)
          }
          else {
            x = size - 1
            element.setAttribute('data-x', size - 1)
            that.dragMoveListener(element, event.dx)
          }
        }
      });

    }

    dragMoveListener (el, dx) {
      var target = el,
      x = (parseFloat(target.getAttribute('data-x'))) + dx;

      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px)';

      target.setAttribute('data-x', x);
    }

    clickEvent() {
      for (const [index, single ] of this.single.entries()) {
        single.setAttribute('data-index', index);
        single.childNodes[3].addEventListener('click', (e) => {
          this.transitions()
          this.canDrag = false;
          this.active = true;
          single.classList.add('active-album');

          setTimeout( () => {
            this.centerScreen(index)
            single.classList.add('musiquePage__drag--active')
            single.childNodes[1].classList.add('musiquePage__content--active')
            single.childNodes[5].classList.add('musiquePage__drag__title--active')
            this.mover.classList.add('musiquePage__dragMover--active')
          }, 800);

          setTimeout(() => {
              this.transitionsReturn()
          }, 1000);
        })
      }
    }

    init() {
      if(this.mover !== null) {
        let dragCursor = this.image.getAttribute('data-drag');
        this.image.setAttribute('src', dragCursor)
        this.dragEvent()
        this.setMoverSize();
        this.clickEvent();
      }
    }
}

export default Drag

