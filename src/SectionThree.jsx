import React from 'react';
import './SectionThree.css';
import MdArrowForward from "react-icons/lib/md/arrow-forward";
const SectionThree = () => {
  return (
    <div className = "SectionThree">
    	<button id = "sectionThreeBtn">
    		Visit Reel
    		<MdArrowForward
    			style = {{width:"20px",height:"17px"}}
    		 />
    	</button>
    	<div className = "SectionThree-Container">	
	    	
	    	<div className = "SectionThreeImgs" id = "SectionThreeimageOne">
	    		<img className = "SectionThreeImg"
	    		 src = "https://ichef.bbci.co.uk/images/ic/272x153/p07b88kb.jpg"/>
	    		 <p>A beauty pageant that celebrates curves</p>
	    	</div>

	    	<div className = "SectionThreeImgs"  id = "SectionThreeimageTwo">
	    		<img  className = "SectionThreeImg"
	    		src = "https://ichef.bbci.co.uk/images/ic/272x153/p07b7pjb.jpg"/>
	    		<p>A beauty pageant that celebrates curves</p>
	    	</div>

	    	<div className = "SectionThreeImgs" id = "SectionThreeimageThree">
	    		<img  className = "SectionThreeImg"
	    		src = "https://ichef.bbci.co.uk/images/ic/272x153/p0759c9h.jpg"/>
	    		<p>The ship lost for more than 300 years</p>
	    	</div>
	    </div>
    </div>
  )
}

export default SectionThree;