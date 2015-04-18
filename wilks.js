// Make sure that document is ready to be operated on
$(document).ready(function () {
    $("#bodyweight").focus();
});

// If enter button is pressed, activate submit button
$(".submits").keyup(function (enter) {
    if (enter.keyCode == 13) { //enter
        wilks();
    }
});

// When submit button is clicked, calculate wilks value
$("#findValue").click(function (enter) {
    enter.preventDefault();
    wilks();
});

// Function which calculates wilks value
function wilks(){

        // Get value of gender input
        var gender = $('input[name="gender"]:checked').val();
        var gen = gender;

        // Get value of unit of measurement input
        var unit = $('input[name="unit"]:checked').val();
        var un = unit;

        // Get bodyweight value
        var bodyweight = $('#bodyweight').val();

        // Get amount of weight lifted
        var liftedweight = $('#liftedweight').val();

        // Declare wilks value variable
        var wilks = 0;

        // If male, set to male coefficients
        if(gen == 1){
            var a = -216.0475144
            var b = 16.2606339
            var c = -0.002388645
            var d = -0.00113732
            var e = 7.01863E-06
            var f = -1.291E-08
        }else
        // If female, set to female coefficients
        if(gen == 2){
            var a = 594.31747775582
            var b = -27.23842536447
            var c = 0.82112226871
            var d = -0.00930733913
            var e = 0.00004731582
            var f = -0.00000009054
        }

        // If entered in pounds, convert to kilos for calculation
        if(un == 1){
            var bWeight = bodyweight / 2.20462;
            var lWeight = liftedweight / 2.20462;
        }else
        // If entered in kilos, simply set variables to input value
        if(un == 2){
            var bWeight = bodyweight;
            var lWeight = liftedweight;
        }

        // Calculate wilks value, rounded to 2 decimal points
        wilks = (500 / (a + (b * bWeight) + 
            (c * Math.pow(bWeight, 2)) + 
            (d * Math.pow(bWeight, 3)) + 
            (e * Math.pow(bWeight, 4)) + 
            (f * Math.pow(bWeight, 5))) * lWeight).toFixed(2);

        // Output wilks value to html
        $("#result").html(wilks);

}
