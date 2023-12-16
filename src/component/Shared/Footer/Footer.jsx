import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{ textAlign: 'left' }} className='bg-dark text-light py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <h5>Contact Info</h5>
            <p style={{ color: '#808080', fontSize: '13px' }}>
              <strong>Address:</strong> Your address goes here, your demo
              address.
            </p>
            <p
              onMouseOver={e => (e.target.style.color = '#33e29c')}
              onMouseOut={e => (e.target.style.color = '#808080')}
              style={{ color: '#808080', fontSize: '13px', cursor: 'pointer' }}
            >
              <strong>Phone:</strong> +8880 44338899
            </p>
            <p
              onMouseOver={e => (e.target.style.color = '#33e29c')}
              onMouseOut={e => (e.target.style.color = '#808080')}
              style={{ color: '#808080', fontSize: '13px', cursor: 'pointer' }}
            >
              <strong>Email:</strong> info@colorlib.com
            </p>
          </div>
          <div className='col-lg-4 col-md-6'>
            <h5>Important Links</h5>
            <ul
              style={{ color: '#808080', fontSize: '13px' }}
              className='list-unstyled'
            >
              <li>
                <a
                  onMouseOver={e => (e.target.style.color = '#33e29c')}
                  onMouseOut={e => (e.target.style.color = '#808080')}
                  href='#'
                  style={{ textDecoration: 'none', color: '#808080' }}
                >
                  View Project
                </a>
              </li>
              <li>
                <a
                  onMouseOver={e => (e.target.style.color = '#33e29c')}
                  onMouseOut={e => (e.target.style.color = '#808080')}
                  href='#'
                  style={{ textDecoration: 'none', color: '#808080' }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  onMouseOver={e => (e.target.style.color = '#33e29c')}
                  onMouseOut={e => (e.target.style.color = '#808080')}
                  href='#'
                  style={{ textDecoration: 'none', color: '#808080' }}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  onMouseOver={e => (e.target.style.color = '#33e29c')}
                  onMouseOut={e => (e.target.style.color = '#808080')}
                  href='#'
                  style={{ textDecoration: 'none', color: '#808080' }}
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  onMouseOver={e => (e.target.style.color = '#33e29c')}
                  onMouseOut={e => (e.target.style.color = '#808080')}
                  href='#'
                  style={{ textDecoration: 'none', color: '#808080' }}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-12'>
            <h5>Newsletter</h5>
            <p
              onMouseOver={e => (e.target.style.color = '#33e29c')}
              onMouseOut={e => (e.target.style.color = '#808080')}
              style={{ color: '#808080', fontSize: '13px' }}
            >
              Heaven fruitful doesn't over lesser in days. Appear creeping.
            </p>
            <div className='input-group mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Email Address'
              />
              <div className='input-group-append'>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-change7'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '2px solid #33e29c' }} className='row mt-4'>
          <div className='col-md-12 text-center'>
            <p
              style={{ paddingTop: '20px' }}
              onMouseOver={e => (e.target.style.color = '#33e29c')}
              onMouseOut={e => (e.target.style.color = '#808080')}
            >
              Copyright ©2023 All rights reserved | This template is made with
              by <FaHeart color='#33e29c' /> Charity
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
