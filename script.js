// Array of objects. Each id represents one hour.
var workDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        amPm: "am",
        meeting: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        amPm: "am",
        meeting: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        amPm: "am",
        meeting: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        amPm: "pm",
        meeting: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        amPm: "pm",
        meeting: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        amPm: "pm",
        meeting: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        amPm: "pm",
        meeting: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        amPm: "pm",
        meeting: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        amPm: "pm",
        meeting: ""
    }]

var currentDateEl = document.querySelector("#currentDay");

// Look at local cpu to determine current date.
function getDate() {
    var currentDate = moment().format('dddd, MMMM D');
    currentDateEl.append(currentDate);
}

function saveMeetings() {
    localStorage.setItem("workDay", JSON.stringify(myDay));
}

// Sets any data in localStorage to the view
function displaySchedule() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// Sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("workDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveMeetings();
    displaySchedule();
}

getDate();
init();
// Create rows for each time block in workDay
workDay.forEach(function (thisHour) {
    var hourRow = $("<form>").attr({ "class": "row" });
    $(".container").append(hourRow);

    var hourField = $("<div>").text(`${thisHour.hour + " "}${thisHour.amPm}`).attr({ "class": "col-md-2 hour" });

    var hourPlan = $("<div>").attr({ "class": "col-md-9 description p-0" });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr({ "class": "past", })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({ "class": "present" })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({ "class": "future" })
    }

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
});
// Save button click event handler.
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveMeetings();
    displaySchedule();
})

