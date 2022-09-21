import React from "react";
import { useNavigate } from "react-router-dom";

export const NavButton = ({path = "/", text = "back "}) => {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={ () => navigate(path ) }>{text}</button>
        </>
    )
}