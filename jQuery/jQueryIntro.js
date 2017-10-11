// $(".highlight").css("width","200px");
// $("#third").css("border", "1px solid orange");
// $("div:first-of-type").css("color", "pink");
// $("div").css("background","purple");

// $(".secondList").text("Muthafucka!!!");

// $('button').click(function(){
// 	$('img').attr('width', '2px');
// 	$(this).css('width', '100px');
// 	console.log("you clicked " + $(this).text());
// });

$("input").keypress(function(event){
	var letters = $('input').val();
	if(event.which === 13){
		$('p').text(letters);
		console.log(letters);
	}
});

$('img').attr('height', '300px');
$('img').attr('width', "215px");
$('.btn').attr('color', 'green');
$('button').attr("color", "blue");

$

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
})

// $('button').on('click', function(){
// 	$('img').fadeToggle();
// })

$("img").fadeOut();
$(".img2").fadeOut();
$(".img3").fadeOut();

$('.container').on('mouseenter', function(){
	$('img:first').fadeIn(200);
})

$('.container').on("mouseleave", function(){
	$('img:first').fadeOut(200);
})
$('.container2').on('mouseenter', function(){
	$(".img2").fadeIn(200);
})

$('.container2').on("mouseleave", function(){
	$(".img2").fadeOut(200);
})
$('.container3').on('mouseenter', function(){
	$(".img3").fadeIn(200);
})

$('.container3').on("mouseleave", function(){
	$(".img3").fadeOut(200);
})

