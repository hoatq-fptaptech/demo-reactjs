import React, {useEffect, useState} from "react";

const Demohook = (props)=>{
    const [group,setGroup] = useState("G1");
    const [className,setClassName] = useState("TT");
    const getData = ()=>{
        console.log("AAA");
        setGroup("G2");
    }
    useEffect(getData,[className]);
    return <h1>{props.title}- {group}</h1>;
}
export default Demohook;