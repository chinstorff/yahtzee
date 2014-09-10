$(document).ready(function () {    
    window.yahtzee = new Yahtzee();
    window.app = new YahtzeeView(yahtzee);
    window.router = new AppRouter(app);
    Backbone.history.start();
});
