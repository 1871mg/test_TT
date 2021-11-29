import api from "../../api/categories";

// ACTION'S CONSTANTS
const SET_ITEMS = "SET_ITEMS";

let initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

// ACTION CREATORS
export const setSubcategories = (items) => ({
  type: SET_ITEMS,
  items,
});


// THUNK CREATORS
export const loadSubcategories = () => {
    return async dispatch => {
        const data = await api.fetchSubcategories();
        dispatch(setSubcategories(data));
    };
};

export default itemsReducer;
