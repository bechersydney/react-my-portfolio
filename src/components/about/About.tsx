import "./about.css";
import me from "../../assets/images/profile.jpg";
import {
    EmojiEventsOutlined,
    PeopleAltOutlined,
    FolderSpecialOutlined,
} from "@mui/icons-material";

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={me} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <EmojiEventsOutlined className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ years Working</small>
                        </article>
                        <article className="about__card">
                            <PeopleAltOutlined className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <FolderSpecialOutlined className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel ducimus odio, sint esse atque cum quod amet
                        officia ipsa, a, facilis asperiores sapiente beatae
                        accusamus magnam dolores cupiditate labore? Sunt.
                    </p>
                    <a href="#contact" className="btn-primary btn">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};
export default About;
