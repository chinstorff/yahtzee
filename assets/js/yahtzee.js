yahtzee = {};

Turn = function () {
    this.dice = [Math.ceil(Math.random() * 6),
		 Math.ceil(Math.random() * 6),
		 Math.ceil(Math.random() * 6),
		 Math.ceil(Math.random() * 6),
		 Math.ceil(Math.random() * 6)];
    this.pastDice = [];
},

Turn.prototype = {
    reroll: function (array) { // [true, true, false, true, true] rolls all but dice[2] again
	if (this.pastDice.length < 2) {
	    array = array || [true, true, true, true, true];
	    this.pastDice.push(this.dice);
	    for (var i = 0; i < this.dice.length; i++) {
		this.dice[i] = array[i] ? Math.ceil(Math.random() * 6) : this.dice[i];
	    }
	    return true;
	}
	return false;
    },
};

Score = function () {
    this.aces = '—';
    this.twos = '—';
    this.threes = '—';
    this.fours = '—';
    this.fives = '—';
    this.sixes = '—';
    
    this.threeOfAKind = '—';
    this.fourOfAKind = '—';
    this.fullHouse = '—';
    this.smallStraight = '—';
    this.largeStraight = '—';
    this.yahtzee = '—';
    this.chance = '—';
    this.yahtzeeBonus = '0';
};

Score.prototype = {    
    bonus: function () {
	if (this.sum(true) >= 63) {
	    return '35';
	}
	return 0;
    },
    upperSum: function (ignoreBonus) {
	var sum = 0;
	sum += +this.aces;
	sum += +this.twos;
	sum += +this.threes;
	sum += +this.fours;
	sum += +this.fives;
	sum += +this.sixes;

	if (!ignoreBonus) {
	    sum += +this.bonus();
	}

	return sum.toString();
    },
    lowerSum: function () {
	var sum = 0;		

	for (var key in this) {
	    if (!isNaN(+this[key])) {
		sum += +this[key];
	    }
	}
	
	sum -= this.upperSum(true);

	return sum.toString();
    },

    total: function () {
	return (+this.upperSum() + +this.lowerSum());
    },

    isOpen: function (field) {
	return isNaN(this[field]);
    },

    record: function (field) {
	this[field] = calcValue(field).toString();
	return this;
    },

}

Player = function () {
    this.score = new Score();

    this.turns = [new Turn()];
    this.turn = this.turns[0];
};

Player.prototype = {    
    calculateScore: function () {
	var score = new Score();

	var dice = this.turns[this.turns.length - 1].dice;
	var frequency = [0, 0, 0, 0, 0, 0];
	for (var i = 0; i < dice.length; i++) {
	    frequency[dice[i]-1]++;
	}
	var sortedFrequency = frequency.sort(function (a, b) { return a - b });
	var sortedDice = dice.sort(function (a, b) { return a - b });

	var sumDiceIf = function (value) {
	    return dice.reduce(function (a, b) {
		if (b === value || value === true) {
		    return a + b;
		}
		return a;
	    });
	};
	var ofAKind = function (num) {
	    if (sortedFrequency[sortedFrequency.length - 1] >= num) {
		return sumDiceIf(true);
	    }
	    return 0;
	};
	var testStraight = function (array) {
	    for (var i = 1; i < array.length; i++) {
		if (array[0] !== array[i] + i) {
		    return false;
		}
	    }
	    return true;
	}

	//upper
	score.aces = sumDiceIf(1);
	score.twos = sumDiceIf(2);
	score.threes = sumDiceIf(3);
	score.fours = sumDiceIf(4);
	score.fives = sumDiceIf(5);
	score.sixes = sumDiceIf(6);

	// lower
	score.threeOfAKind = ofAKind(3);
	score.fourOfAKind = ofAKind(4);
	score.fullHouse = (sortedFrequency[sortedFrequency.length - 1] === 3 && sortedFrequency[sortedFrequency.length - 2] === 2) ? 25 : 0;
	score.smallStraight = (testStraight(sortedDice.slice(1)) || testStraight(sortedDice.slice(0, -1))) ? 30 : 0;
	score.largeStraight = testStraight(sortedDice) ? 40 : 0;
	score.yahtzee = ofAKind(5);
	score.chance = sumDiceIf(true);

	return score;
    },

    nextTurn: function () {
	this.turns.push(new Turn());
	this.turn = this.turns[this.turns.length - 1];
    },
};

Game = function (num_players) {
    this.num_players = num_players || 1;
    this.players = [];

    for (var i = 0; i < num_players; i++) {
	this.players.push(new Player());
    }
};

