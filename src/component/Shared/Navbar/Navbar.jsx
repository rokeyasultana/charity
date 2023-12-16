import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav
        class='navbar navbar-expand-lg bg-light  p-3 text-dark'
        id='headerNav'
      >
        <div class='container-fluid'>
          <a class='navbar-brand d-block d-lg-none' href='#'>
            <img
              src='https://preview.colorlib.com/theme/charityworks/assets/img/logo/logo.png'
              height='30'
            />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class=' collapse navbar-collapse text-dark' id='navbarNavDropdown'>
            <ul class='navbar-nav mx-auto '>
              <li class='nav-item'>
                <a class='nav-link mx-2 active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mx-2' href='#'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mx-2' href='#'>
                  Latest Causes
                </a>
              </li>
              <li class='nav-item d-none d-lg-block'>
                <a class='nav-link mx-2' href='#'>
                  <img
                    src='https://preview.colorlib.com/theme/charityworks/assets/img/logo/logo.png'
                    height='30'
                  />
                </a>
              </li>

              <li class='nav-item'>
                <a class='nav-link mx-2' href='#'>
                  Blog
                </a>
              </li>

              <li class='nav-item'>
                <a class='nav-link mx-2' href='#'>
                  About Us
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link mx-2' href='#'>
                  Contact us
                </a>
              </li>
              <button class='btn-change7'>Donate</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
