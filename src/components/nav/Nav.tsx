import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";

import { useState } from "react";
const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    const navClickHandler = (id: string) => {
        setActiveNav(id);
    };
    return (
        <nav>
            <a
                href="#"
                className={activeNav === "#" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#")}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#about")}
            >
                <BsPerson />
            </a>
            <a
                href="#experience"
                className={activeNav === "#experience" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#experience")}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                className={activeNav === "#services" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#services")}
            >
                <RiServiceFill />
            </a>
            <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#contact")}
            >
                <TiContacts />
            </a>
        </nav>
    );
};
export default Nav;
