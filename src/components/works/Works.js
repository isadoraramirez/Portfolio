import React from 'react';
import Zoom from 'react-reveal/Zoom'

const Works = () => {
    return(
        <div className="bck_black">
          <div className="center_wrapper pricing_section">
                    <h2>Projects</h2>
        <div className="center_wrapper">
  
          <div className="vn_wrapper">
  
          <Zoom duration={500}> 
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  
                  <div className="vn_title">
                    titulo
                  </div>
                  <div className="vn_desc">
                  descripcion
                  </div>
                </div>
              </div>
            </div>
            </Zoom>
            <Zoom duration={500} delay={500}> 
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  
                  <div className="vn_title">
                   titulo
                  </div>
                  <div className="vn_desc">
                    descripcion
                  </div>
                </div>
              </div>
            </div>
            </Zoom> 
          </div>
  
        </div>
      </div>
      </div>

    )
}

export default Works;