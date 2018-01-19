// get word count and reading time
var wordCountEl = document.getElementById('main-text');

Countable.on(wordCountEl, function(counter) {
	var wordCountIndicator = document.getElementById('word-count');
	var readingTimeIndicator = document.getElementById('reading-time');
	var wordCount = counter.words;
	var wpmFast = 250;
	var wpmSlow = 200;
	var readingTimeFast = Math.round(Number(wordCount/wpmFast));
	var readingTimeSlow = Math.round(Number(wordCount/wpmSlow));
	var readingTime = readingTimeFast + '-' + readingTimeSlow;

	wordCountIndicator.innerHTML += wordCount;
	readingTimeIndicator.innerHTML += readingTime;
})


// dynamic table of contents
tocbot.init({
  tocSelector: '.js-toc',
  contentSelector: '.js-toc-content',
  headingSelector: 'h2, h3, h4'
});


// today's date (for citation)
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
var today = new Date();
var dd = today.getDate();
var mm = monthNames[today.getMonth()]
var yyyy = today.getFullYear();

var todayIndiator = document.getElementById('current-date');

if(dd<10) {
	dd = '0'+dd
}

current = mm + ' ' + dd + ', ' + yyyy;

todayIndiator.innerHTML += current;
