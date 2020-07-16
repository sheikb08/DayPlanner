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
var final = $("#hey");
var setTime = new Date();


$(document).ready(function () {

    var headingDate = moment().format('LLLL');
    $("#currentDay").text(headingDate);

    for (i=0; i<10; i++){
    if (prevHour < futureHour) {
        futureColor = true
       // $(".form-control").addClass("future");

        //Random Idea
        setTime.setTime(1594569600000);

        //Testing Idea
        console.log(setTime);
     }

    }

    $(".saveBtn").on("click", function () {

        //savedInput += $(this).val();
        //localStorage.setItem(savedInput);
        //$("value").text(savedInput);

//localStorage.setItem('form-control', JSON.stringify(savedInput))
//const data = JSON.parse(localStorage.getItem("form-control"))

        var output = savedInput.val();
        var keyItem = savedInput.val();
        localStorage.setItem(keyItem, output);

        for (i=0; i<localStorage.length; i++){
	
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            $("#final").text(key);
           
            
        
        }
            
    });


});




