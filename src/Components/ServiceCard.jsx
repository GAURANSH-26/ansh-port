import React from 'react';
import '../Styles/servicecard.scss';

const ServiceCard = ({ title, bgColor, item }) => {
  return (
    <div className="card" style={{ '--bg-color': bgColor }}>
      <a href="#" className="card-link">
        <div className="card-bg"></div>
        <div className="card-title">{title}</div>
        <ul>
          {item.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default ServiceCard;
