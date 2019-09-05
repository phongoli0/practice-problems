var monthlystatement = new Object();

function populateRecords(stuffbought){
    var totalcharge = 0;
    var totalcashadvance = 0;

    for (var i = 0; i < stuffbought.length; i++) {
        if (stuffbought[i].type === "charge") {
            totalcharge = totalcharge + parseFloat(stuffbought[i].amount);

        } else if (stuffbought[i].type === "cash advance") {
            totalcashadvance = totalcashadvance + parseFloat(stuffbought[i].amount);
        }

    }


    monthlystatement["charge"] = totalcharge;
    monthlystatement["cash advance"] = totalcashadvance;
    $("#testArea").append("<div class='testOutput'>");
    $(".testOutput").append("<div class='transactionRecord'><div class='transactionType'>Type</div><div class='transactionLocation'>Source</div><div class='transactionAmount'>Amount</div></div>")
    for (var i = 0; i < stuffbought.length; i++) {
        var transRecord = $("<div>").addClass("transactionRecord");
        $('.testOutput').append(transRecord);

        if (stuffbought[i].type !== "") {
            $(transRecord).append("<div class='transactionType'>" + stuffbought[i].type + "</div>");
        }
        if (stuffbought[i].source !== "") {
            $(transRecord).append("<div class='transactionLocation'>" + stuffbought[i].source + "</div>");
        }
        if (stuffbought[i].amount !== "") {
            $(transRecord).append("<div class='transactionAmount'>" + stuffbought[i].amount + "</div>");
        }

    }

    $("#testArea").append("</div></div>");
    return monthlystatement;
    /* <div class="transactionType">stuffbought[i].type</div> */

}
