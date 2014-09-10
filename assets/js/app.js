$(document).ready(function () {    
    window.app = new YahtzeeView(new Yahtzee());
    window.router = new AppRouter(app);
    Backbone.history.start();
});
