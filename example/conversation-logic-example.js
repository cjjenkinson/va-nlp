const limdu = require('limdu');
const classifier = require('../src/classifier/bayesian');

// Base multi-label classifier based on winnow
const TextClassifier = limdu.classifiers.multilabel.BinaryRelevance.bind(0, {
	binaryClassifierType: limdu.classifiers.Winnow.bind(0, { retrain_count: 10 }),
});

// Feature extractors
const WordExtractor = function(input, features) {
	input.split(' ').forEach(function(word) {
		features[word] = 1;
	});
};

// Initialize a classifier
const intentClassifier = new limdu.classifiers.EnhancedClassifier({
	classifierType: TextClassifier,
	normalizer: limdu.features.LowerCaseNormalizer,
	featureExtractor: WordExtractor,
});

const myClassifier = new classifier.Bayesian();

const intentModel = [
	{ input: 'hello', output: 'greetings' },
	{ input: 'hi', output: 'greetings' },
	{ input: 'hey', output: 'greetings' },
	{ input: 'how are you', output: 'greetings' },
	{ input: 'who are you', output: 'about_bio' },
	{ input: 'tell me more about you', output: 'about_bio' },
	{ input: 'tell me about your education', output: 'education' },
	{ input: 'what did school did you go to', output: 'education' },
	{ input: 'where were you born', output: 'born_location' },
	{ input: 'where did you grow up', output: 'born_location' },
	{ input: 'how many voyages did you have', output: 'voyages' },
	{ input: 'what were you known for', output: 'voyages' },
	{ input: 'what was your first voyage', output: 'first_voyage' },
	{ input: 'where did you first sail to', output: 'first_voyage' },
	{ input: 'I dont understand', output: 'default' },
];

// VA NLP
myClassifier.trainAll(intentModel);

console.log(myClassifier.classifySync('what school did you go to'));
console.log(myClassifier.classifySync('what moon did you land on'));
console.log(myClassifier.classifySync('tell me about your life'));
console.log(myClassifier.classifySync('how are you'));

// LIMDU NLP
intentClassifier.trainBatch(intentModel);

console.log(intentClassifier.classify('what school did you go to'));
console.log(intentClassifier.classify('what moon did you land on'));
console.log(intentClassifier.classify('tell me about your life'));
console.log(intentClassifier.classify('how are you'));
