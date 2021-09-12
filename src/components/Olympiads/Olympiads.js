import React, { useEffect, useState } from 'react';
import './Olympiads.css';
import data from '../OlymPiadsData/OlymPiadsData.json';
import Olympiad from '../Olympiad/Olympiad';

const Olympiads = () => {
    const [olympiadsData, setOlympiadsData] = useState([]);

    useEffect(()=> {
        setOlympiadsData(data);
    }, [])

    return (
        <div className="olympiadsDiv py-5">
            <h1>Our Olympiads</h1>
            <hr style={{color:"white", opacity:"1", height:"5px", width:"20%", margin:"0 auto"}}/>
            <div className="olympiads row mt-3 w-100">
            
            {
                olympiadsData.map(olympiad => <Olympiad olympiad={olympiad}></Olympiad>)
            }
        </div>
        </div>
    );
};

export default Olympiads;