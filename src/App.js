import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import {UserProvider} from "./store/context";
import initState from "./store/store";
import {useReducer, useState} from "react";
import reducer from "./store/reducer";
function App() {
  // const [count,setCount] = useState(0);
  // const [color,setColor]= useState("red");
    const [state, dispatch] = useReducer(reducer,initState);
  return (
      <UserProvider value={{state,dispatch}}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavLink to="/"  className={({ isActive }) =>
               isActive ? "active" : ""
            }>Home</NavLink>
            <NavLink to="/login"  className={({ isActive }) =>
                 isActive ? "active" : ""
            }>Login </NavLink>
          </header>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </UserProvider>
  );
}

export default App;
