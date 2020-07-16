var selectRow = $("mb-3");
var yesterday = moment().subtract(1, 'days').calendar();
var tomorrow = moment().add(1, 'days').calendar();
var today = moment().format('LLLL');


$(document).ready(function () {

    var headingDate = moment().format('LLLL');
    $("#currentDay").text(headingDate);

    
$(".form-control").addClass("future");

 

});




