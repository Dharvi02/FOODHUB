import React from 'react'

export default function Carousal() {
  return (
    <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner" id ="carousel">
      <div className="carousel-caption" style={{zIndex:"10"}}>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?burger" alt="First slide"  width={"700px"} height={"500px"}/>
      </div>
      <div className="carousel-item">        
        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?pizza" alt="Second slide"/>
      </div>
      <div className="carousel-item">

        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?momos" alt="Third slide"/>
      </div>

    </div>

    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only"></span>
    </a>

    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only"></span>
    </a>
   
  </div></div>
  )
}
