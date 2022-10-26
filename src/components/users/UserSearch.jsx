import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearSearch } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-r-lg w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* show the div when we have some users display */}
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearSearch}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
