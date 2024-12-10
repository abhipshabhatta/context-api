import React, { useContext, useState } from "react";
import HeaderComp from "./components/HeaderComp";
import ButtonComp from "./components/ButtonComp";
import { CountContext } from "./context/CountContextProvider";

function App() {
    const { count } = useContext(CountContext);
    const [user, setUser] = useState(null); // Track login state

    const handleLogin = () => {
        setUser(user ? null : { loggedIn: true });
    };

    return (
        <div className="App" style={{ textAlign: "center", padding: "20px" }}>
            <HeaderComp />
            <p style={{ fontSize: "20px" }}>The result is: {count}</p>
            <ButtonComp />
            <button
                onClick={handleLogin}
                style={{
					padding: "10px 20px",
					fontSize: "18px",
					cursor: "pointer",
					marginTop: "10px",
					backgroundColor: user ? "Brown" : "black",
					color: "white",
					border: "none",
					borderRadius: "5px",
					width: "500px",
					textAlign: "center",
                }}
            >
                {user ? "Logout" : "Login"}
            </button>
            {user && <p style={{ marginTop: "10px", fontSize: "16px" }}>You are now logged in !!!</p>}
        </div>
    );
}

export default App;
