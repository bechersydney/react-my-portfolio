import "./experience.css";
import { Verified } from "@mui/icons-material";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="exp__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Angular</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="exp__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Node</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Php</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Laravel</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>C++</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <Verified className="exp__icon" />
                            <div>
                                <h4>Oracle</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Experience;
