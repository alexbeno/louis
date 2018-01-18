import Welcome from './Welcome.js'
import LinkNavigation from './LinkNavigation.js'


function init() {
  let welcome = new Welcome()

  let linkNavigation = new LinkNavigation();
  linkNavigation.init();
}

window.onload = init;