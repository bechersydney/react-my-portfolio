import "./nav.css";
import {
    HomeOutlined,
    PersonOutlineOutlined,
    LibraryBooksOutlined,
    DesignServicesOutlined,
    MessageOutlined,
} from "@mui/icons-material";
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
                <HomeOutlined />
            </a>
            <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#about")}
            >
                <PersonOutlineOutlined />
            </a>
            <a
                href="#experience"
                className={activeNav === "#experience" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#experience")}
            >
                <LibraryBooksOutlined />
            </a>
            <a
                href="#services"
                className={activeNav === "#services" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#services")}
            >
                <DesignServicesOutlined />
            </a>
            <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={navClickHandler.bind(this, "#contact")}
            >
                <MessageOutlined />
            </a>
        </nav>
    );
};
export default Nav;
