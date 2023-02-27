import "../css/Home.css"
import '../bootstrap/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

const Home: React.FC = () => {
    return (
        <section>
            <div className="company-name">EWebinar</div>
            <div className="description"><b>EWebinar</b> - website, that contains a lot of webinars on different themes.</div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.wikia.nocookie.net/metalgear/images/7/7e/Screen-shot-2011-12-10-at-9-44-25-pm-e1323575264274.png"
                        alt="First slide"
                        width="500"
                        height="400"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true"
                        alt="Second slide"
                        width="500"
                        height="400"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media-cldnry.s-nbcnews.com/image/upload/streams/2013/August/130808/6C8558749-130808-walter-white-tease.jpg"
                        alt="Third slide"
                        width="500"
                        height="400"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Home;