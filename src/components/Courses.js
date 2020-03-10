import React, { Component } from 'react';
import './Courses.css';
class Courses extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container text-center">
            <h3>THE Courses</h3>
            <p><em>We love to teach you!</em></p>
            <p>Just choose the best course according to your interest</p>
            <br/>
            <div class="row">
              <div class="col-sm-4">
                <p><strong>Name</strong></p><br/>
                <img src="bandmember.jpg" alt="Random Name"/>
              </div>
              <div class="col-sm-4">
                <p><strong>Name</strong></p><br/>
                <img src="bandmember.jpg" alt="Random Name"/>
              </div>
              <div class="col-sm-4">
                <p><strong>Name</strong></p><br/>
                <img src="bandmember.jpg" alt="Random Name"/>
              </div>
               <div className="container">
               <p><em>We love to teach you!</em></p>
              <p>Just choose the best course according to your interest</p>
            <br/>
               </div>


             
              
            </div>
          </div>
  


         );
    }
}
 
export default Courses;