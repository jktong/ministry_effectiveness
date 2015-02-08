(function(){
	var sqlData = 
	// Past JSON object here
	{
	"data":
	[
		{
			"state": "AK",
			"sum(ministry_statistic.`holySpiritConversations`)": null
		},
		{
			"state": "AL",
			"sum(ministry_statistic.`holySpiritConversations`)": 350
		},
		{
			"state": "AR",
			"sum(ministry_statistic.`holySpiritConversations`)": 43
		},
		{
			"state": "AZ",
			"sum(ministry_statistic.`holySpiritConversations`)": 145
		},
		{
			"state": "CA",
			"sum(ministry_statistic.`holySpiritConversations`)": 1555
		},
		{
			"state": "CO",
			"sum(ministry_statistic.`holySpiritConversations`)": 538
		},
		{
			"state": "CT",
			"sum(ministry_statistic.`holySpiritConversations`)": 63
		},
		{
			"state": "DC",
			"sum(ministry_statistic.`holySpiritConversations`)": 1
		},
		{
			"state": "DE",
			"sum(ministry_statistic.`holySpiritConversations`)": null
		},
		{
			"state": "FL",
			"sum(ministry_statistic.`holySpiritConversations`)": 691
		},
		{
			"state": "GA",
			"sum(ministry_statistic.`holySpiritConversations`)": 470
		},
		{
			"state": "HI",
			"sum(ministry_statistic.`holySpiritConversations`)": 2
		},
		{
			"state": "IA",
			"sum(ministry_statistic.`holySpiritConversations`)": 441
		},
		{
			"state": "ID",
			"sum(ministry_statistic.`holySpiritConversations`)": 89
		},
		{
			"state": "IL",
			"sum(ministry_statistic.`holySpiritConversations`)": 296
		},
		{
			"state": "IN",
			"sum(ministry_statistic.`holySpiritConversations`)": 1619
		},
		{
			"state": "KS",
			"sum(ministry_statistic.`holySpiritConversations`)": 594
		},
		{
			"state": "KY",
			"sum(ministry_statistic.`holySpiritConversations`)": 735
		},
		{
			"state": "LA",
			"sum(ministry_statistic.`holySpiritConversations`)": 45
		},
		{
			"state": "MA",
			"sum(ministry_statistic.`holySpiritConversations`)": 330
		},
		{
			"state": "MD",
			"sum(ministry_statistic.`holySpiritConversations`)": 487
		},
		{
			"state": "ME",
			"sum(ministry_statistic.`holySpiritConversations`)": 14
		},
		{
			"state": "MI",
			"sum(ministry_statistic.`holySpiritConversations`)": 866
		},
		{
			"state": "MN",
			"sum(ministry_statistic.`holySpiritConversations`)": 346
		},
		{
			"state": "MO",
			"sum(ministry_statistic.`holySpiritConversations`)": 886
		},
		{
			"state": "MS",
			"sum(ministry_statistic.`holySpiritConversations`)": 440
		},
		{
			"state": "MT",
			"sum(ministry_statistic.`holySpiritConversations`)": 612
		},
		{
			"state": "NC",
			"sum(ministry_statistic.`holySpiritConversations`)": 735
		},
		{
			"state": "ND",
			"sum(ministry_statistic.`holySpiritConversations`)": 233
		},
		{
			"state": "NE",
			"sum(ministry_statistic.`holySpiritConversations`)": 285
		},
		{
			"state": "NH",
			"sum(ministry_statistic.`holySpiritConversations`)": 145
		},
		{
			"state": "NJ",
			"sum(ministry_statistic.`holySpiritConversations`)": 170
		},
		{
			"state": "NM",
			"sum(ministry_statistic.`holySpiritConversations`)": 142
		},
		{
			"state": "NV",
			"sum(ministry_statistic.`holySpiritConversations`)": 0
		},
		{
			"state": "NY",
			"sum(ministry_statistic.`holySpiritConversations`)": 191
		},
		{
			"state": "OH",
			"sum(ministry_statistic.`holySpiritConversations`)": 1312
		},
		{
			"state": "OK",
			"sum(ministry_statistic.`holySpiritConversations`)": 320
		},
		{
			"state": "OR",
			"sum(ministry_statistic.`holySpiritConversations`)": 127
		},
		{
			"state": "PA",
			"sum(ministry_statistic.`holySpiritConversations`)": 552
		},
		{
			"state": "PR",
			"sum(ministry_statistic.`holySpiritConversations`)": 66
		},
		{
			"state": "RI",
			"sum(ministry_statistic.`holySpiritConversations`)": 16
		},
		{
			"state": "SC",
			"sum(ministry_statistic.`holySpiritConversations`)": 432
		},
		{
			"state": "SD",
			"sum(ministry_statistic.`holySpiritConversations`)": 170
		},
		{
			"state": "TN",
			"sum(ministry_statistic.`holySpiritConversations`)": 608
		},
		{
			"state": "TX",
			"sum(ministry_statistic.`holySpiritConversations`)": 1865
		},
		{
			"state": "UT",
			"sum(ministry_statistic.`holySpiritConversations`)": 51
		},
		{
			"state": "VA",
			"sum(ministry_statistic.`holySpiritConversations`)": 1271
		},
		{
			"state": "VT",
			"sum(ministry_statistic.`holySpiritConversations`)": null
		},
		{
			"state": "WA",
			"sum(ministry_statistic.`holySpiritConversations`)": 703
		},
		{
			"state": "WI",
			"sum(ministry_statistic.`holySpiritConversations`)": 1139
		},
		{
			"state": "WV",
			"sum(ministry_statistic.`holySpiritConversations`)": 104
		},
		{
			"state": "WY",
			"sum(ministry_statistic.`holySpiritConversations`)": null
		}
	]
}



	this.sqlData = sqlData;
})();

/**
SELECT ministry_regionalteam.`abbrv`,sum(ministry_statistic.exposures)
FROM ministry_targetarea
	JOIN ministry_activity
		ON ministry_activity.fk_targetAreaID=ministry_targetarea.targetAreaID
	JOIN ministry_statistic
		ON ministry_statistic.`fk_Activity`=ministry_activity.activityID
	JOIN ministry_regionalteam
		ON ministry_regionalteam.`region`=ministry_targetarea.region
WHERE ministry_statistic.`exposures`>0 
	AND ministry_activity.`periodBegin` between '2013-09-01' and '2014-08-31'
GROUP BY ministry_regionalteam.abbrv
{
		"data":
		[
			{
				"abbrv": "GL",
				"sum(ministry_statistic.exposures)": 1110838
			},
			{
				"abbrv": "GP",
				"sum(ministry_statistic.exposures)": 1809440
			},
			{
				"abbrv": "MA",
				"sum(ministry_statistic.exposures)": 757471
			},
			{
				"abbrv": "MS",
				"sum(ministry_statistic.exposures)": 1382995
			},
			{
				"abbrv": "NE",
				"sum(ministry_statistic.exposures)": 1067648
			},
			{
				"abbrv": "NW",
				"sum(ministry_statistic.exposures)": 763410
			},
			{
				"abbrv": "RR",
				"sum(ministry_statistic.exposures)": 2592400
			},
			{
				"abbrv": "SE",
				"sum(ministry_statistic.exposures)": 720471
			},
			{
				"abbrv": "SW",
				"sum(ministry_statistic.exposures)": 286432
			},
			{
				"abbrv": "UM",
				"sum(ministry_statistic.exposures)": 135448
			}
		]
	}*/