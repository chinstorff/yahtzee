var Yahtzee = Backbone.Model.extend({
    defaults: {
	aces: '&mdash;',
	twos: '&mdash;',
	threes: '&mdash;',
	fours: '&mdash;',
	fives: '&mdash;',
	sixes: '&mdash;',

	threeOfAKind: '&mdash;',
	fourOfAKind: '&mdash;',
	fullHouse: '&mdash;',
	smallStraight: '&mdash;',
	largeStraight: '&mdash;',
	yahtzee: '&mdash;',
	chance: '&mdash;',
	yahtzeeBonus: '&mdash;',

    },
});
