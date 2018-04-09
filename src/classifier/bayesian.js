'use strict';

const _ = require('lodash');
const MemoryBackend = require('../backend/memory');

/**
 *
 * VA NLP - multi-class single-label Bayes classifier.
 *
 */
class Bayesian {
	constructor(options) {
		this.options = options || {};
		this.default = this.options.default || 'unclassified';
		this.thresholds = this.options.thresholds || {};
		this.globalThreshold = this.options.globalThreshold || 1;
		this.weight = this.options.weight || 1;
    this.assumged = this.options.assumged || 0.5;

    this.backend = new MemoryBackend();
	}

	trainWithIntents(intents) {
		this.incIntentCounts(intents);
	}

	classify(message) {
    console.log(message + ' to be classified..');

		if (!_.isString(message)) {
			throw new Error(`message should be a string, but it is: ${JSON.stringify(message)}`);
    }

    const probs = this.getProbs(message);
  }

  async getProbs(message) {
    const words = await this.getWords(message);
  }

  getWords(message) {
    const words = _.uniq(message.split(/W+/));
    return words;
  }




}

module.exports = Bayesian;
