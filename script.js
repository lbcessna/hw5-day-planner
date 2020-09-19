var currentDateEl = document.querySelector("#currentDay");

// Look at local cpu to determine current date.
function getDate() {
    var currentDate = moment().format('dddd, MMMM D');
    currentDateEl.append(currentDate);
}
getDate();

