var selectRow = $("mb-3");
var yesterday = moment().subtract(1, 'days').calendar();
var tomorrow = moment().add(1, 'days').calendar();
var today = moment().format('LLLL');
var currHour = moment();
var prevHour = moment().startOf('hour').fromNow();
var futureHour = moment().endOf('hour').fromNow();
var futureColor = false;
var savedInput = $("#input1");
var savedOutput = $("#output1");
var setTime = new Date();


$(document).ready(function () {

   
    var headingDate = moment().format('LLLL');
    $("#currentDay").text(headingDate);

  

    for (i = 0; i < localStorage.length; i++) {

        var key = localStorage.key(i);
       var value = localStorage.getItem(key);
       document.getElementById(key + "text").value = value;
    }

    $(".saveBtn").on("click", function (event) {

      

        var output = event.target.parentElement.previousElementSibling.value;
        var keyItem = event.target.id;
        localStorage.setItem(keyItem, output);





    });


});




