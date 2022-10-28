const githubReducer = (state, action) => {
  //evaluate action
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state, //return current state
        //update users and loading
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state, //return current state
        //update users and loading
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
