var xpos = $(window).width()*Math.random()+"px"
var ypos = $(window).height()*Math.random()+"px"
console.log(xpos)
console.log(ypos)

$(document).ready(function(){
	$("div").animate({top:ypos, left:xpos})

	$("div").hover(function(){
		$("div").css({"opacity":"1"})
	})


})