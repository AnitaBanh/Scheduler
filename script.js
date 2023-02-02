// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(window).on("load", function() {
  currentTime();

  for(let i=0; i < 24; i++) {
  $("#hour-" + i).children("textarea").text(localStorage.getItem("hour-" + i));
  }

  for(let i=0; i < 24; i++) {
    var id = "hour-" + i;
    var nowHour = now.format("HH");
    if (i == nowHour) {
      $("#"+ id).removeClass("future past").addClass("present");
     }
    if (i > nowHour) {
      $("#"+ id).removeClass("past present").addClass("future");
    }
    if (i < nowHour) {
      $("#"+ id).removeClass("future present").addClass("past");
    }
   }
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
let now = dayjs();
// var handleSaveBtn = function (event) {
  // event.preventDefault();
  // var userEntry = $(".time-block").val();
  // $(".saveBtn").click(function () {
    // $('.description').html();
    // console.log($(this).parent().attr('id'));
  // localStorage.setItem('task',this.value);
  // $('#saveBtn').html(localStorage.content);
//   });
// };


$(".saveBtn").click(function () {
  console.log();
  var hour = $(this).parent().attr('id');
  var contents = $(this).siblings("textarea").val();
  localStorage.setItem(hour, contents);
});



// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
 //("div[id^='hour-']")

//  for(let i=0; i<24; i++) {
//   var id = "hour-" + i;
//   var nowHour = now.format("HH");
//   if (i = now) {
//     $("#"+ id).removeClass("future past").addClass("present");
//    }
//   if (i > now) {
//     $("#"+ id).removeClass("past present").addClass("future");
//   }
//   if (i < now) {
//     $("#"+ id).removeClass("future present").addClass("past");
//   }
//  }

// function presentClass () {
//   if(now.format("HH") == (this.id)) {
//   $(".time-block").removeClass("future past").addClass("present");
// } return
//   };

// var timeBlock =   $('.time-block')
// function colorScheme () {
//   var elements = document.querySelector('.time-block');
//   for (var i = 0; i< elements.length ; i++) {
//   if (timeBlock[i].isBefore(dayjs({}))) {
//   addClass('.past');
//   timeBlock.removeClass('.future');
//   timeBlock.removeClass('.present');
// }
// else 
//   (timeBlock.isAfter(dayjs({}))) {
//     timeBlock.removeClass('.present');
//     timeBlock.removeClass('.past');
//   } else {
//   timeBlock.addClass('.present');
// }}
// }


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//

// TODO: Add code to display the current date in the header of the page.


function currentTime() {
  var addDate = $("#currentDay").text(now.format('dddd, MMM DD, YYYY'));
  setInterval(function () {
    addDate
  }, 1000);
}


