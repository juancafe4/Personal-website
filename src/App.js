import React from 'react';
import NavBar from './components/NavBar'
import Jumbotrom from './components/Jumbotrom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from 'material-ui'
injectTapEventPlugin();
class App extends React.Component {
	constructor (props) {
  	super(props);
    this.displayName = 'App';
  }
  render() {
  	return (
  		<MuiThemeProvider>
	  		<div>
	  			<NavBar/>
	  			<Jumbotrom />
	  		</div>
  		</MuiThemeProvider>
  	);
  }
}

export default App;
