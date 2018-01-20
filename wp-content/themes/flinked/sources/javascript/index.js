import Welcome from './Welcome.js'
import LinkNavigation from './LinkNavigation.js'
import InstaSlider from './InstaSlider.js'
import ScrollLethargy from './ScrollLethargy.js'


function init() {
  let welcome = new Welcome()

  /**
   * linkNavigation.js
   * create the ajax requeste if we click on a link
   */

  let linkNavigation = new LinkNavigation();
  linkNavigation.init();

  /**
   * InstaSlider.js
   * init a slider for display instagram feed
   */

  let instaSlider = new InstaSlider();
  instaSlider.init();

  /**
   * ScrollLethargy.js
   * add scroll event for home page and galerie page, and musique page
   */

  let scrollLethargy = new ScrollLethargy();
  scrollLethargy.init();
}

window.onload = init;