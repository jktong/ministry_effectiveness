$(document).ready(function() {
	var dataObj = sqlData;
	var ingestedData = readData(dataObj);
	if (isStateData(dataObj)) {
		aggregateRegionalData(ingestedData);
	}
	setDefaultColours(ingestedData);
	// Change the field here to decide what to color by
	// Eventually, want buttons so viewers can interact with 
	//	the page and toggle between fields of interest
	setColourBy(ingestedData, "spiritual_conversations");
	/* draw states on id #statesvg */
	uStates.draw("#statesvg", ingestedData, tooltipHtml);
});

var regions = {	"GL":["IL", "IN", "MI", "OH"],
				"GP":["CO", "KS", "MO", "NE", "NM", "WY"],
				"MA":["DE", "MD", "NJ", "PA", "VA", "WV"],
				"MS":["KY", "NC", "SC", "TN"],
				"NE":["CT", "MA", "ME", "NH", "NY", "RI", "VT"],
				"NW":["AK", "ID", "MT", "NV", "OR", "UT", "WA"],
				"RR":["AR", "LS", "OK", "TX"],
				"SE":["AL", "FL", "GA", "MS"],
				"SW":["AZ", "CA", "HI"],
				"UM":["IA", "MN", "ND", "SD", "WI"]};

/* function to create html content string in tooltip div. */
function tooltipHtml(state, region, stateData){
	var tipString = "<h4>"+state+" ("+region+")</h4><table>";

	for (field in stateData) {
		if (field !== "color") {
			tipString += "<tr><td>"+field+"</td><td>"+stateData[field]+"</td></tr>";
		}
	}
	tipString += "</table>";
	return tipString;
}

/* function to clean up name from queries */
var parseFieldName = function(field) {
	var index = field.lastIndexOf(".`");
	if (index !== -1) {
		var lastIndex = field.lastIndexOf("`");
		return field.substring(index+2, lastIndex);
	}
	index = field.lastIndexOf(".");
	if (index !== -1) {
		return field.substring(index+1);
	}
	return field;
}

/* function to read in the data from a json object copied
	the sql database 
	Maybe redundant and can remove in the future or change 
	to read CSV */
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
		for (field in entry) {
			var cleanField = parseFieldName(field);
			if (field !== idKey) {
				if (entry[field] !== null) {
					ingestedData[loc][cleanField] = entry[field];
				} else {
					ingestedData[loc][cleanField] = 0;
				}
			}
		}
	});
	return ingestedData;
	console.log("done reading");
}

/* function to initialize colors for each state randomly */
var setDefaultColours = function(stateData) {
	for (state in stateData) {
		stateData[state].color = 
			d3.interpolate("#ffffcc", "#00027f")(Math.random());
	}
}

/* function to set colors for each state by field */
var setColourBy = function(stateData, field) {
	console.log(stateData);
	var max = getFieldMax(stateData, field);
	for (state in stateData) {
		stateData[state].color = 
			d3.interpolate("#ffffcc", "#00027f")(stateData[state][field]/max);
	}
}

/* function to get the largest value of a field among states
	Used in setColourBy() */
var getFieldMax = function(data, field) {
	var max = 0;
	for (entry in data) {
		max = Math.max(data[entry][field],max);
	}
	console.log(max);
	return max;
}

/* function to aggregate state data into data by region */
var aggregateRegionalData = function(ingestedData){
	var regionalData = {};
	var state;
	for (region in regions) {
		regions[region].forEach(function(state) {
			console.log(state);
			// TODO
		});
	}
	console.log("aggregation complete");
}

/* function to determine if input data is on the resolution of states */
var isStateData = function(dataObj) {
	var keys = Object.keys(dataObj.data[0]);
	return ($.inArray("state", keys) !== -1);
}

/* function to determine if input data is on the resolution of regions */
var isRegionalData = function(dataObj) {
	var keys = Object.keys(dataObj.data[0]);
	var hasRegion = ($.inArray("abbrv", keys) !== -1) || 
		($.inArray("region", keys) !== -1)
	return (!isStateData(dataObj) && hasRegion);
}










