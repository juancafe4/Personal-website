import React from 'react';
import {FloatingActionButton, RaisedButton} from 'material-ui';
import NavigationDown from 'material-ui/svg-icons/navigation/arrow-drop-down.js';
class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Jumbotron';
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

                               <FloatingActionButton backgroundColor={"#1d313f"}>
                                    <i className="material-icons">expand_more</i>
                               </FloatingActionButton>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Jumbotron;
