import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Buttons from "./buttons";

const Header=()=>{
    return(<header className="nav-bar">
        <Logo/>
        <Menu/>
        <Buttons/>
    </header>)
}
export default Header;