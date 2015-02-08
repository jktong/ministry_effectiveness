/*
 * This document is deprecated.
 * It was originally used for reading data from a csv.
 * The code for that is found in readRegionalData()
 * To use this code, change index.html and change the link
 *	from "dataHandlerNew.js" to "dataHandler.js"
 */

$(document).ready(function() {
	var objArray = readRegionalData();
	var maxExp = findMaxExposure(objArray);
	objArray.forEach(function(d) {
		regionalData[d.region]={
			exposure:d.exposure,
			color:d3.interpolate("#ffffcc", "#00027f")(d.exposure/maxExp)
		};
	});

	console.log(regionalData);

	/* draw states on id #statesvg */	
	uStates.draw("#statesvg", regionalData, tooltipHtml);
});

function tooltipHtml(n, r, region){	/* function to create html content string in tooltip div. */
	return "<h4>"+n+" ("+r+")</h4><table>"+
		"<tr><td>Exp</td><td>"+(region.exposure)+"</td></tr>"
		"</table>";
}

var readRegionalData = function() {
    var input = $('#input').val();
    var data = $.csv.toObjects(input);
    return data;
};

var findMaxExposure = function(arr) {
	var max = 0;
	arr.forEach(function (elt) {
		max = Math.max(elt.exposure, max);
	});
	return max;
}

var regionalData = {};