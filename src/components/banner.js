import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoV from "../assets/img/VDESIGN.png";
import TrackVisibility from 'react-on-screen';
import '../styles/banner.css';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const toRotate = [ "Welcome to my Portfolio"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
        }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length; /*Previene que el índice se desborde */
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        } 
    }

    return (
    <section className="banner" id="home">
        <div className="container-banner">
            <div className = ''>
                <span className="tagline">Hi! I'm Andrea Vidal</span>
                {/*Acá va la parte que se escribe dinámicamente */}
                <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                    <p className="description-banner">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    {/*<button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
            </div>
               
            <div className= 'logoV'>
                <img src={logoV} alt="Header Img"/>
            </div>

        </div>
    </section>
    )
}

export default Banner;