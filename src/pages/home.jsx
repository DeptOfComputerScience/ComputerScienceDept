import React from "react";

const Home = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <h1 className="text-2xl text-center font-serif font-extralight font-bold">WELCOME TO DEPT OF COMPUTER SCIENCE</h1>
          <div className="carousel-item active">
            <img src="CS.png" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    );
};

export default Home;