$(document).ready(function() {
	var dataObj = sqlData;
	var ingestedData = readData(dataObj);
	if (isStateData(dataObj)) {
		aggregateRegionalData(ingestedData);
	}
	setDefaultColors(ingestedData);
	console.log("end");
	// var maxExp = findMaxExposure(objArray);
	/* draw states on id #statesvg */
	uStates.draw("#statesvg", ingestedData, tooltipHtml);
});
/* function to create html content string in tooltip div. */
function tooltipHtml(state, region, data){
	var tipString = "<h4>"+state+" ("+region+")</h4><table>";
	var field;
	for (field in data) {
		tipString += "<tr><td>"+field+"</td><td>"+data[field]+"</td></tr>"
	}
	tipString += "</table>";
	console.log(tipString);
	return tipString;
}

var readData = function(dataObj) {
	var ingestedData = {};
	var idKey;
	if (isStateData(dataObj)) {
		idKey = "state";
	} else if (isStateData(dataObj)) {
		//TODO: figure out if idKey should be abbrv or region
	}
	dataObj.data
	.forEach(function(entry) {
		var loc = entry[idKey];
		ingestedData[loc] = {};
		for (varName in entry) {
			if (varName !== idKey) {
				if (entry[varName] !== null) {
					ingestedData[loc][varName] = entry[varName];
				} else {
					ingestedData[loc][varName] = 0;
				}
			}
		}
	});
	return ingestedData;
	console.log("done reading");
}

var setDefaultColors = function(stateData) {
	for (state in stateData) {
		stateData[state].color = 
			d3.interpolate("#ffffcc", "#00027f")(Math.random());
	}
	console.log(stateData);
}

var aggregateRegionalData = function(ingestedData){
	var regionalData = {};
	var state;
	for(state in ingestedData) {

	}
	console.log("aggregation complete");
}

var readRegionalData = function() {
    
 //    objArray.forEach(function(d) {
	// 	regionalData[d.region]={
	// 		exposure:d.exposure,
	// 		color:d3.interpolate("#ffffcc", "#00027f")(d.exposure/maxExp)
	// 	};
	// });
};

var isStateData = function(dataObj) {
	var keys = Object.keys(dataObj.data[0]);
	return ($.inArray("state", keys) !== -1);
}

var isRegionalData = function(dataObj) {
	var keys = Object.keys(dataObj.data[0]);
	var hasRegion = ($.inArray("abbrv", keys) !== -1) || 
		($.inArray("region", keys) !== -1)
	return (!isStateData(dataObj) && hasRegion);
}

var findMaxExposure = function(arr) {
	var max = 0;
	arr.forEach(function (elt) {
		max = Math.max(elt.exposure, max);
	});
	return max;
}

var regions = {	"GL":["IL", "IN", "MI", "OH"],
				"GP":["CO", "KS", "MO", "NE", "NM", "WY"],
				"MA":["DE", "MD", "NJ", "PA", "VA", "WV"],
				"MS":["KY", "NC", "SC", "TN"],
				"NE":["CT", "MA", "ME", "NH", "NY", "RI", "VT"],
				"NW":["AK", "ID", "MT", "NV", "OR", "UT", "WA"],
				"RR":["AR", "LA", "OK", "TX"],
				"SE":["AL", "FL", "GA", "MS"],
				"SW":["AZ", "CA", "HI"],
				"UM":["IA", "MN", "ND", "SD", "WI"]};







