import React from 'react'

export function Full() {
  return (
    <div className="bg-secondary">
        <div className="container py-2">
            <div className="row">
              <div className="col-6">
                <a className="navbar-brand text-light" href="/">university.edu</a>
              </div>
              <div className="col-6 text-right text-light mt-2">
                  <i className="mx-1 mx-sm-2 fas fa-search"></i>
                  <i className="mx-1 mx-sm-2 fas fa-cart-arrow-down"></i>
                  <i className="mx-1 mx-sm-2 fas fa-power-off"></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export function Small(){
  return(
    <div className="header-2 container py-2">
      <div className="row">
        <div className="col-6">
          <a className="navbar-brand text-dark" href="/">university.edu</a>
        </div>
        <div className="col-6 text-right">
          <div className="d-inline-block">
            <img src="./img/menu2.png" height="40" width="40" alt="" />
          </div>
        </div>
     </div>
    </div>
  )
}
