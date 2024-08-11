import React, { createContext, useContext, useState } from "react";
import {
  NavLink,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

//steps to create context api

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("23242f1f1f3hi44"), 300);
  });

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);

    const origin = location?.state?.from?.pathname || "/dashboard";

    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              {" "}
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

const Home = () => {
  const { onLogin } = useAuth();
  return (
    <>
      <h2>Home (public)</h2>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </>
  );
};

const Dashboard = () => {
  const { token } = useAuth();
  return (
    <>
      <h2>Dashboard (Protected)</h2>
      <div>Autheticated as {token}</div>
    </>
  );
};

const Admin = () => {
  return (
    <>
      <h2>Admin (protected)</h2>
    </>
  );
};

const Navigation = () => {
  const {token, onLogout} = useAuth();
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/dashboard">Dashboard</NavLink>&nbsp;&nbsp;
      <NavLink to="/admin">Admin</NavLink>&nbsp;&nbsp;
      {token && <button type="button" onClick={onLogout} >Sign Out</button>}
    </nav>
  );
};
