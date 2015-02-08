(function(){
	var sqlData = 
	// Past JSON object here

/*
SELECT ministry_targetarea.state
		, sum(ministry_statistic.`evangelisticOneOnOne`)
		, sum(ministry_statistic.`evangelisticGroup`)
		, sum(ministry_statistic.`spiritual_conversations`)
		, sum(ministry_statistic.`holySpiritConversations`)
		, sum(ministry_statistic.`exposuresViaMedia`)
		, sum(ministry_statistic.`faculty_involved`)
		, sum(ministry_statistic.`invldStudents`)
FROM ministry_targetarea
	JOIN ministry_activity
		ON ministry_activity.fk_targetAreaID=ministry_targetarea.targetAreaID
	JOIN ministry_statistic
		ON ministry_statistic.`fk_Activity`=ministry_activity.activityID
	JOIN ministry_regionalteam
		ON ministry_regionalteam.`region`=ministry_targetarea.region
WHERE 
	#ministry_statistic.`exposures`>0 AND
	ministry_targetarea.state is not NULL AND
	ministry_statistic.`periodBegin` between '2013-09-01' and '2014-08-31'
GROUP BY ministry_targetarea.state


*/
	{
	"data":
	[
		{
			"state": "AK",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": null,
			"sum(ministry_statistic.`evangelisticGroup`)": null,
			"sum(ministry_statistic.`spiritual_conversations`)": null,
			"sum(ministry_statistic.`holySpiritConversations`)": null,
			"sum(ministry_statistic.`exposuresViaMedia`)": null,
			"sum(ministry_statistic.`faculty_involved`)": 3,
			"sum(ministry_statistic.`invldStudents`)": null
		},
		{
			"state": "AL",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1388,
			"sum(ministry_statistic.`evangelisticGroup`)": 14425,
			"sum(ministry_statistic.`spiritual_conversations`)": 5126,
			"sum(ministry_statistic.`holySpiritConversations`)": 350,
			"sum(ministry_statistic.`exposuresViaMedia`)": 15800,
			"sum(ministry_statistic.`faculty_involved`)": 1254,
			"sum(ministry_statistic.`invldStudents`)": 18175
		},
		{
			"state": "AR",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 745,
			"sum(ministry_statistic.`evangelisticGroup`)": 917,
			"sum(ministry_statistic.`spiritual_conversations`)": 1161,
			"sum(ministry_statistic.`holySpiritConversations`)": 43,
			"sum(ministry_statistic.`exposuresViaMedia`)": 0,
			"sum(ministry_statistic.`faculty_involved`)": 30,
			"sum(ministry_statistic.`invldStudents`)": 3868
		},
		{
			"state": "AZ",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1046,
			"sum(ministry_statistic.`evangelisticGroup`)": 1014,
			"sum(ministry_statistic.`spiritual_conversations`)": 2632,
			"sum(ministry_statistic.`holySpiritConversations`)": 145,
			"sum(ministry_statistic.`exposuresViaMedia`)": 383,
			"sum(ministry_statistic.`faculty_involved`)": 17,
			"sum(ministry_statistic.`invldStudents`)": 3740
		},
		{
			"state": "CA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 6038,
			"sum(ministry_statistic.`evangelisticGroup`)": 29811,
			"sum(ministry_statistic.`spiritual_conversations`)": 17104,
			"sum(ministry_statistic.`holySpiritConversations`)": 1555,
			"sum(ministry_statistic.`exposuresViaMedia`)": 45001,
			"sum(ministry_statistic.`faculty_involved`)": 2408,
			"sum(ministry_statistic.`invldStudents`)": 74245
		},
		{
			"state": "CO",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 2179,
			"sum(ministry_statistic.`evangelisticGroup`)": 3488,
			"sum(ministry_statistic.`spiritual_conversations`)": 5940,
			"sum(ministry_statistic.`holySpiritConversations`)": 538,
			"sum(ministry_statistic.`exposuresViaMedia`)": 7301,
			"sum(ministry_statistic.`faculty_involved`)": 48,
			"sum(ministry_statistic.`invldStudents`)": 9763
		},
		{
			"state": "CT",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 208,
			"sum(ministry_statistic.`evangelisticGroup`)": 1326,
			"sum(ministry_statistic.`spiritual_conversations`)": 408,
			"sum(ministry_statistic.`holySpiritConversations`)": 63,
			"sum(ministry_statistic.`exposuresViaMedia`)": 520,
			"sum(ministry_statistic.`faculty_involved`)": 23,
			"sum(ministry_statistic.`invldStudents`)": 904
		},
		{
			"state": "DC",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 24,
			"sum(ministry_statistic.`evangelisticGroup`)": 4,
			"sum(ministry_statistic.`spiritual_conversations`)": 168,
			"sum(ministry_statistic.`holySpiritConversations`)": 1,
			"sum(ministry_statistic.`exposuresViaMedia`)": 0,
			"sum(ministry_statistic.`faculty_involved`)": 0,
			"sum(ministry_statistic.`invldStudents`)": 1475
		},
		{
			"state": "DE",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": null,
			"sum(ministry_statistic.`evangelisticGroup`)": 10,
			"sum(ministry_statistic.`spiritual_conversations`)": null,
			"sum(ministry_statistic.`holySpiritConversations`)": null,
			"sum(ministry_statistic.`exposuresViaMedia`)": null,
			"sum(ministry_statistic.`faculty_involved`)": null,
			"sum(ministry_statistic.`invldStudents`)": 24
		},
		{
			"state": "FL",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1577,
			"sum(ministry_statistic.`evangelisticGroup`)": 13936,
			"sum(ministry_statistic.`spiritual_conversations`)": 6904,
			"sum(ministry_statistic.`holySpiritConversations`)": 691,
			"sum(ministry_statistic.`exposuresViaMedia`)": 2702,
			"sum(ministry_statistic.`faculty_involved`)": 1194,
			"sum(ministry_statistic.`invldStudents`)": 26921
		},
		{
			"state": "GA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1286,
			"sum(ministry_statistic.`evangelisticGroup`)": 4284,
			"sum(ministry_statistic.`spiritual_conversations`)": 4820,
			"sum(ministry_statistic.`holySpiritConversations`)": 470,
			"sum(ministry_statistic.`exposuresViaMedia`)": 2269,
			"sum(ministry_statistic.`faculty_involved`)": 3275,
			"sum(ministry_statistic.`invldStudents`)": 12237
		},
		{
			"state": "HI",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 2,
			"sum(ministry_statistic.`evangelisticGroup`)": null,
			"sum(ministry_statistic.`spiritual_conversations`)": 14,
			"sum(ministry_statistic.`holySpiritConversations`)": 2,
			"sum(ministry_statistic.`exposuresViaMedia`)": null,
			"sum(ministry_statistic.`faculty_involved`)": null,
			"sum(ministry_statistic.`invldStudents`)": 144
		},
		{
			"state": "IA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1191,
			"sum(ministry_statistic.`evangelisticGroup`)": 1571,
			"sum(ministry_statistic.`spiritual_conversations`)": 2074,
			"sum(ministry_statistic.`holySpiritConversations`)": 441,
			"sum(ministry_statistic.`exposuresViaMedia`)": 3734,
			"sum(ministry_statistic.`faculty_involved`)": 6,
			"sum(ministry_statistic.`invldStudents`)": 9322
		},
		{
			"state": "ID",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 226,
			"sum(ministry_statistic.`evangelisticGroup`)": 906,
			"sum(ministry_statistic.`spiritual_conversations`)": 682,
			"sum(ministry_statistic.`holySpiritConversations`)": 89,
			"sum(ministry_statistic.`exposuresViaMedia`)": 650,
			"sum(ministry_statistic.`faculty_involved`)": 247,
			"sum(ministry_statistic.`invldStudents`)": 2523
		},
		{
			"state": "IL",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 2983,
			"sum(ministry_statistic.`evangelisticGroup`)": 5946,
			"sum(ministry_statistic.`spiritual_conversations`)": 6818,
			"sum(ministry_statistic.`holySpiritConversations`)": 296,
			"sum(ministry_statistic.`exposuresViaMedia`)": 4103,
			"sum(ministry_statistic.`faculty_involved`)": 7,
			"sum(ministry_statistic.`invldStudents`)": 18014
		},
		{
			"state": "IN",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 3105,
			"sum(ministry_statistic.`evangelisticGroup`)": 14160,
			"sum(ministry_statistic.`spiritual_conversations`)": 7324,
			"sum(ministry_statistic.`holySpiritConversations`)": 1619,
			"sum(ministry_statistic.`exposuresViaMedia`)": 1045,
			"sum(ministry_statistic.`faculty_involved`)": 2387,
			"sum(ministry_statistic.`invldStudents`)": 37873
		},
		{
			"state": "KS",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 664,
			"sum(ministry_statistic.`evangelisticGroup`)": 1507,
			"sum(ministry_statistic.`spiritual_conversations`)": 5203,
			"sum(ministry_statistic.`holySpiritConversations`)": 594,
			"sum(ministry_statistic.`exposuresViaMedia`)": 11636,
			"sum(ministry_statistic.`faculty_involved`)": 0,
			"sum(ministry_statistic.`invldStudents`)": 6832
		},
		{
			"state": "KY",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1363,
			"sum(ministry_statistic.`evangelisticGroup`)": 3677,
			"sum(ministry_statistic.`spiritual_conversations`)": 2931,
			"sum(ministry_statistic.`holySpiritConversations`)": 735,
			"sum(ministry_statistic.`exposuresViaMedia`)": 60478,
			"sum(ministry_statistic.`faculty_involved`)": 229,
			"sum(ministry_statistic.`invldStudents`)": 9981
		},
		{
			"state": "LA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 182,
			"sum(ministry_statistic.`evangelisticGroup`)": 160,
			"sum(ministry_statistic.`spiritual_conversations`)": 623,
			"sum(ministry_statistic.`holySpiritConversations`)": 45,
			"sum(ministry_statistic.`exposuresViaMedia`)": 0,
			"sum(ministry_statistic.`faculty_involved`)": 55,
			"sum(ministry_statistic.`invldStudents`)": 4133
		},
		{
			"state": "MA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 863,
			"sum(ministry_statistic.`evangelisticGroup`)": 1998,
			"sum(ministry_statistic.`spiritual_conversations`)": 4790,
			"sum(ministry_statistic.`holySpiritConversations`)": 330,
			"sum(ministry_statistic.`exposuresViaMedia`)": 744,
			"sum(ministry_statistic.`faculty_involved`)": 66,
			"sum(ministry_statistic.`invldStudents`)": 19761
		},
		{
			"state": "MD",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1244,
			"sum(ministry_statistic.`evangelisticGroup`)": 1945,
			"sum(ministry_statistic.`spiritual_conversations`)": 2716,
			"sum(ministry_statistic.`holySpiritConversations`)": 487,
			"sum(ministry_statistic.`exposuresViaMedia`)": 1153,
			"sum(ministry_statistic.`faculty_involved`)": 159,
			"sum(ministry_statistic.`invldStudents`)": 21894
		},
		{
			"state": "ME",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 179,
			"sum(ministry_statistic.`evangelisticGroup`)": 31,
			"sum(ministry_statistic.`spiritual_conversations`)": 602,
			"sum(ministry_statistic.`holySpiritConversations`)": 14,
			"sum(ministry_statistic.`exposuresViaMedia`)": 0,
			"sum(ministry_statistic.`faculty_involved`)": 2,
			"sum(ministry_statistic.`invldStudents`)": 319
		},
		{
			"state": "MI",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 3299,
			"sum(ministry_statistic.`evangelisticGroup`)": 6129,
			"sum(ministry_statistic.`spiritual_conversations`)": 13702,
			"sum(ministry_statistic.`holySpiritConversations`)": 866,
			"sum(ministry_statistic.`exposuresViaMedia`)": 8821,
			"sum(ministry_statistic.`faculty_involved`)": 26,
			"sum(ministry_statistic.`invldStudents`)": 31626
		},
		{
			"state": "MN",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 2166,
			"sum(ministry_statistic.`evangelisticGroup`)": 7456,
			"sum(ministry_statistic.`spiritual_conversations`)": 5586,
			"sum(ministry_statistic.`holySpiritConversations`)": 346,
			"sum(ministry_statistic.`exposuresViaMedia`)": 4472,
			"sum(ministry_statistic.`faculty_involved`)": 195,
			"sum(ministry_statistic.`invldStudents`)": 22376
		},
		{
			"state": "MO",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1966,
			"sum(ministry_statistic.`evangelisticGroup`)": 9832,
			"sum(ministry_statistic.`spiritual_conversations`)": 7168,
			"sum(ministry_statistic.`holySpiritConversations`)": 886,
			"sum(ministry_statistic.`exposuresViaMedia`)": 681,
			"sum(ministry_statistic.`faculty_involved`)": 38,
			"sum(ministry_statistic.`invldStudents`)": 9486
		},
		{
			"state": "MS",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 615,
			"sum(ministry_statistic.`evangelisticGroup`)": 16625,
			"sum(ministry_statistic.`spiritual_conversations`)": 5666,
			"sum(ministry_statistic.`holySpiritConversations`)": 440,
			"sum(ministry_statistic.`exposuresViaMedia`)": 369625,
			"sum(ministry_statistic.`faculty_involved`)": 361,
			"sum(ministry_statistic.`invldStudents`)": 15173
		},
		{
			"state": "MT",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 461,
			"sum(ministry_statistic.`evangelisticGroup`)": 992,
			"sum(ministry_statistic.`spiritual_conversations`)": 1152,
			"sum(ministry_statistic.`holySpiritConversations`)": 612,
			"sum(ministry_statistic.`exposuresViaMedia`)": 10020,
			"sum(ministry_statistic.`faculty_involved`)": 38,
			"sum(ministry_statistic.`invldStudents`)": 3177
		},
		{
			"state": "NC",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 2266,
			"sum(ministry_statistic.`evangelisticGroup`)": 15065,
			"sum(ministry_statistic.`spiritual_conversations`)": 10570,
			"sum(ministry_statistic.`holySpiritConversations`)": 735,
			"sum(ministry_statistic.`exposuresViaMedia`)": 131391,
			"sum(ministry_statistic.`faculty_involved`)": 1530,
			"sum(ministry_statistic.`invldStudents`)": 57173
		},
		{
			"state": "ND",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 400,
			"sum(ministry_statistic.`evangelisticGroup`)": 2963,
			"sum(ministry_statistic.`spiritual_conversations`)": 1759,
			"sum(ministry_statistic.`holySpiritConversations`)": 233,
			"sum(ministry_statistic.`exposuresViaMedia`)": 8405,
			"sum(ministry_statistic.`faculty_involved`)": 78,
			"sum(ministry_statistic.`invldStudents`)": 12457
		},
		{
			"state": "NE",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 226,
			"sum(ministry_statistic.`evangelisticGroup`)": 1469,
			"sum(ministry_statistic.`spiritual_conversations`)": 610,
			"sum(ministry_statistic.`holySpiritConversations`)": 285,
			"sum(ministry_statistic.`exposuresViaMedia`)": 542,
			"sum(ministry_statistic.`faculty_involved`)": 11,
			"sum(ministry_statistic.`invldStudents`)": 4385
		},
		{
			"state": "NH",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 263,
			"sum(ministry_statistic.`evangelisticGroup`)": 3577,
			"sum(ministry_statistic.`spiritual_conversations`)": 770,
			"sum(ministry_statistic.`holySpiritConversations`)": 145,
			"sum(ministry_statistic.`exposuresViaMedia`)": 200,
			"sum(ministry_statistic.`faculty_involved`)": 9,
			"sum(ministry_statistic.`invldStudents`)": 5345
		},
		{
			"state": "NJ",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 572,
			"sum(ministry_statistic.`evangelisticGroup`)": 2452,
			"sum(ministry_statistic.`spiritual_conversations`)": 1788,
			"sum(ministry_statistic.`holySpiritConversations`)": 170,
			"sum(ministry_statistic.`exposuresViaMedia`)": 10527,
			"sum(ministry_statistic.`faculty_involved`)": 436,
			"sum(ministry_statistic.`invldStudents`)": 8548
		},
		{
			"state": "NM",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 395,
			"sum(ministry_statistic.`evangelisticGroup`)": 461,
			"sum(ministry_statistic.`spiritual_conversations`)": 823,
			"sum(ministry_statistic.`holySpiritConversations`)": 142,
			"sum(ministry_statistic.`exposuresViaMedia`)": 400,
			"sum(ministry_statistic.`faculty_involved`)": 14,
			"sum(ministry_statistic.`invldStudents`)": 1207
		},
		{
			"state": "NV",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 42,
			"sum(ministry_statistic.`evangelisticGroup`)": 0,
			"sum(ministry_statistic.`spiritual_conversations`)": 56,
			"sum(ministry_statistic.`holySpiritConversations`)": 0,
			"sum(ministry_statistic.`exposuresViaMedia`)": 0,
			"sum(ministry_statistic.`faculty_involved`)": 0,
			"sum(ministry_statistic.`invldStudents`)": 0
		},
		{
			"state": "NY",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1406,
			"sum(ministry_statistic.`evangelisticGroup`)": 3185,
			"sum(ministry_statistic.`spiritual_conversations`)": 2935,
			"sum(ministry_statistic.`holySpiritConversations`)": 191,
			"sum(ministry_statistic.`exposuresViaMedia`)": 10692,
			"sum(ministry_statistic.`faculty_involved`)": 114,
			"sum(ministry_statistic.`invldStudents`)": 22470
		},
		{
			"state": "OH",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 6850,
			"sum(ministry_statistic.`evangelisticGroup`)": 22739,
			"sum(ministry_statistic.`spiritual_conversations`)": 13837,
			"sum(ministry_statistic.`holySpiritConversations`)": 1312,
			"sum(ministry_statistic.`exposuresViaMedia`)": 31991,
			"sum(ministry_statistic.`faculty_involved`)": 46,
			"sum(ministry_statistic.`invldStudents`)": 32938
		},
		{
			"state": "OK",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 401,
			"sum(ministry_statistic.`evangelisticGroup`)": 2777,
			"sum(ministry_statistic.`spiritual_conversations`)": 1396,
			"sum(ministry_statistic.`holySpiritConversations`)": 320,
			"sum(ministry_statistic.`exposuresViaMedia`)": 761,
			"sum(ministry_statistic.`faculty_involved`)": 2042,
			"sum(ministry_statistic.`invldStudents`)": 7863
		},
		{
			"state": "OR",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 553,
			"sum(ministry_statistic.`evangelisticGroup`)": 241,
			"sum(ministry_statistic.`spiritual_conversations`)": 1256,
			"sum(ministry_statistic.`holySpiritConversations`)": 127,
			"sum(ministry_statistic.`exposuresViaMedia`)": 44047,
			"sum(ministry_statistic.`faculty_involved`)": 36,
			"sum(ministry_statistic.`invldStudents`)": 1857
		},
		{
			"state": "PA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1276,
			"sum(ministry_statistic.`evangelisticGroup`)": 4999,
			"sum(ministry_statistic.`spiritual_conversations`)": 4010,
			"sum(ministry_statistic.`holySpiritConversations`)": 552,
			"sum(ministry_statistic.`exposuresViaMedia`)": 8375,
			"sum(ministry_statistic.`faculty_involved`)": 726,
			"sum(ministry_statistic.`invldStudents`)": 19545
		},
		{
			"state": "PR",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 472,
			"sum(ministry_statistic.`evangelisticGroup`)": 84,
			"sum(ministry_statistic.`spiritual_conversations`)": 1660,
			"sum(ministry_statistic.`holySpiritConversations`)": 66,
			"sum(ministry_statistic.`exposuresViaMedia`)": 455,
			"sum(ministry_statistic.`faculty_involved`)": 4,
			"sum(ministry_statistic.`invldStudents`)": 50
		},
		{
			"state": "RI",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 33,
			"sum(ministry_statistic.`evangelisticGroup`)": 180,
			"sum(ministry_statistic.`spiritual_conversations`)": 118,
			"sum(ministry_statistic.`holySpiritConversations`)": 16,
			"sum(ministry_statistic.`exposuresViaMedia`)": 0,
			"sum(ministry_statistic.`faculty_involved`)": 5,
			"sum(ministry_statistic.`invldStudents`)": 3748
		},
		{
			"state": "SC",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1000,
			"sum(ministry_statistic.`evangelisticGroup`)": 6522,
			"sum(ministry_statistic.`spiritual_conversations`)": 2609,
			"sum(ministry_statistic.`holySpiritConversations`)": 432,
			"sum(ministry_statistic.`exposuresViaMedia`)": 3195,
			"sum(ministry_statistic.`faculty_involved`)": 356,
			"sum(ministry_statistic.`invldStudents`)": 11278
		},
		{
			"state": "SD",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1669,
			"sum(ministry_statistic.`evangelisticGroup`)": 1077,
			"sum(ministry_statistic.`spiritual_conversations`)": 57,
			"sum(ministry_statistic.`holySpiritConversations`)": 170,
			"sum(ministry_statistic.`exposuresViaMedia`)": 539,
			"sum(ministry_statistic.`faculty_involved`)": 0,
			"sum(ministry_statistic.`invldStudents`)": 7699
		},
		{
			"state": "TN",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1191,
			"sum(ministry_statistic.`evangelisticGroup`)": 7141,
			"sum(ministry_statistic.`spiritual_conversations`)": 5213,
			"sum(ministry_statistic.`holySpiritConversations`)": 608,
			"sum(ministry_statistic.`exposuresViaMedia`)": 23586,
			"sum(ministry_statistic.`faculty_involved`)": 658,
			"sum(ministry_statistic.`invldStudents`)": 9528
		},
		{
			"state": "TX",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 4247,
			"sum(ministry_statistic.`evangelisticGroup`)": 11288,
			"sum(ministry_statistic.`spiritual_conversations`)": 10548,
			"sum(ministry_statistic.`holySpiritConversations`)": 1865,
			"sum(ministry_statistic.`exposuresViaMedia`)": 4708,
			"sum(ministry_statistic.`faculty_involved`)": 1883,
			"sum(ministry_statistic.`invldStudents`)": 53065
		},
		{
			"state": "UT",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 175,
			"sum(ministry_statistic.`evangelisticGroup`)": 1360,
			"sum(ministry_statistic.`spiritual_conversations`)": 586,
			"sum(ministry_statistic.`holySpiritConversations`)": 51,
			"sum(ministry_statistic.`exposuresViaMedia`)": 1099,
			"sum(ministry_statistic.`faculty_involved`)": 113,
			"sum(ministry_statistic.`invldStudents`)": 1864
		},
		{
			"state": "VA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 1367,
			"sum(ministry_statistic.`evangelisticGroup`)": 8318,
			"sum(ministry_statistic.`spiritual_conversations`)": 3217,
			"sum(ministry_statistic.`holySpiritConversations`)": 1271,
			"sum(ministry_statistic.`exposuresViaMedia`)": 433,
			"sum(ministry_statistic.`faculty_involved`)": 189,
			"sum(ministry_statistic.`invldStudents`)": 25659
		},
		{
			"state": "VT",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": null,
			"sum(ministry_statistic.`evangelisticGroup`)": null,
			"sum(ministry_statistic.`spiritual_conversations`)": null,
			"sum(ministry_statistic.`holySpiritConversations`)": null,
			"sum(ministry_statistic.`exposuresViaMedia`)": null,
			"sum(ministry_statistic.`faculty_involved`)": null,
			"sum(ministry_statistic.`invldStudents`)": 0
		},
		{
			"state": "WA",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 412,
			"sum(ministry_statistic.`evangelisticGroup`)": 1206,
			"sum(ministry_statistic.`spiritual_conversations`)": 1416,
			"sum(ministry_statistic.`holySpiritConversations`)": 703,
			"sum(ministry_statistic.`exposuresViaMedia`)": 2945,
			"sum(ministry_statistic.`faculty_involved`)": 200,
			"sum(ministry_statistic.`invldStudents`)": 7624
		},
		{
			"state": "WI",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 2991,
			"sum(ministry_statistic.`evangelisticGroup`)": 14759,
			"sum(ministry_statistic.`spiritual_conversations`)": 7224,
			"sum(ministry_statistic.`holySpiritConversations`)": 1139,
			"sum(ministry_statistic.`exposuresViaMedia`)": 41568,
			"sum(ministry_statistic.`faculty_involved`)": 889,
			"sum(ministry_statistic.`invldStudents`)": 60024
		},
		{
			"state": "WV",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 453,
			"sum(ministry_statistic.`evangelisticGroup`)": 990,
			"sum(ministry_statistic.`spiritual_conversations`)": 1136,
			"sum(ministry_statistic.`holySpiritConversations`)": 104,
			"sum(ministry_statistic.`exposuresViaMedia`)": 71,
			"sum(ministry_statistic.`faculty_involved`)": 11,
			"sum(ministry_statistic.`invldStudents`)": 3603
		},
		{
			"state": "WY",
			"sum(ministry_statistic.`evangelisticOneOnOne`)": 10,
			"sum(ministry_statistic.`evangelisticGroup`)": 30,
			"sum(ministry_statistic.`spiritual_conversations`)": 38,
			"sum(ministry_statistic.`holySpiritConversations`)": null,
			"sum(ministry_statistic.`exposuresViaMedia`)": 50,
			"sum(ministry_statistic.`faculty_involved`)": 1,
			"sum(ministry_statistic.`invldStudents`)": 21
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