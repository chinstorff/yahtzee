var YahtzeeView = GenericView.extend({
    name: 'yahtzee',
    events: {

    },

    initialize: function initializeF (options) {
	this.options = options.attributes;
	console.log(this.options);
	this.render();
	console.log("init");
    },

    render: function renderF () {
	var template = this.fetchTemplate();
	var data = this.options;
	var markup = template(data);
	this.theEl().html(markup);
	return this;
    },
});
