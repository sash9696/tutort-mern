

let nextId = 0;


export function createTodo(text, completed = false){
    return {
        id:nextId ++,
        text,
        completed
    };
}

export const initialTodos = [
    createTodo('Study react core concepts', true),
    createTodo('Study js core concepts', true),
    createTodo('Study node js core concepts')
]