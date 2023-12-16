import React from 'react'

const Banner = () => {
  const backgroundImageUrl =
    'https://assets-global.website-files.com/620b49c1cf612619f1db6e54/6262a16338cf1c1d37d966c6_bgDotedTriangle.svg'
  return (
    <div
      style={{
        background: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F1F2F3',height: '500px' 
      }}
      className='container-fluid '

    >
      <div className='row'>
        <div className='col-lg-6 mt-lg-0 mt-7'>
          <div>
            <h2
              style={{
                fontSize: '65px',
                marginTop: '100px',
                marginLeft: '80px',
                color: '#072366'
              }}
            >
              Our Helping To <br></br> The World.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, aliquam.
            </p>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-change7'>Donate</button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <img
            style={{ marginTop: '15px' }}
            height='380'
            src='https://www.kabukyetrust.org/wp-content/uploads/2022/08/our-w.png'
            alt='Banner'
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
