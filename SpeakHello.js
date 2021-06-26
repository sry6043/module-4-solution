(function (window){
  var helloSpeakword={}

  var speakWord = "Hello";

  helloSpeakword.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeakword=helloSpeakword;
})(window);
