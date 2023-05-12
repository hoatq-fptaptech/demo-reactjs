import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import {UserProvider} from "./store/context";
import initState from "./store/store";
function App() {
  return (
      <UserProvider value={initState}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavLink to="/"  className={({ isActive }) =>
               isActive ? "active" : ""
            }>Home</NavLink>
            <NavLink to="/login/1"  className={({ isActive }) =>
                 isActive ? "active" : ""
            }>Login </NavLink>
          </header>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login/:id" element={<Login/>} />
          </Routes>
        </div>
      </UserProvider>
  );
}

export default App;
