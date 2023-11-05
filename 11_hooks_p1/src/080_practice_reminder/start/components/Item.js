import { useState } from "react";
const Item = ({ todo, complete, updateTodo }) => {
	const [editingContent, setEditingContent] = useState(todo.content);
	const changeContent = (e) => {
		setEditingContent(e.target.value);
	};
	const toggleEditMode = () => {
		//元々のtodoとeditingフラグを反転(true)させたものを新しい配列に入れる
		const newTodo = { ...todo, editing: !todo.editing };
		updateTodo(newTodo);
	};
	const confirmContent = (e) => {
		e.preventDefault(); //formの初期動作(画面遷移)を防止
		const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
		updateTodo(newTodo);
	};
	return (
		<div key={todo.id}>
			<button onClick={() => complete(todo.id)}>完了</button>
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
