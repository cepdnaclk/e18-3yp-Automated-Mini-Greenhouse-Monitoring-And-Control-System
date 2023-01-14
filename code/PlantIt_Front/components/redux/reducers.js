import { SET_FETCHED_ID } from "./action";

const initialState = {
    id: '',
}

function PlantReducer(state = initialState,action){
    switch(action.type){
        case SET_FETCHED_ID:
            return {...state,id: action.payload};
        default:
            return state;
    }
}

export default PlantReducer;