import React from 'react';
import "./body.css"
const Body = () => {
  return (
    <div className = "body">
    	<div className = "title-container">
	   	 	<h1 id = "title">Welcome to BBC.com</h1>
	   	</div>
	    <div className = "container-body">	
	    	<div className = "backgroundImages" id = "BimageOne">   		
		    	 <h1 className = "text">Theresa May quits: UK set for new PM by end of July</h1>
	    	</div>
	    	<div className = "backgroundImages" id = "BimageTwo">
	   			  <h1 className = "text">Theresa May: Who will be the next prime minister?</h1>
	    	</div>
	    	<div className = "backgroundImages" id = "BimageThree">
	  			 <h1 className = "text">Surgeons warn of serious hand injuries from dog leads and collars</h1>
	    	</div>
	    	<div className = "backgroundImages" id = "BimageFour">
	  			 <h1 className = "text">It was Alien, more than any previous film, which showed just how effective </h1>
	    	</div>
	    	<div className = "backgroundImages" id = "BimageFive">
	   			 <h1 className = "text">Colombia’s indomitable ‘horse whisperer</h1>
	    	</div>

   		</div>
    </div>
  )
}

export default Body;