import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const [error, setError] = useState("");
    const submitEmailMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await emailjs.sendForm(
                "service_zhn0asu",
                "template_hj87fzf",
                e.currentTarget,
                "OgXM0FUDcOjnWDoqm"
            );
            setError('')
        } catch (err) {
            const errorJson = JSON.stringify(err);
            setError(JSON.parse(errorJson).text);
        }
    };
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option-item">
                        <MdOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5 className="text-light">becher.sydney@gmail.com</h5>
                        <a
                            href="mailto:becher.sydney@gmail.com"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option-item">
                        <FaFacebookMessenger className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5 className="text-light">sydney_becher</h5>
                        <a href="https://m.me/sydney.becher" target="_blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option-item">
                        <AiFillMessage className="contact__option-icon" />
                        <h4>Messaging</h4>
                        <h5 className="text-light">+639318487909</h5>
                        <a href="" target="_blank">
                            Send a message
                        </a>
                    </article>
                </div>
                <form onSubmit={submitEmailMessage}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your  Email"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        rows={7}
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>

                    {error.trim().length !== 0 && (
                        <small className="error__sending-email">{error}</small>
                    )}
                </form>
            </div>
        </section>
    );
};
export default Contact;
