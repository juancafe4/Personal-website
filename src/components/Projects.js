import React from 'react';
import {Thumbnail} from 'react-bootstrap';
import {RaisedButton} from 'material-ui'
const style = {
	border: "2px solid #c7d9e1",
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
        					<Thumbnail style={{backgroundColor:"#05080b" }} href="#" alt="171x180" src="http://cdn.macrumors.com/article-new/2012/10/appstorelogo.jpg">
        							<h3 style={{color: "white", textTransform: "none"}}>RemindME</h3>
        							<ul className="list-inline banner-social-buttons">
        								<li>
        									<IconButton
					        					style={style}
					        					className="social"
					                  backgroundColor="#05080b" 
					                  iconClassName="fa-twitter" 
					                  href="https://twitter.com/juancafe2"
					                  />
					                
        								</li>
        							</ul>
        					</Thumbnail>
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail href="#" alt="171x180" src="http://cdn.macrumors.com/article-new/2012/10/appstorelogo.jpg" />
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail href="#" alt="171x180" src="http://cdn.macrumors.com/article-new/2012/10/appstorelogo.jpg" />
        				</div>
        				<div className="col-xs-12 col-md-3">
        					<Thumbnail href="#" alt="171x180" src="http://cdn.macrumors.com/article-new/2012/10/appstorelogo.jpg" />
        				</div>{}
        			</div>
        		</div>
        	</section>
        )
    }
}

export default Projects;
