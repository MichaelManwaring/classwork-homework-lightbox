function exponential(x , z){
	var i = 0
	var answer = 1
	for (z; z > 0; z--){	
		answer *= x;
	};
	return answer;
};

function circarea (rad) {
	var area =  Math.PI*exponential(rad,2)
	return area
}

function add (num2,num3) {
	console.log(num2+num3)
};
function add (word1,word2) {
	alert(word1+word2)
};
function arrayprint () {
	var guitars = ["fender", "gibson", "epiphone"]
	var bass = ["alembic", "modulus", "ibanez"]
	var drums = ["crash", "boom", "bam"]
	var keys = ["casio", "moog", "wurlitzer"]
	var instruments = [guitars, bass, drums, keys]
	console.log(instruments[Math.round(2*Math.random())][Math.round(2*Math.random())])
}
function secretword (word3) {
	var secretword = "password"
	var count = 0
	for (var i = secretword.length - 1; i >= 0; i--) {
	 	for (var j = word3.length - 1; j >= 0; j--) {
 			console.log(word3[j]+secretword[i])
	 		if (word3[j] == secretword[i]){
	 			count += 1
	 			console.log("match")
	 			break
	 		}
	 	};
	 }; 
	// console.log(count)
	 return count
}

function testvar (q) {
	if(q<10){
		return 1
	} else if(q>10){
		return 2
	} else if (q=10) {
		return 3
	};
};



$(document).ready(function(){



	$("#expclick").click(function(){
		var z = $("#exp").val()
		var x = $("#num1").val()
		$("#exponent").text(exponential(x,z));
	});
	$("#area-button").click(function(){
		var rad = $("#area-input").val()
		$("#solution").text(circarea(rad));
	});
	$("#addclick").click(function(){
		var num2 = parseInt($("#num2").val())
		var num3 = parseInt($("#num3").val())
		add(num2,num3);
	});
	$("#wordclick").click(function(){
		var word1 = $("#word1").val()
		var word2 = $("#word2").val()
		add(word1,word2);
	});
	$("#arrayprint").click(function(){
		arrayprint()
		arrayprint()
	})
	$(".tester").click(function(){
		var temp = $(this).attr("id")
		if (temp=="x"){
			numtest= "#num4"
		} else if (temp=="y") {
			numtest= "#num5"
		} else if (temp=="z") {
			numtest= "#num6"
		} else {
			alert("something broke")
		};
		var tenornot = testvar($(numtest).val())
		if (tenornot==2) {
			$("#tenanswer").text("Your variable was "+temp+" and it is higher than 10")
		}else if(tenornot==1){
			alert("LESS THAN TEN! DO BETTER!")
			$("#tenanswer").text("I dont even know what to say to you....")
		}else if(tenornot=3){
			$("body").css("background-image" , "url('ten.jpg')");
			$("#tenanswer").text("")

		}

	});


















	$("#secretword").click(function(){
		// console.log('test')
		var letters = secretword($("#word3").val())
		$("#secret").text("Your guess contains "+letters+" letters that are also in the secret word!")
	})

// -------Lightbox stuff

	$("#lightclick").click(function(){
		$(".lightbox").show()
	});
	$(".lightbox").click(function(){
		$(".lightbox").hide()
	});

// ----------lightbox URL stuff
	$("#urlclick").click(function(){
		$(".lightbox2").show()
		var url = $("#lighturl").val()
		if ( url[0,7]!="http://") {
			url = "http://" +url
		};
		$("#lightbox-inner2").html("<iframe src=" + url + " ></iframe>")
	});
	$(".lightbox2").click(function(){
		$(".lightbox2").hide()
	});
});






// Complete at least three of these exercises and submit them for a grade.

// -----------------------------------------------Javascript:

//xxxxxx Create a script with two variables assigned to two numbers. Add them together and output the result to the console

// xxxxxxxxxxxxxxxxx Try to add two strings together and output the result to an alert

// xxxxxxxxxxxxxxxxxxxx Create a multi-dimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console

// xxxxxxxxxxxxxxxxxx Write a program that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.

// xxxxxxxxxxxxxxx Try running the script and then changing the variable’s value to see how this affects the program output

// If you have extra time, write a similar program to check if a string stored in a variable is the same as another string

// Declare a function that takes a name as an argument and tells the user what name they’ve entered, try running it after it has been declared

// xxxxxxxxxxxxxxxxxxxx      Declare a function that takes no arguments but prints something to the console, try running it after it has been declared

// xxxxxxxxxxxxxxxxx   Declare a function that, accepts user input (from an input element). Also create a variable in JS assigned to a word of your choice. Depending upon the length of the text the user types, tell the user how many characters off their text was from your "secret" word. 

// --------------------------------------------------- jQuery

// Create a basic HTML page with no styling that has at least 10 separate elements on it

// Use jQuery to create an animated “show”! Try changing an element’s CSS, hiding, showing, fading, and sliding, and making the page run amok

// Once the “show” works, rig it up to only fire when the user clicks anywhere on the page

// If you finish this exercise, implement jQuery into some of the websites you built last week and try playing around with some other functions: http://api.jquery.com/ (Links to an external site.)

// ---------------------------------------------------Extra Credit

// Write pseudo code for a small program. You can come up with whatever problem you wish to solve. Think for instance, the issue of moving an icon to the left after the user clicks on it and then it fades out.

// You may write something like:

// //identify the icon, reference it with its ID

// //make the icon clickable, add a click event to the square

// //when the icon is clicked move the icon from its left 100 pixels

//make icon fade from 100% to 0%