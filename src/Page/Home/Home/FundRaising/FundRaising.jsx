import React from 'react'
import CountUp from 'react-countup'
import './FundRaising.css'
const FundRaising = () => {
  return (
    <div  civ
    style={{
      background: '#19C075',
      paddingTop: '20px',
      marginBottom: '50px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontWeight: 'bold',
      marginTop: '50px'
    }}
      className='container'
    >
      <div className='row' style={{ color: '#FFFFFF' }}>
        <div className='col-md-4 mb-4'>
          <div className=' p-3 text-center'>
            <span style={{ color: '#FFFFFF', fontSize: '30px' }}>
              <CountUp delay={5} start={0} end={6200} />+
            </span>
            <h3 style={{ color: '#C8C8C8', fontSize: '15px' }}>Donation </h3>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className=' p-3 text-center'>
            <span style={{ color: '#FFFFFF', fontSize: '30px' }}>
              <CountUp delay={5} start={0} end={256} />+
            </span>
            <h3 style={{ color: '#C8C8C8', fontSize: '15px' }}>Fund Raised</h3>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className=' p-3 text-center'>
            <span style={{ color: '#FFFFFF', fontSize: '30px' }}>
              <CountUp delay={5} start={0} end={250} />+
            </span>
            <h3 style={{ color: '#C8C8C8', fontSize: '15px' }}>Donation </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundRaising
