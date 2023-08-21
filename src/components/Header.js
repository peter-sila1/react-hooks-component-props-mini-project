import { render } from "@testing-library/react";
import React from "react";

function Header({name}) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}

export default Header; 