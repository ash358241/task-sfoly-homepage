import React from 'react';
import { Button } from 'react-bootstrap';
import './Olympiad.css';

const Olympiad = ({olympiad}) => {
    console.log(olympiad);
    const { description, logo, title, explore} = olympiad;
    return (
        <div className="cards col-md-4">
            <div className="card" style={{border: 'none'}}>
                <h2 className="card-title">{title}</h2>
                <img src={logo} alt="" />
                <p className="card-desc">{description}</p>
                <Button className="know" variant="info">Know More</Button>
            </div>
        </div>
    );
};

export default Olympiad;