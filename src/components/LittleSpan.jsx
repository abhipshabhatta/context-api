import React, { useContext } from "react";
import { CountContext } from "../context/CountContextProvider";

const LittleSpan = () => {
    const { count } = useContext(CountContext);

    return <span style={{ fontSize: "20px" }}>Count: {count}</span>;
};

export default LittleSpan;
