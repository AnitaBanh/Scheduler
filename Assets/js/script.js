let now = dayjs();

// run after browser has finished rendering all the elements in the html.
$(window).on("load", function() {
  currentTime();
// apply the past, present, or future class to each time
// block by comparing the id to the current hour.
  for(let i=0; i < 24; i++) {
  $("#hour-" + i).children("textarea").text(localStorage.getItem("hour-" + i));
  }

  for(let i=0; i < 24; i++) {
    var id = "hour-" + i;
    var curHour = now.format("HH");
    if (i == curHour) {
      $("#"+ id).removeClass("future past").addClass("present");
     }
    if (i > curHour) {
      $("#"+ id).removeClass("past present").addClass("future");
    }
    if (i < curHour) {
      $("#"+ id).removeClass("future present").addClass("past");
    }
   }
});

//  listener for click events on the save button. 
$(".saveBtn").click(function () {
  var hour = $(this).parent().attr('id');
  var contents = $(this).siblings("textarea").val();
  localStorage.setItem(hour, contents);
});


// function to display the current date in the header of the page.
function currentTime() {
  var addDate = $("#currentDay").text(now.format('dddd, MMM DD, YYYY'));
  setInterval(function () {
    addDate
  }, 1000);
}


