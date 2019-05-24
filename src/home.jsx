import React from 'react';
import Navbar from './navbar';
import Body from './body';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
const Home = (props) => {
  return (
    <div>
    	<Navbar />
    	<Body />
    	<SectionTwo />
    	<SectionThree />
    </div>
  )
}

export default Home;