// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(window).load(function() {

// }

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
let now = dayjs();
var handleSaveBtn = function (event) {
  event.preventDefault();
  var userEntry = $(".col-8").val();
  $(".saveBtn").click(function () {$('#saveBtn').html();
  localStorage.setItem('task',value);
  $('#saveBtn').html(localStorage.content);
  });
};

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

function presentClass () {
  if(now.format("HH") == (this.id)) {
  $(".time-block").removeClass("future past").addClass("present");
} return
  };

// var timeBlock =   $('.col-2')
// function colorScheme () {
//   var elements = document.querySelector('.time-block');
//   for (var i = 0; i< elements.length ; i++) {
//   if timeBlock[i].isBefore(dayjs({})) {
//   addClass('.past');
//   timeBlock.removeClass('.future');
//   timeBlock.removeClass('.present');
//   css.background-color:grey
// }
// else if {
//   timeBlock.isAfter(dayjs({})) {

//     timeBlock.removeClass('.present');
//     timeBlock.removeClass('.past');

//   }
// else {
//   timeBlock.addClass('.present');
// }}
// }

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//

// TODO: Add code to display the current date in the header of the page.


function currentTime() {
  var addDate = $("#currentDay").text(now.format('MMM DD, YYYY'));
  setInterval(function () {
    addDate
  }, 1000);
}

currentTime();
