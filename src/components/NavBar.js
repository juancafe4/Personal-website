import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavBar';
    }
    render() {
        return (
		    	<nav style={{"float": "right"}}className="navbar navbar-light bg-faded">
					  <ul className="nav navbar-nav">
					    <li className="nav-item active">
					      <FlatButton label="Home" className="nav-link" href="#"/>
					    </li>
					    <li className="nav-item">
					      <FlatButton label="My Projects" className="nav-link" href="#"/>
					    </li>
					    <li className="nav-item">
					      <FlatButton label="Contact" className="nav-link" href="#"/>
					    </li>

					  </ul>
					</nav>
        );
    }
}

export default NavBar;
