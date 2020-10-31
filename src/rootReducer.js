const INITIAL_STATE = { todos: [], text: "" };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE":
            return { ...state, text: action.text };
        case "ADD":
            return { ...state, todos: [...state.todos, { todo: action.todo, key: action.key }], text: "" };
        case "DELETE":
            return { ...state, todos: state.todos.filter(todo => action.key !== todo.key) }
        default:
            return state;
    }
}

export default rootReducer;