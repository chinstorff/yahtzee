$(document).ready(function () {
    window.app = new YahtzeeView()
    window.router = new AppRouter(app);
    Backbone.history.start();
});
