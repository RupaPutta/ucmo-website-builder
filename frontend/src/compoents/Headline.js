import React from 'react'

export function Carousel () {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item c-item-01 active">
      <div className="carousel-caption d-none">
        <h2>Digital Marketing</h2>
        <p className="lead">The importance of creating and using a digital marketing plan to support digital transformation and company growth.</p>
      </div>
    </div>
    <div className="carousel-item c-item-02">
      <div className="carousel-caption d-none">
        <h2>Video Editing</h2>
        <p className="lead">Future is all about learning through videos and for learning professional video editing enrol with us now.</p>
      </div>
    </div>
    <div className="carousel-item c-item-03">
      <div className="carousel-caption d-none">
        <h2>Web and App Development</h2>
        <p className="lead">Learning Web and App Development may be the best choice for your future. It's a great way to expand your business with them.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

export function Centered(){
  return(
    <div className="landing text-light d-flex flex-column justify-content-center align-items-center">
  <div className="d-flex flex-column justify-content-center align-items-center landing-txt">
   <h1 className="heading font-weight-bold text-center">Our vision is your success and that's why we are here to help you.</h1>
  <div className="search-area">
      <input type="text" name="" className="form-control" placeholder="Search here..." id="" />
      <button className="btn btn-dark mx-3 px-4">Search</button>
  </div>
  </div>
</div>
  )
}

export function Gradient (){
  return(
    <div className="clip-area text-light">
    <div className="clip-txt d-flex justify-content-center align-items-center">
      <h1 className="w-75 mx-auto font-weight-bold">Our vision is your success and that's why we are here to help you.</h1>
    </div>
  </div>
  )
}


