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
        					<Thumbnail style={styleThumbnail} href="#" alt="RemindME" src="../../assets/remindMe.png">
        							<h3 style={{color: "white", textTransform: "none"}}>RemindME</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<RaisedButton
					        					style={style}
					        					className="social"
					                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
					               		labelColor="#c7d9e1"
					                  backgroundColor="#05080b" 
					                  href="https://github.com/juancafe4/RemindMEiOS"
			                		/>
        								</li>
        							</ul>
        					</Thumbnail>
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail style={styleThumbnail} href="#" alt="PolyBookShare" src="../../assets/polyBookShare.jpg">
        							<h3 style={{color: "white", textTransform: "none"}}>PolyBookShare</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<RaisedButton
					        					style={style}
					        					className="social"
					                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
					               		labelColor="#c7d9e1"
					                  backgroundColor="#05080b" 
					                  href="https://github.com/juancafe4/CampusBookShare"
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
					                  href="https://github.com/juancafe4/felp-yelp-for-farmers-market"
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
        									<a target="_blank" href="https://github.com/FigsAndRice/BookShare-App" >
	        									<RaisedButton
						        					style={style}
						        					className="social"
						                	label={<i style={{color: "#c7d9e1", fontSize:"xx-large"}}className="fa fa-github" aria-hidden="true"></i>}
						               		labelColor="#c7d9e1"
						               		href="https://github.com/FigsAndRice/BookShare-App"
						                  backgroundColor="#05080b" 
						                  
				                		/>

        									</a>
        									
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
