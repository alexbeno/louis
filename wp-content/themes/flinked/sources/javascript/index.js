import Welcome from './Welcome.js'
import Navigation from './Navigation.js'

  
function init() {
  let welcome = new Welcome()

  Navigation();
}

window.onload = init;