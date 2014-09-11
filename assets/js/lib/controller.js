g.Controller = function () {
    this.scoresheet = new g.Scoresheet();
    this.turnCount = 0;
    this.rollCount = 0;

    this.roll = function () {
	this.scoresheet.roll([1,1,1,1,1]);
	return this;
    };
};
