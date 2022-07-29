// Write a JQuery function to hide only the text inside a <div> with class "grid-container" while keeping everything else in the div visible.

$(".grid-container").hide();

// Write a jquery function to make a <div> with class "B5" do a little dance for 10 seconds.

$(".B5").animate({
  left: '250px',
}, 1000, function() {
  $(this).animate({
    top: '250px',
  }, 1000, function() {
    $(this).animate({
      left: '0px',
    }, 1000, function() {
      $(this).animate({
        top: '0px',
      }, 1000);
    });
  });
});

// Write some Javascript to create an array of ten arrays, each of which consists of a further ten arrays. 

var arr = [];

for (var i = 0; i < 10; i++) {
  arr[i] = [];
  for (var j = 0; j < 10; j++) {
    arr[i][j] = [];
  }
}