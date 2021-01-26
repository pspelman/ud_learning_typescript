import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
	id: number
	title: string
	completed: boolean
}

axios.get(url).then(response => {
	const todo = response.data as Todo

	const id = todo.id
	const title = todo.title
	const completed = todo.completed
	logTodo(id, title, completed)
	//	to print out as a multiline, use a template string
})

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
	Todo with ID : ${id}\n
	Has a title of : ${title}\n
	Finished? : ${completed}
	`,)
}