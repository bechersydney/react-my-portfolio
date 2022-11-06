import "./testimonials.css";
import me from "../../assets/images/me.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        id: 1,
        avatar: me,
        name: "Sydney Becher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Amet sed debitis quis consequuntur reiciendis accusantium\
     ipsam tempora labore delectus, molestias maiores enim dolores ab similique eum. Consequatur quia \
     delectus, molestias maiores enim dolores ab similique\
     eum. Consequatur quia mollitia praesentium.\
        mollitia praesentium. accusantium ipsam tempora labore",
    },
    {
        id: 2,
        avatar: me,
        name: "Sydney Becher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Amet sed debitis quis consequuntur reiciendis accusantium\
     ipsam tempora labore delectus, molestias maiores enim dolores ab similique eum. Consequatur quia \
     delectus, molestias maiores enim dolores ab similique\
     eum. Consequatur quia mollitia praesentium.\
        mollitia praesentium. accusantium ipsam tempora labore",
    },
    {
        id: 3,
        avatar: me,
        name: "Sydney Becher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Amet sed debitis quis consequuntur reiciendis accusantium\
     ipsam tempora labore delectus, molestias maiores enim dolores ab similique eum. Consequatur quia \
     delectus, molestias maiores enim dolores ab similique\
     eum. Consequatur quia mollitia praesentium.\
        mollitia praesentium. accusantium ipsam tempora labore",
    },
    {
        id: 4,
        avatar: me,
        name: "Sydney Becher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Amet sed debitis quis consequuntur reiciendis accusantium\
     ipsam tempora labore delectus, molestias maiores enim dolores ab similique eum. Consequatur quia \
     delectus, molestias maiores enim dolores ab similique\
     eum. Consequatur quia mollitia praesentium.\
        mollitia praesentium. accusantium ipsam tempora labore",
    },
    {
        id: 5,
        avatar: me,
        name: "Sydney Becher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Amet sed debitis quis consequuntur reiciendis accusantium\
     ipsam tempora labore delectus, molestias maiores enim dolores ab similique eum. Consequatur quia \
     delectus, molestias maiores enim dolores ab similique\
     eum. Consequatur quia mollitia praesentium.\
        mollitia praesentium. accusantium ipsam tempora labore",
    },
    {
        id: 6,
        avatar: me,
        name: "Sydney Becher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Amet sed debitis quis consequuntur reiciendis accusantium\
     ipsam tempora labore delectus, molestias maiores enim dolores ab similique eum. Consequatur quia \
     delectus, molestias maiores enim dolores ab similique\
     eum. Consequatur quia mollitia praesentium.\
        mollitia praesentium. accusantium ipsam tempora labore",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review for clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, avatar, name, review }) => (
                    <SwiperSlide className="testimonial" key={id}>
                        <div className="client__avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Testimonials;
