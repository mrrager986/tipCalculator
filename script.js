// tip calculator

// custom function
function calculateTip() {
    // store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    // quick validation
    if(billAmount === "" || serviceQuality == 0 ) {
        window.alert("PLEASE ENTER SOME VALUES TO GET THE CALCULATOR RUNNING")
        return; // this will prevent function from continuing
    } 

    // check to see if this input is empty or less than or equal to 1
    if(totalPeople === "" || totalPeople <= 1) {
        totalPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    } 

    // do some math
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100) / 100; // round it to 2 decimal places
    total = total.toFixed(2);
    // DISPLAY TIP
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}


// hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
// clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };