var todos = [];
var inputTodoText = document.getElementById("inputText");


function addTodo() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added todo");
}