import React from "react";
import { Button } from "react-bootstrap";
import "./Institute.css";
import student from '../../img/st.png';
import home from '../../img/hm.jpg';

const Institute = () => {
  return (
    <div className="institute py-5">
      <div className="insDiv">
      <div className="row">
        <div className="col-md-4">
          <h1>
            Register as an <span>Institute</span>
          </h1>
          <p>
            Want to give a headstart to the students of your institute by
            providing them an exciting platform to test their knowledge and
            skills. Then, get your Institute registered with us now!
          </p>
          <Button variant="info">Know More</Button>
        </div>
        <div className="col-md-4">
          <img src={home} alt="" />
          <h6>Registered Institute</h6>
          <h3>2000+</h3>
        </div>
        <div className="col-md-4">
          <img src={student} alt="" />
          <h6>Registered Individuals</h6>
          <h3>50000+</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Institute;
