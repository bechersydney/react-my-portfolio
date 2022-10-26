import resume from "../../assets/raw/resume.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a className="btn" href={resume} download>
                Download CV
            </a>
            <a className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>
    );
};

export default CTA;
