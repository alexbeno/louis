class Drag
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.mover = document.querySelector('.musiquePage__dragMover');
        this.single = document.querySelectorAll('.musiquePage__drag');
        this.singleOne = document.querySelector('.musiquePage__drag');
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
        x += event.dx;
        y = event.dy;
        let size = (element.offsetWidth - element.offsetWidth * 2) + that.singleOne.offsetWidth
        console.log(parseFloat(element.getAttribute('data-x')))
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

    init() {
        this.dragEvent()
        this.setMoverSize();
    }
}

export default Drag

