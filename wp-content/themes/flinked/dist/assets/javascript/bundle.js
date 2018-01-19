(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AjaxLoading;
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
                history.pushState(data, 'louis J', url);
                switch_content(data);
            }).error(function () {
                console.log("we can't load de page");
            });
        }

        /**
         * replace current content
         * @param {*} data
         */
        function switch_content(data) {
            $('main').remove();
            $('body').append($(data));
        }
    });
}

},{}],2:[function(require,module,exports){
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
  }, {
    key: 'init',
    value: function init() {
      this.prevClick();
      this.nextClick();
      this.clickImage();
    }
  }]);

  return InstaSlider;
}();

exports.default = InstaSlider;

},{}],3:[function(require,module,exports){
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

},{"./AjaxLoading.js":1}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var _Welcome = require('./Welcome.js');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _LinkNavigation = require('./LinkNavigation.js');

var _LinkNavigation2 = _interopRequireDefault(_LinkNavigation);

var _InstaSlider = require('./InstaSlider.js');

var _InstaSlider2 = _interopRequireDefault(_InstaSlider);

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
}

window.onload = init;

},{"./InstaSlider.js":2,"./LinkNavigation.js":3,"./Welcome.js":4}]},{},[5])

//# sourceMappingURL=bundle.js.map
