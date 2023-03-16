import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";



const Home = () => {
    const styles = {fontFamily: 'Climate Crisis'}
  return (
    <React.Fragment>
      <div className=" bg-secondary bg-opacity-50 p-5">
        <div className="d-flex justify-content-center ">
          <Button variant="dark" className="btn-lg">
            Get Our Latest Album
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faPlay} className="fa-5x" />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-center fw-bold" style={styles}>Tours</h1>
        <div className="d-flex justify-content-around border-bottom border-dark border-3 m-3 pt-5 fst-italic">
          <span >JUL16</span>
          <span>DETROIT, MI</span>
          <span className="fw-bold">DTE  MUSIC THEATRE</span>
          <Button  className="mb-2">BUY TICKETS</Button>
        </div>
        <div className="d-flex justify-content-around border-bottom border-dark border-3 m-3 fst-italic">
          <span>JUL19</span>
          <span>TORONTO,ON</span>
          <span className="fw-bold">BUDWEISER STAGE</span>
          <Button  className="mb-2">BUY TICKETS</Button>
        </div>
        <div className="d-flex justify-content-around border-bottom border-dark border-3 m-3 fst-italic">
          <span>JUL 22</span>
          <span> BRISTOW, VA</span>
          <span className="fw-bold">JIGGY LUBE LIVE</span>
          <Button className="mb-2">BUY TICKETS</Button>
        </div>
        <div className="d-flex justify-content-around border-bottom border-dark border-3 m-3 fst-italic ">
          <span>JUL 29</span>
          <span>PHOENIX, AZ</span>
          <span className="fw-bold"> AK-CHIN PAVILION</span>
          <Button  className="mb-2">BUY TICKETS</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
