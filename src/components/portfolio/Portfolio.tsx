import "./portfolio.css";
import portfolio from "../../assets/images/portfolio.jpg";

const Portfolio = () => {
    const portfolioArray = [
        {
            id: 1,
            image: portfolio,
            title: "This is the title",
            github: "https://github.com",
            demo: "https://dribbble.com/Alien_pixels",
        },
        {
            id: 2,
            image: portfolio,
            title: "This is the title",
            github: "https://github.com",
            demo: "https://dribbble.com/Alien_pixels",
        },
        {
            id: 3,
            image: portfolio,
            title: "This is the title",
            github: "https://github.com",
            demo: "https://dribbble.com/Alien_pixels",
        },
        {
            id: 4,
            image: portfolio,
            title: "This is the title",
            github: "https://github.com",
            demo: "https://dribbble.com/Alien_pixels",
        },
        {
            id: 5,
            image: portfolio,
            title: "This is the title",
            github: "https://github.com",
            demo: "https://dribbble.com/Alien_pixels",
        },
        {
            id: 6,
            image: portfolio,
            title: "This is the title",
            github: "https://github.com",
            demo: "https://dribbble.com/Alien_pixels",
        },
    ];
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {portfolioArray.map(({id,image, title, github, demo }) => (
                    <article className="portfolio__item" key={id}>
                        <div className="portfolio__item-image">
                            <img src={image} alt="" />
                        </div>

                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className="btn" target="_blank">
                                Github
                            </a>
                            <a
                                href={demo}
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
