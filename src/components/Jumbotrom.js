import React from 'react';
import {FloatingActionButton, RaisedButton} from 'material-ui';
import NavigationDown from 'material-ui/svg-icons/navigation/arrow-drop-down.js';
import {Link, Element, Events, scrollSpy} from 'react-scroll';
class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Jumbotron';
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
    render() {
        return (
        	<header id="home" className="intro" style={{marginTop: 50}}>
                <div className="intro-body">
                    <div className="container" style={{marginTop: 50}}>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <img id="profile" className="img-circle img-responsive" src="../../assets/profile.jpg "/>
                                <br/>
                                <p className="intro-text">
                                    Juan Carlos Ferrel
                                    <br/>
                                    Software Developer
                                </p>

                               <div style={{marginBottom: "25px"}}>
                                <RaisedButton
                                    label="My Resume"
                                    labelColor="white"
                                    labelPosition="before"
                                    backgroundColor={"#EF5350"}
                                    icon={<i style={{color: "white"}}  className="material-icons">insert_drive_file</i>}
                                    href="https://drive.google.com/file/d/0By7yp7jnOQoBTFI4bXRDdWpPRlk/view?usp=sharing"
                                />
                                    
                                </div>
                                <Link style={{display: "inline"}} activeClass="active" to="about" spy={true} smooth={true} offset={150} duration={500} delay={100}>
                                   <FloatingActionButton backgroundColor={"#1d313f"}>
                                        <i className="material-icons">expand_more</i>
                                   </FloatingActionButton>
                                </Link>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Jumbotron;
