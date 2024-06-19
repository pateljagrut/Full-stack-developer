import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const User = () => {
    const [users, setusers] = useState([]);
    const feacthDataHandler = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        let data = await response.json();
        setusers(data)
        console.log(data);
    }
    useEffect(() => {
        feacthDataHandler();
    }, [])
    const deleteUser = (id) => {
        const newData = users.filter(user => user.id != id)
        setusers(newData.map((user, index) => ({ ...user, id: index + 1 })))
    }
    return (
        <>
            <table border={10}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Delete</th>
                </tr>
                {users.length===0 && <tr><td colSpan={4}>No Data Found</td></tr>}
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                {/* <button onClick={() => deleteUser(user.id)}>Delete</button> */}
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    onClick={() => {
                                        deleteUser(user.id);
                                    
                                    }}
                               style={{ color: "red", cursor: "pointer" }
                               
                               } />
                            </td>
                        </tr>
                    )
                }
                )}</table>
        </>
    )
}
export default User;
