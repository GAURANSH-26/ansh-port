import React from 'react';

import "../Styles/projectcard.scss";

const ProjectCard = ({ image, title, description, }) => {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={image} alt={title} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
          <div className="card_text" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
