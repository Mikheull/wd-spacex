import React, {Component} from 'react';

import Link from 'next/link';


class CrewSlide extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className="flex flex-col justify-end rounded-md" style={{backgroundImage: `url(${this.props.data.image})`, backgroundSize: "cover", height: "500px"}} >
                <div className="flex flex-col justify-end p-8">
                    <div className="flex items-center">
                        <a href={this.props.data.wikipedia} target="_blank" className="text-4xl text-white font-black mb-2">{this.props.data.name}</a>
                        <span class="flex h-3 w-3 ml-6">
                            <span className={(this.props.data.status == 'active') ? 'animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400' : 'animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400' }></span>
                            <span className={(this.props.data.status == 'active') ? 'relative inline-flex rounded-full h-3 w-3 bg-green-500' : 'relative inline-flex rounded-full h-3 w-3 bg-red-500' }></span>
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-300">{this.props.data.agency}</p>
                </div>
            </div>
        )
    }
}

  
export default CrewSlide;