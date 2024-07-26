function timeToEat(currentTime) {
	let arr1 = currentTime.split(" ");
	let time = arr1[0].split(":");
	let momentOfTheDay = arr1[1].split(".");
	let result = [];

	for (i in time) {
		time[i] = parseInt(time[i]);
	}

	if (momentOfTheDay[0] == "p" && time[0] != 12) {
		time[0] += 12;
	}
	if ((time[0] == 7 || time[0] == 12 || time[0] == 19) && time[1] == 0) {
		result[0] = 0;
		result[1] = 0;
	}

	//Breakfast
	if (time[0] >= 19) {
		result[0] = 23 - time[0] + 7;
		result[1] = 60 - time[1];
		if (result[1] == 60) {
			result[0] += 1;
			result[1] -= 60;
		}
		console.log(result[0]);
	}

	if (time[0] < 7) {
		result[0] = 6 - time[0];
		result[1] = 60 - time[1];
		if (result[1] == 60) {
			result[0] += 1;
			result[1] -= 60;
		}
	}
	//lunch
	if ((time[0] < 12 && time[0] > 7) || (time[0] == 7 && time[1] > 0)) {
		result[0] = 11 - time[0];
		result[1] = 60 - time[1];
		if (result[1] == 60) {
			result[0] += 1;
			result[1] -= 60;
		}
	}
	//Diner
	if ((time[0] < 19 && time[0] >= 12) || (time[0] == 19 && time[1] > 0)) {
		result[0] = 18 - time[0];
		result[1] = 60 - time[1];
		if (result[1] == 60) {
			result[0] += 1;
			result[1] -= 60;
		}
	}

	return result;
}

/*
    timeToEat("2:00 p.m.") ➞ [5, 0]
    // 5 hours until the next meal, dinner

    timeToEat("5:50 a.m.") ➞ [1, 10]
    // 1 hour and 10 minutes until the next meal, breakfast

    reakfast at 7:00 a.m.
    lunch at 12:00 p.m. 
    dinner at 7:00 p.m.
*/

console.log(timeToEat("11:58 p.m."));
