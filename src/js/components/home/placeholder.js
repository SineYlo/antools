import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.form-hero__field'),
  sentences: [
    'There is almost everything',
    'Start the search',
  ],
  options: {
    letterDelay: 50,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.form-subscribe__field'),
  sentences: [
    'Example: test@test.com',
    'Subscribe ;3',
  ],
  options: {
    letterDelay: 50,
    sentenceDelay: 700,
  },
});
