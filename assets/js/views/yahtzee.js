var YahtzeeView = GenericView.extend({
    name: 'yahtzee',
    events: {
	'click #adie' : 'adie',
	'click #bdie' : 'bdie',
	'click #cdie' : 'cdie',
	'click #ddie' : 'ddie',
	'click #edie' : 'edie',

	'click #roll' : 'roll',

	'click #aces'   : 'aces',
	'click #twos'   : 'twos',
	'click #threes' : 'threes',
	'click #fours'  : 'fours',
	'click #fives'  : 'fives',
	'click #sixes'  : 'sixes',

	'click #threeOfAKind'  : 'threeOfAKind',
	'click #fourOfAKind'   : 'fourOfAKind',
	'click #fullHouse'     : 'fullHouse',
	'click #smallStraight' : 'smallStraight',
	'click #largeStraight' : 'largeStraight',
	'click #yahtzee'       : 'yahtzee',
	'click #chance'        : 'chance',
    },

    initialize: function initializeF (options) {
	this.options = options.attributes;
	this.render();
    },

    render: function renderF () {
	var template = this.fetchTemplate();
	var data = controller.scoresheet;
	var markup = template(data);
	this.theEl().html(markup);

	var letter;
	g.keepDice = g.keepDice || [1,1,1,1,1];
	for (var i = 0; i < g.keepDice.length; i++) {
	    letter = String.fromCharCode('a'.charCodeAt() + i);
	    if (g.keepDice[i]) {
		$('#' + letter + 'die').css({'color': '888'});
	    } else {
		$('#' + letter + 'die').css({'color': '000'});
	    }
	}
	
	return this;
    },

    toggleDie: function (die) {
	g.keepDice = g.keepDice || [1,1,1,1,1];

	var letter = String.fromCharCode('a'.charCodeAt() + die);
	if (controller.scoresheet[letter + 'die']) {
	    g.keepDice[die] = (g.keepDice[die] + 1) % 2;
	}

	this.render();
    },
    
    adie: function () {
	this.toggleDie(0);
    },

    bdie: function () {
	this.toggleDie(1);
    },

    cdie: function () {
	this.toggleDie(2);
    },

    ddie: function () {
	this.toggleDie(3);
    },
    
    edie: function () {
	this.toggleDie(4);
    },

    roll: function rollF () {
	controller.roll(g.keepDice);
	this.render();
    },    

    selectCategory: function selectCategoryF (cat) {
	if (isNaN(controller.scoresheet[cat]) && controller.scoresheet.ddie) {
	    var value = controller.calculateScoresheet()[cat];
	    controller.scoresheet.record(cat, value);
	    controller.advanceTurn();
	    g.keepDice = undefined;
	    this.render();
	    return true;
	}
	return false;
    },
    
    aces: function () {
	return this.selectCategory('aces');
    },

    twos: function () {
	return this.selectCategory('twos');
    },

    threes: function () {
	return this.selectCategory('threes');
    },

    fours: function () {
	return this.selectCategory('fours');
    },

    fives: function () {
	return this.selectCategory('fives');
    },

    sixes: function () {
	return this.selectCategory('sixes');
    },

    threeOfAKind: function () {
	return this.selectCategory('threeOfAKind');
    },

    fourOfAKind: function () {
	return this.selectCategory('fourOfAKind');
    },

    fullHouse: function () {
	return this.selectCategory('fullHouse');
    },

    smallStraight: function () {
	return this.selectCategory('smallStraight');
    },

    largeStraight: function () {
	return this.selectCategory('largeStraight');
    },

    yahtzee: function () {
	return this.selectCategory('yahtzee');
    },

    chance: function () {
	return this.selectCategory('chance');
    },
});
