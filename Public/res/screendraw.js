var canvas;
var context;

prepCanv();
function prepCanv(){
	canvas = document.getElementById("canv");
	$("#canv").attr("width",$(window).width());
	$("#canv").attr("height",$(window).height());
	context = canvas.getContext("2d");
}
function drawPoint(info){
	context.fillStyle = info.col;
	context.fillRect(info.position[0]-1, info.position[1]-1, 2, 2);
}