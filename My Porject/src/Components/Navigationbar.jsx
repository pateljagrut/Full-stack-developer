import {Outlet} from "react-router-dom";
const Navigationbar = () => {
    return (
        <div>
            <nav>+
                <ul><h1> Navigation Bar</h1>
                    <li>
                        <a href="/global">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/use">Use</a>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};
export default Navigationbar;