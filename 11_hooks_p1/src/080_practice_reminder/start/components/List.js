import Item from "./Item";
const List = ({ todos, deleteTodo, updateTodo }) => {
	const complete = (id) => {
		deleteTodo(id);
	};
	return (
		<div>
			{todos.map((todo) => (
				<Item key={todo.id} complete={complete} todo={todo} updateTodo={updateTodo} />
			))}
		</div>
	);
};

export default List;
