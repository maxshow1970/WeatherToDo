import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  itemsFiltered: []
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.value,
            completed: false,
            key: Date.now()
          }
        ],

        itemsFiltered: [
          ...state.items,
          {
            text: action.value,
            completed: false,
            key: Date.now()
          }
        ]
      };

    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item.key !== action.key),
        itemsFiltered: state.items.filter(item => item.key !== action.key)
      };

    case actionTypes.TOGGLE_TODO_ITEM:
      return {
        ...state,
        items: action.complete,
        itemsFiltered: action.complete
      };

    case actionTypes.REMOVE_ALL_ITEM:
      return {
        ...state,
        items: state.items.filter(todo => todo.completed === false),
        itemsFiltered: state.items.filter(todo => todo.completed === false)
      };

    case actionTypes.ALL_VIEW_ITEM:
      return {
        ...state,
        itemsFiltered: state.items.slice(0)
      };

    case actionTypes.ACTIVE_VIEW_ITEM:
      let filteredItemsActive = state.items.filter(itt => {
        return itt.completed === false;
      });
      return {
        ...state,
        itemsFiltered: filteredItemsActive
      };

    case actionTypes.COMPLETED_VIEW_ITEM:
      let filteredItemsCompleted = state.items.filter(itt => {
        return itt.completed === true;
      });
      return {
        ...state,
        itemsFiltered: filteredItemsCompleted
      };

    case actionTypes.EDIT_ITEM:
      return {
        ...state,
        items: action.updItem,
        itemsFiltered: action.updItem
      };

    default:
      return state;
  }
};

export default todo;
