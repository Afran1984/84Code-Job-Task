import { useState, useEffect } from 'react';
import img1 from '../../../assets/image/01.png';
import img2 from '../../../assets/image/02.png';
import img3 from '../../../assets/image/03.png';
import img4 from '../../../assets/image/04.png';
import img5 from '../../../assets/image/05.png';
import img6 from '../../../assets/image/06.png';
import img7 from '../../../assets/image/07.png';
import img8 from '../../../assets/image/08.png';
import img9 from '../../../assets/image/Product-cuv.png';
import img10 from '../../../assets/image/smail.png';
import img11 from '../../../assets/image/old-smail.png';
import img12 from '../../../assets/image/playing.png';


const ServiceCard = () => {
    const [services] = useState([
        { id: 1, name: 'ROAD-MAP', category: 'Planning', price: 120, image: img9 },
        { id: 2, name: 'WORKING', category: 'Work', price: 200, image: img10 },
        { id: 3, name: 'PLAY-TIME', category: 'Fun', price: 300, image: img12 },
        { id: 4, name: 'FELL-GOOD', category: 'Mental-Health', price: 300, image: img11 },
        { id: 5, name: 'AIR-BUS', category: 'Travel', price: 300, image: img1 },
        { id: 6, name: 'GREEN-HOUSE', category: 'Environment', price: 300, image: img2 },
        { id: 7, name: 'UMRAH-AGENCY', category: 'Travel', price: 300, image: img3 },
        { id: 8, name: 'ASSISTENT', category: 'Support', price: 300, image: img4 },
        { id: 9, name: 'SEED-FOREST', category: 'Environment', price: 300, image: img5 },
        { id: 10, name: 'SEED-FOREST', category: 'Environment', price: 300, image: img6 },
        { id: 11, name: 'SEED-FOREST', category: 'Environment', price: 300, image: img7 },
        { id: 12, name: 'SEED-FOREST', category: 'Environment', price: 300, image: img8 },
    ]);

    const [category, setCategory] = useState('all');
    const [maxPrice, setMaxPrice] = useState(500);
    const [filteredServices, setFilteredServices] = useState(services);

  // Filter logic using category and maxPrice
  useEffect(() => {
    const filtered = services.filter(service => {
      return (category === 'all' || service.category === category) &&
             service.price <= maxPrice;
    });
    setFilteredServices(filtered);
  }, [category, maxPrice, services]);
    return (
        <section>
      <h2 className="service-heading text-4xl">--- Our Services ---</h2>

      {/* Filters */}
      <div id="filters" className="flex flex-col space-y-4 my-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Categories</option>
          <option value="Planning">Planning</option>
          <option value="Work">Work</option>
          <option value="Fun">Fun</option>
          <option value="Mental-Health">Mental Health</option>
          <option value="Travel">Travel</option>
          <option value="Environment">Environment</option>
          <option value="Support">Support</option>
        </select>

        <div>
          <input
            type="range"
            value={maxPrice}
            min="100"
            max="500"
            step="50"
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
          <span className="ml-2">Max Price: ${maxPrice}</span>
        </div>
      </div>

      {/* Cards */}
      <div className="cards grid grid-cols-3 gap-6" id="cards">
        {filteredServices.map(service => (
          <div key={service.id} className="card border p-4 rounded-lg shadow-lg">
            <img src={service.image} alt={service.name} className="mb-4" />
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-lg font-semibold">${service.price}</p>
            <button className="button bg-blue-500 text-white p-2 mt-2 rounded">Learn More</button>
          </div>
        ))}
      </div>
    </section>
    );
};

export default ServiceCard;