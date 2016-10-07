import React from 'react';
class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AboutMe';
    }
    render() {
        return (
        	<section style={{color: "white"}} id="about" className="container content-section text-center">
        		<div className="row">
        			<div className="col-lg-8 col-lg-offset-2">
        				<h2>About Me</h2>
        				<p>
        					My name is Juan Carlos Ferrel, a recent Computer Science graduate from Cali Poly SLO, California. I grew up in Bolivia until I decided to move to the United States to finish my sutdies. My passions at the time were Math and Computer Science, and I was stuck between the two. Ultimately, I committed to Computer Science because of inspiration that I gained from a C++ class. I loved the idea of solving real life problems and helping others through software.
        				</p>
        				<p>
        					I am always willing to explore and learn new things, and I love that Computer Science has no limits to exploration. I love Mobile and Web Development and have worked on various web projects and two mobile applications for iOS and Android. My favorite languages are Python and JavaScript due to their explicit syntax and amount of resources available for them.
        				</p>
        				<p>
        					In my free time, I like to read random articles on the Internet, mostly science and technology articles. I also spend time reading questions and articles on Quora and Stack Overflow. My other other interest is cooking, for which I like to experiment by trying new recipes.
        				</p>
        				
        			</div>
        		</div>
        	</section>
        );
    }
}

export default AboutMe;
