import React from 'react'

function Header() {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href='/'>Appointment</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href='appointmentList'>Show List</a>
            </div>
          </div>
        </nav>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Header
