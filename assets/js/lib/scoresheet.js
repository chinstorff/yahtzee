var g = {};

g.Scoresheet = function () {
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
    this.yahtzeeBonus = 0;

    this.upperSum      = 0;
    this.upperBonus    = 0;
    this.upperSubtotal = 0;
    this.lowerSubtotal = 0;
    this.total         = 0;

    this.adie = 0;
    this.bdie = 0;
    this.cdie = 0;
    this.ddie = 0;
    this.edie = 0;
    this.getDice = function () {
	return [this.adie, this.bdie, this.cdie, this.ddie, this.edie].sort();
	// [].sort() works as expected for single digit numbers
    };
    this.setDice = function (dice) {
	this.adie = dice[0];
	this.bdie = dice[1];
	this.cdie = dice[2];
	this.ddie = dice[3];
	this.edie = dice[4];
    };

    this.roll = function (arr) { // [0, 0, 0, 1, 1] rolls ddie and edie
	var arr = arr || [1, 1, 1, 1, 1];

	var letter;

	for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
		letter = String.fromCharCode('a'.charCodeAt() + i);
		this[letter + 'die'] = Math.ceil(Math.random() * 6);
	    }
	}

	return this.getDice();
    };
    
    this.record = function (field, value) {
	this[field] = value;
	this.update();
	return this;
    };
    
    this.update = function () {
	var u = [this.aces, this.twos, this.threes, this.fours, this.fives, this.sixes];
	var l = [this.threeOfAKind, this.fourOfAKind, this.fullHouse, this.smallStraight, this.largeStraight, this.yahtzee, this.chance, this.yahtzeeBonus];

	this.upperSum = 0;
	for (var i = 0; i < u.length; i++) {
	    if (!isNaN(u[i])) {
		this.upperSum += u[i];
	    }
	}
	this.lowerSubtotal = 0;
	for (var i = 0; i < l.length; i++) {
	    if (!isNaN(l[i])) {
		this.lowerSubtotal += l[i];
	    }
	}
	
	this.upperBonus    = this.upperSum >= 63 ? 35 : 0;
	this.upperSubtotal = this.upperSum + this.upperBonus;
	this.total         = this.upperSubtotal + this.lowerSubtotal;
    };
};
