import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import data from "../testimonialsData/testimonialsData.json";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        setReviews(data);
    }, []);
    return (
        <div className="py-5" style={{backgroundColor:"#000036"}}>
        <h1 style={{textAlign: 'center', color: "white"}}>Reviews</h1>
        <hr style={{color:"white", height:"5px", width:"20%",margin: "0 auto", opacity:"1"}}/>
        <br /><br />
        <div className="testimonials">
            {
                reviews.map(review => <Review review={review}></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;