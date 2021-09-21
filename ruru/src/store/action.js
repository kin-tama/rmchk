export const ActionType = {
    LOAD_USERS: `data/loadUsers`,
    LOAD_COMMENTS: `data/loadComments`,
  };
  
  export const loadUsers = (users) => ({
    type: ActionType.LOAD_USERS,
    payload: users
  });

  export const loadComments = (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  });