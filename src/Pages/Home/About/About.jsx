import './About.css';
import CEO from '../../../assets/image/back.png';

const About = () => {
    return (
      <div className="modelcard">
        <img src={CEO} alt="Image 1"/>
        <h3>Md. Abdur Razzak Jim</h3>
        <p>afranrazzak1984@gmail.com</p>
        <p>+8801717663447</p>
        <p>Premier University, Chittagong</p>
        <p>ID: 1903710201984</p>
        <p>B.Sc in CSE</p>
        <p>37th batch</p>
      </div>
    );
};

export default About;