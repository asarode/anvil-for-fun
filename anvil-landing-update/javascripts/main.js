this.randombranch = function() {

	// var colorlist = ["#e67e22", "#9b59b6", "#3498db", "#2ecc71", "#1abc9c"];
	var colorlist = ["rgba(200,100,42,0.98)", "rgba(100,50,50,0.98)", "rgba(100,50,200,0.98)"];
	var pause = 3000;
	var length = $("#branch-list li").length;
	var colorlength = colorlist.length;
	var temp = -1;
	// make tempcolor be the original background color
	var tempcolor = "#2dccb7";

	this.getRan = function() {
		var ran = Math.floor(Math.random() * length) + 1;
		return ran
	};

	this.getColor = function() {
		var index = Math.floor(Math.random() * colorlength);
		var color = colorlist[index];

		return color
	};

	this.show = function() {
		var ran = getRan();

		while (ran == temp) {
			ran = getRan();
		};
		temp = ran;
		$("#branch-list li").hide();
		$("#branch-list li:nth-child(" + ran + ")").fadeIn(600);

		//switch the background color
		switchcolor();
	};

	this.switchcolor = function() {
		var color = getColor();
		while (color == tempcolor) {
			color = getColor();
		};

		tempcolor = color;
		$("#main-block").animate({
			backgroundColor: color
		}, 600, 'linear');
	};

	
	show(); setInterval(show,pause);

};


$(document).ready(function() {
	randombranch();
});