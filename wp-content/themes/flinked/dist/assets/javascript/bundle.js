(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Navigation = function Navigation() {

    jQuery(document).ready(function ($) {

        // j'écoute les clic de tous les liens, sauf de l'admin bar
        $(document).on('click', 'a[href^="http://localhost:8888/louisj/a-propos/"]:not(.ab-item)', do_ajax_request);

        // lors d'un clic, j'exécute une fonction qui prend le lien en paramètre
        function do_ajax_request(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            var title = $(this).attr('data-title');
            perform_ajax_request(url, title);
        }

        // je fais une requête ajax vers le lien, en poussant BAWXMLHttpRequest dans les headers
        function perform_ajax_request(url, title) {

            $.ajax({
                url: url,
                type: 'POST',
                headers: {
                    'X-Requested-With': 'BAWXMLHttpRequest'
                }
            }).done(function (data) {
                // Do stuff
                history.pushState(data, title, url);
                switch_content(data);
            }).error(function () {
                // Error
            });
        }

        //la fonction pour la bascule des contenus
        function switch_content(data) {
            $('.homePage').remove();
            $('body').append($(data));
        }
    });
};

module.exports = function () {
    Navigation();
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Welcome =
/**
 * Constructor
 */
function Welcome(options) {
    _classCallCheck(this, Welcome);

    console.log('%c made with ღ by Alexis benoliel', 'color: #484AE0');
    console.log('> Portfolio: https://alexisbenoliel.fr');
};

exports.default = Welcome;

},{}],3:[function(require,module,exports){
'use strict';

var _Welcome = require('./Welcome.js');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Navigation = require('./Navigation.js');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var welcome = new _Welcome2.default();

  (0, _Navigation2.default)();
}

window.onload = init;

},{"./Navigation.js":1,"./Welcome.js":2}]},{},[3])

//# sourceMappingURL=bundle.js.map
