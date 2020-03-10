import React, { Component } from 'react';
class Blogs extends Component {
   
    render() { 
        return ( 
            <div className="container-fluid text-center bg-grey">
  <h2>Portfolio</h2>
  <h4>What we have created</h4>
  <div class="row text-center">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="paris.jpg" alt="Paris"/>
        <p><strong>Paris</strong></p>
        <p>Yes, we built Paris</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="newyork.jpg" alt="New York"/>
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="sanfran.jpg" alt="San Francisco"/>
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
</div>
</div>

         );
    }
}
 
export default Blogs;
