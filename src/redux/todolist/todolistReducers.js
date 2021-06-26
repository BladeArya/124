import { ADD_TASK, DELETE_TASK, EDIT_TASK  } from "./todolistTypes";

const initialState={
    todos:[],
    currentTodo:null,
    isEdit:false
}

const todoListReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TASK:
            if(state.currentTodo === null) {
                return{
                    ...state,
                    todos:[...state.todos,action.payload],
                    currentTodo: null,
                    isEdit:false
                    
                } 
            }else {
                let index = state.todos.findIndex((todo) => todo === state.currentTodo);
                state.todos[index] = action.payload;
                return {
                    ...state,
                    todos: [...state.todos],
                    currentTodo: null,
                    isEdit:false
                }
            }
            
        case DELETE_TASK:
            return{
                ...state,
                todos:state.todos.filter(todo=>todo!==action.payload)
            }
        case EDIT_TASK:
            return{
                ...state,
                currentTodo:action.payload,
                isEdit:true
           }
        default:
            return state
    }
}

export default todoListReducer