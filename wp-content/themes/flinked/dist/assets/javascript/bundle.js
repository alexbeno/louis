(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AjaxLoading;
function AjaxLoading(url) {
    jQuery(document).ready(function ($) {
        perform_ajax_request(url);

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

},{"./AjaxLoading.js":1}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

var _Welcome = require('./Welcome.js');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _LinkNavigation = require('./LinkNavigation.js');

var _LinkNavigation2 = _interopRequireDefault(_LinkNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var welcome = new _Welcome2.default();

  var linkNavigation = new _LinkNavigation2.default();
  linkNavigation.init();
}

window.onload = init;

},{"./LinkNavigation.js":2,"./Welcome.js":3}]},{},[4])

//# sourceMappingURL=bundle.js.map
