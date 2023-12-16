import React from 'react'

const Volunteer = () => {
  return (
    <div>
      <p
        style={{
          color: '#33e29c',
          paddingTop: '80px',
          fontWeight: 'bold',
          marginTop: '-50px'
        }}
      >
        What We Are Doing
      </p>
      <h2 style={{ color: '#072366', fontSize: '40px' }}>
        Our Expert Volunteer<br></br>Always Ready
      </h2>
      <div
        className='row row-cols-1 row-cols-md-4 '
        style={{
          margin: '0 auto',
          marginTop: '30px',
          marginLeft: '50px',
          marginRight: '50px'
        }}
      >
        <div className='col'>
          <div className='card border-0'>
            <img
              src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team1.png'
              className='card-img-top'
              alt='...'
              height='200px'
              style={{ width: '200px', margin: '0 auto' }}
            />
            <div className='card-body'>
              <h5
                style={{ cursor: 'pointer' }}
                onMouseOver={e => (e.target.style.color = '#33e29c')}
                onMouseOut={e => (e.target.style.color = '#072366')}
                className='card-title'
              >
                <a
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                  href='https://www.linkedin.com/'
                >
                  {' '}
                  Bruce Roberts
                </a>
              </h5>
              <p className='card-text'>Volunteer leader</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card border-0'>
            <img
              src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team2.png'
              className='card-img-top'
              alt='...'
              height='200px'
              style={{ width: '200px', margin: '0 auto' }}
            />
            <div className='card-body'>
              <h5
                style={{ cursor: 'pointer' }}
                onMouseOver={e => (e.target.style.color = '#33e29c')}
                onMouseOut={e => (e.target.style.color = '#072366')}
                className='card-title'
              >
                <a
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                  href='https://www.linkedin.com/'
                >
                  {' '}
                  Brendon Tailor
                </a>
              </h5>

              <p className='card-text'>Volunteer leader</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card border-0'>
            <img
              src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team3.png'
              className='card-img-top'
              alt='...'
              height='200px'
              style={{ width: '200px', margin: '0 auto' }}
            />
            <div className='card-body'>
              <h5
                style={{ cursor: 'pointer' }}
                onMouseOver={e => (e.target.style.color = '#33e29c')}
                onMouseOut={e => (e.target.style.color = '#072366')}
                className='card-title'
              >
                <a
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                  href='https://www.linkedin.com/'
                >
                  {' '}
                  Brendon Tailor
                </a>
              </h5>
              <p className='card-text'>Volunteer leader</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card border-0'>
            <img
              src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team4.png'
              className='card-img-top'
              alt='...'
              height='200px'
              style={{ width: '200px', margin: '0 auto' }}
            />
            <div className='card-body'>
              <h5
                style={{ cursor: 'pointer' }}
                onMouseOver={e => (e.target.style.color = '#33e29c')}
                onMouseOut={e => (e.target.style.color = '#072366')}
                className='card-title'
              >
                <a
                  target='_blank'
                  style={{ textDecoration: 'none' }}
                  href='https://www.linkedin.com/'
                >
                  {' '}
                  Walshr Hasgt
                </a>
              </h5>
              <p className='card-text'>Volunteer leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteer
