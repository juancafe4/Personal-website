import React from 'react';
import {Thumbnail} from 'react-bootstrap';
import {RaisedButton} from 'material-ui'
const style = {
	border: "2px solid #c7d9e1",
}

const styleThumbnail = {
	backgroundColor:"#05080b",
}
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Projects';
    }
    render() {
        return (
        	<section id="projects" className="content-section text-center">
        		<div className="container">
        			<h1>My Projects</h1>

        			<div className="row">
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail style={styleThumbnail} href="#" alt="RemindME" src="https://image.freepik.com/free-icon/macos-platform_318-33076.png">
        							<h3 style={{color: "white", textTransform: "none"}}>RemindME</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<RaisedButton
					        					style={style}
					        					className="social"
					                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
					               		labelColor="#c7d9e1"
					                  backgroundColor="#05080b" 
					                  href="https://www.github.com/juancafe4"
			                		/>
        								</li>
        							</ul>
        					</Thumbnail>
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail style={styleThumbnail} href="#" alt="PolyBookShare" src="https://cnet4.cbsistatic.com/hub/i/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg">
        							<h3 style={{color: "white", textTransform: "none"}}>PolyBookShare</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<RaisedButton
					        					style={style}
					        					className="social"
					                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
					               		labelColor="#c7d9e1"
					                  backgroundColor="#05080b" 
					                  href="https://www.github.com/juancafe4"
			                		/>
        								</li>
        							</ul>
        					</Thumbnail>
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail style={styleThumbnail} href="#" alt="Felp" src="../../assets/felp.png">
        							<h3 style={{color: "white", textTransform: "none"}}>Felp</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<RaisedButton
					        					style={style}
					        					className="social"
					                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
					               		labelColor="#c7d9e1"
					                  backgroundColor="#05080b" 
					                  href="https://www.github.com/juancafe4"
			                		/>
        								</li>
        							</ul>
        					</Thumbnail>
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail style={styleThumbnail} href="#" alt="Felp" src="../../assets/bookFinder.png">
        							<h3 style={{color: "white", textTransform: "none"}}>BookShare</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<RaisedButton
					        					style={style}
					        					className="social"
					                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
					               		labelColor="#c7d9e1"
					                  backgroundColor="#05080b" 
					                  href="https://www.github.com/juancafe4"
			                		/>
        								</li>
        							</ul>
        					</Thumbnail>
        				</div>
        			</div>
        		</div>
        	</section>
        )
    }
}

export default Projects;
