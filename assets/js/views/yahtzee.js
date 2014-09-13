var YahtzeeView = GenericView.extend({
    name: 'yahtzee',
    events: {
	'click #adie' : 'toggleADie',
	'click #bdie' : 'toggleADie',
	'click #cdie' : 'toggleADie',
	'click #ddie' : 'toggleADie',
	'click #edie' : 'toggleADie',

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
	return this;
    },

    roll: function rollF () {
	controller.roll();
	this.render();
    },

    selectCategory: function selectCategoryF (cat) {
	if (isNaN(controller.scoresheet[cat])) {
	    var value = controller.calculateScoresheet()[cat];
	    controller.scoresheet.record(cat, value);
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
