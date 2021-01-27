import React, {Component} from 'react';
import { TweenMax, TimelineMax} from "gsap";

// Components
import Link from 'next/link'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblity: false 
        }

        this.handleMenu = this.handleMenu.bind(this);
    }
    
    
    componentDidMount(){
      
    }
  
    componentWillUnmount() {
  
    }

    handleMenu() {
        const tl = new TimelineMax();
        const sidebar = document.getElementById('side_header')

        this.setState(state => ({      
            visiblity: !state.visiblity    
        }));
    }

    render() {
        return (
            <header className="container mx-auto">
				<div className="flex justify-between py-6">
					<a href="#" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline z-10">Mika SpaceX</a>
					<button className="rounded-lg focus:outline-none focus:shadow-outline z-10" data-visible={this.state.visiblity} onClick={this.handleMenu}>
						<svg fill="#FFF" viewBox="0 0 20 20" className="w-6 h-6">
							<path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</button>
				</div>

                <div className={(this.state.visiblity) ? 'h-screen w-full fixed top-0 left-0 bg-black' : 'hidden'} id="side_header">
                    <ul className="flex flex-col py-6 h-screen items-center justify-center gap-10">
                        <li className="text-white">
                            <Link href="/"><a className="text-3xl font-bold uppercase text-white hover:text-red-400 mb-10">Home</a></Link>
                        </li>
                        <li className="text-white">
                            <Link href="/launches"><a className="text-3xl font-bold uppercase text-white hover:text-red-400 mb-10"><span className="font-black mr-4">01/</span> Launches</a></Link>
                        </li>
                        <li className="text-white">
                            <Link href="/starlink"><a className="text-3xl font-bold uppercase text-white hover:text-red-400 mb-10"><span className="font-black mr-4">02/</span> Starlink</a></Link>
                        </li>
                        <li className="text-white">
                            <Link href="/next"><a className="text-3xl font-bold uppercase text-white hover:text-red-400 mb-10"><span className="font-black mr-4">03/</span> Upcoming</a></Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;