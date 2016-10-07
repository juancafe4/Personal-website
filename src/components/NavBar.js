import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
	backgroundColor: "white",
	color: "#EF5350",
}
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';
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
					  		
					  		<FlatButton label={<i className="material-icons">expand_less</i>} labelStyle={{color: "#EF5350"}} className="nav-link" href="#"/>
					  		
					  	</div>
					  	{/* Content */}
					  	<div className="collapse navbar-collapse navbar-right navbar-main-collapse">
					  		<ul className="nav navbar-nav">
							    <li className="nav-item active">
							      <FlatButton label="Home" labelStyle={{color: "#EF5350"}} className="nav-link" href="#"/>
							    </li>
							    <li className="nav-item active">
							      <FlatButton label="About Me" labelStyle={{color: "#EF5350"}} className="nav-link" href="#"/>
							    </li>
							    <li className="nav-item">
							      <FlatButton label="My Projects" labelStyle={{color: "#EF5350"}}  className="nav-link" href="#"/>
							    </li>
							    <li className="nav-item">
							      <FlatButton label="Contact" labelStyle={{color: "#EF5350"}}  className="nav-link" href="#"/>
							    </li>
							  </ul>
					  	</div>
					  </div>
					</nav>
        );
    }
}

export default NavBar;
