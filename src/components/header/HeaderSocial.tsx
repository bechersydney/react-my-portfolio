import { LinkedIn, GitHub, Mail } from "@mui/icons-material";

const HeaderSocial = () => {
    return (
        <div className="header__social">
            <a href="https://linkedin.com" target="_blank">
                <LinkedIn />
            </a>
            <a href="https://github.com" target="_blank">
                <GitHub />
            </a>
            <a href="https://gmail.com" target="_blank">
                <Mail />
            </a>
        </div>
    );
};

export default HeaderSocial;
