import React from "react";
import { createContext, useState } from "react";
const GlobalContext= createContext();
const Global = () => {
    const [state, setState] = useState(0);
    return (
        <GlobalContext.Provider value={state}>
           <Comp1/>
           <Comp2/>
           <Comp3/>
           <Comp4/>
           <Comp5/>
        </GlobalContext.Provider>
    )
}
export default Global;

const Comp1=()=>{
    let value=React.useContext(GlobalContext)
    return(
    <div>Comp1{value}</div>
    )
}
const Comp2=()=>{
    return(
    <div>Comp2</div>
    )
}
const Comp3=()=>{
    return(
    <div>Comp3</div>
    )
}
const Comp4=()=>{
    return(
    <div>Comp4</div>
    )
}
const Comp5=()=>{
    let value=React.useContext(GlobalContext)
    return(
    <div>Comp5{value}</div>
    )
}