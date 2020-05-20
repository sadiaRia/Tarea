import React from 'react'

function Footer() {
  return (
    <footer style={{
      background: '#343a40',
      position: 'fixed',
      height: '30px',
      width: '100%',
      bottom: '0px',
    }}>
      <div className="content-wrapper">
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
          </li>
          <li className="list-inline-item">
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">© 2020 Copyright:
      Appointment.com
        </div>
    </footer>

  );

}

export default Footer
