import './ServiceCard.css'
import img1 from '../../../assets/image/01.png';
import img2 from '../../../assets/image/02.png';
import img3 from '../../../assets/image/03.png';
import img4 from '../../../assets/image/04.png';
import img5 from '../../../assets/image/05.png';
import img6 from '../../../assets/image/06.png';
import img7 from '../../../assets/image/07.png';
import img8 from '../../../assets/image/08.png';
import img9 from '../../../assets/image/Product-cuv.png'
import img10 from '../../../assets/image/smail.png'
import img11 from '../../../assets/image/old-smail.png'
import img12 from '../../../assets/image/playing.png'


const ServiceCard = () => {
    return (
        <section>
            <h2 className="service-heading text-4xl">--- Our Services ---</h2>
            <div className="cards" id="cards">
                <div className="card">
                    <img src={img9} alt="Card Image" />
                    <h2>ROAD-MAP</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, alias.</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img10} alt="Card Image" />
                    <h2>WORKING</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, doloribus.</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img12} alt="Card Image" />
                    <h2>PLAY-TIME</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, dicta.</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img11} alt="Card Image" />
                    <h2>FELL-GOOD</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex.</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img1} alt="Card Image" />
                    <h2>AIR-BUS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quasi?</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img2} alt="Card Image" />
                    <h2>GREEN-HOUSE</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, modi.</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img3} alt="Card Image" />
                    <h2>UMRAH-AGENCY</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, non!</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img4} alt="Card Image" />
                    <h2>ASSISTENT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laboriosam!</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img5} alt="Card Image" />
                    <h2>SEED-FOREST</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, excepturi!</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img6} alt="Card Image" />
                    <h2>SEED-FOREST</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, excepturi!</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img7} alt="Card Image" />
                    <h2>SEED-FOREST</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, excepturi!</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
                <div className="card">
                    <img src={img8} alt="Card Image" />
                    <h2>SEED-FOREST</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, excepturi!</p>
                    <button id="openModal" className="button">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;