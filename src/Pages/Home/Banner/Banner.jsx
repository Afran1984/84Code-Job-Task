
import './Banner.css'
const Banner = () => {
    return (
        <section className="hero" id="home">
        <div className="hero-text">
          <h1>Welcome to My Website</h1>
          <p>Your journey to discover begins here.</p>
          <button id="openModal" className="button">Learn More</button>
        </div>
      </section>
    );
};

export default Banner;