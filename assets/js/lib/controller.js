g.Controller = function () {
    this.scoresheet = new g.Scoresheet();
    this.turnCount = 0;
    this.rollCount = 0;

    this.roll = function () {
	this.scoresheet.roll([1,1,1,1,1]);
	return this;
    };

    this.calculateScoresheet = function () {
	var ret = new g.Scoresheet();
	var dice = this.scoresheet.getDice();
	
	var count = [0, 0, 0, 0, 0, 0];
	
	for (var i = 0; i < dice.length; i++) {
	    count[dice[i]-1] += 1;
	}

	ret.aces   = count[0] * 1;
	ret.twos   = count[1] * 2;
	ret.threes = count[2] * 3;
	ret.fours  = count[3] * 4;
	ret.fives  = count[4] * 5;
	ret.sixes  = count[5] * 6;

	var scount = count.sort(); // works as expected for single digit numbers

	ret.threeOfAKind = scount[5] >= 3 ? dice.reduce(function (a, b) { return a + b }) : 0;
	ret.fourOfAKind = scount[5] >= 4 ? dice.reduce(function (a, b) { return a + b }) : 0;
	ret.fullHouse = scount[5] === 3 && scount[4] === 2 ? 25 : 0;
	ret.smallStraight = 0;
	ret.largeStright  = 0;
	ret.yahtzee = scount[5] >= 5 ? 50 : 0;
	ret.chance = dice.reduce(function (a, b) { return a + b });
	
	return ret;
    };
};

var maxStraightLength = function (arr) {
    a = arr.sort();

    var lengths = [];

    var j;
    for (var i = 0; i < a.length - 1; i++) {
	lengths[i] = 0;

	j = i;
	while (j < a.length) {
	    if (a[i] - i + j === a[j]) {
		lengths[i] += 1;
	    }
	    else {
		break;
	    }
	    j++;
	}
    }

    return lengths.sort(function (a, b) { return b - a })[0];
};
