import React from 'react'
import "./Loader.css"; // Import your custom loader styles

const Loader = () => {
    return (
        <div>
             <div className="loader-container">
          <div className="custom-loader">
            <div className="spinner-border" role="status">
              <span className="sr-only">...</span>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Loader;