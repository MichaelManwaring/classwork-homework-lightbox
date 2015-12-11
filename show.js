$(document).ready(function() {
	$(document).click(function() {
		
		$("h1").text("Now this page is gonna get odd");

		$(".column").css({
			"width": "40%"
		});
		$("#wrapper").css({
			"width":"80%",
			"margin": "10%",
			"background-color":"purple" 
		})
		$("#left").css({
			"float":"left",
			"border-color":"rgba(0,0,0,1.0)",
			"border-style":"dotted",
			"border-width":"5px"
		})
		$("#right").css({
			"float":"right",
			"border-color":"rgba(0,0,200,1.0)",
			"border-style":"solid",
			"border-width":"3px"
		})
		$("footer").css({
			"clear":"both",
			"background-color":"green",
			"margin":"5%"
		})
		$("img").css({
			"width":"90%",
			"margin":"5%"
		})
		$("body").css({
			"text-align": "center",
			"background-color": "rgba(229,187,81,0.9019607843137255)"
		});
		$( "img" ).animate({
			opacity: 0.01,
			width: 0,
			height: "10000px",
		}, 10000, function() {
		    // Animation complete.
		});
		$( "img" ).animate({
			opacity: 1,
			width: "100px",
			height: "toggle",
		}, 10000, function() {
		    // Animation complete.
		});
		$( "#weird" ).animate({
			fontSize: "10em"
		}, 10000, function() {
		    // Animation complete.
		});
		setInterval(function(){
			var r = Math.round(255*Math.random())
			var g = Math.round(255*Math.random())
			var b = Math.round(255*Math.random())
			var a = Math.random()
			var randcol = "rgba("+r+","+g+","+b+","+a+")"
			console.log(randcol)
			$("body").css({
				"background-color": randcol
			});	
		}, 1100);
		setInterval(function(){
			var r = Math.round(255*Math.random())
			var g = Math.round(255*Math.random())
			var b = Math.round(255*Math.random())
			var a = Math.random()
			var randcol = "rgba("+r+","+g+","+b+","+a+")"
			console.log(randcol)
			$("div").css({
				"background-color": randcol
			});	
		}, 700);
		setInterval(function(){
			var r = Math.round(255*Math.random())
			var g = Math.round(255*Math.random())
			var b = Math.round(255*Math.random())
			var a = Math.random()
			var randcol = "rgba("+r+","+g+","+b+","+a+")"
			console.log(randcol)
			$("p").css({
				"background-color": randcol
			});	
		}, 100);
		$( "button" ).animate({
			width: "100000px",
			height: "10000px",
		}, 1000000, function() {
		    // Animation complete.
		});
		$("#wrapper").delay(60000).slideUp(5000);
		// $("header").delay(40000).html("<video width='320' height='240' autoplay><source src='meow.mp4' type='video/mp4'></video>");
		$("h1").delay(10000)
			.queue(function(n) {
				$(this).html("<video width='720' height='500' autoplay><source src='meow.mp4' type='video/mp4'></video>");
				n()})
	});
});