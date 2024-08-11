import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function App() {
  const [users, setusers] = useState([
    { id: "1", fullName: "john doe" },
    { id: "2", fullName: "peter finn" },
  ]);

  const navigate = useNavigate();

  const handleRemoveUser = (userId) => {
    setusers((users) => users.filter((user) => user.id !== userId));
    navigate("/users");
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route
              path=":userId"
              element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

const Users = ({ users }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("name") || "";
  console.log("searchTerm", searchTerm);

  const handleSearch = (evt) => {
    const name = evt.target.value;

    if (name) {
      setSearchParams({ name: evt.target.value });
    } else {
      setSearchParams({});
    }
  };
  return (
    <>
      <h2>Users</h2>

      <input type="text" value={searchTerm} onChange={handleSearch} />

      <ul>
        {users
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
            </li>
          ))}
      </ul>

      <Outlet />
    </>
  );
};

const User = ({ onRemoveUser }) => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId} </h2>

      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>

      <Link to="/users">Back to Users</Link>
    </>
  );
};
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "black" : "blue",
  });
  return (
    <>
      <h1>React Router</h1>

      <nav style={{ borderBottom: "solid 1px", padding: "1rem" }}>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        &nbsp; &nbsp;
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
        &nbsp; &nbsp;
        <NavLink to="/about" style={style}>
          About
        </NavLink>
        <main
          style={{
            padding: "1rem",
          }}
        >
          {" "}
          <Outlet />
        </main>
      </nav>
    </>
  );
};

const Home = () => {
  const goToExternalLink = () => {
    window.location.href = "https://www.google.com/";
  };
  return (
    <>
      <h2>Home</h2>
      <a href="https://www.google.com/" target="_blank">
        google.com
      </a>
      <button onClick={goToExternalLink}> Go to google</button>
      <Link to="https://www.google.com/">gggg</Link>
    </>
  );
};

const About = () => {
  return (
    <>
      <h2>About</h2>
    </>
  );
};

const NoMatch = () => {
  return (
    <>
      <p>There's nothing to show here</p>
    </>
  );
};

export default App;
