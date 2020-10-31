import { useSelector } from "react-redux";
import TodoInput from './TodoInput';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
    const todos = useSelector(store => store.todos);

    return (
        <div className="TodoList container">
            <h1 className="mt-5 pt-3">Todo:</h1>
            <TodoInput />
            <div id="list">
                <ul>
                    {todos &&
                        todos.map(todo => <Todo todo={todo} key={todo.key} />)
                    }
                </ul>
            </div>
        </div>
    );
}

export default TodoList;