var YahtzeeView = GenericView.extend({
    name: 'yahtzee',
    events: {

    },

    initialize: function initializeF (options) {
	this.options = options;
	this.render();
    },

    render: function renderF() {
	var template = this.fetchTemplate();
	var data = this.options;
	var markup = template(data);
	this.theEl().html(markup);
	return this;
    },
});
