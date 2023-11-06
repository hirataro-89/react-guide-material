import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
	const [editingContent, setEditingContent] = useState(todo.content);
	const dispatch = useDispatchTodos();
	const changeContent = (e) => {
		setEditingContent(e.target.value);
	};
	const toggleEditMode = () => {
		//元々のtodoとeditingフラグを反転(true)させたものを新しい配列に入れる
		const newTodo = { ...todo, editing: !todo.editing };
		dispatch({type: "todo/update", todo: newTodo});
	};
	const confirmContent = (e) => {
		e.preventDefault(); //formの初期動作(画面遷移)を防止
		const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
		dispatch({type: "todo/update", todo: newTodo});
	};

	const complete = (todo) => {
		dispatch({type:"todo/delete", todo});
	}
	return (
		<div key={todo.id}>
			<button onClick={() => complete(todo)}>完了</button>
			<form onSubmit={confirmContent} style={{ display: "inline" }}>
				{todo.editing ? (
					<input type="text" value={editingContent} onChange={changeContent} />
				) : (
					<span onDoubleClick={toggleEditMode}>{todo.content}</span>
				)}
			</form>
		</div>
	);
};
export default Item;
