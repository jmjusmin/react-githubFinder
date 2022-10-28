import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //create an initial state instead of useState
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //use reducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // //get init users (testing purposes)
  // const fecthUsers = async () => {
  //   //loading when call fetch
  //   setLoading();
  //   const res = await fetch(`${GITHUB_URL}/users`, {
  //     params: {
  //       access_token: `${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await res.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data, //this is data from api
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,
        ...state,
        dispatch,
        // searchUsers,
        // getUser,
        // getUserRepos,
        // clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
