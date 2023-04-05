import React from 'react';

export function Content() {
  return (
    <section className="section-01">
  <div className="row">
    <div className="col-12 col-md-4 align-self-center">
      <img src="./img/Person-Using-Macbook-Pro.jpg" className="img-fluid section-01-img" alt="" />
    </div>
    <div className="col-12 col-md-8 align-self-center px-2">
      <h2 className="mb-2">Digital Marketing</h2>
      <p className="text-break">Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones to promote products and services.</p>
      <p className="text-break hidden-p">Digital marketing extends to non-Internet channels that provide digital media, such as television, mobile phones (SMS and MMS), callback, and on-hold mobile ring tones.</p>
    </div>
  </div>
</section>
  )
}

export function Cards(){
  return(
    <div className="section-03">
  <div className="text-center p-3 my-md-3 border border-danger text-danger">
    <i className="fas fa-globe fa-4x my-4 my-sm-5"></i>
    <h2>Web Development</h2>
    <p>Web development is the work involved in developing a website for the Internet or an intranet. Sign up now and start your journey.</p>
  </div>
  <div className="text-center p-3 my-md-3 border border-primary text-primary">
    <i className="fas fa-mobile-alt fa-4x my-4 my-sm-5"></i>
    <h2>App Development</h2>
    <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants.</p>
  </div>
  <div className="text-center p-3 my-md-3 border border-secondary text-secondary">
    <i className="fas fa-video fa-4x my-4 my-sm-5"></i>
    <h2>Video Editing</h2>
    <p> Video editing is used to structure and present all video information, including films and television shows and video advertisements.</p>
  </div>
</div>

  )
}