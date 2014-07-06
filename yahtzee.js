yahtzee = {};

yahtzee.Game = function (num_players) {
    var num_players = num_players || 0;
};

Player = function () {
    this.scores = {
	upper: {
	    aces: '—',
	    twos: '—',
	    threes: '—',
	    fours: '—',
	    fives: '—',
	    sixes: '—',
	    bonus: function () {
		if (this.sum(true) >= 63) {
		    return '35';
		}
		return 0;
	    },
	    sum: function (ignoreBonus) {
		var sum = 0;		
		for (var key in this) {
		    if (!isNaN(+this[key])) {
			sum += +this[key];
		    }
		}

		if (!ignoreBonus) {
		    sum += +this.bonus();
		}

		return sum;
	    },
	},
	lower: {
	    threeOfAKind: '—',
	    fourOfAKind: '—',
	    fullHouse: '—',
	    smallStraight: '—',
	    largeStraight: '—',
	    yahtzee: '—',
	    chance: '—',
	    yahtzeeBonus: '0',
	    sum: function () {

	    },
	},
	total: function () {

	},
    };
};

Player.prototype = {

};

Player.prototype.constructor = Player;
