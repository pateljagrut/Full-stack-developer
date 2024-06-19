import { useState } from "react";
import Child from "./Child";
const Parent = () => {
    const [name, setName] = useState("Username");
    const changeName = () => {
        setName("Jagrut");
    }
    return (
        <>
            <div>
                Inside The Parent Component
            </div><h1>Name: {name}</h1>
            <Child name={name} />
            <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default Parent;