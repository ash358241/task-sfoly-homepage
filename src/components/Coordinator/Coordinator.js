import React from "react";
import { Button } from "react-bootstrap";
import coordinator from "../../img/st2.png";

const Coordinator = () => {
  return (
    <div
      className="Coordinator py-5"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="row" style={{ width: "90%", margin: "0 auto" }}>
        <div className="col-md-6 text-center">
          <img
            src={coordinator}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "10px",
              borderRadius: "24px",
            }}
          />
          <h6>Registered Coordinators</h6>
          <h3 style={{ color: "cyan" }}>150+</h3>
        </div>
        <div className="col-md-6">
          <h1>Register as a Coordinator</h1>
          <p>
            Grab the opportunity and get a chance to work in the education
            sector with one of the renowned education service providers with the
            option to work full time or part time. Work as a mediator between
            education institutes and us and Earn a handsome amount of money by
            working at your convenience. Top coordinators will be given to work
            as full-time employees with good pay
          </p>
          <Button variant="info">Register Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
