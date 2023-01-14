export const SET_FETCHED_ID = 'SET_FETCHED_ID';

export const setID = id => dispatch =>{
    dispatch({
        type: SET_FETCHED_ID,
        payload:id,
    })
    
}