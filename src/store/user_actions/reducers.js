// ACTION'S CONSTANTS
export const ADD_USER_ACTION = "ADD_USER_ACTION";

let initialState = {
    user_actions: []
};

const userActionsReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case ADD_USER_ACTION:
            return {
                ...state,
                user_actions: [...state.user_actions, action.event]
            };

        default:
            return state;
    }
};

// ACTION CREATORS
export const addUserAction = event => ({ type: ADD_USER_ACTION, event });

export default userActionsReducer;
