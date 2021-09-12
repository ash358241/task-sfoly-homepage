import {Button} from "react-bootstrap";
import React from "react";
import springField from "../../img/spring.png";

const About = () => {
  return (
    <div className="about py-5" style={{backgroundColor: '#000036', color: 'white'}}>
      <div className="row" style={{width: '90%', margin: '0 auto', display: 'flex', alignItems:'center'}}>
        <div className="col-md-6">
          <h1>About Springfield Olympiads</h1>
          <p>
            We, at Springfield Olympiads, provide one of the best Olympiad
            solutions for students and working professionals and students.
            Springfield Olympiads is an Educational Organization popularizing
            academic competition and assisting the development of competitive
            spirit among learners.
          </p>
          <Button variant="info">Know More</Button>
        </div>
        <div className="col-md-6 text-center">
            <img src={springField} alt="" style={{width:'300px', height:'300px', borderRadius: '24px', marginTop: '20px'}} />
        </div>
      </div>
    </div>
  );
};

export default About;
