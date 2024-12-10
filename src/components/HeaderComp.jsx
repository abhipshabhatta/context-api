import React, { useContext } from "react";
import { CountContext } from "../context/CountContextProvider";

const HeaderComp = () => {
    const { count } = useContext(CountContext);

    return <h1 style={{ fontSize: "100px", color: "#333" }}>{count}</h1>;
};

export default HeaderComp;
