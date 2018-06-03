
'use strict';

/**
 *
 * VA NLP - multi-class single-label Bayes classifier.
 *
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bayesian = function () {
  function Bayesian(options) {
    _classCallCheck(this, Bayesian);

    this.options = options || {};
  }

  _createClass(Bayesian, [{
    key: 'trainWithIntents',
    value: function trainWithIntents(intents) {
      this.incIntentCounts(intents);
    }
  }, {
    key: 'classify',
    value: function classify(message, explain) {
      console.log(message + ' has been classified!');
    }
  }]);

  return Bayesian;
}();

module.exports = Bayesian;