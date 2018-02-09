	// varibale declaration
var $form = $('form')
var $todo = $('#todo')
var $toDoParent = $('ul')
var $toDoList = $('#todoContainer')

var reArrangeDone = function(){
	var done = $('.done').remove()
	$toDoParent.append(done)
}

var reArrangeStart = function(){
	var start = $('.needToDo').remove()
	$toDoParent.prepend(start)
}


$(document).ready(function(){

	$form.on("submit", function(event){
		event.preventDefault()
		if(!$todo.val()){
			alert("Please input a todo")
		} else {
		var $li =$("<li>", {class: 'needToDo'});
		var $value = $("<p>").text($todo.val())
		var $delete = $("<button>", {class: 'far fa-trash-alt' })
		var $checkbox = $("<input>", {type: 'checkbox'})
		// var $input = $("<input>", {type: 'text'})

		$li.append($value)
		// $li.append($input)
		$li.append($checkbox)
		$li.append($delete)
		$toDoParent.append($li)
 
		$form.trigger("reset")

		}

	})

	$toDoList.on('click', 'svg', function(event){
		$(event.target).closest('li').remove()
	})

	$toDoList.on('click', 'input:checkbox', function(event){
		if($(event.target).is(':checked')){
			$(event.target).parent().addClass('done').removeClass('needToDo')
			reArrangeDone()
		} else {
			$(event.target).parent().removeClass('done').addClass('needToDo')
			reArrangeStart()
		}
	})

	// $toDoList.on('dblclick', 'p', function(){
	// 	alert($(event.target).tagName)
	// })
})

