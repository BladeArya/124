import { ADD_TASK, DELETE_TASK, EDIT_TASK  } from "./todolistTypes";

export const addTaskItems=(item)=>{
    return{
        type:ADD_TASK,
        payload:item
    }
}

export const deleteTaskItem=(item)=>{
    return{
        type:DELETE_TASK,
        payload:item
    }
}

export const editTaskItem=(item)=>{
    return{
        type:EDIT_TASK,
        payload:item
    }
}