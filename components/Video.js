import React, {Component} from 'react';
import { TweenMax, TimelineMax} from "gsap";

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblity: false 
        }

        this.handleModal = this.handleModal.bind(this);
    }
    
    
    componentDidMount(){
      
    }
  
    componentWillUnmount() {
  
    }

    handleModal() {
        const tl = new TimelineMax();
        const sidebar = document.getElementById('side_header')

        this.setState(state => ({      
            visiblity: !state.visiblity    
        }));
    }

    render() {
        return (
            <div>
				<div className="flex justify-between py-6" data-visible={this.state.visiblity} onClick={this.handleModal}>
                    <img src={(this.props.data.flickr) ? this.props.data.flickr.original[0] : ''} className="w-64"/>
				</div>

                <div className={(this.state.visiblity) ? 'h-screen w-full fixed top-0 left-0 bg-black' : 'hidden'} id="side_header">
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+this.props.data.youtube_id} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div>
                        <p>Launch video</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;