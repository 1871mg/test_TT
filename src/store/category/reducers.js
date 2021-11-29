import api from "../../api/categories";

// ACTION'S CONSTANTS
const SET_CATEGORIES = "SET_CATEGORIES";
const ADD_CATEGORY = "ADD_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";

let initialState = {
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        category: action.categories,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.category],
      };

    case UPDATE_CATEGORY:
      const updatedCategory = [...state.category];
      const shouldUpdateIndex = updatedCategory.findIndex(c => c.id === action.category.id);

      if(shouldUpdateIndex !== -1) {
        updatedCategory[shouldUpdateIndex] = action.category
      }

      return {
        ...state,
        category: updatedCategory,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter((c) => c.id !== action.id),
      };

    default:
      return state;
  }
};

// ACTION CREATORS
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  category,
});

export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  category,
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  id,
});

// THUNK CREATORS
export const loadCategories = () => {
  return async (dispatch) => {
    const data = await api.fetchCategories();
    dispatch(setCategories(data));
  };
};

export default categoryReducer;
