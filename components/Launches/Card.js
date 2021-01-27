import React, {Component} from 'react';

import Link from 'next/link';


class Card extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        const banner = (!this.props.data.links.flickr.original[0])
            ? 
                <div className="bg-black inset-0 w-full h-48 object-cover rounded-md flex ">
                    <img src="./images/spacex_logo.svg" className="w-2/3 mx-auto"/>
                </div>
            : 
                <img src={this.props.data.links.flickr.original[0]} alt="Mission image" className="inset-0 w-full h-48 object-cover rounded-md" />
       
       
        return (
            <div className="mb-12">
                <div className="flex-none">
                    <Link href={"launches/"+this.props.data.id}>
                        <a>
                            {banner}
                        </a>
                    </Link>
                    
                </div>
                
                <div className="flex items-start mt-4">
                    <div className="">
                        <Link href={"launches/"+this.props.data.id}>
                            <a>
                                <img src={(this.props.data.links.patch.small) ? this.props.data.links.patch.small : './images/default/patch.svg'} alt="Mission patch" className="w-24 object-cover"/>
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col ml-4">
                        <Link href={"launches/"+this.props.data.id}><a className="font-bold text-white hover:text-red-400">{this.props.data.name}</a></Link>
                        <a className="text-gray-400 hover:text-red-400">{this.props.data.launchpad.full_name}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;