class Cursor
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.cursor = document.querySelector('.cursor')
        this.image = document.querySelector('.cursor__img')
    }

    mouseEvent () {
        const mouse = { x: 0.5, y: 1 };
        window.addEventListener('mousemove', event => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            this.moveCursor (mouse.x, mouse.y);
        });
    }

    moveCursor (x, y) {
        let top = y - this.cursor.offsetHeight / 2;
        let left = x - this.cursor.offsetWidth / 2;
        this.cursor.style.top = top + 'px';
        this.cursor.style.left = left + 'px';
    }

    dragCursor () {
        window.addEventListener('mousedown', () => {
            if(document.querySelector('.homePage') !== null || document.querySelector('.musiquePage') !== null ) {
                let dragCursor = this.image.getAttribute('data-drag');
                this.image.setAttribute('src', dragCursor)
            }
        });
        window.addEventListener('mouseup', () => {
            if(document.querySelector('.home') !== null) {
                let dragCursor = this.image.getAttribute('data-normal');
                this.image.setAttribute('src', dragCursor)
            }
        });
    }

    init() {
        this.mouseEvent();
        this.dragCursor()
    }
}

export default Cursor

