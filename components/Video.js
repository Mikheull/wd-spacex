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
				<div className="flex justify-between py-6 relative" data-visible={this.state.visiblity} onClick={this.handleModal}>
                    <img src={(this.props.data.flickr) ? this.props.data.flickr.original[0] : ''} className="w-full rounded-lg"/>
                    <span className="absolute top-2/4 left-2/4"> <img src="/images/icons/play-circle.svg" className="w-16" /></span>
				</div>

                <div className={(this.state.visiblity) ? 'h-screen w-full fixed top-0 left-0 bg-gray-900 flex flex-col z-30' : 'hidden'} id="side_header">
                    <div className="h-1/6 flex justify-end">
                        <span onClick={this.handleModal} className="p-10 cursor-pointer"> <img src="/images/icons/x-circle.svg" className="w-8" /></span>
                    </div>
                    
                    <div className="h-4/6 flex items-center justify-center">
                        <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+this.props.data.youtube_id} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    
                    <div className="h-1/6 bg-gray-800 flex items-center justify-center">
                        <p className="text-3xl font-black uppercase text-white">Video of the launch</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;