import React from 'react'
import { MdOutlineCleanHands } from "react-icons/md";
const Mission = () => {
  return (
    <div
      style={{ background: '#F8FCFF', height: '600px'  }}
      className='container-fluid '
    >
      <p style={{ color: '#33e29c', paddingTop: '80px', fontWeight: 'bold' }}>
        What We Are Doing
      </p>
      <h2 style={{ color: '#072366', fontSize: '40px' }}>
        We Are In A Mission To <br></br>Help The Helpless
      </h2>
      <div className='row d-flex align-items-center justify-content-center g-4 ' style={{  marginTop: '40px' }}>
        <div className='col-md-3'>
          <div className='card' style={{marginRight:'50px'}}>
            <div className='card-body'>
            <MdOutlineCleanHands color='#33e29c' size='50px' />
              <h3>Clean Water</h3>
              <p>The sea Freight service has grown has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card' style={{ background: '#09cc7f', color: 'white',marginRight:'50px' }}>
            <div className='card-body'>
            <MdOutlineCleanHands color='white' size='50px'/>
              <h3>Clean Water</h3>
              <p>The sea Freight service has grown has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card' style={{marginRight:'50px'}}>
            <div className='card-body'>
            <MdOutlineCleanHands color='#33e29c' size='50px'/>
              <h3>Clean Water</h3>
              <p>The sea Freight service has grown has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Mission
