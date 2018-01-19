
class InstaSlider
{
    /**
     * Constructor
     */
    constructor(  )
    {
      this.mover = document.querySelector('#sbi_images')
      this.single = document.querySelectorAll('.sbi_item')
      this.next = document.querySelector('.galerie__next')
      this.prev = document.querySelector('.galerie__prev')
      this.max = this.single.length - 4
      this.index = 0
      this.slideIndex = 0
      this.step = 25
      this.value = 0
    }

    /**
     * prev click event
     */
     prevClick() {
      this.prev.addEventListener('click', (e) => {
        e.preventDefault()
        if(this.slideIndex === 0) {
          this.index = 0
          this.slideIndex = 0
        }
        else {
          this.index++
          this.slideIndex--
        }
        this.moveSlide()
      })
     }

    /**
     * next click event
     */
     nextClick() {
      this.next.addEventListener('click', (e) => {
        e.preventDefault()
        if(this.slideIndex === this.max) {
          this.index = 0
          this.slideIndex = 0
        }
        else {
          this.index--
          this.slideIndex++
        }

        this.moveSlide()
      })
     }

    /**
     *
     * next click event
     */
     moveSlide() {
      this.value = this.index * this.step
      for (let single of this.single) {
        single.classList.remove('galerie__instaLittle')
        single.classList.remove('galerie__instaBig')
      }

      this.mover.style.transform ='translateX('+ this.value +'vw'
     }

    /**
     *
     * display bigger image
     */
    clickImage() {
      for (let single of this.single) {
        single.addEventListener('click', (e) =>  {
          e.preventDefault()
          for (let singleBis of this.single) {
            singleBis.classList.remove('galerie__instaLittle')
            singleBis.classList.remove('galerie__instaBig')
            singleBis.classList.add('galerie__instaLittle')
          }
          single.classList.add('galerie__instaBig')
        })
      }
    }

    init() {
      this.prevClick()
      this.nextClick()
      this.clickImage()
    }
}

export default InstaSlider

