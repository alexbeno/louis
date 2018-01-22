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
        this.canDrag = true;
        this.active = false;
    }

    setMoverSize() {
      this.numberOfAlbum = this.single.length;
      this.size = 80 * this.numberOfAlbum + 10;
      this.mover.style.width = this.size + 'vw';
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
        if(that.active === false) {
          // that.unshowAlbum();
        }
      });

    }

    dragMoveListener (el, dx) {
      var target = el,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x'))) + dx;

      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
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

    }
    clickEvent() {
      for (const single of this.single) {
        single.childNodes[3].addEventListener('click', (e) => {
          let mainTransition = new MainTransition();
          mainTransition.init();
          this.canDrag = false;
          this.active = true;

          setTimeout( () => {
            single.classList.add('musiquePage__drag--active')
            single.childNodes[1].classList.add('musiquePage__content--active')
            single.childNodes[5].classList.add('musiquePage__drag__title--active')
            this.mover.classList.add('musiquePage__dragMover--active')
        }, 1000);

        setTimeout(() => {
            mainTransition.return();
            this.canDrag = true;
        }, 1200);
        })
      }
    }

    init() {
        this.dragEvent()
        this.setMoverSize();
        this.clickEvent();
    }
}

export default Drag

