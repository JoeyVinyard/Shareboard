var server = io();
var mouseHeld = false;
var info = {
	position	:[0,0],
	col		:genColor()
}
function genColor(){
	//Generates a random 6 digit number to be used as a color
	var num = Math.floor(Math.random() * (999999-111111)) + 111111;
	return "#" + num;
};
$(document).mousemove(function(event){
	info.position[0] = event.pageX;
	info.position[1] = event.pageY;
	if(mouseHeld){
		server.emit('draw', info);
	}
});
$(document).mousedown(function(){
	mouseHeld = true;
});
$(document).mouseup(function(){
	mouseHeld = false;
});
server.on('drawPoint', function(info){
	drawPoint(info);
})