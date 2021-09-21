import {ActionType} from "../store/action";

const initialState = {
  users: {},
  areUsersLoaded: false,
  comments: {},
  areCommentsLoaded: false
};

export const data = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_USERS:
      return {
        ...state,
        users: action.payload,
        areUsersLoaded: true
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        areCommentsLoaded: true
      };
  
      default:
      return state;
  }
};
