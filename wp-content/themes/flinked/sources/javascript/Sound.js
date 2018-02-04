
class Sound
{
    /**
     * Constructor
     */
    constructor(  )
    {
        this.musique = document.querySelector('.musiquePage')
        this.buttons = document.querySelectorAll('.musiquePage__content__songplay');
        this.buttonPlay = document.querySelectorAll('.musiquePage__content__songplay--play');
        this.buttonPause = document.querySelectorAll('.musiquePage__content__songplay--pause');
        this.audio;
        this.stopButton;
    }

    plays() {
      for (const button of this.buttonPlay) {
        button.addEventListener('click', (e) => {
          let audioClass = button.getAttribute('data-class');
          for (const single of this.buttons) {
            single.classList.add('musiquePage__content__songplay--active')
          }
          this.audio = document.querySelector('.' + audioClass)
          this.audio.play();
          this.pauses();
        })
      }
    };

    pauses() {
      for (const button of this.buttonPause) {
        button.addEventListener('click', (e) => {
          this.audio.pause();
          for (const single of this.buttons) {
            single.classList.remove('musiquePage__content__songplay--active')
          }
        })
      }
    }

    init() {
        this.plays();
        this.pauses();
    }
}

export default Sound

