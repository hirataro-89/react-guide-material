import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
	{
		id: 1,
		content: "店予約する",
		editing: false,
	},
	{
		id: 2,
		content: "卵買う",
		editing: false,
	},
	{
		id: 3,
		content: "郵便出す",
		editing: false,
	},
];

const todoReducer = (todos, action) => {
	switch (action.type) {
		case "todo/add":
			return [...todos, action.todo];
		case "todo/delete":
			return todos.filter((todo) => {
				return todo.id !== action.todo.id;
			});
		case "todo/update":
			return todos.map((_todo) => {
				//_todoはmapメソッドで取得したtodo
				// _todoとtodoが等しい場合はtodoで上書き。等しくない場合は_todoで上書き
				return _todo.id === action.todo.id ? { ..._todo, ...action.todo } : { ..._todo };
			});
		default:
			return todos;
	}
};
const TodoProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(todoReducer, todosList);

	return (
		<TodoContext.Provider value={todos}>
			<TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	);
};

const useTodos = () => {
	return useContext(TodoContext);
};

const useDispatchTodos = () => {
	return useContext(TodoDispatchContext);
};

export { useTodos, useDispatchTodos, TodoProvider };
