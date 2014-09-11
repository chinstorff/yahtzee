var YahtzeeView = GenericView.extend({
    name: 'yahtzee',
    events: {
	'click #adie': 'toggleADie',
	'click #bdie': 'toggleADie',
	'click #cdie': 'toggleADie',
	'click #ddie': 'toggleADie',
	'click #edie': 'toggleADie',

	'click #roll': 'roll',
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
});
