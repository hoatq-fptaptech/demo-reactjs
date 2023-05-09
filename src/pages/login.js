import React from "react";
import {NavLink} from "react-router-dom";
import withRouter from "../withRouter";
class Login extends React.Component{
    render() {
        const p = this.props.params;
        console.log(p);
        return (
            <div>
                <NavLink to="/"  className={({ isActive }) =>
                    isActive ? "active" : ""
                }>Home </NavLink>
                <h1>Login</h1>
            </div>
        );
    }
}
export default withRouter(Login);