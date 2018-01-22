class Drag
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.mover = document.querySelector('.musiquePage__dragMover');
    }

    changeAlbum(x) {
      this.mover.style.transform = "translateX("+ x + "px)"
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
          relativePoints: [ { x: 0, y: 0 } ]
        },
        inertia: true,
        restrict: {
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        },
      })

      .on('dragmove', function (event) {
        x += event.dx;
        y = event.dy;
        // that.changeAlbum(x)
        that.dragMoveListener(element, event.dx)
        console.log(event.dx);

      });
    }

    dragMoveListener (el, dx) {
      var target = el,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x'))) + dx;
          console.log(dx)

      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
    }

    init() {
        this.dragEvent()
    }
}

export default Drag

