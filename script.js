var selectRow = $("mb-3");
var yesterday = moment().subtract(1, 'days').calendar();
var tomorrow = moment().add(1, 'days').calendar();
var today = moment().format('LLLL');
var currHour = moment().hours();
var prevHour = moment().startOf('hour').fromNow();
var futureHour = moment().endOf('hour').fromNow();
var futureColor = false;
var savedInput = $("#input1");
var savedOutput = $("#output1");
var setTime = new Date();
var calHour = "";
var schArr = ("");



$(document).ready(function () {


    var headingDate = moment().format('LLLL'); 
    //Added form-control REMOVE if this isn't working tomorrow.
    $("#currentDay", "form-control").text(headingDate);

    $(".colorizer").each(function () {

        calHour = $(this).attr("hour");

        if (calHour > currHour) {

            $(this).addClass("future");

        }

    });




    for (i = 0; i < window.localStorage.length; i++) {

        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);
        document.getElementById(key + "text").value = value;
    }

    $(".saveBtn").on("click", function (event) {



        var output = event.target.parentElement.previousElementSibling.value;
        var keyItem = event.target.id;
        window.localStorage.setItem(keyItem, output);

    });


});




