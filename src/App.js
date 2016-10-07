import React from 'react';
import NavBar from './components/NavBar';
import Jumbotrom from './components/Jumbotrom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  flatButton: {

  },
  raisedButton: {

  }
});

class App extends React.Component {
	constructor (props) {
  	super(props);
    this.displayName = 'App';
  }
  render() {
  	return (
  		<MuiThemeProvider muiTheme={muiTheme}>
	  		<div>
	  			<NavBar/>
	  			<Jumbotrom />
          <AboutMe />
          <Projects />
          <Contact />
	  		</div>
  		</MuiThemeProvider>
  	);
  }
}

export default App;
