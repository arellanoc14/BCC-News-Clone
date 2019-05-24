import React from 'react';
import MdAccountCircle from "react-icons/lib/md/account-circle";
import MdYoutubeSearchedFor from "react-icons/lib/md/youtube-searched-for"
import "./navbar.css";
const Navbar = () => {
  return (
    <div className = "nav">
    	<img src = "https://pmcvariety.files.wordpress.com/2014/01/bbc-logo.jpg?w=1000"/>
    	<MdAccountCircle 
    		id = "icon"
    	/>
    	<div className = "menu">
	    	<div className = "topbar">Home</div>
	    	<div className = "topbar">News</div>
	    	<div className = "topbar">Sport</div>
	    	<div className = "topbar">Weather</div>
	    	<div className = "topbar">Shop</div>
	    	<div className = "topbar">Reel</div>
	    	<div className = "topbar">Travel</div>
	    	<div className = "topbar">Capital</div>
	    	<div className = "topbar">More</div>
	    </div>
	    <div className = "form">
		    <form>
		    	<input />
		    	<MdYoutubeSearchedFor />
		    </form>

		</div>
		<div>
			 
		</div>
    </div>
  )
}

export default Navbar;