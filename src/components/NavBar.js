import React from 'react';
import Jumbotrom from './Jumbotrom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import FlatButton from 'material-ui/FlatButton';
import {Link, Element, Events, scrollSpy, animateScroll} from 'react-scroll';
const style = {
	backgroundColor: "white",
	color: "#EF5350",
}
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
	    Events.scrollEvent.register('begin', function(to, element) {
	      console.log("begin", arguments);
	    });

	    Events.scrollEvent.register('end', function(to, element) {
	      console.log("end", arguments);
	    });

		  scrollSpy.update();
	  }
	  componentWillUnmount() {
	    Events.scrollEvent.remove('begin');
	    Events.scrollEvent.remove('end');
	  }
	  scrollToTop(e) {
	  	animateScroll.scrollToTop()
	  }
    render() {
        return (
        	<nav style={style} className="navbar navbar-custom navbar-fixed-top top-nav-collapse" role="navigation">
						  <div className="container">
						  	{/*Header */}
						  	<div className="navbar-header">
						  		<button type="button" className="navbar-toggle" data-toggle="collapse"	data-target= ".navbar-main-collapse">
						  			<i style={{color: "#EF5350"}} className="material-icons">more_vert</i>
						  		</button>
						  		
						  		<FlatButton onClick={this.scrollToTop} label={<i className="material-icons">expand_less</i>} labelStyle={{color: "#EF5350"}} className="nav-link" />
						  		
						  	</div>
						  	{/* Content */}
						  	<div className="collapse navbar-collapse navbar-right navbar-main-collapse">
						  		<ul className="nav navbar-nav">
								    <li className="nav-item active">
								    	<Link style={{display: "inline"}} activeClass="active" to="home" spy={true} smooth={true}  duration={500} delay={500}>
								      	<FlatButton label="Home" labelStyle={{color: "#EF5350"}} className="nav-link" href="#"/>
								    	</Link>
								    </li>
								    <li className="nav-item">
								      <Link style={{display: "inline"}} activeClass="active" to="about" spy={true} smooth={true} offset={150} duration={500} delay={500}>
								      	<FlatButton label="About Me" labelStyle={{color: "#EF5350"}} className="nav-link" href="#"/>
								      </Link>
								      	      
								    </li>
								    <li className="nav-item">
								    	<Link style={{display: "inline"}} activeClass="active" to="projects"  smooth={true} offset={150} duration={500} delay={500}>
								      	<FlatButton label="My Projects" labelStyle={{color: "#EF5350"}}  className="nav-link" href="#"/>
								      </Link>
								    </li>
								    <li className="nav-item">
								    	<Link style={{display: "inline"}} activeClass="active" to="contact"  smooth={true} offset={150} duration={500} delay={500}>
								      	<FlatButton label="Contact" labelStyle={{color: "#EF5350"}}  className="nav-link" href="#"/>
								      </Link>
								    </li>
								  </ul>
						  	</div>
						  </div>
						</nav>				
					
        );
    }
}

export default NavBar;
