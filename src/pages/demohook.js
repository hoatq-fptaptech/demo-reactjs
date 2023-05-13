import React, {useContext, useEffect, useReducer, useState} from "react";
import reducer from "../store/reducer";
import initState from "../store/store";
import UserContext from "../store/context";

const Demohook = (props)=>{
    const [group,setGroup] = useState("G1");
    const [className,setClassName] = useState("TT");
    const [state,dispatch] = useReducer(reducer,initState);
    const getData = ()=>{
        console.log("AAA");
        setGroup("G2");
    }
    useEffect(getData,[className]);
    const data = useContext(UserContext);
    const upC = ()=>data.dispatch({type:"up"});
    const downC = ()=>data.dispatch({type:"down"});
    return (
        <div>
        <h1>{props.title}- {group} </h1>
            <button type="button" onClick={downC}>Down</button>
            <button type="button" onClick={upC}>Up</button>
        </div>
            );
}
export default Demohook;