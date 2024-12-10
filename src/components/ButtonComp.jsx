import React, { useContext } from "react";
import { CountContext } from "../context/CountContextProvider";

const ButtonComp = () => {
    const { count, setCount } = useContext(CountContext);

    const handleAdd = () => {
        setCount(count + 1);
    };

    return (
        <button class
            onClick={handleAdd}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                margin: "20px",
				width: "500px", // Adjusts the button length
				textAlign: "center"
            }}
        >
            Add
        </button>
    );
};

export default ButtonComp;
