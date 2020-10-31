import './TodoInput.css';

function TodoInput() {
    return (
        <div className="TodoInput">
            <div className="input-group">
                <input id="TodoInput" placeholder="Add New Todo" />
                <div className="input-group-append">
                    <button className="btn btn-info" type="button">Add</button>
                </div>
            </div>
        </div>
    );
}

export default TodoInput;