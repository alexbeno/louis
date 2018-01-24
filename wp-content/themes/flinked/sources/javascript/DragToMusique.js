import AjaxLoading from './AjaxLoading.js'
class DragToMusique
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.home = document.querySelector('.homePage')
        this.page = document.querySelector('.goToMusique')
        this.canDrag = true;
    }

    goToMusique() {
      AjaxLoading(this.page.getAttribute('data-musiquePage'), 'musiqueTrans')
    }

    /**
     * event for detect the drag
     * @function changeAlbum()
     */
    dragEvent () {
      let that = this;
      let element =  document.querySelector('.homePage');
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
          that.canDrag = false;
          that.goToMusique();
        }
    })
  }

  init() {
    if(this.home !== null) {
      this.dragEvent();
    }
  }
}

export default DragToMusique

