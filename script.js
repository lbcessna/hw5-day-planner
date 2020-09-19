var currentDateEl = document.querySelector("#currentDay");

// Look at local cpu to determine current date.
function getDate() {
    var currentDate = moment().format('dddd, MMMM D');
    currentDateEl.append(currentDate);
}
getDate();

// Array of objects. Each id represents one hour.
var workDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        amPm: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        amPm: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        amPm: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        amPm: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        amPm: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        amPm: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        amPm: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        amPm: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        amPm: "pm",
        reminder: ""
    }]

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
    hourRow.append(hourField);
});

