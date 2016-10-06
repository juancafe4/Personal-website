import React from 'react';

let imgUrl = '../../assets/IMG_2903.jpg';
let style = {"backgroundImage": "url(https://s3-us-west-2.amazonaws.com/juancafe2/IMG_2903.jpg)",
"paddingTop": "0px",
"paddingBottom": "0px",
"backgroundSize": "cover",
"background": "contain",
"width": "100%",
"height": "1000px",
"maxWidth":"1400px"
}

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Jumbotron';
    }
    render() {
        return (
        	<header className="intro">
                <div className="intro-body">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Jumbotron;
