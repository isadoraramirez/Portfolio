import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Description extends Component {

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
        

          <Slide right>
            <div className="discount_description">
              <h3>Sobre mi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis sunt
                quasi eaque commodi molestiae amet, officia dolores modi accusamus!</p>

             
            </div>
          </Slide>

        </div>
      </div>
    )
  }
}


export default Description;