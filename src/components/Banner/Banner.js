import React, { useState, useCallback, useEffect} from 'react';
import {Button} from 'react-bootstrap';

import './Banner.css';

const categories = ['English Olympiad', 'Grads Olympiad', 'Science Olympiad', 'Finance Olympiad', 'Maths Olympiad'];

const Banner = () => {

    const [newCategories, setNewCategories] = useState();

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random()*categories.length)
        setNewCategories(categories[index])
    }, []);

    useEffect(()=> {
        const interval = setInterval(shuffle, 2000);
        return ()=>{
            clearInterval(interval);
        }
    }, [shuffle]);
    
    return (
        <div className="banner">
            <div className="bannerContent">
                <h1>Feeling Prepared? <br />Register For <span style={{color: 'cyan'}}>{newCategories}</span></h1>
                <Button variant="info">Register Now</Button>
                <Button variant="info">Schedule</Button>
            </div>
        </div>
    );
};

export default Banner;