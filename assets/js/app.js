$(document).ready(function () {    
    window.app = new YahtzeeView({ model: new Yahtzee() });
    window.router = new AppRouter(app);
    Backbone.history.start();
});
