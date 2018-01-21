(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AjaxLoading;

var _InstaSlider = require('./InstaSlider.js');

var _InstaSlider2 = _interopRequireDefault(_InstaSlider);

var _MainTransition = require('./MainTransition.js');

var _MainTransition2 = _interopRequireDefault(_MainTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AjaxLoading(url) {
    jQuery(document).ready(function ($) {

        // start perfom ajax request function with url parameter
        perform_ajax_request(url);

        /**
         * construct ajax request
         * @param {*} url
         */
        function perform_ajax_request(url) {
            $.ajax({
                url: url,
                type: 'POST',
                headers: {
                    'X-Requested-With': 'BAWXMLHttpRequest'
                }
            }).done(function (data) {
                mainTrans(data);
                history.pushState(data, 'louis J', url);
            }).error(function () {
                console.log("we can't load de page");
            });
        }

        function mainTrans(data) {
            var mainTransition = new _MainTransition2.default();
            mainTransition.init();
            setTimeout(function () {
                switch_content(data);
            }, 1000);

            setTimeout(function () {
                mainTransition.return();
            }, 1200);
        }

        function loadScript() {
            var pathName = window.location.pathname;
            pathName = pathName.split("/");
            pathName = pathName[1];
            if (pathName === "galerie") {
                loadGalerieScript();
            }
        }

        function loadGalerieScript() {

            var instaSlider = null;

            instaSlider = new _InstaSlider2.default();
            instaSlider.init();
        }

        /**
         * replace current content
         * @param {*} data
         */
        function switch_content(data) {
            $('main').remove();
            $('.bottomNav').after($(data));
            loadScript();
        }
    });
}

},{"./InstaSlider.js":3,"./MainTransition.js":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cursor = function () {
    /**
     * Constructor
     */
    function Cursor() {
        _classCallCheck(this, Cursor);

        this.cursor = document.querySelector('.cursor');
        this.image = document.querySelector('.cursor__img');
    }

    _createClass(Cursor, [{
        key: 'mouseEvent',
        value: function mouseEvent() {
            var _this = this;

            var mouse = { x: 0.5, y: 1 };
            window.addEventListener('mousemove', function (event) {
                mouse.x = event.clientX;
                mouse.y = event.clientY;
                _this.moveCursor(mouse.x, mouse.y);
            });
        }
    }, {
        key: 'moveCursor',
        value: function moveCursor(x, y) {
            var top = y - this.cursor.offsetHeight / 2;
            var left = x - this.cursor.offsetWidth / 2;
            this.cursor.style.top = top + 'px';
            this.cursor.style.left = left + 'px';
        }
    }, {
        key: 'dragCursor',
        value: function dragCursor() {
            var _this2 = this;

            window.addEventListener('mousedown', function () {
                console.log('hey');
                var dragCursor = _this2.image.getAttribute('data-drag');
                console.log(dragCursor);
                _this2.image.setAttribute('src', dragCursor);
            });
            window.addEventListener('mouseup', function () {
                var dragCursor = _this2.image.getAttribute('data-normal');
                _this2.image.setAttribute('src', dragCursor);
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.mouseEvent();
            this.dragCursor();
        }
    }]);

    return Cursor;
}();

exports.default = Cursor;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InstaSlider = function () {
  /**
   * Constructor
   */
  function InstaSlider() {
    _classCallCheck(this, InstaSlider);

    this.mover = document.querySelector('#sbi_images');
    this.single = document.querySelectorAll('.sbi_item');
    this.next = document.querySelector('.galerie__next');
    this.prev = document.querySelector('.galerie__prev');
    this.max = this.single.length - 4;
    this.index = 0;
    this.slideIndex = 0;
    this.step = 25;
    this.value = 0;
  }

  /**
   * prev click event
   */


  _createClass(InstaSlider, [{
    key: 'prevClick',
    value: function prevClick() {
      var _this = this;

      this.prev.addEventListener('click', function (e) {
        e.preventDefault();
        if (_this.slideIndex === 0) {
          _this.index = 0;
          _this.slideIndex = 0;
        } else {
          _this.index++;
          _this.slideIndex--;
        }
        _this.moveSlide();
      });
    }

    /**
     * next click event
     */

  }, {
    key: 'nextClick',
    value: function nextClick() {
      var _this2 = this;

      this.next.addEventListener('click', function (e) {
        e.preventDefault();
        if (_this2.slideIndex === _this2.max) {
          _this2.index = 0;
          _this2.slideIndex = 0;
        } else {
          _this2.index--;
          _this2.slideIndex++;
        }

        _this2.moveSlide();
      });
    }

    /**
     *
     * next click event
     */

  }, {
    key: 'moveSlide',
    value: function moveSlide() {
      this.value = this.index * this.step;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.single[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var single = _step.value;

          single.classList.remove('galerie__instaLittle');
          single.classList.remove('galerie__instaBig');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.mover.style.transform = 'translateX(' + this.value + 'vw';
    }

    /**
     *
     * display bigger image
     */

  }, {
    key: 'clickImage',
    value: function clickImage() {
      var _this3 = this;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var single = _step2.value;

          // console.log(single)
          single.addEventListener('click', function (e) {
            e.preventDefault();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _this3.single[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var singleBis = _step3.value;

                singleBis.classList.remove('galerie__instaLittle');
                singleBis.classList.remove('galerie__instaBig');
                singleBis.classList.add('galerie__instaLittle');
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            single.classList.add('galerie__instaBig');
          });
        };

        for (var _iterator2 = this.single[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    /**
     * watch for loading of instagram content
     */

  }, {
    key: 'setVar',
    value: function setVar() {
      var _this4 = this;

      var watching = setInterval(function () {
        if (document.querySelector('.sbi_item') !== null) {

          //set variable
          _this4.mover = document.querySelector('#sbi_images');
          _this4.single = document.querySelectorAll('.sbi_item');
          _this4.next = document.querySelector('.galerie__next');
          _this4.prev = document.querySelector('.galerie__prev');
          _this4.max = _this4.single.length - 4;

          //init function
          _this4.prevClick();
          _this4.nextClick();
          _this4.clickImage();

          //clear watching
          clearInterval(watching);
          return;
        }
      }, 10);
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.mover != null) {
        this.setVar();
      }
    }
  }]);

  return InstaSlider;
}();

exports.default = InstaSlider;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AjaxLoading = require('./AjaxLoading.js');

var _AjaxLoading2 = _interopRequireDefault(_AjaxLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkNavigation = function () {
    /**
     * Constructor
     */
    function LinkNavigation() {
        _classCallCheck(this, LinkNavigation);

        this.linkAbout = document.querySelector('.topNav__about');
    }

    /**
     * event on about link for trigger ajax callback
     */


    _createClass(LinkNavigation, [{
        key: 'clickAbout',
        value: function clickAbout() {
            var _this = this;

            this.linkAbout.addEventListener('click', function (e) {
                e.preventDefault();
                var url = _this.linkAbout.getAttribute('href');
                (0, _AjaxLoading2.default)(url);
            });
        }
        /**
         * event on history API for trigger ajax callback
         */

    }, {
        key: 'history',
        value: function history() {
            window.addEventListener('popstate', function (e) {
                e.preventDefault();
                var url = window.location.href;
                (0, _AjaxLoading2.default)(url);
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.clickAbout();
            this.history();
        }
    }]);

    return LinkNavigation;
}();

exports.default = LinkNavigation;

},{"./AjaxLoading.js":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainTransition = function () {
  /**
   * Constructor
   */
  function MainTransition() {
    _classCallCheck(this, MainTransition);

    this.cards = document.querySelectorAll('.trans__single');
    this.logo = document.querySelector('.trans__logo');
    this.main = document.querySelector('.trans');
  }

  _createClass(MainTransition, [{
    key: 'return',
    value: function _return() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var card = _step.value;

          card.classList.add('trans__single--return');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.logo.classList.add('trans__logo--return');
      setTimeout(function () {
        _this.main.classList.remove('trans--active');
        setTimeout(function () {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _this.cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var card = _step2.value;

              card.classList.remove('trans__single--active');
              card.classList.remove('trans__single--return');
              _this.logo.classList.remove('trans__logo--active');
              _this.logo.classList.remove('trans__logo--return');
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }, 100);
      }, 1100);
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.main.classList.add('trans--active');
      setTimeout(function () {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this2.cards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var card = _step3.value;

            card.classList.add('trans__single--active');
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        _this2.logo.classList.add('trans__logo--active');
      }, 100);
    }
  }]);

  return MainTransition;
}();

exports.default = MainTransition;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AjaxLoading = require('./AjaxLoading.js');

var _AjaxLoading2 = _interopRequireDefault(_AjaxLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollLethargy = function () {
  /**
   * Constructor
   */
  function ScrollLethargy() {
    _classCallCheck(this, ScrollLethargy);

    this.content = document.querySelector('body');
    // this.insta = true;
    this.music = true;

    // home parameter
    this.home = true;
    this.contentHome = document.querySelector('.homePage');
    this.homeLink = document.querySelector('.goToGalerie');

    //galerie parameter
    this.insta = true;
    this.instaLink = document.querySelector('.goToHome');
    this.scriptA = document.querySelector('.insta-scriptA');
  }

  /**
   * Send Ajax request
   * @param url url of the page
   */


  _createClass(ScrollLethargy, [{
    key: 'sendAjax',
    value: function sendAjax(url) {
      (0, _AjaxLoading2.default)(url);
    }

    /**
     * lethargy event for Galerie
     */

  }, {
    key: 'homePage',
    value: function homePage() {
      var _this = this;

      var lethargy = new Lethargy();
      var scroll = function scroll(e) {
        if (_this.home === true) {
          e.preventDefault();
          e.stopPropagation();
          if (lethargy.check(e) === -1) {

            _this.home = false;
            _this.sendAjax(_this.homeLink.getAttribute('data-galeriePage'));
          }
        }
      };
      this.contentHome.addEventListener('mousewheel', scroll);
      this.contentHome.addEventListener('DOMMouseScroll', scroll);
      this.contentHome.addEventListener('wheel', scroll);
      this.contentHome.addEventListener('MozMousePixelScroll', scroll);
    }

    /**
    * lethargy event for Galerie
    */

  }, {
    key: 'scrolling',
    value: function scrolling() {
      var _this2 = this;

      var lethargy = new Lethargy();
      var scroll = function scroll(e) {
        e.preventDefault();
        e.stopPropagation();

        if (_this2.home === true) {
          if (document.querySelector('.goToGalerie') !== null) {
            if (lethargy.check(e) === -1) {

              _this2.homeLink = document.querySelector('.goToGalerie');
              _this2.home = false;
              _this2.insta = true;
              _this2.sendAjax(_this2.homeLink.getAttribute('data-galeriePage'));
            }
          }
        }
        if (_this2.insta === true) {
          if (document.querySelector('.goToHome') !== null) {
            if (lethargy.check(e) === 1) {
              _this2.instaLink = document.querySelector('.goToHome');
              _this2.insta = false;
              _this2.home = true;
              _this2.scriptA.remove();
              _this2.sendAjax(_this2.instaLink.getAttribute('data-homePage'));
            }
          }
        }
      };
      this.content.addEventListener('mousewheel', scroll);
      this.content.addEventListener('DOMMouseScroll', scroll);
      this.content.addEventListener('wheel', scroll);
      this.content.addEventListener('MozMousePixelScroll', scroll);
    }
  }, {
    key: 'init',
    value: function init() {

      this.scrolling();
    }
  }]);

  return ScrollLethargy;
}();

exports.default = ScrollLethargy;

},{"./AjaxLoading.js":1}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

var _Welcome = require('./Welcome.js');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _LinkNavigation = require('./LinkNavigation.js');

var _LinkNavigation2 = _interopRequireDefault(_LinkNavigation);

var _InstaSlider = require('./InstaSlider.js');

var _InstaSlider2 = _interopRequireDefault(_InstaSlider);

var _ScrollLethargy = require('./ScrollLethargy.js');

var _ScrollLethargy2 = _interopRequireDefault(_ScrollLethargy);

var _Cursor = require('./Cursor.js');

var _Cursor2 = _interopRequireDefault(_Cursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var welcome = new _Welcome2.default();

  /**
   * linkNavigation.js
   * create the ajax requeste if we click on a link
   */

  var linkNavigation = new _LinkNavigation2.default();
  linkNavigation.init();

  /**
   * InstaSlider.js
   * init a slider for display instagram feed
   */

  var instaSlider = new _InstaSlider2.default();
  instaSlider.init();

  /**
   * ScrollLethargy.js
   * add scroll event for home page and galerie page, and musique page
   */

  var scrollLethargy = new _ScrollLethargy2.default();
  scrollLethargy.init();

  /**
   * Cursor.js
   * transition of the page
   */

  var cursor = new _Cursor2.default();
  cursor.init();
}

window.onload = init;

},{"./Cursor.js":2,"./InstaSlider.js":3,"./LinkNavigation.js":4,"./ScrollLethargy.js":6,"./Welcome.js":7}]},{},[8])

//# sourceMappingURL=bundle.js.map
