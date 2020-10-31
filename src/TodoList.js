import TodoInput from './TodoInput';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
    return (
        <div className="TodoList container">
            <h1 className="mt-5">Todo:</h1>
            <TodoInput />
            <ul id="list">
                {/* // !! if todos => map  */}
            </ul>

        </div>
    );
}

export default TodoList;