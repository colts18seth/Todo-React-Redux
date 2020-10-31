import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import './TodoInput.css';

function TodoInput() {
    const text = useSelector(store => store.text);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({ type: "CHANGE", text: e.target.value });
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD", todo: text, key: uuid() })
    }

    return (
        <div className="TodoInput">
            <form onSubmit={handleAddTodo}>
                <div className="input-group">
                    <input id="TodoInput" placeholder="Add New Todo" onChange={handleChange} value={text} />
                    <div className="input-group-append">
                        <button className="btn btn-info" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div >
    );
}

export default TodoInput;