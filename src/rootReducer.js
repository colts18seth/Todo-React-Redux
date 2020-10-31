const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, todos: [...state.todos, { todo: action.todo, key: action.key }] };
        case "DELETE":
            return { ...state, todos: state.todos.filter(todo => action.key !== todo.key) }
        default:
            return state;
    }
}

export default rootReducer;