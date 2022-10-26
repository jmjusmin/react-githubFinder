import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_API_KEY_GH;

export const GithubProvider = ({ children }) => {
  //create an initial state instead of useState
  const initialState = {
    users: [],
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

  //serach
  const searchUsers = async (text) => {
    //loading when call fetch
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: items, //this is data from api
    });
  };

  //set loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  //clear user from state
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
