import React from 'react';
import {RaisedButton} from 'material-ui';

const style = {
	border: "2px solid #c7d9e1",
}
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contact';
    }
    render() {
        return (
        	<section id="contact" className="container content-section text-center">
        			<h1>Contact Information</h1>
        			<p>Feel free to contact me at anytime!</p>

        			<p>
									<RaisedButton
										className="social"
	        					style={style}
	                	label={<span className="network-name">juancafe2@gmail.com</span>}
	               		labelColor="#c7d9e1"
	                	labelPosition="after"
	                  icon={<i style={{color: "#c7d9e1"}}className="fa fa-envelope-o" aria-hidden="true"></i>}
	                  backgroundColor="#05080b" 
	                  href="mailto:juancafe2@gmail.com"
                	/>
        				
        				<br/>
        				<br/>
        				
        				<ul className="list-inline banner-social-buttons">
        					<li>
        						<RaisedButton
		        					style={style}
		        					className="social"
		                	label={<span className="network-name">Twitter</span>}
		               		labelColor="#c7d9e1"
		                	labelPosition="after"
		                  icon={<i style={{color: "#c7d9e1"}}className="fa fa-twitter" aria-hidden="true"></i>}
		                  backgroundColor="#05080b" 
		                  href="https://twitter.com/juancafe2"
                		/>
        					</li>
        					<li>
        						<RaisedButton
		        					style={style}
		        					className="social"
		                	label={<span className="network-name">Facebook</span>}
		               		labelColor="#c7d9e1"
		                	labelPosition="after"
		                  icon={<i style={{color: "#c7d9e1"}}className="fa fa-facebook" aria-hidden="true"></i>}
		                  backgroundColor="#05080b" 
		                  href="https://www.facebook.com/juan.c.ferrel"
                		/>
        					</li>
        					<li>
        						<RaisedButton
		        					style={style}
		        					className="social"
		                	label={<span className="network-name">Github</span>}
		               		labelColor="#c7d9e1"
		                	labelPosition="after"
		                  icon={<i style={{color: "#c7d9e1"}}className="fa fa-github" aria-hidden="true"></i>}
		                  backgroundColor="#05080b" 
		                  href="https://www.github.com/juancafe4"
                		/>
        					</li>
        					<li>
        						<RaisedButton
		        					style={style}
		        					className="social"
		                	label={<span className="network-name">LinkedIn</span>}
		               		labelColor="#c7d9e1"
		                	labelPosition="after"
		                  icon={<i style={{color: "#c7d9e1"}}className="fa fa-linkedin" aria-hidden="true"></i>}
		                  backgroundColor="#05080b" 
		                  href="https://www.linkedin.com/in/juan-carlos-ferrel-1598768a"
                		/>
        					</li>
        				</ul>
        			</p>
        	</section>
        );
    }
}

export default Contact;
