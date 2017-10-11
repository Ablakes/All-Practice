//add an event listener to cross-off completed tasks
$('ul').on('click', "li", function(){
	$(this).toggleClass("completed");
});


//add an event listener for deleting items from list
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	//Prevent any parent element click listeners from firing:
	event.stopPropagation();
});

//add text to list when user hits 'enter' and clear input field
$('input[type="text"]').on('keypress', function(event){
	if(event.which === 13){
		var content = $(this).val();
		alert("hey");
		$(this).val("");
		$('ul').append('<li>' + content + ' <span><i class="fa fa-trash" aria-hidden="true"></i></span> </li>');
	}
});

//hide input until pencil is clicked
$('input').fadeOut(0);

//Make the input box appear when click pencil
$('.fa-pencil').on("click", function(){
	$('input').fadeToggle();
})


// Make button clear all completed items
// $('button').on('click', function(){
// 	$('li.completed').fadeOut(function(){
// 		$('li.completed').remove();
// 	});
