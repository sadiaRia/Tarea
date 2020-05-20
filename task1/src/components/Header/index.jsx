import React from 'react'

function Header() {
  return (
    <div>
      <div className="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" >Appointment</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Create Appointment <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="appointmentList">Show List</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Header
