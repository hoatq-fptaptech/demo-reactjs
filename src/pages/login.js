import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import UserContext from "../store/context";
function Login (props){
        const context = useContext(UserContext);
        const state = context.state;
        return (
            <div>
                <NavLink to="/"  className={({ isActive }) =>
                    isActive ? "active" : ""
                }>Home </NavLink>
                <h1>Login</h1>
                <h2>{state.count}</h2>
            </div>
        );
    }

export default Login;