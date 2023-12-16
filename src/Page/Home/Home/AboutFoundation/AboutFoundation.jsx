import React from 'react';
import './AboutFoundation.css'; 

const AboutFoundation = () => {
  return (
    <div className="about-foundation-container">
      <div className="main-content">
        <p style={{ color: '#33e29c', paddingTop: '80px', fontWeight: 'bold' }}>
          About Our Foundation
        </p>
        <h2 style={{ color: '#072366', fontSize: '40px' }}>
          We Are In A Mission To<br></br>Help Helpless
        </h2>

        <p style={{ marginBottom: '40px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
          soluta sunt<br></br> reiciendis eveniet quam hic deleniti perspiciatis quod
          delectus.
        </p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quos<br></br> est rem magnam asperiores debitis!</p>
        <div>
          <button className='btn btn-change7'>About us</button>
        </div>
      </div>

      <div className="image-container">
        <img className='img1' src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/about1.png' alt='About 1' />
        <img className='img2' src='https://preview.colorlib.com/theme/charityworks/assets/img/gallery/about2.png' alt='About 2' />
      </div>
    </div>
  );
}

export default AboutFoundation;
