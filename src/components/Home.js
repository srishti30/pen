import React, { Component } from 'react';
import {Jumbotron} from './Jumbotron';
// import { Link } from 'react-router-dom';
import Carousel from "./Carousel";
import Courses from "./Courses";
import Blogs from "./Blogs";
  
   class Home extends Component {
       
       render() { 
            
            return (
              <React.Fragment>
              <Jumbotron></Jumbotron>
              
              <div className="container">
              
              
      
<div className="row">
<div className="col-sm-3">
<div className="card" style={{width: "18rem"}}>
              <img src="https://blog.commlabindia.com/wp-content/uploads/2018/10/Best-practices-to-design-formative-assessments.jpg" alt="" className="card-img-top"/>
              <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, beatae, adipisci ut recusandae
               pariatur quia impedit sequi, ab quisquam accusantium deserunt facere velit obcaecati dolorem optio doloremque numqua
               m deleniti corrupti!</p></div>
              </div>
              <div className="card" style={{width: "18rem", display: "inline-block"}}>
              <img src="https://coreaxis.com/wp-content/uploads/2019/07/1-1.jpg" alt="" className="card-img-top"/>
              <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, beatae, adipisci ut recusandae
               pariatur quia impedit sequi, ab quisquam accusantium deserunt facere velit obcaecati dolorem optio doloremque numqua
               m deleniti corrupti!</p></div>
              </div>
              </div>
              <div className="col-sm-1"></div>
              <div className="col-sm-8" >
              <body bgcolor="#">
              <div className="container">
              <h5>LEARN YOUR FAVOURITE COURSE FROM ONLINE</h5>
              <blockquote cite="http://www.worldwildlife.org/who/index.html">
              <p><em>We love to teach you!
              PEN is an e-learning app targeted for customers of all age groups.
              Over 7000 tutorials from more than 20 courses
              Age is often associated with a decline in cognitive abilities that are important for maintaining functional independence, such as learning new skills. Many forms of motor learning appear to be relatively well preserved with age, while learning tasks that involve associative binding tend to be negatively affected</em></p>
            <p>Just choose the best course according to your interest</p>
              
</blockquote>
</div>
 
  
  

             
  </body>
  
            </div>
              </div>
              </div>
              <Carousel></Carousel>
              <Courses></Courses>
              <Blogs></Blogs>
              
              </React.Fragment>
                
               
              
            );
       }
   }
    
   export default Home;