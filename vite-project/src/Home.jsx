import { useState } from "react"
const Home = () => {
    const [text, setText] = useState("Null")
    const changetext = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            Enter your name:<input onChange={changetext} /><br />
            <p>{text}</p>
        </>
    )
}




export default Home;

