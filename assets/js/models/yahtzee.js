var Yahtzee = Backbone.Model.extend({
    defaults: {
	aces: '&mdash;',
	twos: '&mdash;',
	threes: '&mdash;',
	fours: '&mdash;',
	fives: '&mdash;',
	sixes: '&mdash;',

	upperSum: 0,
	upperBonus: 0,
	upperSubtotal: 0,	

	threeOfAKind: '&mdash;',
	fourOfAKind: '&mdash;',
	fullHouse: '&mdash;',
	smallStraight: '&mdash;',
	largeStraight: '&mdash;',
	yahtzee: '&mdash;',
	chance: '&mdash;',
	yahtzeeBonus: '&mdash;',

	lowerSubtotal: 0,

	total: 0,

	adie: 0,
	bdie: 0,
	cdie: 0,
	ddie: 0,
	edie: 0,
    },

    initialize: function initializeF () {

    },
});
